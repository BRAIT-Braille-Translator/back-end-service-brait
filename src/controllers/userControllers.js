const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Register a user
//@route POST /api/user/register
//@access login
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await username.findOne({email});
   if(userAvailable){
         res.status(400);
        throw new Error("user already registered");
   }

   //hash password
   const hashedPassword = await bcrypt.hash(password, 10);
   console.log("Hashed Password: ", hashedPassword);
   const user = await User.create({
     username,
     email,
     password: hashedPassword,
   });

   console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});
//@desc login a user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    //compare password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id:user.id,
            },
        }, 
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: "1m"}
        );
        res.status(200).json({accesToken});
    }else {
        res.status(401)
        throw new Error("Email or password is not valid");
    }
  res.json({ message: "Login the user" });
});
//@desc user info
//@route POST /api/user/current
//@access login
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
