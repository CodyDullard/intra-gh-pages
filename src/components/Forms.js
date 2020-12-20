/* eslint-disable */
import React from 'react';
import DataTable from 'react-data-table-component';
import "../styles/main.css";

const loggedStudent = "test1"
let text = "No data to display"

export default class CompanyForm extends React.Component{ 
  constructor(props){ 
    super(props) 
    this.state = { company:'', title:'', location:'', description:'',extra:null, courses: "", enddate:"", submitted: false} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 
    
  handleSubmit(event){ 
    const { company, title, location, description, extra, courses, enddate} = this.state 
    event.preventDefault() 
    this.setState({submitted: true});
    data.push({company: company, job_title: title, courses: courses.split(/(\s+)/), final_date: enddate, description: description, applied_students:[]})
    text = "Waiting for new entry."
  } 
  
  handleChange(event){ 
    this.setState({submitted: false});
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  } 

  render(){ 
    return(
      <div>
      <form onSubmit={this.handleSubmit}> 
        <div> 
          <label for='labels'>Company Name: </label> 
          <input  
            name='company'
            placeholder='Company Name' 
            value = {this.state.company} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label for='labels'>Job Tile: </label> 
          <input 
            name='title' 
            placeholder='Job Tile'
            value={this.state.title} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label for='labels'>Location: </label> 
          <input 
            name='location' 
            placeholder='Location'
            value={this.state.Location} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label for='labels'>About Company: </label> 
          <input 
            name='description' 
            placeholder='About Company'
            value={this.state.description} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div> 
          <label for='labels'>Skills Required: </label> 
          <input 
            name='extra' 
            placeholder='Skills Required'
            value={this.state.extra} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div> 
          <label for='labels'>End Date: </label> 
          <input 
            name='enddate' 
            placeholder='End Date'
            value={this.state.enddate} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div> 
          <label for='labels'>Courses: </label> 
          <input 
            name='courses' 
            placeholder='Courses'
            value={this.state.courses} 
            onChange={this.handleChange} 
          /> 
        </div>
        <div> 
          <button class="gradient-button">Add Job</button> 
        </div> 
      </form> 

      {(this.state.submitted && <Table/>) || <h2><center>{text}</center></h2>} </div>
    ) 
  } 
} 


const data = []

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
console.log(now)

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

class Table extends React.Component {
    render() {
        return (
            <DataTable
            title="Jobs"
            columns={columns}
            data={data}
            keyField="company"
            expandableRows
            highlightOnHover
            expandOnRowClicked
            defaultSortField="company"
            expandableRowsComponent={<ExpandableComponent />}
            conditionalRowStyles={conditionalRowStyles}
            theme="dark"
        />
        )
    }
    };

function toTime(d) {
    console.log(d.split("-"))
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