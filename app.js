/**
 * CENTRE DE FOOTBALL MOUSSA KANDJOURA DIARRA
 * Main Application Scripts & Interactive Features
 */

// --- BILINGUAL TRANSLATION DICTIONARY (FR / EN) ---
const translations = {
  fr: {
    "topbar.tagline": "Académie d'Excellence & de Formation de Jeunes Talents",
    "topbar.join": "Rejoindre / Contact",
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.programs": "Programmes",
    "nav.gallery": "Galerie",
    "nav.squads": "Équipes",
    "nav.values": "Nos Valeurs",
    "nav.support": "Nous Soutenir",
    "nav.contact": "Contact",
    
    "hero.badge": "Centre de Formation Agréé • Mali",
    "hero.description": "Détecter, former et propulser les futurs champions du football malien et africain avec passion, discipline et excellence académique.",
    "hero.btnGallery": "Découvrir la Galerie",
    "hero.btnSupport": "Soutenir l'Académie",
    
    "stats.players": "Jeunes Talents",
    "stats.categories": "Catégories d'Âge",
    "stats.commitment": "Engagement & Passion",
    "stats.vision": "Vision Internationale",

    "about.sub": "Notre Histoire & Mission",
    "about.title": "Une Académie Dédiée à la Jeunesse et au Football",
    "about.desc": "Le Centre de Football Moussa Kandjoura Diarra est un tremplin pour les jeunes footballeurs au Mali, combinant formation technique de haut niveau, éducation morale et opportunités professionnelles.",
    "about.card1.title": "Formation Technique d'Élite",
    "about.card1.desc": "Programme intensif axé sur le contrôle de balle, la vision de jeu, la vitesse d'exécution et l'intelligence tactique adaptée au football moderne.",
    "about.card2.title": "Éducation & Discipline",
    "about.card2.desc": "Le football comme école de vie. Nous inculquons le respect, l'esprit d'équipe, l'assiduité scolaire et le dépassement de soi à chaque jeune.",
    "about.card3.title": "Passerelle Professionnelle",
    "about.card3.desc": "Participation aux compétitions régionales et nationales, détections pour recruteurs et partenariats avec des clubs formateurs internationaux.",
    "about.storyTag": "L'Esprit des Lions",
    "about.storyTitle": "Des Racines Fortes, des Ailes pour Voler",
    "about.storyP1": "Fondé avec la conviction profonde que le talent brut existe dans chaque quartier et chaque village du Mali, le Centre de Football Moussa Kandjoura Diarra offre un cadre structuré et bienveillant pour transformer les rêves en carrières concrètes.",
    "about.storyP2": "Sous l'emblème des deux lions rugissants et des trois étoiles d'excellence, notre encadrement travaille chaque jour pour forger des athlètes complets et des citoyens exemplaires.",
    "about.pill1": "Encadrement passionné",
    "about.pill2": "Développement continu",
    "about.pill3": "Opportunités réelles",

    "prog.sub": "Cursus de Formation",
    "prog.title": "Nos Catégories d'Âge & Programmes",
    "prog.desc": "Une pédagogie progressive adaptée à chaque étape de la croissance physique, technique et mentale du joueur.",
    "prog.featured": "Compétition",
    "prog.u13.age": "10 - 12 ans",
    "prog.u13.title": "Éveil & Fondations",
    "prog.u13.desc": "Apprentissage de la coordination motrice, maîtrise du ballon, plaisir du jeu collectif et respect des règles.",
    "prog.u13.f1": "Technique individuelle & dribbles",
    "prog.u13.f2": "Jeux réduits & créativité",
    "prog.u13.f3": "Initiation aux valeurs sportives",
    "prog.u15.age": "13 - 14 ans",
    "prog.u15.title": "Développement & Tactique",
    "prog.u15.desc": "Perfectionnement des gestes techniques sous pression, positionnement sur le terrain et compréhension des phases de jeu.",
    "prog.u15.f1": "Prise de décision rapide",
    "prog.u15.f2": "Transitions attaque / défense",
    "prog.u15.f3": "Conditionnement athlétique adapté",
    "prog.u17.age": "15 - 16 ans",
    "prog.u17.title": "Haute Performance",
    "prog.u17.desc": "Exigence athlétique, rigueur tactique avancée, analyse vidéo et préparation mentale à la compétition de haut niveau.",
    "prog.u17.f1": "Matchs compétitifs officiels",
    "prog.u17.f2": "Puissance & endurance aérobie",
    "prog.u17.f3": "Évaluation individuelle continue",
    "prog.u20.age": "17 - 20 ans",
    "prog.u20.title": "Tremplin Professionnel",
    "prog.u20.desc": "Préparation aux tests professionnels, tournois de détection, exposition aux scouts et gestion de carrière sportive.",
    "prog.u20.f1": "Showcases recruteurs & agents",
    "prog.u20.f2": "Préparation mentale d'élite",
    "prog.u20.f3": "Accompagnement personnalisé",

    "gallery.sub": "Galerie Visuelle",
    "gallery.title": "L'Académie en Images",
    "gallery.desc": "Découvrez la vie du Centre de Football Moussa Kandjoura Diarra : nos entraînements, nos effectifs et nos matchs sur le terrain.",
    "gallery.all": "Toutes les Photos",
    "gallery.squad": "Équipes",
    "gallery.match": "Matchs & Terrains",
    "gallery.training": "Entraînements",
    "gallery.crest": "Écusson",

    "gallery.item1.title": "Effectif Officiel • Mur de l'Académie",
    "gallery.item1.desc": "Les joueurs fiers arborant les couleurs bleue et blanche du club.",
    "gallery.item2.title": "Séance d'Entraînement Collective",
    "gallery.item2.desc": "Rassemblement de l'effectif avec les ballons de préparation.",
    "gallery.item3.title": "Onze Compétiteur • Terrain Terre",
    "gallery.item3.desc": "Concentration et solidarité avant le coup d'envoi du match.",
    "gallery.item4.title": "Onze de Compétition • Gazon",
    "gallery.item4.desc": "Les athlètes arborant les couleurs nationales du Mali sur le terrain vert.",
    "gallery.item5.title": "Cohésion d'Équipe",
    "gallery.item5.desc": "L'esprit de fraternité et de respect mutuel au cœur du club.",
    "gallery.item6.title": "Travail & Persévérance",
    "gallery.item6.desc": "Chaque séance est une opportunité de progresser vers l'excellence.",
    "gallery.item7.title": "Écusson Officiel CFMKD",
    "gallery.item7.desc": "Symbole de force, d'étoiles d'or et de fierté sportive.",

    "squad.sub": "Nos Athlètes",
    "squad.title": "Effectif & Profils de Jeu",
    "squad.desc": "Une équipe soudée et déterminée, répartie sur tous les postes stratégiques du jeu moderne.",
    "squad.posGK": "Gardiens de But",
    "squad.posGKDesc": "Dernier rempart • Réflexes & Commandement",
    "squad.gkLeader": "Portier N°1 • Sorties Aériennes",
    "squad.statusStarter": "Titulaire",
    "squad.posDEF": "Défenseurs",
    "squad.posDEFDesc": "Rigidité, Anticipation & Relance",
    "squad.defLead": "Capitaine Défensif • Jeu de Tête",
    "squad.posMID": "Milieux de Terrain",
    "squad.posMIDDesc": "Créativité, Récupération & Tempo",
    "squad.posFWD": "Attaquants & Ailiers",
    "squad.posFWDDesc": "Finition, Vitesse & Efficacité",

    "values.sub": "Notre ADN",
    "values.title": "Les 4 Piliers Fondamentaux de l'Académie",
    "values.desc": "Au-delà du ballon, nous forgeons les hommes et les citoyens responsables de demain.",
    "values.v1.title": "Respect & Fraternité",
    "values.v1.desc": "Le respect absolu des coéquipiers, des adversaires, des arbitres, des éducateurs et des supporters.",
    "values.v2.title": "Discipline & Rigueur",
    "values.v2.desc": "La ponctualité, l'assiduité aux entraînements et l'effort quotidien comme seules clés de la réussite.",
    "values.v3.title": "Priorité à la Scolarité",
    "values.v3.desc": "Le football et les études vont de pair. Nous veillons au suivi scolaire de chaque académicien.",
    "values.v4.title": "Dépassement de Soi",
    "values.v4.desc": "Cultiver la soif d'apprendre, la résilience face aux obstacles et le courage dans l'adversité.",

    "support.sub": "Solidarité & Développement",
    "support.title": "Soutenir le Centre de Football Moussa Kandjoura Diarra",
    "support.desc": "Ensemble, offrons aux jeunes talents maliens le matériel, les infrastructures et les opportunités nécessaires pour accomplir leur potentiel.",
    "support.c1.title": "Dons d'Équipements Sportifs",
    "support.c1.desc": "Nous avons besoin de ballons, maillots, crampons, chasubles, cônes, filets et trousses médicales pour équiper tous nos jeunes.",
    "support.c1.btn": "Proposer un Don",
    "support.c2.title": "Partenariats & Sponsoring",
    "support.c2.desc": "Entreprises, organisations et mécènes : associez votre image au développement de la jeunesse et au sport au Mali.",
    "support.c2.btn": "Devenir Partenaire",
    "support.c3.title": "Recruteurs & Clubs Pro",
    "support.c3.desc": "Vous êtes recruteur, agent ou responsable d'un club formateur ? Venez observer nos talents lors de nos matchs et tournois.",
    "support.c3.btn": "Contacter la Direction",

    "contact.sub": "Échange & Inscription",
    "contact.title": "Prenez Contact avec le Centre",
    "contact.desc": "Pour toute demande d'inscription, proposition de partenariat, don de matériel ou visite de recruteur.",
    "contact.panelDesc": "Notre équipe dirigeante et technique est à votre écoute pour répondre à toutes vos questions.",
    "contact.locTitle": "Localisation",
    "contact.locVal": "Mali, Afrique de l'Ouest",
    "contact.waTitle": "WhatsApp & Appel",
    "contact.emailTitle": "Email Officiel",
    "contact.hoursTitle": "Horaires d'Entraînement",
    "contact.hoursVal": "Mardi - Dimanche : Matin & Soir",
    "contact.waBtn": "Discuter sur WhatsApp",

    "form.name": "Nom complet *",
    "form.phone": "Téléphone / WhatsApp *",
    "form.email": "Adresse Email",
    "form.subject": "Objet du Message *",
    "form.opt1": "Inscription d'un jeune joueur",
    "form.opt2": "Partenariat / Sponsoring",
    "form.opt3": "Don de matériel sportif",
    "form.opt4": "Recruteur / Détection de talents",
    "form.opt5": "Autre demande générale",
    "form.message": "Votre Message *",
    "form.submit": "Envoyer le Message",

    "footer.desc": "Former les talents de demain • Éducation, discipline et excellence sportive au Mali.",
    "footer.navTitle": "Navigation Rapide",
    "footer.catsTitle": "Catégories",
    "footer.identityTitle": "Fierté Nationale",
    "footer.motto": "Un Peuple • Un But • Une Foi"
  },
  en: {
    "topbar.tagline": "Youth Football Academy of Excellence & Talent Development",
    "topbar.join": "Join / Contact",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.gallery": "Gallery",
    "nav.squads": "Squads",
    "nav.values": "Our Values",
    "nav.support": "Support Us",
    "nav.contact": "Contact",

    "hero.badge": "Certified Football Academy • Mali",
    "hero.description": "Scouting, nurturing and propelling the future champions of Malian and African football with passion, discipline and educational excellence.",
    "hero.btnGallery": "Explore Gallery",
    "hero.btnSupport": "Support the Academy",

    "stats.players": "Young Talents",
    "stats.categories": "Age Categories",
    "stats.commitment": "Commitment & Passion",
    "stats.vision": "International Vision",

    "about.sub": "Our Story & Mission",
    "about.title": "An Academy Dedicated to Youth and Football",
    "about.desc": "Centre de Football Moussa Kandjoura Diarra is a launching pad for young footballers in Mali, combining elite technical training, character education, and professional pathways.",
    "about.card1.title": "Elite Technical Training",
    "about.card1.desc": "Intensive curriculum focusing on ball mastery, pitch awareness, quick decision-making, and modern tactical intelligence.",
    "about.card2.title": "Education & Discipline",
    "about.card2.desc": "Football as a school of life. We instill respect, teamwork, academic commitment, and resilience in every young player.",
    "about.card3.title": "Professional Pathways",
    "about.card3.desc": "Participation in regional and national tournaments, scouting showcases, and partnerships with international academies.",
    "about.storyTag": "Spirit of the Lions",
    "about.storyTitle": "Strong Roots, Wings to Fly",
    "about.storyP1": "Founded on the conviction that raw talent thrives in every community across Mali, Centre de Football Moussa Kandjoura Diarra provides a structured and supportive environment to turn football dreams into reality.",
    "about.storyP2": "Under the emblem of the twin roaring lions and three stars of excellence, our staff works tirelessly to shape complete athletes and exemplary leaders.",
    "about.pill1": "Passionate Coaching",
    "about.pill2": "Continuous Development",
    "about.pill3": "Real Opportunities",

    "prog.sub": "Curriculum",
    "prog.title": "Our Age Categories & Programs",
    "prog.desc": "Progressive methodology tailored to each stage of athletic, technical, and mental growth.",
    "prog.featured": "Competition",
    "prog.u13.age": "10 - 12 years old",
    "prog.u13.title": "Foundations & Mastery",
    "prog.u13.desc": "Motor skills coordination, ball control, love of the collective game, and sportsmanship fundamentals.",
    "prog.u13.f1": "Individual technique & dribbling",
    "prog.u13.f2": "Small-sided games & creativity",
    "prog.u13.f3": "Sporting values and respect",
    "prog.u15.age": "13 - 14 years old",
    "prog.u15.title": "Development & Tactics",
    "prog.u15.desc": "Refining technical execution under pressure, tactical spacing, and match situation awareness.",
    "prog.u15.f1": "Rapid decision making",
    "prog.u15.f2": "Attack / defense transitions",
    "prog.u15.f3": "Age-appropriate athletic conditioning",
    "prog.u17.age": "15 - 16 years old",
    "prog.u17.title": "High Performance",
    "prog.u17.desc": "High athletic demands, advanced tactical systems, video analysis, and mental toughness for competitive matches.",
    "prog.u17.f1": "Competitive league matches",
    "prog.u17.f2": "Power & aerobic stamina",
    "prog.u17.f3": "Continuous player assessments",
    "prog.u20.age": "17 - 20 years old",
    "prog.u20.title": "Pro Pathway & Elite",
    "prog.u20.desc": "Trial preparation, showcase tournaments, exposure to international scouts, and career guidance.",
    "prog.u20.f1": "Scout and agent showcases",
    "prog.u20.f2": "Elite mental conditioning",
    "prog.u20.f3": "Tailored career mentorship",

    "gallery.sub": "Visual Gallery",
    "gallery.title": "The Academy in Action",
    "gallery.desc": "Discover life at Centre de Football Moussa Kandjoura Diarra: training sessions, squad lineups, and matchdays.",
    "gallery.all": "All Photos",
    "gallery.squad": "Squads",
    "gallery.match": "Matches & Pitches",
    "gallery.training": "Training",
    "gallery.crest": "Badge Crest",

    "gallery.item1.title": "Official Squad • Academy Mural",
    "gallery.item1.desc": "Proud players sporting the royal blue and white kits beneath the three stars and twin lions.",
    "gallery.item2.title": "Full Squad Training Session",
    "gallery.item2.desc": "Squad gathering on the pitch with training footballs ready for practice.",
    "gallery.item3.title": "Matchday Lineup • Earth Pitch",
    "gallery.item3.desc": "Solidarity and focus prior to kickoff in neon-green and black match kits.",
    "gallery.item4.title": "Matchday Lineup • Grass Pitch",
    "gallery.item4.desc": "Athletes proudly representing Mali in official match uniforms.",
    "gallery.item5.title": "Team Cohesion & Unity",
    "gallery.item5.desc": "The spirit of brotherhood and mutual respect at the heart of the club.",
    "gallery.item6.title": "Dedication & Hard Work",
    "gallery.item6.desc": "Every training session is a step forward toward excellence.",
    "gallery.item7.title": "Official CFMKD Crest",
    "gallery.item7.desc": "Emblem of strength, gold stars, and sporting pride.",

    "squad.sub": "Our Athletes",
    "squad.title": "Squad & Position Roster",
    "squad.desc": "A united and determined squad covering all key tactical roles in modern football.",
    "squad.posGK": "Goalkeepers",
    "squad.posGKDesc": "Last line of defense • Reflexes & Box Command",
    "squad.gkLeader": "Starting GK (Orange Kit) • Aerial Dominance",
    "squad.statusStarter": "Starter",
    "squad.posDEF": "Defenders",
    "squad.posDEFDesc": "Toughness, Anticipation & Build-up",
    "squad.defLead": "Defensive Anchor • Aerial Presence",
    "squad.posMID": "Midfielders",
    "squad.posMIDDesc": "Creativity, Ball Recovery & Tempo",
    "squad.posFWD": "Forwards & Wingers",
    "squad.posFWDDesc": "Finishing, Pace & Clinical Precision",

    "values.sub": "Our DNA",
    "values.title": "The 4 Core Pillars of the Academy",
    "values.desc": "Beyond football, we shape respectful men and responsible citizens for tomorrow.",
    "values.v1.title": "Respect & Brotherhood",
    "values.v1.desc": "Total respect towards teammates, opponents, referees, coaches, and supporters.",
    "values.v2.title": "Discipline & Rigor",
    "values.v2.desc": "Punctuality, consistency in practice, and daily commitment as the only keys to success.",
    "values.v3.title": "Academic Priority",
    "values.v3.desc": "Football and education go hand in hand. We monitor every player's academic progress.",
    "values.v4.title": "Exceeding Limits",
    "values.v4.desc": "Cultivating the hunger to learn, resilience in face of hurdles, and courage under pressure.",

    "support.sub": "Solidarity & Growth",
    "support.title": "Support Centre de Football Moussa Kandjoura Diarra",
    "support.desc": "Together, let's provide young Malian talents with the equipment, facilities, and opportunities they need.",
    "support.c1.title": "Sports Equipment Donations",
    "support.c1.desc": "We welcome footballs, boots, jerseys, bibs, cones, nets, and medical kits to equip all our players.",
    "support.c1.btn": "Offer a Donation",
    "support.c2.title": "Sponsorship & Partnerships",
    "support.c2.desc": "Businesses and sponsors: align your brand with youth empowerment and grassroots sports in Mali.",
    "support.c2.btn": "Become a Partner",
    "support.c3.title": "Scouts & Pro Clubs",
    "support.c3.desc": "Are you a scout, agent, or club manager? Come observe our top talents at upcoming matches.",
    "support.c3.btn": "Contact Academy Directors",

    "contact.sub": "Get in Touch",
    "contact.title": "Contact the Academy",
    "contact.desc": "For player registrations, sponsorship proposals, equipment donations, or scout visits.",
    "contact.panelDesc": "Our coaching and management team is available to assist with any questions.",
    "contact.locTitle": "Location",
    "contact.locVal": "Mali, West Africa",
    "contact.waTitle": "WhatsApp & Calls",
    "contact.emailTitle": "Official Email",
    "contact.hoursTitle": "Training Hours",
    "contact.hoursVal": "Tuesday - Sunday: Morning & Evening",
    "contact.waBtn": "Chat on WhatsApp",

    "form.name": "Full Name *",
    "form.phone": "Phone / WhatsApp *",
    "form.email": "Email Address",
    "form.subject": "Message Subject *",
    "form.opt1": "Young player registration",
    "form.opt2": "Partnership / Sponsorship",
    "form.opt3": "Equipment donation",
    "form.opt4": "Scout / Talent evaluation",
    "form.opt5": "Other inquiry",
    "form.message": "Your Message *",
    "form.submit": "Send Message",

    "footer.desc": "Nurturing tomorrow's champions • Education, discipline, and sporting excellence in Mali.",
    "footer.navTitle": "Quick Links",
    "footer.catsTitle": "Categories",
    "footer.identityTitle": "National Pride",
    "footer.motto": "One People • One Goal • One Faith"
  }
};

