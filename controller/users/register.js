import User from "../../models/User.js";

export let createUser = async (req, res, next) => {
    try {
        let create = req.body
        create.inLine = false
        let newUser = await User.create(create)
        return res.status(201).json({
            response : newUser
        })
    } catch (error) {
        next(error)
    }
}

export let createManyUsers = async (req, res, next) => {
    try {
        let create = req.body
        let newUsers = await User.insertMany(create)
        return res.status(201).json({
            response : newUsers
        })
    } catch (error) {
        next(error)
    }
}