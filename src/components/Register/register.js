import React  from "react";
import "./register.css";

const Register = () => {
     
     return(
          <div className="register">
            <h1>Register</h1>
            <input type="text"  placeholder="Enter your Name" ></input>
            <input type="text"  placeholder="Enter your Email Address" ></input>
            <input type="password"  placeholder="Enter your password" ></input>
            <input type="password"  placeholder="Confirm your password" ></input>
            <div className="button">Register</div>

            <div>or</div>
            <div className="button">Login</div>
         </div>
        );
    

    /*const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text"  name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email Address" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm your password" onChange={handleChange}></input>
            <div className="button">Register</div>

            <div>or</div>
            <div className="button">Login</div>
        </div>
    )*/
}

export default Register