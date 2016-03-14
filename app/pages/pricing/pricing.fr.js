import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class PricingFr extends React.Component {
  displayName = 'PricingFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing'>
          <div className='site-container'>
            <div className='grid pricing-options pricing-options--three-tiers u-center u-padding-Bxl'>
              <h1 className='u-text-heading u-text-light u-text-center u-color-dark-gray u-margin-Vl'>
                Un prix adapté à chacun
              </h1>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Rxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-primary u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Standard</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Pour les TPEs et PMEs souhaitant un accès rapide et simplifié</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Instant online set-up and approval
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Online dashboard
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Multiple users per account
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> REST API
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Migrate existing Direct Debit customers
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Secure payment pages with your logo
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details online
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          <Message pointer='pricing.per_transaction_amount_normal' />
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie, plafonné à 2€
                        </p>
                      </div>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>
                        Créez votre compte
                        </Href>
                      </IfLocale>

                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contactez-nous</Link>
                      </IfLocale>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Pour les entreprises souhaitant un contrôle total et personalisé</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Standard, plus:
                      </p>

                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages &amp; emails
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          0,01 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €100 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contactez-nous</Link>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-xdark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Enterprise</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Pour les entreprises souhaitant un contrôle total et personalisé</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Pro, plus:
                      </p>

                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages &amp; emails
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          0,01 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €250 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contactez-nous</Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-dark-gray'>Nos tarifs</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>
                  Y a-t'il d'autres frais ?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                Non, il n'y aucun autre frais que ceux indiqués ci-dessus.
                Nous ne vous facturons jamais la création de mandats, ainsi que
                les incidents de paiements : échecs, remboursements, annulations...
                Avec GoCardless Pro, vous êtes facturé un abonnement de 250 € et
                un coût par transaction réussie (1% ou prix fixe au choix).
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Offrez-vous des réductions ?</b>
              </div>
              <p className='u-color-dark-gray'>
                Oui. Nos frais par transaction sont dégressifs à partir de 1.000 paiements par mois.
                Pour en savoir plus,
                &nbsp;<Link to='contact_sales' className='u-link-color-p u-text-underline'>contactez-nous</Link>
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>Y a-t'il des frais d'implémentation ?</b>
              </div>
              <p className='u-color-dark-gray'>
                Non. Vous ne payez pas pour implémenter GoCardless.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Serai-je facturé si un paiement échoue ?</b>
              </div>
              <p className='u-color-dark-gray'>
                Non. Nous ne facturons que les paiements réussis quel que soit le produit.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-1of3 u-center'>
              <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Vous avez une question?</h2>

              <div className='u-center'>
                <p className='u-color-dark-gray u-margin-Ts'>
                  Nous sommes disponible afin de répondre à vos questions au <Message pointer='phone_local' />
                </p>
                <IfLocale hasInstantSignup>
                  <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>
                    Inscrivez-vous
                  </Href>
                </IfLocale>
                <IfLocale hasInstantSignup={false}>
                  <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contactez-nous</Link>
                </IfLocale>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
