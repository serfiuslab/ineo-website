/* INEO — bilingual, buildless scientific portal prototype.
 * Add validated records to content/publications.json; the UI renders them here.
 */

const translations = {
  pt: {
    skip: 'Pular para o conteúdo', navLabel: 'Navegação principal', mobileNavLabel: 'Navegação móvel', openMenu: 'Abrir menu', closeMenu: 'Fechar menu',
    brandHome: 'INEO, início', officialLogoAlt: 'INEO, Instituto Nacional de Eletrônica Orgânica e Sustentável',
    navHome: 'Início', navInstitute: 'O Instituto', navResearch: 'Pesquisa', navNetwork: 'A Rede', navPublications: 'Publicações', navActivities: 'Atividades', navExplore: 'Explorar a ciência',
    heroEyebrow: 'CIÊNCIA BRASILEIRA EM REDE', heroTitle: 'O futuro da eletrônica <em>começa nas moléculas.</em>',
    heroLead: 'Uma rede de pesquisa dedicada a compreender, desenvolver e transformar materiais orgânicos em novas possibilidades para a ciência e a tecnologia.',
    heroCtaExplore: 'Comece a explorar', heroCtaInstitute: 'Conheça o INEO', heroTag1: 'Pesquisa colaborativa', heroTag2: 'Ciência e formação',
    sciencePanelLabel: 'Exploração interativa da eletrônica orgânica', labLabel: 'EXPLORE O INVISÍVEL', pauseMotion: 'Pausar animação', resumeMotion: 'Retomar animação',
    scienceTabsLabel: 'Etapas da explicação', stageStructureTab: 'Estrutura', stageChargeTab: 'Cargas', stageDeviceTab: 'Dispositivos',
    labCaptionKicker: 'DO MICROSCÓPICO AO COTIDIANO', labDisclaimer: 'Ilustração conceitual, não representa dados experimentais.', schemaLabel: 'VISUALIZAÇÃO ESQUEMÁTICA',
    interactiveStamp: 'INEO / INTERATIVO', deviceContact: 'CONTATO', deviceOrganic: 'CAMADA ORGÂNICA', deviceActive: 'CAMADA ATIVA',
    visualTitle: 'Representação esquemática de materiais orgânicos conjugados', visualDesc: 'Estruturas de anéis conectados, cargas móveis e camadas de um dispositivo em três etapas exploráveis.',
    stageStructureTitle: 'Uma estrutura, novas propriedades',
    stageStructureDesc: 'Em materiais orgânicos conjugados, a organização das ligações e dos orbitais eletrônicos influencia como as cargas e a luz interagem com o material.',
    stageChargeTitle: 'Cargas em movimento',
    stageChargeDesc: 'O transporte de cargas depende da estrutura eletrônica, da organização molecular, das interfaces e de mecanismos como salto entre estados localizados.',
    stageDeviceTitle: 'Da molécula ao dispositivo',
    stageDeviceDesc: 'Camadas funcionais, eletrodos e interfaces permitem explorar essas propriedades em OLEDs, células solares orgânicas e transistores. Cada arquitetura tem sua própria física.',
    instituteKicker: 'O INSTITUTO', instituteTitle: 'Conhecimento que conecta <em>pessoas e possibilidades.</em>',
    instituteLead: 'O Instituto Nacional de Eletrônica Orgânica e Sustentável reúne esforços de pesquisa em materiais, dispositivos, modelagem e aplicações, conectando diferentes especialidades e instituições brasileiras.',
    visitHistory: 'Consultar acervo institucional', officialIdentity: 'Identidade visual do novo INEO',
    quickResearch: 'Linhas de pesquisa', quickResearchDesc: 'Da escala molecular à aplicação tecnológica',
    quickNetwork: 'Pesquisadores e polos', quickNetworkDesc: 'Uma rede de competências complementares',
    quickGovernance: 'História e gestão', quickGovernanceDesc: 'Memória, coordenação e documentação',
    researchKicker: 'NOSSAS FRENTES DE PESQUISA', researchTitle: 'Da matéria fundamental <em>ao mundo real.</em>',
    researchLead: 'Três frentes históricas de atuação, da síntese e caracterização de materiais à compreensão de fenômenos e ao desenvolvimento de dispositivos.',
    research1Category: 'MATERIAIS E DISPOSITIVOS', research1Title: 'Dispositivos eletrônicos', research1Desc: 'Materiais orgânicos e sistemas nanoestruturados para dispositivos como OLEDs, células fotovoltaicas orgânicas e transistores de efeito de campo.',
    research2Category: 'SENSORIAMENTO', research2Title: 'Biossensores', research2Desc: 'Filmes finos, interfaces e estratégias de análise para detectar e interpretar sinais químicos e biológicos em diferentes contextos.',
    research3Category: 'MODELAGEM COMPUTACIONAL', research3Title: 'Modelagem molecular e de dispositivos', research3Desc: 'Métodos computacionais para investigar estrutura eletrônica, organização molecular, transporte de cargas e funcionamento de dispositivos.',
    tagThinFilms: 'Filmes finos', tagInterfaces: 'Interfaces', tagSimulation: 'Simulação', tagTransport: 'Transporte',
    researchSource: 'Frentes descritas a partir do acervo institucional anterior.', seeSource: 'Ver fonte',
    discoveryKicker: 'CIÊNCIA PARA EXPLORAR', discoveryTitle: 'E se você pudesse <em>enxergar a eletrônica?</em>',
    discoveryLead: 'Uma trilha de descoberta sobre como moléculas, propriedades eletrônicas e arquitetura de dispositivos se relacionam.',
    discover1Title: 'A molécula', discover1Desc: 'Por que a estrutura importa?',
    discover2Title: 'A carga', discover2Desc: 'Como a corrente pode circular?',
    discover3Title: 'O dispositivo', discover3Desc: 'Como uma ideia vira tecnologia?',
    discoverAction: 'Explorar conceito',
    discoveryCaveat: 'Materiais orgânicos não são automaticamente sustentáveis. Sua avaliação exige considerar composição, produção, uso e descarte.',
    networkKicker: 'UMA REDE, MUITAS PERSPECTIVAS', networkTitle: 'A ciência avança <em>em conexão.</em>',
    networkLead: 'A organização histórica do INEO reúne pesquisadores de diferentes instituições em sete polos. Explore a distribuição da rede e consulte o cadastro institucional de referência.',
    networkFullList: 'Consultar lista de pesquisadores', networkSelectLabel: 'POLOS DA REDE', networkDetailKicker: 'POLO SELECIONADO',
    networkDetailDesc: 'Pesquisadores e instituições associados a este polo constam no cadastro institucional anterior. A composição atualizada da rede será confirmada na migração de conteúdo.',
    publicationsKicker: 'CONHECIMENTO COMPARTILHADO', publicationsTitle: 'A produção científica <em>em um só lugar.</em>',
    publicationsLead: 'Estamos preparando um catálogo curado das publicações da rede, com busca por título, autoria, tema e DOI, além de filtros por ano e área.',
    catalogTitle: 'Biblioteca de publicações', catalogStatus: 'EM IMPLANTAÇÃO',
    catalogSearchLabel: 'Buscar publicações', catalogPlaceholder: 'Buscar título, autor ou DOI...',
    filterYear: 'Filtrar por ano', filterTopic: 'Filtrar por tema', catalogAllYears: 'Todos os anos', catalogAllTopics: 'Todos os temas',
    catalogEmptyTitle: 'O catálogo está sendo preparado', catalogEmptyDesc: 'As publicações serão exibidas aqui após verificação dos registros pela equipe.',
    catalogNoMatchTitle: 'Nenhuma publicação encontrada', catalogNoMatchDesc: 'Experimente outros termos ou remova os filtros.',
    catalogMethod: 'A inclusão de um artigo dependerá de verificação de vínculo com a rede. Metadados automáticos não equivalem a comprovação de financiamento pelo INEO.',
    catalogArchive: 'Acessar publicações do acervo anterior', catalogRead: 'Ver publicação',
    activitiesKicker: 'A REDE EM MOVIMENTO', activitiesTitle: 'Encontros, formação <em>e troca de ideias.</em>',
    activitiesLead: 'A trajetória do INEO também é feita de workshops, minicursos e encontros que aproximam pesquisadores, estudantes e colaboradores.',
    activityTagEvents: 'EVENTOS DA REDE', activity1Title: 'Workshops e encontros científicos', activity1Desc: 'Programas e registros de edições anteriores, incluindo o acervo de workshops de 2021 a 2024.',
    activityTagTraining: 'FORMAÇÃO', activity2Title: 'Minicursos e aprendizado', activity2Desc: 'Conteúdos formativos e oportunidades de circulação do conhecimento na rede.',
    activityTagNews: 'COMUNICAÇÃO', activity3Title: 'Notícias e iniciativas', activity3Desc: 'Um espaço para acompanhar descobertas, projetos, novidades e ações da comunidade científica.', activityLink: 'Explorar acervo',
    closingKicker: 'O CONHECIMENTO NOS CONECTA', closingTitle: 'Uma ciência de muitas pessoas. <em>Um futuro de muitas possibilidades.</em>', closingCta: 'Voltar ao início',
    footerFullName: 'Instituto Nacional de Eletrônica Orgânica e Sustentável', footerNavigate: 'Navegue', footerExplore: 'Descubra', footerLegacy: 'Acervo institucional anterior',
    footerPrototype: 'Protótipo de desenvolvimento. Informações institucionais em revisão.', backTop: 'Voltar ao topo',
    pageTitle: 'INEO | Eletrônica Orgânica e Sustentável', pageDescription: 'INEO: pesquisa, pessoas e conhecimento em eletrônica orgânica e sustentável. Explore a ciência por trás dos materiais e dispositivos.'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', openMenu: 'Open menu', closeMenu: 'Close menu',
    brandHome: 'INEO, home', officialLogoAlt: 'INEO, National Institute of Organic and Sustainable Electronics',
    navHome: 'Home', navInstitute: 'The Institute', navResearch: 'Research', navNetwork: 'The Network', navPublications: 'Publications', navActivities: 'Activities', navExplore: 'Explore the science',
    heroEyebrow: 'BRAZILIAN SCIENCE, CONNECTED', heroTitle: 'The future of electronics <em>begins with molecules.</em>',
    heroLead: 'A research network dedicated to understanding, developing and transforming organic materials into new possibilities for science and technology.',
    heroCtaExplore: 'Start exploring', heroCtaInstitute: 'Meet INEO', heroTag1: 'Collaborative research', heroTag2: 'Science and education',
    sciencePanelLabel: 'Interactive organic electronics exploration', labLabel: 'EXPLORE THE INVISIBLE', pauseMotion: 'Pause animation', resumeMotion: 'Resume animation',
    scienceTabsLabel: 'Explanation stages', stageStructureTab: 'Structure', stageChargeTab: 'Charge', stageDeviceTab: 'Devices',
    labCaptionKicker: 'FROM MOLECULES TO EVERYDAY LIFE', labDisclaimer: 'Conceptual illustration; not experimental data.', schemaLabel: 'SCHEMATIC VISUALIZATION',
    interactiveStamp: 'INEO / INTERACTIVE', deviceContact: 'CONTACT', deviceOrganic: 'ORGANIC LAYER', deviceActive: 'ACTIVE LAYER',
    visualTitle: 'Schematic illustration of conjugated organic materials', visualDesc: 'Connected aromatic rings, moving charges and device layers arranged in three explorable stages.',
    stageStructureTitle: 'Structure shapes properties',
    stageStructureDesc: 'In conjugated organic materials, the arrangement of chemical bonds and electronic orbitals influences how charges and light interact with matter.',
    stageChargeTitle: 'Charges on the move',
    stageChargeDesc: 'Charge transport depends on electronic structure, molecular organization, interfaces and mechanisms such as hopping between localized states.',
    stageDeviceTitle: 'From molecule to device',
    stageDeviceDesc: 'Functional layers, electrodes and interfaces make it possible to harness these properties in OLEDs, organic solar cells and transistors. Each architecture has distinct physics.',
    instituteKicker: 'THE INSTITUTE', instituteTitle: 'Knowledge connecting <em>people and possibilities.</em>',
    instituteLead: 'The National Institute of Organic and Sustainable Electronics brings together research efforts in materials, devices, modelling and applications, connecting different specialties and Brazilian institutions.',
    visitHistory: 'Visit the institutional archive', officialIdentity: 'New INEO visual identity',
    quickResearch: 'Research areas', quickResearchDesc: 'From molecules to technological applications',
    quickNetwork: 'Researchers and hubs', quickNetworkDesc: 'A network of complementary expertise',
    quickGovernance: 'History and governance', quickGovernanceDesc: 'Heritage, coordination and documents',
    researchKicker: 'OUR RESEARCH AREAS', researchTitle: 'From fundamental science <em>to the real world.</em>',
    researchLead: 'Three established areas of activity, from synthesis and characterization to understanding physical phenomena and developing functional devices.',
    research1Category: 'MATERIALS AND DEVICES', research1Title: 'Electronic devices', research1Desc: 'Organic materials and nanostructured systems for devices such as OLEDs, organic photovoltaics and field-effect transistors.',
    research2Category: 'SENSING', research2Title: 'Biosensors', research2Desc: 'Thin films, interfaces and analytical strategies to detect and interpret chemical and biological signals in diverse settings.',
    research3Category: 'COMPUTATIONAL MODELLING', research3Title: 'Molecular and device modelling', research3Desc: 'Computational methods to investigate electronic structure, molecular organization, charge transport and device operation.',
    tagThinFilms: 'Thin films', tagInterfaces: 'Interfaces', tagSimulation: 'Simulation', tagTransport: 'Transport',
    researchSource: 'Areas based on the previous institutional archive.', seeSource: 'View source',
    discoveryKicker: 'SCIENCE TO EXPLORE', discoveryTitle: 'What if you could <em>see electronics?</em>',
    discoveryLead: 'An introduction to how molecules, electronic properties and device architectures connect.',
    discover1Title: 'The molecule', discover1Desc: 'Why does structure matter?',
    discover2Title: 'The charge', discover2Desc: 'How can current flow?',
    discover3Title: 'The device', discover3Desc: 'How does an idea become technology?',
    discoverAction: 'Explore concept',
    discoveryCaveat: 'Organic materials are not automatically sustainable. Their assessment requires considering composition, manufacturing, use and end-of-life.',
    networkKicker: 'ONE NETWORK, MANY PERSPECTIVES', networkTitle: 'Science moves forward <em>through connections.</em>',
    networkLead: 'INEO’s historical organization groups researchers from different institutions into seven regional hubs. Explore the network and refer to the previous institutional directory.',
    networkFullList: 'Browse the researcher directory', networkSelectLabel: 'RESEARCH HUBS', networkDetailKicker: 'SELECTED HUB',
    networkDetailDesc: 'Researchers and institutions associated with this hub appear in the former institutional directory. The updated composition will be verified during content migration.',
    publicationsKicker: 'KNOWLEDGE SHARED', publicationsTitle: 'Scientific output <em>in one place.</em>',
    publicationsLead: 'We are preparing a curated catalogue of network publications, searchable by title, authorship, topic and DOI, with filters for year and research area.',
    catalogTitle: 'Publication library', catalogStatus: 'IN DEVELOPMENT',
    catalogSearchLabel: 'Search publications', catalogPlaceholder: 'Search title, author or DOI...',
    filterYear: 'Filter by year', filterTopic: 'Filter by topic', catalogAllYears: 'All years', catalogAllTopics: 'All topics',
    catalogEmptyTitle: 'The catalogue is being prepared', catalogEmptyDesc: 'Publications will appear here after records are verified by the team.',
    catalogNoMatchTitle: 'No publications found', catalogNoMatchDesc: 'Try different terms or clear the filters.',
    catalogMethod: 'Each paper must be checked for an actual connection with the network. Automatically retrieved metadata do not establish INEO funding.',
    catalogArchive: 'Browse the previous publication archive', catalogRead: 'View publication',
    activitiesKicker: 'THE NETWORK IN MOTION', activitiesTitle: 'Meetings, learning <em>and exchanging ideas.</em>',
    activitiesLead: 'INEO’s history also includes workshops, short courses and meetings that bring researchers, students and collaborators together.',
    activityTagEvents: 'NETWORK EVENTS', activity1Title: 'Scientific workshops and meetings', activity1Desc: 'Programmes and records from previous editions, including workshops held between 2021 and 2024.',
    activityTagTraining: 'EDUCATION', activity2Title: 'Short courses and learning', activity2Desc: 'Educational material and opportunities to share expertise across the network.',
    activityTagNews: 'COMMUNICATION', activity3Title: 'News and initiatives', activity3Desc: 'A place to follow discoveries, projects, announcements and the scientific community.', activityLink: 'Explore the archive',
    closingKicker: 'CONNECTED BY KNOWLEDGE', closingTitle: 'Science made by many people. <em>A future of many possibilities.</em>', closingCta: 'Back to the beginning',
    footerFullName: 'National Institute of Organic and Sustainable Electronics', footerNavigate: 'Navigate', footerExplore: 'Discover', footerLegacy: 'Previous institutional archive',
    footerPrototype: 'Development prototype. Institutional information under review.', backTop: 'Back to top',
    pageTitle: 'INEO | Organic and Sustainable Electronics', pageDescription: 'INEO: research, people and knowledge in organic and sustainable electronics. Explore the science behind materials and devices.'
  }
};

