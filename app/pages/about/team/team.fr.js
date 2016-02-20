import React from 'react';
import Translation from '../../../components/translation/translation';

export default class TeamFr extends React.Component {
  displayName = 'TeamFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bm'>
                Nous sommes une petite équipe formée d'individus talentueux travaillant ensemble pour construire l'avenir des paiements.
              </h2>
            </div>
            <div className='grid__cell u-size-2of3'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>Travailler chez GoCardless
 </h2>
              <span className='u-text-heavy u-color-dark-gray'></span>
              <span className='u-color-dark-gray'>
               <p className='para'>
            Bâtir une entreprise modèle est aussi important pour nous qu’améliorer
        notre modèle économique: nous avons une culture distincte et nous cherchons constamment
        à la renforcer. Nous recrutons des gens talentueux, relevons des défis passionnants, et
        fournissons un excellent environnement de travail permettant à chacun de donner le
        meilleur de soi même, d’apprendre, de grandir et de se motiver les uns les autres.
               </p>
               <p className='para'>
            <strong>Nous travaillons en équipe</strong>: nous aimons travailler
        ensemble et privilégions le succès d’équipe. Nous sommes convaincus qu'en
s’entourant de gens talentueux, nous arrivons à d'excellent résultats.
               </p>
              <p className='para'>
               <strong>Nous sommes curieux</strong>: l'apprentissage et le
développement personnel de chacun est primordial pour nous. Nous prenons le temps
d'apprendre afin de progresser, que ce soit à travers des conférences,
        des cours ou des challenges. Nous apprenons de nos succès et de
        nos erreurs, nous échangeons régulièrement les informations utiles
        afin que nous puissions être meilleurs.
              </p>
              <p className='para'>
            <strong>Avancer rapidement</strong>: nous nous concentrons
        sur les choses qui ont le plus d'impact. Nous construisons pour
 le long terme afin d’avancer rapidement aussi bien maintenant qu’à l'avenir.
              </p>
              <p className='para'>
               <strong>Prendre l'initiative</strong>: nous aimons les preneurs
d'initiatives, et ceux qui mènent la charge sur leur propre travail.
            La prise de décision se fait ensemble. Nous encourageons
        l'initiative et tout le monde peut apporter des améliorations
chaque fois que cela est possible.
              </p>
              .</span>
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
