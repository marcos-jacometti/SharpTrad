const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/dbConnection");
const usersControllers = require("./controllers/usersControllers");
const loginControllers = require("./controllers/loginControllers");

const app = express();
app.use(cors());
app.use(express.json());

dbConnection.connect((err) => {
    if(err){
        console.error("Failed to connect", err);
        return;
    }
    console.log("Connected");
});

app.use('/users', usersControllers);

app.use('/login', loginControllers);

app.get('/', (req, res) => {
    res.send('Node server is working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
