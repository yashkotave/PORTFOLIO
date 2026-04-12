import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' })
    }

    const contact = new Contact({ name, email, subject, message })
    await contact.save()

    console.log('📬 New contact submission:', { name, email, subject })

    // TODO: Replace stub with Nodemailer when EMAIL_USER + EMAIL_PASS added to .env

    res.status(200).json({ success: true, message: 'Message received!' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
