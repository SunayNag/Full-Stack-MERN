import React from "react";
import {useState} from "react";

function Form() {
    const [name, setName]= useState('');
    const handleChange= (e)=>{
      setName(e.target.value)
    }
  return (
    <div className='p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl ' >
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(name);
      }}>
        <label>
          Enter your name:</label>
          <br />
          <input
            type="text"
            value={name}
            className='border p-2 rounded w-100'
            onChange={handleChange}
            placeholder='Type a text...'
            
            style={{
              border:'solid black 1px'
            }}
          />
          <br />
          <button type="submit"
          className='bg-violet-500 hover:bg-violet-900 border-none border-solid border-black rounded-lg w-100 h-8 mt-2 text-white'
          >Submit</button>
        
      </form>
    </div>
  )
}

function Text(){
    const [text, setText] = useState('');

    return (
        <div className='p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl '>
          <input 
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            className='border p-2 rounded w-1/2 text-center'  
            placeholder='Type something...'
            style={{
                border:'solid black 1px'
            }}
          />
          <p className='mt-2 text-gray-500'>You typed: {text}</p>
        </div>
      );
}

function UserCard({name, email}) {
    name = "Sunay Nagpure";
    email = "hello@gmail.com";
    return(
        <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-[#3D8D7A] w-150 border rounded-xl">
            <div className="px-4 py-2 text-2xl text-[#FBFFE4]">
                {name}
            </div>
            <div className="px-4 py-2 text-l text-[#FBFFE4]">
                {email}
            </div>

        </div>
    )
}

function Button(){
    return (
        <div className='p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-gray-200 w-150 rounded-xl '>
            <label className="text-lg my-3 ">
                This div is for button
            </label>
            <button
            onClick={(e) => {
                console.log("Button Clicked!");
            }}
            className='bg-blue-500 hover:bg-blue-950 text-white border rounded-md px-2 py-1 '>Click me</button>
        </div>
    )
}

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
                  className='bg-violet-500 hover:bg-violet-900 border-none border-solid border-black rounded-lg w-100 h-8 mt-2 text-white'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form; 
export {Text, UserCard, Button, Login};