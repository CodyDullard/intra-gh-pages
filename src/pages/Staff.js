/* eslint-disable */
import Table from"../components/Table";
import StaffTable from "../components/StaffTable";
import "../styles/main.css";

function Staff() {
    return (
      <body>
        <section>
          <div className = "mytable">
            <h2>Staff</h2>
            <StaffTable/>
          </div>
        </section>
      </body>
    );
  }
  

export default Staff;