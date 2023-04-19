import React from 'react'

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark fixed-top text-white">
  <div className="container">
    <a className="navbar-brand" style={{color:"white"}} href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white"}} aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            aria-expanded="false"
            style={{color:"white"}}
          >
            Dropdown
          </a>
        </li>
        <li className="nav-item" >
          <a className="nav-link disabled" style={{color:"white"}}>Disabled</a>
        </li>
      </ul>
        {/* <p style={{margin: 10, fontSize:"14px"}}>FORGOT USERNAME?</p> */}
        <button className="btn btn-outline-success" style={{backgroundColor: "white"}} type="submit">
           LOGIN
        </button>
    
    </div>
  </div>
</nav>

    
    </>
  )
}
