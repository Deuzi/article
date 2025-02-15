const shareSection = document.querySelector('.share');
const shareButton = document.querySelector('.share-svg');
const shareOnDesktop = document.querySelector('.share-svg-2');
const creatorsProfile = document.getElementById('creators-pfp');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function checkMediaQuery() {
  if (mediaQuery.matches) {
    creatorsProfile.style.display = 'flex';
    shareButton.onclick = () => {
      shareSection.classList.toggle('removeHidden');
      // console.log(shareSection);
    };
  } else {
    shareButton.onclick = () => {
      shareSection.style.display = 'flex';
      creatorsProfile.style.display = 'none';
    };

    shareOnDesktop.onclick = () => {
      if (shareSection.style.display === 'flex') {
        creatorsProfile.style.display = 'flex';
        shareSection.style.display = 'none';
      }
    };
  }
}

checkMediaQuery();

mediaQuery.addEventListener('change', checkMediaQuery);
