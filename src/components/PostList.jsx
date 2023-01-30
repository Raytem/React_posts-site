import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import Loader from './UI/loader/Loader';

function PostList({error, remove, posts, title}) {
    if (error) {
        return (
            <h2 style={{textAlign: 'center', color: 'rgb(222, 222, 222)'}}>Error ({error})</h2>
        )
    }

    if (!posts.length) {
        return (
            <h2 style={{textAlign: 'center', color: 'rgb(222, 222, 222)'}}>Posts not found...</h2>
        )
    }

    return ( 
        <div className="PostList">
            <h2 style={{textAlign: 'center', color: 'rgb(222, 222, 222)'}}>{title}</h2>

            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}   
            </TransitionGroup>
        </div>
     );
}

export default PostList;