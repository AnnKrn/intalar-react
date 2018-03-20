 
      function Page(data) {
        return (<header>
          <h1>{headerTitulo}</h1>
          <p></p>
        </header>
    
        // <section {id:"main", style:{width: "70%", float: "left"}}>
        //   <h2></h2>
        //   <article>
        //     <h3></h3>
        //     <p></p>
        //     <hr />
        //   </article>
        //   <article>
        //     <h3>Titulo 2</h3>
        //     <p>Descripcion 2</p>
        //     <hr />
        //   </article>
        //   <article>
        //     <h3>Titulo 3</h3>
        //     <p>Descripcion 2</p>
        //     <hr />
        //   </article>
        // </section>
    
        // <aside style="width: 25%; float: right;">
        //   <h4>Links</h4>
        //   <ul>
        //     <li><a href="#">Link 1</a></li>
        //     <li><a href="#">Link 2</a></li>
        //     <li><a href="#">Link 3</a></li>
        //     <li><a href="#">Link 4</a></li>
        //     <li><a href="#">Link 5</a></li>
        //   </ul>
        // </aside>
    

        );      
      };
      

      function Page () {
          return <cabecera headerTitulo={data.headerTitulo}/>
      }

      ReactDOM.render(
        <Page
          headerTitulo={data.headerTitulo}
          headerDescripcion={data.headerDescripcion}
          mainSectionTitulo={data.mainSectionTitulo}
          mainSectionArticles={data.articles}
          asideTitulo={data.asideTitulo}
          asideLinks={data.links}
        />,
        document.getElementById('react-container')
      ); 

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