import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            {email : req.user.email},
            {inLine : true}
        )
        // return res.status(200).json({
        //     success : true,
        //     message: "Sing In",
        //     user : {
        //         email : req.user.email,
        //         photo : req.user.photo
        //     },
        //     token : req.token
        // })

        return res.redirect('http://localhost:5173/?token=' + req.token)


    } catch (error) {
        next(error)
    }
}