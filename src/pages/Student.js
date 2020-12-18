/* eslint-disable */
import { Component } from "react";
import Table from"../components/Table";
import "../styles/main.css";
import data from "../components/testJobData";
import CvViewer from "../components/Cv";



// Job Table
const loggedStudent = "test1"


const columns = [
    {
        name: "Company",
        selector: "company",
        sortable: false
    },
    {
        name: "Job Title",
        selector: "job_title",
        sortable: false
    },
    {
        name: "Courses",
        selector: "courses",
        sortable: false
    },
    {
        name: "Final Date",
        selector: "final_date",
        sortable: false
    }
]
const ExpandableComponent = ({ data }) => <p >{ data.description }</p>;

var now = Date.now()

const conditionalRowStyles = [
    {
        when: row => toTime(row.final_date) < now,
        style: {
            backgroundColor: "#FF652F",
            color: "black"
        }
    },
    {
        when: row => applied(row.applied_students),
        style: {
            backgroundColor: "#14A76C",
            color: "black"
        }
    }
]

function toTime(d) {
  return new Date(d.split("-")).getTime()
}

function applied(students) {
  let student;
  for(student of students) {
      if(student === loggedStudent) {
          return true
      }
  }
  return false
}


// Conditional Rendering
function CvButton(props) {
  return (
    <button class="gradient-button" onClick={props.onClick} value="View Cv">
      View Cv
    </button>
  )
};

function JobsButton(props) {
  return (
    <button class="gradient-button" onClick={props.onClick} value="View Jobs">
      View Jobs
    </button>
  )
};

function ViewComp(props) {
  const curComp = props.curComp;
  if (curComp) {
    return <Table data={ data } columns={ columns } expandComp = { <ExpandableComponent /> } rowStyles = { conditionalRowStyles }/>;
  } else {
    return <CvViewer />;
  }
}


// Main
class Student extends Component{
    constructor(props) {
      super(props);
      this.handleCvClick = this.handleCvClick.bind(this);
      this.handleJobsClick = this.handleJobsClick.bind(this);
      this.state = {viewing:  true};
    }

    handleCvClick() {
      this.setState({viewing: false})
    }

    handleJobsClick() {
      this.setState({viewing: true})
    }

    render() {
      const view = this.state.viewing;
      let button;
      if (view === true) {
        button = <CvButton onClick={this.handleCvClick} />
      } else {
        button = <JobsButton onClick={this.handleJobsClick} />
      }
      return (
        <body>
          <section tabIndex="0">
              <div title="Job section" aria-label="Job Section" id="job-display">
                <h2>Student</h2>
                { button }
                <ViewComp curComp={view} />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#08070c" fill-opacity="1" d="M0,0L48,26.7C96,53,192,107,288,106.7C384,107,480,53,576,42.7C672,32,768,64,864,106.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </section>
        </body>
      );
    }
  }
  

export default Student;