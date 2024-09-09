import React, { useState} from "react";


function ToDoList(){

//2 state variables. tasks in array of string.
//initial state of tasks is going to be an empty array
    const [tasks, setTasks] = useState([])
//state variable for a new task. Initial state is empty string
    const [newTask, setNewTask] = useState("")

//Declare the function for the textbox for typing in
function handleInputChange(event){
    // setNewTask to access event parameter, access target and value
    setNewTask(event.target.value)
}
//function to add task. No parameters
function addTask(){

}
//function to delete task. One parameter of index.
//an index of the list item for deleting
function deleteTask(index){

}

function editTask(index){

}
function doneTask(index){

}
    return (
    <div className="track-list">
        <h1>Task Tracker</h1> 
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick= {addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((tasks, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                </li>
            )}
        </ol>
    </div>
    );
}

export default ToDoList