import { Component, React } from 'react';
import DataTable from 'react-data-table-component';
import "../styles/main.css";

export default class Table extends Component {
    render() {
        return (
            <div>
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
