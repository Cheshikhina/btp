import common from './common';

const card = (selectorCard, activeCardIndex = 0) => {
  const cards = document.querySelectorAll(selectorCard);

  function parseImgURL(path) {
    const regexp = /img\/([a-zA-Z0-9]+)@1x\.jpg/i;
    const match = path.match(regexp);

    let result = match[1];

    if (result.substr(-1) === 's') {
      result = match[1].slice(0, -1);
    }
    return result;
  }

  function getDataPicture(name, isSmall) {
    const data = {};
    data.source = {
      type: 'image/webp',
      srcset: `./img/${name}@1x.webp 1x, ./img/${name}@2x.webp 2x`,
    };
    data.img = {
      src: `./img/${name}@1x.jpg`,
      srcset: `./img/${name}@2x.jpg 2x`,
      height: '500',
      width: '366'
    };

    if (isSmall) {
      data.source.srcset = `./img/${name}s@1x.webp 1x, ./img/${name}s@2x.webp 2x`;
      data.img.src = `./img/${name}s@1x.jpg`;
      data.img.srcset = `./img/${name}s@2x.jpg 2x`;
      data.img.height = '250';
      data.img.width = '350';
    }

    return data;
  }

  function createPicture(item, isSmall = false) {
    const img = {};
    img.node = item.querySelector('img').cloneNode(true);
    img.padentNode = item.querySelector('picture');
    img.name = parseImgURL(img.node.getAttribute('src').substr(2));
    const data = getDataPicture(img.name, isSmall);

    while (img.padentNode.firstChild) {
      img.padentNode.removeChild(img.padentNode.firstChild);
    }

    let source = document.createElement('source');

    source.setAttribute('type', data.source.type);
    source.setAttribute('srcset', data.source.srcset);

    img.node.setAttribute('src', data.img.src);
    img.node.setAttribute('srcset', data.img.srcset);
    img.node.setAttribute('height', data.img.height);
    img.node.setAttribute('width', data.img.width);

    img.padentNode.appendChild(source);
    img.padentNode.appendChild(img.node);
  }

  function putInOrder(isCreateBig = false) {
    for (let i = 0, j = 1; i < cards.length; i++, j++) {
      cards[i].style.order = j;
      if (cards[i].classList.contains(selectorCard.substr(1) + '--big')) {
        cards[i].classList.remove(selectorCard.substr(1) + '--big');
        createPicture(cards[i], true);
      }
    }
    if (isCreateBig) {
      cards[activeCardIndex].classList.add(selectorCard.substr(1) + '--big');
      createPicture(cards[activeCardIndex]);
    }
  }

  function clickHandlerCards(evt) {
    if (evt.currentTarget.classList.contains(selectorCard.substr(1) + '--big') || evt.target.hasAttribute('data-modal')) {
      return;
    }

    putInOrder();
    if (evt.target) {
      let index = evt.target.style.order;
      evt.target.classList.add(selectorCard.substr(1) + '--big');
      createPicture(evt.target);
      if (!window.matchMedia(common.MOBILE_MEDIA).matches && window.matchMedia(common.TABLET_MEDIA).matches && (index % 2 === 0)) {
        cards[index - 1].style.order = +index + 1;
        cards[index].style.order = index - 1;
      } else if (window.matchMedia(common.DESKTOP_MEDIA).matches && (index % 3 === 0)) {
        cards[index - 1].style.order = +index + 1;
        cards[index].style.order = index - 1;
      }
      evt.target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  putInOrder(true);

  cards.forEach(item => {
    item.addEventListener('mousedown', clickHandlerCards);
  });

  window.addEventListener('resize', function () {
    if (!window.matchMedia(common.MOBILE_MEDIA).matches) {
      putInOrder(true);
    }
  });
};

export default card;
