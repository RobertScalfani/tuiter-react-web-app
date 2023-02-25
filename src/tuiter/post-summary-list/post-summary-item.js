import React from 'react';

const PostSummaryItem = (
    post = {
        _id: 123,
        topic: "Space",
        userName: "SpaceX",
        title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        time: "2h",
        image: "tesla.png"
    }) => {
    return(
        <li className="list-group-item list-group-item-action">
            <a href="#" className="d-flex flex-row justify-content-between" style={{"textDecoration": "none"}}>
                <div>
                    <div className="sub-text" style={{"color": "lightgray"}}>
                        {post.post.topic} - {post.post.time}
                    </div>
                    <span className="fw-bold" style={{"color": "black"}}>
                        {post.post.userName} <i className="bi bi-patch-check"></i>
                    </span>
                    <div style={{"color": "black"}}>
                        {post.post.title}
                    </div>
                </div>
                <img className="rounded-3 ps-1 align-self-center" height={70} width={70} src={`/images/${post.post.image}`}/>
            </a>
        </li>
    );
}

export default PostSummaryItem;