import React from 'react';
import Translation from '../../../components/translation/translation';
import Link from '../../../components/link/link';
import FollowRedIcon from '../../../icons/svg/follow-red';
import IfLinkExists from '../../../components/if-link-exists/if-link-exists';

export default class TeamEn extends React.Component {
  displayName = 'TeamEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              What's it like working at GoCardless?
            </h2>
            <div className='videos-container--team u-center'>
              <iframe src='//player.vimeo.com/video/178159287?api=1&player_id=welcome-video' id='welcome-video' width='100%' height='310' frameBorder={0} />
            </div>

            <Link to='jobs'
            className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Tm'>
              View our open positions
            </Link>
          </div>
        </div>

        <div className='site-container'>
          <div className='u-shadow-large u-inline-block u-text-start'>
            <div className='u-size-1of3 u-pull-start team-quote u-relative u-padding-Am'>
              <div className='u-color-invert u-text-s'>
                "It’s nice having people who you can laugh with as well as get things done."
              </div>

              <div className='team-quote__credit u-padding-Am'>
                <div className='team-quote__photo team-quote__photo--kushal u-pull-start'>
                </div>

                <div className='u-color-invert u-text-upcase
                u-text-xxs u-text-semi u-pull-start u-padding-Ls'>
                  Kushal Pisavadia,<br/>
                  Software Engineer
                </div>
              </div>
            </div>

            <div className='u-size-2of3 u-pull-start team-photo team-photo--ross-playing-pool'>
            </div>

            <div className='u-size-full u-pull-start team-photo team-photo--team-at-bleachers'>
            </div>

            <div className='u-size-1of3 u-pull-start team-photo--tall team-photo--nicola-and-jess'>
            </div>

            <div className='u-size-2of3 u-pull-start'>
              <div className='u-size-1of2 u-pull-start team-quote u-relative u-padding-Am'>
                <div className='u-color-invert u-text-s'>
                  "Everyone here is someone I’d like to hang out with in my free time and that’s a wonderful environment to be in."
                </div>

                <div className='team-quote__credit u-padding-Am'>
                  <div className='team-quote__photo team-quote__photo--alina u-pull-start'>
                  </div>

                  <div className='u-color-invert u-text-upcase
                  u-text-xxs u-text-semi u-pull-start u-padding-Ls'>
                    Alina Solovjova,<br/>
                    Data Analyst
                  </div>
                </div>
              </div>

              <div className='u-size-1of2 u-pull-start team-photo team-photo--team-lunch'></div>

              <div className='u-size-1of2 u-pull-start team-photo team-photo--varsity-jacket'></div>

              <div className='u-size-1of2 u-pull-start team-quote u-relative u-padding-Am'>
                <div className='u-color-invert u-text-s'>
                  "Everyone pays lots of attention to keeping the whole team in the loop, creating a strong feeling of unity."
                </div>

                <div className='team-quote__credit u-padding-Am'>
                  <div className='team-quote__photo u-pull-start team-quote__photo--jutta'>
                  </div>

                  <div className='u-color-invert u-text-upcase
                  u-text-xxs u-text-semi u-pull-start u-padding-Ls'>
                    Jutta Frieden,<br/>
                    Country Lead
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <figure className='svg-icon u-center'>
              <FollowRedIcon className='svg-icon__image' />
            </figure>

            <p className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Txs'>
              Follow us
            </p>

            <p className='u-text-xs u-color-dark-gray u-margin-Tm'>
              You can find us on <a href='http://www.facebook.com/gocardless' target='_blank'>Facebook</a> & <a href='http://www.twitter.com/gocardless' target='_blank'>Twitter</a>. Follow along with our hashtag <a href='https://twitter.com/hashtag/LifeAtGoCardless' target='_blank'>#LifeAtGoCardless</a>.
            </p>
          </div>
        </div>

        <IfLinkExists to='jobs'>
          <hr className='section-divider'/>

          <div className='u-text-center u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  We're hiring
                </h2>

                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  Help us build a new payments network for the internet
                </p>

                <Link to='jobs'
                className='btn btn--hollow u-margin-Tm'>
                  View our open positions
                </Link>
              </div>
            </div>
          </div>
        </IfLinkExists>
      </Translation>
    );
  }
}
