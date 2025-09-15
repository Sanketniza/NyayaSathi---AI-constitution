import React from 'react'

function Footer() {
    return (
        <>
            <footer className="my-5 border-t border-white/10 bg-black/50 backdrop-blur-md">
                <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white/70">
                    &copy; {new Date().getFullYear()} NyayaSathi. All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer;   