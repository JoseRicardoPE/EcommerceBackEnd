require('dotenv').config()
const express = require("express")
const app = express()
const api = require("./routes/api")
const admin = require("./routes/admin")
const initial_setup = require("./initial_setup")

app.use(express.json());
app.use("/api", api)
app.use("/admin", admin)

//initial_setup()

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servido corriendo en el puerto ${process.env.SERVER_PORT}`);
  });