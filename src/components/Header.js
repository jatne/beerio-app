import React from 'react';

const Header = () => (
  <header className="top-header">
    <div className="brand">
      <a href="/">beerio<span>.app</span></a>
    </div>
    <div className="utilities">
      <button type="button" className="btn btn--ico btn--link">
        <span className="ico ico-new"></span> nowa pozycja
        </button>
      <button type="button" className="btn btn--ico btn--link">
        <span className="ico ico-search"></span>
      </button>
    </div>
  </header>
);

export default Header;
