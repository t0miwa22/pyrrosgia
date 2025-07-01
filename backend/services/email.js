import { createTransport } from 'nodemailer'

const transporter = createTransport({
  host: 'smtp.resend.com',
  port: 465,            // SMTPS (SSL/TLS)
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY
  }
})

async function sendEmail({ name, email, subject, message }) {
  await transporter.sendMail({
    from: `"Pyrrosgaia Contact Form" <adetomiwa@pyrrosgaiaoilservices.com>`, // your Outlook email
    to: 'adetomiwa@pyrrosgaiaoilservices.com',
    subject: `Contact Form: ${subject || 'No Subject'}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  })
}
export default { sendEmail }
