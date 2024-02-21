import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Login } from "./page/Login";
import { TodoApp } from "./page/TodoApp";
import { Homepage } from "./page/Homepage";
import { TodoList } from "./page/TodoList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "home/*",
    element: <TodoApp/>,
    children: [
          {
            path: "homepage" ,
            element: <Homepage />,
          },
          {
            path: "todoList" ,
            element: <TodoList />,
          },
    ]
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
      <div className="row">
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
