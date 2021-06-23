import React, { Component } from 'react';
import './styles/navbar.css';
import Button from './common/button';
import Resume from '../Documents/Resume.pdf';
import { gsap } from 'gsap/all';
import { Power4 } from 'gsap';

class Navbar extends Component {
	state = {
		screenSize: window.innerWidth,
		previousScrollPosition: window.pageYOffset,
		navigationVisibility: true,
		activePosition: -1
	};

	componentDidMount() {
		gsap.timeline().from('.stagger ', {
			opacity: 0,
			y: -50,
			stagger: 0.2,
			duration: 1,
			ease: Power4.easeOut
		});
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleSize);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleSize);
	}

	handleSize = () => {
		const { previousSize } = this.state;

		const currentSize = window.innerWidth;
		if (currentSize !== previousSize)
			this.setState({
				screenSize: currentSize
			});
	};

	handleScroll = () => {
		const { previousScrollPosition } = this.state;

		const currentScrollPosition = window.pageYOffset;
		const navigationVisibility = previousScrollPosition > currentScrollPosition;

		this.setState({
			previousScrollPosition: currentScrollPosition,
			navigationVisibility
		});
	};

	handleClick(link) {
		this.setState({ activePosition: link.index });
	}

	handleToggle = () => {
		const navLinks = document.querySelector('.fullscreen-links');
		const body = document.querySelector('body');
		const hamburger = document.querySelector('.hamburger');
		const lines = hamburger.childNodes;

		body.classList.toggle('open');
		navLinks.classList.toggle('open');

		lines.forEach((line) => {
			line.classList.toggle('reposition');
		});
	};

	render() {
		const links = [ 'About', 'Experience', 'Projects', 'Contact' ];

		let classes = '';
		if (!this.state.navigationVisibility) classes = 'hide-header';

		return (
			<React.Fragment>
				{this.state.screenSize >= 768 ? (
					<header className={classes}>
						<nav className="large-nav">
							<div className="logo stagger">
								<a href="/">JL</a>
							</div>
							<div onClick={this.handleToggle} className="hamburger">
								<div className="line" />
								<div className="line" />
								<div className="line" />
							</div>
							<div className="links">
								<ol className="links">
									{links.map(function(link, index) {
										const className =
											this.state.activePosition === index ? 'stagger active' : 'stagger';
										return (
											<li
												key={link}
												onClick={() => this.handleClick({ index })}
												className={className}
											>
												<a href={'#' + link}>{link}</a>
											</li>
										);
									}, this)}
								</ol>
								<div className="large-nav-button stagger">
									<Button
										fontSize="13px"
										name="Resume"
										href={Resume}
										target="_blank"
										title="Resume"
									/>
								</div>
							</div>
						</nav>
					</header>
				) : (
					<nav className="mini-nav">
						<div className="logo stagger">
							<a href="/">JL</a>
						</div>
						<div onClick={this.handleToggle} className="hamburger">
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</div>

						<ol className="fullscreen-links">
							{links.map(function(link, index) {
								const className = this.state.activePosition === index ? 'stagger active' : 'stagger';
								return (
									<li key={link} onClick={this.handleToggle} className={className}>
										<a href={'#' + link}>{link}</a>
									</li>
								);
							}, this)}
							<li>
								<div className="mini-nav-button stagger">
									<Button
										fontSize="13px"
										name="Resume"
										href={Resume}
										target="_blank"
										title="Resume"
									/>
								</div>
							</li>
						</ol>
					</nav>
				)}
			</React.Fragment>
		);
	}
}

export default Navbar;
