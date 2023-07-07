import StyledAbout from "./AboutPage.styled";
import action_img from "../../assets/about_img/action.png";
import aware_img from "../../assets/about_img/aware.png";
import prepare_img from "../../assets/about_img/prepare.png";

const AboutPage = () => {
  return (
    <StyledAbout>
      <div className="title">
        <h1>How to Prevent COVID-19</h1>
      </div>
      <section>
        <div className="about__left">
          <h2>Action</h2>
          <p>1. Avoid close contact with people who have some flu-like symptoms.</p>
          <p>2. Avoid touching your eyes, nose, or mouth with unwashed hands.</p>
          <p>3. Avoid sharing cups, plates or other personal items and disinfect all surfaces that are touched frequently.</p>
        </div>
        <div className="about__right">
          <img
            src={action_img}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="about__left">
          <h2>Be Aware</h2>
          <p>1. Through close contact with an infected person.</p>
          <p>2. By touching contaminated objects or surfaces and then touching you mouth, nose, or eyes.</p>
          <p>3. People with pre-existing conditions such as diabetes and heart disease.</p>
        </div>
        <div className="about__right">
          <img
            src={aware_img}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="about__left">
          <h2>Prepare</h2>
          <p>1. Make sure to obtain all information from a reliable source.</p>
          <p>2. Wash your hand regularly with soap and water or use an alcohol-based gel.</p>
          <p>3. Cover your mouth with the inside of your elbow when you cough or sneeze.</p>
        </div>
        <div className="about__right">
          <img
            src={prepare_img}
            alt=""
          />
        </div>
      </section>
    </StyledAbout>
  )
}

export default AboutPage;