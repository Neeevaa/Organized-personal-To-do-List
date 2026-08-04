import { useState, useEffect, useMemo } from 'react'
import { MONTHS, TIMETABLE, APTITUDE_SCHEDULE, LC_PHASES, RESOURCES, SCRUM_REGISTER, SYNAPSE_IMPLEMENTATION_PLAN } from './learningData'
import { saveFullSnapshot, getFullSnapshot, saveStateItem } from './dbStorage'
import './App.css'

// --- Inline SVG Icons ---
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <rect x="3" y="3" width="7" height="9"></rect>
    <rect x="14" y="3" width="7" height="5"></rect>
    <rect x="14" y="12" width="7" height="9"></rect>
    <rect x="3" y="16" width="7" height="5"></rect>
  </svg>
)

const RoadmapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <path d="M9 18l6-6-6-6"></path>
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
  </svg>
)

const TimetableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

const ResourcesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
)

const ReminderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
)

const ScrumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M8 14h8"></path>
    <path d="M8 18h5"></path>
  </svg>
)

const ChecklistIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <path d="M9 11l3 3L22 4"></path>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
)

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon">
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

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
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

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="action-icon">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const API_BASE_URL = 'http://localhost:8001'

const fetchWithTimeout = async (url, options = {}, timeoutMs = 2500) => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { ...options, signal: controller.signal })
    clearTimeout(timer)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res
  } catch (err) {
    clearTimeout(timer)
    throw err
  }
}

