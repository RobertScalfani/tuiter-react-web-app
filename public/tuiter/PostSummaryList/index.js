import PostSummaryItem from "./PostSummaryItem.js";
import exploreItem from "./posts.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group suggested-posts">
            ${exploreItem.map(post => {
                return(PostSummaryItem(post));
            }).join('')}
       </ul>
    `);
}

export default PostSummaryList;