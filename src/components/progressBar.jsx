import React, { Component } from 'react';
import './styles/progressBar.css';

class ProgressBar extends Component {
	state = {};
	componentDidMount() {
		window.onscroll = function() {
			myFunction();
		};

		function myFunction() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = winScroll / height * 100;
			document.getElementById('myBar').style.height = scrolled + '%';
		}
	}
	render() {
		return (
			<div className="progress">
				<div class="progress-container">
					<div class="progress-bar" id="myBar" />
				</div>
			</div>
		);
	}
}

export default ProgressBar;
