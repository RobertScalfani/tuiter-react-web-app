import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {posts.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post}/>
            )}
        </ul>
    );
};
export default PostSummaryList;