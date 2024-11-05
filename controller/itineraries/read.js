import Itinerarie from "../../models/Itinerarie.js";

let allItineraries = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }

        let itineraries = await Itinerarie.find(query)
        return res.status(200).json({
            response : itineraries
        })
    } catch (error) {
        next(error)
    }
}

let itinerariesByName = async (req, res, next) => {
    try {
        let itinerariesQuery = req.params.x
        let itineraries = await Itinerarie.find({name : itinerariesQuery})
        return res.status(200).json({
            response : itineraries
        })
    } catch (error) {
        next(error)
    }
}

export {allItineraries, itinerariesByName}