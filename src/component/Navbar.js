import React from 'react'
import './NavBar.css'

export default function Navbar() {
    const svg_magnifying_glass = (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.66666 14.3333C11.3485 14.3333 14.3333 11.3486 14.3333 7.66666C14.3333 3.98476 11.3485 1 7.66666 1C3.98476 1 1 3.98476 1 7.66666C1 11.3486 3.98476 14.3333 7.66666 14.3333Z"
                stroke="#BBBBBB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16 16L12.375 12.375"
                stroke="#BBBBBB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );

    return (
        <div className='nav-bar-section'>
            <div className='logo-site'></div>
            <h1 className='web-site-title'>Wiki Harry Potter</h1>
            <form className='search-bar' action="">
                <input className='input-section' type="text" placeholder='Are you looking for someone?' />
                <button className='magnifying-glass'>{svg_magnifying_glass}</button>


            </form>
        </div >
    )
}
