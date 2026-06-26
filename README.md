# Organized Personal To-Do List 

A premium, highly interactive, and visually stunning To-Do List application built with **React** and **Vite**. The application features a glassmorphic sidebar layout, dynamic list categorization, priority tagging, inline task editing, and local storage persistence.

---

## ✨ Key Features

- **📂 Custom Categorization**: Organize your tasks into lists of your choice. Create, select, rename, or delete lists dynamically.
- **✅ Completion Tracking**: Easy checkbox option to mark tasks as completed. Completed tasks automatically move to the bottom of the list with smooth strike-through and fading animations.
- **✍️ Inline Task Updates**: Edit existing tasks directly inside the list with dedicated actions. Hit **Enter** to save changes or **Escape** to cancel.
- **❌ Task & Category Deletion**: Direct deletion of tasks and custom lists at any time with a clean red action button. Includes verification check prompts to prevent accidental category deletes.
- **⚡ LocalStorage Persistence**: Automatically saves all lists, tasks, and state selections to your browser so that data is retained across page reloads.
- **🎨 Glassmorphic Theme**: A modern dark user interface utilizing deep indigo accents, fluid keyframe animations, responsive sidebar navigation, and custom form controls.

---

## 🛠️ Built With

- **React 19** - Front-end component framework
- **Vite** - High performance asset builder and dev server
- **Vanilla CSS** - Premium dark theme and custom animations
- **Outfit (Google Fonts)** - Modern font family selection

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or above recommended).

### Installation & Run

1. Clone or navigate into the project directory:
   ```bash
   cd to_do_list
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   *The application will launch on your local host (usually `http://localhost:5173/` or `http://localhost:5175/`).*

4. Build the application for production:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
to_do_list/
├── public/
├── src/
│   ├── assets/        # Media assets
│   ├── App.jsx        # Main React component & State logic
│   ├── App.css        # Layout & Glassmorphism styles
│   ├── index.css      # Core theme variables, resets, & animations
│   └── main.jsx       # Application entry point
├── index.html         # Google Fonts integration & HTML template
├── package.json       # Node package manager configurations
└── README.md          # Project documentation
```

---

## 🧬 Key Functions Implemented

All state logic resides within [App.jsx](src/App.jsx):

### Category / List Management
- `handleAddCategory(e)`: Form handler that appends custom categories with user-provided names.
- `handleStartRenameCategory(category, e)`: Sets up editing states for category renaming.
- `handleSaveCategoryName(id)`: Commits updated category names.
- `handleDeleteCategory(id, e)`: Deletes custom lists and their tasks, switching active categories gracefully.

### Task Management
- `handleAddTask(e)`: Validates, configures, and appends a new task (including text and priority value).
- `handleToggleTaskCompletion(id)`: Toggles completion status and triggers strikethrough/fading animations.
- `handleStartEditTask(task)` / `handleSaveTaskText(id)` / `handleCancelEditTask()`: Handles inline text editing triggers.
- `handleDeleteTask(id)`: Deletes selected tasks instantly.
