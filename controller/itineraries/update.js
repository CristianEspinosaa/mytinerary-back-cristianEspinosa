import Itinerarie from "../../models/Itinerarie.js";

export const updateOne = async (req, res, next) => {
    try {
        let itinerarie = req.body
        let update = await Itinerarie.updateOne(
            {_id : itinerarie._id},
            {name : itinerarie.name}
        )
        return res.status(200).json({
            response : update
        })
    } catch (error) {
        next(error)
    }
}