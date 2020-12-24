import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from './logo.png'
import bal from './bal.jpg'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    useEffect(() => {
        window.onscroll = function () {
            let header = document.getElementsByClassName('header')
            if (window.scrollY > 630) {
                header.classList.add('updated-class')
            } else {
                header.classList.remove('updated-class')
            }
        }
    }, [0])

    return (
        <div className='header_img'>
            <div className='header'>
                <div className='header_logo'>
                    <img className='logo' src={logo} alt='' />
                </div>
                <div className='header_nav'>
                    <ul class='nav-links'>
                        <li>
                            <a class='nav-link' href='#'>
                                E-Masğaza
                            </a>
                        </li>
                        <li>
                            <a class='nav-link' href='#'>
                                Kampanyalar
                            </a>
                        </li>
                        <li>
                            <a class='nav-link' href='#'>
                                Hakkımızda
                            </a>
                        </li>{' '}
                        <li>
                            <a class='nav-link' href='#'>
                                Blog
                            </a>
                        </li>{' '}
                        <li>
                            <a class='nav-link' href='#'>
                                Bal Parmak Arıcılık Akademisi
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header_icons'>
                    <span>
                        <SearchIcon />
                    </span>
                    <span>
                        <PersonIcon />
                    </span>
                    <span>
                        <ShoppingBasketIcon />
                    </span>
                </div>
            </div>
            <img id='bal' src={bal} alt='' srcset='' />
        </div>
    )
}

export default Header
