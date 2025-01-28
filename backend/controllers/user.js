import User from "./../models/user.js";

export const signup = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!password || !email)
      return res.status(404).json({ message: "Insufficient data" });

    const user = await User.findOne({ email: email });

    if (user) {
      return res
        .status(201)
        .json({ status:201, message: "User with this email already exist" });
    }

    const newUser = new User(req.body);
    let output = await newUser.save();
    return res.status(200).json({status:200,  message: "User logged in",data:output });
  } catch (error) {
    return res.status(500).json({ status:500, message: "Could not fetch data" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(203)
        .json({ status:203, message: "User with this email does not exist" });
    }

    if (password === user.password) {
      return res.status(200).json({ status:200, user:user });
    } else {
      return res.status(201).json({ status:201, message: "Wrong Password" });
    }
  } catch (error) {
    return res.status(500).json({ status:500, message: "Could not fetch data" });
  }
};
