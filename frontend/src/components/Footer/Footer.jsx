import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='app-footer'>
      <span className='app-footer__copyright'>Ukraine 2000-2015</span>
      <div className='app-footer__socials'>
        <Link
          className='app-footer__socials__item'
          rel='stylesheet'
          href='https://uk-ua.facebook.com/'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#fb'></use>
          </svg>
        </Link>
        <Link
          className='app-footer__socials__item'
          rel='stylesheet'
          href='https://twitter.com/?lang=uk'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#twitter'></use>
          </svg>
        </Link>
        <Link
          className='app-footer__socials__item'
          rel='stylesheet'
          href='https://www.linkedin.com/'
        >
          <svg className='app-footer__socials__item-icon'>
            <use xlinkHref='./images/sprite.svg#linkedin'></use>
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