function App() {
  // --- STATE DECLARATIONS ---
  const [categories, setCategories] = useState([])
  const [tasks, setTasks] = useState([])
  const [reminders, setReminders] = useState([])
  const [completedLC, setCompletedLC] = useState([])
  const [completedRoadmap, setCompletedRoadmap] = useState([])
  const [settings, setSettings] = useState({ study_start_date: new Date().toISOString().split('T')[0] })
  const [selectedTargetDate, setSelectedTargetDate] = useState(new Date().toISOString().split('T')[0])
  
  const [activeTab, setActiveTab] = useState('dashboard') // dashboard, roadmap, timetable, leetcode, resources, reminders, or category-{id}
  const [isLoading, setIsLoading] = useState(true)
  const [isOffline, setIsOffline] = useState(false)

  // Sub-view selectors
  const [activeMonthKey, setActiveMonthKey] = useState('m1')
  const [activeTTMode, setActiveTTMode] = useState('weekday')
  const [activeLCPhase, setActiveLCPhase] = useState('p1')
  const [activeResCat, setActiveResCat] = useState('frontend')

  // Form states
  const [newCategoryName, setNewCategoryName] = useState('')
  const [editingCategoryId, setEditingCategoryId] = useState(null)
  const [editingCategoryName, setEditingCategoryName] = useState('')

  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskPriority, setNewTaskPriority] = useState('medium')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingTaskText, setEditingTaskText] = useState('')

  // Reminders states
  const [newReminderText, setNewReminderText] = useState('')
  const [newReminderDate, setNewReminderDate] = useState('')
  const [newReminderPriority, setNewReminderPriority] = useState('medium')
  const [editingReminderId, setEditingReminderId] = useState(null)
  const [editingReminderText, setEditingReminderText] = useState('')
  const [editingReminderDate, setEditingReminderDate] = useState('')

  // Timer reference for slot updates
  const [timeTicker, setTimeTicker] = useState(new Date())

  // Component-level weekend flag (re-evaluated every minute via timeTicker)
  const isWeekend = timeTicker.getDay() === 0 || timeTicker.getDay() === 6

  // --- FETCH DATA FROM DATABASE OR INDEXEDDB STORE ---
  const loadData = async () => {
    let isServerOffline = false
    let fetchedCategories = []
    let fetchedTasks = []
    let fetchedReminders = []
    let fetchedLC = []
    let fetchedRoadmap = []
    let fetchedSettings = {}

    try {
      // 1. Retrieve persistent IndexedDB snapshot first (fast & reliable)
      const snapshot = await getFullSnapshot().catch(() => null)

      // 2. Attempt fetching from FastAPI with 2.5-second timeout safeguard
      try {
        const [resLists, resReminders, resLC, resRoadmap, resSettings] = await Promise.all([
          fetchWithTimeout(`${API_BASE_URL}/lists`),
          fetchWithTimeout(`${API_BASE_URL}/reminders`),
          fetchWithTimeout(`${API_BASE_URL}/leetcode/completed`),
          fetchWithTimeout(`${API_BASE_URL}/roadmap/completed`),
          fetchWithTimeout(`${API_BASE_URL}/settings`)
        ])

        const dataLists = await resLists.json()
        const dataReminders = await resReminders.json()
        const dataLC = await resLC.json()
        const dataRoadmap = await resRoadmap.json()
        const rawSettings = await resSettings.json()

        fetchedReminders = Array.isArray(dataReminders) ? dataReminders : []
        fetchedLC = Array.isArray(dataLC) ? dataLC.map(item => item.problem_name) : []
        fetchedRoadmap = Array.isArray(dataRoadmap) ? dataRoadmap.map(item => item.topic_name) : []

        fetchedSettings = {}
        if (Array.isArray(rawSettings)) {
          rawSettings.forEach(s => {
            fetchedSettings[s.key] = s.value
          })
        }

        fetchedCategories = dataLists.map(cat => ({ id: cat.id, name: cat.name }))
        dataLists.forEach(cat => {
          if (cat.items && Array.isArray(cat.items)) {
            cat.items.forEach(item => {
              fetchedTasks.push({
                id: item.id,
                categoryId: item.list_id,
                text: item.text,
                completed: item.completed,
                priority: item.priority,
                createdAt: item.created_at ? new Date(item.created_at).getTime() : Date.now()
              })
            })
          }
        })

        setIsOffline(false)
      } catch (err) {
        console.warn("Backend server not responding or offline. Loading client local DB store.", err)
        setIsOffline(true)
        isServerOffline = true

        if (snapshot && snapshot.categories && snapshot.categories.length > 0) {
          fetchedCategories = snapshot.categories || []
          fetchedTasks = snapshot.tasks || []
          fetchedReminders = snapshot.reminders || []
          fetchedLC = snapshot.completedLC || []
          fetchedRoadmap = snapshot.completedRoadmap || []
          fetchedSettings = snapshot.settings || {}
        }
      }

      // Initialize default daily category if empty
      if (!fetchedCategories || fetchedCategories.length === 0) {
        fetchedCategories = [{ id: 'cat-daily', name: 'Daily Tasks' }]
      }

      if (!fetchedSettings.study_start_date) {
        fetchedSettings.study_start_date = new Date().toISOString().split('T')[0]
      }

      setCategories(fetchedCategories)
      setTasks(fetchedTasks)
      setReminders(fetchedReminders)
      setCompletedLC(fetchedLC)
      setCompletedRoadmap(fetchedRoadmap)
      setSettings(fetchedSettings)

      await saveFullSnapshot({
        categories: fetchedCategories,
        tasks: fetchedTasks,
        reminders: fetchedReminders,
        completedLC: fetchedLC,
        completedRoadmap: fetchedRoadmap,
        settings: fetchedSettings
      }).catch(() => {})

      await runDailyRollover(fetchedCategories, fetchedTasks, fetchedSettings.study_start_date, isServerOffline, selectedTargetDate).catch(() => {})

    } catch (e) {
      console.error("Critical error loading data:", e)
    } finally {
      setIsLoading(false)
    }
  }

  // --- DAILY STUDY TASKS & SCRUM MILESTONE MAPPING GENERATION ---
  const runDailyRollover = async (currentCats, currentTasks, startDateStr, isServerOffline, targetDateStr = null, forceRegenerate = false) => {
    const dailyCat = currentCats.find(c => c.name === 'Daily Tasks')
    if (!dailyCat) return

    const activeDailyTasks = currentTasks.filter(t => String(t.categoryId) === String(dailyCat.id) && !t.text.includes('(Moved to'))
    if (activeDailyTasks.length > 0 && !forceRegenerate) {
      return
    }

    const evalDate = targetDateStr ? new Date(targetDateStr + 'T00:00:00') : new Date()
    let updatedTasks = [...currentTasks]

    // Calculate current Study Week index for target date
    const startDate = new Date((startDateStr || new Date().toISOString().split('T')[0]) + 'T00:00:00')
    const diffMs = evalDate.getTime() - startDate.getTime()
    const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)))
    const activeWeekIdx = Math.min(24, Math.max(1, Math.floor(diffDays / 7) + 1))
    const activeMonthIdx = Math.min(6, Math.max(1, Math.floor((activeWeekIdx - 1) / 4) + 1))
    
    const activeMonthKey = `m${activeMonthIdx}`
    const activeMonthData = MONTHS[activeMonthKey]
    const activeWeekData = activeMonthData.weeks[(activeWeekIdx - 1) % 4]

    // Assemble target date study tasks
    const newTasks = []
    const isWeekend = evalDate.getDay() === 0 || evalDate.getDay() === 6

    // 0. Scrum Register Milestone Mapping
    const activeScrumMilestone = SCRUM_REGISTER.find(s => s.week.includes(`Week ${activeWeekIdx}`)) || SCRUM_REGISTER[(activeWeekIdx - 1) % SCRUM_REGISTER.length]
    if (activeScrumMilestone) {
      newTasks.push({
        text: `[Scrum Milestone] ${activeScrumMilestone.milestone} (${activeScrumMilestone.completion}% Target) — ${activeScrumMilestone.deliverables.slice(0, 85)}...`,
        priority: 'high'
      })
    }

    // 1. Aptitude Topic
    let aptFocus = ""
    if (activeWeekIdx <= 2) aptFocus = APTITUDE_SCHEDULE['Week 1-2']
    else if (activeWeekIdx <= 4) aptFocus = APTITUDE_SCHEDULE['Week 3-4']
    else if (activeWeekIdx <= 6) aptFocus = APTITUDE_SCHEDULE['Week 5-6']
    else if (activeWeekIdx <= 8) aptFocus = APTITUDE_SCHEDULE['Week 7-8']
    else if (activeWeekIdx <= 10) aptFocus = APTITUDE_SCHEDULE['Week 9-10']
    else if (activeWeekIdx <= 12) aptFocus = APTITUDE_SCHEDULE['Week 11-12']
    else if (activeWeekIdx <= 16) aptFocus = APTITUDE_SCHEDULE['Week 13-16']
    else aptFocus = APTITUDE_SCHEDULE['Week 17-24']

    newTasks.push({
      text: `[Aptitude] Practice: ${aptFocus.split(' | ')[evalDate.getDay() % 3] || aptFocus} (${isWeekend ? '3 hrs Mock Session' : '1 hr Practice - 15 qns'})`,
      priority: 'medium'
    })

    // 2. Tech Learning Topic
    let completedRoadmapList = []
    if (!isServerOffline) {
      try {
        const res = await fetch(`${API_BASE_URL}/roadmap/completed`)
        completedRoadmapList = (await res.json()).map(item => item.topic_name)
      } catch (e) {}
    } else {
      const snapshot = await getFullSnapshot()
      completedRoadmapList = snapshot.completedRoadmap || []
    }

    const weekTopics = activeWeekData.items.map(item => item.t)
    const uncompletedTopic = weekTopics.find(t => !completedRoadmapList.includes(t))

    if (uncompletedTopic) {
      newTasks.push({
        text: `[Tech Learning] Study: ${uncompletedTopic} (${isWeekend ? '3 hrs Deep Implementation' : '1 hr Video/Reading'})`,
        priority: 'high'
      })
    } else {
      newTasks.push({
        text: `[Tech Learning] Review focus: ${activeWeekData.focus} (${isWeekend ? '3 hrs review' : '1 hr review'})`,
        priority: 'medium'
      })
    }

    // 3. LeetCode Question
    let completedLCList = []
    if (!isServerOffline) {
      try {
        const res = await fetch(`${API_BASE_URL}/leetcode/completed`)
        completedLCList = (await res.json()).map(item => item.problem_name)
      } catch(e) {}
    } else {
      const snapshot = await getFullSnapshot()
      completedLCList = snapshot.completedLC || []
    }

    const currentPhaseKey = activeWeekIdx <= 8 ? 'p1' : activeWeekIdx <= 12 ? 'p2' : activeWeekIdx <= 20 ? 'p3' : 'p4'
    const phaseProblems = LC_PHASES[currentPhaseKey].problems
    const uncompletedProblem = phaseProblems.find(p => !completedLCList.includes(p.n))

    if (uncompletedProblem) {
      const diffText = uncompletedProblem.d === 'E' ? 'Easy' : uncompletedProblem.d === 'M' ? 'Medium' : 'Hard'
      newTasks.push({
        text: `[LeetCode] Solve: ${uncompletedProblem.n} (${diffText} — Target 25 min)`,
        priority: 'high'
      })
    } else {
      newTasks.push({
        text: `[LeetCode] Solve 1 random problem in Phase ${currentPhaseKey.slice(1)}`,
        priority: 'medium'
      })
    }

    // 4. Project vs Research alternating
    if (isWeekend) {
      newTasks.push({
        text: `[Project] Spend 2 hrs building features for Synapse (${activeMonthData.title})`,
        priority: 'high'
      })
      newTasks.push({
        text: `[Research] Read 1 AI paper and write 5-bullet summary`,
        priority: 'medium'
      })
    } else {
      const day = evalDate.getDay()
      if (day === 1 || day === 3 || day === 5) {
        newTasks.push({
          text: `[Project] Spend 1 hr coding features for Synapse (${activeMonthData.title})`,
          priority: 'high'
        })
      } else {
        newTasks.push({
          text: `[Research] Spend 1 hr reading a paper related to AI features`,
          priority: 'medium'
        })
      }
    }

    // Save initial study tasks to DB / IndexedDB
    for (let t of newTasks) {
      if (!isServerOffline) {
        try {
          const res = await fetch(`${API_BASE_URL}/lists/${dailyCat.id}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(t)
          })
          const savedTask = await res.json()
          updatedTasks.push({
            id: savedTask.id,
            categoryId: savedTask.list_id,
            text: savedTask.text,
            completed: savedTask.completed,
            priority: savedTask.priority,
            createdAt: new Date(savedTask.created_at).getTime()
          })
        } catch (e) {}
      } else {
        const offlineTask = {
          id: 'task-gen-' + Math.random(),
          categoryId: dailyCat.id,
          text: t.text,
          completed: false,
          priority: t.priority,
          createdAt: Date.now()
        }
        updatedTasks.push(offlineTask)
      }
    }

    setTasks(updatedTasks)
    await saveFullSnapshot({ tasks: updatedTasks })
  }

  // --- SYNC TIMERS AND TRIGGERS ---
  useEffect(() => {
    try {
      localStorage.clear()
    } catch (e) {}
    loadData()
    // Timer to update active hour in timetable
    const interval = setInterval(() => {
      setTimeTicker(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  // Sync state helper (in-memory only, no localStorage write)
  const syncOfflineState = () => {
    // LocalStorage explicitly disabled
  }

  // --- CATEGORIES LOGIC ---
  const handleAddCategory = async (e) => {
    e.preventDefault()
    const trimmed = newCategoryName.trim()
    if (!trimmed) return

    try {
      let formatted = null
      if (!isOffline) {
        const res = await fetch(`${API_BASE_URL}/lists`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: trimmed })
        })
        const newCat = await res.json()
        formatted = { id: newCat.id, name: newCat.name }
      } else {
        formatted = { id: 'cat-off-' + Date.now(), name: trimmed }
      }
      const nextCats = [...categories, formatted]
      setCategories(nextCats)
      setActiveTab(`category-${formatted.id}`)
      setNewCategoryName('')
      await saveFullSnapshot({ categories: nextCats, tasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveCategoryName = async (id) => {
    const trimmed = editingCategoryName.trim()
    if (!trimmed) return

    try {
      let nextCats = categories.map(c => c.id === id ? { ...c, name: trimmed } : c)
      if (!isOffline) {
        const res = await fetch(`${API_BASE_URL}/lists/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: trimmed })
        })
        const updated = await res.json()
        nextCats = categories.map(c => c.id === id ? { ...c, name: updated.name } : c)
      }
      setCategories(nextCats)
      setEditingCategoryId(null)
      await saveFullSnapshot({ categories: nextCats, tasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteCategory = async (id, e) => {
    e.stopPropagation()
    const confirmDelete = window.confirm("Are you sure you want to delete this list? All tasks inside will be permanently deleted.")
    if (!confirmDelete) return

    try {
      const nextCats = categories.filter(c => c.id !== id)
      const nextTasks = tasks.filter(t => String(t.categoryId) !== String(id))
      
      setCategories(nextCats)
      setTasks(nextTasks)
      
      if (activeTab === `category-${id}`) {
        setActiveTab('dashboard')
      }

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/lists/${id}`, { method: 'DELETE' })
      }
      await saveFullSnapshot({ categories: nextCats, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  // --- TASKS LOGIC ---
  const handleAddTask = async (e, categoryId) => {
    e.preventDefault()
    const trimmed = newTaskText.trim()
    if (!trimmed) return

    try {
      let nextTasks = [...tasks]
      if (!isOffline) {
        const res = await fetch(`${API_BASE_URL}/lists/${categoryId}/items`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed, priority: newTaskPriority })
        })
        const newTask = await res.json()
        nextTasks.push({
          id: newTask.id,
          categoryId: newTask.list_id,
          text: newTask.text,
          completed: newTask.completed,
          priority: newTask.priority,
          createdAt: new Date(newTask.created_at).getTime()
        })
      } else {
        const newOfflineTask = {
          id: 'task-off-' + Date.now(),
          categoryId,
          text: trimmed,
          completed: false,
          priority: newTaskPriority,
          createdAt: Date.now()
        }
        nextTasks.push(newOfflineTask)
      }
      setTasks(nextTasks)
      setNewTaskText('')
      setNewTaskPriority('medium')
      await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleToggleTaskCompletion = async (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    const nextCompleted = !task.completed
    try {
      const nextTasks = tasks.map(t => t.id === id ? { ...t, completed: nextCompleted } : t)
      setTasks(nextTasks)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/items/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: nextCompleted })
        })
      }
      await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveTaskText = async (id) => {
    const trimmed = editingTaskText.trim()
    if (!trimmed) return

    try {
      const nextTasks = tasks.map(t => t.id === id ? { ...t, text: trimmed } : t)
      setTasks(nextTasks)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/items/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed })
        })
      }
      setEditingTaskId(null)
      await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteTask = async (id) => {
    try {
      const nextTasks = tasks.filter(t => t.id !== id)
      setTasks(nextTasks)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/items/${id}`, { method: 'DELETE' })
      }
      await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  // Move uncompleted daily task to tomorrow / next day
  const handleMoveTaskToTomorrow = async (task) => {
    if (task.completed) return

    let updatedText = task.text
    if (updatedText.includes('(Moved to Tomorrow 🗓️)')) {
      updatedText = updatedText.replace('(Moved to Tomorrow 🗓️)', '(Moved to Next Day 🗓️)')
    } else if (updatedText.includes('(Moved to Next Day 🗓️)')) {
      updatedText = updatedText.replace('(Moved to Next Day 🗓️)', '(Moved to Next Day +2d 🗓️)')
    } else {
      const match = updatedText.match(/\(Moved to Next Day \+(\d+)d 🗓️\)/)
      if (match) {
        const days = parseInt(match[1], 10) + 1
        updatedText = updatedText.replace(match[0], `(Moved to Next Day +${days}d 🗓️)`)
      } else {
        updatedText = `${updatedText} (Moved to Tomorrow 🗓️)`
      }
    }

    const nextTasks = tasks.map(t => t.id === task.id ? { ...t, text: updatedText } : t)
    setTasks(nextTasks)

    if (!isOffline) {
      try {
        await fetch(`${API_BASE_URL}/items/${task.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: updatedText })
        })
      } catch (err) {
        console.error("Error updating task in DB:", err)
      }
    }
    await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings })
  }

  // --- REMINDERS LOGIC ---
  const handleAddReminder = async (e) => {
    e.preventDefault()
    const trimmed = newReminderText.trim()
    if (!trimmed) return

    const due = newReminderDate ? new Date(newReminderDate).toISOString() : null

    try {
      let nextReminders = [...reminders]
      if (!isOffline) {
        const res = await fetch(`${API_BASE_URL}/reminders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed, due_date: due, priority: newReminderPriority })
        })
        const newRem = await res.json()
        nextReminders.push(newRem)
      } else {
        const offlineRem = {
          id: 'rem-off-' + Date.now(),
          text: trimmed,
          due_date: due,
          completed: false,
          priority: newReminderPriority,
          created_at: new Date().toISOString()
        }
        nextReminders.push(offlineRem)
      }
      setReminders(nextReminders)
      setNewReminderText('')
      setNewReminderDate('')
      setNewReminderPriority('medium')
      await saveFullSnapshot({ categories, tasks, reminders: nextReminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleToggleReminder = async (id) => {
    const rem = reminders.find(r => r.id === id)
    if (!rem) return

    const nextCompleted = !rem.completed
    try {
      const nextReminders = reminders.map(r => r.id === id ? { ...r, completed: nextCompleted } : r)
      setReminders(nextReminders)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/reminders/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: nextCompleted })
        })
      }
      await saveFullSnapshot({ categories, tasks, reminders: nextReminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveReminder = async (id) => {
    const trimmed = editingReminderText.trim()
    if (!trimmed) return
    const due = editingReminderDate ? new Date(editingReminderDate).toISOString() : null

    try {
      const nextReminders = reminders.map(r => r.id === id ? { ...r, text: trimmed, due_date: due } : r)
      setReminders(nextReminders)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/reminders/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed, due_date: due })
        })
      }
      setEditingReminderId(null)
      await saveFullSnapshot({ categories, tasks, reminders: nextReminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteReminder = async (id) => {
    try {
      const nextReminders = reminders.filter(r => r.id !== id)
      setReminders(nextReminders)

      if (!isOffline) {
        await fetch(`${API_BASE_URL}/reminders/${id}`, { method: 'DELETE' })
      }
      await saveFullSnapshot({ categories, tasks, reminders: nextReminders, completedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  const startEditingReminder = (rem) => {
    setEditingReminderId(rem.id)
    setEditingReminderText(rem.text)
    setEditingReminderDate(rem.due_date ? rem.due_date.slice(0, 16) : '')
  }

  // --- LEETCODE PROGRESS SYNC ---
  const handleToggleLeetCode = async (probName) => {
    const isCompleted = completedLC.includes(probName)
    let nextCompletedLC = []
    if (isCompleted) {
      nextCompletedLC = completedLC.filter(p => p !== probName)
    } else {
      nextCompletedLC = [...completedLC, probName]
    }
    setCompletedLC(nextCompletedLC)

    try {
      if (!isOffline) {
        if (isCompleted) {
          await fetch(`${API_BASE_URL}/leetcode/completed/${encodeURIComponent(probName)}`, { method: 'DELETE' })
        } else {
          await fetch(`${API_BASE_URL}/leetcode/completed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ problem_name: probName, completed: true })
          })
        }
      }
      await saveFullSnapshot({ categories, tasks, reminders, completedLC: nextCompletedLC, completedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  // --- ROADMAP PROGRESS SYNC ---
  const handleToggleRoadmapTopic = async (topicName) => {
    const isCompleted = completedRoadmap.includes(topicName)
    let nextCompletedRoadmap = []
    if (isCompleted) {
      nextCompletedRoadmap = completedRoadmap.filter(t => t !== topicName)
    } else {
      nextCompletedRoadmap = [...completedRoadmap, topicName]
    }
    setCompletedRoadmap(nextCompletedRoadmap)

    try {
      if (!isOffline) {
        if (isCompleted) {
          await fetch(`${API_BASE_URL}/roadmap/completed/${encodeURIComponent(topicName)}`, { method: 'DELETE' })
        } else {
          await fetch(`${API_BASE_URL}/roadmap/completed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic_name: topicName, completed: true })
          })
        }
      }
      await saveFullSnapshot({ categories, tasks, reminders, completedLC, completedRoadmap: nextCompletedRoadmap, settings })
    } catch (err) {
      console.error(err)
    }
  }

  // --- SETTINGS STUDY DATE UPDATE ---
  const handleSaveStartDateSetting = async (dateStr) => {
    const nextSettings = { ...settings, study_start_date: dateStr }
    setSettings(nextSettings)
    try {
      if (!isOffline) {
        await fetch(`${API_BASE_URL}/settings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: 'study_start_date', value: dateStr })
        })
      }
      await saveFullSnapshot({ categories, tasks, reminders, completedLC, completedRoadmap, settings: nextSettings })
      await runDailyRollover(categories, tasks, dateStr, isOffline, selectedTargetDate)
    } catch (err) {
      console.error(err)
    }
  }

  // --- TARGET DATE CHANGE HANDLER ---
  const handleTargetDateChange = async (dateStr) => {
    setSelectedTargetDate(dateStr)
    const nextSettings = { ...settings, study_start_date: dateStr }
    setSettings(nextSettings)
    if (!isOffline) {
      try {
        await fetch(`${API_BASE_URL}/settings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: 'study_start_date', value: dateStr })
        })
      } catch (e) {}
    }
    await saveFullSnapshot({ categories, tasks, reminders, completedLC, completedRoadmap, settings: nextSettings })
    await runDailyRollover(categories, tasks, dateStr, isOffline, dateStr)
  }

  // --- HOLIDAY MODE TOGGLE HANDLER ---
  const handleToggleHoliday = async () => {
    const nextHoliday = !settings.is_holiday
    const nextSettings = { ...settings, is_holiday: nextHoliday }
    setSettings(nextSettings)
    try {
      if (!isOffline) {
        await fetch(`${API_BASE_URL}/settings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: 'is_holiday', value: String(nextHoliday) })
        })
      }
    } catch (e) {}
    await saveFullSnapshot({ categories, tasks, reminders, completedLC, completedRoadmap, settings: nextSettings })
  }

  // --- STARTOVER FROM PREVIOUS DAY HANDLER ---
  const handleStartoverFromPreviousDay = async (skipConfirm = false) => {
    if (!skipConfirm) {
      const confirmReset = window.confirm("Roll back to the previous day so you can complete uncompleted tasks step-by-step?")
      if (!confirmReset) return
    }

    // Calculate previous date (1 day before selectedTargetDate or today)
    const currentTarget = new Date((selectedTargetDate || new Date().toISOString().split('T')[0]) + 'T00:00:00')
    currentTarget.setDate(currentTarget.getDate() - 1)
    const prevDateStr = currentTarget.toISOString().split('T')[0]

    const nextSettings = { ...settings, study_start_date: prevDateStr, is_holiday: false }
    setSelectedTargetDate(prevDateStr)
    setSettings(nextSettings)

    // Restore any uncompleted tasks by removing '(Moved to' tags so user can complete them sequentially!
    const dailyCat = categories.find(c => c.name === 'Daily Tasks')
    let nextTasks = [...tasks]
    if (dailyCat) {
      nextTasks = tasks.map(t => {
        if (String(t.categoryId) === String(dailyCat.id) && t.text.includes('(Moved to')) {
          const cleanText = t.text.replace(/\s*\((Moved to Tomorrow|Moved to Next Day[^\)]*)\s*🗓️\)/g, '')
          return { ...t, text: cleanText }
        }
        return t
      })
    }

    setTasks(nextTasks)

    if (!isOffline) {
      try {
        await fetch(`${API_BASE_URL}/settings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: 'study_start_date', value: prevDateStr })
        })
      } catch (e) {}
    }

    await saveFullSnapshot({ categories, tasks: nextTasks, reminders, completedLC, completedRoadmap, settings: nextSettings })
    await runDailyRollover(categories, nextTasks, prevDateStr, isOffline, prevDateStr, true)
    if (!skipConfirm) {
      alert(`⏪ Rolled back to previous day (${prevDateStr})! Tasks are restored so you can complete everything step-by-step.`)
    }
  }

  // --- LIFE PROGRESS AND SCORES ---
  const calculatedStats = useMemo(() => {
    // 1. Calculate active week index dynamically based on selectedTargetDate
    const startDate = new Date((settings.study_start_date || new Date().toISOString().split('T')[0]) + 'T00:00:00')
    const targetDate = new Date((selectedTargetDate || new Date().toISOString().split('T')[0]) + 'T00:00:00')
    const diffMs = targetDate.getTime() - startDate.getTime()
    const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)))
    const activeWeek = Math.min(24, Math.max(1, Math.floor(diffDays / 7) + 1))
    const activeMonth = Math.min(6, Math.max(1, Math.floor((activeWeek - 1) / 4) + 1))

    // 2. Leetcode count
    const totalLCCount = Object.values(LC_PHASES).reduce((sum, p) => sum + p.problems.length, 0)
    const completedLCCount = completedLC.length
    const lcPercent = totalLCCount > 0 ? Math.round((completedLCCount / totalLCCount) * 100) : 0

    // 3. Roadmap count
    let totalRoadmapTopicsCount = 0
    Object.values(MONTHS).forEach(m => {
      m.weeks.forEach(w => {
        totalRoadmapTopicsCount += w.items.length
      })
    })
    const completedRoadmapCount = completedRoadmap.length
    const roadmapPercent = totalRoadmapTopicsCount > 0 ? Math.round((completedRoadmapCount / totalRoadmapTopicsCount) * 100) : 0

    // 4. Daily tasks completion & Past History Grouping
    const dailyCat = categories.find(c => c.name === 'Daily Tasks')
    const dailyTasksList = dailyCat ? tasks.filter(t => String(t.categoryId) === String(dailyCat.id)) : []
    const totalDailyCount = dailyTasksList.length
    const completedDailyCount = dailyTasksList.filter(t => t.completed).length
    const dailyPercent = totalDailyCount > 0 ? Math.round((completedDailyCount / totalDailyCount) * 100) : 0

    // 5. Group tasks into past days history map by date
    const historyMap = {}
    dailyTasksList.forEach(t => {
      const dateStr = t.createdAt ? new Date(t.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      if (!historyMap[dateStr]) historyMap[dateStr] = []
      historyMap[dateStr].push(t)
    })

    // Build 7-day timeline for graph consistency
    const recent7Days = []
    const todayStr = new Date().toISOString().split('T')[0]
    for (let i = 6; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dStr = d.toISOString().split('T')[0]
      const dayTasks = historyMap[dStr] || []
      const isHolidayDay = !!settings.is_holiday && dStr === todayStr
      const doneCount = dayTasks.filter(t => t.completed).length
      const totalCount = dayTasks.length
      
      let pct = 0
      if (isHolidayDay) {
        pct = 100
      } else if (totalCount > 0) {
        pct = Math.round((doneCount / totalCount) * 100)
      } else if (dStr === todayStr) {
        pct = dailyPercent
      } else {
        pct = 75
      }

      recent7Days.push({
        dateStr: dStr,
        label: i === 0 ? 'Today' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        pct,
        total: totalCount,
        done: doneCount,
        isHoliday: isHolidayDay,
        tasks: dayTasks
      })
    }

    // 6. Calculate Streak (Increment & protect on holidays)
    let streakCount = 0
    for (let i = recent7Days.length - 1; i >= 0; i--) {
      const day = recent7Days[i]
      if (day.pct >= 50 || day.isHoliday) {
        streakCount += 1
      } else if (i !== recent7Days.length - 1) {
        break
      }
    }
    const activeStreak = Math.max(streakCount, 1)

    // 7. Overall Productivity Index
    const productivityIndex = Math.round((dailyPercent * 0.5) + (lcPercent * 0.25) + (roadmapPercent * 0.25))

    return {
      activeWeek,
      activeMonth,
      totalLCCount,
      completedLCCount,
      lcPercent,
      totalRoadmapTopicsCount,
      completedRoadmapCount,
      roadmapPercent,
      totalDailyCount,
      completedDailyCount,
      dailyPercent,
      productivityIndex,
      activeStreak,
      recent7Days,
      historyMap
    }
  }, [categories, tasks, completedLC, completedRoadmap, settings, selectedTargetDate])

  // --- TIME SLOTS TIMELINE HIGHLIGHTER ---
  const currentSlotIndex = useMemo(() => {
    const isWeekendOrHoliday = (timeTicker.getDay() === 0 || timeTicker.getDay() === 6) || !!settings.is_holiday
    const schedule = TIMETABLE[isWeekendOrHoliday ? 'weekend' : 'weekday']
    const hr = timeTicker.getHours()
    const min = timeTicker.getMinutes()
    const totalMin = hr * 60 + min

    const parseTime = (str) => {
      let clean = str.replace(/am|pm/i, '').trim()
      let isPM = str.toLowerCase().includes('pm')
      let isAM = str.toLowerCase().includes('am')
      
      let [h, m] = clean.split(':').map(Number)
      if (isNaN(m)) m = 0

      if (isPM && h !== 12) h += 12
      if (isAM && h === 12) h = 0

      if (!isAM && !isPM) {
        if (str.includes('pm') && h !== 12) h += 12
        if (str.includes('am') && h === 12) h = 0
      }

      return h * 60 + m
    }

    for (let i = 0; i < schedule.length; i++) {
      const slot = schedule[i]
      let timeRange = slot.time.split('–')
      if (timeRange.length < 2) timeRange = slot.time.split('-')
      if (timeRange.length < 2) continue

      let startStr = timeRange[0].trim()
      let endStr = timeRange[1].trim()

      const endPM = endStr.toLowerCase().includes('pm')
      const endAM = endStr.toLowerCase().includes('am')
      if (endPM && !startStr.toLowerCase().includes('pm') && !startStr.toLowerCase().includes('am')) {
        startStr += 'pm'
      }
      if (endAM && !startStr.toLowerCase().includes('pm') && !startStr.toLowerCase().includes('am')) {
        startStr += 'am'
      }

      if (startStr.includes('am') && !endStr.toLowerCase().includes('pm') && !endStr.toLowerCase().includes('am')) {
        endStr += 'am'
      }

      const startMin = parseTime(startStr)
      let endMin = parseTime(endStr)

      if (endMin < startMin) {
        endMin += 24 * 60
      }

      let checkMin = totalMin
      if (totalMin < startMin && startMin > 18 * 60) {
        checkMin += 24 * 60
      }

      if (checkMin >= startMin && checkMin < endMin) {
        return i
      }
    }
    return -1
  }, [timeTicker])

  // --- COPY CHAT PROMPTS HELPER ---
  const handleCopyPrompt = (promptText) => {
    navigator.clipboard.writeText(promptText)
    alert("AI prompt copied to clipboard! You can paste it into ChatGPT/Claude to study.")
  }

  // Get active lists (excluding Daily Tasks list which is managed in the Dashboard)
  const userCategoryLists = categories.filter(c => c.name !== 'Daily Tasks')

  // Find daily tasks items
  const dailyCat = categories.find(c => c.name === 'Daily Tasks')
  const dailyTasks = dailyCat ? tasks.filter(t => String(t.categoryId) === String(dailyCat.id)) : []
  const activeDailyTasks = dailyTasks.filter(t => !t.text.includes('(Moved to'))

  // Current list selection if activeTab is a custom category
  const selectedCatId = activeTab.startsWith('category-') ? activeTab.replace('category-', '') : ''
  const selectedCategory = categories.find(c => String(c.id) === String(selectedCatId))
  const filteredTasks = selectedCategory ? tasks.filter(t => String(t.categoryId) === String(selectedCategory.id)) : []
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1
    return a.createdAt - b.createdAt
  })

  // Format date helper
  const getRemainingTime = (dueDateStr) => {
    if (!dueDateStr) return ''
    const due = new Date(dueDateStr)
    const diffMs = due.getTime() - Date.now()
    const diffHrs = diffMs / (1000 * 60 * 60)
    
    if (diffMs < 0) {
      const days = Math.floor(Math.abs(diffHrs) / 24)
      return days > 0 ? `Overdue by ${days}d` : `Overdue`
    }
    
    const days = Math.floor(diffHrs / 24)
    if (days > 0) return `due in ${days}d`
    
    const hrs = Math.floor(diffHrs)
    if (hrs > 0) return `due in ${hrs}h`
    
    return `due in < 1h`
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p className="loading-text">Synchronizing Your Life Workspace...</p>
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
            <h1 className="brand-title">Ryva</h1>
            <p className="brand-subtitle">Personal Productivity App</p>
          </div>
        </div>

        {/* Real-time Connection Indicator */}
        <div className={`connection-badge ${isOffline ? 'offline' : 'online'}`}>
          <span className="dot"></span>
          <span>{isOffline ? 'Offline Mode (Local DB)' : 'Connected to DB'}</span>
        </div>

        {/* Active Week Display / Date Config */}
        <div className="study-status-card">
          <p className="label">Study Timeline</p>
          <p className="value">Month {calculatedStats.activeMonth}, Week {calculatedStats.activeWeek}</p>
          <div className="date-picker-group" style={{ marginTop: '8px' }}>
            <label htmlFor="targetDateInput">Study Target Date:</label>
            <input 
              type="date" 
              id="targetDateInput"
              value={selectedTargetDate || ''}
              onChange={(e) => handleTargetDateChange(e.target.value)}
            />
          </div>
          <button 
            onClick={() => handleStartoverFromPreviousDay(false)}
            className="btn-restart-plan"
            style={{
              marginTop: '10px',
              width: '100%',
              padding: '6px 10px',
              background: 'rgba(102, 252, 241, 0.12)',
              border: '1px solid rgba(102, 252, 241, 0.3)',
              color: '#66fcf1',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            ⏪ Startover from Previous Day
          </button>
        </div>

        {/* Holiday Mode Toggle Card */}
        <div className={`holiday-toggle-card ${settings.is_holiday ? 'active' : ''}`}>
          <div className="holiday-info">
            <span className="holiday-title">🏖️ Holiday Mode</span>
            <span className="holiday-sub">{settings.is_holiday ? 'Weekend schedule active' : 'Weekday grind active'}</span>
          </div>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={!!settings.is_holiday} 
              onChange={handleToggleHoliday}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Daily Manager Tabs */}
        <div>
          <h3 className="section-title">Daily Manager</h3>
          <nav className="categories-nav nav-margin">
            <div className={`category-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              <div className="category-item-content">
                <DashboardIcon />
                <span className="category-name">Today's Plan</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
              <div className="category-item-content">
                <AnalyticsIcon />
                <span className="category-name">Analytics & Logs</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'reminders' ? 'active' : ''}`} onClick={() => setActiveTab('reminders')}>
              <div className="category-item-content">
                <ReminderIcon />
                <span className="category-name">Reminders</span>
                {reminders.filter(r => !r.completed).length > 0 && (
                  <span className="task-count-badge count-red">{reminders.filter(r => !r.completed).length}</span>
                )}
              </div>
            </div>

            <div className={`category-item ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => setActiveTab('roadmap')}>
              <div className="category-item-content">
                <RoadmapIcon />
                <span className="category-name">6-Month Roadmap</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'timetable' ? 'active' : ''}`} onClick={() => setActiveTab('timetable')}>
              <div className="category-item-content">
                <TimetableIcon />
                <span className="category-name">Timetable</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'leetcode' ? 'active' : ''}`} onClick={() => setActiveTab('leetcode')}>
              <div className="category-item-content">
                <LeetCodeIcon />
                <span className="category-name">LeetCode Roadmap</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'resources' ? 'active' : ''}`} onClick={() => setActiveTab('resources')}>
              <div className="category-item-content">
                <ResourcesIcon />
                <span className="category-name">Resources Vault</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'scrum' ? 'active' : ''}`} onClick={() => setActiveTab('scrum')}>
              <div className="category-item-content">
                <ScrumIcon />
                <span className="category-name">Scrum Register</span>
              </div>
            </div>

            <div className={`category-item ${activeTab === 'synapse_plan' ? 'active' : ''}`} onClick={() => setActiveTab('synapse_plan')}>
              <div className="category-item-content">
                <ChecklistIcon />
                <span className="category-name">Synapse Plan</span>
              </div>
            </div>
          </nav>
        </div>

        {/* Custom Lists (Generic Categories) */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="section-title">My Custom Lists</h3>
          <nav className="categories-nav" style={{ maxHeight: '180px' }}>
            {userCategoryLists.length === 0 ? (
              <div className="empty-sidebar-label">No custom lists. Create one below!</div>
            ) : (
              userCategoryLists.map(cat => {
                const listItems = tasks.filter(t => t.categoryId === cat.id)
                const pendingCount = listItems.filter(t => !t.completed).length
                const isEditing = editingCategoryId === cat.id

                if (isEditing) {
                  return (
                    <div key={cat.id} className="category-item active edit-mode" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="text"
                        className="category-input-edit"
                        value={editingCategoryName}
                        onChange={(e) => setEditingCategoryName(e.target.value)}
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveCategoryName(cat.id)
                          if (e.key === 'Escape') setEditingCategoryId(null)
                        }}
                      />
                      <div className="cat-edit-actions">
                        <button onClick={() => handleSaveCategoryName(cat.id)} className="btn-ok"><CheckIcon /></button>
                        <button onClick={() => setEditingCategoryId(null)} className="btn-close"><CancelIcon /></button>
                      </div>
                    </div>
                  )
                }

                return (
                  <div
                    key={cat.id}
                    className={`category-item ${activeTab === `category-${cat.id}` ? 'active' : ''}`}
                    onClick={() => setActiveTab(`category-${cat.id}`)}
                  >
                    <div className="category-item-content">
                      <FolderIcon />
                      <span className="category-name" title={cat.name}>{cat.name}</span>
                    </div>
                    
                    <div className="category-actions">
                      <button onClick={(e) => { e.stopPropagation(); setEditingCategoryId(cat.id); setEditingCategoryName(cat.name); }} title="Rename List">
                        <EditIcon />
                      </button>
                      <button onClick={(e) => handleDeleteCategory(cat.id, e)} title="Delete List" className="btn-delete-cat">
                        <TrashIcon />
                      </button>
                    </div>

                    {pendingCount > 0 && (
                      <span className="task-count-badge">{pendingCount}</span>
                    )}
                  </div>
                )
              })
            )}
          </nav>

          <form onSubmit={handleAddCategory} className="category-form">
            <div className="category-input-group">
              <input
                type="text"
                className="category-input"
                placeholder="New list name..."
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                required
              />
              <button type="submit" className="btn-add-category">
                <PlusIcon />
              </button>
            </div>
          </form>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="main-content">
        
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="tab-pane">
            <section className="dashboard-header">
              <div>
                <h2>Welcome back! Keep grinding.</h2>
                <p className="subtext">Life Manager & Synapse Study Companion</p>
              </div>
              <div className="dashboard-badges">
                <div className="badge-item">
                  <span className="icon">🔥</span>
                  <div>
                    <span className="num">{calculatedStats.activeStreak} Days</span>
                    <span className="lbl">Daily Streak</span>
                  </div>
                </div>
                <div className="badge-item">
                  <span className="icon">🏆</span>
                  <div>
                    <span className="num">{calculatedStats.productivityIndex}%</span>
                    <span className="lbl">Productivity Score</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Metrics cards grid */}
            <div className="metrics-grid">
              <div className="metric-card card-purple">
                <h3>6-Month Roadmap</h3>
                <div className="progress-ring-section">
                  <span className="percent">{calculatedStats.roadmapPercent}%</span>
                  <span className="detail">{calculatedStats.completedRoadmapCount} of {calculatedStats.totalRoadmapTopicsCount} topics</span>
                </div>
                <div className="progress-bar-flat"><div className="fill" style={{ width: `${calculatedStats.roadmapPercent}%` }}></div></div>
                <button onClick={() => setActiveTab('roadmap')} className="card-link-btn">Go to Roadmap ↗</button>
              </div>

              <div className="metric-card card-blue">
                <h3>LeetCode Solver</h3>
                <div className="progress-ring-section">
                  <span className="percent">{calculatedStats.lcPercent}%</span>
                  <span className="detail">{calculatedStats.completedLCCount} of {calculatedStats.totalLCCount} solved</span>
                </div>
                <div className="progress-bar-flat"><div className="fill" style={{ width: `${calculatedStats.lcPercent}%` }}></div></div>
                <button onClick={() => setActiveTab('leetcode')} className="card-link-btn">Tackle LeetCode ↗</button>
              </div>

              <div className="metric-card card-green">
                <h3>Today's Completion</h3>
                <div className="progress-ring-section">
                  <span className="percent">{calculatedStats.dailyPercent}%</span>
                  <span className="detail">{calculatedStats.completedDailyCount} of {calculatedStats.totalDailyCount} tasks completed</span>
                </div>
                <div className="progress-bar-flat"><div className="fill" style={{ width: `${calculatedStats.dailyPercent}%` }}></div></div>
                <p className="card-info-text">Carries over automatically if not done!</p>
              </div>
            </div>

            {/* Timetable vs Daily Checklist split */}
            <div className="dashboard-split-grid">
              
              {/* Daily Checklist */}
              <div className="split-panel flex-column">
                <div className="panel-header">
                  <h3>Today's Daily Checklist</h3>
                  <span className="badge-pill pill-purple">Week {calculatedStats.activeWeek} Focus</span>
                </div>
                
                {/* Form to add custom today tasks */}
                {dailyCat && (
                  <form onSubmit={(e) => handleAddTask(e, dailyCat.id)} className="task-form inline-task-form">
                    <input
                      type="text"
                      className="task-input"
                      placeholder="Add a custom task for today..."
                      value={newTaskText}
                      onChange={(e) => setNewTaskText(e.target.value)}
                      required
                    />
                    <select className="priority-select" value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                    <button type="submit" className="btn-add-task">
                      <PlusIcon />
                    </button>
                  </form>
                )}

                <div className="tasks-container dashboard-tasks">
                  {activeDailyTasks.length === 0 ? (
                    <div className="empty-panel-state">
                      <p>Checklist is empty. Select target date on sidebar to view tasks.</p>
                    </div>
                  ) : (
                    [...activeDailyTasks].sort((a,b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1).map(task => (
                      <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <div className="task-item-left">
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
                          <span className="task-text" onClick={() => handleToggleTaskCompletion(task.id)}>{task.text}</span>
                          <span className={`priority-badge ${task.priority}`}>{task.priority}</span>
                        </div>

                        <div className="task-item-right">
                          {!task.completed && (
                            <button
                              onClick={() => handleMoveTaskToTomorrow(task)}
                              className="btn-task-action btn-move-tomorrow"
                              title="Move task to tomorrow"
                            >
                              <CalendarIcon />
                              <span>Move to Tomorrow</span>
                            </button>
                          )}
                          <button onClick={() => handleDeleteTask(task.id)} className="btn-task-action btn-delete" title="Delete Task">
                            <TrashIcon />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Dynamic Timetable Track */}
              <div className="split-panel">
                <div className="panel-header">
                  <h3>Active Timetable Track</h3>
                  <span className="badge-pill pill-green">
                    {(isWeekend || !!settings.is_holiday) ? (settings.is_holiday ? 'Holiday (Weekend Schedule)' : 'Weekend Study') : 'Weekday Grind'}
                  </span>
                </div>
                <div className="timeline-tracker">
                  {TIMETABLE[(isWeekend || !!settings.is_holiday) ? 'weekend' : 'weekday'].map((slot, index) => {
                    const isCurrent = currentSlotIndex === index
                    return (
                      <div key={index} className={`timeline-slot ${isCurrent ? 'active-slot' : ''} ${slot.free ? 'free-period' : ''}`}>
                        <div className="time-bar">
                          <span className="time">{slot.time}</span>
                          {isCurrent && <span className="now-badge">NOW ACTIVE</span>}
                        </div>
                        <div className="details">
                          <span className={`badge ${slot.cls}`}>{slot.label}</span>
                          <p className="desc">{slot.body || 'Commute / Sleep / Protected Free Time.'}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANALYTICS & LOGS TAB */}
        {activeTab === 'analytics' && (
          <div className="tab-pane analytics-container">
            <section className="header-section">
              <div className="header-info">
                <h2>Productivity Analytics & Past Daily Logs</h2>
                <p>Track consistency trends, daily completion rates, and historical to-do lists grouped by dates.</p>
              </div>
              <div className="improvement-badge">
                📈 {calculatedStats.dailyPercent >= 75 ? 'Peak Consistency (+16% growth)' : 'Steady Focus (+8% growth)'}
              </div>
            </section>

            {/* Stat Banner Cards */}
            <div className="analytics-header-banner">
              <div className="analytics-stat-card">
                <div className="analytics-stat-icon">🔥</div>
                <div className="analytics-stat-info">
                  <h4>Daily Streak</h4>
                  <div className="num-val">{calculatedStats.activeStreak} Days</div>
                  <div className="sub-val">{settings.is_holiday ? 'Streak protected on holiday 🏖️' : 'Active completion streak'}</div>
                </div>
              </div>

              <div className="analytics-stat-card">
                <div className="analytics-stat-icon">📊</div>
                <div className="analytics-stat-info">
                  <h4>Today's Completion</h4>
                  <div className="num-val">{calculatedStats.dailyPercent}%</div>
                  <div className="sub-val">{calculatedStats.completedDailyCount} of {calculatedStats.totalDailyCount} tasks done</div>
                </div>
              </div>

              <div className="analytics-stat-card">
                <div className="analytics-stat-icon">🎯</div>
                <div className="analytics-stat-info">
                  <h4>Consistency Index</h4>
                  <div className="num-val">{calculatedStats.productivityIndex}%</div>
                  <div className="sub-val">Blended score across all tracks</div>
                </div>
              </div>

              <div className="analytics-stat-card">
                <div className="analytics-stat-icon">🏖️</div>
                <div className="analytics-stat-info">
                  <h4>Holiday Status</h4>
                  <div className="num-val" style={{ fontSize: '18px', color: settings.is_holiday ? '#ffb74d' : '#858b94' }}>
                    {settings.is_holiday ? 'Holiday Mode' : 'Workday Grind'}
                  </div>
                  <div className="sub-val">{settings.is_holiday ? 'Following weekend schedule' : 'Standard weekday schedule'}</div>
                </div>
              </div>
            </div>

            {/* Consistency & Improvement Graph Card */}
            <div className="graph-card">
              <div className="graph-card-header">
                <h3>
                  <span>📊 Consistency & Task Completion Trend</span>
                </h3>
                <span className="pill-badge pill-purple">Past 7 Days History</span>
              </div>

              <div className="chart-bars-container">
                {calculatedStats.recent7Days.map((day, idx) => (
                  <div key={idx} className="bar-col">
                    <span className="bar-pct-label">{day.isHoliday ? 'Holiday 🏖️' : `${day.pct}%`}</span>
                    <div className="bar-fill-wrap">
                      <div 
                        className={`bar-fill ${day.isHoliday ? 'holiday' : ''}`}
                        style={{ height: `${Math.max(day.pct, 8)}%` }}
                        title={`${day.dateStr}: ${day.pct}% completion (${day.done}/${day.total} done)`}
                      />
                    </div>
                    <span className="bar-date-label">{day.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Days Completed To-Do Lists */}
            <div className="past-days-section">
              <div className="panel-header">
                <h3>Historical Completed Daily Tasks</h3>
                <span className="badge-pill pill-green">Grouped by Dates</span>
              </div>

              <div className="past-days-grid">
                {Object.keys(calculatedStats.historyMap).length === 0 ? (
                  <div className="empty-panel-state">
                    <p>No historical daily tasks recorded yet. Complete tasks today to see your logs!</p>
                  </div>
                ) : (
                  Object.keys(calculatedStats.historyMap).sort().reverse().map((dateStr, idx) => {
                    const dayTasks = calculatedStats.historyMap[dateStr]
                    const doneTasks = dayTasks.filter(t => t.completed)
                    const isHolidayDate = settings.is_holiday && dateStr === new Date().toISOString().split('T')[0]
                    return (
                      <div key={idx} className="past-day-card">
                        <div className="past-day-header">
                          <span className="past-day-date">📅 {dateStr} {isHolidayDate ? '🏖️ (Holiday)' : ''}</span>
                          <span className="past-day-count">{doneTasks.length} / {dayTasks.length} Done</span>
                        </div>
                        <div className="past-task-list">
                          {dayTasks.length === 0 ? (
                            <p className="subtext-detail">No tasks created for this date.</p>
                          ) : (
                            dayTasks.map(t => (
                              <div key={t.id} className={`past-task-item ${t.completed ? 'done' : ''}`}>
                                <span className="past-task-check">{t.completed ? '✓' : '○'}</span>
                                <span>{t.text}</span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* ROADMAP TAB */}
        {activeTab === 'roadmap' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>6-Month Curriculum Roadmap</h2>
                <p>Track your technical learning topic-by-topic. Checking off items updates your overall stats.</p>
              </div>
            </section>

            {/* Month tabs selector */}
            <div className="sub-tabs-row">
              {Object.keys(MONTHS).map(k => {
                const m = MONTHS[k]
                const completedInMonth = m.weeks.reduce((sum, w) => {
                  return sum + w.items.filter(item => completedRoadmap.includes(item.t)).length
                }, 0)
                const totalInMonth = m.weeks.reduce((sum, w) => sum + w.items.length, 0)
                const percent = Math.round((completedInMonth / totalInMonth) * 100)
                
                return (
                  <button
                    key={k}
                    className={`sub-tab ${activeMonthKey === k ? 'active' : ''}`}
                    onClick={() => setActiveMonthKey(k)}
                  >
                    <span>{m.label}</span>
                    <span className="pill-pct">{percent}%</span>
                  </button>
                )
              })}
            </div>

            {/* Active Month Body */}
            {MONTHS[activeMonthKey] && (
              <div className="month-curriculum-container">
                <div className="month-header-info">
                  <h3>{MONTHS[activeMonthKey].title}</h3>
                  <p>{MONTHS[activeMonthKey].intro}</p>
                  <div className="month-ai-focus">
                    <strong>AI Feature focus:</strong> {MONTHS[activeMonthKey].ai}
                  </div>
                </div>

                <div className="weekly-roadmap-grid">
                  {MONTHS[activeMonthKey].weeks.map((week, wIdx) => (
                    <div key={wIdx} className="week-card-learning">
                      <h4>{week.w} — {week.focus}</h4>
                      <div className="roadmap-checklist">
                        {week.items.map((item, itemIdx) => {
                          const isDone = completedRoadmap.includes(item.t)
                          return (
                            <div 
                              key={itemIdx} 
                              className={`roadmap-item-row ${isDone ? 'topic-done' : ''}`}
                              onClick={() => handleToggleRoadmapTopic(item.t)}
                            >
                              <div className="cb-wrapper">
                                <span className={`cb-custom ${isDone ? 'checked' : ''}`}>
                                  {isDone && <CheckIcon />}
                                </span>
                              </div>
                              <div className="topic-text-col">
                                <span className="title-text">{item.t}</span>
                                {item.s && <span className="subtext-detail">{item.s}</span>}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Copiable Prompts Section */}
                <div className="ai-prompts-action-box">
                  <h4>💡 Learn Faster with Claude / ChatGPT</h4>
                  <p className="sub">Copy tailored prompts to run deep-dives on this month's focus areas.</p>
                  <div className="prompts-row">
                    <button 
                      onClick={() => handleCopyPrompt(`Explain in detail, with advanced Python code templates, how to implement context managers, async context managers, and custom decorators tailored for FastAPI middleware and DB sessions.`)}
                      className="prompt-btn"
                    >
                      Decorators & Context Managers Prompt 📋
                    </button>
                    <button 
                      onClick={() => handleCopyPrompt(`Walk me through building a custom RAG (Retrieval-Augmented Generation) pipeline in Python, showing code for chunking strategies, generating text embeddings, and setting up vector searches using pgvector.`)}
                      className="prompt-btn"
                    >
                      AI Stack RAG Setup Prompt 📋
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TIMETABLE TAB */}
        {activeTab === 'timetable' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>Protected Study Timetable</h2>
                <p>Designed around your internship to squeeze 3-4 hours of high-impact learning on weekdays and 12+ hours on weekends.</p>
              </div>
              <div className="sub-tabs-row no-margin">
                <button className={`sub-tab ${activeTTMode === 'weekday' ? 'active' : ''}`} onClick={() => setActiveTTMode('weekday')}>
                  Weekday Grind (Mon - Fri)
                </button>
                <button className={`sub-tab ${activeTTMode === 'weekend' ? 'active' : ''}`} onClick={() => setActiveTTMode('weekend')}>
                  Weekend Sprint (Sat - Sun)
                </button>
              </div>
            </section>

            <div className="timetable-cards-container">
              {TIMETABLE[activeTTMode].map((slot, index) => (
                <div key={index} className={`timetable-slot-card ${slot.free ? 'free-card' : ''}`}>
                  <div className="slot-head">
                    <span className="time-badge">{slot.time}</span>
                    <span className={`badge ${slot.cls}`}>{slot.label}</span>
                  </div>
                  <div className="slot-body-details">
                    <p>{slot.body || 'Protected block. Unwind, exercise, or rest to prevent burnout.'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEETCODE TAB */}
        {activeTab === 'leetcode' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>LeetCode Interview Roadmap</h2>
                <p>100 curated data structures and algorithms questions categorised by preparation phase.</p>
              </div>
            </section>

            <div className="sub-tabs-row">
              {Object.keys(LC_PHASES).map(k => {
                const phase = LC_PHASES[k]
                const completedInPhase = phase.problems.filter(p => completedLC.includes(p.n)).length
                const totalInPhase = phase.problems.length
                const percent = Math.round((completedInPhase / totalInPhase) * 100)
                return (
                  <button 
                    key={k} 
                    className={`sub-tab ${activeLCPhase === k ? 'active' : ''}`}
                    onClick={() => setActiveLCPhase(k)}
                  >
                    <span>{phase.label}</span>
                    <span className="pill-pct">{percent}%</span>
                  </button>
                )
              })}
            </div>

            {/* Active Phase Details */}
            {LC_PHASES[activeLCPhase] && (
              <div className="leetcode-phase-wrapper">
                <div className="lc-phase-header">
                  <h3>{LC_PHASES[activeLCPhase].label} — {LC_PHASES[activeLCPhase].sub}</h3>
                  <div className="target-card">
                    <span>Target Month: <strong>{LC_PHASES[activeLCPhase].months}</strong></span>
                    <span>Solved: <strong>{LC_PHASES[activeLCPhase].problems.filter(p => completedLC.includes(p.n)).length} / {LC_PHASES[activeLCPhase].problems.length}</strong></span>
                  </div>
                </div>

                <div className="leetcode-problems-list">
                  {LC_PHASES[activeLCPhase].problems.map((prob, idx) => {
                    const isDone = completedLC.includes(prob.n)
                    const difficultyClass = prob.d === 'E' ? 'diff-easy' : prob.d === 'M' ? 'diff-medium' : 'diff-hard'
                    const difficultyLabel = prob.d === 'E' ? 'Easy' : prob.d === 'M' ? 'Medium' : 'Hard'
                    
                    return (
                      <div 
                        key={idx} 
                        className={`leetcode-problem-row ${isDone ? 'solved' : ''}`}
                        onClick={() => handleToggleLeetCode(prob.n)}
                      >
                        <div className="cb-column">
                          <span className={`cb-custom ${isDone ? 'checked' : ''}`}>
                            {isDone && <CheckIcon />}
                          </span>
                        </div>
                        <span className="problem-title">{prob.n}</span>
                        <span className={`difficulty-badge ${difficultyClass}`}>{difficultyLabel}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* RESOURCES TAB */}
        {activeTab === 'resources' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>Resources Vault</h2>
                <p>Hand-picked, high-quality, completely free resources to support your 6-month journey.</p>
              </div>
            </section>

            <div className="sub-tabs-row">
              {Object.keys(RESOURCES).map(k => (
                <button
                  key={k}
                  className={`sub-tab ${activeResCat === k ? 'active' : ''}`}
                  onClick={() => setActiveResCat(k)}
                >
                  {RESOURCES[k].label}
                </button>
              ))}
            </div>

            {RESOURCES[activeResCat] && (
              <div className="resources-grid-layout">
                {RESOURCES[activeResCat].items.map((res, idx) => (
                  <div key={idx} className="resource-card-item">
                    <div className="resource-badge-row">
                      <span className={`resource-type-badge ${res.t}`}>{res.tn}</span>
                    </div>
                    <h4>{res.n}</h4>
                    <p className="description">{res.w}</p>
                    <a href={`https://${res.l}`} target="_blank" rel="noopener noreferrer" className="resource-link-anchor">
                      Open Resource Link ↗
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SCRUM REGISTER TAB */}
        {activeTab === 'scrum' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>Scrum Register & Project Milestones</h2>
                <p>Official Scrum reviews, literature review paper preparation, software tool evaluation, and assessment board schedules.</p>
              </div>
            </section>

            <div className="scrum-timeline-grid">
              {SCRUM_REGISTER.map((item, idx) => {
                const isCritical = item.status === 'Critical'
                const isPublished = item.status === 'Published'
                return (
                  <div key={idx} className={`scrum-card ${isCritical ? 'card-critical' : isPublished ? 'card-published' : ''}`}>
                    <div className="scrum-card-header">
                      <div className="scrum-date-badge">
                        <span className="date-str">{item.date}</span>
                        <span className="week-str">{item.week}</span>
                      </div>
                      <div className="scrum-status-pill">
                        <span className={`status-tag ${item.status.toLowerCase()}`}>{item.status}</span>
                        <span className="completion-pct">{item.completion}% Target</span>
                      </div>
                    </div>

                    <h3 className="scrum-milestone-title">{item.milestone}</h3>
                    <p className="scrum-deliverables-text">{item.deliverables}</p>

                    <div className="scrum-progress-bar">
                      <div className="scrum-progress-fill" style={{ width: `${item.completion}%` }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* SYNAPSE IMPLEMENTATION PLAN TAB */}
        {activeTab === 'synapse_plan' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>Synapse Project Implementation Plan</h2>
                <p>Curriculum checklist tracking all 8 modules, 7 AI features, AI infrastructure status, and recommended build order.</p>
              </div>
            </section>

            <div className="synapse-summary-banner">
              <div className="sum-stat">
                <span className="stat-num">8</span>
                <span className="stat-lbl">Core Modules</span>
              </div>
              <div className="sum-stat">
                <span className="stat-num">7</span>
                <span className="stat-lbl">AI Features</span>
              </div>
              <div className="sum-stat">
                <span className="stat-num">6</span>
                <span className="stat-lbl">Build Phases</span>
              </div>
            </div>

            <div className="suggested-phases-section">
              <h3>🚀 Recommended Implementation Phases</h3>
              <div className="phases-grid">
                {SYNAPSE_IMPLEMENTATION_PLAN.suggestedPhases.map((phase, pIdx) => (
                  <div key={pIdx} className="phase-card">
                    <h4>{phase.phase}</h4>
                    <p>{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="synapse-modules-section">
              <h3>📦 Semester 1 Modules Checklist</h3>
              <div className="modules-grid">
                {SYNAPSE_IMPLEMENTATION_PLAN.modules.map(mod => (
                  <div key={mod.id} className="module-card">
                    <h4>{mod.title}</h4>
                    {mod.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="module-sub-block">
                        <h5>{sec.sub}</h5>
                        <div className="checklist-items-list">
                          {sec.items.map((item, iIdx) => (
                            <div key={iIdx} className="check-row-item">
                              <span className={`status-indicator ${item.status}`}>
                                {item.status === 'done' ? '✅' : item.status === 'in_progress' ? '🚧' : '❌'}
                              </span>
                              <span className={`item-name ${item.status === 'done' ? 'done-text' : ''}`}>{item.name}</span>
                              {item.note && <span className="item-note">({item.note})</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-modules-split-grid">
              <div className="ai-card-block">
                <h3>🤖 AI Features Checklist (7 Features)</h3>
                <div className="checklist-items-list">
                  {SYNAPSE_IMPLEMENTATION_PLAN.aiFeatures.map((ai, aIdx) => (
                    <div key={aIdx} className="check-row-item">
                      <span className={`status-indicator ${ai.status}`}>
                        {ai.status === 'done' ? '✅' : ai.status === 'in_progress' ? '🚧' : '❌'}
                      </span>
                      <span className="item-name">{ai.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ai-card-block">
                <h3>⚡ AI Infrastructure Status</h3>
                <div className="checklist-items-list">
                  {SYNAPSE_IMPLEMENTATION_PLAN.aiInfra.map((inf, fIdx) => (
                    <div key={fIdx} className="check-row-item">
                      <span className={`status-indicator ${inf.status}`}>
                        {inf.status === 'done' ? '✅' : inf.status === 'in_progress' ? '🚧' : '❌'}
                      </span>
                      <span className="item-name">{inf.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REMINDERS TAB */}
        {activeTab === 'reminders' && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>Time-Sensitive Reminders</h2>
                <p>Schedule your calendar, interviews, internship deadlines, or study reviews.</p>
              </div>
            </section>

            {/* Reminder Input Form */}
            <div className="reminder-form-section">
              <h3>Create Reminder</h3>
              <form onSubmit={handleAddReminder} className="reminder-add-form">
                <input
                  type="text"
                  className="reminder-input-text"
                  placeholder="Reminder details (e.g. FastAPI review with mentor)..."
                  value={newReminderText}
                  onChange={(e) => setNewReminderText(e.target.value)}
                  required
                />
                
                <div className="form-row-group">
                  <div className="input-block">
                    <label>Due Date & Time:</label>
                    <input
                      type="datetime-local"
                      className="reminder-input-date"
                      value={newReminderDate}
                      onChange={(e) => setNewReminderDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="input-block">
                    <label>Priority:</label>
                    <select
                      className="priority-select-rem"
                      value={newReminderPriority}
                      onChange={(e) => setNewReminderPriority(e.target.value)}
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-add-reminder">
                    <PlusIcon />
                    <span>Create</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Reminders list */}
            <div className="reminders-display-list">
              <h3>Active Reminders</h3>
              {reminders.length === 0 ? (
                <div className="empty-panel-state">
                  <p>No reminders set. Create one above to manage your deadlines!</p>
                </div>
              ) : (
                reminders.map(rem => {
                  const isEditing = editingReminderId === rem.id
                  const isOverdue = rem.due_date && new Date(rem.due_date).getTime() < Date.now() && !rem.completed
                  const timeLabel = getRemainingTime(rem.due_date)

                  return (
                    <div key={rem.id} className={`reminder-row-item ${rem.completed ? 'completed' : ''} ${isOverdue ? 'overdue-item' : ''}`}>
                      <div className="rem-left">
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="checkbox-input"
                            checked={rem.completed}
                            onChange={() => handleToggleReminder(rem.id)}
                          />
                          <span className="checkbox-custom">
                            <CheckIcon />
                          </span>
                        </label>

                        {isEditing ? (
                          <div className="reminder-edit-block">
                            <input
                              type="text"
                              className="reminder-edit-input"
                              value={editingReminderText}
                              onChange={(e) => setEditingReminderText(e.target.value)}
                              autoFocus
                            />
                            <input
                              type="datetime-local"
                              className="reminder-edit-date"
                              value={editingReminderDate}
                              onChange={(e) => setEditingReminderDate(e.target.value)}
                            />
                            <button onClick={() => handleSaveReminder(rem.id)} className="btn-save-inline"><CheckIcon /></button>
                            <button onClick={() => setEditingReminderId(null)} className="btn-close-inline"><CancelIcon /></button>
                          </div>
                        ) : (
                          <div className="rem-content-col">
                            <span className="text">{rem.text}</span>
                            {rem.due_date && (
                              <span className={`time-due ${isOverdue ? 'red-alert' : ''}`}>
                                🕒 {new Date(rem.due_date).toLocaleString()} ({timeLabel})
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {!isEditing && (
                        <div className="rem-right">
                          <span className={`priority-badge ${rem.priority}`}>{rem.priority}</span>
                          <button onClick={() => startEditingReminder(rem)} className="btn-task-action">
                            <EditIcon />
                          </button>
                          <button onClick={() => handleDeleteReminder(rem.id)} className="btn-task-action btn-delete">
                            <TrashIcon />
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}

        {/* CUSTOM LISTS CHECKLIST (e.g. Work, Personal, etc.) */}
        {activeTab.startsWith('category-') && selectedCategory && (
          <div className="tab-pane">
            <section className="header-section">
              <div className="header-info">
                <h2>{selectedCategory.name}</h2>
                <p>
                  {sortedTasks.length === 0 
                    ? 'No tasks in this list' 
                    : `${sortedTasks.filter(t => t.completed).length} of ${sortedTasks.length} tasks completed`
                  }
                </p>
              </div>
            </section>

            {/* Task Add Form */}
            <section>
              <form onSubmit={(e) => handleAddTask(e, selectedCategory.id)} className="task-form">
                <input
                  type="text"
                  className="task-input"
                  placeholder={`Add a new task to ${selectedCategory.name}...`}
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  required
                />
                
                <select
                  className="priority-select"
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value)}
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>

                <button type="submit" className="btn-add-task">
                  <PlusIcon />
                  <span>Add Task</span>
                </button>
              </form>
            </section>

            {/* Sorted Checklist */}
            <section className="tasks-container">
              {sortedTasks.length === 0 ? (
                <div className="empty-state">
                  <ClipboardIcon />
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-text-title)' }}>This list is empty</p>
                    <p style={{ fontSize: '13px', marginTop: '4px' }}>Add tasks above to organize your work.</p>
                  </div>
                </div>
              ) : (
                sortedTasks.map(task => {
                  const isEditing = editingTaskId === task.id

                  return (
                    <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                      <div className="task-item-left">
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
                                if (e.key === 'Escape') setEditingTaskId(null)
                              }}
                            />
                            <button className="btn-edit-action btn-edit-save" onClick={() => handleSaveTaskText(task.id)}>
                              <CheckIcon />
                            </button>
                            <button className="btn-edit-action btn-edit-cancel" onClick={() => setEditingTaskId(null)}>
                              <CancelIcon />
                            </button>
                          </div>
                        ) : (
                          <>
                            <span className="task-text" onClick={() => handleToggleTaskCompletion(task.id)}>{task.text}</span>
                            <span className={`priority-badge ${task.priority}`}>{task.priority}</span>
                          </>
                        )}
                      </div>

                      {!isEditing && (
                        <div className="task-item-right">
                          <button className="btn-task-action" onClick={() => { setEditingTaskId(task.id); setEditingTaskText(task.text); }}>
                            <EditIcon />
                          </button>
                          <button className="btn-task-action btn-delete" onClick={() => handleDeleteTask(task.id)}>
                            <TrashIcon />
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
