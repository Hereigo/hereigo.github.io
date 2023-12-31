import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

export const register = async (req, res) => {
    try {
        // Request body destructuring:
        const { userName, email, password: psw, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(psw, salt);
        const user = await User.create({
            userName,
            email,
            password: hash,
            role
        });
        const { password, ...userData } = user._doc; // userData exclude password
        return res.status(201).json(userData);

    } catch (error) {
        console.log('Operation error: ', error);
        return res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password: PSW } = req.body; // Request body destructuring:
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid password or email.' });
        }
        const isValid = await bcrypt.compare(PSW, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid password or email.' });
        }
        const { password, ...userData } = user._doc; // userData exclude password
        return res.status(200).json(userData);

    } catch (error) {
        console.log('Operation error: ', error);
        return res.status(500).json({ error: error.message });
    }
};
