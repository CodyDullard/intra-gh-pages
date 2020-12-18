/* eslint-disable */
import React from 'react';
import Table from"../components/Table";
import "../styles/main.css";

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
    data.push({company: company, job_title: title, courses: courses.split(/(\s+)/), final_date: enddate, description: description, applied_students:[], location: location, extra: extra})
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
          <center><button class="gradient-button">Add Job</button></center>
        </div> 
      </form> 

      {(this.state.submitted && <Table data={ data } columns={ columns } expandComp = { <ExpandableComponent /> } />) || <h2><center>{text}</center></h2>} </div>
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

