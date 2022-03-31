import './welcome.css';
import leftImg from "../assets/cover/cover-image.png";
const Welcome = () => {

  return(

    <div className = 'container'>  
      <hr className = 'line'></hr>
      <div className = 'left-conatainer'>
        <div className = 'left-Img'>
          <img className = 'img' src={leftImg}></img>
        </div>
      </div>
      <div className = 'right-container'>
        <div className = 'beige'>
          <h1 className= 'title text'>Inside Out Painting</h1>
          <p className= 'description text'>WE ARE KNOWN FOR OUR QUALITY WORK AND COMPETITIVE PRICING.</p>
        </div>
        <div className= 'orange'></div>
      </div>
    </div>

  )
}

export default Welcome