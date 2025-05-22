export const APP_NAME = 'PIAP';
export const APP_DESCRIPTION = 'Plataforma de Intermediação para Automação Personalizada';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROJECTS: '/projects',
  PROJECT_DETAILS: (id: string) => `/projects/${id}`,
  CREATE_PROJECT: '/projects/create',
  MESSAGES: '/messages',
  PROFILE: (id: string) => `/profile/${id}`,
  EDIT_PROFILE: '/profile/edit',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
};

export const NAVIGATION = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Como Funciona', href: `${ROUTES.HOME}#how-it-works` },
  { name: 'Projetos', href: ROUTES.PROJECTS },
  { name: 'Profissionais', href: `${ROUTES.HOME}#professionals` },
];

export const USER_ROLE_LABELS = {
  client: 'Cliente',
  developer: 'Desenvolvedor',
  designer: 'Designer 3D',
};

export const PROJECT_STATUS_LABELS = {
  draft: 'Rascunho',
  open: 'Aberto',
  in_progress: 'Em Progresso',
  completed: 'Concluído',
  cancelled: 'Cancelado',
};

export const PROJECT_STATUS_COLORS = {
  draft: 'bg-muted text-muted-foreground',
  open: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  in_progress: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};

export const DUMMY_PROJECTS = [
  {
    id: '1',
    title: 'Sistema de Irrigação Automatizado',
    description: 'Preciso de um sistema para automatizar a irrigação do meu jardim baseado na umidade do solo.',
    clientId: 'client1',
    budget: 1500,
    category: 'electronics',
    status: 'open',
    requirements: 'O sistema deve incluir sensores de umidade e uma interface simples para controle via smartphone.',
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2023-09-15')
  },
  {
    id: '2',
    title: 'Suporte Customizado para Câmera',
    description: 'Necessito de um suporte ajustável para montar minha câmera em diferentes superfícies.',
    clientId: 'client2',
    budget: 800,
    category: '3ddesign',
    status: 'open',
    requirements: 'O suporte deve ser leve, resistente e com ajuste de ângulo em pelo menos dois eixos.',
    createdAt: new Date('2023-10-01'),
    updatedAt: new Date('2023-10-01')
  },
  {
    id: '3',
    title: 'Sistema de Monitoramento de Temperatura',
    description: 'Busco uma solução para monitorar a temperatura de vários ambientes simultaneamente.',
    clientId: 'client3',
    budget: 2000,
    category: 'both',
    status: 'in_progress',
    requirements: 'Preciso de sensores wireless e uma caixa personalizada para a unidade central.',
    createdAt: new Date('2023-08-20'),
    updatedAt: new Date('2023-08-25')
  }
] as any;

export const DUMMY_USERS = [
  {
    id: 'dev1',
    name: 'Carlos Mendes',
    email: 'carlos@example.com',
    role: 'developer',
    bio: 'Especialista em Arduino e IoT com mais de 8 anos de experiência.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256',
    rating: 4.8,
    projectsCompleted: 32,
    skills: ['Arduino', 'Raspberry Pi', 'IoT', 'PCB Design'],
    createdAt: new Date('2022-01-10'),
    updatedAt: new Date('2023-08-15')
  },
  {
    id: 'des1',
    name: 'Ana Silva',
    email: 'ana@example.com',
    role: 'designer',
    bio: 'Designer 3D especializada em criação de produtos e protótipos funcionais.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=256',
    rating: 4.9,
    projectsCompleted: 45,
    skills: ['Fusion 360', 'SolidWorks', 'Prototipagem Rápida', 'Design de Produto'],
    createdAt: new Date('2021-11-05'),
    updatedAt: new Date('2023-09-20')
  },
  {
    id: 'dev2',
    name: 'Lucas Oliveira',
    email: 'lucas@example.com',
    role: 'developer',
    bio: 'Engenheiro eletrônico com foco em sistemas embarcados e automação industrial.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=256',
    rating: 4.7,
    projectsCompleted: 28,
    skills: ['PLC', 'Sistemas Embarcados', 'Circuitos Digitais', 'C/C++'],
    createdAt: new Date('2022-03-18'),
    updatedAt: new Date('2023-07-30')
  }
] as any;