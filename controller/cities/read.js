import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }

        let cities = await City.find(query)
        return res.status(200).json({
            response : cities
        })
    } catch (error) {
        next(error)
    }
}

let citiesByName = async (req, res, next) => {
    try {
        let citiesQuery = req.params.x
        let cities = await City.find({name : citiesQuery})
        return res.status(200).json({
            response : cities
        })
    } catch (error) {
        next(error)
    }
}

export {allCities, citiesByName}