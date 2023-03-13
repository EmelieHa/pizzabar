import React, {useState} from 'react';
import './App.css';


export function Order() {
  const [start, setStart] = useState('Order not started');
  const handleClick = () => {
    start = setStart('Order started!')
  }
  return (
    <div>
      <h3>Click here to start your order!</h3>
      <button onClick={handleClick}>Start</button>
      <p>{start}</p>
    </div>
  )
}

export function Pizza() {
  const [ingredient, setIngredient] = useState('');
  const handleChange = (event) => {
setIngredient(event.target.value);
  }
return (
  <div>
    <p>Choose your main ingredient:</p>
    <input onChange={handleChange}/>
<br>
</br>
<h2>Let's make a {ingredient} pizza!</h2>
  </div>
)
}

export function PizzaChoice()  {
   const [ingredients, setIngredients] = useState(['']);

   const handleClick = (event) => {
    setIngredients([
      'Ham',
      'Shrimps',
      'Mushrooms',
      'Tomato sauce'
    ]);
    document.getElementById('pizzaName').innerHTML = 'Capricciosa';
   }

  const handleClickTwo = (event) => {
    setIngredients([
      'Salami',
      'Bell pepper',
      'Chili oil',
      'Onions'
    ])
    document.getElementById('pizzaName').innerHTML = 'Diavola';
  }

  const handleClickThree = (event) => {
    setIngredients( 
      ['Mozzarella',
    'Basil',
       'Onion',
       'Fresh tomatoes'
     ])
     document.getElementById('pizzaName').innerHTML = 'Margherita';
  }

   const listItems = ingredients.map((item) =>
   <li key={item}>{item}</li>
   );

   
  
    return (
      <div>
        <h4 id='pizzaName'></h4>
    
        <ul id='foods'>{listItems}
        </ul>
        <button className='pizzabtn' onClick={handleClick}>Capricciosa</button>
        <button className='pizzabtn' onClick={handleClickTwo}>Diavola</button>
        <button className='pizzabtn' onClick={handleClickThree}>Margherita</button>
      </div>
    )
  }




export function Dessert () {
    const [design, setDesign] = useState({
      color: 'black',
      text: 'white',
      visibility: 'hidden'
    });
    const dessertArr = ['cheese cake', 'strawberry cake', 'chocolate brownie', 'rhubarb pie'];
    const [dessertIndex, setDessertIndex] = useState(0);
const dessert = dessertArr[dessertIndex];
const [cart, setCart] = useState('');
    
  const handleClick = () => {
setDesign({color: 'white'});
setDesign({text: 'black'});
setDesign({visibility: 'visible'});
    }

  const handleClickTwo = () => {
    setCart(dessert);

    }
   
   const handleClickThree = () => {
    setDessertIndex((prev) => prev + 1);
document.getElementById('no').checked = false;
    }

   
 
      return (
        <div style={{backgroundColor: design.color}}>
       
<h3 style={{color: design.text}}>Would you like some dessert?</h3>
<button onClick={handleClick} type='submit'>Yes</button>
<p style={{visibility: design.visibility, color: 'black'}}>Can we offer you a {dessert}?</p>
<div style={{visibility: design.visibility}}>
  <label>Yes</label><input id='yes' type='radio' name='radio' onClick={handleClickTwo}></input>
  <label>No</label><input id='no' type='radio' name='radio' onClick={handleClickThree}></input>
</div>
<hr/>

</div>
      
      )
    }
  



export default function App() {
  return (
 
    <div className='App-header'>
      <h1>Pizza Bar</h1>
      <div>
<Pizza/>
</div>

<PizzaChoice/>
<Dessert/>

 <Order/>

</div>
  )
}

