import { useState, useEffect } from 'react'
import './App.css'

// Inline SVG Icon Components for maximum portability and fast loading
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
)

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
)

const UnlockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </svg>
)

const CancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const BrandIconLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"></path>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
)

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
)

// Initial default categories
const DEFAULT_CATEGORIES = [
  { id: 'cat-work', name: 'Work Tasks' },
  { id: 'cat-personal', name: 'Personal Goals' },
  { id: 'cat-shopping', name: 'Shopping List' }
]

// Initial default tasks
const DEFAULT_TASKS = [
  { id: 'task-1', categoryId: 'cat-work', text: 'Initialize Vite React project setup', completed: true, priority: 'high', createdAt: Date.now() },
  { id: 'task-2', categoryId: 'cat-work', text: 'Create sleek styling with Glassmorphism CSS', completed: false, priority: 'high', createdAt: Date.now() + 1 },
  { id: 'task-3', categoryId: 'cat-work', text: 'Implement LocalStorage persistence', completed: false, priority: 'medium', createdAt: Date.now() + 2 },
  { id: 'task-4', categoryId: 'cat-personal', text: 'Go for a 30-minute evening run', completed: true, priority: 'low', createdAt: Date.now() + 3 },
  { id: 'task-5', categoryId: 'cat-personal', text: 'Read two chapters of my book', completed: false, priority: 'medium', createdAt: Date.now() + 4 },
  { id: 'task-6', categoryId: 'cat-shopping', text: 'Organic milk & whole wheat bread', completed: false, priority: 'low', createdAt: Date.now() + 5 }
]

const API_BASE_URL = 'http://localhost:8000'

