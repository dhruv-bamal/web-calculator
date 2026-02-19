# 🧮 Web Calculator

A modern, responsive web calculator built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

This project demonstrates DOM manipulation, event handling, state management, and clean UI design using utility-first CSS.

---

## 🚀 Live Demo



---

## 📌 Features

- ✅ Basic arithmetic operations (+, −, ×, ÷)
- ✅ Real-time input display
- ✅ Clear (C) functionality
- ✅ Delete (DEL) last character
- ✅ Decimal number support
- ✅ Keyboard support
- ✅ Error handling (e.g., division by zero)
- ✅ Responsive and modern UI using Tailwind CSS

---

## 🛠️ Tech Stack

| Technology      | Purpose |
|---------------|----------|
| HTML5         | Structure |
| Tailwind CSS  | Styling & Layout |
| JavaScript (ES6) | Logic & Interactivity |
| Git           | Version Control |

---

## 📂 Project Structure

```bash
web-calculator/
│
├── index.html # Main UI structure
├── script.js # Calculator logic
└── README.md # Project documentation
```


---

## ⚙️ How It Works

The calculator maintains three key states:

- `current` → Current number being typed
- `previous` → Previously stored number
- `operator` → Selected arithmetic operation

When:
- A number is clicked → It updates the display
- An operator is selected → The current value is stored
- "=" is pressed → The expression is evaluated
- "C" is pressed → The state resets

All logic is handled using event delegation for clean and scalable code.

---

## 💻 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/web-calculator.git
```

2. Navigate into the folder:

```bash
cd web-calculator
```

3. Open in browser:

```bash
open index.html
```
Or use Live Server in VS Code.