import React from 'react';
import { countAndSortUnique } from '../../helpers';

const Style = ({ styles }) => {
  const sortStyles = countAndSortUnique(styles);

  return (
    <div className="box">
      <h2>style</h2>
      <ul className="cloud">
        {sortStyles.map((style, index) => <li key={index}><span>{style[0]} ({style[1]})</span></li>)}
      </ul>
    </div>
  )
}

export default Style;