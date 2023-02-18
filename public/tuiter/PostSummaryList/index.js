import PostSummaryItem from "./PostSummaryItem.js";
import exploreItem from "./posts.js"

const PostSummaryList = () => {
    return (`
        <div class="list-group suggested-posts">
            ${exploreItem.map(post => {
                return(PostSummaryItem(post));
            }).join('')}
       </div>
    `);
}

export default PostSummaryList;