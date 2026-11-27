/* Local copies captured from the public carousel on the legacy INEO homepage.
 * These are web-resolution archival captures, not original camera files.
 * People, dates and locations are not inferred without source verification.
 */

const galleryPhotos = [
  'assets/gallery/ineo-workshop-2023.jpg',
  'assets/gallery/research-network-group.jpg',
  'assets/gallery/scientific-presentation.jpg',
  'assets/gallery/laboratory-equipment.jpg',
  'assets/gallery/flexible-electronics.jpg'
];

const photoCaptions = {
  pt: [
    'Workshop INEO 2023',
    'Pesquisadores e integrantes da rede',
    'Apresentação em encontro científico',
    'Infraestrutura de laboratório',
    'Dispositivo eletrônico flexível'
  ],
  en: [
    'INEO Workshop 2023',
    'Researchers and network participants',
    'Presentation at a scientific meeting',
    'Laboratory infrastructure',
    'Flexible electronic device'
  ]
};

const galleryCopy = {
  pt: {
    title: 'Encontros e atividades da rede',
    source: 'ACERVO HISTÓRICO',
    image: 'Registro fotográfico do antigo site do INEO',
    count: (index, total) => `Foto ${index} de ${total}`
  },
  en: {
    title: 'Network meetings and activities',
    source: 'HISTORICAL ARCHIVE',
    image: 'Photograph from INEO’s previous website',
    count: (index, total) => `Photo ${index} of ${total}`
  }
};

let galleryIndex = 0;
let galleryLanguage = document.documentElement.lang === 'en' ? 'en' : 'pt';
let lastPhotoTrigger = null;
const galleryGrid = document.getElementById('gallery-grid');
const photoDialog = document.getElementById('photo-dialog');

function updateLightbox() {
  const copy = galleryCopy[galleryLanguage];
  const current = galleryIndex + 1;
  document.getElementById('lightbox-image').src = galleryPhotos[galleryIndex];
  document.getElementById('lightbox-image').alt = `${copy.image}, ${copy.count(current, galleryPhotos.length)}`;
  document.getElementById('lightbox-counter').textContent = copy.count(current, galleryPhotos.length);
  document.getElementById('lightbox-caption').textContent = `${photoCaptions[galleryLanguage][galleryIndex]} · ${copy.source}`;
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
  galleryPhotos.forEach((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-tile';
    button.setAttribute('aria-label', `${translations[lang].galleryOpen}: ${copy.count(index + 1, galleryPhotos.length)}`);
    const image = document.createElement('img');
    image.src = src;
    image.loading = index < 2 ? 'eager' : 'lazy';
    image.alt = `${copy.image}, ${copy.count(index + 1, galleryPhotos.length)}`;
    const content = document.createElement('span'); content.className = 'photo-tile-copy';
    const source = document.createElement('small'); source.textContent = copy.source;
    const title = document.createElement('strong'); title.textContent = photoCaptions[lang][index];
    content.append(source, title);
    button.append(image, content);
    button.addEventListener('click', () => openPhoto(index, button));
    galleryGrid.append(button);
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
