import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.png';

export default function Header() {
  return (
    <header className="flexcol">
		<Link className="logo" to="/">
			<img src={logo} alt="Praveen" width={'100%'}/>
		</Link>
		<nav className="nav">
			<Link to="/home" className="active" rel="home"><i className="ti-face-smile"></i></Link>
			<Link to="/about" rel="about"><i className="ti-book"></i></Link>
			<Link to="/skills" rel="skills"><i className="ti-agenda"></i></Link>
			<Link className='hide' to="/works" rel="my work"><i className="ti-image"></i></Link>
			<Link to="/contact" rel="contact"><i className="ti-comments-smiley"></i></Link>
		</nav>
		<div className="social-links">
			<a target='_blank' href="https://www.instagram.com/creative.praveensharma/"><i className="ti-instagram"></i></a>
			<a target='_blank' href="https://web.facebook.com/creative.praveensharma"><i className="ti-facebook"></i></a>
			<a target='_blank' href="https://twitter.com/sunitapraveen"><i className="ti-twitter"></i></a>
			<a target='_blank' href="https://www.linkedin.com/in/creative-praveen"><i className="ti-linkedin"></i></a>
			<a target='_blank' href="https://api.whatsapp.com/send?phone=917737128689&text=Hi"><i className="ti-themify-favicon"></i></a>
		</div>
	</header>
  )
}
