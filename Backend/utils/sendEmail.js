import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Beautiful OTP Email Template
const createOTPEmailTemplate = (otp, purpose = 'verification') => {
  const currentYear = new Date().getFullYear();
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NyayaSathi - ${purpose === 'verification' ? 'Email Verification' : 'Password Reset'}</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
      .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; color: white; }
      .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; letter-spacing: 2px; }
      .tagline { font-size: 16px; opacity: 0.9; font-weight: 300; }
      .content { padding: 40px 30px; }
      .title { font-size: 28px; color: #333; margin-bottom: 20px; text-align: center; font-weight: 600; }
      .subtitle { font-size: 16px; color: #666; margin-bottom: 30px; text-align: center; line-height: 1.6; }
      .otp-container { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; border-radius: 15px; text-align: center; margin: 30px 0; position: relative; }
      .otp-label { color: white; font-size: 16px; margin-bottom: 15px; font-weight: 500; }
      .otp-code { font-size: 42px; font-weight: bold; color: white; letter-spacing: 8px; margin: 15px 0; font-family: 'Courier New', monospace; text-shadow: 0 2px 4px rgba(0,0,0,0.3); user-select: all; cursor: pointer; }
      .copy-instruction { color: rgba(255,255,255,0.9); font-size: 14px; margin-top: 10px; }
      .validity { background: #fff3cd; color: #856404; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #ffc107; }
      .security-notice { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #dc3545; }
      .company-info { background: #f8f9fa; padding: 25px; border-radius: 15px; margin: 30px 0; }
      .company-title { font-size: 20px; color: #495057; margin-bottom: 15px; font-weight: 600; }
      .company-desc { color: #6c757d; line-height: 1.7; margin-bottom: 20px; }
      .features { display: flex; flex-wrap: wrap; gap: 15px; }
      .feature { background: white; padding: 15px; border-radius: 10px; flex: 1; min-width: 150px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .feature-icon { font-size: 24px; margin-bottom: 8px; }
      .feature-text { font-size: 14px; color: #495057; font-weight: 500; }
      .footer { background: #343a40; color: white; padding: 30px; text-align: center; }
      .footer-links { margin: 20px 0; }
      .footer-link { color: #adb5bd; text-decoration: none; margin: 0 15px; font-size: 14px; }
      .footer-link:hover { color: white; }
      .social-links { margin: 20px 0; }
      .social-link { display: inline-block; margin: 0 10px; color: #adb5bd; font-size: 20px; text-decoration: none; }
      .copyright { font-size: 12px; color: #6c757d; margin-top: 20px; }
      @media (max-width: 600px) {
        .container { margin: 10px; border-radius: 15px; }
        .header { padding: 30px 20px; }
        .content { padding: 30px 20px; }
        .otp-code { font-size: 36px; letter-spacing: 6px; }
        .features { flex-direction: column; }
        .feature { min-width: auto; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo">⚖️ NyayaSathi</div>
        <div class="tagline">AI-Powered Constitutional Assistant</div>
      </div>

      <!-- Content -->
      <div class="content">
        <h1 class="title">${purpose === 'verification' ? '🔐 Verify Your Email' : '🔑 Reset Your Password'}</h1>
        <p class="subtitle">
          ${purpose === 'verification' 
            ? 'Welcome to NyayaSathi! Please verify your email address to activate your account and start exploring AI-powered constitutional assistance.'
            : 'We received a request to reset your password. Use the OTP below to create a new password for your account.'
          }
        </p>

        <!-- OTP Container -->
        <div class="otp-container">
          <div class="otp-label">Your ${purpose === 'verification' ? 'Verification' : 'Reset'} Code</div>
          <div class="otp-code" onclick="selectOTP(this)">${otp}</div>
          <div class="copy-instruction">👆 Click the code above to select and copy</div>
        </div>

        <!-- Validity Notice -->
        <div class="validity">
          ⏰ <strong>Important:</strong> This OTP is valid for <strong>10 minutes</strong> only. Please use it promptly to complete your ${purpose === 'verification' ? 'email verification' : 'password reset'}.
        </div>

        <!-- Security Notice -->
        <div class="security-notice">
          🛡️ <strong>Security Alert:</strong> Never share this OTP with anyone. NyayaSathi will never ask for your OTP via phone or chat. If you didn't request this, please ignore this email.
        </div>

        <!-- Company Info -->
        <div class="company-info">
          <div class="company-title">🚀 About NyayaSathi</div>
          <div class="company-desc">
            NyayaSathi is India's premier AI-powered constitutional assistant, designed to make legal knowledge accessible to everyone. Our platform leverages cutting-edge artificial intelligence to provide instant, accurate guidance on constitutional matters, legal procedures, and citizen rights.
          </div>
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🤖</div>
              <div class="feature-text">AI Legal Assistant</div>
            </div>
            <div class="feature">
              <div class="feature-icon">📚</div>
              <div class="feature-text">Constitutional Database</div>
            </div>
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <div class="feature-text">Instant Answers</div>
            </div>
            <div class="feature">
              <div class="feature-icon">🔒</div>
              <div class="feature-text">Secure & Private</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Help Center</a>
          <a href="#" class="footer-link">Contact Us</a>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">📧</a>
          <a href="#" class="social-link">🐦</a>
          <a href="#" class="social-link">💼</a>
          <a href="#" class="social-link">📱</a>
        </div>
        <div class="copyright">
          © ${currentYear} NyayaSathi. All rights reserved. | Making constitutional knowledge accessible to all Indians.
        </div>
      </div>
    </div>

    <script>
      function selectOTP(element) {
        const range = document.createRange();
        range.selectNodeContents(element);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        // Try to copy to clipboard
        try {
          document.execCommand('copy');
          alert('✅ OTP copied to clipboard!');
        } catch (err) {
          alert('Please manually copy the selected OTP code');
        }
      }
    </script>
  </body>
  </html>
  `;
};

// Enhanced sendEmail function with OTP support
const sendEmail = async (to, subject, text, otp = null, purpose = 'verification') => {
  const mailOptions = {
    from: `"⚖️ NyayaSathi | AI Constitutional Assistant" <${process.env.SMTP_MAIL}>`,
    to,
    subject: `🔐 ${subject} | NyayaSathi`,
  };

  // If OTP is provided, send beautiful HTML email, otherwise send plain text
  if (otp) {
    mailOptions.html = createOTPEmailTemplate(otp, purpose);
    mailOptions.text = `Your ${purpose} OTP is: ${otp}. This code is valid for 10 minutes only. Never share this code with anyone. - NyayaSathi Team`;
  } else {
    mailOptions.text = text;
  }

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
