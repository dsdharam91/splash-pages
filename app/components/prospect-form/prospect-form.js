import includes from 'lodash/collection/includes';
import assign from 'lodash/object/assign';
import request from 'superagent';
import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import {getMessage} from '../../components/intl/intl';
import {PropTypes} from '../../helpers/prop-types/prop-types';
import classNames from 'classnames';
import {trackEvent} from '../../helpers/gtm-tracker/gtm-tracker';

const prospectTypes = {
  sales: {
    endpoint: '/api/v1/prospects/sales',
    trackingLabel: 'ContactSales',
  },
  holding: {
    endpoint: '/api/v1/prospects/sales',
    trackingLabel: 'ContactSales',
  },
};

const ProspectFormPropTypes = {
  prospectType(props, propName) {
    const types = Object.keys(prospectTypes);
    const value = props[propName];
    if (!includes(types, value)) {
      throw new TypeError(`prospectType (${value}) is not allowed (${types})`);
    }
  },
};

export default class ProspectForm extends React.Component {
  displayName = 'ProspectForm'

  static propTypes = {
    prospectType: ProspectFormPropTypes.prospectType,
  }

  static contextTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
      isSubmitting: false,
      errorMessage: '',
      responseData: null,
      formData: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target;
    var formData = assign({}, this.state.formData, {
      [input.name]: input.value,
    });

    // Unset unselected checkboxes or radio buttons
    if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
      delete formData[input.name];
    }

    this.setState({ formData: formData });
  }

  onSubmit(event) {
    const { prospectType } = this.props;
    const { currentLocale, pathname } = this.context;
    const { trackingLabel } = prospectTypes[prospectType];

    const formData = assign({}, this.state.formData, {
      'prospect[metadata][locale]': currentLocale,
      'prospect[metadata][path]': pathname,
    });

    const oldTitle = window.document.title;
    document.title = 'Saving...';
    this.setState({ isSubmitting: true });

    request
      .post(event.target.action)
      .type('form')
      .accept('application/json')
      .send(formData)
      .end((err, response) => {
        trackEvent(trackingLabel);
        document.title = oldTitle;
        this.setState({ isSubmitting: false });

        if (response.ok) {
          // Scroll to top showing notification
          window.scrollTo(0, 0);
          this.setState({ isSuccess: true });
          this.setState({ responseData: response && response.data });
        } else {
          console.error(err);
          this.setState({ isSuccess: false });
          const error = response.body && response.body.error || response.text;
          this.setState({ errorMessage: error });
        }
      });

    event.preventDefault();
  }

  render() {
    const { messages } = this.context;
    const { prospectType } = this.props;
    const { endpoint } = prospectTypes[prospectType];
    const size = this.state.responseData && this.state.responseData.size || 'default';

    let salesForm = (
      <div>
        <form acceptCharset='UTF-8' action={endpoint} method='post' onChange={this.handleChange} onSubmit={this.onSubmit}>
          <input className='u-is-hidden' id='prospect_nofill' name='prospect[nofill]' placeholder='Do not fill me in' type='email' />

          <div className={classNames({
            'u-is-hidden notice notice--error u-margin-Bm': true,
            'u-is-visible': !this.state.isSuccess,
          })}>
            { this.state.errorMessage }
          </div>
          <div className={classNames({
            'u-is-hidden notice notice--success u-margin-Bm': true,
            'u-is-visible': this.state.isSuccess,
          })}>
            <Message pointer={`prospect_form.sales.success_messages.${size}`} />
          </div>

          <label className='label label--stacked' htmlFor='prospect_name'>
            <Message pointer='prospect_form.sales.name_label' />
          </label>
          <input className='input input--stacked' id='prospect_name' name='prospect[name]'
            placeholder={getMessage(messages, 'prospect_form.sales.name_placeholder')} required type='text' />

          <label className='label label--stacked' htmlFor='prospect_email'>
            <Message pointer='prospect_form.sales.email_label' />
          </label>
          <input className='input input--stacked' id='prospect_email' name='prospect[email]'
            placeholder={getMessage(messages, 'prospect_form.sales.email_placeholder')} required type='email' />

          <label className='label label--stacked' htmlFor='prospect_phone_number'>
            <Message pointer='prospect_form.sales.phone_label' />
          </label>
          <input className='input input--stacked' id='prospect_phone_number' name='prospect[phone_number]'
            placeholder={getMessage(messages, 'prospect_form.sales.phone_placeholder')} required type='text' />

          <Translation locales={['en-GB']}>
            <label className='label label--stacked' htmlFor='prospect_metadata_number_of_payments'>
              How many payments could we have helped you collect last month?
            </label>
            <select className='input--stacked'
            id='prospect_metadata_number_of_payments'
            name='prospect[metadata][number_of_payments]'
            defaultValue=''>
              <option value=''>Select number of payments taken last month</option>
              <option value='0-100'>0-100</option>
              <option value='100-500'>100-500</option>
              <option value='500+'>500+</option>
            </select>

            <label className='label label--stacked' htmlFor='prospect_metadata_message'>
              What are your business&apos;s specific needs?
            </label>
            <textarea className='input input--stacked input--textarea'
            id='prospect_metadata_message' name='prospect[metadata][message]' rows='3' />
          </Translation>

          <Translation locales='fr'>
            <label className='label label--stacked' htmlFor='prospect_metadata_number_of_payments'>
              Combien de paiements souhaitez-vous prélever chaque mois?
            </label>
            <select className='input--stacked'
            id='prospect_metadata_number_of_payments'
            name='prospect[metadata][number_of_payments]'
            defaultValue=''>
              <option value=''>Choisissez le nombre de paiements</option>
              <option value='0-50'>0-50</option>
              <option value='50+'>50+</option>
            </select>
          </Translation>

          <button className='btn btn--block u-margin-Tl' type='submit'>
            <Message pointer='prospect_form.sales.submit' />
          </button>
        </form>
      </div>
    );

    let holdingForm = (
      <div>
        <form acceptCharset='UTF-8' action={endpoint} method='post' onChange={this.handleChange} onSubmit={this.onSubmit}>
          <input className='u-is-hidden' id='prospect_nofill' name='prospect[nofill]' placeholder='Do not fill me in' type='email' />

          <div className={classNames({
            'u-is-hidden notice notice--error u-margin-Bm': true,
            'u-is-visible': !this.state.isSuccess,
          })}>
            { this.state.errorMessage }
          </div>

          <div className={classNames({
            'u-is-hidden notice notice--success u-margin-Bm': true,
            'u-is-visible': this.state.isSuccess,
          })}>
            <Message pointer={`prospect_form.sales.success_messages.${size}`} />
          </div>

          <input className='input email-capture__input'
          id='prospect_email' name='prospect[email]'
          placeholder={getMessage(messages, 'prospect_form.sales.email_placeholder')}
          required type='email' />

          <button type='submit' className='btn email-capture__btn'>
            <Message pointer='prospect_form.holding.submit'/>
          </button>
        </form>
      </div>
    );

    let form;

    if (prospectType === 'sales') {
      form = salesForm;
    } else if (prospectType === 'holding') {
      form = holdingForm;
    }

    return form;
  }
}
