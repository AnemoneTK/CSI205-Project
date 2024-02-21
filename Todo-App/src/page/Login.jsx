import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="container">
      <div
        className="row h-auto col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-start align-items-center rounded-3 py-4"
        style={{ backgroundColor: "var(--blue)" }}
      >
        <div className="row my-3">
          <i
            className="col-12 bi bi-check2-square d-flex flex-column justify-content-center align-items-center text-white my-2"
            style={{ fontSize: "6rem" }}
          ></i>
          <div className="col fw-bold fs-2 d-flex flex-column justify-content-center align-items-center text-white">
            Login to Todo App
          </div>
        </div>

        <div className="row my-2 d-flex flex-column justify-content-center align-items-center">
          <form
            action="./method/loginOfficeDB.php"
            id="LoginFrom"
            method="POST"
            className="row h-auto d-flex flex-column justify-content-center align-items-center"
          >
            <div className="row col-10 ">
              <div className="form-label text-white fs-4 fw-normal">
                Username
              </div>
              <input
                type="text"
                className="form-control form-control-lg"
                name="username"
                placeholder="Type your username"
                id="username"
                required
              />
            </div>
            <div className="row mt-3 col-10">
              <label className="form-label text-white fs-4 fw-normal">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                placeholder="Type your password"
                id="password"
                required
              />
            </div>
            <div className="row mt-5 mb-2 d-flex flex-column justify-content-center align-items-center ">
              <Link
                to="/home"
                type="submit"
                className="col-10 btn btn-dark btn-lg"
              >
                LOGIN
              </Link>
            </div>
            <div className="row my-3 mt-4">
              <div className="fs-5 text-center text-black">
                Does not have an account yet ?
                <div>
                  <Link to="/" className="text-white fs-5">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
