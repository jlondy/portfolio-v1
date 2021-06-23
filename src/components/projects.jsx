import React, { Component } from 'react';
import './styles/project.css';
import Photo1 from '../Images/somma.webp';
import Photo2 from '../Images/blackjack.webp';
import Photo3 from '../Images/GIFO.webp';

const projects = [
	{
		id: '1',
		labelOne: 'Somma github',
		labelTwo: 'Somma redirect',
		githubLink: 'https://github.com/jlondy/Somma',
		buttonLink: 'https://hardcore-borg-b27f95.netlify.app/',
		sideMessage: 'For the wine fans!',
		material: [ 'React', 'Material UI', 'D3.js', 'Node.js' ],
		projectName: 'Somma',
		photo: Photo1,
		details:
			'Somma is a web app that uses React, Material UI, D3.js, and Node.js for visualizing reviewed wine data, such as wine origination, taster, price, and rank. I built this application in my fourth-year visualization class when I was learning D3.js for the first time.'
	},
	{
		id: '2',
		labelOne: 'Blackjava github',
		labelTwo: 'Blackjava redirect',
		githubLink: 'https://github.com/jlondy/Blackjava',
		buttonLink: 'https://github.com/jlondy/Blackjava',
		sideMessage: 'For the casino fans!',
		material: [ 'Java', 'JavaFX' ],
		projectName: 'Blackjava',
		photo: Photo2,
		details:
			"Blackjava is a blackjack GUI created in my first-year intro to computer science class. The program is java based blackjack game. If you don't know what blackjack is, it is a casino game where users will play against the dealer to see who gets closer to 21 in a card count."
	},
	{
		id: '3',
		labelOne: 'GIFO github',
		labelTwo: 'GIFO redirect',
		githubLink: 'https://github.com/jlondy/GIFO',
		buttonLink: 'https://github.com/jlondy/GIFO',
		sideMessage: 'For the GIF fans!',
		material: [ 'React', 'AWS', 'Node.js', 'GIPHY API' ],
		projectName: 'GIFO',
		photo: Photo3,
		details:
			'GIFO is a web application that uses React, AWS, Node.js, Material UI, and the GIPHY API. The program allows users to save their favourite gifs to their accounts. The program is not up and running due to not having my AWS educate account anymore. However, the program allowed me to gain experience in many different AWS services such as DynamoDB, Docker with ECS, Lambda, API Gateway, Secrets Manager, and SNS.'
	}
];
class Projects extends Component {
	render() {
		return (
			<section id="Projects" className="project-container">
				<div className="project-header">
					<h1>Projects</h1>
				</div>
				{projects.map((project) => (
					<div key={project.id} className={'content-wrapper-projects' + project.id}>
						<div className="my-projects-container">
							<div className="card">
								<a
									aria-label={project.labelOne}
									rel="noopener noreferrer"
									target="_blank"
									href={project.githubLink}
								>
									<i className="fa fa-github" />
								</a>

								<p>{project.sideMessage}</p>
								<img className="project-image" src={project.photo} alt={project.projectName} />

								<div className="project-material">
									{project.material.map((item, index) => <strong key={index}>{item}</strong>)}
								</div>
								<a
									aria-label={project.labelTwo}
									rel="noopener noreferrer"
									target="_blank"
									href={project.buttonLink}
								>
									<span className="dot" />
									<h2>{project.projectName}</h2>
									{/* <i className="fa fa-arrow-right" /> */}
								</a>
							</div>
							<div className="project-details">{project.details}</div>
						</div>
					</div>
				))}
			</section>
		);
	}
}

export default Projects;
