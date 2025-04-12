import React from "react";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "LogIn" : "SignUp"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border-2 border-gray-400 rounded-lg"
            ></input>
          )}
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
          />
          <button className="w-full bg-blue-500 text-white p-2 border border-black rounded-2xl hover:bg-blue-800">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Alreay have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 underline ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
