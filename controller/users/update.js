import User from "../../models/User.js";

export const updateOne = async (req, res, next) => {
    try {
        let user = req.body
        let update = await User.updateOne(
            {_id : user._id},
            {
                inLine : user.inLine
            }
        )
        return res.status(200).json({
            response : update
        })
    } catch (error) {
        next(error)
    }
}