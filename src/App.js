import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
	state = {
		contacts: []
	}

	componentDidMount() {
		ContactsAPI.getAll().then((contacts) =>
			{
				this.setState({contacts});//SAME AS {contacts: contacts}
			});
	}

	removeContact = (contact) => {
		this.setState((currState) => 
			({ 
				contacts: currState.contacts.filter((c) => (c.id !== contact.id))
			}));
	}
	render() {
		return (
			<ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
		)
	}
}

export default App;