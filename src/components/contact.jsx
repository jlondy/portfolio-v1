import React, { Component } from 'react';
import './styles/contact.css';
import Button from './common/button';

class Contact extends Component {
	render() {
		return (
			<section id="Contact" className="contact-container">
				<div className="contact-header">
					<h1>Get in Touch</h1>
				</div>
				<p />
				<div className="contact-information">
					<p className="contact-message">
						Currently, I am a recent graduate and actively looking for a full-time position as a software
						engineer. My inbox is always open if you have any questions, potential job opportunities, or if
						you would like to just say hi. &#128522;
					</p>
					<Button
						fontSize="20px"
						name="Say Hello"
						href={'mailto:jason.lalonde@dal.ca'}
						target=""
						title="Say Hello"
					/>
				</div>
			</section>
		);
	}
}

export default Contact;
