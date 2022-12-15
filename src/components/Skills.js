import React from 'react'
import { Link } from 'react-router-dom'
import './style/skills.css'

export default function Skills() {
  return (
		<div className="home skills">
			<code>&lt;h1&gt;</code><br/>
			<h1>skills &<br/><span> &nbsp; experience</span></h1>
			<code className="htag">&lt;/h1&gt;</code>
			<p>The main area of my expertise is front end development (client side of the web).</p>
			<p>HTML, CSS, JS, building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.</p>
			<p>I have also full-stack developer experience with open source CMS like (Shopify, WordPress and other)</p>
			<p>Visit my <a href="www.linkedin.com/in/creative-praveen">LinkedIn </a>profile for more details or just <Link to="/contact">contact </Link>me.</p>
		</div>
  )
}
