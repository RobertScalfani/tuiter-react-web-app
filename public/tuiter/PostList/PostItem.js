function PostItem(post) {
    return(`
        <div class="list-group-item">
            <div class="d-flex">
                <img class="img-avatar me-2" src=${post['userAvatar']}>
                <div>
                    <div class="row">
                        <div>
                            <span class="fw-bold">
                                ${post['userName']} <i class="fas fa-check-circle"></i>
                            </span>
                            <span class="sub-text">
                                @${post['handle']}
                            </span>
                            <span class="sub-text">
                                - ${post['time']}
                            </span>
                        </div>
                        <span>
                            ${post['text']}
                        </span>
                    </div>
                    <ul class="list-group">
                        <img class="img-fluid mt-2 list-group-item p-0" src=${post['image']}>
                        ${post['imgTitle'] == '' && post['imgSubtitle'] == '' && post['link'] == '' ? '' :
                            `<div class="list-group-item">
                                <div class="fw-bold">
                                    ${post['imgTitle']}
                                </div>
                                <div class="sub-text">
                                    ${post['imgSubtitle']}
                                </div>
                                <div class="sub-text">
                                    <i class="fas fa-link"></i> ${post['link']}
                                </div>
                            </div>`
                        }
                    </ul>
                    <div class="d-flex justify-content-between mt-2 ms-1 pe-5 mb-1">
                        <i class="fas fa-comment sub-text">
                            <span class="ps-1">
                                ${post['commentCount']}
                            </span>
                        </i>
                        <i class="fas fa-retweet sub-text">
                            <span class="ps-1">
                                ${post['retweetCount']}
                            </span>
                        </i>
                        <i class="far fa-heart sub-text">
                            <span class="ps-1">
                                ${post['heartCount']}
                            </span>
                        </i>
                        <i class="fas fa-share-square sub-text">
                        </i>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;