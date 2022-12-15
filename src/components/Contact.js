import React from 'react'
import './style/contact.css'

export default function Contact() {
  return (
    
		<div className="home skills">
			<code>&lt;h1></code><br/>
			<h1>Contact <span>me</span></h1>
			<code className="htag">&lt;/h1></code>
			<form className="contact-form">
				<input type="text" className="col2"/>
				<input type="text" className="col2"/>
				<input type="text"  className="col1"/>
				<textarea  className="col1"></textarea>
				<button className="contact-link">Send Me</button>
			</form>
		</div>
  )
}
