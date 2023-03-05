import express from 'express'
const router = express.Router();

router.get('/goodbye', (req, res) => {
  res.send('Goodbye from app 2!');
});

export default router;
