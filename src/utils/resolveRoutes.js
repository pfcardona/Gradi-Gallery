// ResolveRoute se va a encargar de dirigirnos a que template deseamos ir en este caso al home o al About

const resolveRoutes = (route) => {
  // pasamos la ruta obtenida por la funcion route
  // If route === / 
  // sino es igual a un ID en este caso a una seccio
  // en caso contrario es igual a alguna sección  por la cual
  // el usuario esta navegando
    if (route.length <= 3) {
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;