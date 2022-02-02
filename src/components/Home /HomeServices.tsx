import ayoOfficeImg from "../../img/ayo/ayo_office_bw.jpeg"

function HomeServices() {
  return (
    <section id="home-service-list-section">
      <div id="service-list">
        <h2>Expert Services</h2>
        <ul>
          <li><a href="">Osteopathy</a></li>
          <li><a href="">Medical Acupuncture (Dry Needling)</a></li>
          <li><a href="">Home Visit</a></li>
          <li><a href="">DSE Workstation Assessment</a></li>
        </ul>
        <div className="button-green-inverted-div">
          <a className="button-green-inverted" href="">View All Services</a>
        </div>
      </div>
      <img src={ayoOfficeImg} alt="Ayo in Office " />
  
    </section>

  )
}

export default HomeServices