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
//after hitting the add button, call function to add new task
//get the text in the to the element of newTask
//updator function using previous state of tasks (t)
//need to prevent adding blank task
function addTask(){

    if(newTask.trim() !==""){
    
    setTasks( t =>[...t, newTask]);
    setNewTask("");
    }
}
//function to delete task. One parameter of index.
//an index of the list item for deleting. Index of an element to be deleted
//if the current index of i is not strictly not equal to index you want to delete, update to new array
//of updated Tasks. If the i adn index match, filter it out 
//new array of Updated Tasks should not have the taken element.
function deleteTask(index){

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

function editTask(index){

}
function doneTask(index){

}
    return (
    <div className="main">
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
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="edit-button"
                        onClick={() => editTask(index)}>
                        Edit
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className="complete-button"
                        onClick={() => doneTask(index)}>
                        Complete
                    </button>
                </li>
            )}
        </ol>
    </div>
    </div>
    );
}

export default ToDoList