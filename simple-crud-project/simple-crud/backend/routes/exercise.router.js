const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// Get exercises route
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("err :" + err));
});

// Add exercises route
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise is added successfuly!!"))
    .catch((err) => res.status(400).json("err :" + err));
});

//Get exercise by id
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("err :" + err));
});

// Delete
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted seccessfully!!"))
    .catch((err) => res.status(400).json("err :") + err);
});

// Update roite
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);

      exercise
        .save()
        .then(() => res.json("Updated successfully!!"))
        .catch((err) => res.status(400).json("err :" + err));
    })
    .catch((err) => res.status(400).json("err :" + err));
});
module.exports = router;
