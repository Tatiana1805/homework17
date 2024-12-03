import { createStore } from 'effector'
import { addTasks, statusTask } from './events'
import { fetchTask } from './effects'

//ХРАНИЛИЩЕ
//[] - изначальное значение пустой массив
export const tasksStore = createStore([])
//.on - с этим хранилищем можно произвети дей-ия (addTasks - сама функция(действие))
//state - изначальные данные
//tasks - добавляем сами задачи и state изменяется
//[...state, task] - получили старый список задач и добавили новую
    .on(addTasks, (state, task) => [...state, task])
    //изменение статуса
    .on(statusTask, (state, id) => 
        //перебираем массив задач, если ИД совпадает, то меняем статус на противоположный
        state.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task 
    ))
//действие поисходит после завершения действий
    .on(fetchTask.doneData, (state, task) => [...task, ...state]);