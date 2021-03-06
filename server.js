require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const api = require("./routes/api")
const admin = require("./routes/admin")


app.use(cors())

app.use(express.json());
app.use("/api", api)
app.use("/admin", admin)



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servido corriendo en el puerto ${process.env.SERVER_PORT}`);
  });