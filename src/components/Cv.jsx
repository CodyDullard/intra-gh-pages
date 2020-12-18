import { Component, React } from 'react';
import data from "./testCvData"


export default class CvViewer extends Component {
    render() {
        const cvData = data
        const skillList = data.skills.map((element) =>
            <li>{ element }</li>
        );
        const projectBody = data.projects.map((element) =>
            <tr>
                <td>{ element.name }</td>
                <td>{ element.details }</td>
                <td>{ element.technology }</td>
            </tr>
        );
        const experienceBody = data.experience.map((element) =>
            <tr>
                <td>{ element.company }</td>
                <td>{ element.duration }</td>
                <td>{ element.details }</td>
            </tr>
        );
        return (
            <div>
                <h1>Curriculum Vitae</h1>
                <h2>{ cvData.name }</h2>
                <ul>
                    <li>Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;{ cvData.dob }</li>
                    <li>Email:&nbsp;&nbsp;&nbsp;&nbsp;{ cvData.email }</li>
                    <li>Phone:&nbsp;&nbsp;&nbsp;&nbsp;{ cvData.phoneNumber }</li>
                </ul>
                <h2>Address</h2>
                    <address>
                        <span class="adr">
                            <span class="street-address">{ cvData.address.streetAddress },</span><br></br>
                            <span class="city">{ cvData.address.city },</span><br></br>
                            <span class="county">{ cvData.address.County }</span><br></br>
                        </span>
                    </address>
                <h2 ref="skills">Skills</h2>
                <ul>{ skillList }</ul>
                <h2 >Projects</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Technology used</th>
                    </tr>
                    {projectBody}
                </table>
                <h2>Experience</h2>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Duration</th>
                        <th>Details</th>
                    </tr>
                    { experienceBody }
                </table>
            </div>
        )
    }
    };