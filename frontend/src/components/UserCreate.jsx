import { useState } from "react";
import { Link } from "react-router-dom";
import UserFetch from "../Hooks/UserFetch";
const UserCreate = () => {
  const [user, setuser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Profile: "",
  });

  const { AddUser, axios,loading } = UserFetch();

  const HandleUser = async (e) => {
    e.preventDefault();
    const upload_preset = "wnx0tmuv";
    const cloud_name = "dcteurhwi";
    let formdata = new FormData();
    formdata.append("file", user.Profile);
    formdata.append("upload_preset", upload_preset);
    let obj = {
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password,
      Profile: user.Profile
        ? await axios
            .post(
              `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
              formdata
            )
            .then(({ data }) => data.secure_url)
        : "https://res.cloudinary.com/dcteurhwi/image/upload/v1720715870/oqk2uho2lp6boqikyxkt.png",
    };
    AddUser(obj);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center "
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600", position: "relative" }}
        >
          <strong>Create User</strong>
          <Link
            to="/User"
            className=" btn btn-danger mt-2 "
            style={{ position: "absolute", right: "12px" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={HandleUser}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Name"
                  value={user.UserName}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      UserName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your E-mail"
                  value={user.Email}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={user.Password}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <label htmlFor="upload" className="form-control mt-4">
                  {user.Profile ? user.Profile.name : "Upload-Image"}
                </label>
                <input
                  type="file"
                  id="upload"
                  hidden
                  className="form-control mt-4"
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Profile: e.target.files[0],
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  {loading ? "Loading..." : "Insert"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
