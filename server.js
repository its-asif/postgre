const express = require('express');
const studentsRoute = require('./src/students/routes');
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("get lost!!");
})

app.use('/api/v1/students', studentsRoute);


app.listen(port, () => console.log(`Server is running on port ${port}`));