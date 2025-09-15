import React from 'react'
import Navbar from './Navbar';

function Register() {
    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden">
            {/* Cyan Spotlight Background overlay shared by navbar and content */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0.10) 22%, rgba(0, 0, 0, 0) 60%)'
                }}
            />

            {/* Navbar sits on top of the same background */}
            <Navbar />

            {/* Page content */}
            <main className="relative mx-auto max-w-6xl px-4 py-16">
                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Create your account</h1>
                <p className="text-base text-white/70 mb-8">Start exploring the platform in seconds.</p>
                <form className="max-w-md space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                    <input type="email" placeholder="Email" className="w-full h-11 rounded-md bg-white/10 focus:bg-white/20 text-white placeholder:text-white/50 px-3 outline-none ring-1 ring-white/20 focus:ring-accent transition" />
                    <input type="password" placeholder="Password" className="w-full h-11 rounded-md bg-white/10 focus:bg-white/20 text-white placeholder:text-white/50 px-3 outline-none ring-1 ring-white/20 focus:ring-accent transition" />
                    <button type="submit" className="w-full h-11 rounded-md bg-accent text-white font-medium hover:bg-accent-secondary transition">Sign Up</button>
                </form>
            </main>
        </div>
    )
}

export default Register;