import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,
        });

        const user = await newUser.save();

        res.status(200).json(user);

    } catch (err) {
        console.log(err);
    }
};