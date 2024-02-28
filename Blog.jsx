/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

// import React from 'react';
// import './Blog.css'

// function Blog () {
//   return (
    
//     <div className='hero'>
//   < img src={require('../Assets/Navbar/image 12.jpg')} alt=" the first image" />
//   <div className="hero-message">
//     <p>You are on Onecare.in. Explore more facilities and Doctors prescriptions with Experts.<a>Click here to go Onecare.in</a> </p>
    
//   </div>
// </div>


//   );
// }

// export default Blog;



import React from 'react';
import './Blog.css'; // Import your CSS file
import { FaHeartbeat } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage:'url(https://t3.ftcdn.net/jpg/05/81/08/28/240_F_581082823_z7aIYzaipZFr2r0pfXHoqTuazzpH8I9W.jpg)' , // Default background image
    };
  }

  // Function to change background image dynamically
  
  

  render() {
    return (
      <div className="background-container" style={{ backgroundImage: this.state.backgroundImage }}>
        <div className="paragraph">
        <p>
          The simple acts of care that happen,
    day in and day out, deserve to be celebrated.
            Share the care in your life With us because
            Health is not valued till sickness comes.....<FaHeartbeat />
        </p>
        </div>
      </div>
    );
  }
}

export default App;
