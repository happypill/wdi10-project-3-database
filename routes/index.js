/*
Get Home Page

*/
import express from 'express';
import User from '../model/user';


const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});


export default router;
