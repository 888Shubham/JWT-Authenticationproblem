// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  console.log("token",req.cookies.jwtToken);
  const token=req.cookies.jwtToken;
  // const token = req.headers['authorization'];
  // if(!token){
  //   return res.status(401).json({ success: false, msg: error });
  // }
  try{
    const payload = jwt.verify(token,'nazUrlQi6WnlKoFs2u4mDRwBJf2ImzcO');
    console.log("payload:",payload)
    next();
  }
  catch(error){
   res.status(401).json({ success: false, msg: error });
  }
  
};

export default jwtAuth;
