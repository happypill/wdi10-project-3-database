import express from 'express';
import passport from 'passport';
import User from '../model/user';


const router = express.Router();

/* GET index page. */
router.get('/user', (req, res, next) => {
  res.json(req.user);
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

router.get('/google', passport.authenticate('google', { scope: ['email', 'public_profile'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            console.log(error);
            return res.json({'error':'database','message': "Something went seriously wrong. Contact the dev team."});
        }
        if(!user) {
          return res.json({'error':'user','message': "Wrong password or email"})
        }

        req.logIn(user, function(err) {
            if (err) {
              console.log("Login err", "Wrong password");
              return res.json({'error':'user','message': "Wrong password"})
            }
            return res.json(user);
        });
    })(req, res, next);
});

// router.post('/login', function(req, res, next) {
//
//     console.log("Data: ",req.body.email, req.body.password)
//
//     console.log("passport.authenticate before",passport.authenticate);
//     passport.authenticate('local', function(err, user, info) {
//       console.log("passport.authenticate", err,user,info);
//
//         if (err) {
//           console.log("Passport err", err);
//           return res.json({'error':'database','message': "Something went seriously wrong. Contact the dev team."});
//         }
//         if (!user) {
//           console.log("Could not find e-mail");
//           return res.json({'error':'user','message': "Could not find e-mail"});
//         }
//         req.logIn(user, function(err) {
//             if (err) {
//               console.log("Login err", "Wrong password");
//               return res.json({'error':'user','message': "Wrong password"})
//             }
//             return res.json({detail: info});
//         });
//     });
// });

router.post('/signup', function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, existingUser) => {

      console.log("Data: ",req.body.email, req.body.password)

      if (existingUser) {
          return res.json({'error':'login','message': 'This email already exists!'});
      }

      console.log("New user");

      let user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.save((err) => {
        if (err) {
          console.log("User save error");
          return res.json({'error':'database','message': err});
        }
        req.logIn(user, (err) => {
        if (err) {
            console.log("User login error");
            return res.json({'error':'login','message': err});
        }
        console.log("User login success");
        res.json({'redirect':'/'});
        });
      });
    });
});

router.get('/logout',(req, res, next) => {
  req.logout();
  res.redirect('/');
});

export default router;
