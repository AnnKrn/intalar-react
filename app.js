
      const data = {
        headerTitulo: 'Getting Started',
        headerDescripcion: 'Descripcion',
        mainSectionTitulo: 'Main Section',
        articles: [
          { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
          { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
          { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
        ],
        asideTitulo: 'Links',
        links: [
          { href: '#', texto: 'Link 1'},
          { href: '#', texto: 'Link 2'},
          { href: '#', texto: 'Link 3'},
          { href: '#', texto: 'Link 4'},
          { href: '#', texto: 'Link 5'}
        ],
      };

       
      function Header(props) {
        return ( <div>
          <p>{props.headerTitulo}</p>
          
          <p>{props.mainSectionArticles[0].titulo}</p>
          {props.mainSectionArticles.map(article => {
            return <div>
            <h1>{article.titulo}</h1>
            <p>{article.descripcion}</p>
            </div>;
          })}
          {props.asideLinks.map(link => {
            return <div>
               <a href={link.href}>{link.texto}</a>
            </div>
          })}
          
      </div>)     
      };
// map queda al 
      // sirve para rederisar lo escrito. Crea el DOM virtual e inyecta la funcion que regresa jsx en forma de html. Primer parametro es la funcion a renderiza y el segun
      ReactDOM.render(
        <Header
        // 
          headerTitulo={data.headerTitulo}
          headerDescripcion={data.headerDescripcion}
          mainSectionTitulo={data.mainSectionTitulo}
          mainSectionArticles={data.articles}
          asideTitulo={data.asideTitulo}
          asideLinks={data.links}
        />,
        document.getElementById('react-container')
      ); 
