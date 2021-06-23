import React, { Component } from 'react';
import Social from './common/social';
import './styles/socials.css';

const socialInformation = [
	{
		id: 'social-one',
		href: 'https://www.instagram.com/jasonlalonde7/',
		platform: 'Instagram',
		target: '_blank',
		iconLabel: 'fa fa-instagram'
	},

	{
		id: 'social-two',
		href: 'https://twitter.com/jasonlalonde77',
		platform: 'Twitter',
		target: '_blank',
		iconLabel: 'fa fa-twitter'
	},
	{
		id: 'social-three',
		href: 'https://github.com/jlondy',
		platform: 'Github',
		target: '_blank',
		iconLabel: 'fa fa-github'
	},
	{
		id: 'social-four',
		href: 'https://www.linkedin.com/in/jasonlalonde/',
		platform: 'LinkedIn',
		target: '_blank',
		iconLabel: 'fa fa-linkedin'
	},
	{
		id: 'social-five',
		href: 'https://codepen.io/jlondy',
		platform: 'Codepen',
		target: '_blank',
		iconLabel: 'fa fa-codepen'
	},
	{
		id: 'social-six',
		href: 'mailto:jason.lalonde@dal.ca',
		platform: 'Email',
		target: '_blank',
		iconLabel: 'fa fa-envelope-o'
	}
];

class Socials extends Component {
	state = { activePosition: -1 };

	render() {
		return (
			<div className="socials">
				<ul>
					{socialInformation.map((info) => (
						<li key={info.id} className="stagger">
							<a
								href={info.href}
								aria-label={info.platform}
								rel="noopener noreferrer"
								target={info.target}
							>
								<Social class={info.iconLabel} aria-label={info.platform} />
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Socials;
