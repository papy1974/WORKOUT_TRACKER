// Workout-Tracker

const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/exercise?', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


// Test later
// Place this route below all others to send the index.html file
// to any request that is not explicitly defined above
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });



module.exports = router;
