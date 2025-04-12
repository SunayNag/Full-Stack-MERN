import React from "react";
import {useState} from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${pass}`)
    }

    return(
        <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl ">
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label className="text-lg">
                        Enter your mail:
                    </label>
                    <br />
                    <input 
                    type="text" 
                    value={email}
                    placeholder="Enter your email..."
                    onChange={(e)=> setEmail(e.target.value)}
                    className="p-2 rounded focus:border-10 w-100"
                    style={{
                        border:'solid black 1px'
                    }}
                    />    
                </div>
                
                <div className="my-4">
                    <label className="text-lg">
                        Enter your Password:
                    </label>
                    <br />
                    <input 
                    type="text" 
                    value={pass}
                    onChange={(e)=> setPass(e.target.value)}
                    placeholder="Enter your password..."
                    className="p-2 rounded focus:border-10 w-100"
                    style={{
                        border:'solid black 1px'
                    }}
                    />
                    <br />
                </div>
                
                <button
                  type="submit"
                  className='bg-violet-500 hover:bg-violet-900 border border-solid border-black rounded-lg w-100 h-8 mt-2 text-white'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login;