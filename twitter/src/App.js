import React, { useState } from 'react';
import './index.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {initialData} from "./initialData";
import Post from './Post';

function App() {
  const [posts, setPosts] = useState(initialData);
  const [postsCount, setCount] = useState(2);

  const [tweet, setTweet] = useState("");

  const handleTweetChange = (e) => {
    const { value } = e.target;
    setTweet(value);
  }

  const handleSubmit = (e, tweet, postsCount) => {
      e.preventDefault();
      var newpost = posts;
      newpost.push({
          "id": postsCount,
          "name": "Nidhish Lakhinana",
          "username": "@miyuki",
          "time": "Now",
          "content": tweet,
          "likes": 0,
          "isLiked": false
      })
      setPosts(newpost);
      setCount(prev => prev+1);
      setTweet("");
  }
  const deletePost = (e) => {
    const id = e.target.getAttribute("name");
    var newpost = posts;
    newpost.filter(p => p.id !== id)
    setPosts(newpost);
  }
  const handleLike = (e) => {
    var newpost = posts;
    const id = e.target.getAttribute("name");
    console.log(id)
    newpost.forEach(p => {
        if(p.id === id){
            if (!p.isLiked){
                p.isLiked = true;
                p.likes += 1;
            } 
            else{
              p.isLiked = false;
              p.likes -= 1; 
            }
        }
    }) 
      
    setPosts(newpost);
  }

  return (
    <div className="feed" id="feed"> 
        <div className="feed_header"> 
            <h2>Home</h2>
        </div>
        <div className="tweetbox" >
            <form onSubmit={(e) => handleSubmit(e, tweet, postsCount)}>
                <div className="tweetbox_input">
                    <AccountCircleOutlinedIcon/>
                    <input type="text" placeholder="What's happening?" value={tweet} id="tweetContent" onChange={e => handleTweetChange(e)}></input>
                </div>
                <input type="submit" value="Tweet" className="tweetbox_tweetbutton"/>

                {/* <!-- <button className="tweetbox_tweetbutton">Tweet</button> --> */}
            </form>
        </div>
        {posts.map((p, key) => {
            return <Post post={p} key={key} keyName={key} deletePost={deletePost} handleLike={handleLike}/>
        })}
    </div>
  );
}

export default App;
