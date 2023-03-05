import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Index na App3")
})

router.get('/hello', (req, res) => {
  res.send('Hello from app 3!');
});

export default router;
