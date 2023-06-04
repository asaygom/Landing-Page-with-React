function Card(props) {
    return (
        <div className="col-lg-4">
            <img src={props.cardImg} alt="" className="rounded-circle object-fit-cover" width="140" height="140" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <h2 className="fw-normal">{props.cardTitle}</h2>
            <p>{props.cardDescription}</p>
            <p><a className="btn btn-info" href="#">View details »</a></p>
        </div>
    )
}

export default Card;