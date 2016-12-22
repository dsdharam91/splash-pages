import React from 'react';
import Page from '../../components/page/page';
import Href from '../../components/href/href';
import Tabs from '../../components/tabs/tabs';

import CustomisableIntegration from '../../icons/svg/CustomisableIntegration';
import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import DevelopTestIterate from '../../icons/svg/DevelopTestIterate';
import Europe from '../../icons/svg/Europe';
import FutureProof from '../../icons/svg/FutureProof';
import PlugIn from '../../icons/svg/PlugIn';
import ReadPdf from '../../icons/svg/ReadPdf';

export default class Developers extends React.Component {
  displayName = 'Developers'

  render() {
    const phpCodeBlock = `<code class="code-examples__tabs-code language-php hljs">$subscription = $client-&gt;subscriptions()-&gt;create([
      <span class="hljs-string">"params"</span> =&gt; [
        <span class="hljs-string">"amount"</span> =&gt; <span class="hljs-number">1500</span>, <span class="hljs-comment">// 15 GBP in pence</span>
        <span class="hljs-string">"currency"</span> =&gt; <span class="hljs-string">"GBP"</span>,
        <span class="hljs-string">"interval_unit"</span> =&gt; <span class="hljs-string">"monthly"</span>,
        <span class="hljs-string">"day_of_month"</span> =&gt; <span class="hljs-string">"5"</span>,
        <span class="hljs-string">"links"</span> =&gt; [
          <span class="hljs-string">"mandate"</span> =&gt; <span class="hljs-string">"MD0000XH9A3T4C"</span>
                    <span class="hljs-comment">// Mandate ID from the last section</span>
        ],
        <span class="hljs-string">"metadata"</span> =&gt; [
          <span class="hljs-string">"subscription_number"</span> =&gt; <span class="hljs-string">"ABC1234"</span>
        ]
      ],
      <span class="hljs-string">"headers"</span> =&gt; [
        <span class="hljs-string">"Idempotency-Key"</span> =&gt; <span class="hljs-string">"random_subscription_specific_string"</span>
      ]
    ]);
    </code>`;

    const pythonCodeBlock = `<code class="code-examples__tabs-code language-python hljs">subscription = client.subscriptions.create(
        params={
            <span class="hljs-string">"amount"</span> : <span class="hljs-number">1500</span>, <span class="hljs-comment"># 15 GBP in pence    </span>
            <span class="hljs-string">"currency"</span> : <span class="hljs-string">"GBP"</span>,
            <span class="hljs-string">"interval_unit"</span> : <span class="hljs-string">"monthly"</span>,
            <span class="hljs-string">"day_of_month"</span> : <span class="hljs-string">"5"</span>,
            <span class="hljs-string">"links"</span>: {
                <span class="hljs-string">"mandate"</span>: <span class="hljs-string">"MD0000XH9A3T4C"</span>
                         <span class="hljs-comment"># Mandate ID from the last section</span>
            },
            <span class="hljs-string">"metadata"</span>: {
                <span class="hljs-string">"subscription_number"</span>: <span class="hljs-string">"ABC1234"</span>
            }
        }, headers={
            <span class="hljs-string">'Idempotency-Key'</span>: <span class="hljs-string">"random_subscription_specific_string"</span>
    })
    </code>`;

    const rubyCodeBlock = `<code class="code-examples__tabs-code language-ruby hljs">subscription = client.subscriptions.create(
      <span class="hljs-symbol">params:</span> {
        <span class="hljs-symbol">amount:</span> <span class="hljs-number">1500</span>, <span class="hljs-comment"># 15 GBP in pence</span>
        <span class="hljs-symbol">currency:</span> <span class="hljs-string">'GBP'</span>,
        <span class="hljs-symbol">interval_unit:</span> <span class="hljs-string">'monthly'</span>,
        <span class="hljs-symbol">day_of_month:</span> <span class="hljs-string">'5'</span>,
        <span class="hljs-symbol">links:</span> {
          <span class="hljs-symbol">mandate:</span> <span class="hljs-string">'MD0000XH9A3T4C'</span>
                  <span class="hljs-comment"># Mandate ID from the last section</span>
        },
        <span class="hljs-symbol">metadata:</span> {
          <span class="hljs-symbol">subscription_number:</span> <span class="hljs-string">'ABC1234'</span>
        }
      },
      <span class="hljs-symbol">headers:</span> {
        <span class="hljs-string">'Idempotency-Key'</span>: <span class="hljs-string">'random_subscription_specific_string'</span>
      }
    )
    </code>`;

    const javaCodeBlock = `<code class="code-examples__tabs-code language-java hljs"><span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CreateSubscription</span> </span>{
        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">void</span> <span class="hljs-title">main</span><span class="hljs-params">(String[] args)</span> </span>{
            System.out.println(System.getenv(<span class="hljs-string">"GC_ACCESS_TOKEN"</span>));
            GoCardlessClient client = GoCardlessClient.create(
                System.getenv(<span class="hljs-string">"GC_ACCESS_TOKEN"</span>),
                GoCardlessClient.Environment.SANDBOX
            );
            Subscription subscription = client.subscriptions().create()
                .withAmount(<span class="hljs-number">1500</span>) <span class="hljs-comment">// 15 GBP in Pence  </span>
                .withCurrency(<span class="hljs-string">"GBP"</span>)
                .withIntervalUnit(IntervalUnit.MONTHLY)
                .withDayOfMonth(<span class="hljs-number">5</span>)
                .withLinksMandate(<span class="hljs-string">"MD0000YTKZKY4J"</span>)
                                 <span class="hljs-comment">// Mandate ID from the last section </span>
                .withMetadata(<span class="hljs-string">"subscription_number"</span>, <span class="hljs-string">"ABC123"</span>)
                .withIdempotencyKey(<span class="hljs-string">"random_subscription_specific_string"</span>)
                .execute();

            <span class="hljs-comment">// Keep hold of this subscription ID - we'll use it in a minute.</span>
            <span class="hljs-comment">// It should look a bit like "SB00003GKMHFFY"</span>
            System.out.printf(<span class="hljs-string">"ID: %s%n"</span>, subscription.getId());
        }
    }
    </code>`;

    return (
      <Page isInverted>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                   Build better, smarter, faster with our API
                </h1>

                <p className='u-text-heading-light u-text-m u-color-invert'>
                   Focus on building amazing Direct Debit integrations, not building from scratch
                </p>

                <a href='https://manage-sandbox.gocardless.com/signup' className='u-link-color-p u-text-underline'
                className='btn btn--invert u-margin-Tl u-margin-Rs'>
                  Get a sandbox account
                </a>

                <Href to='api_docs.path'
                className='btn btn--invert-hollow u-margin-Tl'>
                  View our developer docs
                </Href>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--landscape u-center'>
                <CustomisableIntegration className='svg-icon__image svg-icon__image--landscape' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                We speak your language
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                Client libraries for PHP, Java, <br/>Ruby and Python
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <DevelopTestIterate className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Simple to develop, test &amp; iterate
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                End-to-end testing in our free sandbox environment
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <DeveloperAPI className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                API-first technology
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Clean, modern RESTful API built from the ground up.
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Set up your integration in three simple steps
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2 u-margin-Tm'>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Add customers
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                  Use our out-of-the-box payment pages or build your own white labelled pages for a consistent brand experience.
                  </p>
                </div>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Collect payments
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Create and manage one off payments and subscriptions with simple API requests.
                  </p>
                </div>
                <div className='u-size-3of4'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Get real-time reports and alerts
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Automatic event notifications through webhooks means no need to download and parse reports.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <p className='u-color-dark-gray u-text-italic u-margin-Bxxs'>
                  Code example for creating a subscription:
                </p>
                <div className='code-examples'>
                  <div className='code-examples__tabs'>
                    <Tabs triggers={[(
                        <label className='code-examples__tabs-label'>PHP</label>
                      ), (
                        <label className='code-examples__tabs-label'>Python</label>
                      ), (
                        <label className='code-examples__tabs-label'>Ruby</label>
                      ),
                      (
                        <label className='code-examples__tabs-label'>Java</label>
                      ),]}>

                      <div>
                        <pre className='code-examples__tabs-pre'>
                          <span dangerouslySetInnerHTML={{__html: phpCodeBlock}}>
                          </span>
                        </pre>
                      </div>

                      <div onClick="this.select();">
                        <pre className='code-examples__tabs-pre'>
                          <span dangerouslySetInnerHTML={{__html: pythonCodeBlock}}>
                          </span>
                        </pre>
                      </div>

                      <div>
                        <pre className='code-examples__tabs-pre'>
                          <span dangerouslySetInnerHTML={{__html: rubyCodeBlock}}>
                          </span>
                        </pre>
                      </div>

                      <div>
                        <pre className='code-examples__tabs-pre'>
                          <span dangerouslySetInnerHTML={{__html: javaCodeBlock}}>
                          </span>
                        </pre>
                      </div>

                    </Tabs>
                  </div>
                </div>
              </div>
            </div>

            <div className='u-margin-Tm'>
              <a href='https://manage-sandbox.gocardless.com/signup'
              id=''
              className='btn btn--hollow u-margin-Tl u-margin-Rs'>
                Get a sandbox account
              </a>

              <p className='u-color-dark-gray u-margin-Tm'>
                Want to learn more about getting started?&nbsp;
                <Href to='api_docs.path'>
                  Read our reference docs
                </Href>
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Direct Debit for the Digital Age
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <PlugIn className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Connects seamlessly to <br/>your business
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                  An API designed to integrate Direct Debit into your business quickly and easily.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <FutureProof className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Future proof <br/>payments technology
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  A continuously improving, cutting edge online Direct Debit solution.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <Europe className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  One integration for the UK, Eurozone and Sweden
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  We handle the complexities of Direct Debit across geographies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Quick to build with a robust set of tools and resources
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img src='/images/funnels/robust_tools.png' width='454px' />
              </div>

              <div className='grid__cell u-size-1of2'>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Copy and paste code samples
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    We've worked hard to make building with our API as painless as possible.
                  </p>
                </div>

                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Clear, accessible documentation
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Full <a href="http://developer.gocardless.com">reference documentation</a> including step by step guides.
                  </p>
                </div>

                <div className='u-size-3of4'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Expert developer support
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Our team of API specialists are available to answer queries as you're building.
                  </p>
                </div>
              </div>
            </div>

            <div className='u-margin-Tm'>
              <a href='https://developer.gocardless.com/getting-started/api/introduction/'
              className='btn btn--hollow u-margin-Tl u-margin-Rs'>
                Explore our getting started guides
              </a>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxl'>
            <div className='quote page-hero--icon-background u-relative'>
              <img src='/images/logos/nutmeg-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
              <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                "The API is great from a technical perspective and using GoCardless means we can avoid the legacy banks payment networks."
              </p>
              <p className='u-color-invert u-margin-Bl u-text-s'>Bill Packman, COO</p>
            </div>

            <h2 className='u-text-heading u-color-dark-gray u-text-light u-margin-Txxl'>
               Ready to start testing today?
            </h2>

            <a href='https://manage-sandbox.gocardless.com/signup' className='btn btn--hollow u-margin-Txxl'>
              Get a sandbox account
            </a>
          </div>
        </div>

        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bl'>
              More useful stuff
            </h2>

            <div className='grid integrations-grid u-text-center'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Checkout our GitHub account
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://github.com/gocardless'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Go to GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
