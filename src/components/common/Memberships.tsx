import GOCRegistrationImg from "../../img/certification/AyoO9396.jpg"
import iOMembershipLogo from "../../img/certification/iO-Member-logo-Digital.jpg"

function Memberships() {
  return (
    <div id="memberships">
      <img src={GOCRegistrationImg} alt="ayo GOC registration" />
      <img id="io-membership" src={iOMembershipLogo} alt="IO membership logo />" />
    </div>
  )
}

export default Memberships