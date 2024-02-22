import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

export function TodoApp() {
  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <div className="row h-auto col-12 d-flex flex-column justify-content-start align-items-center">
        <Navbar />
        <div className="row p-0 m-0" >
          <Outlet />
        </div>

      </div>
    </div>
  );
}
