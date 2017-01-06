import React from 'react';
import Accordion from '../accordion/accordion';
import Popover from '../popover/popover';

export default class HeaderNavGroup extends React.Component {
  displayName = 'HeaderNavGroup'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    toggle: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <Accordion children={this.props.children} toggle={this.props.toggle} />
        <Popover children={this.props.children} toggle={this.props.toggle} styles="u-sm-hidden u-md-hidden" />
      </div>
    );
  }
}
