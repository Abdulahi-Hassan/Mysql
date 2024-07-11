const DB = require("../config/MySql-Db");
const bcrypt = require("bcryptjs");
const SignUp = async (req, res) => {
  const InsertUser =
    "insert into UserAuth (ID,UserName,Email,Password ,Profile) values(?)";
  let { ID, UserName, Email, Password, Profile } = req.body;
  let salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(Password, salt);
  const Values = [ID, UserName, Email, (Password = [hashpassword]), Profile];
  DB.query(InsertUser, [Values], (err) => {
    if (err) return res.send(err.message);
    res.send({ status: "Success", message: "Successfully inserted user" });
  });
};

const Login = async (req, res) => {
  let { Email, Password } = req.body;
  let UserExist = `select * from UserAuth where Email =? and Password = ?`;
   DB.query(UserExist, [Email, Password], async (err, users) => {
    if (err) return res.send(err.message);
    if (users.length == 0)
      return res.send({ status: "Error", message: "User not found" });
    let match = await bcrypt.compare(Password, users[0].Password);
    if (!match)
      return res.send({ status: "Error", message: "Invalid password" });
    res.send({ status: "Success", message: "Logged in successfully" });
  });
};

const GetUsers = async (req, res) => {
  let GetAllUsers = "select * from UserAuth";
  DB.query(GetAllUsers, (err, users) => {
    if (err) throw err;
    res.json(users);
  });
};

const GetUser = async (req, res) => {
  let { id } = req.params;
  let GetUserById = `select * from UserAuth where ID=${id}`;
  DB.query(GetUserById, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
};

const UpdateUser = async (req, res) => {
  let { id } = req.params;
  let { UserName, Email, Profile } = req.body;
  let EditUser = `update UserAuth set UserName =?, Email =?, Profile =? where ID =?`;
  DB.query(EditUser, [UserName, Email, Profile, [id]], (err) => {
    if (err) return res.send(err.message);
    res.send({ status: "Success", message: "Successfully updated user" });
  });
};

const DeleteUser = async (req, res) => {
  let { id } = req.params;
  let RemoveUser = "delete from UserAuth where ID=?";
  DB.query(RemoveUser, [id], (err) => {
    if (err) return res.send(err.message);
    res.send({ status: "Success", message: "Successfully deleted user" });
  });
};

// Export the functions as an object to be imported in server.js
module.exports = {
  SignUp,
  Login,
  GetUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
};
