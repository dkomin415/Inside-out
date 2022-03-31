import "./welcome.css";

const Welcome = () => {
  // function to split the page into two sections with a image on one side and text and design on the other side
  return (
    <div className="welcome-container">
      <div className="welcome-left">
      <div className = 'left-Img'>
        <img
        // placeholder image
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="welcome"
        />
      </div>
      </div>
      <div className="welcome-right">
        <div className = 'beige'>
          <h1 className= 'title text'>Inside Out Painting</h1>
          <p className= 'description text'>WE ARE KNOWN FOR OUR QUALITY WORK AND COMPETITIVE PRICING.</p>
        </div>
        <div className= 'orange'></div>
        </div>
      </div>
  );
};

export default Welcome;