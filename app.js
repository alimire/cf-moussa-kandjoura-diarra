/**
 * CENTRE DE FOOTBALL MOUSSA KANDJOURA DIARRA (CF – MKD)
 * Main Application Scripts & Interactive Features
 */

// --- BILINGUAL TRANSLATION DICTIONARY (FR / EN) ---
const translations = {
  fr: {
    "topbar.tagline": "CF – MKD : Football • Éducation • Discipline • Voies Locales Sécurisées",
    "nav.home": "Accueil",
    "nav.mission": "Notre Mission",
    "nav.programs": "Programmes",
    "nav.tournament": "Tournoi U17",
    "nav.staff": "Direction & Staff",
    "nav.gallery": "Galerie",
    "nav.support": "Nous Soutenir",
    "nav.contact": "Contact",

    "hero.badge": "Académie de Football au Mali • Dès 8 ans (U8 à Élite)",
    "hero.description": "CF – MKD existe pour développer le talent footballistique et émanciper les jeunes en combinant le football avec l'éducation et la discipline. Nous bâtissons des parcours locaux sûrs et crédibles vers le football professionnel au Mali.",
    "hero.btnMission": "Découvrir Notre Mission",
    "hero.btnTournament": "Tournoi U17 Mali",
    "hero.btnSupport": "Soutenir l'Académie",

    "stats.players": "Jeunes Talents",
    "stats.ageStart": "Dès l'Âge de 8 ans",
    "stats.u17tournament": "Tournoi Inter-Académique U17",
    "stats.safePathways": "Parcours Sécurisés",

    "mission.sub": "Notre Raison d'Être",
    "mission.title": "La Mission du Centre CF – MKD",
    "mission.desc": "CF – MKD utilise le football comme un véhicule d'éducation, d'autodiscipline et d'épanouissement personnel au sein des communautés locales du Mali.",
    "mission.a.title": "Développement du Talent dès 8 Ans",
    "mission.a.desc": "Former les talents footballistiques dès l'âge de huit ans à travers un entraînement structuré, basé sur le mérite et accessible à tous, sans distinction d'origine ni de condition sociale.",
    "mission.a.tag": "Accessible à tous • Au Mérite",
    "mission.b.title": "Éducation, Discipline & Autonomie",
    "mission.b.desc": "Intégrer l'éducation formelle, la discipline personnelle et l'apprentissage de compétences de vie autonomes en parallèle direct du développement footballistique.",
    "mission.b.tag": "Double Projet Sport-Études",
    "mission.c.title": "Voies Locales Sécurisées & Protection",
    "mission.c.desc": "Créer des passerelles locales crédibles et sécurisées pour réduire la nécessité d'une migration irrégulière dangereuse et protéger les enfants contre l'enrôlement dans les réseaux ou gangs.",
    "mission.c.tag": "Impact Social & Protection Vitale",
    "mission.d.title": "Engagement Communautaire & Bien-Être",
    "mission.d.desc": "Promouvoir un engagement communautaire positif, la cohésion sociale et le bien-être global des jeunes à travers les valeurs unificatrices du sport.",
    "mission.d.tag": "Cohésion & Santé des Jeunes",
    "mission.e.title": "Organisation du Tournoi Inter-Académique U17",
    "mission.e.desc": "Organiser le Tournoi Inter-Académique U17, un événement sportif d'envergure attirant les meilleures équipes et académies de l'ensemble du Mali pour offrir une vitrine d'excellence aux jeunes.",
    "mission.e.tag": "Événement Phare National",
    "mission.statementTitle": "Notre Engagement au Mali",
    "mission.statementP": "« L'académie cherche à créer des opportunités concrètes et sécurisées dans l'une des régions qui en a le plus besoin en Afrique de l'Ouest. Bien qu'une expansion future soit envisageable, notre action est résolument et délibérément concentrée sur le Mali à ce stade. »",

    "staff.sub": "Organigramme Officiel",
    "staff.title": "Direction & Encadrement Technique",
    "staff.desc": "Une équipe dévouée, passionnée et expérimentée pour accompagner chaque jeune footballeur sur et en dehors du terrain.",
    "staff.rPres": "Président du Club",
    "staff.tPres": "Président & Fondateur",
    "staff.bPres": "Porteur de la vision CF – MKD, engagé pour l'éducation, l'émancipation de la jeunesse et le rayonnement du football malien.",
    "staff.rVP": "Vice-Président",
    "staff.tVP": "Vice-Président du Club",
    "staff.bVP": "Coordination générale, relations communautaires et développement des partenariats stratégiques du centre.",
    "staff.rHead": "Entraîneur Principal",
    "staff.tHead": "Entraîneur Principal (Head Coach)",
    "staff.bHead": "Supervision de la méthodologie d'entraînement globale, préparation tactique avancée et management des équipes de compétition.",
    "staff.rU13": "Entraîneur U13",
    "staff.tU13": "Coach Catégorie U13",
    "staff.bU13": "Spécialiste du développement technique intermédiaire, de la coordination et du positionnement tactique des jeunes.",
    "staff.rU8": "Entraîneur U8",
    "staff.tU8": "Coach Catégorie U8 (Dès 8 ans)",
    "staff.bU8": "Éveil des plus jeunes, transmission de la passion du ballon rond, motricité fondamentale et esprit d'équipe.",
    "staff.rDoc": "Médecin du Club",
    "staff.tDoc": "Médecin Responsable Médical",
    "staff.bDoc": "Suivi de la santé des académiciens, prévention des blessures, bilan de condition physique et premiers secours.",

    "tourn.badge": "Événement Majeur National",
    "tourn.title": "Tournoi Inter-Académique U17 du Mali",
    "tourn.desc": "Organisé avec fierté par le Centre de Football Moussa Kandjoura Diarra, ce tournoi annuel rassemble les meilleures académies et équipes U17 venues de toutes les régions du Mali. Un cadre prestigieux de détection, d'échange sportif et de célébration du talent jeune.",
    "tourn.h1Title": "Équipes de Tout le Mali",
    "tourn.h1Desc": "Rassemblement des centres de formation nationaux",
    "tourn.h2Title": "Vitrine de Détection",
    "tourn.h2Desc": "Observation pour recruteurs, agents et formateurs",
    "tourn.h3Title": "Excellence & Fair-Play",
    "tourn.h3Desc": "Trophées, médailles et promotion des valeurs sportives",
    "tourn.btnJoin": "Inscrire une Équipe / Partenaire",
    "tourn.btnWa": "Infos Tournoi sur WhatsApp",

    "prog.sub": "Cursus de Formation",
    "prog.title": "Nos Catégories d'Âge & Parcours Sportifs",
    "prog.desc": "Une pédagogie progressive dès 8 ans adaptée à chaque étape de la croissance physique, technique et mentale du joueur.",
    "prog.featured": "Compétition & Tournoi",
    "prog.u8.age": "Dès 8 ans",
    "prog.u8.title": "Initiation & Éveil",
    "prog.u8.desc": "Découverte du jeu, développement de la motricité, manipulation de balle et plaisir collectif.",
    "prog.u8.f1": "Coordination & agilité motrice",
    "prog.u8.f2": "Jeux ludiques avec ballon",
    "prog.u8.f3": "Apprentissage du respect mutuel",
    "prog.u13.age": "10 - 12 ans",
    "prog.u13.title": "Bases Techniques & Collectif",
    "prog.u13.desc": "Perfectionnement des contrôles, passes, dribbles, occupation de l'espace et suivi scolaire régulier.",
    "prog.u13.f1": "Technique individuelle & gestuelle",
    "prog.u13.f2": "Petits terrains & créativité",
    "prog.u13.f3": "Suivi éducatif & discipline",
    "prog.u15.age": "13 - 14 ans",
    "prog.u15.title": "Développement & Tactique",
    "prog.u15.desc": "Compréhension des blocs d'équipe, transitions, prise de décision rapide sous pression et renforcement physique.",
    "prog.u15.f1": "Intelligence tactique de jeu",
    "prog.u15.f2": "Transitions & vitesse d'exécution",
    "prog.u15.f3": "Conditionnement aérobie",
    "prog.u17.age": "15 - 16 ans",
    "prog.u17.title": "Haute Performance & Compétition",
    "prog.u17.desc": "Rigueur tactique avancée, matchs compétitifs nationaux et participation au Tournoi Inter-Académique U17.",
    "prog.u17.f1": "Tournoi Inter-Académique Mali",
    "prog.u17.f2": "Puissance & explosivité physique",
    "prog.u17.f3": "Préparation mentale d'élite",
    "prog.u20.age": "17 - 20 ans",
    "prog.u20.title": "Passerelle Professionnelle Sécurisée",
    "prog.u20.desc": "Préparation aux tests professionnels, exposition aux scouts et création de parcours locaux crédibles et légaux.",
    "prog.u20.f1": "Showcases recruteurs & clubs",
    "prog.u20.f2": "Parcours protégés & éthiques",
    "prog.u20.f3": "Accompagnement de carrière",

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

    "support.sub": "Solidarité & Développement",
    "support.title": "Soutenir le Centre de Football Moussa Kandjoura Diarra",
    "support.desc": "Ensemble, offrons aux jeunes talents maliens le matériel, les infrastructures et les opportunités nécessaires pour accomplir leur potentiel en toute sécurité.",
    "support.c1.title": "Dons d'Équipements Sportifs",
    "support.c1.desc": "Nous avons un besoin continu de ballons de foot, maillots, crampons, chasubles, cônes, filets et trousses de premiers secours pour équiper nos académiciens dès 8 ans.",
    "support.c1.btn": "Proposer un Don",
    "support.c2.title": "Partenariats & Sponsoring Tournoi",
    "support.c2.desc": "Entreprises, mécènes et institutions : associez votre marque à l'émancipation de la jeunesse malienne et soutenez l'organisation du Tournoi Inter-Académique U17.",
    "support.c2.btn": "Devenir Partenaire",
    "support.c3.title": "Recruteurs & Clubs Professionnels",
    "support.c3.desc": "Vous êtes recruteur, agent officiel ou club formateur ? Venez observer nos talents lors de nos matchs et du Tournoi U17 dans un cadre sécurisé et éthique.",
    "support.c3.btn": "Contacter la Direction",

    "contact.sub": "Échange & Inscription",
    "contact.title": "Prenez Contact avec le Centre CF – MKD",
    "contact.desc": "Pour toute inscription de joueur dès 8 ans, proposition de partenariat, don de matériel ou information sur le Tournoi U17.",
    "contact.panelDesc": "Le Président Moussa K Diarra, le Vice-Président Aliou K Diarra et l'équipe technique sont à votre écoute.",
    "contact.locTitle": "Localisation",
    "contact.locVal": "Mali, Afrique de l'Ouest",
    "contact.wa1Title": "Téléphone & WhatsApp Ligne 1",
    "contact.wa2Title": "Téléphone & WhatsApp Ligne 2",
    "contact.emailTitle": "Email Officiel",
    "contact.medTitle": "Pôle Santé & Médical",

    "form.name": "Nom complet *",
    "form.phone": "Téléphone / WhatsApp *",
    "form.email": "Adresse Email",
    "form.subject": "Objet du Message *",
    "form.opt1": "Inscription d'un jeune joueur (dès 8 ans)",
    "form.optTournament": "Tournoi Inter-Académique U17",
    "form.opt2": "Partenariat / Sponsoring",
    "form.opt3": "Don de matériel sportif (ballons, maillots, etc.)",
    "form.opt4": "Recruteur / Détection de talents",
    "form.opt5": "Autre demande générale",
    "form.message": "Votre Message *",
    "form.submit": "Envoyer le Message",

    "footer.desc": "Former les talents de demain dès l'âge de 8 ans • Allier football, éducation, discipline et création de parcours locaux sécurisés au Mali.",
    "footer.navTitle": "Navigation",
    "footer.orgTitle": "Direction & Staff",
    "footer.identityTitle": "Fierté & Impact Mali",
    "footer.motto": "Un Peuple • Un But • Une Foi"
  },
  en: {
    "topbar.tagline": "CF – MKD: Football • Education • Discipline • Safe Local Pathways",
    "nav.home": "Home",
    "nav.mission": "Our Mission",
    "nav.programs": "Programs",
    "nav.tournament": "U17 Tournament",
    "nav.staff": "Leadership & Staff",
    "nav.gallery": "Gallery",
    "nav.support": "Support Us",
    "nav.contact": "Contact",

    "hero.badge": "Football Academy in Mali • From Age 8 (U8 to Elite)",
    "hero.description": "CF – MKD exists to develop football talent and empower young people by combining football with education and discipline. The academy seeks to create safe and credible local pathways to professional football in Mali.",
    "hero.btnMission": "Discover Our Mission",
    "hero.btnTournament": "U17 Tournament Mali",
    "hero.btnSupport": "Support the Academy",

    "stats.players": "Young Talents",
    "stats.ageStart": "From Age 8",
    "stats.u17tournament": "U17 Inter-Academic Cup",
    "stats.safePathways": "Safe Pathways",

    "mission.sub": "Our Purpose",
    "mission.title": "The Mission of CF – MKD",
    "mission.desc": "CF – MKD uses football as a vehicle for education, self-discipline and personal development within local communities in Mali.",
    "mission.a.title": "Talent Development from Age Eight",
    "mission.a.desc": "Develop football talent from the age of eight through structured, merit-based training accessible to all, regardless of background.",
    "mission.a.tag": "Accessible to All • Merit-Based",
    "mission.b.title": "Education, Discipline & Life Skills",
    "mission.b.desc": "Integrate education, discipline and independent life skills alongside football development.",
    "mission.b.tag": "Dual Sport-Education Model",
    "mission.c.title": "Safe Local Pathways & Protection",
    "mission.c.desc": "Create credible local pathways that reduce the need for dangerous irregular migration or children falling into gang affiliations.",
    "mission.c.tag": "Social Impact & Youth Protection",
    "mission.d.title": "Community Engagement & Wellbeing",
    "mission.d.desc": "Promote positive community engagement and youth wellbeing through the unifying power of sport.",
    "mission.d.tag": "Community & Youth Wellbeing",
    "mission.e.title": "U17 Inter Academic Tournament",
    "mission.e.desc": "Organise the U17 Inter Academic Tournament attracting teams from across Mali, creating a premier national showcase for youth talent.",
    "mission.e.tag": "Flagship National Event",
    "mission.statementTitle": "Our Commitment in Mali",
    "mission.statementP": "“The academy seeks to create safe and credible local pathways to professional football in one of West Africa's most deprived regions, Mali. While future expansion is possible, the academy is deliberately focused on Mali at this stage.”",

    "staff.sub": "Official Hierarchy",
    "staff.title": "Leadership & Technical Staff",
    "staff.desc": "A dedicated, passionate, and experienced staff nurturing each young athlete on and off the pitch.",
    "staff.rPres": "Club President",
    "staff.tPres": "President & Founder",
    "staff.bPres": "Leading the CF – MKD vision, dedicated to youth empowerment, education, and the rise of Malian football.",
    "staff.rVP": "Vice President",
    "staff.tVP": "Club Vice President",
    "staff.bVP": "General management, community relations, and strategic institutional partnerships.",
    "staff.rHead": "Head Coach",
    "staff.tHead": "Head Coach",
    "staff.bHead": "Masterminding coaching methodology, advanced tactical systems, and competitive team management.",
    "staff.rU13": "U13 Coach",
    "staff.tU13": "U13 Category Coach",
    "staff.bU13": "Specialist in intermediate technical mastery, motor coordination, and tactical spatial awareness.",
    "staff.rU8": "U8 Coach",
    "staff.tU8": "U8 Coach (From Age 8)",
    "staff.bU8": "Grassroots foundational training, instilling passion for football, core agility, and team values.",
    "staff.rDoc": "Club Doctor",
    "staff.tDoc": "Chief Medical Officer",
    "staff.bDoc": "Monitoring student-athlete health, injury prevention, physical fitness tracking, and pitchside medical care.",

    "tourn.badge": "Major National Event",
    "tourn.title": "Mali U17 Inter Academic Tournament",
    "tourn.desc": "Proudly organized by Centre de Football Moussa Kandjoura Diarra, this annual tournament gathers premier U17 teams and academies from across Mali. A vital platform for scouting, sporting exchange, and celebrating young champions.",
    "tourn.h1Title": "Teams from Across Mali",
    "tourn.h1Desc": "Uniting youth academies nationwide",
    "tourn.h2Title": "Scouting Showcase",
    "tourn.h2Desc": "Direct observation by scouts, agents, and clubs",
    "tourn.h3Title": "Excellence & Fair Play",
    "tourn.h3Desc": "Trophies, awards, and sportsmanship promotion",
    "tourn.btnJoin": "Register a Team / Sponsor",
    "tourn.btnWa": "Tournament WhatsApp Info",

    "prog.sub": "Curriculum",
    "prog.title": "Our Age Categories & Pathways",
    "prog.desc": "Progressive methodology starting from age 8 tailored to each stage of athletic, technical, and mental growth.",
    "prog.featured": "Competition & Tournament",
    "prog.u8.age": "From Age 8",
    "prog.u8.title": "Grassroots & Motor Skills",
    "prog.u8.desc": "Game discovery, fundamental motor agility, ball manipulation, and the joy of collective football.",
    "prog.u8.f1": "Coordination & motor agility",
    "prog.u8.f2": "Fun ball exercises & dribbling",
    "prog.u8.f3": "Respect and sportsmanship values",
    "prog.u13.age": "10 - 12 years old",
    "prog.u13.title": "Technical Mastery & Teamwork",
    "prog.u13.desc": "Refining ball control, passing, dribbling, spatial awareness, and consistent school attendance tracking.",
    "prog.u13.f1": "Individual technique & finesse",
    "prog.u13.f2": "Small-sided matches & creativity",
    "prog.u13.f3": "Academic tracking & discipline",
    "prog.u15.age": "13 - 14 years old",
    "prog.u15.title": "Tactics & Athletic Development",
    "prog.u15.desc": "Team shape, pressing transitions, quick decision-making under pressure, and structured physical growth.",
    "prog.u15.f1": "Tactical match intelligence",
    "prog.u15.f2": "Pace of execution & transitions",
    "prog.u15.f3": "Aerobic stamina conditioning",
    "prog.u17.age": "15 - 16 years old",
    "prog.u17.title": "High Performance & Competition",
    "prog.u17.desc": "Advanced tactical systems, national competitive fixtures, and playing in the U17 Inter Academic Tournament.",
    "prog.u17.f1": "Mali U17 Inter Academic Tournament",
    "prog.u17.f2": "Power & explosive athleticism",
    "prog.u17.f3": "Elite mental toughness",
    "prog.u20.age": "17 - 20 years old",
    "prog.u20.title": "Safe Professional Pathways",
    "prog.u20.desc": "Trial preparation, showcase games for scouts, and creating legitimate, protected pathways to professional football.",
    "prog.u20.f1": "Scout and agent showcases",
    "prog.u20.f2": "Ethical and protected careers",
    "prog.u20.f3": "Individual career mentorship",

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

    "support.sub": "Solidarity & Growth",
    "support.title": "Support Centre de Football Moussa Kandjoura Diarra",
    "support.desc": "Together, let's provide young Malian talents with the equipment, facilities, and safe opportunities they need.",
    "support.c1.title": "Sports Equipment Donations",
    "support.c1.desc": "We welcome footballs, boots, jerseys, bibs, cones, nets, and first-aid medical kits to equip all our young players from age 8.",
    "support.c1.btn": "Offer a Donation",
    "support.c2.title": "Partnership & Tournament Sponsorship",
    "support.c2.desc": "Businesses and sponsors: align your brand with youth empowerment and help support the U17 Inter Academic Tournament.",
    "support.c2.btn": "Become a Partner",
    "support.c3.title": "Scouts & Pro Clubs",
    "support.c3.desc": "Are you a scout, agent, or club manager? Come observe our top talents at upcoming matches and the U17 Tournament in an ethical framework.",
    "support.c3.btn": "Contact Academy Directors",

    "contact.sub": "Get in Touch",
    "contact.title": "Contact CF – MKD Academy",
    "contact.desc": "For player registrations from age 8, sponsorship proposals, equipment donations, or U17 Tournament inquiries.",
    "contact.panelDesc": "President Moussa K Diarra, Vice President Aliou K Diarra, and the coaching staff are at your service.",
    "contact.locTitle": "Location",
    "contact.locVal": "Mali, West Africa",
    "contact.wa1Title": "Phone & WhatsApp Line 1",
    "contact.wa2Title": "Phone & WhatsApp Line 2",
    "contact.emailTitle": "Official Email",
    "contact.medTitle": "Medical & Health Team",

    "form.name": "Full Name *",
    "form.phone": "Phone / WhatsApp *",
    "form.email": "Email Address",
    "form.subject": "Message Subject *",
    "form.opt1": "Young player registration (from age 8)",
    "form.optTournament": "U17 Inter Academic Tournament",
    "form.opt2": "Partnership / Sponsorship",
    "form.opt3": "Equipment donation (balls, boots, kits)",
    "form.opt4": "Scout / Talent evaluation",
    "form.opt5": "Other inquiry",
    "form.message": "Your Message *",
    "form.submit": "Send Message",

    "footer.desc": "Nurturing tomorrow's champions from age 8 • Football, education, discipline and safe local pathways in Mali.",
    "footer.navTitle": "Navigation",
    "footer.orgTitle": "Leadership & Staff",
    "footer.identityTitle": "National Pride & Impact",
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
  const btnFr = document.getElementById('lang-fr');
  const btnEn = document.getElementById('lang-en');
  if (btnFr) btnFr.classList.toggle('active', lang === 'fr');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

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
      phoneInput.placeholder = 'e.g. +223 71 85 35 40';
      msgInput.placeholder = 'Describe your inquiry, player age if registering, or sponsorship details...';
    } else {
      nameInput.placeholder = 'Ex: Mamadou Traoré';
      phoneInput.placeholder = 'Ex: +223 71 85 35 40';
      msgInput.placeholder = "Précisez votre demande, l'âge du joueur si inscription, ou vos propositions de soutien au centre...";
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

// --- CONTACT FORM INTERACTION WITH REAL WHATSAPP NUMBERS ---
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

    // Prepare WhatsApp message for CF-MKD
    const formattedText = `*Nouvelle Demande - CF MKD (Mali)*\n` +
      `👤 *Nom:* ${name}\n` +
      `📞 *Téléphone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `🎯 *Objet:* ${subject}\n` +
      `📝 *Message:* ${message}`;

    const encodedText = encodeURIComponent(formattedText);
    const waUrl1 = `https://wa.me/22371853540?text=${encodedText}`;
    const waUrl2 = `https://wa.me/22384023759?text=${encodedText}`;

    // Show confirmation and trigger WhatsApp redirect
    feedback.className = 'form-feedback-message success';
    feedback.innerHTML = currentLang === 'en' 
      ? `<strong>Thank you ${name}!</strong> Your message has been prepared.<br>` +
        `<a href="${waUrl1}" target="_blank" class="btn btn-whatsapp-full" style="margin-top:0.75rem; display:inline-flex; padding:0.5rem 1rem;">` +
        `<i class="fa-brands fa-whatsapp"></i> Send via WhatsApp Line 1 (+223 71 85 35 40)</a> ` +
        `<a href="${waUrl2}" target="_blank" class="btn btn-whatsapp-secondary" style="margin-top:0.75rem; display:inline-flex; padding:0.5rem 1rem;">` +
        `<i class="fa-brands fa-whatsapp"></i> WhatsApp Line 2 (+223 84 02 37 59)</a>`
      : `<strong>Merci ${name} !</strong> Votre message a été préparé.<br>` +
        `<a href="${waUrl1}" target="_blank" class="btn btn-whatsapp-full" style="margin-top:0.75rem; display:inline-flex; padding:0.5rem 1rem;">` +
        `<i class="fa-brands fa-whatsapp"></i> Envoyer via WhatsApp Ligne 1 (+223 71 85 35 40)</a> ` +
        `<a href="${waUrl2}" target="_blank" class="btn btn-whatsapp-secondary" style="margin-top:0.75rem; display:inline-flex; padding:0.5rem 1rem;">` +
        `<i class="fa-brands fa-whatsapp"></i> WhatsApp Ligne 2 (+223 84 02 37 59)</a>`;

    form.reset();
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
