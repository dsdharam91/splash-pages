import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateExportEs extends React.Component {
  displayName = 'FaqProDashboardMandateExportEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Exportar mandatos</h2>
        <p className='para'>
          Desde la sección Clientes, puedes exportar tus mandatos en formato PDF, lo que puede resultar útil para
          enviar una copia a los clientes.
        </p>
        <p className='para'>
          Selecciona el cliente de quien deseas exportar el mandato y, a continuación, haz clic en su mandato:
        </p>

        <img src='/images/faq/en/mandate-id.png' />

        <p className='para'>
          Puedes registrar el mandato en formato PDF seleccionando “Exportar” en las opciones de la parte superior derecha:
        </p>

        <img src='/images/faq/en/mandate-export-buttons.png' />

        <p className='para'>
          Puedes elegir el idioma del mandato, si tu cliente no es español, por ejemplo:
        </p>

        <img src='/images/faq/fr/mandate-export.png' />

        <p className='para'>
          <strong>Nota</strong> : en caso de experimentar problemas con la descarga, te recomendamos que pruebes con el navegador Chrome.
        </p>

      </Translation>
    );
  }
}
