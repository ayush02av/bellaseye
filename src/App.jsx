import './assets/app.scss'

const App = () => {

  return (
    <div className="app">
      <div className="section">
        <div className="content">
          <center>
            <span className="heading">
              Bella's Eye Cyber Security
            </span>
            <br />
            <br />
            World’s best virtual machine manager with AI based network security &amp; management
          </center>
          <p>
            Welcome to Bella’s Eye Cyber Security. An up &amp; coming startup in Virtualization &amp; AI-based network security.
            <br />
            Our solutions streamline virtual machine management &amp; enhance network security using advanced AI technology.
          </p>
          <p>
            Our platform is easy to use &amp; automates many task. Our AI system constantly monitors your network to identify &amp; defend against potential threats.
          </p>
          {/* <p>Contact us to get a chance at testing out our beta product as soon as it launches in April, 2023.</p> */}
          <br />
          <center>
            <button className="CTA" onClick={() => {
              alert("Email Noted")
            }}>Contact Us</button>
          </center>
        </div>
      </div>

    </div>
  )
}

export default App