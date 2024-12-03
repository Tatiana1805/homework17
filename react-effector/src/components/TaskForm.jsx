import { useState } from "react";
import { tasksStore } from '../state/store'
import { useUnit } from 'effector-react'
import { addTasks } from '../state/events'
import './TaskForm.css'

const TaskForm = () => {
    const [task, setTask] = useState('')
    //Для того, чтобы id зависел от длины задач
    const tasks = useUnit(tasksStore)
    
    const handleTask = (e) => {
        e.preventDefault();
        if(task.trim()){
            //определим обьект
            const newTask = {
                //длина нашего массива +1
                id: tasks.length + 1,
                text: task,
                completed: false,
            }
            //Добавляем задачу в хранилище
            addTasks(newTask)
            setTask('')
        }
    }

    return(
        <form onSubmit={handleTask}>
            <input type="text" placeholder="Напишите задачу"
            //двухстороннюю связь подключаем
            value={task}
            onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Добавить</button>
        </form>
    )
}

export default TaskForm;