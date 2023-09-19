import React, { useEffect, useState } from "react";
import  { useRef } from 'react';
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser'

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import Lottie from "lottie-react";
import animationdata from "../assets/animation_lmpxgktm.json"

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_2dlr4jn', 'template_5m6ylld', form.current, 'myNSyYJMe5ZkgCmzG')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		setIsSubmitted(true);

		
	};


const [name,setname]=useState("");
const [email,setemail]=useState("")
const [message,setmessage]=useState("")
const [isSubmitted, setIsSubmitted] = useState(false);


		
	

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							{/* <Logo width={46} /> */}
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						I appreciate your interest in reaching out to me. Your feedback, questions, and suggestions are always welcome. Should you have any particular inquiries or comments, please don't hesitate to contact me via email at the following address:
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							.I make it a priority to promptly address all messages, aiming to provide a response within 24 hours. However, during periods of high demand, there may be a slight delay. An alternative way to reach me is by using the contact form on my website. Simply fill in the required information, and I will endeavor to get back to you as swiftly as possible.
							
						</div>
					</div>

					<div className="fullform">
      <div className="lform">
        <Lottie animationData={animationdata}/>
      </div>
      <div className="form">
	  {isSubmitted ? (
        <div className="success-message">Form submitted successfully!</div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" ame="user_name" onChange={(e)=>setname(e.target.value)}  />
          <input type="email" placeholder="Email" name="user_email" onChange={(e)=>setemail(e.target.value)} />
          <textarea
            name=""
            id=""
            cols="70"
            rows="10"
            placeholder="Message" name="message"
			onChange={(e)=>setmessage(e.target.value)}
          ></textarea>
		  <button type="submit" value="Send" >Submit</button>
        </form>
		)}

      </div>
    </div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
