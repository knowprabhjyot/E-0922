### State Management w/Redux

First, we need to install redux and react-redux. Redux is the package that will handle our state management, and react-redux is the package that will allow us to integrate Redux with our React application.

To install these packages, we can use the following command in our terminal:

```bash
npm install redux react-redux
```

Once we have these packages installed, we can start using Redux to manage our application state.

So, what exactly is state management? State refers to the data that is used to render our application. For example, if we have a todo list application, the state would include the list of todos and their current status (completed or not). State management is the process of updating and managing this data.

Redux is a popular state management library that helps us manage the state of our application. It provides a single source of truth for our application state, meaning that all components in our application can access the same state.

In order to use Redux, we need to create a Redux store. The store is where our application state is stored. We can create a store using the `createStore` function from the `redux` package.

Here's an example of how to create a store:

```js
import { createStore } from 'redux';

const initialState = {
  todos: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);
```

In this example, we create a store with an initial state of an empty `todos` array. We also define a `rootReducer` function that takes in the current state and an action, and returns a new state based on the action.

In this case, we only have one action type `(ADD_TODO)`, which adds a new todo item to the todos array.

Now that we have our store set up, we can use it in our React components. We do this by wrapping our top-level component in a `Provider` component from the `react-redux` package.

Here's an example:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

In this example, we import our Redux store from the `store` file and wrap our `App` component in a `Provider` component. The Provider component takes in our store as a prop and makes it available to all components in our application.

Now that we have our store set up and our components wrapped in a Provider component, we can start using Redux to manage our application state. We can do this by using the `useSelector` and `useDispatch` hooks from the `react-redux` package.

The `useSelector` hook allows us to access state from our Redux store in our component. Here's an example:

```js
import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector(state => state.todos);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

In this example, we use the useSelector hook to access the `todos` array from our Redux store. We then map over the todos array to render each todo item as an `<li>` element.

The `useDispatch` hook allows us to dispatch actions to our Redux store. Here's an example:

```js
import React from 'react';
import { useDispatch } from 'react-redux';

function AddTodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { id: uuid(), text: text, completed: false } });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```

In this example, we use the `useDispatch` hook to get a reference to the `dispatch` function from our Redux store. We then use this function to dispatch a new `ADD_TODO` action when the form is submitted.

The `ADD_TODO` action includes a `payload` object that contains the new todo item's `id`, `text`, and `completed` properties. We also reset the text state to an empty string after the form is submitted.

#### Keywords

`Reducers` are functions that take in the current state and an action, and return a new state based on the action. In Redux, all state updates are done through reducers.

Here's an example of a simple reducer function:

```js
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
```

In this example, we have a `counterReducer` function that takes in the current state (which defaults to 0) and an action. The action can either be an `INCREMENT` action or a `DECREMENT` action. Depending on the action type, the reducer returns a new state by either incrementing or decrementing the current state by 1.

The `store` is where our application state is stored. It's an object that holds the complete state tree of our application. In Redux, we create a store using the createStore function from the redux package.

Here's an example of how to create a store:

```js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```

In this example, we import our rootReducer function (which is a combination of all the reducers in our application) and create a store using the createStore function. We pass our rootReducer function as an argument to the createStore function.

`Actions` are plain JavaScript objects that represent an intention to change the state of our application. An action must have a type property, which is a string that describes the type of action being performed. The type property should be a descriptive string in all capital letters by convention.

Here's an example of an action:

```js
{
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Buy groceries',
    completed: false
  }
}
```

In this example, we have an ADD_TODO action with a payload object that contains the id, text, and completed properties of the new todo item.

When an action is dispatched, it is sent to the store, which passes it to the appropriate reducer. The reducer then returns a new state based on the action, and the store updates its state accordingly.

### Examples

#### Example 1: Simple Counter

In this example, we'll create a simple counter application using React and Redux.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In this example, we have a `counterReducer` function that takes in the current state (which defaults to 0) and an action. The action can either be an `INCREMENT` action or a `DECREMENT` action. Depending on the action type, the reducer returns a new state by either incrementing or decrementing the current state by 1.

We then create a store using the `createStore` function from the `redux` package and pass our `counterReducer` function as an argument. We then wrap our `Counter` component in a `Provider` component and pass our store as a prop.

In our `Counter` component, we use the `useSelector` hook to access the current state from our Redux store. We then use the `useDispatch` hook to get a reference to the `dispatch` function from our Redux store. We then use this function to dispatch an `INCREMENT` or `DECREMENT` action when the `+` or `-` buttons are clicked.

#### Example 2: API Fetching

First, we'll need to install the axios package, which is a popular library for making HTTP requests:

```bash
npm install axios
```

Next, we'll create an action that will fetch data from an API:

```js
import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('https://api.example.com/data')
      .then(response => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchDataFailure(errorMessage));
      });
  };
};

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const fetchDataFailure = (errorMessage) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: errorMessage
  };
};
```

In this example, we define three action types (`FETCH_DATA_REQUEST`, `FETCH_DATA_SUCCESS`, and `FETCH_DATA_FAILURE`) to represent the different states of the API call. We also define three action creator functions (`fetchDataRequest`, `fetchDataSuccess`, and `fetchDataFailure`) to create the actions.

The `fetchData` action creator is a thunk function, which allows us to dispatch multiple actions, including asynchronous actions. In this case, we dispatch the fetchDataRequest action before making the API call, and then dispatch either the `fetchDataSuccess` or `fetchDataFailure` action depending on whether the API call was successful or not.

Next, we'll create a reducer to handle these actions and store the API data:

```js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from './actions';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
```

In this example, we define an `initialState` object that includes a loading boolean, a data array, and an error string. We also define a dataReducer function that takes in the current state and an action, and returns a new state based on the action.

The reducer handles the `FETCH_DATA_REQUEST` action by setting the loading property to true. It handles the `FETCH_DATA_SUCCESS` action by setting the loading property to false, storing the data in the data property, and clearing the error property. It handles the `FETCH_DATA_FAILURE` action by setting the loading property to false, clearing the data property, and storing the error message in the error property.

Finally, we'll combine our reducer with the `combineReducers` function from the redux package to create our root reducer:

```js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;
```

In this example, we combine our `dataReducer` with the `combineReducers` function to create our root reducer. Our root reducer has a single property (`data`) that corresponds to the state managed by the `dataReducer`.

Now that we have our actions and reducers set up, we can use them in our components. Here's an example of how to use the `fetchData` action and the `data` state in a React component:

```js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
```

In this example, we use the useDispatch and useSelector hooks from the react-redux package to dispatch the fetchData action and access the data state from our Redux store.

We use the useEffect hook to dispatch the fetchData action when the component mounts. We also use the loading and error properties of our state to render loading and error messages if necessary.

If the API call is successful, we render the data as a list of `<li>` elements.


