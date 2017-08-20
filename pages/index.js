import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props =>
  <DefaultCon {...props}>
    <div className="container" style={{ width: '100%' }}>
      <section className="hero is-info">
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="images/bulma-type-white.png" alt="Logo" />{' '}
                </a>
              </div>
              <span className="nav-toggle">
                <span />
                <span />
                <span />
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-active">Home</a>
                <a className="nav-item">Examples</a>
                <a className="nav-item">Documentation</a>
                <span className="nav-item">
                  <a className="button is-info is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Title</h1>
            <h2 className="subtitle">Subtitle</h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  </DefaultCon>
);
