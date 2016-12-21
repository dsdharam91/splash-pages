import assign from 'lodash/object/assign';
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

export default class Slider extends React.Component {
  displayName = 'Slider'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    prev: React.PropTypes.node.isRequired,
    next: React.PropTypes.node.isRequired,
    navigationClassName: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick(event) {
    event.preventDefault();
    const index = this.state.activeIndex;
    if (index > 0) {
      this.setState({ activeIndex: index - 1 });
    }
  }

  handleNextClick(event) {
    event.preventDefault();
    const index = this.state.activeIndex;
    if (index + 1 < this.props.children.length) {
      this.setState({ activeIndex: index + 1 });
    }
  }

  changeSlide() {
    if (this.state.activeIndex + 1 < this.props.children.length) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    }
  }

  handleDotClick = (n) => {
    this.setState({ activeIndex: n });
  }

  getSlideClasses = (slideIndex) => {
    return classNames('slider-nav__counter', {
      'is-active': slideIndex === this.state.activeIndex,
    });
  }

  render() {
    const children = this.props.children[this.state.activeIndex];

    const prev = React.cloneElement(this.props.prev, assign({}, this.props.prev.props, {
      onClick: this.handlePrevClick,
    }));

    const next = React.cloneElement(this.props.next, assign({}, this.props.next.props, {
      onClick: this.handleNextClick,
    }));

    const isFirstSlideActive = this.state.activeIndex === 0;
    const isLastSlideActive = this.state.activeIndex + 1 === this.props.children.length;

    const slideCounter = this.props.children.map((el, index) => {
      return (
        <span key={ index } onClick={ _.partial(this.handleDotClick, index) }
        className={ this.getSlideClasses(index) }></span>
      );
    });

    return (
      <div>
        <div className={ this.props.navigationClassName }>
          { !isFirstSlideActive && prev}
          { !isLastSlideActive && next}
        </div>

        { children }
        { slideCounter }
      </div>
    );
  }
}
