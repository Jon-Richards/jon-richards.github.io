/**
 * @fileoverview
 * Contains the base page layout.
 */

const CSS = require('./page_template.scss');
import { React, Header, Preloader } from '../mediator';

/** The base layout used by every page. */
export class PageTemplate extends React.Component<
  {},
  {
    /** The overall status of the app. */
    status: 'ready' | '';
  }
> {
  /**
   * Timeout used for flagging the app as ready.
   * @todo remove when using actual data.
   */
  private initTimout = 0;

  constructor(props: PageTemplate['props']) {
    super(props);

    this.state = {
      status: '',
    };
  }

  /**
   * Waits before setting the app ready flag.
   * @todo Replace response handler when bootstrapping the app.
   */
  componentDidMount() {
    this.initTimout = window.setTimeout(() => {
      this.setState({ status: 'ready' });
    }, 500);
  }

  /** Unsubscribe from timeouts etc. before unmounting. */
  componentWillUnmount() {
    clearTimeout(this.initTimout);
  }

  /** Renders the page. */
  render(): JSX.Element {
    return (
      <div className={`${CSS['root']} ${'page--' + this.state.status}`}>
        <Preloader />
        <Header />
        <main className={CSS['main']}>{this.props.children}</main>
      </div>
    );
  }
}
