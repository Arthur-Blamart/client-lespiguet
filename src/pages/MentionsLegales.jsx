import './MentionsLegales.css'

const MentionsLegales = () => {
  return (
    <div className="mentions-legales-page">
      <div className="container">
        <header className="mentions-header">
          <h1>Mentions Légales</h1>
        </header>

        <div className="mentions-content">
          <section className="mention-section">
            <h2>1. Informations légales</h2>
            <div className="info-block">
              <h3>Éditeur du site</h3>
              <p><strong>Ar Ty Nevez</strong></p>
              <p>Gîte de charme</p>
              <p>Adresse : Lespiguet, 29160 Crozon, Finistère</p>
              <p>Téléphone : 07 67 61 16 18</p>
              <p>Email : christelle.blamart@orange.fr</p>
            </div>

            <div className="info-block">
              <h3>Responsable de la publication</h3>
              <p>Christelle Blamart</p>
              <p>Email : christelle.blamart@orange.fr</p>
            </div>

            <div className="info-block">
              <h3>Hébergement</h3>
              <p>Ce site est hébergé par :</p>
              <p><strong>OVH</strong></p>
              <p>2 rue Kellermann - 59100 Roubaix - France</p>
              <p>Téléphone : 1007</p>
            </div>
          </section>

          <section className="mention-section">
            <h2>2. Conditions d'utilisation</h2>
            <div className="info-block">
              <h3>Accès au site</h3>
              <p>
                L'accès au site et son utilisation sont réservés à un usage strictement personnel. 
                Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y 
                figurent à des fins commerciales, politiques, publicitaires et pour toute forme 
                de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.
              </p>
            </div>

            <div className="info-block">
              <h3>Contenu du site</h3>
              <p>
                Le propriétaire du site s'efforce de fournir des informations aussi précises que possible. 
                Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des 
                carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires 
                qui lui fournissent ces informations.
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>3. Propriété intellectuelle</h2>
            <div className="info-block">
              <p>
                Tout le contenu de ce site, incluant, de façon non limitative, les graphismes, images, 
                textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme 
                sont la propriété exclusive de la société à l'exception des marques, logos ou contenus 
                appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord 
                exprès par écrit du propriétaire du site.
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>4. Protection des données personnelles (RGPD)</h2>
            <div className="info-block">
              <h3>Collecte des données</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) entré en vigueur 
                le 25 mai 2018, nous vous informons des éléments suivants :
              </p>
              <ul>
                <li>Les données personnelles collectées via le formulaire de contact sont : nom, prénom, adresse email, téléphone, dates de séjour et message.</li>
                <li>Ces données sont collectées dans le but de traiter votre demande de réservation ou d'information.</li>
                <li>Les données sont conservées pendant 3 ans maximum après le dernier contact.</li>
                <li>Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données personnelles.</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Vos droits</h3>
              <p>Vous pouvez exercer vos droits en nous contactant :</p>
              <ul>
                <li>Par email : christelle.blamart@orange.fr</li>
                <li>Par téléphone : 07 67 61 16 18</li>
                <li>Par courrier : Ar Ty Nevez, Lespiguet, 29160 Crozon</li>
              </ul>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une 
                réclamation à la CNIL (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>5. Cookies</h2>
            <div className="info-block">
              <p>
                Ce site n'utilise pas de cookies de tracking ou de cookies publicitaires. 
                Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>6. Liens hypertextes</h2>
            <div className="info-block">
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web en direction 
                d'autres ressources présentes sur le réseau Internet ne sauraient engager la 
                responsabilité du propriétaire du site.
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>7. Litiges</h2>
            <div className="info-block">
              <p>
                Les présentes conditions du site sont régies par les lois françaises et toute 
                contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution 
                de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social 
                de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
              </p>
            </div>
          </section>

          <section className="mention-section">
            <h2>8. Médiation</h2>
            <div className="info-block">
              <p>
                En cas de litige, vous pouvez recourir à la médiation de la consommation. 
                Les coordonnées du médiateur compétent sont disponibles sur demande.
              </p>
            </div>
          </section>

          <div className="last-update">
            <p><em>Dernière mise à jour : Octobre 2025</em></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales