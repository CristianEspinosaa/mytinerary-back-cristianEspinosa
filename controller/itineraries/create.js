import Itinerarie from "../../models/Itinerarie";

export const createItinerarie = async (req, res, next) => {
    try {
        let create = req.body
        let createItinerarie = await Itinerarie.create(create)
        return res.status(201).json({
            response : createItinerarie
        })
    } catch (error) {
        next(error)
    }
}