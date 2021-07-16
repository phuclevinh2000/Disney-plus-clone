import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="#"/>
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="#"/>
                    <span>SEACRH</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="#"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="#"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="#"/>
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="#"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/156501902_1735233536656019_3364926954326873439_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=THUnrsNUSrwAX99Qjc-&tn=2WnSsk8Uz5bg0sB8&_nc_ht=scontent-hel3-1.xx&oh=4b86c277a908f33fec9ab12aae39d9d1&oe=60F60F35"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    a{
        text-decoration: none;
        color: white;
    }
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {   //make the navbar hover
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {   //make the navbar hover
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
