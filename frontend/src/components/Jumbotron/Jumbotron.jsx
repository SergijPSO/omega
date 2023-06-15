import React from "react";

const Jumbotron = () => {
  return (
    <div className='app-jumbotron'>
      <div className='app-jumbotron__inner-border'></div>
      <h2 className='app-jumbotron__title'>Workforce Survey</h2>
      <p className='app-jumbotron__text'>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi
      </p>
      <button className='app-jumbotron__btn'>Start Now</button>
    </div>
  );
};

export default Jumbotron;
