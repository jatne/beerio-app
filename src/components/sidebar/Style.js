import React from 'react';
import { Link } from 'react-router-dom';
import { countAndSortUnique, slugify } from '../../helpers';

const Style = ({ styles }) => {
  const sortStyles = countAndSortUnique(styles);

  return (
    <div className="box">
      <h2>style</h2>
      <ul className="cloud">
        {sortStyles.map((style, index) => {
          const target = `/style/${slugify(style[0])}`;
          return (
            <li key={index}>
              <Link to={target}>
                <span>{style[0]} ({style[1]})</span>
              </Link>
            </li>
          )
        })}
        <li><Link to="/"><span class="reset">Wszystkie</span></Link></li>
      </ul>
    </div>
  )
}

export default Style;