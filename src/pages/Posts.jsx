import React, {useEffect, useState} from "react";
import PostFilter from "../components/PostFilter.jsx";
import PostForm from "../components/PostForm.jsx";
import PostList from "../components/PostList.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import MyModal from "../components/UI/myModal/MyModal.jsx";
import { usePosts } from "../hooks/usePost.js";
import PostService from "../API/PostService.js";
import '../styles/Posts.css'
import { useFetching } from "../hooks/useFetching.js";
import { getPagesCount } from "../utils/pages.js";
import Pagination from "../components/UI/pagination/Pagination.jsx";
import Loader from "../components/UI/loader/Loader.jsx";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAdnSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const resopnse = await PostService.getAll(limit, page);
        setPosts(resopnse.data);
        const totalCount = resopnse.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ));
    }

    const changePage = (pageNum) => {
        setPage(pageNum);
        fetchPosts(limit, pageNum);
    }

    return (
        <div className="Posts">
            <div className="container">
                <MyButton onClick={() => setModal(true)} style={{margin: '0 auto', marginBottom: '20px'}}>Create new post</MyButton>
                <hr style={{marginBottom: '20px'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                <hr style={{marginBottom: '20px'}}/>
                
                <PostList error={postError} remove={removePost} title={'All posts'} posts={sortedAdnSearchedPosts}/>
                {isPostsLoading && <Loader/>}
                <Pagination totalPages={totalPages} page={page} changePage={changePage}/>

                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
            </div>
        </div>
    );
}

export default Posts;
