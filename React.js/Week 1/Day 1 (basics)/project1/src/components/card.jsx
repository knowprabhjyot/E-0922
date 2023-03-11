import './cardComponent.css';

// Props ?
// Props are the data which you can pass in a component from 
// parent component to child component

export const CardComponent = (props) => {
    console.log(props, "props");
    return (
        <div className="container">
            <h1>{props.title}</h1>
            {/* // Use props for description below */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium magni? Id suscipit dolorem obcaecati ipsa fugit. Ad unde quidem officiis consequatur a, vitae at animi incidunt saepe magnam.</p>
            <button>Like</button>
        </div>
    )
}

// Lets do a quick in class assingment again
// just like I passed title in the props
// you have to pass description in the props
