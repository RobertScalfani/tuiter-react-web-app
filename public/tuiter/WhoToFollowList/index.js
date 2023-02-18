import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
            <span class="list-group-item list-group-item-action fw-bold">Who to follow</span>
            ${who.map(user => {
                return(WhoToFollowListItem(user));
            }).join('')}
       </ul>
    `);
}

export default WhoToFollowList;