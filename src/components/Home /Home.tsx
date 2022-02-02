import HomeAppointments from "./HomeAppointments"
import HomeIntro from "./HomeIntro"
import HomeServices from "./HomeServices"

function Home() {
  return (
    <>
      <HomeIntro />
      <HomeServices />
      <section id="home-scroll-section">
        <h2>What does an osteopath treat?</h2>
        <div className="button-green-div">
          <a className="button-green" href="">View List</a>
        </div>
      </section>
      <HomeAppointments />
    </>
  )
}

export default Home