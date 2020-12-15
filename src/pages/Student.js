import Table from"../components/Table";

function Student() {
    return (
      <div title="Job section" aria-label="Job Section" id="job-display">
        <h2>Student</h2>
        <label for="search" class="visuallyhidden">Search jobs by keyword:  </label>
        <input type="text" placeholder="Search by Jobs keyword" name="search" id="search" aria-placeholder="Search Jobs by Keyword"></input>
        <Table />
      </div>
    );
  }
  

export default Student;