import './Profile.css';
import LoginOption from '../components/LoginOption/LoginOption';
import HomeOption from '../components/HomeOption/HomeOption';
import ProfileMain from '../components/ProfileMain/ProfileMain';


function Profile(){
    return(
        <div className="HomeContainer">
            <div className="LeftContainer"><HomeOption/></div>
            <div className="CenterContainer"><ProfileMain/></div>
            <div className="RightContainer"><LoginOption/></div>
        </div>
    )
}
export default Profile;