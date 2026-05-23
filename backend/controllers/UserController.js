const MitiTrackUser = require('../models/MititrackModel');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await MitiTrackUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const newUser = new MitiTrackUser({ name, email, password });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerUser,
};
