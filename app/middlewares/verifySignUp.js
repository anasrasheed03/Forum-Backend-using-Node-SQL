const Users = require("../models/user.model");

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    // Username
    try {
        const [username, _] = await Users.searchIfUsernameExits(req.body.username);
        if (username.length > 0) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
        else {
            // Email
            try {
                const [email, _] = await Users.searchIfEmailExits(req.body.email);
                if (email.length > 0) {
                    res.status(400).send({ message: "Failed! Email is already in use!" });
                    return;
                } else {
                    next();
                }
            } catch (e) {
                console.log(e)
                res.status(500).send({ message: e });
                return;
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: e });
        return;
    }

};


const verifySignUp = {
    checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
