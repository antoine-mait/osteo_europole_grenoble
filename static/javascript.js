const pageDiv = document.querySelector(".page_data");

const content = document.querySelector(".content");

document.querySelector(".nav-links").addEventListener("click", (e) => {
    content.innerHTML = "";
    if (e.target && e.target.id === "accueil") {
        
        content.innerHTML = `
        <section class="hero" id="accueil">
            <h1>Bienvenue sur le site du cabinet d'ostéopathie<br>
                de Mickaël FORCIOLI et Étienne BOUTET
            </h1>
        </section>

        <section class="team-section" id="equipe">
            <div class="team-container">
                <div class="team-image">
                    <div id="team-image-div">
                        <img src="./static/photo/duo.jpg">
                    </div>
                </div>
                <div class="team-info">
                    <h2>Une équipe à votre écoute</h2>
                    <p>
                        Mickaël FORCIOLI et Étienne BOUTET vous accueillent dans leur cabinet d'ostéopathie situé à Europole. 
                        Diplômés et expérimentés, ils mettent leur expertise au service de votre bien-être et de votre santé.
                    </p>
                </div>
            </div>
        </section>

        <section class="info-section">
            <div class="info-card">
                <div class="icon">🕐</div>
                <div class="info-content">
                    <h2>Horaires d'ouverture</h2>
                    <p>Le cabinet est ouvert du <span class="highlight">Lundi au Vendredi</span> de <span class="highlight">8h30 à 19h</span></p>
                </div>
            </div>

            <div class="info-card">
                <div class="icon">💶</div>
                <div class="info-content">
                    <h2>Tarifs</h2>
                    <p><span class="highlight">65 € par séance</span> ; Chèque ou Espèces.</p>
                    <p>Renseignez-vous auprès de votre mutuelle, la plupart des mutuelles remboursent les séances d'ostéopathie.</p>
                </div>
            </div>
        </section>`;
    }
    
    if (e.target && e.target.id === "osteopathie") {
    content.innerHTML = `
    <section class="hero">
        <h1>L'Ostéopathie</h1>
    </section>

    <section class="content-section">
        <div class="content-container">
            <h2>Définition</h2>
            <p>
                L'ostéopathie est une pratique manuelle qui considère le patient dans sa globalité. 
                Son action consiste à prévenir, diagnostiquer et traiter manuellement les restrictions 
                de mobilité du corps humain. Ces dernières peuvent entraîner des troubles fonctionnels 
                capables de perturber l'état de santé. Reposant sur l'anatomie, la physiologie et la 
                pathologie, l'ostéopathie est une pratique complémentaire de la médecine traditionnelle.
            </p>
            <p>
                L'ostéopathe recherche la cause de la douleur. Il ne limite pas son raisonnement à la 
                zone douloureuse mais cherche à comprendre les mécanismes qui font que la douleur se 
                manifeste à cet endroit.
            </p>

            <h3>📋 Déroulement de la Consultation</h3>
            <p>Une séance d'Ostéopathie dure environ 45 minutes en quatre étapes :</p>

            <div class="session-steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <div>
                        <h4>Anamnèse (10-15 min)</h4>
                        <p>
                            Elle permet au praticien de cibler le motif de consultation du patient. 
                            L'ostéopathe s'intéressant au patient dans sa globalité, il cherche à recueillir 
                            des informations sur les antécédents personnels et familiaux, le mode de vie, 
                            l'histoire de la maladie et les symptômes ressentis.
                        </p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <div>
                        <h4>Examen Clinique</h4>
                        <p>
                            L'ostéopathe effectue des tests palpatoires spécifiques, afin de détecter les 
                            zones anatomiques du corps ayant une perte de mobilité, et donc susceptibles 
                            d'altérer l'état de santé du patient. À la fin de l'examen, la façon et les 
                            moyens utilisés pour la prise en charge ostéopathique sera expliquée au patient. 
                            L'ostéopathe pourra aussi réorienter ce dernier vers son médecin si nécessaire.
                        </p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <div>
                        <h4>Traitement Ostéopathique</h4>
                        <p>
                            Pour traiter les restrictions de mobilité, l'ostéopathe effectue différentes 
                            techniques (structurelles, fasciales, viscérales et crâniennes) choisies en 
                            fonction du patient : suivant l'âge, la morphologie, la zone du corps à corriger. 
                            Le choix de ces techniques ostéopathiques est adapté pour répondre au mieux au 
                            motif de consultation tout en respectant d'éventuelles contre-indications médicales. 
                            Les techniques qui font "craquer" ne sont pas forcément nécessaires et peuvent être 
                            remplacées par des techniques plus douces.
                        </p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">4</span>
                    <div>
                        <h4>Suivi et Conseils Hygiéno-Diététiques</h4>
                        <p>
                            Elle permet à l'Ostéopathe de conseiller le patient, de lui proposer des exercices 
                            à faire à la maison, mais aussi de le diriger vers d'autres professionnels de santé 
                            pour une prise en charge pluridisciplinaire si nécessaire.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
    
   if (e.target && e.target.id === "equipe") {
    content.innerHTML = `
    <section class="hero">
        <h1>Notre Équipe</h1>
    </section>

    <section class="team-detail-section">
        <div class="team-member">
            <div class="member-info">
                <h2>Mickaël FORCIOLI</h2>
                <p class="title">Ostéopathe D.O.</p>
                
                <h3>📚 Formation</h3>
                <ul>
                    <li>Diplômé de l'Institut Supérieur d'Ostéopathie (ISO) de Lyon en 2001</li>
                    <li>Enseignant à l'Institut Supérieur d'Ostéopathie de Lyon de 2004 à 2021</li>
                </ul>

                <h3>⚡ Pratique</h3>
                <ul>
                    <li>Ostéopathie structurelle</li>
                    <li>Ostéopathie tissulaire</li>
                    <li>Ostéopathie crânienne</li>
                    <li>Ostéopathie viscérale</li>
                </ul>

                <h3>📞 Contact</h3>
                <p><a href="tel:0476464670" class="contact-link">04 76 46 46 70</a></p>
            </div>
        </div>

        <div class="team-member reverse">
            <div class="member-info">
                <h2>Étienne BOUTET</h2>
                <p class="title">Ostéopathe D.O.</p>
                
                <h3>⚡ Approche</h3>
                <p class="bio">
                    Étienne BOUTET accueille du lundi au samedi dans son cabinet à Grenoble. 
                    Il exerce une ostéopathie globale adaptée à chaque patient. À l'écoute de 
                    chacun de vos maux, il vous apporte des solutions curatives ou de confort 
                    suivant les pathologies à l'aide de techniques ostéo-articulaires, crâniennes 
                    et viscérales.
                </p>

                <h3>👥 Patients</h3>
                <ul>
                    <li>Nouveau-nés et nourrissons</li>
                    <li>Enfants et adolescents</li>
                    <li>Adultes sportifs ou sédentaires</li>
                    <li>Personnes âgées</li>
                </ul>

                <h3>📞 Contact</h3>
                <p>
                    <a href="tel:0673626992" class="contact-link">06 73 62 69 92</a><br>
                    <a href="https://www.doctolib.fr/osteopathe/grenoble/etienne-boutet" target="_blank" class="contact-link">Prendre RDV sur Doctolib</a>
                </p>
            </div>
        </div>
    </section>
    `;
}
    
if (e.target && e.target.id === "contact") {
    content.innerHTML = `
    <section class="hero">
        <h1>Contactez-nous</h1>
    </section>

    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-info">
                <h2>📍 Adresse</h2>
                <p>
                    <strong>Cabinet d'Ostéopathie</strong><br>
                    6 Rue Anthoard<br>
                    38000 Grenoble - Europole
                </p>

                <h2>📞 Téléphone</h2>
                <p>
                    <strong>Mickaël FORCIOLI :</strong><br>
                    <a href="tel:0476464670" class="contact-link">04 76 46 46 70</a>
                </p>
                <p>
                    <strong>Étienne BOUTET :</strong><br>
                    <a href="tel:0673626992" class="contact-link">06 73 62 69 92</a><br>
                    <a href="https://www.doctolib.fr/osteopathe/grenoble/etienne-boutet" target="_blank" class="contact-link">Prendre RDV sur Doctolib</a>
                </p>

                <h2>🕐 Horaires</h2>
                <table class="hours-table">
                    <tr>
                        <td>Lundi - Vendredi</td>
                        <td><strong>8h30 - 19h00</strong></td>
                    </tr>
                    <tr>
                        <td>Samedi</td>
                        <td><strong>Sur rendez-vous (Étienne)</strong></td>
                    </tr>
                    <tr>
                        <td>Dimanche</td>
                        <td><strong>Fermé</strong></td>
                    </tr>
                </table>

                <div class="appointment-box">
                    <h3>📅 Prendre rendez-vous</h3>
                    <p>Contactez-nous par téléphone ou prenez RDV en ligne avec Étienne sur Doctolib.</p>
                </div>
            </div>

            <div class="map-container">
                <h2>Nous trouver</h2>
                <div class="map-placeholder">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.3956789!2d5.7099001!3d45.1892779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48218a0ee2d%3A0xd2697836a7ddba0b!2s6%20Rue%20Anthoard%2C%2038000%20Grenoble!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
                        width="100%" 
                        height="400" 
                        style="border:0; border-radius: 10px;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
                
                <div class="access-info">
                    <h3>🚗 Accès</h3>
                    <ul>
                        <li><strong>En voiture :</strong> Parking à proximité</li>
                        <li><strong>En tram :</strong> Arrêt Europole - Gare (Ligne A)</li>
                        <li><strong>En bus :</strong> Lignes 13, 16</li>
                    </ul>
                </div>

                <div class="cabinet-gallery">
                    <h2>Notre Cabinet</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="./static/photo/porte_entree.jpg" alt="Entrée du cabinet">
                            <p>Entrée du cabinet</p>
                        </div>
                        <div class="gallery-item">
                            <img src="./static/photo/salle_attente.jpg" alt="Salle d'attente">
                            <p>Salle d'attente</p>
                        </div>
                        <div class="gallery-item">
                            <img src="./static/photo/salle_etienne.jpg" alt="Cabinet Mickaël">
                            <p>Cabinet de Mickaël</p>
                        </div>
                        <div class="gallery-item">
                            <img src="./static/photo/salle_etienne.jpg" alt="Cabinet Étienne">
                            <p>Cabinet d'Étienne</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <h2>❓ Questions Fréquentes</h2>
        <div class="faq-container">
            <div class="faq-item">
                <h3>Puis-je venir sans ordonnance ?</h3>
                <p>Oui, l'ostéopathie ne nécessite pas d'ordonnance médicale.</p>
            </div>
            <div class="faq-item">
                <h3>Combien de séances sont nécessaires ?</h3>
                <p>Cela dépend de votre motif de consultation. En général, 1 à 3 séances suffisent pour les troubles aigus.</p>
            </div>
            <div class="faq-item">
                <h3>Les séances sont-elles remboursées ?</h3>
                <p>La plupart des mutuelles proposent un remboursement partiel ou total. Renseignez-vous auprès de votre mutuelle.</p>
            </div>
            <div class="faq-item">
                <h3>Comment annuler un rendez-vous ?</h3>
                <p>Merci de nous prévenir au moins 24h à l'avance par téléphone.</p>
            </div>
        </div>
    </section>`;
}
});

document.querySelector("#contact-btn").addEventListener("click", () => {
    content.innerHTML = ""; // Clear content
    // Trigger contact page load (same code as clicking "Contact" button)
    document.getElementById("contact").click();
});