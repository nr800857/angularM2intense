let User = require('../model/user');

function getUsers(req, res) {
    User.find((err, users) => {
        if (err) {
            res.send(err)
        }
        res.send(users);
    });
}

function getUser(req, res) {
    let userId = req.params.id;

    User.findOne({
        id: userId

    }, (err, user) => {
        if (err) { res.send(err) }
        res.json(user);
    }
    )
}

function postUser(req, res) {
    let user = new User();
    user.id = req.body.id;
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.email = req.body.email;
    user.password = req.body.password;

    console.log("POST user reçu :");
    console.log(user)

    user.save((err) => {
        if (err) {
            res.send('cant post user ', err);
        }
        res.json({ message: `${user.nom} saved!` })
    })
}

module.exports = { getUsers, getUser, postUser }