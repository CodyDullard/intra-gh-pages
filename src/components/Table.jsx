import { Component, React } from 'react';
import data from "./testData"
import DataTable from 'react-data-table-component';

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

export default class Table extends Component {
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