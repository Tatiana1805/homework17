import './App.css'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import { useEffect } from 'react'
import { fetchTask } from './state/effects'

function App() {
  //useEffect - хук, который срабатывает при возникновении событий
  //если прописать так, то он срабатывает при любых изменениях
  useEffect(() => {
    fetchTask()
//срабатывает 1 раз
  }, [])

  return (
    <div className='container'>
      <h1>Список задач</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App
