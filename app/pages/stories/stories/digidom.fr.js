import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesDigidom extends React.Component {
  displayName = 'StoriesDigidom'

  render() {
    return (
      <StoryPageNew
        title='Nous avons augmenté notre taux de conversion et gagné une demie-journée par mois de travail administratif.'
        author='Julien Lancret'
        position='Fondateur'
        company='Digidom'
        benefits='Taux de conversion plus élevé, facilité d&apos;intégration de l&apos;API, automatisation des prélèvements
                  permettant plus de réactivité en cas de recouvrement ou d&apos;échecs faute de provisions.'
        bgimgUrl='url(/images/stories/story-images/digidom/hero-digidom.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/digidom.png'
        sidebarServices='Service facilitant la domiciliation d’entreprises sur Internet'
        sidebarEmployees='5 employés'
        sidebarPreviousProvider='Autre prestataire spécialisé'
        sidebarTimeSaved='½ journée par semaine'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.digidom.pro/' className='u-link-color-p u-text-underline'>Digidom</a> est un spécialiste
            de la domiciliation d’entreprises sur Internet permettant aux entrepreneurs d’établir le siège de leur entreprise
            au coeur de Paris à partir de 14€/mois. Les domiciliés ont accès à leur courrier dès réception quel que
            soit l’endroit où ils se trouvent grâce à l’application mobile Digidom et ils ont également à leur disposition
            des formalistes pour les conseiller juridiquement. Digidom sert aujourd'hui environ 2 000 clients.
          </p>
          <p className='para'>
            Au début de l'aventure et après avoir constaté les limites du paiement par carte
            (expirations, entreprises qui n’en possèdent pas, coûts..), Digidom a décidé de mettre le prélèvement en place,
            à l'époque, via l'envoi de mandats de prélèvement par voie postale pour chaque nouvelle demande effectuée sur le site.
            En effet, en 2007, aucune solution dématérialisée n’existait. Suite à cela, Digidom a adopté le mandat
            électronique d’un prestataire concurrent de GoCardless. Cependant, leur interface en ligne manquait cruellement
            d’ergonomie et l’API n’offrait pas beaucoup de possibilités, la documentation était insuffisante et finalement,
            le support technique qui s’est rapidement montré peu réatif.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/digidom/website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Depuis GoCardless
          </h2>
          <p className='para'>
            Après avoir du régler la facture d'un prestataire via mandat électronique de GoCardless en 10 secondes chrono,
            il nous est apparu évident que c'était l’expérience client qu’il nous fallait.
          </p>
          <p className='para'>
            Le changement s’est fait rapidement grâce à un outil d’import GoCardless qui nous a permis de migrer rapidement nos mandats.
            Le mois suivant, l’ensemble des clients étaient prélevés et nous avions accès au statut des prélèvement en temps réel.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/digidom/app@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Les avantages
          </h2>
          <p className='para'>
            D'abord, le taux de conversion s'est largement amélioré. Ensuite, contrairement à une mise en garde faite à l'époque,
            les demandes de remboursement n’ont pas augmenté puisque la fraude n’a jamais été un réel problème dans le secteur
            d'activité de Digidom. La signature électronique par SMS n’était donc pas nécessaire.
            Enfin, il a été facile et rapide pour les développeurs d'intégrer l'API.
          </p>
          <p className='para'>
            L'outil de facturation est désormais connecté à GoCardless et les factures sont envoyées de façon automatique.
            Ainsi, le statut de chaque prélèvement étant indiqué directment dans l'outil de gestion, cela nous permet
            d’être plus réactif sur le recouvrement si nécessaire. Nous avons également automatisé la représentation
            des échecs pour faute de provisions suffisantes ce que l’API permet très simplement.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
