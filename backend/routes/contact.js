const express = require('express')
const router = express.Router()

const { saveToSupabase } = require('../services/supabase').default
const { sendEmail } = require('../services/email').default

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Received body:', req.body);
  
    try {
      console.log('Saving to Supabase...');
      await saveToSupabase({ name, email, subject, message });
      console.log('Saved to Supabase.');
  
      console.log('Sending email...');
      await sendEmail({ name, email, subject, message });
      console.log('Email sent.');
  
      res.status(200).json({ success: true, message: 'Form submitted' });
    } catch (error) {
      console.error('❌ Error in contact route:', error.message || error);
      res.status(500).json({ error: 'Failed to process contact form' });
    }
  });
  

module.exports = router