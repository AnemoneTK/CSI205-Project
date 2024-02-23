import { useEffect, useState } from "react";
import { fetchTodoData } from "../../Data/TodoData";
import "./TodoList.css";
import { Table } from "react-bootstrap";

export function TodoList() {
  const [todoRaw, setTodoRaw] = useState([]);
  const [doneList,setDoneList] = useState(true)
  const [waitList,setWaitList] = useState(false)
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(0);
  const [numPages, setNumPages] = useState(0);

  const [itemPerPage, setItemPerPage] = useState("");

  useEffect(() => {

    setTodoRaw(fetchTodoData)
    setItemPerPage(10);
  }, []);

  useEffect(()=>{
    const selectedItem = todoRaw.filter((todo)=>{
      if(doneList == true && waitList == true){
        return todo
      }else if (doneList == false && waitList == true){
        return !todo.status
      }else if (waitList == false && doneList == true){
        return todo.status
      }else{
        return !todo
      }
    })
    setTodoList(selectedItem);
  },[todoRaw, doneList, waitList])

  useEffect(() => {
    setNumPages(Math.ceil(todoList.length / itemPerPage));
  }, [itemPerPage, todoList.length]);

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
    const selectItem = todoRaw.find((todo) => {
      return todo.id == id;
    });
    if (selectItem.status == true) {
      selectItem.status = false;
    } else {
      selectItem.status = true;
    }

    setTodoRaw([...todoRaw, selectItem]);
  };

  const ShowTodo = todoList.map((todo, index) => {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;

    if (index >= start && index < end) {
      return (
        <tr key={todo.id}>
          <td className="text-center col-1">{todo.id}</td>
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
            {todo.status ? (
              <button
                className="border border-0 col-12 text-start rounded-0 bg-success fs-5 text-white"
                onClick={() => setStatus(todo.id)}
              >
                <i className="bi bi-check2-square me-3"></i>
                Done
              </button>
            ) : (
              <button
                className="border border-0 col-12 text-start rounded-0 bg-warning fs-5"
                onClick={() => setStatus(todo.id)}
              >
                <i className="bi bi-square me-3"></i>
                Waiting
              </button>
            )}
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li onClick={()=>setDoneList(!doneList)}>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked = {doneList}
                        // onChange={(e)=> setDoneList(e.target.checked)}
                      />
                      <label className="form-check-label">Done</label>
                    </div>
                  </a>
                </li>
                <li onClick={()=>setWaitList(!waitList)}>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked = {waitList}
                        // onChange={(e)=> setWaitList(e.target.checked)}
                      />
                      <label className="form-check-label">Waiting</label>
                    </div>
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
