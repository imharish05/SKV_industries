const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Configuration
// Note: Use an App Password if using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // 1. Admin Email Template (Table format)
    const adminMailOptions = {
        from: "Website Contact Form",
        to: process.env.ADMIN_EMAIL,
        subject: `New Enquiry: ${subject}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
                <tr style="background-color: #f2f2f2;">
                    <td><strong>Field</strong></td>
                    <td><strong>Details</strong></td>
                </tr>
                <tr><td>Name</td><td>${name}</td></tr>
                <tr><td>Email</td><td>${email}</td></tr>
                <tr><td>Phone</td><td>${phone}</td></tr>
                <tr><td>Subject</td><td>${subject}</td></tr>
                <tr><td>Message</td><td>${message}</td></tr>
            </table>
        `
    };

    // 2. User "Thank You" Template (Styled based on Screenshot_2026-05-13-07-05-39-98_e307a3f9df9f380ebaf106e1dc980bb6.jpg)
    const userMailOptions = {
        from: '"SKV Industrieees" <your-email@gmail.com>',
        to: email,
        subject: 'Thank you for contacting SKV Industrieees',
        html: `
            <div style="background-color: #121212; color: #ffffff; padding: 30px; font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #FF5722;">Dear ${name},</h2>
                <p>Thank you for contacting <span style="background-color: #d4af37; color: #000; padding: 2px 5px; font-weight: bold;">SKV</span> Industrieees.</p>
                <p>We have received your enquiry regarding <strong>${subject}</strong>.</p>
                <p>Our team will get back to you within 24 hours.</p>
                <hr style="border: 0; border-top: 1px solid #444; margin: 20px 0;">
                <p style="margin: 0;"><span style="color: #d4af37; font-weight: bold;">SKV</span> Industrieees</p>
                <p style="margin: 0; color: #bbbbbb; font-size: 14px;">S.F.NO:1/2B, Periyathottam, Nachipatti,</p>
                <p style="margin: 0; color: #bbbbbb; font-size: 14px;">Rasipuram Main Road, Vennandur,</p>
                <p style="margin: 0; color: #bbbbbb; font-size: 14px;">Namakkal — 637505</p>
                <p style="margin: 0; color: #bbbbbb; font-size: 14px;">Phone: 8883999999</p>
                <p style="margin: 0; color: #bbbbbb; font-size: 14px;">Email: skvindu@yahoo.com</p>
            </div>
        `
    };

    try {
        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        
        res.status(200).json({ success: true, message: 'Emails sent successfully!' });
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ success: false, message: 'Failed to send emails.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});