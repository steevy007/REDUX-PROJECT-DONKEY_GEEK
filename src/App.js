import React from 'react';
import Phone from './containers/Phone/Phone'
import Tv from './containers/tv/Tv';
import Comments from './containers/comments/Comments';
function App() {
  return (
    <div className='row'>
      <Phone/>
      <Tv/>
      <Comments/>
    </div>
  );
}

export default App;
