import React from 'react';
import Post from './Post';

const PostsGrid = ({ beers, filtered }) => {
  let beersData = [...beers];

  if (filtered) {
    const key = Object.keys(filtered)[0];
    const slug = key !== 'beer' ? key + '_slug' : 'name_slug';

    beersData = beersData.filter(el => el[slug] === filtered[key]);
  }

  const beer = beersData.map((val, index) =>
    <Post key={index} beerData={val} />
  );

  return (
    <main className="main">
      <h1>{filtered ? Object.keys(filtered)[0] : 'Najnowsze'}</h1>
      <div className="posts-grid">
        {beer}
      </div>
    </main>
  );
};

export default PostsGrid;
