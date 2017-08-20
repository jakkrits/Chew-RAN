import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props =>
  <DefaultCon title="Sign In" {...props}>
    <div className="container">
      <section className="section is-small">
        <article>
          <h1>ชิวเล๊าจ์ เพย์โรล ซิสเท็ม</h1>
        </article>
      </section>
    </div>
  </DefaultCon>
);
