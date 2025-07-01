// Ici C'est du Javascript dans lequel on peut insérer du HTML -> noeud React
// Pour tous = camelcase sauf aria

import { Fragment, useState } from "react"
const title = "Interpolation variables à la volée "
const style = {color:'blue', backgroundColor: 'red'}
const showTitle = true // 
const todos = [
  'Présenter React',
  'Présenter les JSX',
  'Créer des composants',
]

// INTRODUCTION

// function App() {

//   // // On peut brancher tous les listeners de cette manière directement en passant la fonction en premier paramètre.
//   // const handleClick = (e) => {
//   //   console.log(e); // SyntheticBaseEvent -> React entoure les événements par des événéments propres à React -> Ca donne un événement générique peu importe la plateforme sur laquelle on dev. 
//   //   alert("J'ai cliqué sur le titre");
//   // } 

//   // return <div> 

//   //     {/* C'est du JS classique avec mélange JSX -> utilisation détournée du && */}
//   //     {showTitle && <h1 onClick={handleClick} id="title"  className="title">Bonjour tout le monde</h1>}
//   //     <h2>{title}</h2>
//   //     <Title3 color="green" id="monId" className="maClass" data-demo="demo">Mon composant</Title3>
//   //     {/* Toutes les balises doivent être fermées */}
//   //     <input type="text"/>
//   //     {/* attributs de style fonctionne pas comme en html -> C'est comme un objet*/}
//   //     <p style={{color: 'red', backgroundColor:'blue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium eius iusto enim magni unde doloribus ea, quia ullam nesciunt, facere sed expedita tempora! Exercitationem, sit tenetur? Consectetur, neque provident!</p>
//   //     <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos accusantium autem quibusdam tempore beatae odio velit in rerum itaque sit deserunt ea laudantium, nam, ex, nemo fuga optio dicta!</p>
//   //     <ul>
//   //       {/* Fonction map prend tableau en entrée et pour chaque élément du tableau fonction de transformation*/}
//   //       {/* Important d'insérer la clé sur chaque élément pour pouvoir être réorganisé. Permet de mieux manipuler le DOM pendant les transformations. */}
//   //       {todos.map(todo => (<li key={todo}>{todo}</li>))} 
//   //     </ul>
//   // </div>

//   // Si on veut pas une div parente on peut remplacer par Fragment -> permet d'avoir plusieurs éléments de premiers niveaux avec un seul élément racine JSX 
//   // return <Fragment>
//   //     <h1 id="title" className="title">Bonjour tout le monde</h1>;
//   //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit pariatur reiciendis aut eveniet illo eaque tempora quia ad vitae neque et suscipit fugiat, a nam, cum architecto asperiores exercitationem aspernatur?</p>
//   // </Fragment>

//   // Alternative possible sans "fragment" avec balises vides
//   // return <>
//   //   <h1 id="title" className="title">Bonjour tout le monde</h1>;
//   //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit pariatur reiciendis aut eveniet illo eaque tempora quia ad vitae neque et suscipit fugiat, a nam, cum architecto asperiores exercitationem aspernatur?</p>
//   // </>

// }

// function Title3 ({color, children, hidden, ...props}) {
//   if (hidden) {
//     return null
//   }

//   console.log(hidden)
//   return <h3 style={{color: color}} {...props}>{children}</h3>
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// Le hook useState

// Fonctions hook commencent par use et fonctionnent dans les composants 
// Le useState = permet d'avoir un espace mémoire qui sera partagé à chaque fois que le composant sera re rendu par REACT
// Le composant est rendu et sait comment s'intégrer dans le DOM 
// Quand on fait setCount il change l'état du composant et rend à nouveau le composant. React met à jour le DOM et rend les modifs

// function App() {

//   // const [count, setCount] = useState(0)


//   // console.log('render')

//   // const increment = () => {
//   //   setCount(count + 1)
//   // }

//   // On incrémente la valeur de l'état et on récupère (permet de faire un + 3 ici par exemple. + fonction indépendante de la valeur de count)
//   // const increment = () => {
//   //   setCount((count) => count + 1)
//   //   setCount((count) => count + 1)
//   //   setCount((count) => count + 1)
//   // } 

//   //   return <>
//     //   <p>Compteur : {count}</p>
//     //   <button onClick={increment}>Incrémenter</button>
//   //    </>

//   // On peut aussi stocker des infos sur individus
//   const [person, setPerson] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 18,
//   })
//   const [count, setCount] = useState(0)

//   // Quand on appelle un setter il faut systématiquement lui passer une nouvelle version de l'objet. ON ne peut pas faire de mutation sur objet ou tableau dans REACT

//   // On peut appeler plusieurs hook mais attention SYSTEMATIQUEMENT DANS LE MEME ORDRE -> Donc ça ne marche pas dans les boucles ou conditions
//   const incrementAge= () => {
//     setPerson({...person, age: person.age + 1}) // on fait un nouvel objet avec la clé âge modifiée
//   }

//   const incrementCount= () => {
//     setCount(count + 1)
//   }

//       return <>
//         <p>Age de {person.firstName} : {person.age} </p>
//         <button onClick={incrementAge}>Gagner une année</button>
//         <button onClick={incrementCount}>Incrémenter {count} </button>
//      </>



