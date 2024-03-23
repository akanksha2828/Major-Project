// import Carousel from 'react-bootstrap/Carousel';

// var heroData = [
//   {
//     id: 1,
//     image: require('../assets/images/coffe.jpg'),
//     title: 'Perfecting Growth',
//     description: 'Embark on a journey of growth with our innovative spatial analysis solutions. We specialize in unlocking strategic insights that guide your business expansion efforts. By harnessing the power of spatial data, we provide you with the roadmap to success, helping you navigate through challenges and seize new opportunities.',
//     link: 'https://www.google.com'
//   }
  
//   // {
//   //   id: 2,
//   //   image: require('../assets/images/img-hero2.jpg'),
//   //   title: 'Start Your Future Financial Plan',
//   //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
//   //   link: 'https://www.facebook.com'
//   // },
//   // {
//   //   id: 3,
//   //   image: require('../assets/images/img-hero3.jpg'),
//   //   title: 'Enjoy the Difference',
//   //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
//   //   link: 'https://www.twitter.com'
//   // }
// ]

// function AppHero() {
//   return (
//     <section id="home" className="hero-block">
//        <Carousel>
//           {
//             heroData.map(hero => {
//               return (
//                 <Carousel.Item key={hero.id}>
//                   <img
//                     className="d-block w-100"
//                     src={hero.image}
//                     alt={"slide " + hero.id}
//                   />
//                   <Carousel.Caption>
//                     <h2>{hero.title}</h2>
//                     <br />
//                     <p>{hero.description}</p>
//                     {/* <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a> */}
//                   </Carousel.Caption>             
//                 </Carousel.Item>
//               );
//             })
//           }
//       </Carousel>
//     </section>
//   );
// }

// export default AppHero;

import React from 'react';
import coffeImage from '../assets/images/coffe.jpg';

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
};

const heroTextStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#ffffff',
  textAlign: 'center',
  zIndex: 1,
  padding: '20px',
};

const btnStyle = {
  fontSize: '1rem',
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  textDecoration: 'none',
  transition: 'background-color 0.3s',
};

function AppHero() {
  return (
    <section id="home" className="hero-block" style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <div className="hero-content">
        <img className="bg-image" src={coffeImage} alt="Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)' }} />
        <div style={overlayStyle}></div>
        <div style={heroTextStyle}>
          <h2>Perfecting Growth</h2>
         <br />
          <i><p>Embark on a journey of growth with our innovative spatial analysis solutions. We specialize in unlocking strategic insights that guide your business expansion efforts. By harnessing the power of spatial data, we provide you with the roadmap to success, helping you navigate through challenges and seize new opportunities.</p></i>
          </div>
      </div>
    </section>
  );
}

export default AppHero;
