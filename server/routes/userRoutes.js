import express from 'express'
import  {registerUser,loginUser,userCredit} from '../controllers/userController.js'
// import { paymentRazorpay } from '../controllers/usercontroller.js'
import userAuth from '../middlewares/auth.js'
const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredit)
// userRouter.post('/pay-razor',userAuth,paymentRazorpay)

export default userRouter