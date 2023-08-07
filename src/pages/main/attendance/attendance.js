// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/attendance.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

const AttendanceTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>user name</th>
          <th>ID</th>
          <th>centre</th>
          <th>roles</th>
          <th>attendance</th>
        </tr>
      </thead>
      <tbody>
        <AttendanceTableRowData />
        <AttendanceTableRowData />
        <AttendanceTableRowData />
        <AttendanceTableRowData />
        <AttendanceTableRowData />
        <AttendanceTableRowData />
        <AttendanceTableRowData />
      </tbody>
    </table>
  );
};

const AttendanceTableRowData = () => {
  return (
    <tr>
      <td></td>
      <td>javeed ali</td>
      <td>#123456789</td>
      <td>macca masjid centre charminar</td>
      <td>student</td>
      <td>present</td>
    </tr>
  );
};

const Attendance = () => {
  return (
    <section id="attendance">
      <div>
        <div className="attendance-heading flex-r-sb">
          <div>
            <span className="poppins-heading">attendance</span>
          </div>
          <UserProfile />
        </div>

        {/* attendnace buttons */}
        <div></div>

        {/* Attendance table */}
        <div id="attendance-table-id">
          <div className="attendance-table-div">
            <AttendanceTable />
          </div>
          <div className="attendance-table-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Attendance;
