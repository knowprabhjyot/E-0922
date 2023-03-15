Class Basics

- Class fields to initialize object properties
- `constructor()` method to initialize dynamic object properties
- `extends` keyword to create a subclass

```js
class Character {
    // If you need to initialize values when creating the 
    // object, you must include a constructor
    constructor(initialHp=100) {
        this.hp = initialHp
    }
    
    // If you will always initialize an instance with a hard-coded
    // value, you can declare that without a constructor | class field
    alive = true
    
    // I can refer to the object calling this method as `this`
    // and therefore can access and update the properties of
    // this object with, e.g.: `this.hp = ...`
    updateHp(amount) {
        const calc = this.hp + amount
        if (calc <= 0) {
            // Trying to avoid any character 
            // having a negative amount of HP
            this.hp = 0
            this.alive = false
        } else {
            this.hp = calc
        }
    }
}

// const char = new Character()
// console.log(char.hp)
// char.updateHp(100)
// console.log(char.hp)


class Enemy extends Character {
    constructor(hp, lootToDrop) {
        super(hp)
        this.lootToDrop = lootToDrop
    }
}

class Hero extends Character {
    constructor(hp) {
        super(hp)
    }
    inventory = []
    
    defeatEnemy(enemy) {
        if(enemy.lootToDrop) {
            this.inventory.push(enemy.lootToDrop)
        }
        enemy.updateHp(enemy.hp * -1)
    }
}


const enemy = new Enemy(100, "Sword of a Thousand Truths")
const me = new Hero(100)

// console.log(me.hp)
// console.log(me.alive)
// me.updateHp(50)
// console.log(me.hp)

me.defeatEnemy(enemy)
console.log("My inventory:", me.inventory)
console.log("Enemy's HP:", enemy.hp)
console.log("enemy.alive:", enemy.alive)
```

Class in React

- `class` keyword
- `extends` keyword
- `constructor()` method
- `render()` method

```js
import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
            </div>
        )
    }
}
```

### Challenge

```js
import React from "react"
import ReactDOM from "react-dom"

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

Let's convert this function-based component to a class-based component:

```js
import React from "react"

export default function App(props) {
    const [goOut, setGoOut] = React.useState("Yes")
    
    function toggleGoOut() {
        setGoOut(prevState => {
            return prevState === "Yes" ? "No" : "Yes"
        })
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div className="state--value" onClick={toggleGoOut}>
                <h1>{goOut}</h1>
            </div>
        </div>
    )
}
```

```js
import React from "react"

export default class App extends React.Component {
    // const [goOut, setGoOut] = React.useState("Yes")

    // constructor(props) {
    //     super(props)
    //     props are passed into the constructor
    //     this.state = {
    //         goOut: "Yes"
    //     }
    //     this.toggleGoOut = this.toggleGoOut.bind(this)
    //     bind is a way to make sure that the `this` keyword
    //     inside of the function is referring to the correct
    //     object
    // }
    
    state = {
        goOut: "Yes"
    }
    
    toggleGoOut = () => {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }
    
    render() {
        return (
            <div className="state">
                <h1 className="state--title">Should I go out tonight?</h1>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
```

Let's convert this function-based component to a class-based component:

```js
import React from "react"

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 * 
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
```

```js
export default class App extends React.Component {
    // const [count, setCount] = React.useState(0)
    state = {
        count: 0
    }
    
    add = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
                // don't do this: count: prevState.count++
                // because we still access the previous state
            }
        })
    }

    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}}))
        // () implicitly returns an object
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}}))
    }

    render() {
        return (
            <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>
        )
    }
}
```

### Challenge

```js
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
```

```js
import React from "react"

export default class App extends React.Component {
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    }
    
    toggleFavorite = () => {
        this.setState(prevContact => ({
            // ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
        // this,setState gets new version of state
        // and then re-renders the component
        // Object.assign({}, prevContact, {isFavorite: !prevContact.isFavorite})
    }
    
    render() {
        let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png"
        
        return (
            <main>
                <article className="card">
                    <img src="./images/user.png" className="card--image" />
                    <div className="card--info">
                        <img 
                            src={`../images/${starIcon}`} 
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p className="card--contact">{this.state.phone}</p>
                        <p className="card--contact">{this.state.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    }
}
```

### Lifecycle Methods

Lifecycle methods are methods that are called at different points in the lifecycle of a component. They are called automatically by React. There are three phases of the lifecycle:

1. Mounting
2. Updating
3. Unmounting

#### Mounting

Mounting is the phase of the lifecycle when an instance of a component is being created and inserted into the DOM. The methods that are called in this phase are:

1. `render()`: This is the only required method in a class component. It is called during the mounting phase. It is also called during the updating phase.

2. `componentDidMount()`: This method is called after a component is mounted. It is used for any setup that requires a DOM node. This is where you would make AJAX requests to load data from an API.

```js
import React from "react"

export default class App extends React.Component {
    state = {
        character: {}
    }
    
    /**
     * Goal: get the first character from the Star Wars 
     * API and display the name on the screen
     * 
     * Challenge
     * 
     * Save the Star Wars character object in state! Then,
     * display the `name` property of the character on the
     * screen.
     */
    
    componentDidMount() {
        console.log("componentDidMount")

        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data))
    }
    
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}
```

```js
componentDidMount() {
    console.log("componentDidMount")
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => {
            this.setState({character: data})
        })
}
    
React.useEffect(() => {
    // Your code here
}, [])

render() {
    console.log("render")
    return (
        <h1>{this.state.character.name}</h1>
    )
}
```

