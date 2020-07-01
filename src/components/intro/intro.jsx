import React from 'react';
// import background from process.env.PUBLIC_URL + "images/bg_1.jpg";

var background = process.env.PUBLIC_URL + "/images/me.png"
var backgroundimage = {
    backgroundImage: "url(" + background + ")"
};

var style1 = {
    transform: "translateZ(0px) translateY(0%)"
}

class Intro extends React.Component {
    
    render() {
        return (
            <>
            <section id="home-section" class="hero">
            <div class="home-slider owl-carousel owl-loaded owl-drag">
                    <div class="slider-item ">
                        <div class="overlay"></div>
                        <div class="container">
                        <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                            <div class="one-third order-md-last img" style={ backgroundimage }>
                                <div class="overlay"></div>
                            </div>
                            <div class="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={ style1 }>
                                <div class="text">
                                    <span class="subheading">Hello</span>
                                    <h1 class="mb-4 mt-3">I'm <span>Mustafa Fulwala</span></h1>
                                    <h2 class="mb-4">A Final year Software Engineering Student</h2>
                                </div>
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

export default Intro;