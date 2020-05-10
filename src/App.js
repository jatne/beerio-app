import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostsGrid from './components/PostsGrid';
import Sidebar from './components/Sidebar';
import { convertDate, sortData, formatDate } from './helpers';

const App = ({match}) => {
  const [beersData, setBeersData] = useState({ beers: [] });

  const { params } = match;

  useEffect(() => {
    fetch('https://api.devx.pl/api/collections/get/beerio?token=7d00588bfc312fc16b35c1894b72b8')
      .then(res => res.json())
      .then(res => convertDate(res.entries))
      .then(res => sortData(res))
      .then(res => formatDate(res))
      .then(res => setBeersData({ beers: res }));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <PostsGrid beers={beersData.beers} filtered={Object.keys(params).length ? params : false}/>
        <Sidebar beers={beersData.beers}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
