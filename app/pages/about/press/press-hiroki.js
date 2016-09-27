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

            <p className='para'>Once Hiroki has completed rehab and recovery he will be back in the GoCardless office full time.  In the meantime, the company will continue to execute against his plan with his active involvement.</p>

            <p className='para'>Hiroki, the team, and shareholders all appreciate the strong show of support received from the community.</p>
          </div>
        </div>
      </Page>
    );
  }
}
