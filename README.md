#  Enhanced React Calculator (with Aider AI)
Lujain Ahmad - 202201738
##  Overview
This project is an enhanced version of the open-source [React Calculator], extended using the **Aider AI assistant**. The enhancements include new features, code improvements, and automated testing — all guided by natural language prompts.

##  New Features Implemented

###  1. Memory Functions
- **M+**: Add current value to memory
- **M-**: Subtract current value from memory
- **MR**: Recall memory value
- **MC**: Clear memory
- **Visual Feedback** for active memory

###  2. Dark Mode Toggle
- Switch between **light** and **dark** themes using a toggle button
- Uses `useState` and class-based styling

##  Why These Features?
- Memory is a common calculator feature, missing in the base version
- Dark mode enhances accessibility and user preference

##   Implementation Process
- Used Aider to understand the original component flow
- Broke tasks into modular steps and applied prompt engineering
- Ran iterative Aider sessions with `/diff`, `/ask`, `/test`, `/commit`

##  Files Modified
- `src/components/App.js`
- `src/components/ButtonPanel.js`
- `src/components/Button.js`
- `src/App.css` (for dark mode)

##  Testing
- Aider generated new unit tests for memory logic
- Manual UI testing via `npm start`

##  Aider Commands Used
- `/add`, `/ask`, `/diff`, `/commit`, `/test`, `/run`, `/edit`, `/explain`
- Saved in `aider_chat_history.txt`
