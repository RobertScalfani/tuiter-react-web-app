import React from 'react';

const TuitStats = (
    stats = {
        commentCount: "",
        retweetCount: "",
        heartCount: "",
        tuitLiked: false,
    }) => {

    const [tuitLiked, setTuitLiked] = React.useState(stats.tuitLiked);

    return(
        <div className="d-flex justify-content-between mt-2 ms-1 pe-5 mb-1 text-muted">
            <i className="bi bi-chat">
                <span className="ps-2">
                    {stats.commentCount}
                </span>
            </i>
            <i className="bi bi-shuffle">
                <span className="ps-2">
                    {stats.retweetCount}
                </span>
            </i>
            {tuitLiked ?
                <i className="bi bi-heart-fill text-danger" onClick={() => setTuitLiked(!tuitLiked)}>
                <span className="ps-2 text-muted">
                    {stats.heartCount + 1}
                </span>
                </i>
                :
                <i className="bi bi-heart" onClick={() => setTuitLiked(!tuitLiked)}>
                <span className="ps-2">
                    {stats.heartCount}
                </span>
                </i>
            }
            <i className="bi bi-share"></i>
        </div>
    );
}

export default TuitStats;