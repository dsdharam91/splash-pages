import React from 'react';
import Href from '../../components/href/href';
import Tabs from '../../components/tabs/tabs';
import Translation from '../../components/translation/translation';

import CustomisableIntegration from '../../icons/svg/CustomisableIntegration';
import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import DevelopTestIterate from '../../icons/svg/DevelopTestIterate';
import EuropeIcon from '../../icons/svg/globe-europe';
import FutureProof from '../../icons/svg/FutureProof';
import PlugIn from '../../icons/svg/PlugIn';
import ReadPdf from '../../icons/svg/ReadPdf';

export default class DevelopersFr extends React.Component {
  displayName = 'DevelopersFr'

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
      <Translation locales='fr'>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                   Construisez mieux, plus intelligemment, <br/>plus rapidement avec notre API
                </h1>

                <p className='u-text-heading-light u-text-m u-color-invert'>
                   Une expérience inégalée pour intégrer le prélèvement automatique, sans partir de zèro.
                </p>

                <a href='https://manage-sandbox.gocardless.com/signup' className='u-link-color-p u-text-underline'
                className='btn btn--invert u-margin-Tl u-margin-Rs'>
                  Créez un compte sandbox
                </a>

                <Href to='api_docs.path'
                className='btn btn--invert-hollow u-margin-Tl'>
                  Consultez notre documentation pour les developpeurs
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
                Nous parlons <br/>votre langue
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                Bibliothèques PHP, Java, <br/>Rubis et Python
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <DevelopTestIterate className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Simple à développer, <br/>à tester et réitérer
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Test dans notre <br/>environnement sandbox
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <DeveloperAPI className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Technologie <br/>API First
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                API REST propre, moderne construite à partir de zéro.
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Configurez votre intégration en trois étapes simples
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2 u-margin-Tm'>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Ajoutez des clients
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                  Utilisez nos pages de paiement génériques ou construisez vos propres pages en marque blanche pour une meilleure expérience client.
                  </p>
                </div>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Prenez des paiements
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Créez et contrôlez vos paiements et vos abonnements avec des requêtes API simples.
                  </p>
                </div>
                <div className='u-size-3of4'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Obtenez des rapports en temps réel et des alertes
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Nos notifications automatiques d'événements par webhooks signifient aucun besoin de télécharger ou de faire l'analyse syntaxique de rapports.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <p className='u-color-dark-gray u-text-italic u-margin-Bxxs'>
                  Exemple de code pour créer un abonnement:
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

                      <div>
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
                Créez un compte sandbox
              </a>

              <p className='u-color-dark-gray u-margin-Tm'>
                Vous voulez en savoir plus sur la mise en place du prélèvement?&nbsp;
                <Href to='api_docs.path'>
                  Consultez nos documents de référence
                </Href>
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Le prélèvement automatique à l'ère du numérique
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <PlugIn className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Connectez facilement <br/>votre entreprise
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                  Une API conçue pour intégrer le prélèvement automatique dans votre activité rapidement et facilement.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <FutureProof className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Technologie de <br/>paiements future proof
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Une solution de prélèvement automatique de pointe, en constante amélioration.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <EuropeIcon className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Une intégration pour le Royaume-Uni, la Zone <br/>Euro et la Suède
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Nous gérons les complexités de prélèvement automatique dues aux différentes zones géographiques.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Rapide à construire avec un ensemble d'outils et des ressources fiables
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img src='/images/funnels/robust_tools.png' width='454px' />
              </div>

              <div className='grid__cell u-size-1of2'>
                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Copiez-collez des échantillons <br/>de code
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Notre API a été conçue pour rendre son intégration aussi facile que possible.
                  </p>
                </div>

                <div className='u-size-3of4 u-margin-Bl'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Documentation claire <br/>et accessible
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    La <Href to='api_docs.path'>documentation</Href> complète incluant le guide "pas à pas" .
                  </p>
                </div>

                <div className='u-size-3of4'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Assistance pour les développeurs professionnels
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Notre équipe de spécialistes API est disponible pour répondre aux questions pendant votre intégration
                  </p>
                </div>
              </div>
            </div>

            <div className='u-margin-Tm'>
              <a href='https://developer.gocardless.com/fr/commencez-maintenant/api/introduction/'
              className='btn btn--hollow u-margin-Tl u-margin-Rs'>
                Parcourez nos guides pour démarrer
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
                "L'API est géniale d'un point de vue technique et opter pour GoCardless vous permet d'éviter d'avoir à utiliser le réseau des banques"
              </p>
              <p className='u-color-invert u-margin-Bl u-text-s'>Bill Packman, COO</p>
            </div>

            <h2 className='u-text-heading u-color-dark-gray u-text-light u-margin-Txxl'>
               Prêt à tester aujourd'hui ?
            </h2>

            <a href='https://manage-sandbox.gocardless.com/signup' className='btn btn--hollow u-margin-Txxl'>
              Créez un compte sandbox
            </a>
          </div>
        </div>

        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bl'>
              Plus d'articles
            </h2>

            <div className='grid integrations-grid u-text-center'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Consultez notre compte GitHub
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://github.com/gocardless'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Vers GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
