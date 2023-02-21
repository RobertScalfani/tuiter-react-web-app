import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="search-bar d-flex flex-row">
            <div class="input-group">
                <input class="form-control border-end-0 border rounded-pill" type="text" placeholder="     Search Twitter">
                <i class="fa fa-search align-self-center search-shift-icon"></i>
            </div>
            <button class="btn" type="button">
                <i class="fas fa-cog gear-icon align-self-center"></i>
            </button>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-margins" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-margins" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-margins" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <a class="nav-link nav-link-margins" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <img class="img-fluid mt-2 mb-2" src="../../images/starship.jpg">
        <span class="img-text">
            SpaceX's Starship
        </span>
        ${PostSummaryList()}
    `);
}

export default ExploreComponent;