import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'CALL Learning | Tech side', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'CALL Learning, the tech side', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the other side of...',
  name: 'CALL Learning',
  subtitle: 'Expertise technique LMS Open Source.',
  cta: 'Suivez nous...',
};

// ABOUT DATA
export const aboutData = {
  img: 'dog.jpg',
  paragraphOne: '"Eating your own Dog Food" ou "Dogfooding" c\'est la pratique de certains éditeur de logiciels qui ' +
    'consiste à utiliser ses propres produits, ici les plateformes d\'apprentissage ou ' +
    'Learning Management System (LMS)',
  paragraphTwo: 'Bien que cela ne paraîsse pas très apétissant, c\'est la meilleure manière d\'apprendre et de savoir ' +
    ' résoudre les problèmes quotidiens de ceux qui utilisent les mêmes logiciels que nous.',
  paragraphThree: 'Ici on va parler Open Source / Logiciel libre seulement ! C\'est uniquement ce que nous produisons et ' +
    'de cette manière que nous travaillons. Ceux qui nous ont fait confiance on pu indrectement contribuer au projet Moodle™ ou Open edX™.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'imt-projet.jpg',
    title: 'La pédagothème numérique de l\'IMT',
    info: 'Un thème, un mur pédagogique pour partager des resources, un catalogue et des pages de cours',
    info2: 'Ce projet se distingue par une volonté de partager les resources en ligne. En plus du catalogue de cours et d\'activités' +
      ' qui permet de filter les ressources et cours, Nous avons intégré le bloc "sharing cart" qui permet de copier et coller ' +
      'des resources d\'autres cours dans son propre cours.',
    url: 'https://imtpn.imt.fr/',
    repo: 'https://github.com/call-learning/moodle-theme_imtpn', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vetagro-projet.jpg',
    title: 'VetagroPro, le site de formation continue de VetagroSup',
    info: 'Le site de la formation continue de VetagroPro a une identité spécifique et est configurable pour être utilisé avec différent styles ou ' +
      'code couleur. La page de garde est constituée de blocs configurables qui suivent l\'actualité de la formation continue de VetagroSup.',
    info2: '',
    url: 'https://vetagropro.vetagro-sup.fr/',
    repo: 'https://github.com/call-learning/moodle-theme_vetagro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cveto-projet.jpg',
    title: 'Le concours vétérinaire Post-bac 2021',
    info: 'Le site du concours vétérinaire postbac consiste en un ensemble d\'outils permettant d\'ajouter des informations sur des pages statiques (comme un CMS) mais' +
      ' aussi un questionnaire permettant de compléter son dossier Parcoursup en vue du concours.',
    info2: '',
    url: 'https://concours-veto-postbac.fr/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous voulez travailler avec nous ? Super !',
  btn: 'Contactez nous',
  email: 'contact@call-learning.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CallLearning',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/call-learning/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/call-learning',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
