import React from 'react';
import Translation from '../../../components/translation/translation';
import Link from '../../../components/link/link';
import { team } from '../../../constants/team';

export default class TeamEn extends React.Component {
  displayName = 'TeamEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                We are a small team building a new payment network for the internet.
              </h2>
              <p className='u-text-heading-light u-text-xs u-color-meta'>
                Interested in joining the team?<br />
                Take a look at our <Link to='jobs' className='u-link-clean ku-link-color-meta u-text-underline'>
                  available positions
                </Link>
              </p>
            </div>
            <div className='grid__cell u-size-2of3'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>Working here </h2>
              <span className='u-text-heavy u-color-heading'></span>
              <span className='u-color-p'>
               <p className='para'>
                Building a great company is as important to us as building a
                great business: we have a strong culture and we are constantly
                working to strengthen it. We hire talented people, tackle exciting
                challenges, and provide a great working environment that enables
                everyone to do their best work, to learn and grow and to inspire
                each other.
               </p>
               <p className='para'>
                <strong>We work collaboratively</strong>: we prize team success
                over individual accomplishment, and we enjoy working together.
                We believe that surrounding yourself with talented people is
                the best way to do great work.
               </p>
              <p className='para'>
               <strong>We are curious</strong>: we care deeply about learning
               and personal development. We take time to learn so that we can
               progress, whether through conferences and courses or taking on
               challenges. We learn from our successes and our mistakes, and
               we regularly exchange direct, useful feedback so that we can be
               better.
              </p>
              <p className='para'>
               <strong>Moving fast matters</strong>: we focus on the things
               that have the most impact. We build to last so that we can move
               fast in future as well as right now.
              </p>
              <p className='para'>
               <strong>Take initiative</strong>: we are a team of owners, and
               we lead our own work. Decision making is distributed. We
               encourage initiative and everyone is empowered to make
               improvements wherever possible.
              </p>
            </span>
            </div>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Bxl'>
            <div className='grid__cell u-size-1of3'>
              <img src='/images/office/office-picnic-table.jpg' />
            </div>
            <div className='grid__cell u-size-2of3'>
              <img src='/images/office/office-support-booths.jpg' />
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
