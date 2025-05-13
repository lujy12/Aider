import React from "react";

const History = ({ history }) => {
  return (
    <div style={{ marginTop: "20px", backgroundColor: "#eee", padding: "10px", borderRadius: "5px" }}>
      <h4>Recent Calculations</h4>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {history.slice(-3).reverse().map((item, index) => (
          <li key={index}>
            <strong>{item.expression}</strong> = {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
