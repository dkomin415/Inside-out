import "./welcome.css";

const Welcome = () => {
  // function to split the page into two sections with a image on one side and text and design on the other side
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <img
        // placeholder image
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="welcome"
        />
      </div>
      <div className="welcome-right">
        <h1>Welcome to Inside-Out</h1>
        <p>
          Inside-Out is a full service design studio based in the heart of
          London. We are a team of creative and experienced designers and
          developers who are passionate about creating beautiful and functional
          websites and applications.
        </p>
        <p>
          We are a team of creative and experienced designers and developers who
          are passionate about creating beautiful and functional websites and
          applications.
        </p>
        </div>
    </div>
  );
};

export default Welcome;