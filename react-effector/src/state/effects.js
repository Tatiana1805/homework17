import { createEffect } from "effector";

//АССИНХРОН ОПЕРАЦИИ
//Загрузка от сервера (мб реальная, но сейчас иммитация)
export const fetchTask = createEffect(async () => {
    //возвращаем resolve
    return new Promise((resolve) => {
        setTimeout(() => {
            //через 1сек выводдится список
            resolve([
                { id: 0, text: 'Проверь, все ли задания выполнены', completed: false},
                { id: 1, text: 'Очисть список задач', completed: false},
            ])
        }, 1000)
    });
});