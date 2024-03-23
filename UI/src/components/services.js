import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Map from '../assets/images/Map.jpg';


const coordinatesData = [
  { id: 1382, latitude: 19.0983353, longitude: 72.9057331 },
  { id: 117, latitude: 19.095561433333334, longitude: 72.90257153333333 },
  { id: 824, latitude: 19.0848189, longitude: 72.8594694 },
  { id: 1317, latitude: 19.0894375, longitude: 72.8986824 },
  { id: 338, latitude: 19.1011684, longitude: 72.8562889 },
  { id: 1261, latitude: 19.1391857, longitude: 72.8667238 },
  { id: 1390, latitude: 19.0905609, longitude: 72.9025301 },
  { id: 846, latitude: 19.132869025, longitude: 72.858133125 },
  { id: 1405, latitude: 19.1367532, longitude: 72.8579386 },
  { id: 86, latitude: 19.087742, longitude: 72.88955179615385 }
];


const servicesData = [
  {
    id: 1,
    icon: 'fas fa-coffee',
    title: 'Coffee shops',
    description: 'Mumbai boasts a diverse coffee culture, attracting students, professionals, and tourists seeking a cozy ambiance and quality brews, with over 500 coffee shops catering to their preferences.'
  },
  {
    id: 2,
    icon: 'fas fa-mug-hot',
    title: 'Tea Shops',
    description: " Mumbai's tea enthusiasts, comprising locals, commuters, and tourists, frequent the city's numerous tea shops, enjoying a variety of traditional and innovative tea blends, with an estimated customer base of over 1 million."
  },
  {
    id: 3,
    icon: 'fas fa-utensils',
    title: 'Restaurants',
    description: "Mumbai's vibrant culinary scene draws food lovers from all walks of life, including families, couples, and groups, with over 15,000 restaurants offering a wide range of cuisines and dining experiences to cater to their diverse tastes and preferences."
  }
]

function AppServices() {
  const [file, setFile] = useState(null);
  const [showPredictButton, setShowPredictButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setShowPredictButton(true);
  }

  const handlePredictClick = () => {
    // Simulate loading by setting showImage to false
    setShowImage(false);

    // Wait for 5 seconds before showing the image
    setTimeout(() => {
      setShowImage(true);
    }, 5000);
  }


  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>What type of business do you own?</h2>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
          <br></br>
          <br></br>
          <br></br>
      <Container fluid>
        <div className="title-holder">
          <h2>Enter details of existing outlets</h2>
          <div className="subtitle">Upload excel file containing coordinates</div>
        </div>
        <div className="file-upload">

          <div className="text-center">
          <input type="file" onChange={(e)=>handleFileChange(e)} style={{ marginLeft: '90px' }} />
          </div>
          
          <br /><br /><br />
          {showPredictButton && ( // Conditionally render Predict button
          <div className="text-center"  >
            <button className="btn btn-primary"  onClick={handlePredictClick}>Predict Location</button>
          </div> )}

          {showImage && (
          <div className="text-center mt-3">
            <img src={Map} alt="Predicted Image" style={{ maxWidth: '100%', maxHeight: '1000px' }} />
            <br />
      <Container fluid>
        <div className="title-holder">
          <br /><br />
          <h2>List of Coordinates</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {coordinatesData.map(coord => (
              <tr key={coord.id}>
                <td>{coord.id}</td>
                <td>{coord.latitude}</td>
                <td>{coord.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <br /><br />
      <h2>Nearby shops available for rent on 99acres.com </h2>
      <div className="subtitle">In progress</div>
          </div>
        )}
        </div>
      </Container>
      
    </section>

    
  );
}

export default AppServices;


