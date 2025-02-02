import React from 'react';

function MainView() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <section id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
                <div className="col-md-6 col-lg-5 order-md-last img" style={{ backgroundImage: 'url(images/bg_1.png)' }}>
                  <div className="overlay"></div>
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="text">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">I'm <span>Charlie Lohonauman</span></h1>
                    <h2 className="mb-4">A Backend Developer</h2>
                    <p>
                      <a href="#about-section" className="btn btn-primary py-3 px-4">Hire me</a>
                      <a href="#about-section" className="btn btn-white btn-outline-white py-3 px-4">More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(/images/bg_1.png)' }}></div>

              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>Born as the sun so that I could bring light to many people.</p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex"><span>Name:</span> <span>Charlie Adi Putra Lohonauman</span></li>
                    <li className="d-flex"><span>Date of birth:</span> <span>April 04, 2001</span></li>
                    <li className="d-flex"><span>Address:</span> <span><a href="https://maps.app.goo.gl/qSyXdeEJSEn7pVq57">Perumahan Puri Manado Permai Blok KM06, Kota Manado, Sulawesi Utara 95251</a></span></li>
                    <li className="d-flex"><span>Zip code:</span> <span>95251</span></li>
                    <li className="d-flex"><span>Email:</span> <span>charlie.adi01@gmail.com</span></li>
                    <li className="d-flex"><span>Phone:</span> <span>+6282259866048</span></li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text">
                  <p className="mb-4">
                    <span className="number" data-number="30">0</span>
                    <span>Projects completed</span>
                  </p>
                  <p><a href="/pdf/CV-CHARLIE LOHONAUMAN.pdf" download className="btn btn-primary py-3 px-3">Download CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="ftco-section ftco-no-pb" id="resume-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-10 heading-section text-center ftco-animate">
              <h1 className="big big-2">Resume</h1>
              <h2 className="mb-4">My Resume</h2>
              <p>Born as the sun so that I could bring light to many people.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="resume-wrap ftco-animate">
                <span className="date">2023-2024</span>
                <h2>Backend Programmer</h2>
                <span className="position">North Sulawesi Province Regional Education Office</span>
                <p className="mt-4">Building applications in the form of microservices for all schools, teachers, and students throughout North Sulawesi.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center ftco-animate">
              <p><a href="/pdf/CV-CHARLIE LOHONAUMAN.pdf" download className="btn btn-primary py-3 px-3">Download CV</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="ftco-section" id="skills-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Skills</h1>
              <h2 className="mb-4">My Skills</h2>
              <p>Born as the sun so that I could bring light to many people.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="progress-wrap ftco-animate text-center">
                <div className="card bg-primary">
                  <img src="images/1.png" alt="PHP" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Projects</h1>
              <h2 className="mb-4">My Projects</h2>
              <p>The following are some of the projects I have worked on, especially microservices-based projects.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-1.png)' }}>
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3><a href="https://sipandai-dikda.sulutprov.go.id/">Sistem Informasi Pelayanan Data Pendidikan (SIPANDAI)</a></h3>
                  <span>Fullstack Web Development</span>
                </div>
              </div>
            </div>
            {/* Add more projects */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainView;
