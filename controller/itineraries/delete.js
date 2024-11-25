import Itinerarie from "../../models/Itinerarie.js";

export const deleteOne = async (req, res, next) => {
    try {
        let deleteItinerarie = await Itinerarie.deleteOne({
            _id : req.body._id
        })
        return res.status(200).json({
            response : deleteItinerarie
        })
    } catch (error) {
        next(error)
    }
}