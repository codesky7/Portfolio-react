import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./fiverr-logo.png"
								alt="Fiverr"
								className="work-image"
							/>
							<div className="work-title">Fiverr</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">Mar 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./enlogo.ico"
								alt="Enlightened Solar"
								className="work-image"
							/>
							<div className="work-title">Enlightened Solar</div>
							<div className="work-subtitle">
							IT Manager
							</div>
							<div className="work-duration">Jull 2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
