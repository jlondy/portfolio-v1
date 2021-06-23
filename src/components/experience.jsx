import React, { Component } from 'react';
import './styles/experience.css';

const buttonList = [
	'Education',
	'Dalhousie University',
	'SuperNOVA at Dalhousie University',
	'Novon Forestry Inc.',
	'Online Certificates & Badges'
];
const experiences = [
	{
		id: 'experience-one',
		type: 'school',
		header: 'Dalhousie University',
		subHeader: 'Bachelor of Computer Science',
		date: '2016 - 2021',
		bulletOne: '3.67 GPA.',
		bulletTwo: 'Certificate of Web & Mobile Development.',
		bulletThree: 'Certificate of Communications Technology & Cyber Security.',
		bulletFour: ''
	},
	{
		id: 'experience-two',
		type: 'work',
		header: 'Teaching Assistant',
		subHeader: 'Dalhousie University, for the class Intro to Server-Side Scripting',
		date: 'January — April 2019 & January — April 2020',
		bulletOne:
			"Instructed students during tutorials to have them complete assignment-related goals, improving student's in-class performance.",
		bulletTwo:
			'Guided students through troubling web-based questions, resulting in students learning and improving their web development fundamentals.',
		bulletThree:
			'Assisted in marking assignments for the professor to provide quick and essential feedback to the students.',
		bulletFour:
			'Assisted in marking assignments for the professor to provide quick and essential feedback to the students.'
	},
	{
		id: 'experience-three',
		type: 'work',
		header: 'Computer Science Team Leader',
		subHeader: 'SuperNOVA at Dalhousie University',
		date: 'May — August 2018 & January — April 2020',
		bulletOne:
			'Developed and implemented multiple STEM lectures revolving around technology and computer science to present to youth in Atlantic provinces.',
		bulletTwo:
			'Managed a 5-member computer scientist team to keep track of resources being used to ensure the team did not exceed a 15 hundred dollar budget during a two-month summer camp.',
		bulletThree: 'Developed strong social and communication skills when teaching to over 800+ youth.',
		bulletFour: "Monitored youth during summer camp activities to guarantee all participant's safety."
	},
	{
		id: 'experience-four',
		type: 'work',
		header: 'Tree Cutter',
		subHeader: 'Novon Forestry Inc.',
		date: '2016 — 2020 (Seasonal)',
		bulletOne: 'Operated and maintained company brush saws and vehicles.',
		bulletTwo: 'Worked independently in wilderness environments to complete contractor jobs.',
		bulletThree: 'Ensured safety when handling a brush saw by watching workplace surroundings.',
		bulletFour: 'Learned essential first aid and CPR skills to use in case of emergencies.'
	},
	{
		id: 'experience-five',
		type: 'school',
		header: 'Online Certificates & Badges',
		subHeader: 'Awarded by Code with Mosh & AWS Educate',
		date: '',
		bulletOne: 'Certificate of React Native Fundamentals.',
		bulletTwo: 'Certificate of React Native Advanced Concepts.',
		bulletThree: 'AWS Cloud Computing 101 Badge.',
		bulletFour: ''
	}
];
class Experience extends Component {
	state = {
		activePosition: 0
	};

	handleClick(item) {
		this.setState({ activePosition: item.index });
	}

	render() {
		return (
			<section id="Experience" className="experience-container">
				<div className="experience-header">
					<h1>Experience</h1>
				</div>
				<div className="content-wrapper">
					<div className="button-wrapper">
						{buttonList.map(function(item, index) {
							const className =
								this.state.activePosition === index
									? 'experience-buttons active-experience'
									: 'experience-buttons';
							return (
								<div key={item} className={className} onClick={() => this.handleClick({ index })}>
									<strong>{item}</strong>
								</div>
							);
						}, this)}
					</div>

					<div className="experience-content">
						{experiences.map(function(experience, index) {
							return (
								<React.Fragment key={experience.id}>
									{index === this.state.activePosition && (
										<div className="experience-information">
											<div className="information-top">
												<div className="experience-information-header">
													<h1>{experience.header}</h1>
													{experience.subHeader !== '' && (
														<h2 className={experience.type}>{experience.subHeader}</h2>
													)}
													{experience.date !== '' && <h3>{experience.date}</h3>}
												</div>
											</div>
											<div className="information-bottom">
												<ul>
													{experience.bulletOne !== '' && <li>{experience.bulletOne}</li>}
													{experience.bulletTwo !== '' && <li>{experience.bulletTwo}</li>}
													{experience.bulletThree !== '' && <li>{experience.bulletThree}</li>}
													{experience.bulletFour !== '' && <li>{experience.bulletFour}</li>}
												</ul>
											</div>
										</div>
									)}
								</React.Fragment>
							);
						}, this)}
					</div>
				</div>
			</section>
		);
	}
}

export default Experience;
