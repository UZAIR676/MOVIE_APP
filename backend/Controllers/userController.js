import asyncHandler from 'express-async-handler'
import  User  from '../Models/UserModel.js';
import bcrypt from 'bcryptjs';
import { generationToken } from '../middlewares/Auth.js';


const registeruser = asyncHandler(async (req,res)=>{
    const {fullname,email,password,image}= req.body
    try {
        const userExist = await User.findone({email})

        //checking if user already exists 
        if(userExist){
            res.status(400)
            throw new Error("user already exits !")

        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);


        // create a user in DB

        const user = await user.create({
            fullname,
            email,
            password: hashedpassword,
            image
        })

        // if user is created successfully then send the user details 

        if(user){
            res.status(201).json({
                _id:user._id,
                fullname: user.fullname,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token : generationToken(user._id),
            });

        }


        else{
            res.status(400);
            throw new Error("invalid user data")
        }
    } catch (error) {
        
    }
})



export {registeruser};