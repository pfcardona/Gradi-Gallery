import getData from '../utils/getData';
import logoGradi from '../assets/logo-white.png'

const Home = async () => {
  const characters = await getData();
  console.log(characters);
  //
  //
  
  const view = `
  
    <div class="Characters">
      ${characters.map(character => `
        <article>
          <div class="Characters-item">           
              <img src="${character.download_url}" alt="${character.author}">            
            
            <div class="Characters-item__details">             
                <div class="Characters-item__details--title">
                  <h1>${character.id}</h1>
                </div>  
                <div class="Characters-item__details--img">
                  <img src="${logoGradi}" alt="">
                </div>
                <div class="Characters-item__details--subtitle">
                  <h2>${character.author}</h2>
                </div>
              
            </div>
          <div/>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;