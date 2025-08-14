const Card = (props) => {
    return (
        <div className="card h-100 mb-3 d-flex flex-column justify-content-between flex-shrink-0">
            <div className="h-50 w-100 text-center">
                <img src={props.imgURL} className="card-img-top img-fluid" alt="Product img" />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
            </div>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}

export default Card;