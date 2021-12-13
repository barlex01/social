import avatar from "../avatar.JPG";
import S from './SectionAboutMe.module.css'


const AboutMe = () => {
    return (
        <section className="about-me">
            <div className={S.wrapper__about_me}>
              <div >
                <img src={avatar} alt="" className={S.photo} />
              </div>
              <div className={S.my_name}>
                <p className={S.my_name__text}>Alexey R.</p>
                <div className={S.my_info}>
                  <p > Date of Birth: 27 March</p>
                  <p className="city">City: Los Angeles</p>
                  <p className="education">Education: higher MGTU</p>
                  <p className="web">
                    Web Site:{" "}
                    <a href="https://t.me/Barlex01" className={S.web__link}>
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