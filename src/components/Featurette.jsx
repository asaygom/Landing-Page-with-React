function Featurette(props){
    return(
      <div className="row featurette">
        <div className={props.cardPosition}>
          <h2 className="featurette-heading fw-normal lh-1">{props.cardTitle}</h2>
          <p className="lead">{props.cardDescription}</p>
        </div>
        <div className={props.cardPosition2}>
          <img src={props.cardImg} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        </div>
    </div>
    )
}

export default Featurette;