function App() {
  // --- STATE DECLARATIONS ---
  const [categories, setCategories] = useState([])
  const [tasks, setTasks] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Inputs/Editing state
  const [newCategoryName, setNewCategoryName] = useState('')
  const [editingCategoryId, setEditingCategoryId] = useState(null)
  const [editingCategoryName, setEditingCategoryName] = useState('')

  const [newTaskText, setNewTaskText] = useState('')
  const [newPriority, setNewPriority] = useState('medium')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingTaskText, setEditingTaskText] = useState('')

  // --- FETCH DATA FROM API ---
  const fetchCategoriesAndTasks = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/lists`)
      if (!res.ok) throw new Error('Failed to fetch lists')
      const data = await res.json()

      // If database is completely empty, initialize it with default lists and items
      if (data.length === 0) {
        await initializeDefaultData()
        return
      }

      const loadedCategories = data.map(cat => ({ id: cat.id, name: cat.name }))
      const loadedTasks = []
      
      data.forEach(cat => {
        if (cat.items) {
          cat.items.forEach(item => {
            loadedTasks.push({
              id: item.id,
              categoryId: item.list_id,
              text: item.text,
              completed: item.completed,
              priority: item.priority,
              createdAt: new Date(item.created_at).getTime()
            })
          })
        }
      })

      setCategories(loadedCategories)
      setTasks(loadedTasks)

      // Restore active category selection
      const savedSelect = localStorage.getItem('todo_selected_category_id')
      if (savedSelect && loadedCategories.some(cat => String(cat.id) === String(savedSelect))) {
        const matched = loadedCategories.find(cat => String(cat.id) === String(savedSelect))
        setSelectedCategoryId(matched.id)
      } else if (loadedCategories.length > 0) {
        setSelectedCategoryId(loadedCategories[0].id)
      }
    } catch (err) {
      console.error("Error loading data from API:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // --- AUTO-SEED DATA IN DATABASE IF EMPTY ---
  const initializeDefaultData = async () => {
    try {
      // Create default lists
      const resWork = await fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Work Tasks' })
      })
      const workCat = await resWork.json()

      const resPers = await fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Personal Goals' })
      })
      const persCat = await resPers.json()

      const resShop = await fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Shopping List' })
      })
      const shopCat = await resShop.json()

      // Add default tasks
      await fetch(`${API_BASE_URL}/lists/${workCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Initialize Vite React project setup', priority: 'high' })
      })
      
      const resTask2 = await fetch(`${API_BASE_URL}/lists/${workCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Create sleek styling with Glassmorphism CSS', priority: 'high' })
      })
      const task2 = await resTask2.json()

      await fetch(`${API_BASE_URL}/lists/${workCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Implement PostgreSQL database integration', priority: 'medium' })
      })

      const resTask4 = await fetch(`${API_BASE_URL}/lists/${persCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Go for a 30-minute evening run', priority: 'low' })
      })
      const task4 = await resTask4.json()

      await fetch(`${API_BASE_URL}/lists/${persCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Read two chapters of my book', priority: 'medium' })
      })

      await fetch(`${API_BASE_URL}/lists/${shopCat.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Organic milk & whole wheat bread', priority: 'low' })
      })

      // Set some tasks to completed status to replicate defaults
      await fetch(`${API_BASE_URL}/items/${task2.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      })
      await fetch(`${API_BASE_URL}/items/${task4.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      })

      // Reload
      await fetchCategoriesAndTasks()
    } catch (err) {
      console.error("Error auto-seeding database:", err)
      setIsLoading(false)
    }
  }

  // Load from API on mount
  useEffect(() => {
    fetchCategoriesAndTasks()
  }, [])

  // Persist selected category ID locally
  useEffect(() => {
    if (selectedCategoryId) {
      localStorage.setItem('todo_selected_category_id', selectedCategoryId)
    }
  }, [selectedCategoryId])

  // --- CATEGORY FUNCTIONS ---

  const handleAddCategory = async (e) => {
    e.preventDefault()
    const trimmed = newCategoryName.trim()
    if (!trimmed) return

    try {
      const res = await fetch(`${API_BASE_URL}/lists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmed })
      })
      if (!res.ok) throw new Error('Failed to create category')
      const newCategory = await res.json()
      
      const formattedCat = { id: newCategory.id, name: newCategory.name }
      setCategories([...categories, formattedCat])
      setSelectedCategoryId(formattedCat.id)
      setNewCategoryName('')
    } catch (err) {
      console.error("Error adding category:", err)
      alert("Failed to add category. Please make sure the PostgreSQL server and FastAPI backend are running.")
    }
  }

  const handleStartRenameCategory = (category, e) => {
    e.stopPropagation()
    setEditingCategoryId(category.id)
    setEditingCategoryName(category.name)
  }

  const handleSaveCategoryName = async (id) => {
    const trimmed = editingCategoryName.trim()
    if (!trimmed) return

    try {
      const res = await fetch(`${API_BASE_URL}/lists/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmed })
      })
      if (!res.ok) throw new Error('Failed to update category')
      const updatedCategory = await res.json()

      setCategories(categories.map(cat => cat.id === id ? { ...cat, name: updatedCategory.name } : cat))
      setEditingCategoryId(null)
      setEditingCategoryName('')
    } catch (err) {
      console.error("Error renaming category:", err)
      alert("Failed to rename category.")
    }
  }

  const handleCancelRenameCategory = () => {
    setEditingCategoryId(null)
    setEditingCategoryName('')
  }

  const handleDeleteCategory = async (id, e) => {
    e.stopPropagation()
    
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category? All its tasks will be permanently removed."
    )
    if (!confirmDelete) return

    try {
      const res = await fetch(`${API_BASE_URL}/lists/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error('Failed to delete category')

      const remaining = categories.filter(cat => cat.id !== id)
      if (selectedCategoryId === id) {
        if (remaining.length > 0) {
          setSelectedCategoryId(remaining[0].id)
        } else {
          setSelectedCategoryId('')
        }
      }
      setCategories(remaining)
      setTasks(tasks.filter(task => task.categoryId !== id))
    } catch (err) {
      console.error("Error deleting category:", err)
      alert("Failed to delete category.")
    }
  }

  // --- TASK FUNCTIONS ---

  const handleAddTask = async (e) => {
    e.preventDefault()
    if (!currentCategory) {
      alert("Please select or create a category first!")
      return
    }
    
    const trimmed = newTaskText.trim()
    if (!trimmed) return

    try {
      const res = await fetch(`${API_BASE_URL}/lists/${currentCategory.id}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: trimmed, priority: newPriority })
      })
      if (!res.ok) throw new Error('Failed to add task')
      const newTask = await res.json()

      const formattedTask = {
        id: newTask.id,
        categoryId: newTask.list_id,
        text: newTask.text,
        completed: newTask.completed,
        priority: newTask.priority,
        createdAt: new Date(newTask.created_at).getTime()
      }

      setTasks([...tasks, formattedTask])
      setNewTaskText('')
      setNewPriority('medium')
    } catch (err) {
      console.error("Error adding task:", err)
      alert("Failed to add task.")
    }
  }

  const handleToggleTaskCompletion = async (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    try {
      const res = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed })
      })
      if (!res.ok) throw new Error('Failed to toggle task completion')
      const updatedTask = await res.json()

      setTasks(tasks.map(t => 
        t.id === id ? { ...t, completed: updatedTask.completed } : t
      ))
    } catch (err) {
      console.error("Error toggling task completion:", err)
      alert("Failed to update task completion.")
    }
  }

  const handleStartEditTask = (task) => {
    setEditingTaskId(task.id)
    setEditingTaskText(task.text)
  }

  const handleSaveTaskText = async (id) => {
    const trimmed = editingTaskText.trim()
    if (!trimmed) return

    try {
      const res = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: trimmed })
      })
      if (!res.ok) throw new Error('Failed to edit task text')
      const updatedTask = await res.json()

      setTasks(tasks.map(t => 
        t.id === id ? { ...t, text: updatedTask.text } : t
      ))
      setEditingTaskId(null)
      setEditingTaskText('')
    } catch (err) {
      console.error("Error saving task text:", err)
      alert("Failed to edit task.")
    }
  }

  const handleCancelEditTask = () => {
    setEditingTaskId(null)
    setEditingTaskText('')
  }

  const handleDeleteTask = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error('Failed to delete task')

      setTasks(tasks.filter(t => t.id !== id))
    } catch (err) {
      console.error("Error deleting task:", err)
      alert("Failed to delete task.")
    }
  }

  // --- COMPUTED STATES ---
  const currentCategory = categories.find(cat => cat.id === selectedCategoryId) || categories[0]
  
  const activeCategoryId = currentCategory ? currentCategory.id : selectedCategoryId

  const filteredTasks = tasks.filter(task => task.categoryId === activeCategoryId)
  
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    return a.createdAt - b.createdAt
  })

  const completedCount = filteredTasks.filter(t => t.completed).length
  const totalCount = filteredTasks.length
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)', color: '#ffffff', fontFamily: 'system-ui' }}>
        <div style={{ width: '50px', height: '50px', border: '5px solid rgba(255,255,255,0.1)', borderTopColor: '#00d2ff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: '20px', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', opacity: 0.8 }}>Loading Your To-Do List...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <BrandIconLogo />
          </div>
          <div>
            <h1 className="brand-title">Organizer</h1>
            <p className="brand-subtitle">To-Do List</p>
          </div>
        </div>

        <div>
          <h3 className="section-title">Categories</h3>
          <nav className="categories-nav">
            {categories.length === 0 ? (
              <div style={{ padding: '15px 10px', fontSize: '13px', color: 'var(--color-text-muted)', fontStyle: 'italic', textAlign: 'center' }}>
                No lists available. Create one below!
              </div>
            ) : (
              categories.map(cat => {
                const catTasks = tasks.filter(t => t.categoryId === cat.id)
                const incompleteCount = catTasks.filter(t => !t.completed).length
                const isEditing = editingCategoryId === cat.id

                if (isEditing) {
                  return (
                    <div key={cat.id} className="category-item active" style={{ cursor: 'default' }}>
                      <div className="category-item-content">
                        <input
                          type="text"
                          className="category-input"
                          value={editingCategoryName}
                          onChange={(e) => setEditingCategoryName(e.target.value)}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveCategoryName(cat.id)
                            if (e.key === 'Escape') handleCancelRenameCategory()
                          }}
                        />
                      </div>
                      <div className="category-actions" style={{ opacity: 1 }}>
                        <button 
                          onClick={() => handleSaveCategoryName(cat.id)} 
                          title="Save Name"
                          className="btn-edit-save"
                          style={{ padding: '4px', background: 'var(--color-success-bg)', color: 'var(--color-success)' }}
                        >
                          <CheckIcon />
                        </button>
                        <button 
                          onClick={handleCancelRenameCategory} 
                          title="Cancel"
                          className="btn-edit-cancel"
                          style={{ padding: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-muted)' }}
                        >
                          <CancelIcon />
                        </button>
                      </div>
                    </div>
                  )
                }

                return (
                  <div
                    key={cat.id}
                    className={`category-item ${activeCategoryId === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategoryId(cat.id)}
                  >
                    <div className="category-item-content">
                      <span className="category-icon">
                        <FolderIcon />
                      </span>
                      <span className="category-name" title={cat.name}>{cat.name}</span>
                    </div>
                    
                    <div className="category-actions">
                      <button 
                        onClick={(e) => handleStartRenameCategory(cat, e)} 
                        title="Rename Category"
                      >
                        <EditIcon />
                      </button>
                      <button 
                        onClick={(e) => handleDeleteCategory(cat.id, e)} 
                        title="Delete Category"
                        className="btn-delete-cat"
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    {incompleteCount > 0 && (
                      <span className="task-count-badge">{incompleteCount}</span>
                    )}
                  </div>
                )
              })
            )}
          </nav>
        </div>

        {/* Naming Option for Custom Categories */}
        <form onSubmit={handleAddCategory} className="category-form">
          <h3 className="section-title" style={{ marginBottom: '4px' }}>New Category</h3>
          <div className="category-input-group">
            <input
              type="text"
              className="category-input"
              placeholder="List name..."
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              required
            />
            <button type="submit" className="btn-add-category" title="Create Category">
              <PlusIcon />
            </button>
          </div>
        </form>
      </aside>

      {/* Main Panel Content */}
      <main className="main-content">
        {/* Header section */}
        <section className="header-section">
          <div className="header-info">
            <h2>{currentCategory ? currentCategory.name : 'No Active Category'}</h2>
            <p>
              {!currentCategory
                ? 'Create a category in the sidebar to get started'
                : totalCount === 0 
                  ? 'No tasks yet' 
                  : `${completedCount} of ${totalCount} tasks completed (${completionPercentage}%)`
              }
            </p>
          </div>
        </section>

        {/* Add New Tasks Form */}
        <section>
          <form onSubmit={handleAddTask} className="task-form">
            <input
              type="text"
              className="task-input"
              placeholder={currentCategory ? `Add a new task to ${currentCategory.name}...` : "Create a category first..."}
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              disabled={!currentCategory}
              required
            />
            
            <select
              className="priority-select"
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              title="Set task priority"
              disabled={!currentCategory}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>

            <button type="submit" className="btn-add-task" disabled={!currentCategory}>
              <PlusIcon />
              <span>Add Task</span>
            </button>
          </form>
        </section>

        {/* Tasks List Container */}
        <section className="tasks-container">
          {sortedTasks.length === 0 ? (
            <div className="empty-state">
              <ClipboardIcon />
              <div>
                <p style={{ fontWeight: 600, color: 'var(--color-text-title)' }}>This list is empty</p>
                <p style={{ fontSize: '13px', marginTop: '4px' }}>Add your first task above to get started!</p>
              </div>
            </div>
          ) : (
            sortedTasks.map(task => {
              const isEditing = editingTaskId === task.id

              return (
                <div 
                  key={task.id} 
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                >
                  <div className="task-item-left">
                    {/* Checkbox to Mark Tasks Completed */}
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={task.completed}
                        onChange={() => handleToggleTaskCompletion(task.id)}
                      />
                      <span className="checkbox-custom">
                        <CheckIcon />
                      </span>
                    </label>

                    {/* Inline Task Renaming / Text Updating */}
                    {isEditing ? (
                      <div className="task-edit-form">
                        <input
                          type="text"
                          className="task-edit-input"
                          value={editingTaskText}
                          onChange={(e) => setEditingTaskText(e.target.value)}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveTaskText(task.id)
                            if (e.key === 'Escape') handleCancelEditTask()
                          }}
                        />
                        <button 
                          className="btn-edit-action btn-edit-save"
                          onClick={() => handleSaveTaskText(task.id)}
                          title="Save Changes"
                        >
                          <CheckIcon />
                        </button>
                        <button 
                          className="btn-edit-action btn-edit-cancel"
                          onClick={handleCancelEditTask}
                          title="Cancel Editing"
                        >
                          <CancelIcon />
                        </button>
                      </div>
                    ) : (
                      <>
                        <span 
                          className="task-text"
                          onClick={() => handleToggleTaskCompletion(task.id)}
                          title="Click to toggle completion, or edit on the right"
                        >
                          {task.text}
                        </span>
                        
                        <span className={`priority-badge ${task.priority}`}>
                          {task.priority}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Right side operations */}
                  {!isEditing && (
                    <div className="task-item-right">
                      {/* Edit option */}
                      <button
                        className="btn-task-action"
                        onClick={() => handleStartEditTask(task)}
                        title="Edit Task Details"
                      >
                        <EditIcon />
                      </button>

                      {/* Delete task option */}
                      <button
                        className="btn-task-action btn-delete active-delete"
                        onClick={() => handleDeleteTask(task.id)}
                        title="Delete Task"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </section>
      </main>
    </div>
  )
}

export default App
