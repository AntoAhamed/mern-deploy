import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to='/'>ADD NOTE</Link>
            </li>
            <li>
                <Link to='/notes'>NOTES</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Navbar
