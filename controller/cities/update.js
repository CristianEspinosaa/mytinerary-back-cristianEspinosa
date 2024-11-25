import City from "../../models/City.js";

export const updateOne = async (req, res, next) => {
    try {
        let city = req.body
        let update = await City.updateOne(
            {_id : city._id},
            {name : city.name}
        )
        return res.status(200).json({
            response : update
        })
    } catch (error) {
        next(error)
    }
}