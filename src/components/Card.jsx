const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h3>{props.category}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Card