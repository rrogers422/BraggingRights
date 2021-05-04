const router = require('express').Router();
const { User } = require('../models/user')
const express = require('express');



router.get('/', async (req, res) => {
    try {
        const userInfo = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;

            res.status(200).json(userInfo);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {

    try {
        const userInfo = await User.findOne({ where: { email: req.body.email } });

        if (!userInfo) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        const validPassword = await userInfo.checkPassword(req.body.password);
        if (!validPassword) {
                    res
                        .status(400)
                        .json({ message: 'Incorrect email or password, please try again' });
                    return;
                }
                req.session.save(() => {
                            req.session.user_id = userInfo.id;
                            req.session.logged_in = true;
            
                            res.json({ user: userInfo, message: 'You are now logged in!' });
                        });
    }
        catch (err) {
            res.status(400).json(err);
        }

});

// get route for create bet page
// post route for what happens after send invite button.



module.exports = router;