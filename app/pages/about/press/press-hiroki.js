import React from 'react';
import Page from '../../../components/page/page';

export default class PressHiroki extends React.Component {
  displayName = 'PressHiroki'

  render() {
    return (
      <Page isInverted={false}>
        <div className="site-container u-padding-Vxxl">
          <div className='u-padding-Vxl'>
            <h2 className="u-text-heading u-color-dark-gray u-text-light u-margin-Bm">Press statement — 27 Sept 2016</h2>
            <p className='para'>Hiroki Takeuchi, our co-founder and CEO, was involved in a serious cycle accident last week.</p>

            <p className='para'>Hiroki remains CEO and the company will continue to execute against his plan. Once he has completed rehab and recovery he will be back at GoCardless full time.</p>

            <p className='para'>The team and the shareholders have expressed their strong support and we ask that you respect Hiroki's privacy in the coming months so he can focus on his recovery.</p>
          </div>
        </div>
      </Page>
    );
  }
}
