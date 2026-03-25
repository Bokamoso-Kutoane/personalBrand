const galleryThumbs = document.querySelectorAll('.thumbs img');
const overlay = document.getElementById('overlay');
const overlayMain = document.getElementById('overlay-main');
const overlayTitle = document.getElementById('overlay-title');
const overlayDesc = document.getElementById('overlay-desc-text');
const overlayDownload = document.getElementById('overlay-download');
const closeBtn = document.querySelector('.overlay .close');

galleryThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const type = thumb.dataset.type; // pdf or image
    const title = thumb.dataset.title;
    const desc = thumb.dataset.desc;
    const file = thumb.dataset.file;

    // clear previous content
    overlayMain.innerHTML = '';

    if(type === 'pdf') {
      const iframe = document.createElement('iframe');
      iframe.src = file;
      iframe.style.width = '600px';
      iframe.style.height = '80vh';
      iframe.style.border = 'none';
      overlayMain.appendChild(iframe);

      overlayDownload.href = file;
      overlayDownload.style.display = 'inline-block';
    } else {
      const img = document.createElement('img');
      img.src = file;
      img.style.maxWidth = '600px';
      img.style.maxHeight = '80vh';
      overlayMain.appendChild(img);

      overlayDownload.style.display = 'none';
    }

    overlayTitle.textContent = title;
    overlayDesc.textContent = desc;

    overlay.style.display = 'flex';
  });
});

// close overlay
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayMain.innerHTML = '';
});

