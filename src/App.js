import React, { Component } from 'react';
import './App.css';
import persons from './services/fakePeopleService'
import ProfileView from './Components/ProfileView/ProfileView'
import Chat from './Components/Chat/Chat'
import ContactList from './Components/ContactList/ContactList'
import selfProfileImg from './media/self img/download (1).jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: persons[1],
      contacts:persons
        }
      }
      setSelectedPerson = (name) => {
        this.setState(state => {
          var idx = state.contacts.findIndex(contact => {
            return contact.name === name
          })
          return {
            ...state,
            selectedPerson:state.contacts[idx]

          }
        })
      }
  render() {
    return (
      <div className="App">
      <ContactList contacts={this.state.contacts}
      selectedPerson={this.state.selectedPerson}
      setSelectedPerson={this.setSelectedPerson}/>
      <Chat selectedPerson={this.state.selectedPerson}
      selfImg={selfProfileImg}/>
      <ProfileView profile={this.state.selectedPerson}/>
      </div>
    );
  }
}

export default App;
