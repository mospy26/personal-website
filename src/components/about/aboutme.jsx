import React from 'react';

var aboutMeStyle = {
	fontSize: 34,
	textTransform: "capitalize"
}

var backgroundStyle = {
	backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/about-1.jpg)"
}

var style1 = {
    transform: "translateZ(0px) translateY(0%)"
}

class AboutMe extends React.Component {
	render() {
		return (
			<>
				<section class="ftco-about ftco-counter img ftco-section" id="about-section">
					<div class="container">
						<div class="row d-flex">
							<div class="col-md-6 col-lg-5 d-flex">
								<div class="img-about img d-flex align-items-stretch">
									<div class="overlay"></div>
									<div class="img d-flex align-self-stretch align-items-center" style={backgroundStyle}>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-7 pl-lg-5 py-5">
								<div class="row justify-content-start pb-3">
									<div class=" align-items-center col-md-12 ftco-animate fadeInUp ftco-animated heading-section" data-scrollax=" properties: { translateY: '70%' }" style={ style1 }>
										<h2 class="mb-4" style={ aboutMeStyle }>About Me</h2>
										<p>As an ambitious software professional, I am seeking opportunities in cyber security, artificial intelligence and database systems that could allow me to deploy my skills to the benefit of my employer organization and offer an environment of professional growth.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default AboutMe;