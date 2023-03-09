
const WhoToFollowListItem = (
    who = {
        userName: 'unk',
        handle: 'unk',
        avatarIcon: ''
    }
) => {
    return(
        <li className="list-group-item list-group-item-action">
            <a href="#" className="d-flex flex-row justify-content-between" style={{"color": "black", "textDecoration": "none"}}>
                <div className="d-flex flex-row">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${who.who.avatarIcon}`}/>
                    <div className="ms-3">
                        <div className="fw-bold">
                            {who.who.userName} <i className="bi bi-patch-check"></i>
                        </div>
                        <div style={{"color": "lightgray"}}>
                            @{who.who.handle}
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary rounded-pill align-self-center">Follow</button>
            </a>
        </li>
    );
};

export default WhoToFollowListItem;