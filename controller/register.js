const User = require("../model/User");

exports.signup = async(req, res) => {
  try{
    const { name, number, email, upiid, transactionid } = req.body;
    console.log(name, number, email, upiid, transactionid)
    if(!name || !number || !email || !upiid || !transactionid){
      return res.status(400).json({
        message: 'Please provide all the required fields',
        success:false
      });
    }
    const upiExist = await User.findOne({upiId:upiid});
    if(upiExist){
      return res.status(400).json({
        message: 'User already Exist with this upi id',
        success:false
      });
    }
    const transactionExist = await User.findOne({transactionId:transactionid});
    if(transactionExist){
      return res.status(400).json({
        message: 'User already Exist with this transaction id',
        success:false
      });
    }
    const user = await User.create({name, number, email, upiId:upiid, transactionId:transactionid, isVerified:false});
    return res.status(200).json({
      success:true,
      user,
      message:"User registered successfully"
    })
  } catch(err){
    return res.status(400).json({
      message: 'Error while registering user',
      success:false,
      err
    });
  }
}