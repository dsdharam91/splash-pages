import React from 'react';
import Translation from '../../../components/translation/translation';

export default class TeamNl extends React.Component {
  displayName = 'TeamNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bm'>
                We zijn een klein team dat een nieuw betalingsnetwerk voor het internet bouwt.
              </h2>
            </div>
            <div className='grid__cell u-size-2of3'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>Bij GoCardless werken </h2>
              <span className='u-text-heavy u-color-dark-gray'></span>
              <span className='u-color-dark-gray'>
              <p className='para'>
                Een fantastische organisatie uitbouwen is even belangrijk voor ons als het bouwen
                van een succesvol bedrijf: we hebben een sterke bedrijfscultuur en werken er dagelijks
                aan dit verder te versterken. We werven getalenteerde mensen aan, lossen uitdagende
                problemen op, en zorgen voor een hele goede omgeving die iedereen in staat stelt
                hun beste werk te leveren, te leren, te groeien en mekaar te inspireren.
              </p>
              <p className='para'>
                <strong>We werken samen</strong>: we verkiezen team succes boven individuele verwezenlijkingen,
                en we werken  allen nauw samen. We geloven dat jezelf omringen met getalenteerde mensen de beste
                manier is om fantastisch werk te leveren.
              </p>
              <p className='para'>
                <strong>We zijn nieuwsgierig</strong>: persoonlijke ontwikkeling en leren liggen ons nauw
                aan het hart. We nemen de tijd om bij te leren zodat we vooruitgang kunnen maken, zowel door
                conferenties of lessen bij te wonen, alsook door nieuwe uitdagingen aan te pakken. We leren van
                onze successen en onze fouten, en we delen regelmatig directe en nuttige feedback zodat we
                beter worden in wat we doen.
              </p>
              <p className='para'>
                <strong>Snelle vooruitgang is van belang</strong>: we focussen ons op die zaken die de
                meeste impact hebben. We bouwen op een duurzame wijze zodat we zowel nu als ook in de
                toekomst snelle vooruitgang kunnen maken.
              </p>
              <p className='para'>
                <strong>Neem initiatief</strong>: we zijn een team van eigenaars, en we leiden ons
                eigen werk. Besluitvorming wordt verdeeld. We moedigen nieuwe initiatieven aan en iedereen
                krijgt de mogelijkheid verbeteringen te maken waar mogelijk.
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