const stages = ['structure', 'charge', 'device'];
const regionNames = [
  { pt: 'Campinas', en: 'Campinas' },
  { pt: 'Norte, Nordeste e Centro-Oeste', en: 'North, Northeast & Central-West' },
  { pt: 'Paraná', en: 'Paraná' },
  { pt: 'Rio-Minas', en: 'Rio de Janeiro & Minas Gerais' },
  { pt: 'São Carlos', en: 'São Carlos' },
  { pt: 'Santa Catarina', en: 'Santa Catarina' },
  { pt: 'São Paulo', en: 'São Paulo' }
];

const state = {
  lang: localStorage.getItem('ineo-language') === 'en' ? 'en' : 'pt',
  stage: 'structure',
  region: 0,
  paused: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  publications: []
};

const $ = (selector) => document.querySelector(selector);
const t = (key) => translations[state.lang][key] ?? key;

function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;
  localStorage.setItem('ineo-language', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = t('pageTitle');
  $('meta[name="description"]').content = t('pageDescription');
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(node => { node.innerHTML = t(node.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(node => { node.alt = t(node.dataset.i18nAlt); });
  document.querySelectorAll('[data-i18n-svg]').forEach(node => { node.textContent = t(node.dataset.i18nSvg); });
  document.querySelectorAll('[data-lang]').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  updateStage(state.stage);
  renderRegions();
  renderPublications();
  updateMotionLabel();
}

function updateStage(stage, focusTab = false) {
  if (!stages.includes(stage)) return;
  state.stage = stage;
  $('#science-visual').dataset.stage = stage;
  const mapping = { structure: 'Structure', charge: 'Charge', device: 'Device' };
  $('#stage-title').textContent = t(`stage${mapping[stage]}Title`);
  $('#stage-description').textContent = t(`stage${mapping[stage]}Desc`);
  $('#panel-step').textContent = `${String(stages.indexOf(stage) + 1).padStart(2, '0')} / 03`;
  stages.forEach(item => {
    const button = $(`#tab-${item}`);
    const active = item === stage;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
    if (active && focusTab) button.focus();
  });
  $('#science-caption').setAttribute('aria-labelledby', `tab-${stage}`);
}

function updateMotionLabel() {
  $('#science-visual').classList.toggle('is-paused', state.paused);
  const button = $('#motion-toggle');
  button.textContent = t(state.paused ? 'resumeMotion' : 'pauseMotion');
  button.setAttribute('aria-pressed', String(state.paused));
}

function renderRegions() {
  const list = $('#network-list');
  list.replaceChildren();
  regionNames.forEach((region, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'network-item' + (index === state.region ? ' is-selected' : '');
    button.textContent = region[state.lang];
    button.setAttribute('aria-pressed', String(index === state.region));
    button.addEventListener('click', () => { state.region = index; renderRegions(); });
    list.appendChild(button);
  });
  const detail = $('#network-detail');
  detail.replaceChildren();
  const kicker = document.createElement('small');
  kicker.textContent = t('networkDetailKicker');
  const title = document.createElement('h3');
  title.textContent = regionNames[state.region][state.lang];
  const description = document.createElement('p');
  description.textContent = t('networkDetailDesc');
  detail.append(kicker, title, description);
}

function normalize(text) {
  return String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderPublicationOptions() {
  const years = [...new Set(state.publications.map(item => Number(item.year)).filter(Number.isFinite))].sort((a, b) => b - a);
  const topics = [...new Set(state.publications.map(item => item.topic).filter(Boolean))].sort();
  const yearSelect = $('#publication-year');
  const topicSelect = $('#publication-topic');
  const previousYear = yearSelect.value;
  const previousTopic = topicSelect.value;
  yearSelect.replaceChildren(new Option(t('catalogAllYears'), 'all'));
  topicSelect.replaceChildren(new Option(t('catalogAllTopics'), 'all'));
  years.forEach(year => yearSelect.add(new Option(String(year), String(year))));
  topics.forEach(topic => topicSelect.add(new Option(topic, topic)));
  yearSelect.value = years.some(year => String(year) === previousYear) ? previousYear : 'all';
  topicSelect.value = topics.includes(previousTopic) ? previousTopic : 'all';
}

function renderPublications() {
  renderPublicationOptions();
  const query = normalize($('#publication-search').value.trim());
  const year = $('#publication-year').value;
  const topic = $('#publication-topic').value;
  const records = state.publications.filter(item => {
    const matchText = normalize([item.title, ...(item.authors ?? []), item.doi, item.topic].join(' ')).includes(query);
    return matchText && (year === 'all' || String(item.year) === year) && (topic === 'all' || item.topic === topic);
  });
  const container = $('#publication-results');
  container.replaceChildren();
  if (!records.length) {
    const empty = document.createElement('div');
    empty.className = 'publication-empty';
    const icon = document.createElement('div');
    icon.className = 'publication-empty-symbol';
    icon.textContent = '⌕';
    icon.setAttribute('aria-hidden', 'true');
    const title = document.createElement('h3');
    title.textContent = t(state.publications.length ? 'catalogNoMatchTitle' : 'catalogEmptyTitle');
    const detail = document.createElement('p');
    detail.textContent = t(state.publications.length ? 'catalogNoMatchDesc' : 'catalogEmptyDesc');
    empty.append(icon, title, detail);
    container.appendChild(empty);
    return;
  }
  records.sort((a, b) => Number(b.year) - Number(a.year));
  records.forEach(item => {
    const article = document.createElement('article');
    article.className = 'publication-item';
    const meta = document.createElement('p');
    meta.className = 'publication-meta';
    meta.textContent = [item.year, item.topic, item.journal].filter(Boolean).join(' · ');
    const title = document.createElement('h3');
    title.textContent = item.title;
    const authors = document.createElement('p');
    authors.textContent = (item.authors ?? []).join(', ');
    article.append(meta, title, authors);
    if (typeof item.doi === 'string' && /^10\.\d{4,9}\/.+/.test(item.doi)) {
      const link = document.createElement('a');
      link.href = `https://doi.org/${encodeURI(item.doi)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = t('catalogRead');
      article.appendChild(link);
    }
    container.appendChild(article);
  });
}

async function loadPublications() {
  try {
    const response = await fetch('content/publications.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data.publications)) throw new Error('Invalid publication schema');
    state.publications = data.publications.filter(item =>
      item.verified === true && typeof item.title === 'string' && Number.isFinite(Number(item.year))
    );
  } catch (error) {
    console.warn('Publication catalogue unavailable:', error);
    state.publications = [];
  }
  renderPublications();
}

function initNavigation() {
  const toggle = $('#menu-toggle');
  const nav = $('#mobile-nav');
  function closeMenu() {
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t('openMenu'));
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'closeMenu' : 'openMenu'));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 950) closeMenu(); });

  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.desktop-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      const page = document.documentElement;
      const max = page.scrollHeight - window.innerHeight;
      $('#reading-progress-bar').style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      scheduled = false;
    });
  }, { passive: true });
}

function initInteractions() {
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-stage-target]').forEach(button => {
    button.addEventListener('click', () => updateStage(button.dataset.stageTarget));
    button.addEventListener('keydown', event => {
      const currentIndex = stages.indexOf(button.dataset.stageTarget);
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        updateStage(stages[(currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + stages.length) % stages.length], true);
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        updateStage(event.key === 'Home' ? stages[0] : stages[stages.length - 1], true);
      }
    });
  });
  $('#motion-toggle').addEventListener('click', () => { state.paused = !state.paused; updateMotionLabel(); });
  $('#publication-search').addEventListener('input', renderPublications);
  $('#publication-year').addEventListener('change', renderPublications);
  $('#publication-topic').addEventListener('change', renderPublications);
  document.querySelectorAll('.discovery-step').forEach((link, index) => {
    link.addEventListener('click', () => updateStage(stages[index]));
  });
}

$('#current-year').textContent = new Date().getFullYear();
initNavigation();
initInteractions();
setLanguage(state.lang);
loadPublications();
