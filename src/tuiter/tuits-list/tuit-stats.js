import React from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    tuit= {}) => {

    const dispatch = useDispatch();

    tuit = tuit.tuit;

    return(
        <div className="d-flex justify-content-between mt-2 ms-1 pe-5 mb-1 text-muted">
            <i className="bi bi-chat">
                <span className="ps-2">
                    {tuit.replies}
                </span>
            </i>
            <i className="bi bi-shuffle">
                <span className="ps-2">
                    {tuit.retuits}
                </span>
            </i>
            <div>
                <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))}>
                    <span className="ps-2">
                        {tuit.likes}
                    </span>
                </i>
            </div>
            <div>
                <i className="bi bi-hand-thumbs-down-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))}>
                    <span className="ps-2">
                        {tuit.dislikes}
                    </span>
                </i>
            </div>
            <i className="bi bi-share"></i>
        </div>
    );
}

export default TuitStats;