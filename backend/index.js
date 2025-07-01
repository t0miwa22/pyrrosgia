require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoute = require('./routes/contact')

const app = express()

app.use(cors())               // ✅ Allow frontend connection
app.use(express.json())       // ✅ Parse JSON from req.body

app.use('/routes/contact', contactRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
