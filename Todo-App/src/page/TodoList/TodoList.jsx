import { useEffect, useState } from "react";
import { fetchTodoData } from "../../Data/TodoData";
import "./TodoList.css";
import { Table } from "react-bootstrap";

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  // const [page, setPage] = useState(0);
  // const [numPages, setNumPages] = useState(0);

  const ShowTodo = todoList.map((todo) => {
    return (
      <tr key={todo.id}>
        <td className="col text-center">{todo.id}</td>
        <td className="col">{todo.title}</td>
        <td className="col">{todo.priority}</td>
        <td>{todo.status ? "Done" : "Waiting"}</td>
      </tr>
    );
  });

  useEffect(() => {
    setTodoList(fetchTodoData);
  }, []);

  // const itemPerPage = 10;
  // useEffect(()=>{
  //   const
  // }, [todoList])

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-0 m-0 bg-black h-auto my-3">
      <div className="row col-7 border border-1 p-3 rounded-2 bg-white " style={{height:"600px"}}>
        <div className="col-12 p-0 mb-1">
          <div className="d-flex flex-row justify-content-between align-items-center px-3 py-0">
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
       
        <div className="m-0 p-0"  style={{ maxHeight: "450px", overflowY: "auto" }}>
          <Table striped bordered hover className="table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th className="col text-center fs-5">#</th>
                <th className="col fs-5">Title</th>
                <th className="col fs-5">Priority</th>
                <th className="col fs-5">Status</th>
              </tr>
            </thead>

            <tbody>{ShowTodo}</tbody>
          </Table>
        </div>
        <div className="col-12 p-0 d-flex flex-row justify-content-center align-items-center ">
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
