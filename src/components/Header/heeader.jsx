import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

import img from "../../assets/logo.jpg";

export default function heeader() {
  return (
    < >
      <header>
        <div className="logo">
          <img src={img} alt="#" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Button variant="text" sx={{ color: "#000" }}>
                Characters
              </Button>
            </li>
            <li>
              <Button variant="text">Episodes</Button>
            </li>
            <li>
              <Link to={"/registration"}>
                <Button variant="text">Register</Button>
              </Link>
            </li>
            <li>
              <Link to={'/login'}>
                <Button variant="text">Login</Button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
