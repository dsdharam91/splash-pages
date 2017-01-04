import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesHabitat extends React.Component {
  displayName = 'StoriesHabitat'

  render() {
    return (
      <StoryPageNew
        title='GoCardless nous a permis d’avancer très vite, d’éviter de devoir parler à de multiples banques et donc de nous concentrer sur notre lancement.'
        author='Remy Poirson'
        position='Directeur marketing et internet'
        company='Habitat'
        benefits='Lancement d&apos;une nouvelle offre, fidélisation des clients, adoption du prélèvement à d&apos;autres services
                  et à ses filiales européennes'
        bgimgUrl='url(/images/stories/story-images/habitat/hero-habitat.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/habitat.png'
        sidebarServices='Chaîne d&apos;ameublement'
        sidebarEmployees='500-1 000 employés'
        sidebarPreviousProvider='Autre prestataire spécialisé'
        sidebarTimeSaved='Nouveaux sur les paiements d&apos;abonnement'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            Lui l’espresso est le fruit d’une collaboration
            entre <a href='https://www.habitat.fr/' className='u-link-color-p u-text-underline'>Habitat</a>, la chaîne d’ameublement,
            et Aziende Riunite, un importateur de café et maître torréfacteur depuis 1856.
            Cette initiative stratégique permet à Habitat de mettre un pied dans l’économie de l’abonnement et de
            renforcer la relation entretenue avec leurs clients grâce à un produit mêlant design et art de vivre.
            A terme, Habitat vise 10 000 abonnés par an.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/habitat/coffee@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Afin de développer cette offre, Habitat a choisi GoCardless pour ses paiements.
            “Nous voulions fidéliser le client sur le long-terme et le prélèvement fut identifié comme un outil stratégique
            car il nous permet d’éviter les expirations ou pertes de cartes” explique Remy Poirson, le directeur Marketing & Web d’Habitat.
          </p>
          <p className='para'>
            Cependant, l’enseigne ne possédait pas d’expérience avec ce moyen de paiement.
            “Le prélèvement, nous pensions que ce serait un cauchemar pour le département comptabilité.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Depuis GoCardless
          </h2>
          <p className='para'>
            En juin, Habitat lance Lui l’espresso, seulement deux mois après les premières discussions avec GoCardless.
            Lors de l’abonnement, le client signe un mandat papier en magasin ou un mandat électronique sur
            le site <a href='https://www.habitat-cafe.com/' className='u-link-color-p u-text-underline'>habitat-cafe.com</a>.
            Il reçoit alors la machine à café et se verra livrer chez lui les capsules de café chaque mois,
            sous réserve d’un prélèvement réussi en amont de la livraison.
          </p>
          <p className='para'>
            Au niveau comptable, Habitat reçoit en temps réel les statuts des paiements. En cas d’échec ou de rejet,
            Habitat annule automatiquement toutes futures livraisons, ajuste la balance de paiement et peut éventuellement
            retenter le prélèvement. Les reversements de fonds sont également attribués automatiquement aux bonnes
            filiales d’un groupe implanté dans de multiples pays et aux DOM-TOM.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/habitat/website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Les avantages
          </h2>
          <p className='para'>
            Depuis le passage à GoCardless, Habitat a pu étendre le prélèvement à d’autres offres, comme sa carte de fidélité (Carte H),
            et à d’autres pays comme l’Allemagne et l’Espagne.
            GoCardless les aide à s’adapter aux différentes spécificités de ces géographies.
          </p>
          <p className='para'>
            Avec GoCardless, Habitat peut sereinement proposer de nouvelles offres.
            “La flexibilité de GoCardless nous a permis d’intégrer le prélèvement dans de multiples systèmes
            informatiques tout en gérant les paiements via un compte unique et une technologie simple”
            conclut Rosannie Ly, la directrice système d’information (DSI).
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
