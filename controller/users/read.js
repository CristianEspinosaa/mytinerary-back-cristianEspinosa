import User from '../../models/User.js'

export let allUsers = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }

        let users = await User.find(query)
        return res.status(200).json({
            response : users
        })
    } catch (error) {
        next(error)
    }
}

export let usersByName = async (req, res, next) => {
    try {
        let userQuery = req.params.x
        let users = await User.find({ name : userQuery})
        return res.status(200).json({
            response : users
        })
    } catch (error) {
        next(error)
    }
}

export let userValid = async (req, res, next) => {
    try {
        return res.status(200).json({
            response : req.user
        })
    } catch (error) {
        next(error)
    }
}
