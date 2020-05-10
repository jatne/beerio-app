import React from 'react';
import Style from './sidebar/Style';
import Breweries from './sidebar/Breweries';
import Stats from './sidebar/Stats';

const Sidebar = ({beers}) => {
  const styles = beers.map(val => val.style);
  const breweries = beers.map(val => val.brewery);

  return (
    <aside className="sidebar">
      <Style styles={styles} />
      <Breweries breweries={breweries} />
      <Stats />
    </aside>
  );
}

export default Sidebar;
