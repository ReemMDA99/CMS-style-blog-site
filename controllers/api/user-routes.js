const router = require('express').Router();
// does not require post and comment
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');


// get all users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// login

router.post('/login', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
  
    const validPassword = dbUserData.checkPassword(req.body.password);
  
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
  
        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
  
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// sign up

router.post('/', (req, res)=> {
    const newUser = User.create({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    });
    req.session.save(() => {
        // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
  
            res.json(newUser);
    }).catch (err => {
        console.log(err);
        res.status(500).json(err);
    })
});
module.exports = router;