import { Component, React } from 'react';
import data from "./testCvData"

const loggedStudent = "test1"

export default class CvViewer extends Component {
    render() {
        const cvData = data
        return (
            <div>
                <h1>Curriculum Vitae</h1>
                <h2>{ cvData.name }</h2>
                <ul>
                    <li>{ cvData.dob }</li>
                    <li>{ cvData.email }</li>
                    <li>{ cvData.phoneNumber }</li>
                </ul>
                <ul>
                    <li>{ cvData.address.streetAddress }</li>
                    <li>{ cvData.address.city }</li>
                    <li>{ cvData.address.County }</li>
                </ul>
                <h2 ref="skills">Skills</h2>
                <ul>
                    <li>{ cvData.skills[0] }</li>
                    <li>{ cvData.skills[1] }</li>
                    <li>{ cvData.skills[2] }</li>
                    <li>{ cvData.skills[3] }</li>
                    <li>{ cvData.skills[4] }</li>
                    <li>{ cvData.skills[5] }</li>
                    <li>{ cvData.skills[6] }</li>
                </ul>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Technology used</th>
                    </tr>
                    <tr>
                        <td>{ cvData.projects[0].name }</td>
                        <td>{ cvData.projects[0].details }</td>
                        <td>{ cvData.projects[0].technology }</td>
                    </tr>
                    <tr>
                        <td>{ cvData.projects[1].name }</td>
                        <td>{ cvData.projects[1].details }</td>
                        <td>{ cvData.projects[1].technology }</td>
                    </tr>
                    <tr>
                        <td>{ cvData.projects[2].name }</td>
                        <td>{ cvData.projects[2].details }</td>
                        <td>{ cvData.projects[2].technology }</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Duration</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>{ cvData.experience[0].company }</td>
                        <td>{ cvData.experience[0].duration }</td>
                        <td>{ cvData.experience[0].details }</td>
                    </tr>
                </table>
            </div>
        )
    }
    };

// function makeSkills(dataList) {
//     let ul = document.createElement("ul");
//     this.MyRefs["skills"].appendChild(ul);
//     dataList.forEach(element => {
//         let li = document.createElement("li");
//         ul.appendChild(li);
//         li.innerHTML += element;
//     });
// }