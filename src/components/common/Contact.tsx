function Contact() {
  return (
    <section id="contact-component">
      <div>
        <h2>Have any questions about my services?</h2>
      </div>
      <h1>AYOOSTEO</h1>
      <p>Osteopath and Medical Acupuncturist. Based in Thurrock and Havering.</p>
      <div id="contact-details">
        <div className="button-green-div">
          <a className="button-green" href="mailto: ayoosteo@gmail.com"><i className="fas fa-envelope"></i>ayoosteo@gmail.com</a>
        </div>
        <div className="button-green-div">
          <a className="button-green" href="tel:07309124425"><i className="fas fa-phone"></i>07309 124 425</a>
        </div>
      </div>
    </section>
  )
}

export default Contact