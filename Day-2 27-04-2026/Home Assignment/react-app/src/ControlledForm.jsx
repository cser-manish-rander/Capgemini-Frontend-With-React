import { isValidElement } from "react";
import { useState } from "react"

const ControlledForm = () => {
    let [student, setStudent] = useState({userName: null,
        email: null,
        password: null,
        gender: null,
        skills: []})
    function updateTheState(e){
        const {name, value, checked, type} = e.target;

        if(type=="checkbox"){
            if(checked){
                setStudent(prev=>({
                    ...prev, [name]:[...prev[name], value]
                }))
            }
            else {
                setStudent((prev) => ({
                    ...prev,
                    [name]: prev[name].filter((item) => item !== value)
                }));
            }
        }
        else {
            setStudent((prev) => ({
                ...prev,
                [name]: value
            }));
        }
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
                <div>
                    <label htmlFor="male">Male</label> <input type="radio" value="male" onChange={(e)=>{
                        updateTheState(e);
                    }} name="gender" id="male" />
                    <label htmlFor="female">Female</label> <input type="radio" value="female" name="gender" id="female" onChange={(e)=>{
                        updateTheState(e);
                    }}/>
                </div>
                <div>
                <h3>Select Skills</h3>
                    <label htmlFor="html">HTML</label>
                    <input type="checkbox" name="skills" id="html" value="HTML" onChange={(e)=>{
                        updateTheState(e);
                    }}/>

                    <label htmlFor="css">CSS</label>
                    <input type="checkbox" name="skills" id="css" value="CSS" onChange={(e)=>{
                        updateTheState(e);
                    }}/>

                    <label htmlFor="js">JavaScript</label>
                    <input type="checkbox" name="skills" id="js" value="JavaScript" onChange={(e)=>{
                        updateTheState(e);
                    }}/>
                </div>
                <button>Submit the Form</button>
            </form>

            <div>
                <h2>{student.userName}</h2>
                <h2>{student.email}</h2>
                <h2>{student.password}</h2>
                <h2>{student.gender}</h2>
                <h2>{student.skills.join(" ")}</h2>
            </div>
        </>
    )
}

export default ControlledForm 