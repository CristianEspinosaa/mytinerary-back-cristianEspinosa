import City from "../../models/City.js";

export const createCity = async (req, res, next) => {
    try {
        let create = req.body
        let createCity = await City.create(create)
        return res.status(201).json({
            response: createCity
        })
    } catch (error) {
        next(error)
    }
}
