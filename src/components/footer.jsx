import React from 'react';
import './styles/footer.css';
import Social from './common/social';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-list">
				<a
					href="https://www.instagram.com/jasonlalonde7/"
					aria-label="Instagram"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Social class="fa fa-instagram" aria-label="Instagram" />
				</a>

				<a
					href="https://twitter.com/jasonlalonde77"
					aria-label="Twitter"
					rel="noopener noreferrer"
					target="_blank"
					name="Twitter"
				>
					<Social class="fa fa-twitter" />
				</a>

				<a href="https://github.com/jlondy" aria-label="Github" rel="noopener noreferrer" target="_blank">
					<Social class="fa fa-github" />
				</a>

				<a
					href="https://www.linkedin.com/in/jasonlalonde/"
					aria-label="LinkedIn"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Social class="fa fa-linkedin" />
				</a>

				<a href="https://codepen.io/jlondy" aria-label="Codepen" rel="noopener noreferrer" target="_blank">
					<Social class="fa fa-codepen" />
				</a>

				<a href="mailto:jason.lalonde@dal.ca" aria-label="Email">
					<Social className="te" class="fa fa-envelope-o" />
				</a>
			</div>
			<p className="footer-message">
				Designed & Programmed with <i className="fa fa-heart-o heart" aria-hidden="true" /> by{' '}
				<span style={{ color: 'white' }}>Jason Lalonde</span>.
			</p>
		</div>
	);
};

export default Footer;
