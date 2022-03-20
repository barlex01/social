import avatar from "../../img/avatar.JPG";
import S from './SectionAboutMe.module.css'


const AboutMe = () => {
    return (
        <section className="about-me">
            <div className={S.wrapper__about_me}>
              <div >
                <img src={avatar} alt="" className={S.photo} />
              </div>

              <div className={S.my_name}>
                <p className={S.my_name__text} >Alexey R.</p>
                <div className={S.wrapper}>
                   <div className={S.my_info}>
                  <p > Date of Birth:</p>
                  <p >City: </p>
                  <p >Education:</p>
                  <p >
                    Web Site:

                  </p>
                </div>
                <div className={S.my__info2}>
                  <p >  27 March</p>
                  <p > Los Angeles</p>
                  <p >Higher MGTU</p>
                  <p >
                    <a href="https://t.me/Barlex01" className={S.web__link}>
                      https://t.me/Barlex01
                    </a>
                  </p>
                </div>
                </div>
               
              </div>
              
            </div>
          </section>
          
    )
}





export default AboutMe;