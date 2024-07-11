import axios from "axios";
import { useEffect, useState } from "react";
import { endpoint } from "../main";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const UserFetch = () => {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  const [ApiData, setApiData] = useState([]);

  const AddUser = async (user) => {
    setloading(true);
    let { data } = await axios.post(endpoint + "/api/auth/signup", user);
    if (data.status === "Success") {
      toast.success(data.message);
      navigate("/");
    }
    setloading(false);
  };

  const UpdateUser = async (id, user) => {
    setloading(true);
    let { data } = await axios.put(`${endpoint + "/api/user"}/${id}`, user);
    if (data.status === "Success") {
      toast.success(data.message);
      navigate("/");
    }
    setloading(false);
  };

 
  useEffect(() => {
    const GetAllUsers = async () => {
      setloading(true);
      let { data } = await axios.get(endpoint + "/api/users");
      setApiData(data);
      setloading(false);
    };
    GetAllUsers();
  }, []);

 

  return { loading, ApiData, AddUser, axios, UpdateUser };
};

export default UserFetch;
