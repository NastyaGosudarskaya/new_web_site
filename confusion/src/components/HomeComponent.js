import React from 'react';
import Typical from 'react-typical';
import './../App.css';

function Home(props){
    return (
        <>
            <div className="jumbatron home">
                <h1>
                  <Typical
                  steps={[' ', 3000, 'Discover your own paradise!']}
                  />
                </h1>
            </div>
        </>
      );
}

export default Home;