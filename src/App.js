import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
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
		ContactsAPI.remove(contact);
	}

	addContact = (values) => {
		ContactsAPI.create(values).then((contact) => {
					this.setState((currState) =>({
						contacts: currState.contacts.concat([ contact ])
					}));
			});
	}
	render() {
		return (
			<div className='app'>
				<Route exact path='/' render={() => (
					<ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
				)}/>
				<Route path='/create' render={({history}) => (
					<CreateContact onCreateContact={(values)=>{
						this.addContact(values);
						history.push('/');
					}}/>
				)}/>
			</div>
		)
	}
}

export default App;