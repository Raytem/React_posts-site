import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    if (isLoading || isComLoading) {
        return (
            <Loader/>
        )
    }

    if (error || comError) {
        return (
            <h2 style={{textAlign: 'center', color: 'rgb(222, 222, 222)'}}>Error ({error})</h2>
        )
    }

    return ( 
        <div className="container" style={{marginTop: '30px'}}>
            <h2 style={{textDecoration: 'underline'}}>Post:</h2>
            <br/>
            <h3>{post.id}. {post.title}</h3>
            <br/>
            <p>{post.body}</p>
            <br/>
            <br/>
            <h2 style={{textDecoration: 'underline'}}>Comments:</h2>

            {comments.map(comm => 
                <div key={comm.id}>
                    <br/>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}

        </div>
    );
}

export default PostIdPage;