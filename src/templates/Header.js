import logo from '../assets/logo-full.png';

const Header = () => {
    const view = `
      <div class="Header-logo"><img src="${logo}" alt=""> 
      </div>
      <div class="Header-main">
        <div>
            <h3>
              <a href="/">
                GradiWeb Gallery
              </a>
            </h3>
        </div>
        <div class="Header-nav">
          <a href="#/about/">
            About
          </a>
        </div>
      </div>  
    `;
    return view;
  };
  
  export default Header;