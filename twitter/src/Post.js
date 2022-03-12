import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';  
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';  //filled heart
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dp from './images/dp2.png'

const post = (props) => {
    var content = "<p>" + props.post.content + "</p>"
    return ( 
        <div className="post">
        <img alt="dp" className="post_avatar" src={dp}/>
        <div className="post_body">
          <div className="post_header">
              <div className="post_header_text">
                  <h3>{props.post.name}
                      <span className="post_header_special"> {props.post.username} • {props.post.time}</span>
                  </h3>
              </div>
              <div className="post_header_description" dangerouslySetInnerHTML={{__html: content}}>
            </div>
        </div>
            <div className="post_footer">
                <button >
                <Stack direction="row" alignItems="center" gap={1}>
                  <EditOutlinedIcon/>
                  <Typography color="#2a2a2abd" variant="body2">Edit</Typography>
                </Stack>
                </button>

                <button name={props.keyName} onClick={props.deletePost}>
                <DeleteOutlineOutlinedIcon/>
                </button>

                <button name={props.keyName} onClick={props.handleLike}>
                <Stack direction="row" alignItems="center" gap={1}>
                  { props.post.isLiked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                  <Typography color="#2a2a2abd" variant="body2">{props.post.likes}</Typography>
                </Stack>
                </button>   
            </div> 
        </div>
    </div>
    )
}

export default post; 