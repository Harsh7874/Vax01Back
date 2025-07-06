import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

// Function to send email
export const sendEmail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: `"VaxTrack" <${process.env.EMAIL_USER}>`, // Sender address
            to, // Recipient's email
            subject, // Email subject
            html, // Email body in HTML format
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};



