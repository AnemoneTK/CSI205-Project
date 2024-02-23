import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import "./navbar.css";

export function TopNavbar() {
  const [tab, setTab] = useState("homepage");
  const HomeRef = useRef()
  const TodoRef = useRef()
  

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <nav className="navbar navbar-expand-lg bg-white px-3">
      <div className="container-fluid ">
        <div className="row col-auto">
          <i className="w-auto bi bi-check2-square text-black fs-2 p-0 m-0"></i>
          <div className="w-auto pl-3-0 m-0 fs-2 fw-bolder">TODO APP</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="row col-4 mx-auto">
          <Link to="homepage" className="col text-decoration-none  menu-box ">
            <div
              className={
                "menu text-center fs-3" + (tab == "homepage" ? " active" : "")
              }
              onClick={() => setTab("homepage")}
              ref={HomeRef}
            >
              Home
            </div>
          </Link>
          <Link to="todoList" className="col text-decoration-none menu-box ">
            <div
              className={
                "menu text-center fs-3" + (tab == "list" ? " active" : "")
              }
              onClick={() => setTab("list")}
              ref={TodoRef}
            >
              Todo List
            </div>
          </Link>
          </div>
          <div className="dropdown ">
            <button
              className="btn dropdown-toggle border border-0 fw-bold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item text-start " href="#">
                  <i className="bi bi-box-arrow-right p-3 "></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
   
  );
}
