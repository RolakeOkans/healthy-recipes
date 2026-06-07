const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h3>{props.category}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank">
                <button className="card-button">View Recipe</button>
            </a>
        </div>
    )
}

export default Card