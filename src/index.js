import express from "express";

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hola Crayola")
});
  
app.listen(PORT, () => {
    console.log(`[⚡server⚡]: Listening on port http://localhost:${PORT}`)
});