import React, { Component } from 'react';
import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts
    return <ol>
    {people.map(a=>(
      <li key={a.name}>{a.name}</li>
    ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
      {name: 'Mark'},
      {name: 'Angela'},
      {name: 'Vivek'}
    ]}/>
    <ContactList contacts={[
      {name: 'Johann'},
      {name: 'Yuri'},
      {name: 'Kevin'},
      {name: 'Renard'}
    ]}/>
      </div>
    );
  }
}

export default App;
