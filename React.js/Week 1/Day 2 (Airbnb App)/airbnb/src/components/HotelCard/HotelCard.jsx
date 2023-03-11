import './HotelCard.css';

const HotelCard = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.data.image} alt="" />
            </div>
            <div className="card-body">
                <img src="./assets/star-icon.png" alt="" />
                <span className="rating">{props.data.rating}</span>
                <span className="likes">{"("}{props.data.like}{")"}</span>
                <span className="location">{props.data.location}</span>
            </div>

            <div className="card-info">
                <p>{props.data.title}</p>
                <p><strong>From ${props.data.price}</strong> /night</p>
            </div>
        </div>
    )
}

export default HotelCard;