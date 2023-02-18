function PostSummaryItem(post) {
    return(`
        <a href="#" class="list-group-item list-group-item-action d-flex flex-row justify-content-between">
            <div>
                <div class="sub-text">
                    ${post['topic']}
                </div>
                <div>
                    <span class="fw-bold">
                        ${post['userName']} <i class="fas fa-check-circle"></i>
                    </span>
                    <span class="sub-text">
                        - ${post['time']}
                    </span>
                </div>
                <div class="fw-bold">
                    ${post['title']}
                </div>
            </div>
            <img class="img-post align-self-center" src=${post['image']}>
        </a>
    `);
}

export default PostSummaryItem;