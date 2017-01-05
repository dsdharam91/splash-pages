import React from 'react';
import classNames from 'classnames';

export default class Accordion extends React.Component {
  displayName = 'Accordion'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    toggle: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { isActive: false };

    this.handleClick = this.handleClick.bind(this);
    // this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('click', this.handleDocumentClick);
  // }

  handleClick(event) {
    event.preventDefault();
    if (this.state.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  // handleDocumentClick(event) {
  //   const node = this.findContentNode();
  //   if (node && !node.contains(event.target)) {
  //     this.hide();
  //   }
  // }

  show() {
    this.setState({ isActive: true });
    // window.addEventListener('click', this.handleDocumentClick);
    // Wait until the element is focusable and prevent the opening click
    // closing when it bubbles to the window
    // setTimeout(() => {
    //   window.addEventListener('click', this.handleDocumentClick);
    //   this.findContentNode().focus();
    // }, 0);
  }

  hide() {
    this.setState({ isActive: false });
    // window.removeEventListener('click', this.handleDocumentClick);
  }

  // findContentNode() {
  //   return React.findDOMNode(this.refs.popoverContent);
  // }

  render() {
    const classes = {
      'u-is-visible': this.state.isActive,
      'u-hidden': !this.state.isActive,
    };

    const accordionStyle = {
      backgroundColor: 'antiquewhite',
    };

    return (
      <div style={accordionStyle} className='u-md-hidden'>
        <span onClick={this.handleClick}>
          {this.props.toggle}
        </span>
        <div>
          <div {...this.props}
          className={classNames(this.props.className, classes)}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
