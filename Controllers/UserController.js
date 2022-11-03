const userSchema = require('../Schemas/UserSchema');
const RegisterPostRequest = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existEmail = await userSchema.findOne({ email: email });
    console.log(existEmail, 'existEmail');
    if (existEmail) {
      res.status(500).json('email is already exists');
    } else if(!existEmail) {
      const user = await userSchema({
        name: name,
        password: password,
        email: email,
      });
      res.status(200).json('You Are Registered! Successfully');
      await user.save();
    }
  } catch (error) {
    res.status(404).json('Invalid Credentials');
    console.log(error);
  }
};
const SignInPostRequest = async (req, res) => {
  try {
    const loginUser = await userSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (loginUser) {
      res.status(200).json({ message: 'Login Successfully' });
    } else {
      res.status(404).json({ message: 'Invalid Credidfjdfdsf' });
    }
  } catch (error) {
    res.status(404).json('invalid Credentials');
  }
};
const verifyEmail=async(req,res)=>{
try {
  const email=await userSchema.findOne({email:req.body.email})
if (email) {
  res.status(200).json("Your Email IS Verified")
}
else{
  res.status(404).json("Your Email is not Exists")
}
} catch (error) {
 res.status(404).json("Your Email is not exists")
}
}
const newPassword=async(req,res)=>{
  try {
    const { name, email, password, } = req.body;
    const id = req.params.id;
    console.log(req.params, 'params');
    console.log(req.body, 'body');
    const updatedData = await userSchema.findOneAndUpdate(
      { email: email },
      {
        name: name,
        email: email,
        password: password,
       
      }
    );
    if (updatedData) {
      res.status(200).json(updatedData);
      console.log('updated');
    }
  } catch (error) {
    console.log(error, 'erorrrrrrr');
    res.status(400).json('not Updated');
  }
}
module.exports = { RegisterPostRequest, SignInPostRequest,verifyEmail,newPassword };
