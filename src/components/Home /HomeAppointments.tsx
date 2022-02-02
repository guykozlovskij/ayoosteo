import AyoReceptionImg from "../../img/ayo/ayo_reception.jpeg"

function HomeAppointments() {
  return (
    <section id="home-appointment-section">
      <div id="book-appointment-div">
      <div className="button-green-inverted-div">
          <a className="button-green-inverted" href="">View All Services</a>
        </div>
        <img src={AyoReceptionImg} />
      </div>
      <div id="treatment-types-div">
        <div className="treatment">
          <h3>Osteopathy</h3>
          <p>Consultation and Treatment: 60 minutes</p>
          <p>Follow up: 30 minutes</p>
        </div>
        <div className="treatment">
          <h3>Osteopathy and Medical Acupuncture</h3>
          <p>Consultation and Treatment: 60 minutes</p>
          <p>Follow up: 45 minutes</p>
        </div>
        <div className="treatment">
          <h3>Home Visit</h3>
          <p>Consultation and Treatment: 60 minutes</p>
          <p>Follow up: 40 minutes</p>
        </div>
        <div className="treatment">
          <h3>Work Station Assessment</h3>
          <p>Basic or Complex Assessment</p>
          <p>30 Minutes to 1 hour</p>
        </div>
      </div>
      <hr className="solid"></hr>
      <p id="registered-with">I am registered with most health insurers, including AXA-PPP, Vitality, Simply Health and many others (however, I am not linked with BUPA).</p>
      <hr className="solid"></hr>
    </section>
  )
}

export default HomeAppointments