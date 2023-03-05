import express from 'express'
const app = express()
import app1Routes from "./routes/app1.js"
import app2Routes from "./routes/app2.js"

import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")))


const logger = (req, res, next) => {
    const timeOptions = {day: "2-digit", month: "2-digit", year:"numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"}
    let dateTime = new Date().toLocaleString("cs-CZ", timeOptions);

    console.log(`${dateTime} - ${req.method} ${req.url}`);
    next();
}

app.use(logger)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.use("/app1", app1Routes);
app.use("/app2", app2Routes);

app.get("/generateerror", async (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error("SPATNE")
        } catch (err) {
            next(err)
        }
    }, 500)
})

app.all("/*", (req, res) => {
    let filePath = path.join(__dirname, 'public/404_chyba.png')
    res.status(404).sendFile(filePath)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    console.log(path.join(__dirname, '404'))
    res.redirect('404')
    // res.status(500).send("Neco je spatne")
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})
