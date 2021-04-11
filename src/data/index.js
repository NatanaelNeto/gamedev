import linea from '../img/linea.jpg';
import flightSim from '../img/flightSim.jpg';
import betYouGet from '../img/iBetYouGet.jpg';
import cincoMin from '../img/cincoMin.jpg';

import outrun from '../song/outrun.mp3';
import aNewBeginning from '../song/a-new-beginning.mp3';
import lastMission from '../song/last-mission.mp3';

const jobs = [
  {
    id: 0,
    job: 'Revisor de Código',
    company: 'Trybe',
    description: 'Empresa de educação na área de TI',
    period: '01/2021 - Presente',
    tasks: [
      'Revisão e criação de projetos',
      'Revisão e criação de exercícios',
      'Revisão e criação de conteúdo do curso',
    ],
  },
  {
    id: 1,
    job: 'Desenvolvedor Front-end',
    company: 'Inovaula',
    description: 'Plataforma de suporte para professores',
    period: '09/2017 - 12/2017',
    tasks: [
      'Desenvolvimento em vue.js',
      'Testes de usuário',
    ],
  },
];

const projects = [
  {
    id: 0,
    type: 'js',
    disabled: false,
    title: 'Musibeans',
    url: 'https://natanaelneto.github.io/musibeans/',
    description: 'Jogo musical em JavaScript usando controlador MIDI',
    date: 'jan/2020',
  },
  {
    id: 1,
    type: 'js',
    disabled: false,
    title: 'Catmaze',
    url: 'https://natanaelneto.github.io/catmaze/',
    description: 'Algoritmo A* interativo em JavaScript',
    date: 'jan/2020',
  },
  {
    id: 2,
    type: 'js',
    disabled: false,
    title: 'Line-Up',
    url: 'https://natanaelneto.github.io/lineup/',
    description: 'Quebra-cabeça online em JavaScript',
    date: 'dec/2018',
  },
  {
    id: 3,
    type: 'js',
    disabled: true,
    title: 'Trybewarts',
    url: 'https://natanaelneto.github.io/lineup/',
    description: 'Projeto para a Trybe para avaliar responsividade e validação de formulário',
    date: 'fev/2021',
  },
  {
    id: 4,
    type: 'game',
    disabled: false,
    title: 'LINEA',
    url: linea,
    description: 'Board game minimalista. Conquiste as áreas para ganhar pontos',
    phase: 'em teste',
    date: 'mar/2020',
  },
  {
    id: 5,
    type: 'game',
    disabled: false,
    title: 'Flight Sim',
    url: flightSim,
    description: 'Simulador de voo simples feito para estudo',
    phase: 'finalizado',
    date: 'jun/2020',
  },
  {
    id: 6,
    type: 'game',
    disabled: false,
    title: 'I Bet You Get',
    url: betYouGet,
    description: 'Jogo puzzle para computador. Use sua estratégia sabiamente para pontuar',
    phase: 'em produção',
    date: 'jan/2021',
  },
  {
    id: 7,
    type: 'game',
    disabled: false,
    title: '5 Minutos para Meia Noite',
    url: cincoMin,
    description: 'Board game em cartas, com tema apocalíptico',
    phase: 'GDD em contrução',
    date: 'abr/2021',
  },
  {
    id: 8,
    type: 'sound',
    disabled: false,
    title: 'Outrun',
    url: outrun,
    date: 'jan/2021',
  },
  {
    id: 9,
    type: 'sound',
    disabled: false,
    title: 'A New Beginning',
    url: aNewBeginning,
    date: 'dec/2020',
  },
  {
    id: 10,
    type: 'sound',
    disabled: false,
    title: 'Last Mission',
    url: lastMission,
    date: 'nov/2020',
  },
];

const versiculos = [
  {
    id: 0,
    ref: '1ªCo 15:58',
    versiculo: 'Portanto, meus amados irmãos, mantenham-se firmes, e que nada os abale. Sejam sempre dedicados à obra do Senhor, pois vocês sabem que, no Senhor, o trabalho de vocês não será inútil',
  },
  {
    id: 1,
    ref: '1ªTm 4:12',
    versiculo: 'Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza',
  },
  {
    id: 2,
    ref: 'Cl 3:23',
    versiculo: 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens',
  },
  {
    id: 3,
    ref: 'Mt 19:14',
    versiculo: 'Então disse Jesus: "Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas"',
  },
];

const skills = [
  'Web Design',
  'JavaScript',
  'Jest',
  'Cypress',
  'React',
  'Vue.js',
  'Unity',
  'C#',
  'Game Design',
  'Photoshop',
  'Illustrator',
  'Premiere',
  'Educação Infantil',
];

const hotpoints = [
  'Jogos Digitais',
  'Desenvolvimento Web',
  'Web Design',
  'Educação',
  'Criatividade e Inovação',
  'Board Games',
];

export { jobs, projects, versiculos, skills, hotpoints };
