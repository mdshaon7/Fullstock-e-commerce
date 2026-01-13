const nodemailer = require("nodemailer");

exports.sendEmail = async (name,email,otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Your Mobile Gadget Verificetion Code",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification - Mobile Gadget</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f0f4f8;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      border: 1px solid #e0e0e0;
    }

    .email-header {
      background: linear-gradient(90deg, #1E3A8A, #3B82F6);
      color: #ffffff;
      text-align: center;
      padding: 35px 20px;
    }
    .email-header h1 {
      margin: 0;
      font-size: 26px;
      letter-spacing: 1px;
    }

    .email-body {
      padding: 35px 30px;
      color: #333333;
      text-align: center;
    }
    .email-body p {
      font-size: 16px;
      line-height: 1.6;
      margin: 15px 0;
    }

    .otp-code {
      display: inline-block;
      margin: 25px 0;
      padding: 18px 28px;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 6px;
      color: #1E3A8A;
      background-color: #DBEAFE;
      border-radius: 8px;
      border: 1px solid #3B82F6;
    }

    .email-footer {
      background-color: #f0f4f8;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #666666;
    }

    @media screen and (max-width: 600px) {
      .email-container {
        margin: 20px 10px;
      }
      .otp-code {
        font-size: 24px;
        padding: 15px 20px;
      }
      .email-header h1 {
        font-size: 22px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Mobile Gadget OTP Verification</h1>
    </div>
    <div class="email-body">
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thank you for registering at <strong>mobilegadget.com</strong>!</p>
      <p>Your One-Time Password (OTP) is:</p>
      <div class="otp-code">${otp}</div>
      <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>
      <p>If you did not sign up, please ignore this email.</p>
      <p>For any queries, contact us at <a href="mailto:support@kingshop.com">support@kingshop.com</a>.</p>
    </div>
    <div class="email-footer">
      &copy; 2026 mobilegadget.com. All rights reserved.
    </div>
  </div>
</body>
</html>
`,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email error:", error.message);
  }
};