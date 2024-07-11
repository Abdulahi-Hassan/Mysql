import { Link } from "react-router-dom";
import { endpoint } from "../main";
import UserFetch from "../Hooks/UserFetch";

const User = () => {
  const { ApiData, loading } = UserFetch();

  localStorage.setItem("user", JSON.stringify(ApiData));

  if (loading) return <h1 className="text-center mt-4">Loading...</h1>;
  return (
    <div className="container" style={{ marginTop: "100px", padding: "0 4%" }}>
      |
      <Link to={`/create`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ApiData &&
            ApiData.map((data, index) => (
              <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.UserName}</td>
                <td>{data.Email}</td>
                <td>
                  <Link
                    to={`/update/${data.ID}`}
                    className="btn btn-warning mx-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/delete/${data.ID}`}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
