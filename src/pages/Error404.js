// creamos nuestro arrow fntcion que nos va a permitir convertir en una  función 
// esta constante

const Error404 = () => {
    const view = `
    <div class="about">
    <h2>Descripción del proyecto</h2> 
    <h4>GradiWeb Gallery - Single Pages Aplication en Javascript Vanilla </h4>
    <ul>
      <li> Se creó el entorno de trabajo y se configuró WebPack</li>
      <li> Se agregó compatibilidad  con todos los navegadores usando Babel</li>
      <li> Se creo , se conectó las rutas con el template en este caso el Header</li>
      <li> Se obtuvo las imagenes y los datos con la funcion de llamado a la API</li>
      <li> Se configuró CSS para administrar los elementos visuales - Responsive design - Metodología BEM </li>
      <li> Se creo el script para enviar a producción </li>

    </ul>
    <ul class="list-style">
      <li> Ing Pablo Felipe Cardona L</li>
      <li> Desarrollador Front End</li>
      <li> Email: pfcardona@gmail.com</li>
      <li> Tel: 3146865792</li>

    </ul>

  </div>
`;
return view;
};

export default Error404;