import React from 'react';
import TuitStats from "./tuit-stats";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import {current} from "@reduxjs/toolkit";

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
        liked: false,
        isUserPost: false,
        currentUser: {
            firstName: "",
            lastName: ""
        }
    }
    ) => {

    const tuit = rawTuit.post;

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const profile = useSelector(state => state.profile)

    return(
        <li className="list-group-item">
            <div className=" d-flex">
                <img className="rounded-circle me-2" style={{width: "50px", height: "50px"}} src={process.env.PUBLIC_URL + '/images/' + tuit.userAvatar}/>
                <div className='w-100'>
                    <div>
                        <div>
                            <span className="fw-bold">
                                {tuit.isUserPost ?
                                    profile.firstName + " " + profile.lastName
                                    : tuit.userName
                                }
                                &nbsp;<i className="bi bi-patch-check"></i>
                            </span>
                            <span className="text-muted">
                                &nbsp;@{tuit.handle}
                            </span>
                            <span className="text-muted">
                                &nbsp;- {tuit.time}
                            </span>
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                        <p className="mb-1 word-break">
                            {tuit.tuit}
                        </p>
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