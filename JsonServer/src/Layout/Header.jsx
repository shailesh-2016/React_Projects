import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li>
          <NavLink className="nav-link active" aria-current="page" to="/">UserJson</NavLink>
        </li>
       
        <li>
          <NavLink className="nav-link active" aria-current="page" to="/Update">Update</NavLink>
        </li>
        <li>
          <NavLink className="nav-link active" aria-current="page" to="/View">View</NavLink>
        </li>
       
        {/* <li class="nav-item">
          <NavLink className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </header>
    </>
  )
}

export default Header
