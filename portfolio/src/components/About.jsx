import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

import girl from "../assets/girl.png"
import { useState } from 'react';
const About = () => {
    const [isVisible, setIsVisible] = useState(true);

    const fadeInOut = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: isVisible ? 0 : 1 },
        reset: true, // Reset the animation when visibility changes
        onRest: () => setIsVisible(!isVisible), // Toggle visibility when the animation is complete
    });
    return (
        <div className="w-auto bg-black p-3">
            <Container className="my-5 bg-black ">
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col md={6}>
                        <animated.h2 className='text-white' style={fadeInOut}>
                            Hello, I am Prerna Dave. I am a Full stack developer
                        </animated.h2>

                        <p className='text-secondary'>
                            Versatile full-stack web developer skilled in frontend and backend development, creating seamless, user-centric applications with precision.
                        </p>

                        <button className='btn btn-success'><i className="fas fa-download"></i> Resume</button>
                    </Col>
                    <Col md={6} className='text-center'>
                        <img className='w-50 p-3' src={girl} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
