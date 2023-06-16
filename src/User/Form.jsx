import React from "react";
import { useState } from "react";

function Form (props){
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Description, setDescription] = useState('');

    const nameHandler = (event) => {
        props.nameChange(event.target.value);
    }
    const emailHandler = (event) => {
        props.emailChange(event.target.value);
    }
    const descriptionHandler = (event) => {
        props.descriptionChange(event.target.value);
    }
    const saveHandler = (event) => {

        if (props.Name.length !== 0 && props.Email.length !== 0 && props.Description.length !== 0){
            console.log(props.Name, props.Email);
            props.saveCard();
            
        }else{
            event.preventDefault()
            alert('Fields required')
        }
    }
    const editHandler = (event) => {
        event.preventDefault();
        props.updateCard();
    }
    

    return (
        <>
        <h1>User form</h1>
        <form>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Enter your name" 
            value={props.Name} 
            onChange={nameHandler}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com" 
            value={props.Email} 
            onChange={emailHandler}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            value={props.Description} 
            onChange={descriptionHandler}></textarea>
        </div>
        {props.showEdit === false ?
        (<button type="button" className="btn btn-primary float-right" onClick={saveHandler}>Save</button>)
        :(<button type="button" className="btn btn-primary float-right" onClick={editHandler}>Edit</button>)}
        </form>
        </>
    )
}
export default Form;