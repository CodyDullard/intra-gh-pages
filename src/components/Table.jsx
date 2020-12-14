import { Component, React } from 'react';
import DataTable from 'react-data-table-component';

const loggedStudent = "test1"

const data = [
    {
        company: "Google",
        job_title: "SWE Intern",
        courses: "EC / CASE",
        final_date: "19-01-2021",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget commodo libero. Mauris congue consectetur vulputate. Maecenas magna dui, ultrices id fringilla ut, pulvinar eget ex. Aenean eu urna neque. Maecenas quis diam eu elit maximus consectetur eget et sem. Vivamus in purus dignissim, pharetra magna ut, vehicula urna. Pellentesque non bibendum nisl. Donec volutpat ornare eros id commodo. Cras ut venenatis massa, imperdiet pellentesque magna. ",
        applied_students: ["test1"]
    },
    {
        company: "Amazon",
        job_title: "SDE Intern",
        courses: "EC / CASE",
        final_date: "15-03-2021",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget commodo libero. Mauris congue consectetur vulputate. Maecenas magna dui, ultrices id fringilla ut, pulvinar eget ex. Aenean eu urna neque. Maecenas quis diam eu elit maximus consectetur eget et sem. Vivamus in purus dignissim, pharetra magna ut, vehicula urna. Pellentesque non bibendum nisl. Donec volutpat ornare eros id commodo. Cras ut venenatis massa, imperdiet pellentesque magna. ",
        applied_students: ["test2", "test3"]
    },
    {
        company: "Demonware",
        job_title: "SRE Intern",
        courses: "CASE",
        final_date: "10-12-2020",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget commodo libero. Mauris congue consectetur vulputate. Maecenas magna dui, ultrices id fringilla ut, pulvinar eget ex. Aenean eu urna neque. Maecenas quis diam eu elit maximus consectetur eget et sem. Vivamus in purus dignissim, pharetra magna ut, vehicula urna. Pellentesque non bibendum nisl. Donec volutpat ornare eros id commodo. Cras ut venenatis massa, imperdiet pellentesque magna. ",
        applied_students: ["test3"]
    }]

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
const ExpandableComponent = ({ data }) => data.description;

var now = Date.now()
console.log(now)

const conditionalRowStyles = [
    {
        when: row => toTime(row.final_date) < now,
        style: {
            backgroundColor: "rgb(255, 0, 0)",
            color: "white"
        }
    },
    {
        when: row => applied(row.applied_students),
        style: {
            backgroundColor: "rgb(0, 255, 0)",
            color: "white"
        }
    }
]

export default class Table extends Component {
    render() {
        return (
            <div class="job-table" aria-label="Job Table" >
                <DataTable
                title="Jobs"
                columns={columns}
                data={data}
                keyField="company"
                expandableRows
                highlightOnHover
                expandableRowsHideExpander
                expandOnRowClicked
                defaultSortField="company"
                expandableRowsComponent={<ExpandableComponent />}
                conditionalRowStyles={conditionalRowStyles}
            />
          </div>
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