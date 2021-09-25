import React from 'react'

const TodoItem = ({title, status, setTodoArray, index, todoArray}) => {

    const completeOrDeleteTodo = () => {
        if (status) {
            const myArr = [...todoArray];
            setTodoArray(myArr.filter((e) => e !== myArr[index]));
            // myArr.splice(index, 1);
            // setTodoArray(myArr);

        } else {
            const myArr = [...todoArray];
            myArr[index].status = true;
            setTodoArray(myArr)
            console.log(todoArray[index].status);        
        }
        
    }

    return (
        <div className="flex justify-between item-center w-full mt-5 border-b-2 border-second_green py-3">
            <p className={`${status ? "line-through" : ""}`}>{title}</p>
            <button 
                className={`${status ? "bg-third_green" : "bg-transparent"} px-5 py-2 text-iron_blue`}
                onClick={completeOrDeleteTodo}
                >
                {status ? "Borrar" : "Completar"}
            </button>
        </div>
    )
}

export {TodoItem}
