import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' 

const Person = ({img, name, job, children}) =>{
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`
  return (
    <article className = "person">
      <img src = {url} 
        alt = "Random"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
}

const PersonList = () => {
  return (
  <section className = "person-list">
    <Person img = "34" name="Abhinab" job="Developer"/>
    <Person img = "22" name="Simran" job="Developer">
      <p>
        Children Paragraph
      </p>
    </Person>
    <Person img = "13" name="Ankita" job="Designer"/>
  </section>);
};

ReactDOM.render(
  <PersonList/>,
  document.getElementById('root')
)