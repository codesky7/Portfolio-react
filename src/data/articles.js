import React from "react";

function article_1() {
	return {
		date: "8 May 2023",
		title: "Website development: What you need to know	",
		description:
			"Website development is the process of creating, building, and maintaining a website. It encompasses everything from the initial planning and design to the coding and implementation to the ongoing maintenance and updates.",
		keywords: [
			"Web development",
			"website design",
			"coders xplorer",
			"Akash Ahmed",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<img
						src="https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg"
						
					/>

<p>Website development is the process of creating, building and maintaining websites. It covers everything from initial planning and design to coding and implementation, ongoing maintenance and upgrades.

Websites can be simple or complex depending on their purpose. A basic website may have just a few pages and some static content, while a more complex website may have hundreds or even thousands of pages, dynamic content, and interactive features.</p>

<p>Regardless of the size or complexity of the website, the website development process generally follows similar steps:</p>

<li>Planning: The first step is to plan the website. This includes determining the website's purpose, target audience and desired features.</li>
<li>Design: Once the website is planned, the design process can begin. This involves creating the visual appearance of the website, including layout, typography and color scheme.</li>
<li>Development: Once the design is complete the website can be developed. This involves writing the code that will make the website work.</li>
<li>Testing: Once the website is built, it needs to be tested to make sure it works correctly on all browsers and devices.</li>
<li>Deployment: Once the website is tested and ready to go, it can be deployed on a web server.
</li>
<li>Maintenance: Once the website is established, it needs to be maintained and updated periodically. This includes fixing bugs, adding new content and updating security features.</li>
<h3>Various types of website development

</h3>
<p>Website development can be divided into two main categories: front-end development and back-end development.

Front-end development is the part of website development that is responsible for the user interface (UI) and user experience (UX) of a website. This includes the website's layout, typography, and color scheme, as well as interactive elements such as buttons, menus, and forms.

Back-end development is the part of website development that is responsible for the server-side logic of a website. This includes things like databases, programming languages, and web servers.</p>

<h3>Skills required to become a web developer

</h3>
<p>Web developers must have a variety of skills, including:

</p>
<li>Coding skills: Web developers must be able to code in at least one programming language such as HTML, CSS, and JavaScript.
</li>
<li>Design Skills: Web developers should have a good understanding of design principles and be able to create visually appealing and easy-to-use websites.
</li>
<li>Problem-Solving Skills: Web developers must be able to troubleshoot and find solutions to technical challenges.
</li>
<li>Communication Skills: Web developers must be able to communicate effectively with technical and non-technical audiences.
</li>

How to start website development <h4>

</h4>
<p>If you are interested in getting started with website development, there are a few things you can do:

</p>
<li>Learn the basics of HTML, CSS and JavaScript - these are three key web technologies and any web developer should have a good understanding of them.
</li>
<li>Take a web development course: There are many web development courses available online and offline. These courses can teach you the skills you need to build a website from scratch.
</li>
<li>Build a portfolio – Once you've learned the basics of web development, start building your own website. This will help you develop your skills and build a portfolio of your work.
</li>
<li>Contribute to open source projects: Another great way to learn and develop your skills is to contribute to open source web development projects. This will give you the opportunity to work on real-world projects and collaborate with other developers
</li>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 September 2023",
		title: "Why you need a website in 2023",
		description:
			"In today's digital world, having a website is essential for any business or individual who wants to be successful online. A website is your digital storefront, your online home base, and your platform for connecting with customers and partners.",
		style: ``,
		keywords: [
			"Why you need a website in 2023	",
			"Akash",
			"Coders xplorer",
			"website development",
			"website desgin",
			"codecamp",
		],
		body: (
			<React.Fragment>
				<h1></h1>
				<img src="https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg" alt="" srcset="" />
				<p>In today's digital world, having a website is essential for any business or individual who wants to succeed online. Website is your digital storefront, your online base and your platform to connect with customers and partners.</p>
<h2>Here are some of the many reasons why you need a website in 2023:

</h2>
<li>Establish credibility and trust. A well-designed and informative website shows potential clients and partners that you are a legitimate company or person. It gives them a place to learn more about your product or service and contact you with questions or queries.
</li>
<li>To reach a wider audience. With a website, you can reach people all over the world 24/7. This gives you a huge advantage over businesses that don't have an online presence
</li>
<li>To generate leads and sales. A website can be a powerful tool for generating leads and sales. You may use your website to collect contact information from potential customers and to promote your products or services through special offers, discounts and other incentives.
</li>
<li>To build relationships with clients and partners. A website can be a great way to build relationships with clients and partners. You can use your website to share news and updates about your business, publish blog posts and articles, and interact with your audience on social media.
</li>
<li>To improve customer service. A website can help improve your customer service by providing customers with a self-service portal where they can access information about your product or service, track their order, and contact support.
</li>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
