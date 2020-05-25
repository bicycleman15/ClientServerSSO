const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
    return res.status(200).json({
        success: true,
        data: {
            user: req.user
        }
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('rememberme');
    return res.status(200).json({
        success: true,
    })
})

export default router;