import React from 'react';
import Button from './common/button';
import StyledText from './common/text';
import './styles/hero.css';

const Hero = () => {
	return (
		<section className="hero">
			<h1 className="hello-message stagger">Hello &#128075; , my name is</h1>
			<h2 className="name stagger">Jason Lalonde.</h2>
			<h3 className="what-i-do stagger">I am a new graduate programmer.</h3>
			<p className="bio stagger">
				I'm a{' '}
				<a
					href="https://www.google.com/maps/place/Nova+Scotia/@43.9927198,-67.360128,6z/data=!3m1!4b1!4m5!3m4!1s0x4b591298de18cf45:0x102581ef8cf0940!8m2!3d44.6819866!4d-63.744311"
					rel="noopener noreferrer"
					target="_blank"
				>
					<StyledText text="Nova Scotian" />
				</a>-based software engineer dedicated to life-long learning specializing in front-end web & mobile
				development. Currently, I'm job seeking a full-time position as a software engineer. I have a fast
				learning pace and a keen eye for detail for any new job experience!
			</p>
			<div className="stagger">
				<Button
					fontSize="20px"
					name="Get in Touch"
					href={'mailto:jason.lalonde@dal.ca'}
					target=""
					title="Get in Touch"
				/>
			</div>
		</section>
	);
};

export default Hero;
