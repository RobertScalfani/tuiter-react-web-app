import navigationOptions from "./navigationOptions.js";

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            ${navigationOptions.map(option => {
                return(`
                    ${
                    active == option['title'] ?
                        `<a href="${option['link']}" class="list-group-item active">
                            <div class="d-flex">
                                <i class="${option['icon']} align-self-center"></i>
                                <span class="d-none d-xl-block d-xxl-block">&nbsp;${option['title']}</span>
                            </div>
                        </a>`
                        :
                        `<a href="#" class="list-group-item">
                            <div class="d-flex">
                                <i class="${option['icon']} align-self-center"></i>
                                <span class="d-none d-xl-block d-xxl-block">&nbsp;${option['title']}</span>
                            </div>
                        </a>`
                }
                `);
            }).join('')
            }
       </div>
       <div class="d-grid mt-2">
           <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
               Tweet
           </a>
       </div>
    `);
}

export default NavigationSidebar;