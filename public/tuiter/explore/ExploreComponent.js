import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div className="row">
            <div className="search-bar d-flex flex-row">
                <div className="input-group">
                    <input className="form-control border-end-0 border rounded-pill" type="text"
                           placeholder="     Search Twitter">
                        <i className="fa fa-search align-self-center search-shift-icon"></i>
                </div>
                <button className="btn" type="button">
                    <i className="fas fa-cog gear-icon align-self-center"></i>
                </button>
            </div>
        </div>
        <ul className="nav mb-2 nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="for-you.html">For you</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link-margins" href="trending.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link-margins" href="news.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link-margins" href="sports.html">Sports</a>
            </li>
            <li className="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <a className="nav-link nav-link-margins" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <img className="img-fluid" src="/public/images/starship.jpg">
        <span className="img-text">
            SpaceX's Starship
        </span>
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;