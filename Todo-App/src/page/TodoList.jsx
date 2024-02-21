import { useEffect, useState } from "react"
import { fetchTodoData } from "../Data/TodoData"

export function TodoList(){

    const [todaList,setTodoList] =useState([])

    useEffect(()=>{
        setTodoList(fetchTodoData)
    },[])

    return(
        <div>
            Todo List
        </div>
    )
}