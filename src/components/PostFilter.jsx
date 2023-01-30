import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';
import '../styles/PostFilter.css';

function PostFilter({filter, setFilter}) {
    return ( 
        <div className="postFilterBlock" >
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />

            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By text'},
                ]} 
            />
        </div>
    );
}

export default PostFilter;