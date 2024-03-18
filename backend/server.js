const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 8081;

//Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
})