/*
Get Home Page

*/
import express from 'express';
import User from '../model/user';


const router = express.Router();

// /*Send Transaction information from database to frontend*/
// router.get('/apiTransaction', (req, res, next) => {
//   Transaction.find({}, (err, users) => {
//     res.json(users);
//   });
//
// });
//
// /*Send Inventory information from database to frontend*/
// router.get('/apiInventory', (req, res, next) => {
//   Inventory.find({}, (err, users) => {
//     res.json(users);
//   });
//
// });

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});


export default router;
