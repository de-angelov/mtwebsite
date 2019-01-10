import React from 'react';
import Carousel from '../components/carousel';

const links = [
  {title:"test0", img:"https://via.placeholder.com/500"}, 
  {title:"test1", img:"https://via.placeholder.com/150"}, 
  {title:"test2", img:"https://via.placeholder.com/250"}, 
  {title:"test3", img:"https://via.placeholder.com/350"}];

const Home = () => (
  <>
    <Carousel slides={links} />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Explicabo sit assumenda, soluta necessitatibus impedit tenetur nulla 
      inventore doloribus illo laboriosam nostrum aliquid exercitationem 
      adipisci eligendi voluptatibus harum velit dolores ipsam?
    </div>
  </>
);
export default Home;
