import operate from "./operate";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === "±") {
    if (obj.next) {
      return { ...obj, next: (parseFloat(obj.next) * -1).toString() };
    } else if (obj.total) {
      return { ...obj, total: (parseFloat(obj.total) * -1).toString() };
    }
    return obj;
  }

  if (buttonName === "√") {
    if (obj.next) {
      const value = parseFloat(obj.next);
      if (value < 0) return { ...obj, next: "Error" };
      return { ...obj, next: Math.sqrt(value).toString() };
    } else if (obj.total) {
      const value = parseFloat(obj.total);
      if (value < 0) return { ...obj, total: "Error" };
      return { ...obj, total: Math.sqrt(value).toString() };
    }
    return obj;
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return obj;
    }
  }

  if (["+", "-", "x", "÷"].includes(buttonName)) {
    if (obj.operation && obj.next) {
      const newTotal = operate(obj.total, obj.next, obj.operation);
      return {
        total: newTotal,
        next: null,
        operation: buttonName,
      };
    }

    return {
      total: obj.next || obj.total,
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName === ".") {
    if (obj.next?.includes(".")) return obj;
    return {
      ...obj,
      next: (obj.next || "0") + ".",
    };
  }

  return {
    ...obj,
    next: (obj.next || "") + buttonName,
  };
}
