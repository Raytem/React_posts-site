import React, {useState} from 'react';
import MyButton from "../components/UI/button/MyButton.jsx";
import MyInput from "../components/UI/input/MyInput.jsx";

function PostForm({create}) {

    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {...post, id: Date.now()};
        create(newPost);
        setPost({title: '', body: ''});
    }

    return ( 
        <form>
            <MyInput 
                value={post.title} 
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Post name"
                style={{marginBottom: '10px'}}
            />

            <MyInput 
                value={post.body} 
                onChange={(e) => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Post text"
                style={{marginBottom: '10px'}}
            />

            <MyButton style={{margin: '0 auto'}} onClick={addNewPost}>Create post</MyButton>
        </form>
     );
}

export default PostForm;