let currentLang = 'fr';

// --- SWITCH LANGUAGE FUNCTION ---
function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update button classes
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  // Update all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update form placeholders
  const nameInput = document.getElementById('form-name');
  const phoneInput = document.getElementById('form-phone');
  const msgInput = document.getElementById('form-message');
  if (nameInput && phoneInput && msgInput) {
    if (lang === 'en') {
      nameInput.placeholder = 'e.g. Mamadou Traoré';
      phoneInput.placeholder = 'e.g. +223 XX XX XX XX';
      msgInput.placeholder = 'Describe your inquiry, player age if registering, or sponsorship details...';
    } else {
      nameInput.placeholder = 'Ex: Mamadou Traoré';
      phoneInput.placeholder = 'Ex: +223 XX XX XX XX';
      msgInput.placeholder = "Précisez votre demande, l'âge du joueur si inscription, ou vos propositions de soutien...";
    }
  }

  // Update Lightbox if open
  updateLightboxCaption();
}

// --- STATS COUNTER ANIMATION ---
function initCounters() {
  const statValues = document.querySelectorAll('.stat-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statValues.forEach(val => {
          const target = parseInt(val.getAttribute('data-target'), 10) || 0;
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const current = Math.floor(progress * target);
            val.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              val.textContent = target;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.hero-stats-grid');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- GALLERY FILTER & LIGHTBOX ---
let galleryItems = [];
let currentLightboxIndex = 0;

function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      currentLightboxIndex = idx;
      openLightbox(idx);
    });
  });

  function openLightbox(idx) {
    const item = galleryItems[idx];
    if (!item) return;
    const imgSrc = item.getAttribute('data-img');
    modalImg.src = imgSrc;
    updateLightboxCaption();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentLightboxIndex);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

