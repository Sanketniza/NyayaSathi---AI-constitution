import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">MyApp</Link>
        <div className="space-x-6">
          <Link to="/" className="text-white/90 hover:text-white transition">Home</Link>
          <Link to="/login" className="text-white/90 hover:text-white transition">Log In</Link>
          <Link to="/register" className="text-white/90 hover:text-white transition">Register</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;