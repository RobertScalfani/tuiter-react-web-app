import React from 'react';

const PostSummaryItem = (
    post = {
        _id: -1,
        topic: "",
        userName: "",
        title: "",
        time: "",
        image: "",
        userAvatar: "",
    }) => {

    return(
        <li className="list-group-item list-group-item-action">
            <a href="#" className="d-flex flex-row justify-content-between" style={{"textDecoration": "none"}}>
                <div>
                    <div className="sub-text" style={{"color": "lightgray"}}>
                        {post.post.userName} <i className="bi bi-patch-check"></i> - {post.post.time}
                    </div>
                    <span className="fw-bold" style={{"color": "black"}}>
                        {post.post.topic}
                    </span>
                    <div style={{"color": "black"}}>
                        {post.post.title ?
                            post.post.title
                            : post.post.tuit
                        }
                    </div>
                </div>
                {post.post.image ?
                    <img className="rounded-3 ps-1 align-self-center" style={{height: "70px", width: "70px"}} src={`/images/${post.post.image}`}/>
                    : <img className="rounded-3 ps-1 align-self-center" style={{height: "70px", width: "70px"}} src={`/images/${post.post.userAvatar}`}/>
                }
            </a>
        </li>
    );
}

export default PostSummaryItem;