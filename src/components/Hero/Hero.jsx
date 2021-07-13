import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { StaticImage, getImage } from 'gatsby-plugin-image';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (
    <section id="hero" className="jumbotron" style={{ display: "grid"}}>
      <StaticImage style={{ gridArea: "1/1"}} alt="logo image" src="../../images/bg-image.jpg" layout="fullWidth"/>
      <Container style={{ gridArea: "1/1" }}>
        <Container>
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="hero-logo__image">
              <StaticImage alt="logo image" src="../../images/logo.png" width={450}/>
            </div>
          </Fade>
        </Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Welcome to the other side of '}{' '}
            <span className="text-color-main">{name || 'CALL Learning'}!</span>
            <br />
            {subtitle || "Expertise technique LMS Open Source."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'A propos'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
