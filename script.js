// ==========================================
// 1. GESTION DU MODE SOMBRE (FONCTIONNE PARTOUT)
// ==========================================
const boutonTheme = document.getElementById('theme-toggle');

// On vérifie que le bouton existe bien sur la page avant de faire quoi que ce soit
if (boutonTheme) {
    // Vérification du choix stocké en mémoire
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        boutonTheme.textContent = "Passer en Mode Clair ☀️";
    }

    // Écoute du clic pour le changement de thème
    boutonTheme.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            boutonTheme.textContent = "Passer en Mode Clair ☀️";
            localStorage.setItem('theme', 'dark');
        } else {
            boutonTheme.textContent = "Passer en Mode Sombre 🌙";
            localStorage.setItem('theme', 'light');
        }
    });
}

// ==========================================
// 2. VALIDATION DU FORMULAIRE (PAGE CONTACT UNIQUEMENT)
// ==========================================
const formulaire = document.querySelector('.contact-form');
const champMessage = document.getElementById('message');
const alerteErreur = document.getElementById('error-message');

if (formulaire && champMessage && alerteErreur) {
    
    formulaire.addEventListener('submit', function(evenement) {
        // On récupère la valeur entrée sans les espaces inutiles
        const texteMessage = champMessage.value.trim();
        
        if (texteMessage.length < 20) {
            // Étape cruciale : on bloque l'envoi
            evenement.preventDefault(); 
            
            // On écrit le texte et on force l'affichage en mode "block"
            alerteErreur.textContent = "Votre message est trop court (" + texteMessage.length + "/20 caractères minimum).";
            alerteErreur.style.setProperty('display', 'block', 'important'); 
            
            // Changement visuel du champ
            champMessage.style.borderColor = '#e74c3c';
        } else {
            // Si tout est bon, on nettoie et on laisse partir le formulaire
            alerteErreur.style.display = 'none';
            champMessage.style.borderColor = '#cccccc';
            alert("Merci ! Votre message a été validé avec succès.");
        }
    });
}