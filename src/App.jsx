// Ici C'est du Javascript dans lequel on peut insérer du HTML -> noeud React
// Pour tous = camelcase sauf aria

import { Fragment } from "react"
const title = "Interpolation variables à la volée "
const style = {color:'blue', backgroundColor: 'red'}
const showTitle = true // 
const todos = [
  'Présenter React',
  'Présenter les JSX',
  'Créer des composants',
]

function App() {

  // On peut brancher tous les listeners de cette manière directement en passant la fonction en premier paramètre.
  const handleClick = (e) => {
    console.log(e); // SyntheticBaseEvent -> React entoure les événements par des événéments propres à React -> Ca donne un événement générique peu importe la plateforme sur laquelle on dev. 
    alert("J'ai cliqué sur le titre");
  } 

  return <div> 

      {/* C'est du JS classique avec mélange JSX -> utilisation détournée du && */}
      {showTitle && <h1 onClick={handleClick} id="title"  className="title">Bonjour tout le monde</h1>}
      <h2>{title}</h2>
      <Title3 color="green" id="monId" className="maClass" data-demo="demo">Mon composant</Title3>
      {/* Toutes les balises doivent être fermées */}
      <input type="text"/>
      {/* attributs de style fonctionne pas comme en html -> C'est comme un objet*/}
      <p style={{color: 'red', backgroundColor:'blue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium eius iusto enim magni unde doloribus ea, quia ullam nesciunt, facere sed expedita tempora! Exercitationem, sit tenetur? Consectetur, neque provident!</p>
      <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos accusantium autem quibusdam tempore beatae odio velit in rerum itaque sit deserunt ea laudantium, nam, ex, nemo fuga optio dicta!</p>
      <ul>
        {/* Fonction map prend tableau en entrée et pour chaque élément du tableau fonction de transformation*/}
        {/* Important d'insérer la clé sur chaque élément pour pouvoir être réorganisé. Permet de mieux manipuler le DOM pendant les transformations. */}
        {todos.map(todo => (<li key={todo}>{todo}</li>))} 
      </ul>
  </div>

  // Si on veut pas une div parente on peut remplacer par Fragment -> permet d'avoir plusieurs éléments de premiers niveaux avec un seul élément racine JSX 
  // return <Fragment>
  //     <h1 id="title" className="title">Bonjour tout le monde</h1>;
  //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit pariatur reiciendis aut eveniet illo eaque tempora quia ad vitae neque et suscipit fugiat, a nam, cum architecto asperiores exercitationem aspernatur?</p>
  // </Fragment>

  // Alternative possible sans "fragment" avec balises vides
  // return <>
  //   <h1 id="title" className="title">Bonjour tout le monde</h1>;
  //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit pariatur reiciendis aut eveniet illo eaque tempora quia ad vitae neque et suscipit fugiat, a nam, cum architecto asperiores exercitationem aspernatur?</p>
  // </>

}

function Title3 ({color, children, hidden, ...props}) {
  if (hidden) {
    return null
  }

  console.log(hidden)
  return <h3 style={{color: color}} {...props}>{children}</h3>
}

export default App
