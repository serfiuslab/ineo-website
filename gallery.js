/* Recent meeting photos were supplied and cleared for public publication by INEO.
 * Workshop 2023 photos come from the public 2023 album on the legacy INEO site.
 * Other historical photos are web-resolution captures from its homepage carousel.
 * People and locations are not inferred without source verification.
 */

const galleryPhotos = [
  'assets/gallery/encontro-ineo-2026-01.webp',
  'assets/gallery/encontro-ineo-2026-02.webp',
  'assets/gallery/encontro-ineo-2026-03.webp',
  'assets/gallery/ineo-workshop-2023.jpg',
  'assets/gallery/workshop-ineo-2023-01.webp',
  'assets/gallery/workshop-ineo-2023-02.webp',
  'assets/gallery/workshop-ineo-2023-03.webp',
  'assets/gallery/workshop-ineo-2023-04.webp',
  'assets/gallery/workshop-ineo-2023-05.webp',
  'assets/gallery/workshop-ineo-2023-06.webp',
  'assets/gallery/research-network-group.jpg',
  'assets/gallery/scientific-presentation.jpg',
  'assets/gallery/laboratory-equipment.jpg',
  'assets/gallery/flexible-electronics.jpg'
];
const recentPhotoCount = 3;
const workshopPhotoCount = 7;

const photoCaptions = {
  pt: [
    'Encontro INEO 2026',
    'Encontro INEO 2026',
    'Encontro INEO 2026',
    'Workshop INEO 2023',
    'Boas-vindas ao Workshop INEO 2023',
    'Apresentação científica no Workshop INEO 2023',
    'Público durante uma sessão do Workshop INEO 2023 — registro 1',
    'Público durante uma sessão do Workshop INEO 2023 — registro 2',
    'Público durante uma sessão do Workshop INEO 2023 — registro 3',
    'Público durante uma sessão do Workshop INEO 2023 — registro 4',
    'Pesquisadores e integrantes da rede',
    'Apresentação em encontro científico',
    'Infraestrutura de laboratório',
    'Dispositivo eletrônico flexível'
  ],
  en: [
    'INEO Meeting 2026',
    'INEO Meeting 2026',
    'INEO Meeting 2026',
    'INEO Workshop 2023',
    'Welcome to INEO Workshop 2023',
    'Scientific presentation at INEO Workshop 2023',
    'Audience during a session of INEO Workshop 2023 — view 1',
    'Audience during a session of INEO Workshop 2023 — view 2',
    'Audience during a session of INEO Workshop 2023 — view 3',
    'Audience during a session of INEO Workshop 2023 — view 4',
    'Researchers and network participants',
    'Presentation at a scientific meeting',
    'Laboratory infrastructure',
    'Flexible electronic device'
  ]
};

const galleryCopy = {
  pt: {
    title: 'Encontros e atividades da rede',
    sourceRecent: 'ENCONTRO INEO 2026',
    sourceWorkshop: 'WORKSHOP INEO 2023',
    sourceArchive: 'ACERVO HISTÓRICO',
    count: (index, total) => `Foto ${index} de ${total}`
  },
  en: {
    title: 'Network meetings and activities',
    sourceRecent: 'INEO MEETING 2026',
    sourceWorkshop: 'INEO WORKSHOP 2023',
    sourceArchive: 'HISTORICAL ARCHIVE',
    count: (index, total) => `Photo ${index} of ${total}`
  }
};

let galleryIndex = 0;
let galleryLanguage = document.documentElement.lang === 'en' ? 'en' : 'pt';
let lastPhotoTrigger = null;
const galleryGrid = document.getElementById('gallery-grid');
const galleryRecentGrid = document.getElementById('gallery-recent-grid');
const galleryWorkshopGrid = document.getElementById('gallery-workshop-grid');
const photoDialog = document.getElementById('photo-dialog');

function photoSource(index, copy) {
  if (index < recentPhotoCount) return copy.sourceRecent;
  if (index < recentPhotoCount + workshopPhotoCount) return copy.sourceWorkshop;
  return copy.sourceArchive;
}

function updateLightbox() {
  const copy = galleryCopy[galleryLanguage];
  const current = galleryIndex + 1;
  document.getElementById('lightbox-image').src = galleryPhotos[galleryIndex];
  document.getElementById('lightbox-image').alt = `${photoCaptions[galleryLanguage][galleryIndex]}, ${copy.count(current, galleryPhotos.length)}`;
  document.getElementById('lightbox-counter').textContent = copy.count(current, galleryPhotos.length);
  document.getElementById('lightbox-caption').textContent = photoCaptions[galleryLanguage][galleryIndex];
}

function openPhoto(index, trigger) {
  galleryIndex = index;
  lastPhotoTrigger = trigger;
  updateLightbox();
  photoDialog.showModal();
}

function shiftPhoto(offset) {
  galleryIndex = (galleryIndex + offset + galleryPhotos.length) % galleryPhotos.length;
  updateLightbox();
}

function renderGallery(lang) {
  galleryLanguage = lang;
  const copy = galleryCopy[lang];
  galleryGrid.replaceChildren();
  galleryRecentGrid.replaceChildren();
  galleryWorkshopGrid.replaceChildren();
  galleryPhotos.forEach((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-tile';
    button.setAttribute('aria-label', `${translations[lang].galleryOpen}: ${photoCaptions[lang][index]}, ${copy.count(index + 1, galleryPhotos.length)}`);
    const image = document.createElement('img');
    image.src = src;
    image.loading = index < 2 ? 'eager' : 'lazy';
    image.alt = `${photoCaptions[lang][index]}, ${copy.count(index + 1, galleryPhotos.length)}`;
    const content = document.createElement('span'); content.className = 'photo-tile-copy';
    const source = document.createElement('small'); source.textContent = photoSource(index, copy);
    const title = document.createElement('strong'); title.textContent = photoCaptions[lang][index];
    content.append(source, title);
    button.append(image, content);
    button.addEventListener('click', () => openPhoto(index, button));
    const group = index < recentPhotoCount ? galleryRecentGrid
      : index < recentPhotoCount + workshopPhotoCount ? galleryWorkshopGrid : galleryGrid;
    group.append(button);
  });
  if (photoDialog.open) updateLightbox();
}

document.getElementById('lightbox-close').addEventListener('click', () => photoDialog.close());
document.getElementById('lightbox-prev').addEventListener('click', () => shiftPhoto(-1));
document.getElementById('lightbox-next').addEventListener('click', () => shiftPhoto(1));
photoDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    shiftPhoto(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
photoDialog.addEventListener('click', event => { if (event.target === photoDialog) photoDialog.close(); });
photoDialog.addEventListener('close', () => lastPhotoTrigger?.focus());

window.addEventListener('ineo:language', event => renderGallery(event.detail.lang));
renderGallery(galleryLanguage);
