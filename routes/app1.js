import express from 'express'
const router = express.Router();

import db from "../config/db_conf.js";

router.get("/getphonebook", (req, res) => {
  const query = `select jmeno, telefon, d.nazev as typ_zarizeni, t.ip_zarizeni 
  from telephones t 
  join device_type d on d.id = t.typ_zarizeni
  order by telefon; `;
  db.query(query, (err, result, fields) => {
      if(err) {
          console.log(err);
          res.sendStatus(500);
          return;
      }
      res.send(result);
  })
})

export default router;
