import { asyncHandler } from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req, res, next) => {
    console.log("Route hit!"); 
     return res.status(200).json({
        message: "ok"
    })
} )

export { registerUser }