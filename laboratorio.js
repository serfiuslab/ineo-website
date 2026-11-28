/* Educational simulations for the INEO Virtual Laboratory.
 * All three models are qualitative and intentionally not calibrated to real devices.
 */

const labTranslations = {
  pt: {
    eyebrow: 'INEO · LABORATÓRIO VIRTUAL',
    heroTitle: 'A ciência fica mais clara <em>quando você experimenta.</em>',
    heroLead: 'Acenda um OLED, investigue uma célula solar e observe como um biossensor responde. Mude os parâmetros, faça previsões e descubra a física por trás de cada fenômeno.',
    start: 'Começar a investigar', backResearch: 'Conhecer a pesquisa do INEO',
    heroNote: 'Experiências educativas e qualitativas. Nenhum resultado é uma medição ou diagnóstico real.',
    pauseMotion: 'Pausar animações', resumeMotion: 'Retomar animações',
    artCaption: 'MOLÉCULAS · DISPOSITIVOS · IMPACTO', oledIndex: 'EXPERIMENTO 01 · OLED', solarIndex: 'EXPERIMENTO 02 · OPV', sensorIndex: 'EXPERIMENTO 03 · BIOSENSOR',
    chooseLabel: 'ESCOLHA SUA INVESTIGAÇÃO', chooseTitle: 'Três fenômenos. Muitas perguntas.',
    chooseDescription: 'Cada experimento possui controles, uma pergunta para testar e uma explicação para aprofundar.',
    oledShort: 'Produzir luz', solarShort: 'Captar luz', sensorShort: 'Detectar moléculas', openExperiment: 'Abrir experimento',
    oledTitle: 'Como eletricidade pode produzir luz?',
    oledIntro: 'Em um OLED, cargas elétricas injetadas nas camadas orgânicas podem se recombinar e formar estados excitados que emitem luz.',
    optoelectronics: 'OPTOELETRÔNICA', deviceView: 'VISUALIZAÇÃO DO DISPOSITIVO', schematic: 'ESQUEMA CONCEITUAL',
    oledVisualTitle: 'OLED de camadas orgânicas entre dois eletrodos',
    oledVisualDesc: 'Ilustração de cargas opostas convergindo para uma camada emissora e fótons emergindo do dispositivo quando a tensão aumenta.',
    upperContact: 'ELETRODO SUPERIOR', lowerContact: 'ELETRODO INFERIOR', organicLayer: 'MATERIAL ORGÂNICO',
    transparentContact: 'CONTATO TRANSPARENTE', photoactiveLayer: 'CAMADA FOTOATIVA', collectingContact: 'CONTATO COLETOR',
    notToScale: 'Ilustração simplificada · sem escala', emissionLabel: 'Emissão luminosa ilustrativa',
    emissionMeterAria: 'Intensidade luminosa relativa', controlPanel: 'PAINEL DE CONTROLE', voltage: 'Tensão aplicada',
    emissionColor: 'Cor da emissão ilustrativa', blue: 'Azul', green: 'Verde', red: 'Vermelho',
    observation: 'O QUE VOCÊ OBSERVA', reset: 'Reiniciar experimento', challenge: 'DESAFIO PARA INVESTIGAR',
    oledChallenge: 'A luz aparece mesmo quando a tensão está muito baixa? Formule uma hipótese e teste.',
    understand: 'Entenda o fenômeno',
    oledExplanation: 'Em OLEDs, a emissão depende da injeção e do transporte de elétrons e lacunas, da formação de estados excitados e das perdas não radiativas. A tensão usada aqui controla apenas uma resposta luminosa ilustrativa: curvas reais e limiares variam conforme o dispositivo.',
    solarTitle: 'Como transformar luz em eletricidade?',
    solarIntro: 'Uma célula solar orgânica absorve luz e pode converter parte da energia recebida em cargas elétricas coletáveis nos contatos.',
    solarEnergy: 'ENERGIA SOLAR',
    solarVisualTitle: 'Célula solar orgânica iluminada',
    solarVisualDesc: 'Fótons atingem o material orgânico, geram excitações e cargas são separadas e transportadas até os eletrodos de coleta.',
    collectionLabel: 'Sinal coletado ilustrativo', collectionMeterAria: 'Sinal relativo coletado',
    illumination: 'Iluminação relativa', collection: 'Coleta de cargas ilustrativa',
    solarChallenge: 'E se houver muita luz, mas poucos portadores de carga chegarem aos eletrodos? Experimente os dois controles.',
    solarExplanation: 'Depois da absorção de fótons, a separação dos estados excitados, o transporte e a coleta de cargas competem com processos de perda. Este modelo mostra qualitativamente duas dependências, sem calcular eficiência de conversão de potência, corrente real ou resposta espectral.',
    sensorTitle: 'Como detectar o que não conseguimos ver?',
    sensorIntro: 'Um biossensor reúne um elemento de reconhecimento e um transdutor. Quando há interação com uma substância de interesse, seu sinal pode mudar.',
    healthEnvironment: 'SAÚDE E AMBIENTE', surfaceView: 'SUPERFÍCIE DO SENSOR',
    sensorVisualTitle: 'Alvos moleculares sobre a superfície de um biossensor',
    sensorVisualDesc: 'Partículas da amostra aparecem na solução, algumas se ligam aos receptores quando há reconhecimento compatível e uma barra ilustra a resposta do sensor.',
    sensorGraphAria: 'Curva ilustrativa da resposta do sensor em função da concentração',
    responseCurve: 'RESPOSTA RELATIVA × CONCENTRAÇÃO', concentration: 'Concentração relativa do alvo',
    recognition: 'Elemento de reconhecimento', matching: 'Compatível com o alvo', nonmatching: 'Não compatível',
    responseSignal: 'Sinal relativo (unidades arbitrárias)',
    sensorChallenge: 'O que acontece quando aumentamos a concentração, mas o receptor não reconhece o alvo? Compare os dois casos.',
    sensorExplanation: 'A curva didática usa uma função saturante simples, inspirada em modelos de ocupação de sítios. A resposta de sensores reais depende de afinidade, interferentes, ruído, arquitetura e calibração. O gráfico não representa limite de detecção nem desempenho de diagnóstico.',
    teacherKicker: 'PARA ALUNOS E PROFESSORES', teacherTitle: 'Leve a investigação <em>para a sala de aula.</em>',
    teacherDescription: 'Comece com uma previsão, varie um parâmetro por vez, registre observações e discuta onde o modelo simplificado deixa de representar um dispositivo real. Os controles também funcionam com teclado e em celulares.',
    teacherStep1: 'Formule uma hipótese', teacherStep2: 'Teste os controles', teacherStep3: 'Compare e explique',
    scienceDisclaimer: 'Estas simulações são recursos didáticos qualitativos desenvolvidos para divulgação científica. Valores, curvas, limiares, seletividade e trajetórias são ilustrativos, não medições do INEO nem previsões validadas para dispositivos reais.',
    readResearch: 'Explorar publicações dos pesquisadores',
    statusNone: 'Sem resposta', statusLow: 'Baixa', statusMedium: 'Moderada', statusHigh: 'Alta',
    solarStatusMedium: 'Moderado', solarStatusLow: 'Baixo', solarStatusHigh: 'Alto',
    oledOff: 'Nesta representação, a tensão está abaixo do limiar ilustrativo. Não há emissão visível.',
    oledWeak: 'A injeção de cargas começa a produzir uma emissão fraca no modelo. Aumente a tensão e observe.',
    oledBright: 'A emissão ilustrativa fica mais intensa com a tensão. Em dispositivos reais, o brilho não cresce indefinidamente.',
    solarDark: 'Sem iluminação, este modelo não gera sinal fotovoltaico.',
    solarNoCollection: 'Há iluminação, mas a coleta foi ajustada para zero. Sem cargas coletadas, o sinal externo permanece nulo.',
    solarWeak: 'O sinal depende tanto da luz disponível quanto da capacidade de separar e coletar cargas.',
    solarStrong: 'Com iluminação e coleta favoráveis, a resposta ilustrativa aumenta. Isso não equivale à eficiência real da célula.',
    sensorAbsent: 'Com concentração zero, o modelo mostra apenas seu sinal de fundo ilustrativo.',
    sensorWrong: 'A resposta muda pouco porque o elemento de reconhecimento foi definido como não compatível com o alvo.',
    sensorCorrect: 'Aumentar a concentração eleva a ocupação dos receptores e aproxima a resposta de uma saturação ilustrativa.'
  },
  en: {
    eyebrow: 'INEO · VIRTUAL LABORATORY',
    heroTitle: 'Science makes more sense <em>when you experiment.</em>',
    heroLead: 'Light up an OLED, investigate a solar cell and observe how a biosensor responds. Change parameters, make predictions and uncover the physics of each phenomenon.',
    start: 'Start investigating', backResearch: 'Explore INEO research',
    heroNote: 'Educational, qualitative experiences. No result is a real measurement or diagnosis.',
    pauseMotion: 'Pause animations', resumeMotion: 'Resume animations',
    artCaption: 'MOLECULES · DEVICES · IMPACT', oledIndex: 'EXPERIMENT 01 · OLED', solarIndex: 'EXPERIMENT 02 · OPV', sensorIndex: 'EXPERIMENT 03 · BIOSENSOR',
    chooseLabel: 'CHOOSE AN INVESTIGATION', chooseTitle: 'Three phenomena. Many questions.',
    chooseDescription: 'Each experiment includes controls, a testable question and an explanation for deeper learning.',
    oledShort: 'Make light', solarShort: 'Harvest light', sensorShort: 'Detect molecules', openExperiment: 'Open experiment',
    oledTitle: 'How can electricity produce light?',
    oledIntro: 'In an OLED, electrical charges injected into organic layers may recombine to form excited states that emit light.',
    optoelectronics: 'OPTOELECTRONICS', deviceView: 'DEVICE VIEW', schematic: 'CONCEPTUAL SCHEMATIC',
    oledVisualTitle: 'OLED with organic layers between two electrodes',
    oledVisualDesc: 'Opposite charges converge towards an emitting layer, and photons emerge as the applied voltage increases.',
    upperContact: 'UPPER ELECTRODE', lowerContact: 'LOWER ELECTRODE', organicLayer: 'ORGANIC MATERIAL',
    transparentContact: 'TRANSPARENT CONTACT', photoactiveLayer: 'PHOTOACTIVE LAYER', collectingContact: 'COLLECTING CONTACT',
    notToScale: 'Simplified illustration · not to scale', emissionLabel: 'Illustrative light emission',
    emissionMeterAria: 'Relative light intensity', controlPanel: 'CONTROL PANEL', voltage: 'Applied voltage',
    emissionColor: 'Illustrative emission color', blue: 'Blue', green: 'Green', red: 'Red',
    observation: 'WHAT YOU OBSERVE', reset: 'Reset experiment', challenge: 'INVESTIGATION CHALLENGE',
    oledChallenge: 'Does light appear even when the voltage is very low? Make a prediction and test it.',
    understand: 'Understand the phenomenon',
    oledExplanation: 'OLED emission depends on electron and hole injection, transport, excited-state formation and nonradiative losses. Here, voltage controls an illustrative light response only; real voltage-response curves and thresholds are device-dependent.',
    solarTitle: 'How can light become electricity?',
    solarIntro: 'An organic solar cell absorbs light and may convert some of the received energy into electrical charges that can be collected at its contacts.',
    solarEnergy: 'SOLAR ENERGY',
    solarVisualTitle: 'Illuminated organic solar cell',
    solarVisualDesc: 'Photons reach the organic material, generate excitations, and charges separate and move towards collecting electrodes.',
    collectionLabel: 'Illustrative collected signal', collectionMeterAria: 'Relative collected signal',
    illumination: 'Relative illumination', collection: 'Illustrative charge collection',
    solarChallenge: 'What if there is plenty of light but very few charge carriers reach the electrodes? Try both controls.',
    solarExplanation: 'After photons are absorbed, excited-state separation, charge transport and collection compete with loss processes. This model qualitatively shows two dependencies; it does not calculate real power conversion efficiency, current or spectral response.',
    sensorTitle: 'How can we detect what we cannot see?',
    sensorIntro: 'A biosensor combines a recognition element with a transducer. When it interacts with a substance of interest, its signal may change.',
    healthEnvironment: 'HEALTH AND ENVIRONMENT', surfaceView: 'SENSOR SURFACE',
    sensorVisualTitle: 'Target molecules above a biosensor surface',
    sensorVisualDesc: 'Sample particles appear in the solution and some bind to receptors when recognition is compatible, with an illustrative response curve.',
    sensorGraphAria: 'Illustrative sensor response curve versus concentration',
    responseCurve: 'RELATIVE RESPONSE × CONCENTRATION', concentration: 'Relative target concentration',
    recognition: 'Recognition element', matching: 'Matches the target', nonmatching: 'Does not match',
    responseSignal: 'Relative signal (arbitrary units)',
    sensorChallenge: 'What happens when concentration increases but the receptor does not recognize the target? Compare both cases.',
    sensorExplanation: 'The educational curve uses a simple saturating function inspired by site-occupancy models. Real sensor responses depend on affinity, interferents, noise, architecture and calibration. The curve does not represent detection limits or diagnostic performance.',
    teacherKicker: 'FOR STUDENTS AND TEACHERS', teacherTitle: 'Bring investigation <em>into the classroom.</em>',
    teacherDescription: 'Start with a prediction, change one parameter at a time, record observations and discuss where the simplified model stops representing a real device. Controls work with keyboards and on phones.',
    teacherStep1: 'Make a hypothesis', teacherStep2: 'Test the controls', teacherStep3: 'Compare and explain',
    scienceDisclaimer: 'These simulations are qualitative educational resources for science outreach. Values, curves, thresholds, selectivity and trajectories are illustrative, not INEO measurements or validated predictions for actual devices.',
    readResearch: 'Browse researcher publications',
    statusNone: 'No response', statusLow: 'Low', statusMedium: 'Moderate', statusHigh: 'High',
    solarStatusMedium: 'Moderate', solarStatusLow: 'Low', solarStatusHigh: 'High',
    oledOff: 'In this illustration, the voltage is below an illustrative threshold. No visible light is emitted.',
    oledWeak: 'Charge injection begins to produce weak emission in the model. Increase the voltage and observe.',
    oledBright: 'Illustrative emission gets brighter as voltage rises. In real devices, brightness does not increase indefinitely.',
    solarDark: 'Without illumination, this model produces no photovoltaic signal.',
    solarNoCollection: 'There is light, but charge collection is set to zero. With no collected charges, the external signal remains zero.',
    solarWeak: 'The signal depends on both the available light and the ability to separate and collect charges.',
    solarStrong: 'With favorable illumination and collection, the illustrative response increases. This is not the cell’s real efficiency.',
    sensorAbsent: 'With zero target concentration, the model displays only its illustrative background signal.',
    sensorWrong: 'The response changes very little because the recognition element is set to not match the target.',
    sensorCorrect: 'Increasing concentration raises receptor occupancy, approaching an illustrative saturating response.'
  }
};

