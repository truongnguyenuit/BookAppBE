const express = require('express')

const app = express()

app.get('/',(req, ref) => res.send('Hello'))

const PORT = 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))