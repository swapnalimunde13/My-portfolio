import myPhoto from "../assets/myphoto.jpeg";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h3>Hello, I am</h3>
        <h1>Swapnali Sadashiv Munde</h1>
        <h2>Aspiring Full Stack Developer</h2>
        <p>
          Passionate about learning and building web applications using
          React.js, Node.js, JavaScript, MySQL, and Python. Currently gaining
          hands-on experience through Full Stack Web Development projects and
          internship work.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={myPhoto} alt="Swapnali Munde" />
      </div>
    </section>
  );
}

export default Home;
