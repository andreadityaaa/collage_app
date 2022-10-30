const cors = require('cors')
const express = require('express')
const app = express()
const matakuliah = require('./routes/matakuliah')
const krs = require('./routes/krs')
const mahasiswa = require('./routes/mahasiswa')
const err = require('./middlewares/err')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use('/matakuliah', matakuliah)
app.use('/mahasiswa', mahasiswa)
app.use('/krs', krs)
// app.use(err)

app.listen(PORT, () => {
  console.log('Listening on ' + PORT)
})