import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

export function TodoApp() {
  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <div className="row h-auto col-12 d-flex flex-column justify-content-start align-items-center ">
        <Navbar />
        <div className="row h-80 bg-red">
          HI
          <Outlet />
        </div>


      </div>
    </div>
  );
}
