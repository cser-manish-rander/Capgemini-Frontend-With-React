import { isValidElement } from "react";
import { useState } from "react"

const ControlledForm = () => {
    let [student, setStudent] = useState({
        userName: null,
        email: null,
        password: null
        })
    function updateTheState(e){
        setStudent(prev=>({...prev, [e.target.name]:e.target.value }))
    }

    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(student);
                
            }}>
                <div>
                    <label htmlFor="a">UserName</label>
                    <input type="text" name="userName" onChange={(e)=>{
                        updateTheState(e);
                    }} id="userName"/>
                </div>
                <div>
                    <label htmlFor="a">Email</label>
                    <input type="text" name="email" onChange={(e)=>{
                        updateTheState(e);
                    }} id="email"/>
                </div>
                <div>
                    <label htmlFor="a">Password</label>
                    <input type="text" name="password" onChange={(e)=>{
                        updateTheState(e);
                    }} id="password"/>
                </div>
                <button>Submit the Form</button>
            </form>

            <div>
                <h2>{student.userName}</h2>
                <h2>{student.email}</h2>
                <h2>{student.password}</h2>
            </div>
        </>
    )
}

export default ControlledForm;