function updateLightboxCaption() {
  const item = galleryItems[currentLightboxIndex];
  if (!item) return;
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  
  // Look up localized title / desc if available
  const innerTitle = item.querySelector('h4');
  const innerDesc = item.querySelector('p');
  if (titleEl && innerTitle) titleEl.textContent = innerTitle.textContent;
  if (descEl && innerDesc) descEl.textContent = innerDesc.textContent;
}

// --- NAVBAR & MOBILE MENU ---
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveLink();
  });

  // Mobile toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Active section spy
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link && scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
}

// --- CONTACT FORM INTERACTION ---
function initContactForm() {
  const form = document.getElementById('academy-contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const email = document.getElementById('form-email').value.trim() || 'Non spécifié';
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    // Prepare WhatsApp message
    const formattedText = `*Nouvelle Demande CFMKD*\n` +
      `👤 *Nom:* ${name}\n` +
      `📞 *Téléphone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `🎯 *Objet:* ${subject}\n` +
      `📝 *Message:* ${message}`;

    const encodedText = encodeURIComponent(formattedText);
    const waUrl = `https://wa.me/22300000000?text=${encodedText}`;

    // Show confirmation and trigger WhatsApp redirect
    feedback.className = 'form-feedback-message success';
    feedback.innerHTML = currentLang === 'en' 
      ? `<strong>Thank you ${name}!</strong> Your message has been prepared. <a href="${waUrl}" target="_blank" style="text-decoration:underline; font-weight:bold; color:#ffffff; margin-left:4px;">Click here to send directly via WhatsApp</a>.`
      : `<strong>Merci ${name} !</strong> Votre demande a été préparée. <a href="${waUrl}" target="_blank" style="text-decoration:underline; font-weight:bold; color:#ffffff; margin-left:4px;">Cliquez ici pour finaliser l'envoi direct via WhatsApp</a>.`;

    form.reset();

    // Smooth scroll to feedback
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// --- INITIALIZE ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCounters();
  initGallery();
  initContactForm();

  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
