import { tasksStore } from '../state/store'
import { useUnit } from 'effector-react'
import { statusTask } from '../state/events'
import './TaskList.css'

const TasksList = () =>{
    const tasks = useUnit(tasksStore)

    return(
        <ul>
            {tasks.map((task) =>(
                <li key={task.id}>
                    {task.text}
                    {/* добавляем нашу функцию из events */}
                    <button onClick={() => statusTask(task.id)}>
                        {task.completed ? 'Выполнено' : 'Не выполнено'}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TasksList