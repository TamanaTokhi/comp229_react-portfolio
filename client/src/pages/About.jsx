import profilePicture from "../assets/pic.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Profile Picture */}
        <div className="about-image">
          <img
            src={profilePicture}
            alt="Tamana Tokhi"
            className="profile-picture"
          />
        </div>

        {/* About Me Information */}
        <div className="about-content">
          <h1>About Me</h1>

          <h2>Hi, I'm Tamana Tokhi</h2>

          <p>
            I am a Software Engineering Technology student at Centennial
            College. I am interested in web development and software
            development.
          </p>

          <p>
            I enjoy learning new technologies and creating useful,
            user-friendly websites and applications.
          </p>

          <p>
            I am continuously developing my programming, problem-solving,
            and technical skills.
          </p>
        </div>

      </div>
    </section>
  );
}