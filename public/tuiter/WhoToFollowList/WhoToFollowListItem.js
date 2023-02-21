function WhoToFollowListItem(who) {
    return(`
        <a href="#" class="list-group-item list-group-item-action d-flex flex-row justify-content-between">
            <div class="d-flex flex-row">
                <img class="img-avatar" src=${who['avatarIcon']}>
                <div class="ms-3">
                    <div class="fw-bold">
                        ${who['userName']} <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                        @${who['handle']}
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-rounded align-self-center">Follow</button>
        </a>
    `);
};

export default WhoToFollowListItem;