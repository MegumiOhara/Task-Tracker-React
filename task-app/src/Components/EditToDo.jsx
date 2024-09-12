import React from "react";

function EditToDo({taskText, handleEditInputChange, saveTask, cancelEdit }){


return(
    <>
    <input
    className= "edit-input"
    type="text"
    value={taskText}
    onChange={handleEditInputChange}>
    </input>
    <button
    className="save-button"
    OnClick={saveTask}>
        Save
    </button>
    <button
    className="cancel-button"
    onClick={cancelEdit}>
        Cancel
    </button>
    </>
)

};


export default EditToDo;