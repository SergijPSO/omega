import express from "express";
// console.log("it works !!!!!!!");

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
