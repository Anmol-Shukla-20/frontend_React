'use client';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const TodoList = () => {

    // let count = 0;

    // const [count, setCount] = useState(0);

    // const [taskList,setTaskList] = useState([
    //     {text:'DHA_19 Applied System Engineering',completed:false},
    //     {text:'Practical Assignment of ML Lab',completed:false},
    //     {text:'Gfr sir Assignment questions ',completed:false},
    //     {text:'Gfr sir Assignment Viva For AA',completed:false},
    //     {text:'Portfolio website left',completed:false},
    // ]);   // commented the self added tasks

    const [taskList,setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (!e.target.value.trim()) return;

        if (e.code === "Enter") {
            console.log(e.target.value);

            const newTask = {text:e.target.value,completed : false,addedAt: new Date()};
            
            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }
    }

    //adding delete functionality

    const deleteTask = (index) => {
        console.log(index);
        const temp = taskList;
        temp.splice(index,1);
        setTaskList([...temp]);
    }
    
// task element ko individual jsx element k liye..objects cant be displayed directly here in jsx div leads to ui creation 
    return (
        <div className='min-h-screen bg-gray-50 my-10'>
            <h1 className='text-center font-bold text-3xl'>
                ToDo List
            </h1>

            <div className='container mx-auto bg-white shadow rounded-lg'>
                <div className='p-5'>
                    <input onKeyDown = {addNewTask} type="text" className='w-full p-3 border-2 rounded-md' />
                </div>
                <div className='border-t-1 p-5 bg-blue-100'>
                    {/* <p className='text-gray-300 font-bold text-center'>
                        No Todos to show here 🤗
                    </p> */}

                    {/* {['a','b','c']} */}

                    {taskList.map((task,index) =>{
                        return <div key = {index} className = 'border p-4 mb-5 shadow-md rounded-md bg white flex justify-between items-center'>
                            <div className = "flex gap-3">
                                <input type = "checkbox"
                                onChange={(e) => {
                                    const temp = taskList;
                                    temp[index].completed = e.target.checked;
                                    // printing the values of tagret and temp.. 
                                    // console.log(e.target.checked);
                                    // console.log(temp);
                                    setTaskList([...temp]);
                                }}
                            />
                                <p className = {`font-bold ${task.completed &&'line-through'}`}>{task.text}</p>
                            </div>
                            
                            <p className = "font-bold">
                                {task.addedAt.toDateString()}
                                {' '}
                                {task.addedAt.toLocaleTimeString()}
                            </p>
                            {
                                task.completed? (
                                    <p className ='bg-green-700 text-white px-2 rounded-full'>Completed</p>
                                ):(
                                    <p className = 'bg-yellow-600 text-white px-2 rounded full'>Pending</p>
                                )
                            }
                            <button onClick = {() => {deleteTask(index)}} classname = "bg-red-500 text-white p-2 rounded-md" > 
                                <Trash2/>
                            </button>
                        </div>
                    })}
                </div>
            </div>


            {/* <h1 className='text-4xl'>{count}</h1> */}

            {/* <button
                onClick={() => {
                    setCount(count + 1);
                    console.log(count + 1);
                }}
                className='border p-3'>
                Add Count
            </button> */}
        </div>
    )
}
export default TodoList;

