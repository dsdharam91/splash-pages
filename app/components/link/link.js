import assign from 'lodash/object/assign';
import React, { PropTypes, Component } from 'react';
import Message from '../message/message';
import Router from 'react-router';
const RouterLink = Router.Link;

export default class Link extends Component {
  displayName = 'Link'

  static propTypes = {
    pointer: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    params: PropTypes.object,
    query: PropTypes.object,
    activeStyle: PropTypes.object,
    onClick: PropTypes.func,
  }

  static contextTypes = {
    routeName: PropTypes.string.isRequired,
  }

  render() {
    const { routeName } = this.context;
    const props = assign({}, this.props);
    if (props.to === 'contact_sales') {
      props.query = { s: routeName };
    }

    return (
      <RouterLink {...props} activeClassName='is-active'>
        { this.props.pointer &&
          (<Message pointer={this.props.pointer} />) || this.props.children }
      </RouterLink>
    );
  }
}
