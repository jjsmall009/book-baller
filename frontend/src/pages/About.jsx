// About page
import img from "../assets/write mana.jpg";

const About = () => {
  return (
    <main className="container page about-page">
      <img src={img} alt="writing man image" className="about-img" />
      <div className="about-content">
        <h1>The Story of Book Baller</h1>
        <p>
          Book Baller is a simple yet powerful reading tracker web app that allows users to keep
          track of what they are reading.
        </p>
        <p>
          After using Goodreads for so many years, and even a plain old spreadsheet to keep track of
          what I was reading, I decided that I should take matters into my own hands create a custom
          solution for tracking my reading.
        </p>
        <p>
            
        </p>
      </div>
    </main>
  );
};

export default About;
