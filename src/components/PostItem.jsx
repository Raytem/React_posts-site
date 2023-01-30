
import {React} from "react";
import MyButton from './UI/button/MyButton'
import "../styles/PostItem.css";
import { useNavigate } from "react-router-dom";

function Post({remove, number, post}) {
    const navigate = useNavigate();

    return ( 
        <div className="Post">
            <div className="post__content">
                <div className="post__head head-post">
                    <h3 className="post__title">{post.id}. {post.title}</h3>
                    <div className="post__btns">
                        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
                        <MyButton onClick={() => remove(post)} style={{background: 'rgb(255, 83, 83)'}} className="post__remove-button">Remove</MyButton>
                    </div>
                </div>
                <div className="post__text text-post">{post.body}</div>
            </div>
        </div>
    );
}

export default Post ;