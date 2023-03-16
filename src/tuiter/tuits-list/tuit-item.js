import React from 'react';
import TuitStats from "./tuit-stats";

const PostItem = (
    rawTuit = {
        _id: 1,
        userAvatar: "",
        userName: "unk",
        handle: "unk",
        time: "",
        tuit: "unk",
        replies: "",
        retuits: "",
        likes: "",
        liked: false
    }) => {

    const tuit = rawTuit.post;

    return(
        <li className="list-group-item">
            <div className=" d-flex">
                <img className="rounded-circle me-2" style={{width: "50px", height: "50px"}} src={process.env.PUBLIC_URL + '/images/' + tuit.userAvatar}/>
                <div>
                    <div className="row">
                        <div>
                        <span className="fw-bold">
                            {tuit.userName} <i className="bi bi-patch-check"></i>
                        </span>
                            <span className="text-muted">
                            &nbsp;@{tuit.handle}
                        </span>
                            <span className="text-muted">
                            &nbsp;- {tuit.time}
                        </span>
                        </div>
                        <span className="mb-1">
                            {tuit.tuit}
                        </span>
                    </div>
                    <TuitStats
                        commentCount={tuit.replies}
                        retweetCount={tuit.retuits}
                        heartCount={tuit.likes}
                        tuitLiked={tuit.liked}
                    />
                </div>
            </div>
        </li>
    );
}

export default PostItem;