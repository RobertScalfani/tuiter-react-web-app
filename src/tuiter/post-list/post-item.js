import React from 'react';

const PostItem = (
    rawPost = {
        _id: 1,
        userAvatar: "",
        userName: "unk",
        handle: "unk",
        time: "",
        text: "unk",
        image: "",
        imgTitle: "unk",
        imgSubtitle: "",
        link: "",
        commentCount: "",
        retweetCount: "",
        heartCount: ""
    }) => {

    const post = rawPost.post;

    const renderSubtext = !(post.imgTitle === '' && post.imgSubtitle === '' && post.link === '');

    return(
        <li className="list-group-item d-flex">
            <img className="rounded-circle me-2" style={{width: "50px", height: "50px"}} src={process.env.PUBLIC_URL + '/images/' + post.userAvatar}/>
            <div>
                <div className="row">
                    <div>
                        <span className="fw-bold">
                            {post.userName} <i className="bi bi-patch-check"></i>
                        </span>
                        <span className="sub-text">
                            &nbsp;@{post.handle}
                        </span>
                        <span className="sub-text">
                            - {post.time}
                        </span>
                    </div>
                    <span className="mb-1">
                            {post.text}
                        </span>
                </div>
                <ul className="list-group">
                    <li className="list-group-item p-0 m-0">
                        <img className="img-fluid list-group-item p-0 m-0" src={process.env.PUBLIC_URL + '/images/' + post.image}/>
                    </li>
                    {renderSubtext
                    ? <li className="list-group-item">
                            <div className="fw-bold">
                                {post.imgTitle}
                            </div>
                            <div className="sub-text">
                                {post.imgSubtitle}
                            </div>
                            <div className="sub-text">
                                <i className="bi bi-link-45deg"></i> {post.link}
                            </div>
                    </li>
                        : <></>
                    }
                </ul>
                <div className="d-flex justify-content-between mt-2 ms-1 pe-5 mb-1" style={{color: "lightgray", fontSize: "13px"}}>
                    <i className="bi bi-chat">
                            <span className="ps-2">
                                {post.commentCount}
                            </span>
                    </i>
                    <i className="bi bi-shuffle">
                            <span className="ps-2">
                                {post.retweetCount}
                            </span>
                    </i>
                    <i className="bi bi-heart">
                            <span className="ps-2">
                                {post.heartCount}
                            </span>
                    </i>
                    <i className="bi bi-upload"></i>
                </div>
            </div>
        </li>
    );
}

export default PostItem;