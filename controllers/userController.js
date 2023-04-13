const {User, Role, UserRole, Client, Appointment, Service, Stylist} = require('../models');
const userController = {}


userController.createUser = async(req,res)=>{

    try{
        const {name, surname, email, password, birth_date, phone} = req.body;

        const newUser = {

            name,
            surname,
            email,
            password,
            birth_date,
            phone
        }
        const user = await User.create(newUser)


        await UserRole.create({
            user_id : user.id,
            role_id : 3
        })

        await Stylist.create({
            id: user.id,
            user_id : user.id,
        })

        return res.json(user)
    }catch (error) {
        return res.status(500).json(    
            {
            success: false,
            message:"Something went wrong",
            error_message: error.message
            }
        )
    }
}

userController.login = async(req,res)=>{
    try {
        const{ email, password } = req.body;

        const user = await User.findOne(
            {
                where:{
                    email: email
                },
                include: [Role]
            }
        );
        if(!user){
            return res.send("Wrong credentials")
        }

        if(!isMatch){
            return res.send("Wrong credentials")
        }

        return res.json(token)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}









module.exports = userController;
