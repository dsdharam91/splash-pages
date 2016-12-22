import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';
import InlineMessage from '../../components/inline-message/inline-message';
import Href from '../../components/href/href';
import Message from '../../components/message/message';

import NewToDdIcon from '../../icons/svg/new-to-dd';
import SmallBusinessIcon from '../../icons/svg/small-business';
import UpdateDdIcon from '../../icons/svg/update-dd';
import ConnectTeamsIcon from '../../icons/svg/connect-teams';
import EuropeIcon from '../../icons/svg/globe-europe';
import MazeFlowIcon from '../../icons/svg/maze-flow';
import PoundRealTimeIcon from '../../icons/svg/pound-real-time';

const HERO_CARDS = [
  {
    link: 'small_medium_businesses',
    label: 'Small Businesses',
    title: <span>A Simple <br/>Direct Debit Solution</span>,
    description: 'Perfect for businesses with cashflow and admin issues',
    icon: <SmallBusinessIcon className='svg-icon__image' />,
  },
  {
    link: 'new_to_direct_debit',
    label: 'Medium & Large Businesses',
    title: <span>New to <br/>Direct Debit</span>,
    description: 'Moving away from credit cards or debit cards?',
    icon: <NewToDdIcon className='svg-icon__image' />,
  },
  {
    link: 'existing_direct_debit_user',
    label: 'Medium & Large Businesses',
    title: <span>Optimise your <br/>Direct Debit</span>,
    description: 'Looking for a better way to take recurring payments?',
    icon: <UpdateDdIcon className='svg-icon__image' />,
  },
];

export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <div className='page-hero--home u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner page-hero__inner--lowered'>
              <div className='page-hero__text u-padding-Txl'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <InlineMessage pointer='hero.header' locale="en">Simple, digital, powerful.</InlineMessage><br/>
                  <InlineMessage pointer='hero.header' locale="en">Direct Debit as it should be.</InlineMessage>
                </h1>
                <div className={'u-text-heading u-text-center u-color-invert ' +
                                'u-text-m u-text-light u-margin-Vxs u-text-no-smoothing page-hero__text__desc--shortened'}>
                  <Message pointer='hero.desc' />
                </div>
                <div className='u-padding-Tl'>
                  <h2 className='u-color-invert u-text-center u-text-light u-text-no-smoothing'>
                    How we can help
                  </h2>
                  <div className="site-container u-margin-Bm u-margin-Txl grid">
                    { HERO_CARDS.map((card) => {
                      return (
                        <div className='grid__cell u-size-1of3 u-text-center' key={ card.link }>
                          <IfLinkExists to={ card.link }>
                            <Link to={ card.link } className='u-link-clean'>
                              <div className='hero-card'>
                                <div className='hero-card__label u-background-light-primary'>
                                  <p className='u-text-upcase u-margin-Vxxs'>
                                    { card.label }
                                  </p>
                                </div>
                                <figure className='svg-icon u-center u-margin-Ts'>
                                  { card.icon }
                                </figure>
                                <h2 className='u-text-light u-text-m u-color-dark-gray u-text-no-smoothing u-margin-Bm'>
                                  { card.title }
                                </h2>
                                <p className='u-color-dark-gray u-margin-Bxm'>
                                  { card.description }
                                </p>
                                <span className='hero-card__button btn btn--small btn--hollow'>
                                  Read more
                                </span>
                              </div>
                            </Link>
                          </IfLinkExists>
                        </div>
                      );
                    }) }
                  </div>
                  <IfLinkExists to='developers'>
                    <p className='u-color-invert u-text-center u-text-s'>
                      Developer looking to integrate with our API?&nbsp;
                      <Link to='developers' className='hero-card__note-link u-text-underline u-color-invert u-text-semi'>
                        Find out more
                      </Link>
                    </p>
                  </IfLinkExists>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                You'll be in good company
              </h2>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-padding-Hxxl u-center'>
                <img src='/images/logos/pro-logos-colour@2x.png' />
              </div>
              <IfLinkExists to='stories'>
                <Link to='stories' className='btn btn--hollow u-margin-Ts u-margin-Bxxl'>
                  See more
                </Link>
              </IfLinkExists>
            </div>
          </div>
        </div>

        <IfLocale hasInstantSignup>
          <div className='u-background-light-primary u-text-center'>
            <div className='site-container u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Ready to get started?
                </h2>
                <Href to='signup.path' className='btn u-margin-Tm u-margin-Rm u-margin-Bxxs'>
                  Sign up
                </Href>
                <Link to='contact_sales' className='btn btn--hollow u-margin-Tm u-margin-Bxxs'>
                  <Message pointer='cta.pro' />
                </Link>
              </div>
            </div>
          </div>
        </IfLocale>

        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                Turn payments into a competitive advantage
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of2 u-margin-Bxxl'>
                <figure className='svg-icon u-pull-start u-size-1of6'>
                  <EuropeIcon className='svg-icon__image' />
                </figure>
                <div className='u-margin-Txxs u-padding-Lm u-pull-start u-size-5of6'>
                  <h3 className='u-text-heading u-color-dark-gray'>
                    Collect payments across Europe
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    We process Direct Debit payments for Bacs, SEPA and Autogiro through a single integration.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Bxxl'>
                <figure className='svg-icon u-pull-start u-size-1of6'>
                  <PoundRealTimeIcon className='svg-icon__image' />
                </figure>
                <div className='u-margin-Txxs u-padding-Lm u-pull-start u-size-5of6'>
                  <h3 className='u-text-heading u-color-dark-gray'>
                    Stay a step ahead of churn
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Real-time notifications of failed or cancelled payments enable swift issue resolution.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Bxl'>
                <figure className='svg-icon u-pull-start u-size-1of6'>
                  <MazeFlowIcon className='svg-icon__image' />
                </figure>
                <div className='u-margin-Txxs u-padding-Lm u-pull-start u-size-5of6'>
                  <h3 className='u-text-heading u-color-dark-gray'>
                    Create advanced payment flows
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Bxl'>
                <figure className='svg-icon u-pull-start u-size-1of6'>
                  <ConnectTeamsIcon className='svg-icon__image' />
                </figure>
                <div className='u-margin-Txxs u-padding-Lm u-pull-start u-size-5of6'>
                  <h3 className='u-text-heading u-color-dark-gray'>
                    Use data to connect & power teams
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Feed real-time payments data to internal teams for smarter customer interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                We partner with the best for effortless integrations
              </h2>
              <div className='u-text-center u-margin-Vm u-padding-Vs u-padding-Hxxl u-center'>
                <img src='/images/logos/partner-logos@2x.png' />
              </div>
              <IfLinkExists to='partners'>
                <Link to='partners' className='btn btn--hollow u-margin-Ts u-margin-Bxxl'>
                  See more
                </Link>
              </IfLinkExists>
            </div>
          </div>
        </div>

      </Translation>
    );
  }
}
