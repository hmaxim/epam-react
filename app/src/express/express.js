const express = require("express");
const app = express();
const port = process.env.PORT;
console.log('The value of PORT is:', process.env.PORT);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));