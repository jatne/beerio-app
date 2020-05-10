import React from 'react';
import { countAndSortUnique } from '../../helpers';

const Breweries = ({ breweries }) => {
  const sortedBreweries = countAndSortUnique(breweries);

  return (
    <div className="box">
      <h2>Browary</h2>
      <ul className="cloud">
        {sortedBreweries.map((brewery, index) => <li key={index}><span>{brewery[0]} ({brewery[1]})</span></li>)}
      </ul>
      <button type="button" className="btn btn--link btn--remove"><span>&times;</span> wyłącz filtrowanie</button>
    </div>
  )
}

export default Breweries;