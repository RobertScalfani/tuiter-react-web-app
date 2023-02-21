import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
       <ul className="list-group">
           <li className="list-group-item">
               <h3>
                   Who to follow
               </h3>
           </li>
            {who.map(user =>
                <WhoToFollowListItem
                    key={user._id}
                    who={user}
                />
            )}
       </ul>
    );
}

export default WhoToFollowList;