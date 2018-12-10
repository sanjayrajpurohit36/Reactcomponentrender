import React from 'react';

const Base = (props) => {
    const {name, age} = props; 
    return ( 
      <div>
        <h1 className="title">Hello World!!!!</h1>
        <p> Hii {name} your age is {age}!!!! </p>
      </div>
    );
  }

  export default Base;