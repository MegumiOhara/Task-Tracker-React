import React, { useState } from "react";
import EditToDo from "./EditToDo";

function ToDoList(){

//2 state variables.
//initial state of tasks is going to be an empty array
    const [tasks, setTasks] = useState([]);
//state variable for a new task. Initial state is empty string
    const [newTask, setNewTask] = useState("");
//index of task being edited
const [editingIndex, setEditingIndex] = useState(null);
//text of the task being edited
const [editingText, setEditingText] = useState("");

//Declare the function for the textbox for typing in
function handleInputChange(event){
    // setNewTask to access event parameter, access target and value
    setNewTask(event.target.value);
}

//function to add task. No parameters
//after hitting the add button, call function to add new task
//get the text in the to the element of newTask
//updator function using previous state of tasks (t)
//need to prevent adding blank task
function addTask(){

    if(newTask.trim() !==""){ 
    setTasks((t) =>[...t, { text: newTask, completed: false}]);
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
    //set the editing index to the clicked tasks index
        setEditingIntex(index);
    //prefill the input with the current task 
    setEditingText(tasks[index].text);
    }
    //Handle input change for editing task
    function handleEditInputChange(event){
        setEditingText(event.targe.value);
    }
    //save the edited Task
    function saveTask(){
        const updatedTasks=tasks.map((task,i)=>
        i === editingIndex?{...task,text:editingText}:task);
    
        setTasks(updatedTasks);
        setEditingIndex(null); //clear editing state
        setEditingText(""); //clear editing input
    }
    //cancel editing
    function cancelEdit(){
        setEditingIndex(null);
        setEditingText("");
    }
function doneTask(index){
    const updatedTasks = tasks.map((task, i) =>{
        if (i === index){
            return {...task, completed: !task.completed};
        }
        return task;
    })
    setTasks(updatedTasks);
}
    return (
    <div className="main">
    <div className="track-list">
        <h1>Task Tracker</h1> 
        <div className="track-box">
            <input
                className="track-input"
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
        <ul>
            {tasks.map((task, index) => 
                <li key={index}>
                    {editingIndex === index ? (
                        <EditToDo
                            taskText={editingText}
                            handleEditInputChange={handleEditInputChange}
                            saveTask={saveTask}
                            cancelEdit={cancelEdit}
                            />
                    ) : (
                        <>
                        <span className={`text ${task.completed ? "completed" : ""}`}>
                            {task.text}
                        </span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                            title="Delete task">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <input
                            className="complete"
                            type="checkbox"
                            onChange={() => doneTask(index)}
                            checked={task.completed}></input>
                        </>
                    )}
                </li>
            )}
        </ul>
    </div>
    </div>
    );
}

export default ToDoList