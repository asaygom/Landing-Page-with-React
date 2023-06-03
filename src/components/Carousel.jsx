function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6 h-100" data-bs-ride="carousel" data-bs-theme="light">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/278956474_107166338648809_9202367882720907474_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEoFo7Uhx2fKA22FL0Nf1JjMfYbQtAQNHcx9htC0BA0d3mssx_qem3MZZEl_UtXMrc&_nc_ohc=5TuoanVJwWwAX9pFp3b&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfDLYuJ8rbSouj8zuDAHG4DNNwRAwHB_yVK2dtlwJXIn3g&oe=647F893A" className="bd-placeholder-img object-fit-cover" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/335113765_1365472670696491_8299586824009395549_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHvh1qyac1GpBp6kAiJBWCGFp_RKOQflmkWn9Eo5B-WaaPwSTe0_s0p2tftW6Ti1iM&_nc_ohc=WmpeHhUu7LQAX8IKxND&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfDFF9rao6165SsnM7XcjEbP4HonBBP_PWszVeM19ZrllA&oe=647FB080" className="bd-placeholder-img object-fit-cover" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Tratamiento facial 🤩</h1>
              <p>endrás los mejores tratamientos para:
                •Estimular el colágeno de la piel •produciendo efecto lifting
                •Atenuar líneas de expresión y flacidez
                •Unificar el tono de la piel
                Y así obtendrás: Una piel suave, oxigenada y tonificada💙
                Conoce más sobre los packs que tengo para ti</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/327386545_585721450038680_4267179704018843889_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFE8u4FOnc-waVNRTT_0ZxvqcZhaw_hkImpxmFrD-GQiZP-LYbEZlVwVdz5tX1-k5E&_nc_ohc=s_Dnu6VHHKIAX-Q1AI9&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfAqEipyB_6Er8l030zQ-ZIyffS_lAq1jHOTUoWMKIzniA&oe=6480D51B" className="bd-placeholder-img object-fit-cover" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;