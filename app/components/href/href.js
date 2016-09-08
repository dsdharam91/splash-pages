import assign from 'lodash/object/assign';
import React, { Component } from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import Message from '../message/message';
import { getMessage } from '../../components/intl/intl';

export default class Href extends Component {
  displayName = 'Href'

  static propTypes = {
    pointer: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  render() {
    const { messages } = this.context;
    const link = getMessage(messages, this.props.to);
    const href = link.indexOf('@') !== -1 ? 'mailto:' + link : link;
    const props = assign({}, this.props, {
      href: href,
    });

    return (
      <a {...props}>
        { this.props.pointer &&
          (<Message pointer={this.props.pointer} />) || this.props.children || link }
      </a>
    );
  }
}
