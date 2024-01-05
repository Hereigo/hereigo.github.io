export default async (req, res, next) => {

    try {
        if (!req.user) {
            return res.status(404).send({ message: "User not found!" });
        }

        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: "Access denied!" });
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong." });
    }
};