import User from "../../models/User.js";

export const deleteOne = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteOne({
            _id : req.body._id
        })
        return res.status(200).json({
            response : deleteUser
        })
    } catch (error) {
        next(error)
    }
}