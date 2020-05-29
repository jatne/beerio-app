import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ beerData }) => {
  const { name, name_slug, brewery, style, alc, date, rating, desc, photo } = beerData;
  const target = `/beer/${name_slug}`;

  return (
    <Link to={target} className="post">
      <div className="post__figure" style={{backgroundImage: `url('https://api.devx.pl/${photo.path}')`}}>
        <div className="post__category">
          <span>{style}</span>
        </div>
        <div className="post__meta">
          <div className="post__bubble post__rating">
            <span className="value">{rating}</span>
            <span className="suffix">10</span>
          </div>
          <div className="post__bubble post__voltage">
            <span className="value">{alc}</span>
            <span className="suffix">%</span>
          </div>
        </div>
      </div>
      <div className="post__main">
        <div className="post__info">
          <div className="post__subtitle">{brewery}</div>
          <div className="post__date">{date}</div>
        </div>
        <div className="post__title"><h2>{name}</h2></div>
        {desc
          ? (
            <div className="post__desc">
              <p>{desc}</p>
            </div>
          )
          : ''
        }
      </div>
    </Link>
  );
};

export default Post;
