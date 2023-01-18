import React from "react";

import './main.scss'

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  BsPinterest,
  AiFillYoutube,
  RiCompassFill,
} from "react-icons/all";

export function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__container">
        <div className="header__content-one">
          <div className="logo__container">
            <div className="icon">
              <RiCompassFill />
            </div>
            <div className="logo">Atlas</div>
          </div>
          <div className="nav__container">
            <ul>
              <li>Categories</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="header__content-two">
          <div className="search__input-container">
            <input type="text" placeholder="search..." />
          </div>
          <div className="social__icons">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsPinterest />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
