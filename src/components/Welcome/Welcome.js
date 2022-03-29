import './welcome.css';
import leftImg from "../../assets/cover/cover-image.png";

function Welcome() {

  return(
    <div className = 'container'>  
      <hr className = 'line'></hr>
      <div className = 'left-conatainer'>
        <div className = 'left-Img'>
          <img src={leftImg} className ='img-1' />

        </div>
      </div>
      <div className = 'right-container'>
        <div className = 'beige-inner'>
          <h1>Inside Out Painting</h1>
          <p>WE ARE KNOWN FOR OUR QUALITY WORK AND COMPETITIVE PRICING.</p>
        </div>
      </div>
    </div>

  )
}

export default Welcome;