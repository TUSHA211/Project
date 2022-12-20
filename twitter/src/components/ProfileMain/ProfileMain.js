import "./ProfileMain.css";
import { useEffect, useState } from "react";
// import Tweet from './Tweet/Tweet';
import Tweet from "../Feed/Tweet/Tweet";
import Trending from "../Trending/Trending";



function ProfileMain() {
  const [trendings, setTrendings]=useState([]);
 const [tweets, setTweets] = useState([]);

 useEffect(() => {
    fetch("trendingData.json")
      .then((res) => res.json())
      .then((res) => {
        setTrendings(res);
      });
  }, []);
    useEffect(() => {
        fetch("tweet.json")
          .then((res) => res.json())
          .then((res) => {
            setTweets(res);
          });
      }, []);
  return (
    <div className="profile-main">
      <div className="cover">
        <a href="#">
          <img className="profile-img"
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"></img>
        </a>
      </div>
      <div className="follow-btn-container fw-6 float-end">
        <button className="follow-btn">Follow</button>
      </div>
      <div class="trending">
      {trendings.map((trend) => (
        <Trending data={trend} />
      ))}
      <hr />
      {tweets.map((tweet) => (
        <div>
          <Tweet data={tweet} />
          <hr />
        </div>
        ))}
        </div>
    </div>
  );
}

export default ProfileMain;