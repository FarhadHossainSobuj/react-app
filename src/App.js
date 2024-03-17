
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  var person = {
    name: "Masud Chora",
    job: "Attempting Govt. Job"
  }
  const products = [
    {
      name: 'Photoshop',
      price: '$89.99'
    },
    {
      name: 'Illustrator',
      price: '$83.99'
    }
  ]
  var style = {
    color: 'white',
    backgroundColor: "green", 
    padding: '8px',
    borderRadius: '20px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <p style={style}>
          Hello <b className=''>{person.name}</b>
        </p>
        <Person name="Rubel"></Person>
        <h1>My Heading {2 + 3}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10)
  const handleIncrease = ()=> {
    const newCount = count + 1;
    setCount(newCount)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productSytle={
    border:'1px solid gray',
    borderRadius:'5px',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  return (
    <div style={productSytle}>
      <h2>Name: {props.product.name}</h2>
      <h1>Price: {props.product.price}</h1>
      <button>Buy now</button>
    </div>
  );
}

function Person(props){
  console.log(props)
  return <div style={{border: '2px solid green'}}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the year</h3>
  </div>;  
}

export default App;
