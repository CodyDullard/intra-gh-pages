import { Component, React } from 'react';
import DataTable from 'react-data-table-component';
import "../styles/main.css";

export default class Table extends Component {
    render() {
        return (
            <div>
                <label for="labels">Search jobs by keyword:  </label>
                <input type="text" placeholder="Search by Jobs keyword" name="search" id="search" aria-placeholder="Search Jobs by Keyword"></input>
                <br></br>
                <DataTable
                title="Jobs"
                columns={this.props.columns}
                data={this.props.data}
                keyField="company"
                expandableRows
                highlightOnHover
                expandOnRowClicked
                defaultSortField="company"
                expandableRowsComponent={ this.props.expandComp }
                conditionalRowStyles={ this.props.rowStyles }
                theme="dark"
            />
            </div>
        )
    }
    };