// }

// Résumé : useState on l'utilise dans une function comme un composant React 
// Il prend en paramètre un objet ou une valeur lié au composants et il retournera un tableau de taille 2 avec en 1 la valeur et en 2 un setter pour changer la valeur
// A chaque fois que le setter est appelé le composant est rerendu et notre structure HTML est rerendu
// On peut utiliser l'interpollation pour afficher les valeurs que l'on a dans les variables et on pourra utiliser eventListener pour venir changer (grâce aux setter) l'état de notre composant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// LES FORMULAIRES

// function App() {

  // const [firstName, setFirstName] = useState('John Doe')
  
  // const handleChange = (e) => {
  //   setFirstName(e.target.value)
  // }

  // const reset = () => {
  //   setFirstName('')
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(new FormData(e.target))
  // }

// Grâce à onChange = React contrôle le champ 
// 
  // return <form>
  //   <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
  //   {firstName}
  //   <button onClick={reset} type="button" >Reset</button>
  // </form>

  // Ici on a pas de rendu à chaque frappe car React ne gère pas le formulaire
  // return <form onSubmit={handleSubmit}>
  //   <input type="text" name="firstName"/>
  //   <button>Envoyer</button>
  // </form>

  // Pour mettre une valeur par défaut -> defaultValue=""

  // Que choisir ? -> Dépend de la situation. Si on a un champ libre et qu'on veut juste récupérer la saisie après. 
  // Par contre si on veut rendre en live la saisie du user -> le gérer via React c'est bien mais il faut bien penser à value + onChange

  // Pour textarea 
  // <textarea value={value} onChange={handleChange}></textarea>

  // pour checked

//   const [value, setValue] = useState('')

//   const handleChange = (e) => {
//     setValue(e.target.value)
//   }

//   const [checked, setChecked] = useState(true)

//   const toggleCheck = () => {
//     setChecked(!checked)
//   }

//   return <form>
//     <textarea value={value} onChange={handleChange}></textarea>
//     <input type="checkbox" cheched= {checked} onChange={toggleCheck} />
//     <button disabled={!checked} >Envoyer</button>
//   </form>
// }

// Si contrôlé -> value + onChange obligatoire
// Si on veut une value il faut jamais undefined car passage de contrôlé à incontrôlé

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// Le flux de données dans React
// quand on creer un composant toujours pareil on a propriete qui permettent aux parents sde desc l'info et event listener qui font remonter les infos. possible sur plsr composants. 

// function App() {
//   const [isTermAccepted, setIsTermAccepted] = useState(false)

//   return <form>
//     <CGUCheckbox checked = {isTermAccepted} onCheck={setIsTermAccepted}/>
//     <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
//   </form>

//   function CGUCheckbox ({checked, onCheck}) {
//     return <div>
//       <label> 
//         <input type='checkbox' checked={checked} onChange={(e) => onCheck(e.target.checked)}/> Accepter les conditions d'utilisation
//         </label>
//     </div>
//   }
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// Creation d'une liste de produits
import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";
import {Range} from "./components/forms/Range.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";
import { ProductRow } from "./components/products/ProductRow.jsx"

const PRODUCTS = [
  {category: 'Fruits', price: "$1", stocked: true, name: "Apple"},
  {category: 'Fruits', price: "$1", stocked: true, name: "Dragonfruit"},
  {category: 'Fruits', price: "$2", stocked: false, name: "Passionfruit"},
  {category: 'Vegetables', price: "$2", stocked: true, name: "Spinach"},
  {category: 'Vegetables', price: "$4", stocked: false, name: "Pumpkin"},
  {category: 'Vegetables', price: "$1", stocked: true, name: "Peas"},
]

function App() {
  
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  const [showPrice, setShowPrice] = useState(2)
  const visibleProducts = PRODUCTS.filter(product => {
      console.log('prix produit:', product.price, 'prix filtre:', showPrice);

    if (showStockedOnly && !product.stocked) {
      return false
    }
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    const priceNumber = Number(product.price.replace(/\$/g, ''));

    if (showPrice < priceNumber) {
      return false
    }

    return true
  })

  return <div className="container mb-3"> 
    <SearchBar 
      search = {search}
      onSearchChange = {setSearch}
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={setShowStockedOnly}
    />
    <PriceBar
      price = {showPrice}
      onPriceChange = {setShowPrice}
    />
    <ProductTable 
      products = {visibleProducts}
    />

  </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return <div>
    <div className="mb-3">
      <Input 
      value= {search}
      onChange= {onSearchChange}
      placeholder="rechercher..."
      />

      <Checkbox 
      id = "stocked"
      checked={showStockedOnly}
      onChange= {onStockedOnlyChange} 
      label="N'afficher que les produits en stock"
      />
    </div>
  </div>
}

function PriceBar({price, onPriceChange}) {
  return <div className="mb-3">
    <Range
      value = {price}
      onChange = {onPriceChange}
      label = {'Prix :' + ' ' + price + '$'}
    />
  </div>
}


function ProductTable ({products}) {

  const rows = []
    let lastCategory = null


  for (let product of products) {

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App