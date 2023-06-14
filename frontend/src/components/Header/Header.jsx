import Link from "next/link";

const Header = () => {
  return (
    <header className='app__header'>
      <nav className='app__navigation'>
        <div className='app__navigation__logo'>
          <Link className='app__navigation__logo-link' href='/'>
            <img
              src='/omega.svg'
              alt='logo'
              className='app__navigation__logo-image'
            />
          </Link>
        </div>
        <ul className='app__navigation__list'>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/'
              scroll={false}
            >
              WHAT WE DO
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#prices'
              scroll={false}
            >
              OUR WORK
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#about'
              scroll={false}
            >
              SEO INSIGHTS
            </Link>
          </li>
          <li className='app__navigation__item'>
            <Link
              className='app__navigation__item-link'
              href='/#contacts'
              scroll={false}
            >
              ABOU US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
