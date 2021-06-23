import React, { Component } from 'react';
import './styles/about.css';
import Photo from '../Images/ME.webp';
import StyledText from './common/text';

class About extends Component {
	render() {
		return (
			<section id="About" className="about-container">
				<div className="about-header">
					<h1>About Me</h1>
				</div>
				<div className="about-information">
					<div className="about-image">
						<img src={Photo} width="100%" height="100%" alt="Jason Lalonde" />
					</div>
					<div>
						<p className="about-message">
							Hello! My name is Jason, and I enjoy creating visually pleasing applications. My passion for
							web development started during my first-year Intro to Web Design course at{' '}
							<a href="https://www.dal.ca/" rel="noopener noreferrer" target="_blank">
								<StyledText text="Dalhousie University" />
							</a>. I have gained a lot of knowledge and skills throughout my education, which enabled me
							to receive a Web & Mobile Development certificate with my bachelor's in Computer Science.
						</p>
						<p className="about-message">
							As of today, I can look back at a GPA of 3.67, 4 certificates, an AWS 101 badge, and the
							privilege of working as a teaching assistant and team leader with extreme value. These days
							ahead, my main focus is job seeking a full-time position as a software engineer where I can
							grow as a developer by learning new programming principles and languages. I have a deep
							passion for working and collaborating with highly talented people to make excellent
							software. I believe my passion and skills in front-end development would be a perfect match
							for any new experience.
						</p>
						<p className="about-message">
							Here are a few technologies I extremely enjoy and have been working with recently:
						</p>
						<div>
							<ul className="list-of-skills">
								<li>
									<a href="https://reactnative.dev/" rel="noopener noreferrer" target="_blank">
										<StyledText text="React Native" />
									</a>
								</li>
								<li>
									<a href="https://threejs.org/" rel="noopener noreferrer" target="_blank">
										<StyledText text="Three.js" />
									</a>
								</li>
								<li>
									<a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank">
										<StyledText text="JavaScript" />
									</a>
								</li>
								<li>
									<a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
										<StyledText text="React" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
