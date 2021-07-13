import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'CALL Learning | Tech side', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'CALL Learning, the tech side', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the other side of ',
  name: 'CALL Learning',
  subtitle: 'Expertise technique LMS Open Source.',
  cta: 'Suivez-nous...',
};

// ABOUT DATA
export const aboutData = {
  img: 'dog.png',
  paragraphOne: '"Eating your own Dog Food" ou "Dogfooding" c\'est la pratique de certains éditeurs de logiciels qui ' +
    'consiste à utiliser ses propres produits, ici les plateformes d\'apprentissage ou ' +
    'Learning Management System (LMS)',
  paragraphTwo: 'Bien que cela ne paraîsse pas très appétissant, c\'est la meilleure manière d\'apprendre et de savoir ' +
    ' résoudre les problèmes quotidiens de ceux qui utilisent les mêmes logiciels que nous.',
  paragraphThree: 'Ici on va parler Open Source / Logiciel libre seulement ! C\'est uniquement ce que nous produisons et ' +
    'de cette manière que nous travaillons. Ceux qui nous ont fait confiance, ont pu aussi contribuer au projet Moodle™ ou Open edX™.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'imt-projet.jpg',
    title: 'La pédagothème numérique de l\'IMT',
    info: 'Un thème, un mur pédagogique pour partager des ressources, un catalogue et des pages de cours.',
    info2: 'Ce projet se distingue par une volonté de partager les ressources en ligne. En plus du catalogue de cours et d\'activités' +
      ' qui permettent de filter les ressources et les cours, nous avons intégré le bloc "sharing cart" pour et coller ' +
      'des activités d\'autres cours dans son propre cours.',
    url: 'https://imtpn.imt.fr/',
    repo: 'https://github.com/call-learning/moodle-theme_imtpn', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vetagro-projet.jpg',
    title: 'VetagroPro, le site de formation continue de VetagroSup.',
    info: 'Le site de la formation continue de VetagroPro a une identité spécifique configurable pour être utilisée avec différents styles et ' +
      ' couleurs. La page de garde est constituée de blocs configurables qui suivent l\'actualité de la formation continue de VetagroSup.',
    info2: '',
    url: 'https://vetagropro.vetagro-sup.fr/',
    repo: 'https://github.com/call-learning/moodle-theme_vetagro', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cveto-projet.jpg',
    title: 'Le concours vétérinaire Post-bac 2021',
    info: 'Le site du concours vétérinaire postbac pour les écoles vétérinaires (ENVF) consiste en un ensemble d\'outils permettant d\'ajouter des informations sur des pages statiques (comme un CMS) mais' +
      ' aussi un questionnaire permettant de compléter son dossier Parcoursup.',
    info2: '',
    url: 'https://concours-veto-postbac.fr/',
    repo: 'https://github.com/call-learning/moodle-theme_envf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ressouces-num.jpg',
    title: 'Les ressources Numériques HESAM et les Soft Skills',
    info: 'La plateforme Ressources Numériques met à disposition des outils d’autopositionnement sur des compétences non techniques ainsi que des ressources permettant de mettre à jour ses connaissances. Le questionnaire ' +
    ' Softskills développé sous forme de module H5P est intégrable dans Moodle sous forme d\'activité.',
    info2:  'Un ensemble de badges (désignés spécifiquement pour le projet) peut ensuite être attribué par les enseignants en utilisant Open Badges Factory.',
    url: 'https://ressourcesnumeriques.hesam.fr/',
    repo: 'https://github.com/call-learning/H5P.SoftSkills.H5P', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'compet-vet-suivi.jpg',
    title: 'CompetVetSuivi',
    info: 'CompetVetSuivi aide à suivre sa progression en connaissance et compétences sur plusieurs années. ' +
      'Une matrice de compétences croisée avec les UE/UC de chaque année permet au module ' +
      'de suivre la progression de chaque étudiant et de les afficher sur un Bloc Moodle ',
    info2:  'Un filtre a aussi été développé afin de pouvoir représenter les compétences et connaissances liées à chaque unité d\'enseignement.',
    url: '',
    repo: 'https://github.com/call-learning/moodle-local_competvetsuivi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'compet-vet-eval.jpg',
    title: 'Evaluation des situations cliniques',
    info: 'CompetVetEval vise à faciliter l\'évaluation l\'acquisition des compétences cliniques par les étudiants des écoles nationales vétérinaires de France.' +
      ' L\'objectif est de permettre aux enseignants de recueillir facilement un ensemble d\'observations des compétences cliniques mises en œuvre par chacun, puis de faire la synthèse de ces observations pour produire régulièrement une évaluation des compétences démontrées par chaque étudiant. .',
    info2:  'Un module Moodle et une application (en Ionic tout comme l\'application mobile Moodle) se connectent ' +
      ' via des webservices (développement en cours de finalisation).',
    url: '',
    repo: 'https://github.com/call-learning/competVetEval', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'savoir-ensam.jpg',
    title: 'Le thème du site Savoir des Arts et Métiers',
    info: 'Nous avons redéveloppé le thème Moodle de l’ENSAM au cours de l’été 2019. L’effort a été porté sur une plus grande facilité d’utilisation et a demandé une phase de maquettage. Le résultat étant un site simplifié et plus agréable à utiliser.',
    info2:  'Nous avons réalisé un thème spécifique basé sur le thème Boost avec un catalogue en accès libre et un tableau de bord spécifique étudiant/enseignant.',
    url: 'https://savoir.ensam.eu/moodle/',
    repo: 'https://github.com/call-learning/moodle-theme_savoir', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous voulez travailler avec nous ? Super !',
  btn: 'Contactez nous',
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
