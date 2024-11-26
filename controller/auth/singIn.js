import User from "../../models/User.js";

export default async (req, res, next) => {
    try {

        await User.findOneAndUpdate(
            {email : req.body.email || req.user.email},
            {inLine : true}
        )
        console.log(req.user, "token: " + req.token);
        
        return res.status(200).json({
            success : true,
            message: "Sing In",
            user : {
                email : req.user.email || req.body.email,
                photo : req.user.photo || req.body.photo
            },
            token : req.token
        })
        
        
    } catch (error) {
        return next(error)
    }
}