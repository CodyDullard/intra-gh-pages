/* eslint-disable */
import CompanyForm from "../components/Forms";
import "../styles/main.css";

function Company() {
    return (
      <body>
        <section>
          <div id="job-display">
            <h2>Company</h2>
            <CompanyForm />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#08070c" fill-opacity="1" d="M0,0L48,26.7C96,53,192,107,288,106.7C384,107,480,53,576,42.7C672,32,768,64,864,106.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
      </body>
    );
  }
  

export default Company;