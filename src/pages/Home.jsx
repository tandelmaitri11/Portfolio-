import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-slate-950"
      >
        <h1 className="text-5xl text-white">Home</h1>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-slate-900"
      >
        <h1 className="text-5xl text-white">About</h1>
      </section>

      <section
        id="skills"
        className="h-screen flex items-center justify-center bg-slate-950"
      >
        <h1 className="text-5xl text-white">Skills</h1>
      </section>

      <section
        id="experience"
        className="h-screen flex items-center justify-center bg-slate-900"
      >
        <h1 className="text-5xl text-white">Experience</h1>
      </section>

      <section
        id="education"
        className="h-screen flex items-center justify-center bg-slate-950"
      >
        <h1 className="text-5xl text-white">Education</h1>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-slate-900"
      >
        <h1 className="text-5xl text-white">Projects</h1>
      </section>

      <section
        id="certificates"
        className="h-screen flex items-center justify-center bg-slate-950"
      >
        <h1 className="text-5xl text-white">Certificates</h1>
      </section>

      <section
        id="internships"
        className="h-screen flex items-center justify-center bg-slate-950"
      >
        <h1 className="text-5xl text-white">Internships</h1>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-slate-900"
      >
        <h1 className="text-5xl text-white">Contact</h1>
      </section>
    </>
  );
}

export default App;