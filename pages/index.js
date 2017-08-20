import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import Timetable from '../components/Timesheet';

export default withData(props =>
  <DefaultCon {...props}>
    <Timetable />
  </DefaultCon>
);
