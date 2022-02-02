import AyoProfileImage from "../../img/ayo/ayo_profile_bw.jpeg"
import GOCRegistrationImg from "../../img/certification/AyoO9396.jpg"

function HomeIntro() {
  return (
      <section className="home-intro-section">
        <div className="home-ayo-profile-image">
          <img src={AyoProfileImage} alt="Ayo Profile" />
        </div>
        <div className="home-intro-text">
          <h1>AYO KOZLOVSKIJ née OLUADE</h1>
          <h2>Osteopath and Medical Acupuncturist</h2>
          <p>Based in Thurrock and Havering. My passion is to help you to recover from pain, rehabilitate from injury and achieve great health. I provide a highly effective treatment to ensure that your symptoms improve in as few sessions as possible.</p>
          <img id="goc-registration" src={GOCRegistrationImg} alt="General Osteopathic Council Registration No9396" />
        </div>
      </section>
  )
}

export default HomeIntro