import React from 'react';
import { Link } from 'react-router-dom';
import { countAndSortUnique, slugify } from '../../helpers';


const Breweries = ({ breweries }) => {
  const sortedBreweries = countAndSortUnique(breweries);

  return (
    <div className="box">
      <h2>Browary</h2>
      <ul className="cloud">
        {sortedBreweries.map((brewery, index) => {
          const target = `/brewery/${slugify(brewery[0])}`;
          return (
            <li key={index}>
              <Link to={target}>
                <span>{brewery[0]} ({brewery[1]})</span>
              </Link>
            </li>
          )
        })}
        <li><Link to="/"><span class="reset">Wszystkie</span></Link></li>
      </ul>
    </div>
  )
}

export default Breweries;