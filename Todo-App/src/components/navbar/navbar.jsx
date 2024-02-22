import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

export function Navbar() {
  const [tab, setTab] = useState("homepage");

  useEffect(() => {
    setTab("homepage");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="row d-flex flex-row justify-content-between align-items-center bg-white m-0 py-2"
      style={{ minHeight: "3.5rem" }}
    >
      <div className="row col-lg-4 col-md-12 d-flex flex-row justify-content-start align-items-center p-0 m-0">
        <i className="w-auto bi bi-check2-square text-black fs-2 p-0 m-0"></i>
        <div className="w-auto pl-3-0 m-0 fs-2 fw-bolder">TODO APP</div>
      </div>
      <div className="col-lg-3 d-flex flex-row justify-content-center align-items-center m-0">
        <Link to="homepage" className="col text-decoration-none  menu-box">
          <div
            className={
              "menu text-center fs-3" + (tab == "homepage" ? " active" : "")
            }
            onClick={()=>setTab('homepage')}
          >
            Home
          </div>
        </Link>
        <Link to="todoList" className="col text-decoration-none menu-box">
          <div
            className={
              "menu text-center fs-3" + (tab == "list" ? " active" : "")
            }
            onClick={()=>setTab('list')}

          >
            List
          </div>
        </Link>
      </div>
      <div className="col-4 bg-blue text-end">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle border border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item text-start" href="#">
                <i className="bi bi-box-arrow-right p-3"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
