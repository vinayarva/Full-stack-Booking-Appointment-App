const user = require("../Models/booking");

//sending the data
exports.getController = (req, res, next) => {
  user
    .findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};

//deleteing the data

exports.deleteController = (req, res, next) => {
  const userid = req.params.id;

  user
    .destroy({ where: { id: userid } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.sendStatus(200);
};

//inserting the data

exports.postController = (req, res, next) => {
  const data = req.body;
  user.create(data);
  res.sendStatus(200);
};

//updating the data

exports.editController = (req, res, next) => {
  const user_id = req.params.id;

  user
    .findByPk(user_id)
    .then((result) => {
      result.username = req.body.username;
      result.phoneNumber = req.body.phoneNumber;
      result.email = req.body.email;
      return result.save();
    })
    .catch((err) => console.log(err));

  res.sendStatus(200);
};
