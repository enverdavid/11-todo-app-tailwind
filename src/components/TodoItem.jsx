import React from 'react'

const TodoItem = ({title, status}) => {
    return (
        <div className="flex justify-between item-center w-full mt-5 border-b-2 border-second_green py-3">
            <p>{title}</p>
            <button className={`${status ? "bg-third_green" : "bg-transparent"} px-5 py-2 text-iron_blue`}>
                {status ? "Borrar" : "Completar"}
            </button>
        </div>
    )
}

export {TodoItem}
