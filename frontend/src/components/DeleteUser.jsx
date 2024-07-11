import { useNavigate, useParams } from "react-router-dom";
import UserFetch from "../Hooks/UserFetch";
import { endpoint } from "../main";
import toast from "react-hot-toast";

const DeleteUser = () => {
  let { id } = useParams();
  const { axios } = UserFetch();
  let navigate=useNavigate()
  const handleDeleteUser = async () => {
    let { data } = await axios.delete(`${endpoint + "/api/user"}/${id}`);
    if (data.status === "Success") {
      toast.success(data.message);
      navigate("/");
    }
  };
  handleDeleteUser();

};

export default DeleteUser;
