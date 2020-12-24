import React, { useState, useEffect } from 'react'
import './Header.css'
import classNames from 'classnames'
import logo from './logo.png'
import bal from './bal.jpg'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    const [scrolled, setScrolled] = useState()
    const classes = classNames('header', {
        scrolled: scrolled,
    })
    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return (_) => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='header_tot'>
            <div className={classes}>
                <div className='header_logo'>
                    <img className='logo' src={logo} alt='' />
                </div>
                <div className='header_nav'>
                    <ul class='nav_links'>
                        <li>
                            <a class='nav_link' href='#'>
                                E-Mağaza
                            </a>
                        </li>
                        <li>
                            <a class='nav_link' href='#'>
                                Kampanyalar
                            </a>
                        </li>
                        <li>
                            <a class='nav_link' href='#'>
                                Hakkımızda
                            </a>
                        </li>{' '}
                        <li>
                            <a class='nav_link' href='#'>
                                Blog
                            </a>
                        </li>{' '}
                        <li>
                            <a class='nav_link' href='#'>
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
