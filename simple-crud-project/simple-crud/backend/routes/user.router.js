const router = require("express").Router();
let User = require("../models/user.model");

//Get request router
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("err:" + err));
});

// Add request router
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added successfuly!!"))
    .catch((err) => res.status(400).json("err: " + err));
});

// get by Id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("err: " + err));
});

// Delete route
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted successfully!!"))
    .catch((err) => res.status(400).json("err :" + err));
});

// Update route
router.route("/update/:id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id).then((user) => {
    user.username = req.body.username;

    user
      .save()
      .then(() => res.json("User updated successfuly!!"))
      .catch((err) => res.status(400).json("err: " + err));
  });
});

module.exports = router;
