import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';

function OTPVerification() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; // Prevent multiple characters
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to go to previous input
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const newOtp = [...otp];
        
        for (let i = 0; i < pastedData.length && i < 6; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);
        
        // Focus the next empty input or the last one
        const nextEmptyIndex = newOtp.findIndex(digit => !digit);
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();
    };

    const handleResendOTP = () => {
        if (canResend) {
            setTimeLeft(120);
            setCanResend(false);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
            // Here you would typically call your API to resend OTP
            console.log('Resending OTP...');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length === 6) {
            console.log('OTP submitted:', otpValue);
            // Handle OTP verification logic here
        } else {
            alert('Please enter all 6 digits');
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">OTP Verification</h1>
                        <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8">Enter the 6-digit code sent to your registered mobile number.</p>
                        
                        <form onSubmit={handleSubmit} className="w-full space-y-6 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#011f24] shadow-2xl">
    
                                
                                
                                <div className="flex items-center justify-center my-4">
                                    <hr className="w-8 h-px bg-[#4A4C51]"/>
                                    <p className="px-4 text-sm text-[#4A4C51]"> OTP Verification</p>
                                    <hr className="w-8 h-px bg-[#4A4C51]"/>
                                </div>

                                {/* OTP Input Boxes */}
                                <div className="flex justify-center space-x-3 mb-6">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={el => inputRefs.current[index] = el}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            onPaste={handlePaste}
                                            className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                                            autoComplete="off"
                                        />
                                    ))}
                                </div>

                                {/* Timer and Resend */}
                                <div className="text-center space-y-3">
                                    {!canResend ? (
                                        <p className="text-sm text-white/70">
                                            Resend OTP in{' '}
                                            <span className="font-mono text-cyan-400 font-semibold">
                                                {formatTime(timeLeft)}
                                            </span>
                                        </p>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleResendOTP}
                                            className="text-sm text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200"
                                        >
                                            Resend OTP
                                        </button>
                                    )}
                                </div>
                            
    
                           <div className="flex justify-end mr-5">
                                <Link to="/login" className='text-white hover:underline hover:text-blue-600 text-xs'>back to login</Link>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full p-4 mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={otp.some(digit => !digit)}
                            >
                                Confirm OTP
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

export default OTPVerification;