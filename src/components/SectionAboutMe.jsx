import avatar from "../avatar.JPG";


const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="wrapper__about-me">
              <div className="my-photo">
                <img src={avatar} alt="" className="photo" />
              </div>
              <div className="my-name">
                <p className="my-name__text">Alexey R.</p>
                <div className="my-info">
                  <p className="date-of-bird"> Date of Birth: 27 March</p>
                  <p className="city">City: Los Angeles</p>
                  <p className="education">Education: higher MGTU</p>
                  <p className="web">
                    Web Site:{" "}
                    <a href="https://t.me/Barlex01" className="web__link">
                      https://t.me/Barlex01
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default AboutMe;