import StyledHero from './Hero.styled';
import Button from '../Ui/Button';
import hero__img from '../../assets/hero.png';

const Hero = () => {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Covid Case Monitoring</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati veritatis, non quos, voluptate, at saepe inventore facere praesentium eligendi recusandae nostrum sequi assumenda animi voluptatum nulla excepturi numquam tempora vel.</p>
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img
            src={hero__img}
            alt=""
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;