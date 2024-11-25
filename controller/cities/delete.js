import City from "../../models/City.js";

export const deleteCity = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne({
            _id : req.body._id
        })
        
        return res.status(200).json({
            response : deleteCity
        })
    } catch (error) {
        next(error)
    }
    return 
}