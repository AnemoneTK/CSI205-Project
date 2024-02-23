import { useEffect, useState } from "react";
import { fetchTodoData } from "../../Data/TodoData";
import "./TodoList.css";
import { Table } from "react-bootstrap";

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);

  const [itemPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    setTodoList(fetchTodoData);
  }, []);

  useEffect(() => {
    setNumPages(Math.ceil(todoList.length / itemPerPage));
  }, [itemPerPage, todoList]);

  useEffect(() => {
    if (numPages == 0) {
      setPage(0);
    } else {
      if (page == 0) {
        setPage(1);
      } else if (page > numPages) {
        setPage(numPages);
      }
    }
  }, [numPages, page]);

  const setStatus = (id) => {
    const selectItem = todoList.find((todo) => {
      return todo.id == id;
    });
    if (selectItem.status == true) {
      selectItem.status = false;
    } else {
      selectItem.status = true;
    }

    setTodoList([...todoList, selectItem]);
  };

  const ShowTodo = todoList.map((todo, index) => {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;

    if (index >= start && index < end) {
      return (
        <tr key={todo.id}>
          <td className=" text-center col-1">{todo.id}</td>
          <td>{todo.title}</td>
          <td
            className={
              "col-2 fw-bolder" +
              (todo.priority == "High"
                ? " text-danger"
                : todo.priority == "Medium"
                ? " text-warning"
                : " text-info")
            }
          >
            {todo.priority}
          </td>
          <td className="p-0 col-2">
            <button
              className={
                "btn col-12 text-center rounded-0" +
                (todo.status ? " bg-success" : " bg-warning")
              }
              onClick={() => setStatus(todo.id)}
            >
              {todo.status ? "Done" : "Waiting"}
            </button>
          </td>
        </tr>
      );
    }
  });

  return (
    <div className="container pt-5 align-items-start">
      <div className="row col-lg-7 col-md-10 col-sm-10 border border-1 rounded-2 bg-white p-3">
        <div className="col-12 p-0 mb-1">
          <div className="d-flex flex-row justify-content-between align-items-center px-3 py-2">
            <div className="d-flex flex-row align-items-center">
              <div className="col-auto m-0 p-0 fw-bold fs-5">
                Item per page :
              </div>
              <div className="col-auto ms-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => setItemPerPage(event.target.value)}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
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

        <div
          className="m-0 p-0"
          style={{ minHeight: "50dvh", maxHeight: "50dvh", overflowY: "auto" }}
        >
          <Table striped bordered hover responsive="sm" size="sm">
            <thead
              className="table-dark"
              style={{ position: "sticky", top: "0" }}
            >
              <tr>
                <th className="col text-center fs-4">#</th>
                <th className="col fs-4">Title</th>
                <th className="col fs-4">Priority</th>
                <th className="col fs-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="h-auto border ">{ShowTodo}</tbody>
          </Table>
        </div>
        <div className="col-12 pt-3 px-0 m-0 d-flex flex-row justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary btn-lg text-black col-3"
            onClick={() => {
              setPage(1);
            }}
          >
            First
          </button>
          <button
            className="btn border border-0 col"
            onClick={() => {
              if (page > 1) {
                setPage((p) => p - 1);
              }
            }}
          >
            <i className="bi bi-caret-left-fill text-black fs-3"></i>
          </button>
          <div className="mx-3 text-black fs-4 fw-bolder text-center p-0 m-0">
            {page} / {numPages}
          </div>
          <button
            className="btn border border-0 col"
            onClick={() => {
              if (page < numPages) {
                setPage((p) => p + 1);
              }
            }}
          >
            <i className="bi bi-caret-right-fill text-black fs-3"></i>
          </button>
          <button
            className="btn btn-outline-primary btn-lg text-black col-3"
            onClick={() => {
              setPage(numPages);
            }}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}
