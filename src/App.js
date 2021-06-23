import './App.css';
import React, { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('./components/navbar'));
const Hero = lazy(() => import('./components/hero'));
const Socials = lazy(() => import('./components/socials'));
const About = lazy(() => import('./components/about'));
const Experience = lazy(() => import('./components/experience'));
const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'));

class App extends React.Component {
	renderLoader = () => <div className="loader" />;

	render() {
		return (
			<Suspense fallback={this.renderLoader()}>
				<div className="App">
					<Navbar />
					<main className="main-container">
						<Hero />
						<About />
						<Experience />
						<Projects />
						<Contact />
					</main>
					<Footer />
					<Socials />
				</div>
			</Suspense>
		);
	}
}

export default App;
