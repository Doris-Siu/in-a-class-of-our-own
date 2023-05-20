import "./About.css";
import classImg from "../../Assets/cititec-class.jpg";


const About = () => (
	<main className="main-container">
		<div className="about-container">
			<div className="text-conatiner">
				<h1>About CodeYourFuture</h1>
				<p>
					We believe in a future where everyone has a real opportunity to lead a
					thriving life.
				</p>
				<p>
					CodeYourFuture (CYF) is a UK based non-profit organisation that trains
					some of the most deprived members of society to become web developers
					and helps them to find work in the tech industry. CYF students are
					trained in web development by volunteers from the tech industry,
					putting a strong emphasis on collaboration and product development
					through tech projects. 70% of CYF eligible grads have started tech
					careers. Graduates work in established companies like Capgemini, the
					FT, BBC, STV, Deloitte - and startups like Adzuna, Sensible Object,
					tlr and WeGotPop.
				</p>
			</div>
			<div className="img-container">
				<img className="class-img" src={classImg} alt="class" />
			</div>
		</div>
	</main>
);

export default About;
