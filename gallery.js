/* Photographs come from the publicly accessible carousel on the legacy INEO homepage.
 * They are not dated or individually identified until the institutional archive is reviewed.
 * Replace external URLs with locally hosted, approved originals when they are supplied.
 */

const galleryPhotos = [
  'https://sites.google.com/sitesv-images-rt/APXyLQf2NAiMN4gk50ai7MxN7I8pLqyL_UqoiF5g6W0Z8QWSG5DDhV7t2tRdRnswMZTH12ZoKe_8_JZTIjLXNWTnAIS8RS1jEtFiFQMdW0p6ci8AlotdV_coaRmGinKHqcBOdqmxsA-J7EzRXDv7YiqhDBJdtd47rY5YHTL7Kz5zjNv5FFRN90VIVKPGpksQ28k=w16383',
  'https://sites.google.com/sitesv-images-rt/APXyLQdNRtjt2kH2B5_Ucjny1lKL62s7RLwYslzqwX5ShRHRwTxHScL5UntYjI8jtYjSin6jte7O_dxtdywEMxmmre5zYbfVBT3KaaJ_m6vBD_XFopoRKzN0renxGOMPDYrWVSP6W5qdpQ_ZR0Bzsi_qvivBaDSP1Nr6v8RCClLVMOVFHNBtp8lo1gQuRQ-Ixtw=w16383',
  'https://sites.google.com/sitesv-images-rt/APXyLQd7LBuzLWxzJ6OT7PGJRj5fxUd3oqEQZ_kHdpsI2ySEShKynatqpnnhzWSsC2hnv2NmVWjpuLBMwug1Tlds2MePRuE3qvfaW4_wF8_cxcrHeu3iekGSVNbRToeKmj-7DCTn_pK1xK585JMvA02vnxn5fd-6ezL3Dr-kE4Mf6oq7QBcEoW7RMjZIyja-Cgc=w16383',
  'https://sites.google.com/sitesv-images-rt/APXyLQfKiR_g5hsOROjr9UqAQ39onOr1-x74LMphFGsjRx3Sx_SMTT4qGRCtIlLcxGjiKEaN4dHkikbYOo1Y1XOMZfGqiUl48ftXxNTqQGDkeACv8wMOfcktGmhSF1z6VCQkq0U7HWuAiEDES4eFiKnhMFx1PLSgZVPUVjzaMF-jUq4FkSqtm3FzOR--9aHHBjA=w16383',
  'https://sites.google.com/sitesv-images-rt/APXyLQdv1YSZBSE4DYTCgRTfQcydciqJK4RuehTsgpx3UqvwFENCijNLI8OJyqYrGFPQMGieyXaSzgvpmkWQKN7--b7tTe8hHniGp4DH-dIAsXMhbfRHyI4xciw3FNP47tnM1sybGc0RhDAvEoejo3MfmOXbxO5sLyuTg3-B8ddGvLz9a1CxRHdrQaPYC45N=w16383',
  'https://sites.google.com/sitesv-images-rt/APXyLQc2LW407PGxRmlBOndZUv1agkYanZ8gngmWi6FutOSvSrwczGQBGGw2oOTz0-8uV-JxRuhuZHwO-QsUTHqyO5A0N1zokZZ1MjskWbyKRFS0_cczuR2zPKhLfz7pcOmwAnUzXVhYb7t2BjfdFYpDwIIcpooz-qUXwdpkIWDXdDsLinRR3R-d2uUF2w=w16383'
];

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
  document.getElementById('lightbox-caption').textContent = `${copy.title} · ${copy.source}`;
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
    const title = document.createElement('strong'); title.textContent = copy.title;
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
