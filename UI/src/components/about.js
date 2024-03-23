import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import coffeee from '../assets/images/coffeee.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About </h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={coffeee} />
          </Col>
          <Col sm={6}>
            <br />
            <p>In the bustling metropolis of Mumbai, selecting the perfect spot for a business outlet is more than just a business decision—it's a strategic move that can define success. We embarked on a journey to redefine how owners approach location selection. Our mission? To unearth the hidden gems and prime locales that promise foot traffic, customer engagement, and ultimately, profitability, for any outlet, be it your first outlet or your next expansion.</p>
            <br />
            <p>By diving deep into extensive datasets covering existing cafés, real estate trends, transportation networks, and demographic insights, we've crafted a methodology that empowers owners to make informed decisions backed by data.</p>
            {/* <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;