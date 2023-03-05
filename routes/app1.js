import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Index na App1")
})

router.get('/hello', (req, res) => {
  res.send('Hello from app 1!');
});

export default router;
