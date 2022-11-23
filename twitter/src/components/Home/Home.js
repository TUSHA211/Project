import HomeOption from '../HomeOption/HomeOption';
import LoginOption from '../LoginOption/LoginOption';
import './Home.css';
import Feed from '../Feed/Feed';


function Home(){
    return(
        <div className="HomeContainer">
            <div className="LeftContainer"><HomeOption/></div>
            <div className="CenterContainer"><Feed/></div>
            <div className="RightContainer"><LoginOption/></div>
        </div>
    )
}
export default Home;