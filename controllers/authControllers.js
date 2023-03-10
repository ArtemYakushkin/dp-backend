import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,
        });

        const user = await newUser.save();

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json('User not found');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json('Wrong password');

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
};