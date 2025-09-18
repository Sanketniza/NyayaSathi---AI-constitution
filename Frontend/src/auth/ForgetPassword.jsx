import React from 'react'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

import Email from '../assets/Icon/email (1).png';

import { Link } from 'react-router-dom';


function ForgetPassword() {
    return (
        <>
            <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
                {/* Cyan Spotlight Background overlay shared by navbar and content */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0.10) 22%, rgba(0, 0, 0, 0) 60%)'
                    }}
                />

                {/* Navbar sits on top of the same background */}
                <Navbar />
            

            {/* Page content fills available space */}
            <main className="relative mx-auto max-w-6xl px-4 flex-1 w-full flex items-center justify-center">
                <section className="w-full max-w-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight"> Forget Password</h1>
                    <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8">Start exploring the platform in seconds.</p>
                    
                    <form className="w-full space-y-6 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#011f24] shadow-2xl">

                           
                            
                            <div className="flex items-center justify-center my-4">
                                <hr className="w-8 h-px bg-[#4A4C51]"/>
                                <p className="px-4 text-sm text-[#4A4C51]">Reset your password</p>
                                <hr className="w-8 h-px bg-[#4A4C51]"/>
                            </div>                        
                        
                        <div className="space-y-2">
                            <label className="text-white font-medium text-sm tracking-wide">Email</label>
                            <div className="relative">
                                <img src={Email} className="absolute w-5 h-5 left-4 top-1/2 transform -translate-y-1/2 opacity-70" alt="email" />
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email" 
                                    className="w-full p-4 pl-12 text-white bg-white/10 border-2 border-white/20 rounded-full placeholder:text-white/60 focus:bg-white/15 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all outline-none" 
                                />
                            </div>
                        </div>

                        
                       

                        <div className="flex justify-end mr-5">
                           <Link to="/login" className='text-white hover:underline hover:text-blue-600 text-xs'>back to login</Link>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full p-4 mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]"
                        >
                            Send Reset OPT
                        </button>

                        <p className="my-2 text-xs text-center text-white">Do not have an account?  <Link to='/register' className="text-base text-blue-900 hover:underline">Register</Link> </p>
                        
                    </form>
                </section>
            </main>

            <Footer />               

            </div>
        </>
    )
}

export default ForgetPassword;