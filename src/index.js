import React from 'react';
import ReactDOM from 'react-dom';

const Person = () =>{
  return (
    <article>
      <img src = "https://picsum.photos/200/300" alt = "Random image1"/>
    <h4>Name</h4>
    <h4>Job</h4>
    </article>
  );
}

const PersonList = () => {
  return (
  <section>
    <Person/>
  </section>);
};

ReactDOM.render(
  <PersonList/>,
  document.getElementById('root')
)