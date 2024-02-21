import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Login } from "./page/Login";
import { TodoApp } from "./page/TodoApp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <TodoApp/>,
  },
 
  // {
  //   path: "user",
  //   element: <UserLayout />,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "warehouse",
  //       element: <Warehouse />,
  //     },
  //   ],
  // },
]);
function App() {
  return (
    <>
      <div className="col-12 container">
      <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
