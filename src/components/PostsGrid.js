import React from 'react';
import Post from './Post';

const PostsGrid = ({ beers }) => {
  const beer = beers.map((val, index) => <Post key={index} beerData={val} />);

  return (
    <main className="main">
      <h1>Najnowsze</h1>
      <div className="posts-grid">
        {beer}
      </div>
    </main>
  );
};

export default PostsGrid;
