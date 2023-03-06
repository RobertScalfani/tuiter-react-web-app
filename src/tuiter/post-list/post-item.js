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
        heartCount: "",
        retweeter: "",
        subpost: "",
    }) => {

    const post = rawPost.post;

    const renderSubtext = !(post.imgTitle === '' && post.imgSubtitle === '' && post.link === '');
    const renderRetweet = post.retweeter !== "";
    const renderSubPost = post.subpost !== "";
    const renderImage = post.image !== "";

    return(
        <li className="list-group-item">
            {renderRetweet
                ? <div className="fw-bold ms-4" style={{color: "gray", fontSize: "13px"}}>
                    <i className="bi bi-shuffle"/> {post.retweeter} Retweeted
                </div>
                : <></>
            }
            <div className=" d-flex">
            <img className="rounded-circle me-2" style={{width: "50px", height: "50px"}} src={process.env.PUBLIC_URL + '/images/' + post.userAvatar}/>
            <div>
                <div className="row">
                    <div>
                        <span className="fw-bold">
                            {post.userName} <i className="bi bi-patch-check"></i>
                        </span>
                        <span style={{color: "lightgray"}}>
                            &nbsp;@{post.handle}
                        </span>
                        <span style={{color: "lightgray"}}>
                            &nbsp;- {post.time}
                        </span>
                    </div>
                    <span className="mb-1">
                            {post.text}
                        </span>
                </div>
                <ul className="list-group">
                    {renderImage
                        ? <li className="list-group-item p-0 m-0">
                            <img className="img-fluid list-group-item p-0 m-0" src={process.env.PUBLIC_URL + '/images/' + post.image}/>
                        </li>
                        : <></>
                    }

                    {renderSubtext
                    ? <li className="list-group-item">
                            <div className="fw-bold">
                                {post.imgTitle}
                            </div>
                            <div className="sub-text">
                                {post.imgSubtitle}
                            </div>
                            <div style={{color: "lightgray"}}>
                                <i className="bi bi-link-45deg"></i> {post.link}
                            </div>
                    </li>
                        : <></>
                    }
                    {renderSubPost
                        ? <li className="list-group-item">
                            <div>
                                <img className="img-fluid rounded-circle me-2" style={{width: "20px", height: "20px"}} src={process.env.PUBLIC_URL + '/images/' + post.subpost.userAvatar}/>
                                {post.subpost.userName}
                                &nbsp;<i className="bi bi-patch-check"></i>
                                <span style={{color: "lightgray"}}>
                                    &nbsp;@{post.subpost.userName} - {post.subpost.time}
                                </span>
                            </div>
                            <div>
                                {post.subpost.content}
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
                {renderRetweet
                ?   <div style={{color: "lightblue"}}>
                        Show this thread
                    </div>
                    : <></>
                }
            </div>
            </div>
        </li>
    );
}

export default PostItem;