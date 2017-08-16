import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props =>
  <DefaultCon {...props}>
    <div className="container">
      <p>Hi </p>
    </div>
  </DefaultCon>
);
