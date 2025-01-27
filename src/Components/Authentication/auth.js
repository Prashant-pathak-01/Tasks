import React, { useState } from 'react';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen bg-[#0C67A0]">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                <div className="flex justify-between mb-5">
                    <button
                        className={`w-1/2 p-2 text-lg rounded-tl-lg ${isLogin ? 'bg-[#033452] text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 p-2 text-lg rounded-tr-lg ${!isLogin ? 'bg-[#033452] text-white' : 'bg-gray-200'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>
                {isLogin ? (
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-xl">Login Form</h2>
                        <input className="p-2 mb-3 border border-gray-300 rounded" type="email" placeholder="Email" />
                        <input className="p-2 mb-3 border border-gray-300 rounded" type="password" placeholder="Password" />
                        <a className="text-blue-600 mb-3 text-right" href="#">
                            Forgot Password?
                        </a>
                        <button className="p-2 bg-[#033452] text-white rounded">Login</button>
                        <p className="text-center">
                            Not a Member?{' '}
                            <a className="text-blue-600" href="#" onClick={() => setIsLogin(false)}>
                                Signup now
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-xl">Signup Form</h2>
                        <input className="p-2 mb-3 border border-gray-300 rounded" type="email" placeholder="Email" />
                        <input className="p-2 mb-3 border border-gray-300 rounded" type="password" placeholder="Password" />
                        <input className="p-2 mb-3 border border-gray-300 rounded" type="password" placeholder="Confirm Password" />
                        <button className="p-2 bg-[#033452] text-white rounded">Signup</button>
                    </div>
                )}
            </div>
        </div>
    );
}
