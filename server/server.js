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
    // Trim the inputs to remove any hidden backslashes or spaces
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();
    const phone = req.body.phone?.trim();
    const subject = req.body.subject?.trim();
    const message = req.body.message?.trim();

const adminMailOptions = {
    from: `"SKV Web Lead" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New enquiry: ${subject}`,
    html: `
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9;">
          <tr>
            <td align="center" style="padding: 24px 12px;">

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">

                <!-- Header -->
                <tr>
                  <td style="background-color: #0f172a; padding: 24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #ffffff; font-size: 17px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">New project enquiry</p>
                          <p style="margin: 5px 0 0; color: #94a3b8; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.8px;">SKV Industrieees · Lead Portal</p>
                        </td>
                        <td align="right">
                          <span style="background-color: #1e293b; color: #FF5722; font-size: 12px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif; padding: 5px 12px; border-radius: 20px; border: 1px solid #FF572244; white-space: nowrap;">● New lead</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Fields: single-column, stacked -->
                <tr>
                  <td style="padding: 24px 28px 0;">

                    <!-- Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
                      <tr>
                        <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
                          <p style="margin: 0 0 3px; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">Full name</p>
                          <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">${name}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
                      <tr>
                        <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
                          <p style="margin: 0 0 3px; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">Email</p>
                          <a href="mailto:${email}" style="font-size: 15px; color: #FF5722; font-weight: 600; text-decoration: none; font-family: 'Segoe UI', Arial, sans-serif;">${email}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Phone -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
                      <tr>
                        <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
                          <p style="margin: 0 0 3px; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">Phone</p>
                          <a href="tel:${phone}" style="font-size: 15px; color: #0f172a; font-weight: 600; text-decoration: none; font-family: 'Segoe UI', Arial, sans-serif;">${phone}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Subject -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 12px;">
                      <tr>
                        <td style="background-color: #fff8f5; border: 1px solid #ffd5c8; border-radius: 8px; padding: 14px 16px;">
                          <p style="margin: 0 0 3px; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">Subject</p>
                          <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">${subject}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                      <tr>
                        <td style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #FF5722; border-radius: 0 8px 8px 0; padding: 16px 18px;">
                          <p style="margin: 0 0 6px; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">Message</p>
                          <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.8; font-family: 'Segoe UI', Arial, sans-serif;">${message}</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- CTA Buttons -->
                <tr>
                  <td style="padding: 0 28px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right: 8px;">
                          <a href="mailto:${email}" style="display: block; text-align: center; background-color: #FF5722; color: #ffffff; padding: 12px 0; border-radius: 7px; font-size: 14px; font-weight: 700; text-decoration: none; font-family: 'Segoe UI', Arial, sans-serif;">Reply to lead</a>
                        </td>
                        <td style="padding-left: 8px;">
                          <a href="tel:${phone}" style="display: block; text-align: center; background-color: #f1f5f9; color: #0f172a; padding: 12px 0; border-radius: 7px; font-size: 14px; font-weight: 700; text-decoration: none; font-family: 'Segoe UI', Arial, sans-serif;">Call now</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <p style="margin: 0; font-size: 12px; color: #94a3b8; font-family: 'Segoe UI', Arial, sans-serif;">Sent via SKV website contact form</p>
                        </td>
                        <td align="right">
                          <p style="margin: 0; font-size: 12px; color: #d4af37; font-weight: 700; font-family: 'Segoe UI', Arial, sans-serif;">SKV Industrieees</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
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
                <p>Thank you for contacting SKV Industrieees.</p>
                <p>We have received your enquiry regarding <strong>${subject}</strong>.</p>
                <p>Our team will get back to you within 24 hours.</p>
                <hr style="border: 0; border-top: 1px solid #444; margin: 20px 0;">
                <p style="margin: 0;"><Industrieees style="color: #d4af37; font-weight: bold;">SKVIndustrieees</p>
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