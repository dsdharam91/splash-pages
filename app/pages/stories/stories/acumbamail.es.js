import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesAcumbamail extends React.Component {
  displayName = 'StoriesAcumbamail'

  render() {
    return (
      <StoryPageNew
        title='Con GoCardless hemos multiplicado por 3 nuestros clientes por domiciliación bancaria y reducido su administración a cero'
        author='Rafael Cabanillas'
        position='Fundador'
        company='Acumbamail'
        benefits='Procesos más eficientes y mayores opciones de pago a los clientes totalmente integradas'
        bgimgUrl=''
        sidebarLogoSrc='/images/stories/story-logos/acumbamail.png'
        sidebarServices='Email marketing'
        sidebarEmployees='7 empleados'
        sidebarPreviousProvider='Envío de XMLs a través del Banco'
        sidebarTimeSaved='20 horas al mes (y no volver a pensar en ello)'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            Siete meses atrás, tan solo 80 clientes
            de <a href='https://acumbamail.com/' className='u-link-color-p u-text-underline'>Acumbamail</a> se decantaban por la opción de
            la domiciliación bancaria. Actualmente, ese número ronda los 280. Hasta no hace mucho, tan solo el 10% de los nuevos
            usuarios que contrataban este servicio de email marketing se decidían por este método de pago. Ahora los recién llegados
            que apuestan por esta opción representan el 40%.
          </p>
          <p className='para'>
            “Antes, un nuevo cliente que no tenía tarjeta de crédito quizá optaba por otro servicio de la competencia”, reconoce sin
            tapujos <a href='https://www.crunchbase.com/person/rafael-cabanillas#/entity'
            className='u-link-color-p u-text-underline'>Rafael Cabanillas</a>, cofundador de Acumbamail.
            “Ofrecer los dos métodos de pago ha hecho que crezcamos. Más allá de todo el crecimiento gracias al marketing
            o a las mejoras de nuestra plataforma, este ha sido un punto bastante positivo”,
          </p>
          <p className='para'>
            Este servicio, que nació en 2011 de la mano de Ignacio Arriaga, Rafael Cabanillas y Miguel Gómez,
            ha decidido dar un paso al frente para intentar salvar uno de los grandes escollos a los que han tenido que
            enfrentarse durante seis años. “Lo que primero ofrecíamos a los usuarios era la tarjeta de crédito”, recuerda Cabanillas.
            “Pensábamos que nuestros clientes estaban más habituados al mundo digital y, por lo tanto, a utilizar este método de pago”.
          </p>
          <p className='para'>
            Pronto descubrieron que la realidad era otra. “A los pocos meses de lanzar Acumbamail nos dimos cuenta de que había muchas empresas en España, más tradicionales, que preferían la domiciliación bancaria”. Por este motivo tuvieron que incorporar una plataforma para este método de pago.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Un continuo quebradero de cabeza
          </h2>
          <p className='para'>
            En un principio, el proceso resultaba lento y tedioso. Con el primer sistema que incorporaron, tenían que realizar
            cada cobro de forma manual, por lo que se perdía mucho tiempo y dinero en esta tarea que, además,
            presentaba un inconveniente añadido. “Nosotros tenemos la problemática de que no cobramos a todos los
            clientes el mismo día”, explica Cabanillas. “A cada usuario se le activa la cuenta el día que se registra y
            a los treinta días se le cobra. Entonces era una tarea diaria, de acceder diariamente y cobrar las tres o cuatro
            domiciliaciones que había”.
          </p>
          <p className='para'>
            El sistema no estaba automatizado. “Era bastante rudimentario. En Google Calendar estaban apuntadas las domiciliaciones
            que había que hacer cada día, con una plataforma que ni siquiera tenía un buscador”, recuerda.
            “No quedaba más remedio que buscar a mano las domiciliaciones y realizarlas”.
            A esto había que añadir que aquellos clientes que optaban por la domiciliación tenían que mandar el número de sus
            cuentas bancarias a través de un correo electrónico. Es decir, tras completar todo el registro,
            debían salir de la plataforma para realizar este último trámite.
          </p>
          <p className='para'>
            Por otra parte, aquel sistema no les avisaba si algún cliente se retrasaba en el pago o si se producía alguna cancelación.
            &nbsp;<strong>Debían revisar y solventar individual y manualmente cada incidencia.</strong> “Cuando nos encontrábamos una
            devolución, había que buscar en el sistema quién había devuelto el pago y comprobar qué había ocurrido. Una tarea que llevaba
            aproximadamente media hora. Luego, claro está, había que ponerse en contacto con ese usuario.
            No había opción de reintentarlo”, detalla Cabanillas.
          </p>
          <p className='para'>
            “La solución que reunía todos los requisitos que buscábamos era GoCardless, sobre todo en lo relativo a la automatización
            total y a la integración con la plataforma”, añade. Al integrar GoCardless, todos los cobros y las altas de los clientes
            ocurren automáticamente, sin que nadie tenga que verificarlo. Y cuando hay un impago o un error en el cobro,
            GoCardless nos avisa inmediatamente y lo resolvemos en horas, en vez de en días.”
            Así, no solo consiguieron reducir el tiempo invertido en gestionar las domiciliaciones, sino que desbloquearon
            el elemento menos escalable de su empresa, los cobros.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            La experiencia, un grado
          </h2>
          <p className='para'>
            Su objetivo era claro: “Que ningún usuario tenga que abandonar la web de Acumbamail para finalizar el registro
            y que el proceso de pago sea totalmente transparente para el usuario”. Con esta idea en mente, pusieron en marcha
            la integración. Desde que adoptaron GoCardless han logrado reducir notablemente la carga de trabajo que suponía
            realizar los cobros. Además, “una ventaja de GoCardless es que permite controlar y saber estadísticamente
            qué está pasando con los pagos. Por ejemplo, tener constancia de cuántos pagos tenemos de cada usuario”, destaca.
          </p>
          <p className='para'>
            Para quienes ofrezcan un servicio a otras empresas y tengan que establecer distintos métodos de pago,
            Rafael Cabanillas aconseja, en base a su propia experiencia, hacerlo al mismo tiempo que construyen su plataforma.
            “Yo integraría desde el principio una solución de pago automática como GoCardless para las domiciliaciones”,
            afirma el cofundador de Acumbamail. “No sirve de nada incorporar al principio un sistema manual para luego
            tener que cambiarlo. El canal de venta es una de las partes más importantes y hay que darle, como mínimo,
            estas dos opciones a los clientes. Sobre todo en modelos de negocio en los que estás vendiendo a empresas”.
          </p>
          <p className='para'>
            Cuando decidieron vender su anterior proyecto, Lánzanos, para crear Acumbamail, tenían claro que uno de sus
            puntos fuertes debía ser facilitarle las cosas a los usuarios. No solo a la hora de crear sus campañas de mailing
            o de importar los suscriptores, sino también en el momento de pagar por el servicio.
            Al cabo de los años, lo han conseguido gracias a GoCardless.
          </p>
          <p className='para'>
            Ahora, de los clientes que pagan automáticamente, <strong>el porcentaje de los que lo hacen mediante domiciliación
            se ha incrementado del 10 al 30%</strong>. Y si bien pueden encontrar algunas dificultades a la hora de
            pagar con la tarjeta de crédito, eso ya no ocurre con este otro método de pago.
            “La domiciliación, una vez que el cliente apunta el número de su cuenta bancaria, nunca va a fallar”, sentencia Cabanillas.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
