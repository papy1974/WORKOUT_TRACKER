// Workout-Tracker


const router = require('express').Router();
const db = require("../models");

// Works! 
// router.get('/test', (req, res) => res.json('Sample API get endpoint'));


// getLastWorkout() GET /api/workouts

router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});