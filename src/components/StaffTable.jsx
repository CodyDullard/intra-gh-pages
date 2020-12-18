/* eslint-disable */
import { Component, React } from 'react';
import data from "./staffData"
import DataTable from 'react-data-table-component';

const loggedStudent = "test1"

const columns = [
    {
        name: "Company",
        selector: "company",
        sortable: false
    },
    {
        name: "Company Contact Number",
        selector: "company_contact_number",
        sortable: false
    },
    {
        name: "Student Applicants",
        selector: "applied_students",
        sortable: false
    },
    {
        name: "Send CV to Company"
    },
    {
        name: "Student Secured Placements",
        selector: "successful_placement",
        sortable: false
    }


]

const ExpandableComponent = ({ data }) => <p >{ data.description }</p>;


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
            theme="dark"
        />
        )
    }
    };
