import "./welcome.css";

const Welcome = () => {
  // function to split the page into two sections with a image on one side and text and design on the other side
  return (
    <div className="welcome-container">
      <div className="row">
        <div className = 'col left-image'>
          <img 
            // placeholder image
            className="img"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="welcome"
          />
        </div>
        <div className= 'col right-container'>
          <div className = 'info'>
            <h1 className= 'title text'>Inside Out Painting</h1>
            <p className= 'description text'>WE ARE KNOWN FOR OUR QUALITY WORK AND COMPETITIVE PRICING.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Welcome;