/* INEO — bilingual, buildless scientific portal prototype.
 * The UI distinguishes curated records from automated OpenAlex researcher output.
 */

// Limit every publication view to the renewed project's documented start date.
const renewedIneoStartDate = '2025-05-01';

const translations = {
  pt: {
    skip: 'Pular para o conteúdo', navLabel: 'Navegação principal', mobileNavLabel: 'Navegação móvel', openMenu: 'Abrir menu', closeMenu: 'Fechar menu',
    brandHome: 'INEO, início', officialLogoAlt: 'INEO, Instituto Nacional de Eletrônica Orgânica e Sustentável',
    navHome: 'Início', navInstitute: 'O Instituto', navResearch: 'Pesquisa', navNetwork: 'A Rede', navPublications: 'Publicações', navActivities: 'Atividades', navExplore: 'Explorar a ciência', navHistory: 'História', navGallery: 'Galeria', navAnnual: 'Encontro INEO Anual', navVirtualLab: 'Laboratório Virtual',
    heroEyebrow: 'CIÊNCIA BRASILEIRA EM REDE', heroTitle: 'O futuro da eletrônica <em>começa nas moléculas.</em>',
    heroLead: 'Uma rede brasileira que conecta materiais avançados, dispositivos e inteligência artificial para investigar soluções em energia, saúde, agricultura e sustentabilidade.',
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
    instituteLead: 'Com sede prevista no IFSC/USP e sete polos regionais, o novo INEO dá continuidade à rede brasileira de eletrônica orgânica. A proposta integra pesquisa, formação e colaboração para investigar tecnologias com menor impacto ambiental ao longo de seu ciclo de vida.',
    visitHistory: 'Conheça a história do INEO', officialIdentity: 'Identidade visual do novo INEO',
    quickResearch: 'Linhas de pesquisa', quickResearchDesc: 'Da escala molecular à aplicação tecnológica',
    quickNetwork: 'Pesquisadores e polos', quickNetworkDesc: 'Uma rede de competências complementares',
    quickGovernance: 'História do INEO', quickGovernanceDesc: 'Da eletrônica orgânica à rede nacional',
    researchKicker: 'NOSSAS FRENTES DE PESQUISA', researchTitle: 'Da matéria fundamental <em>ao mundo real.</em>',
    researchLead: 'O novo projeto organiza suas aplicações em quatro eixos estratégicos. Todos combinam ciência fundamental, desenvolvimento de materiais e avaliação de seu impacto.',
    research1Category: 'ENERGIA RENOVÁVEL', research1Title: 'Conversão e armazenamento', research1Desc: 'Pesquisa em células solares orgânicas, baterias leves e flexíveis e supercapacitores para investigar novas soluções de conversão e armazenamento de energia.',
    research2Category: 'SAÚDE', research2Title: 'Biossensores e diagnóstico', research2Desc: 'Desenvolvimento de biossensores portáteis e eletrônica vestível para detecção e monitoramento de marcadores de interesse em saúde humana e animal.',
    research3Category: 'AGRICULTURA', research3Title: 'Sensoriamento ambiental', research3Desc: 'Sensores para acompanhar solo, água e condições ambientais, com potencial para apoiar a agricultura de precisão e o uso responsável dos recursos naturais.',
    research4Category: 'ELETRÔNICA SUSTENTÁVEL', research4Title: 'Dispositivos e ciclo de vida', research4Desc: 'Estudo de dispositivos impressos e flexíveis, materiais renováveis, rotas de síntese mais verdes e alternativas biodegradáveis ou recicláveis.',
    tagBatteries: 'Baterias', tagStorage: 'Armazenamento', tagBiosensors: 'Biossensores', tagWearables: 'Vestíveis',
    tagSensors: 'Sensores', tagMonitoring: 'Monitoramento', tagCircular: 'Circularidade',
    researchCrosscutting: 'Esses quatro eixos são conectados por síntese e caracterização de materiais, modelagem teórica, inteligência artificial e engenharia de dispositivos.',
    researchSource: 'Conteúdo adaptado da proposta contemplada do novo INEO (Chamada INCT 2024). Metas de pesquisa não representam resultados já alcançados.',
    researchLabKicker: 'INVESTIGUE VOCÊ MESMO', researchLabTitle: 'Laboratório Virtual INEO', researchLabDesc: 'Acenda um OLED, transforme luz em sinal elétrico e explore um biossensor. Três experimentos interativos com desafios para estudantes, professores e curiosos.', researchLabCta: 'Abrir o laboratório virtual',
    discoveryKicker: 'CIÊNCIA PARA EXPLORAR', discoveryTitle: 'E se você pudesse <em>enxergar a eletrônica?</em>',
    discoveryLead: 'Uma trilha de descoberta sobre como moléculas, propriedades eletrônicas e arquitetura de dispositivos se relacionam.',
    discover1Title: 'A molécula', discover1Desc: 'Por que a estrutura importa?',
    discover2Title: 'A carga', discover2Desc: 'Como a corrente pode circular?',
    discover3Title: 'O dispositivo', discover3Desc: 'Como uma ideia vira tecnologia?',
    discoverAction: 'Explorar conceito',
    discoveryCaveat: 'Um material orgânico não é automaticamente sustentável. O INEO investiga síntese mais verde, reuso, biodegradabilidade e impactos ao longo do ciclo de vida dos dispositivos.',
    networkKicker: 'UMA REDE, MUITAS PERSPECTIVAS', networkTitle: 'A ciência avança <em>em conexão.</em>',
    networkLead: 'A proposta do novo INEO articula sete polos científicos e administrativos, promovendo colaboração, formação e acesso compartilhado à infraestrutura de pesquisa em diferentes regiões do Brasil.',
    networkFullList: 'Consultar lista de pesquisadores', networkSelectLabel: 'POLOS DA REDE', networkDetailKicker: 'POLO SELECIONADO',
    networkDetailDesc: 'O polo integra o modelo de articulação proposto para o novo INEO. A composição atualizada de pesquisadores e coordenações será publicada após verificação institucional.',
    publicationsKicker: 'CONHECIMENTO COMPARTILHADO', publicationsTitle: 'A produção científica <em>em um só lugar.</em>',
    publicationsLead: 'Explore artigos e revisões publicados desde 1º de maio de 2025, início previsto da nova fase do INEO, recuperados pelo OpenAlex e organizados por ano. O vínculo de cada trabalho com o projeto requer validação.',
    catalogTitle: 'Publicações dos pesquisadores', catalogStatus: 'ATUALIZAÇÃO AUTOMÁTICA', catalogPeriod: 'desde 01/05/2025',
    catalogSearchLabel: 'Buscar publicações', catalogPlaceholder: 'Buscar título, autor ou DOI...',
    filterYear: 'Filtrar por ano', filterResearcher: 'Filtrar por pesquisador', catalogAllYears: 'Todos os anos', catalogAllResearchers: 'Todos os pesquisadores',
    catalogEmptyTitle: 'Aguardando a primeira coleta do OpenAlex', catalogEmptyDesc: 'O catálogo será preenchido automaticamente pelo fluxo de publicação do GitHub Pages.',
    catalogNoMatchTitle: 'Nenhuma publicação encontrada', catalogNoMatchDesc: 'Experimente outros termos ou remova os filtros.',
    catalogMethod: 'O recorte começa em 01/05/2025, data de início prevista na proposta aprovada do novo INEO (CNPq 408449/2024-1). São artigos e revisões dos pesquisadores consultados; a presença de um trabalho não comprova vínculo ou financiamento pelo INEO. Metadados e atribuição institucional requerem conferência.',
    catalogArchive: 'Acessar publicações do acervo anterior', catalogRead: 'Ver publicação', catalogViewOpenAlex: 'Ver no OpenAlex',
    catalogCount: '{shown} de {total} publicações encontradas', catalogUpdated: 'Atualizado em {date} · OpenAlex', catalogPartial: 'Alguns perfis necessitam de conferência',
    catalogMore: 'Carregar mais publicações', catalogAutoBadge: 'METADADOS OPENALEX', catalogCuratedBadge: 'REGISTRO VALIDADO',
    catalogMatched: 'Pesquisadores consultados:', catalogOpenAccess: 'Acesso aberto', catalogYearCount: '{count} publicações',
    activitiesKicker: 'A REDE EM MOVIMENTO', activitiesTitle: 'Encontros, formação <em>e troca de ideias.</em>',
    activitiesLead: 'O novo plano prevê workshops anuais, intercâmbio entre laboratórios, ações em escolas e conteúdos digitais para aproximar ciência, estudantes e sociedade.',
    activityTagEvents: 'EVENTOS DA REDE', activity1Title: 'Workshops e encontros científicos', activity1Desc: 'A proposta prevê encontros anuais de integração. Consulte também os registros de workshops da rede anterior.',
    activityTagTraining: 'FORMAÇÃO', activity2Title: 'Minicursos e aprendizado', activity2Desc: 'O plano inclui capacitação de estudantes, intercâmbio entre instituições e ações educativas em escolas.',
    activityTagNews: 'COMUNICAÇÃO', activity3Title: 'Ciência com a sociedade', activity3Desc: 'Vídeos, podcasts, visitas a laboratórios e materiais acessíveis integram as ações de divulgação previstas.', activityLink: 'Explorar acervo',
    closingKicker: 'O CONHECIMENTO NOS CONECTA', closingTitle: 'Da molécula à sociedade. <em>Ciência para uma eletrônica mais sustentável.</em>', closingCta: 'Voltar ao início',
    footerFullName: 'Instituto Nacional de Eletrônica Orgânica e Sustentável', footerNavigate: 'Navegue', footerExplore: 'Descubra', footerLegacy: 'Acervo institucional anterior', footerContact: 'Contato e canais',
    footerPrototype: 'Protótipo de desenvolvimento. Informações institucionais em revisão.', backTop: 'Voltar ao topo',
    pageTitle: 'INEO | Eletrônica Orgânica e Sustentável', pageDescription: 'INEO: uma rede brasileira de pesquisa em eletrônica orgânica e sustentável para energia, saúde, agricultura e novas tecnologias.',
    historyPageTitle: 'História do INEO | Eletrônica Orgânica', historyPageDescription: 'Conheça as origens da eletrônica orgânica, os polímeros condutores e a trajetória do IMMP ao INEO.',
    galleryPageTitle: 'Galeria de fotos | INEO', galleryPageDescription: 'Fotografias do Encontro INEO 2026 e do acervo histórico da rede.',
    eventPageTitle: 'Encontro INEO Anual | INEO', eventPageDescription: 'Consulte os anais do Workshop INEO 2026 na Even3 e conheça os encontros da rede.',
    labPageTitle: 'Laboratório Virtual | INEO', labPageDescription: 'Investigue OLEDs, células solares orgânicas e biossensores com simulações interativas bilíngues do INEO.',
    storyKicker: 'NOSSA MEMÓRIA CIENTÍFICA', storyTitle: 'Uma história de ciência <em>feita em rede.</em>',
    storyLead: 'Dos primeiros polímeros condutores à criação do INEO: descubra a trajetória que conecta moléculas, pesquisadores e instituições brasileiras.',
    storyNavigationScience: 'Origens da eletrônica orgânica', storyNavigationInstitute: 'História do INEO', storySource: 'Acervo histórico do INEO, contextualizado para a nova fase do instituto.',
    storyScienceKicker: 'UMA REVOLUÇÃO NOS MATERIAIS', storyScienceTitle: 'Eletrônica Orgânica',
    storyInstituteKicker: 'DO IMMP AO INEO', storyInstituteTitle: 'INEO: Instituto Nacional de Eletrônica Orgânica',
    storyInstituteLead: 'Uma rede construída por décadas de pesquisa, ensino, colaboração e articulação nacional.',
    storyArchiveBadge: 'REGISTRO HISTÓRICO',
    storyArchiveNote: 'Os parágrafos e números abaixo reproduzem o relato do site institucional anterior, referente ao período até 2023. Expressões como “hoje” devem ser lidas nesse contexto, não como dados atuais do INEO renovado.',
    storyReferences: 'Referências da história da Eletrônica Orgânica',
    storyReferenceNote: 'Referências preservadas conforme o material histórico fornecido. A normalização bibliográfica ainda será revisada.',
    storyFutureTitle: 'Uma nova etapa: orgânica e sustentável',
    storyFutureDesc: 'A proposta contemplada do novo INEO amplia o horizonte para energia, saúde, agricultura e eletrônica sustentável, unindo sete polos regionais e diferentes competências científicas. A memória da rede anterior permanece como parte dessa continuidade.',
    storyGalleryCta: 'Explore a galeria histórica', storyBackHome: 'Voltar à página inicial',
    storyDopingCaption: 'Dopagem e condutividade: uma ilustração conceitual', storyDopingOff: 'Sem dopagem', storyDopingOn: 'Com dopagem',
    storyDopingNotice: 'Esquema educacional, não corresponde a uma medida experimental nem a uma simulação quantitativa.',
    storyDopingOffText: 'Em sua forma não dopada, o poliacetileno apresenta comportamento muito menos condutor.',
    storyDopingOnText: 'Nos trabalhos pioneiros, a dopagem química elevou a condutividade em aproximadamente dez ordens de grandeza.',
    storyTimelineLabel: 'Explore marcos da eletrônica orgânica',
    galleryKicker: 'MEMÓRIA EM IMAGENS', galleryTitle: 'Ciência também é feita <em>de encontros.</em>',
    galleryLead: 'Do Encontro INEO 2026 à memória de encontros anteriores: fotografias das pessoas e dos momentos que constroem a rede.',
    galleryRecentKicker: 'REGISTROS RECENTES', galleryRecentTitle: 'Encontro INEO 2026',
    galleryWorkshopKicker: 'ENCONTROS ANTERIORES', galleryWorkshopTitle: 'Workshop INEO 2023',
    galleryArchiveKicker: 'MEMÓRIA DA REDE', galleryArchiveTitle: 'Acervo histórico',
    gallerySourceNote: 'As fotos de 2026 foram fornecidas para publicação. As fotografias de 2023 vieram do álbum público do Workshop INEO 2023 e do carrossel original; os demais registros foram recuperados do site institucional anterior. O álbum de 2024 ainda precisa ser confirmado.',
    galleryOpen: 'Ampliar fotografia', galleryClose: 'Fechar fotografia', galleryPrevious: 'Fotografia anterior', galleryNext: 'Próxima fotografia',
    galleryWorkshopLink: 'Ver álbum original de 2023', galleryArchiveLink: 'Visitar o acervo original', galleryBackHome: 'Voltar à página inicial',
    eventKicker: 'A REDE SE ENCONTRA', eventTitle: 'Encontro <em>INEO Anual.</em>',
    eventLead: 'Um espaço para compartilhar resultados, construir colaborações e aproximar pesquisadores e estudantes da eletrônica orgânica e sustentável.',
    eventProceedingsTitle: 'Anais do Workshop INEO 2026', eventProceedingsText: 'Acesse os trabalhos e registros científicos publicados nos anais do Workshop INEO 2026. Este link é para os anais, não para inscrições em edições futuras.', eventProceedingsCta: 'Consultar os anais na Even3',
    eventHistoryTitle: 'A tradição dos encontros', eventHistoryText: 'Os workshops da rede têm origem no período do IMMP e seguem como espaço de integração científica. Consulte o arquivo institucional para registros de edições anteriores.',
    eventHistoryLink: 'Conhecer o histórico dos workshops', eventBackHome: 'Voltar à página inicial'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', openMenu: 'Open menu', closeMenu: 'Close menu',
    brandHome: 'INEO, home', officialLogoAlt: 'INEO, National Institute of Organic and Sustainable Electronics',
    navHome: 'Home', navInstitute: 'The Institute', navResearch: 'Research', navNetwork: 'The Network', navPublications: 'Publications', navActivities: 'Activities', navExplore: 'Explore the science', navHistory: 'History', navGallery: 'Gallery', navAnnual: 'INEO Annual Meeting', navVirtualLab: 'Virtual Laboratory',
    heroEyebrow: 'BRAZILIAN SCIENCE, CONNECTED', heroTitle: 'The future of electronics <em>begins with molecules.</em>',
    heroLead: 'A Brazilian research network connecting advanced materials, devices and artificial intelligence to explore solutions for energy, health, agriculture and sustainability.',
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
    instituteLead: 'With its proposed headquarters at IFSC/USP and seven regional hubs, the renewed INEO builds on Brazil’s organic electronics research network. Its proposal combines research, education and collaboration to investigate technologies with a lower environmental impact throughout their life cycle.',
    visitHistory: 'Discover INEO’s history', officialIdentity: 'New INEO visual identity',
    quickResearch: 'Research areas', quickResearchDesc: 'From molecules to technological applications',
    quickNetwork: 'Researchers and hubs', quickNetworkDesc: 'A network of complementary expertise',
    quickGovernance: 'INEO history', quickGovernanceDesc: 'From organic electronics to a national network',
    researchKicker: 'OUR RESEARCH AREAS', researchTitle: 'From fundamental science <em>to the real world.</em>',
    researchLead: 'The renewed project focuses its applications on four strategic areas. Each brings together fundamental science, materials development and impact assessment.',
    research1Category: 'RENEWABLE ENERGY', research1Title: 'Conversion and storage', research1Desc: 'Research on organic solar cells, lightweight and flexible batteries, and supercapacitors to explore new approaches to energy conversion and storage.',
    research2Category: 'HEALTH', research2Title: 'Biosensors and diagnostics', research2Desc: 'Development of portable biosensors and wearable electronics to detect and monitor markers relevant to human and animal health.',
    research3Category: 'AGRICULTURE', research3Title: 'Environmental sensing', research3Desc: 'Sensors to monitor soil, water and environmental conditions, with potential applications in precision agriculture and responsible resource use.',
    research4Category: 'SUSTAINABLE ELECTRONICS', research4Title: 'Devices and life cycle', research4Desc: 'Research on printed and flexible devices, renewable materials, greener synthesis routes and biodegradable or recyclable alternatives.',
    tagBatteries: 'Batteries', tagStorage: 'Storage', tagBiosensors: 'Biosensors', tagWearables: 'Wearables',
    tagSensors: 'Sensors', tagMonitoring: 'Monitoring', tagCircular: 'Circularity',
    researchCrosscutting: 'All four areas draw on materials synthesis and characterization, theoretical modelling, artificial intelligence and device engineering.',
    researchSource: 'Content adapted from the approved proposal for the renewed INEO (2024 INCT call). Research targets are not results already achieved.',
    researchLabKicker: 'INVESTIGATE IT YOURSELF', researchLabTitle: 'INEO Virtual Laboratory', researchLabDesc: 'Light up an OLED, turn light into an electrical signal and explore a biosensor. Three interactive experiments with challenges for students, teachers and curious minds.', researchLabCta: 'Open the virtual laboratory',
    discoveryKicker: 'SCIENCE TO EXPLORE', discoveryTitle: 'What if you could <em>see electronics?</em>',
    discoveryLead: 'An introduction to how molecules, electronic properties and device architectures connect.',
    discover1Title: 'The molecule', discover1Desc: 'Why does structure matter?',
    discover2Title: 'The charge', discover2Desc: 'How can current flow?',
    discover3Title: 'The device', discover3Desc: 'How does an idea become technology?',
    discoverAction: 'Explore concept',
    discoveryCaveat: 'An organic material is not automatically sustainable. INEO investigates greener synthesis, reuse, biodegradability and environmental impacts across the device life cycle.',
    networkKicker: 'ONE NETWORK, MANY PERSPECTIVES', networkTitle: 'Science moves forward <em>through connections.</em>',
    networkLead: 'The renewed INEO proposal connects seven scientific and administrative hubs, fostering collaboration, training and shared access to research facilities across Brazil.',
    networkFullList: 'Browse the researcher directory', networkSelectLabel: 'RESEARCH HUBS', networkDetailKicker: 'SELECTED HUB',
    networkDetailDesc: 'This hub is part of the proposed network structure. Updated researcher and leadership rosters will be published after institutional verification.',
    publicationsKicker: 'KNOWLEDGE SHARED', publicationsTitle: 'Scientific output <em>in one place.</em>',
    publicationsLead: 'Explore articles and reviews published since May 1, 2025, the planned start of the renewed INEO, retrieved from OpenAlex and grouped by year. Project attribution for each work requires verification.',
    catalogTitle: 'Researcher publications', catalogStatus: 'AUTOMATIC UPDATES', catalogPeriod: 'since May 1, 2025',
    catalogSearchLabel: 'Search publications', catalogPlaceholder: 'Search title, author or DOI...',
    filterYear: 'Filter by year', filterResearcher: 'Filter by researcher', catalogAllYears: 'All years', catalogAllResearchers: 'All researchers',
    catalogEmptyTitle: 'Waiting for the first OpenAlex sync', catalogEmptyDesc: 'The GitHub Pages publication workflow will populate the catalogue automatically.',
    catalogNoMatchTitle: 'No publications found', catalogNoMatchDesc: 'Try different terms or clear the filters.',
    catalogMethod: 'The catalogue starts on May 1, 2025, the planned project start stated in the approved renewed INEO proposal (CNPq 408449/2024-1). These are articles and reviews by the queried researchers; inclusion does not establish an INEO project connection or funding. Metadata and attribution require review.',
    catalogArchive: 'Browse the previous publication archive', catalogRead: 'View publication', catalogViewOpenAlex: 'View on OpenAlex',
    catalogCount: '{shown} of {total} publications found', catalogUpdated: 'Updated {date} · OpenAlex', catalogPartial: 'Some researcher profiles need review',
    catalogMore: 'Load more publications', catalogAutoBadge: 'OPENALEX METADATA', catalogCuratedBadge: 'VERIFIED RECORD',
    catalogMatched: 'Researchers queried:', catalogOpenAccess: 'Open access', catalogYearCount: '{count} publications',
    activitiesKicker: 'THE NETWORK IN MOTION', activitiesTitle: 'Meetings, learning <em>and exchanging ideas.</em>',
    activitiesLead: 'The new plan includes annual workshops, exchanges between laboratories, school outreach and digital content to connect researchers, students and society.',
    activityTagEvents: 'NETWORK EVENTS', activity1Title: 'Scientific workshops and meetings', activity1Desc: 'The proposal includes annual network meetings. Records from earlier INEO workshops remain available.',
    activityTagTraining: 'EDUCATION', activity2Title: 'Short courses and learning', activity2Desc: 'Plans include student training, collaboration between institutions and educational activities in schools.',
    activityTagNews: 'COMMUNICATION', activity3Title: 'Science with society', activity3Desc: 'Videos, podcasts, laboratory visits and accessible learning materials are part of the outreach plan.', activityLink: 'Explore the archive',
    closingKicker: 'CONNECTED BY KNOWLEDGE', closingTitle: 'From molecules to society. <em>Science for more sustainable electronics.</em>', closingCta: 'Back to the beginning',
    footerFullName: 'National Institute of Organic and Sustainable Electronics', footerNavigate: 'Navigate', footerExplore: 'Discover', footerLegacy: 'Previous institutional archive', footerContact: 'Contact and channels',
    footerPrototype: 'Development prototype. Institutional information under review.', backTop: 'Back to top',
    pageTitle: 'INEO | Organic and Sustainable Electronics', pageDescription: 'INEO: a Brazilian research network advancing organic and sustainable electronics for energy, health, agriculture and emerging technologies.',
    historyPageTitle: 'INEO History | Organic Electronics', historyPageDescription: 'Explore the origins of organic electronics, conducting polymers and the path from IMMP to INEO.',
    galleryPageTitle: 'Photo Gallery | INEO', galleryPageDescription: 'Photographs from the INEO 2026 Meeting and the network’s historical archive.',
    eventPageTitle: 'INEO Annual Meeting | INEO', eventPageDescription: 'Access the INEO Workshop 2026 proceedings on Even3 and learn about the network’s meetings.',
    labPageTitle: 'Virtual Laboratory | INEO', labPageDescription: 'Explore OLEDs, organic solar cells and biosensors through INEO’s bilingual interactive educational simulations.',
    storyKicker: 'OUR SCIENTIFIC MEMORY', storyTitle: 'A history of science <em>built together.</em>',
    storyLead: 'From the first conducting polymers to the creation of INEO, discover the journey connecting molecules, researchers and Brazilian institutions.',
    storyNavigationScience: 'Origins of organic electronics', storyNavigationInstitute: 'History of INEO', storySource: 'INEO historical archive, placed in context for the renewed institute.',
    storyScienceKicker: 'A MATERIALS REVOLUTION', storyScienceTitle: 'Organic Electronics',
    storyInstituteKicker: 'FROM IMMP TO INEO', storyInstituteTitle: 'INEO: National Institute of Organic Electronics',
    storyInstituteLead: 'A network built through decades of research, teaching, collaboration and national coordination.',
    storyArchiveBadge: 'HISTORICAL RECORD',
    storyArchiveNote: 'The following account and figures reproduce material from the previous institutional site and describe the period up to 2023. Expressions such as “today” refer to that period, not current statistics for the renewed INEO.',
    storyReferences: 'References on the history of Organic Electronics',
    storyReferenceNote: 'References retained from the supplied historical material. Bibliographic formatting is pending review.',
    storyFutureTitle: 'A new chapter: organic and sustainable',
    storyFutureDesc: 'The approved proposal for the renewed INEO brings energy, health, agriculture and sustainable electronics into focus, connecting seven regional hubs and complementary scientific expertise. The earlier network’s history remains central to this continuity.',
    storyGalleryCta: 'Explore the historical gallery', storyBackHome: 'Return to homepage',
    storyDopingCaption: 'Doping and conductivity: a conceptual illustration', storyDopingOff: 'Undoped', storyDopingOn: 'Doped',
    storyDopingNotice: 'Educational schematic, not an experimental measurement or a quantitative simulation.',
    storyDopingOffText: 'In its undoped form, polyacetylene shows substantially lower conductivity.',
    storyDopingOnText: 'In pioneering studies, chemical doping increased its conductivity by approximately ten orders of magnitude.',
    storyTimelineLabel: 'Explore milestones in organic electronics',
    galleryKicker: 'MEMORIES IN IMAGES', galleryTitle: 'Science is also made <em>of encounters.</em>',
    galleryLead: 'From the INEO 2026 Meeting to earlier gatherings: photographs of the people and moments that shape the network.',
    galleryRecentKicker: 'RECENT MOMENTS', galleryRecentTitle: 'INEO Meeting 2026',
    galleryWorkshopKicker: 'PAST MEETINGS', galleryWorkshopTitle: 'INEO Workshop 2023',
    galleryArchiveKicker: 'NETWORK MEMORIES', galleryArchiveTitle: 'Historical archive',
    gallerySourceNote: 'The 2026 meeting photos were supplied for publication. The 2023 photographs were retrieved from the public INEO Workshop 2023 album and the original carousel; other records come from the previous institutional website. The 2024 photo album has yet to be verified.',
    galleryOpen: 'Enlarge photograph', galleryClose: 'Close photograph', galleryPrevious: 'Previous photograph', galleryNext: 'Next photograph',
    galleryWorkshopLink: 'View the original 2023 album', galleryArchiveLink: 'Visit the original archive', galleryBackHome: 'Return to homepage',
    eventKicker: 'THE NETWORK MEETS', eventTitle: 'INEO <em>Annual Meeting.</em>',
    eventLead: 'A space to share research, build collaborations and connect researchers and students working in organic and sustainable electronics.',
    eventProceedingsTitle: 'INEO Workshop 2026 Proceedings', eventProceedingsText: 'Explore the scientific contributions published in the INEO Workshop 2026 proceedings. This link is for the proceedings, not registration for upcoming editions.', eventProceedingsCta: 'View proceedings on Even3',
    eventHistoryTitle: 'A tradition of meeting', eventHistoryText: 'The network’s workshops began in the IMMP era and remain a meeting point for scientific exchange. The institutional archive preserves information about previous editions.',
    eventHistoryLink: 'Browse past workshops', eventBackHome: 'Return to homepage'
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
  publications: [],
  researchers: [],
  syncGeneratedAt: null,
  syncUnresolved: [],
  shownPublications: 16
};

const $ = (selector) => document.querySelector(selector);
const t = (key) => translations[state.lang][key] ?? key;

function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;
  localStorage.setItem('ineo-language', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  const page = document.body.dataset.page ?? 'home';
  const titleKey = page === 'home' ? 'pageTitle' : `${page}PageTitle`;
  const descriptionKey = page === 'home' ? 'pageDescription' : `${page}PageDescription`;
  document.title = t(titleKey);
  const descriptionMeta = $('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = t(descriptionKey);
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
  if ($('#science-visual')) { updateStage(state.stage); updateMotionLabel(); }
  if ($('#network-list')) renderRegions();
  if ($('#publication-results')) renderPublications();
  window.dispatchEvent(new CustomEvent('ineo:language', { detail: { lang } }));
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
  const yearSelect = $('#publication-year');
  const researcherSelect = $('#publication-researcher');
  const previousYear = yearSelect.value;
  const previousResearcher = researcherSelect.value;
  yearSelect.replaceChildren(new Option(t('catalogAllYears'), 'all'));
  researcherSelect.replaceChildren(new Option(t('catalogAllResearchers'), 'all'));
  years.forEach(year => yearSelect.add(new Option(String(year), String(year))));
  state.researchers.forEach(person => researcherSelect.add(new Option(`${person.name} · ${person.institution}`, person.orcid)));
  yearSelect.value = years.some(year => String(year) === previousYear) ? previousYear : 'all';
  researcherSelect.value = state.researchers.some(person => person.orcid === previousResearcher) ? previousResearcher : 'all';
}

function renderPublications() {
  renderPublicationOptions();
  const query = normalize($('#publication-search').value.trim());
  const year = $('#publication-year').value;
  const researcher = $('#publication-researcher').value;
  const peopleByOrcid = new Map(state.researchers.map(person => [person.orcid, person.name]));
  const records = state.publications.filter(item => {
    const selected = (item.matchedResearchers ?? []).map(orcid => peopleByOrcid.get(orcid) ?? '').join(' ');
    const matchText = normalize([item.title, ...(item.authors ?? []), item.doi, item.topic, selected].join(' ')).includes(query);
    return matchText && (year === 'all' || String(item.year) === year)
      && (researcher === 'all' || (item.matchedResearchers ?? []).includes(researcher));
  });
  records.sort((a, b) => Number(b.year) - Number(a.year) || String(b.date ?? '').localeCompare(String(a.date ?? '')) || a.title.localeCompare(b.title));
  const container = $('#publication-results');
  container.replaceChildren();
  const format = (key, fields) => t(key).replace(/\{(\w+)\}/g, (_, name) => String(fields[name] ?? ''));
  const count = $('#publication-status');
  const date = state.syncGeneratedAt ? new Date(state.syncGeneratedAt) : null;
  const dateLabel = date && Number.isFinite(date.getTime())
    ? format('catalogUpdated', { date: date.toLocaleDateString(state.lang === 'pt' ? 'pt-BR' : 'en-US') }) : '';
  count.textContent = [format('catalogCount', { shown: Math.min(records.length, state.shownPublications), total: records.length }), dateLabel,
    state.syncUnresolved.length ? t('catalogPartial') : ''].filter(Boolean).join(' · ');
  const more = $('#publication-load-more');
  more.hidden = records.length <= state.shownPublications;
  more.parentElement.hidden = more.hidden;
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
  const countsByYear = new Map();
  records.forEach(item => countsByYear.set(item.year, (countsByYear.get(item.year) ?? 0) + 1));
  const visible = records.slice(0, state.shownPublications);
  const years = new Map();
  visible.forEach(item => {
    if (!years.has(item.year)) years.set(item.year, []);
    years.get(item.year).push(item);
  });
  for (const [publicationYear, group] of years) {
    const section = document.createElement('section');
    section.className = 'publication-year-group';
    section.setAttribute('aria-label', String(publicationYear));
    const heading = document.createElement('h3');
    heading.className = 'publication-year-heading';
    heading.append(document.createTextNode(String(publicationYear)));
    const total = document.createElement('span');
    total.textContent = format('catalogYearCount', { count: countsByYear.get(publicationYear) });
    heading.append(total);
    section.append(heading);
    for (const item of group) {
    const article = document.createElement('article');
    article.className = 'publication-item';
    const meta = document.createElement('p');
    meta.className = 'publication-meta';
    meta.textContent = [item.journal, item.topic].filter(Boolean).join(' · ');
    const title = document.createElement('h4');
    title.textContent = item.title;
    const authors = document.createElement('p');
    const names = item.authors ?? [];
    authors.textContent = names.slice(0, 7).join(', ') + (names.length > 7 ? ' et al.' : '');
    const badge = document.createElement('span');
    badge.className = 'publication-source-badge';
    badge.textContent = t(item.verified === true ? 'catalogCuratedBadge' : 'catalogAutoBadge');
    article.append(meta, title, authors, badge);
    if (item.openAccess) {
      const access = document.createElement('span');
      access.className = 'publication-access-badge';
      access.textContent = t('catalogOpenAccess');
      article.append(access);
    }
    const matched = (item.matchedResearchers ?? []).map(orcid => peopleByOrcid.get(orcid)).filter(Boolean);
    if (matched.length) {
      const related = document.createElement('p');
      related.className = 'publication-matched';
      related.textContent = `${t('catalogMatched')} ${matched.join(', ')}`;
      article.append(related);
    }
    if (typeof item.doi === 'string' && /^10\.\d{4,9}\/.+/.test(item.doi)) {
      const link = document.createElement('a');
      link.href = `https://doi.org/${encodeURI(item.doi)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = t('catalogRead');
      article.appendChild(link);
    } else if (/^https:\/\/openalex\.org\/W\d+$/.test(item.openalexId ?? '')) {
      const link = document.createElement('a');
      link.href = item.openalexId;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = t('catalogViewOpenAlex');
      article.appendChild(link);
    }
    section.append(article);
    }
    container.append(section);
  }
}

async function loadPublications() {
  const inRenewedPeriod = item => {
    const year = Number(item.year);
    if (!Number.isInteger(year)) return false;
    const date = /^\d{4}-\d{2}-\d{2}$/.test(item.date ?? '') ? item.date : `${year}-01-01`;
    return date >= renewedIneoStartDate;
  };
  const readJson = async file => {
    const response = await fetch(file, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${file}`);
    return response.json();
  };
  const [curatedResult, openalexResult] = await Promise.allSettled([
    readJson('content/publications.json'), readJson('content/openalex.json')
  ]);
  const curated = curatedResult.status === 'fulfilled' && Array.isArray(curatedResult.value.publications)
    ? curatedResult.value.publications.filter(item => item.verified === true && typeof item.title === 'string' && inRenewedPeriod(item)) : [];
  const openalex = openalexResult.status === 'fulfilled' ? openalexResult.value : {};
  const candidates = Array.isArray(openalex.publications)
    ? openalex.publications.filter(item => item.source === 'openalex' && item.verified === false && typeof item.title === 'string' && inRenewedPeriod(item)) : [];
  if (openalexResult.status === 'rejected') console.warn('OpenAlex catalogue unavailable:', openalexResult.reason);
  state.researchers = Array.isArray(openalex.researchers) ? openalex.researchers : [];
  state.syncGeneratedAt = openalex.generatedAt ?? null;
  state.syncUnresolved = Array.isArray(openalex.unresolved) ? openalex.unresolved : [];
  const curatedKeys = new Set(curated.map(item => item.doi ? `doi:${item.doi.toLowerCase()}` : `openalex:${item.openalexId}`));
  state.publications = [...curated, ...candidates.filter(item => !curatedKeys.has(item.doi ? `doi:${item.doi.toLowerCase()}` : `openalex:${item.openalexId}`))];
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
  window.addEventListener('resize', () => { if (window.innerWidth > 1130) closeMenu(); });

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
  if ($('#motion-toggle')) $('#motion-toggle').addEventListener('click', () => { state.paused = !state.paused; updateMotionLabel(); });
  const resetPublicationPage = () => { state.shownPublications = 16; renderPublications(); };
  if ($('#publication-search')) $('#publication-search').addEventListener('input', resetPublicationPage);
  if ($('#publication-year')) $('#publication-year').addEventListener('change', resetPublicationPage);
  if ($('#publication-researcher')) $('#publication-researcher').addEventListener('change', resetPublicationPage);
  if ($('#publication-load-more')) $('#publication-load-more').addEventListener('click', () => {
    state.shownPublications += 16;
    renderPublications();
  });
  document.querySelectorAll('.discovery-step').forEach((link, index) => {
    link.addEventListener('click', () => updateStage(stages[index]));
  });
}

$('#current-year').textContent = new Date().getFullYear();
initNavigation();
initInteractions();
setLanguage(state.lang);
if ($('#publication-results')) loadPublications();