const labDefaults = Object.freeze({ oledVoltage: 3, oledColor: 'blue', solarLight: 70, solarCollection: 75, sensorConcentration: 50, sensorSpecificity: 'matching' });
const labState = { ...labDefaults, lang: localStorage.getItem('ineo-language') === 'en' ? 'en' : 'pt', paused: matchMedia('(prefers-reduced-motion: reduce)').matches };
const labText = key => labTranslations[labState.lang][key] ?? key;
const labElement = id => document.getElementById(id);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/* Pure, qualitative models. These are not device-calibration functions. */
function oledIntensity(voltage) { return Math.pow(clamp((voltage - 2) / 3, 0, 1), 1.45); }
function solarSignal(light, collection) { return clamp(light / 100, 0, 1) * clamp(collection / 100, 0, 1); }
function sensorSignal(concentration, matching) {
  const occupancy = concentration / (concentration + 30);
  return 0.04 + occupancy * (matching ? 0.95 : 0.065);
}

const number = (value, digits) => new Intl.NumberFormat(labState.lang === 'pt' ? 'pt-BR' : 'en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);

function updateOled() {
  const value = oledIntensity(labState.oledVoltage);
  const colors = { blue: '#198ff3', green: '#23b57c', red: '#ec696c' };
  const active = value > .001;
  labElement('oled-voltage-output').textContent = `${number(labState.oledVoltage, 1)} V`;
  labElement('oled-meter').style.width = `${Math.round(100 * value)}%`;
  labElement('oled-photons').style.opacity = String(active ? Math.max(.25, value) : .035);
  labElement('oled-photons').classList.toggle('is-on', active);
  labElement('oled-carriers').classList.toggle('is-on', active);
  labElement('oled-glow').setAttribute('fill', colors[labState.oledColor]);
  labElement('oled-glow').setAttribute('opacity', String(.12 + .75 * value));
  labElement('oled').style.setProperty('--emission', colors[labState.oledColor]);
  labElement('oled-status').textContent = !active ? labText('statusNone') : value < .25 ? labText('statusLow') : value < .7 ? labText('statusMedium') : labText('statusHigh');
  labElement('oled-observation').textContent = !active ? labText('oledOff') : value < .25 ? labText('oledWeak') : labText('oledBright');
}

function updateSolar() {
  const signal = solarSignal(labState.solarLight, labState.solarCollection);
  labElement('solar-light-output').textContent = `${labState.solarLight}%`;
  labElement('solar-collection-output').textContent = `${labState.solarCollection}%`;
  labElement('solar-meter').style.width = `${Math.round(signal * 100)}%`;
  labElement('solar-beam').style.opacity = String(.05 + labState.solarLight / 100 * .95);
  labElement('solar-beam').classList.toggle('is-on', labState.solarLight > 0);
  labElement('solar-charges').style.opacity = String(.08 + signal * .92);
  labElement('solar-charges').classList.toggle('is-on', signal > .001);
  labElement('solar-status').textContent = signal < .01 ? labText('statusNone') : signal < .25 ? labText('solarStatusLow') : signal < .65 ? labText('solarStatusMedium') : labText('solarStatusHigh');
  labElement('solar-observation').textContent = labState.solarLight === 0 ? labText('solarDark') : labState.solarCollection === 0 ? labText('solarNoCollection') : signal < .45 ? labText('solarWeak') : labText('solarStrong');
}

function updateSensor() {
  const matching = labState.sensorSpecificity === 'matching';
  const concentration = labState.sensorConcentration;
  const signal = sensorSignal(concentration, matching);
  const occupancy = concentration / (concentration + 30);
  labElement('sensor-concentration-output').textContent = String(concentration);
  labElement('sensor-readout').textContent = number(signal, 2);
  labElement('sensor-targets').querySelectorAll('circle').forEach((node, index) => { node.style.opacity = index < Math.round(12 * concentration / 100) ? '1' : '0'; });
  labElement('sensor-binding').querySelectorAll('circle').forEach((node, index) => { node.style.opacity = matching && concentration > 0 && index < Math.round(occupancy * 5) ? '1' : '0'; });
  const plotX = value => 33 + value / 100 * 306;
  const plotY = value => 118 - value * 106;
  const curve = Array.from({ length: 51 }, (_, index) => {
    const concentrationAtPoint = index * 2;
    return `${index === 0 ? 'M' : 'L'}${plotX(concentrationAtPoint).toFixed(2)} ${plotY(sensorSignal(concentrationAtPoint, matching)).toFixed(2)}`;
  }).join(' ');
  labElement('sensor-curve').setAttribute('d', curve);
  labElement('sensor-plot-point').setAttribute('cx', String(plotX(concentration)));
  labElement('sensor-plot-point').setAttribute('cy', String(plotY(signal)));
  labElement('sensor-observation').textContent = concentration === 0 ? labText('sensorAbsent') : !matching ? labText('sensorWrong') : labText('sensorCorrect');
}

function updateAllExperiments() { updateOled(); updateSolar(); updateSensor(); }

function setLabLanguage(language) {
  if (!labTranslations[language]) return;
  labState.lang = language;
  document.querySelectorAll('[data-lab]').forEach(node => { node.textContent = labText(node.dataset.lab); });
  document.querySelectorAll('[data-lab-html]').forEach(node => { node.innerHTML = labText(node.dataset.labHtml); });
  document.querySelectorAll('[data-lab-aria]').forEach(node => { node.setAttribute('aria-label', labText(node.dataset.labAria)); });
  labElement('lab-motion').textContent = labText(labState.paused ? 'resumeMotion' : 'pauseMotion');
  updateAllExperiments();
}

function updateMotion() {
  document.body.classList.toggle('lab-paused', labState.paused);
  labElement('lab-motion').setAttribute('aria-pressed', String(labState.paused));
  labElement('lab-motion').textContent = labText(labState.paused ? 'resumeMotion' : 'pauseMotion');
}

function initLaboratory() {
  const bindSlider = (id, field, update) => labElement(id).addEventListener('input', event => {
    labState[field] = Number(event.target.value);
    update();
  });
  bindSlider('oled-voltage', 'oledVoltage', updateOled);
  bindSlider('solar-light', 'solarLight', updateSolar);
  bindSlider('solar-collection', 'solarCollection', updateSolar);
  bindSlider('sensor-concentration', 'sensorConcentration', updateSensor);
  labElement('oled-color').addEventListener('change', event => { labState.oledColor = event.target.value; updateOled(); });
  labElement('sensor-specificity').addEventListener('change', event => { labState.sensorSpecificity = event.target.value; updateSensor(); });

  const fields = {
    oled: { oledVoltage: 'oled-voltage', oledColor: 'oled-color' },
    solar: { solarLight: 'solar-light', solarCollection: 'solar-collection' },
    sensor: { sensorConcentration: 'sensor-concentration', sensorSpecificity: 'sensor-specificity' }
  };
  document.querySelectorAll('[data-reset]').forEach(button => button.addEventListener('click', () => {
    for (const [name, control] of Object.entries(fields[button.dataset.reset])) {
      labState[name] = labDefaults[name];
      labElement(control).value = labDefaults[name];
    }
    updateAllExperiments();
  }));
  labElement('lab-motion').addEventListener('click', () => { labState.paused = !labState.paused; updateMotion(); });
  window.addEventListener('ineo:language', event => setLabLanguage(event.detail.lang));
  setLabLanguage(labState.lang);
  updateMotion();
}

initLaboratory();
