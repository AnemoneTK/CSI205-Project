export function Navbar(){
    return(
        <div
        className="col-12 bg-white d-flex flex-row justify-content-between align-items-center"
        style={{ minHeight: "3rem" }}
      >
        <div className="col-4 justify-content-center align-items-center text-start">
          LOGO
        </div>
        <div className="col-4 d-flex flex-row justify-content-center align-items-center">
          <div className="col text-center">Home</div>
          <div className="col text-center">List</div>
        </div>
        <div className="col-4 bg-blue text-end">Account</div>
      </div>
    )
}