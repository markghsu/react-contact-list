import React from 'react'
import PropTypes from 'prop-types'

class ListContacts extends React.Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		});
	}

	render(){
		return (
			<div className='list-contacts'>
			{JSON.stringify(this.state.query)}
				<form className='list-contacts-top'>
					<input
						type='search'
						className='search-contacts'
						placeholder='Search contacts'
						value={this.state.query}
						onChange={(evt)=>this.updateQuery(evt.target.value)}
					/>
				</form>
				<ol className='contact-list'>
					{
						this.props.contacts.map(contact => (
							<li key={contact.id} className='contact-list-item'>
								<div className='contact-avatar' style={{
									backgroundImage: `url(${contact.avatarURL})`
								}}/>
								<div className='contact-details'>
									<p>{contact.name}</p>
									<p>{contact.email}</p>
								</div>
								<button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
									Remove
								</button>
							</li>
							)
						)
					}
				</ol>
			</div>
		);
	}
}
export default ListContacts