import React from 'react'
import { Link } from 'react-router-dom';
import "./whatsapp.css"

function Whatsapp() {
  return (
    <div>
        <Link to="https://wa.me/9879052588" class="btn-whatsapp-pulse btn-whatsapp-pulse-border" target='blank'>
	        <i class="fab fa-whatsapp"></i>
        </Link>
    </div>
  )
}

export default Whatsapp;
