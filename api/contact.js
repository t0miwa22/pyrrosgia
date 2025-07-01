import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const data = await resend.emails.send({
      from: 'pyrrosgaiaoilservices.com', // ✅ Verified Resend sender
      to: 'adetomiwa@pyrrosgaiaoilservices.com', // ✅ Your company inbox
      subject: subject || 'New Contact Message',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    console.log('✅ Email sent:', data)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('❌ Resend API error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
