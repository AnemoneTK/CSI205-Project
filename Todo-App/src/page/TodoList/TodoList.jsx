import { useEffect, useState } from "react";
import { fetchTodoData } from "../../Data/TodoData";

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);

  const ShowTodo = todoList.map((todo) => {
    return (
      <tr key={todo.id}>
        <th className="col-1 text-center">{todo.id}</th>
        <td className="col-5">{todo.title}</td>
        <td className="col">{todo.priority}</td>
        <td>{todo.status ? "Done" : "Waiting"}</td>
      </tr>
    );
  });

  useEffect(() => {
    setTodoList(fetchTodoData);
  }, []);

  const itemPerPage = 10;
  // useEffect(()=>{
  //   const
  // }, [todoList])

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row col-6 border border-1 p-3 rounded-2 bg-white">
        <div className="col-12 p-0 mb-3">
          <div className="d-flex flex-row justify-content-between align-items-center px-3">
            <div className="d-flex flex-row align-items-center">
              <div className="col-auto m-0 p-0 fw-bold fs-5">
                Item per page :
              </div>
              <div className="col-auto ms-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected value="10">
                    10
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn dropdown-toggle py-0 px-2 border border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-filter fs-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Done
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Waiting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <table className="table col-6 table-striped ">
          <thead className="table-dark">
            <tr>
              <th className="col text-center fs-5">#</th>
              <th className="col fs-5">Title</th>
              <th className="col fs-5">Priority</th>
              <th className="col fs-5">Status</th>
            </tr>
          </thead>
          <tbody className="">{ShowTodo}</tbody>
        </table>
        <div className="col-12 p-0 mt-3 d-flex flex-row justify-content-center align-items-center">
          <button className="btn col-1 text-black border border-0">
            First
          </button>
          <button className="btn border border-0">
            <i className="bi bi-caret-left-fill text-black"></i>
          </button>
          <div className="mx-2 text-black fs-4">1/10</div>
          <button className="btn border border-0">
            <i className="bi bi-caret-right-fill text-black"></i>
          </button>
          <button className="btn col-1 text-black border border-0">Last</button>
        </div>
      </div>
    </div>
  );
}
