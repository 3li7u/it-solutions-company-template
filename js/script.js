// Navigation Toggle Handler
const
  navToggle = document.getElementById('nav-toggle'),
  navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open')
});


// Countdown Handler
const
  numbers = document.querySelectorAll('.stat .number'),
  statSec = document.getElementById('statistics');

window.onscroll = () => {
  if (window.scrollY >= statSec.offsetTop - 150 && window.scrollY <= statSec.offsetTop - 130) {
    numbers.forEach(number => counting(number, 0, number.dataset.num, 2000));
  }
};

// Countdown function
function counting(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};


// Testimonials Carousel Handler
const
  carouselItems = document.querySelectorAll('.carousel-container .carousel-item'),
  prevBtn = document.querySelector('.carousel-control .carousel-btn.prev'),
  nextBtn = document.querySelector('.carousel-control .carousel-btn.next');

let currentItemIndex = 0;
changeItems(currentItemIndex);

// Preveios Item Function
prevBtn.addEventListener('click', () => {
  changeItems(--currentItemIndex);
});

// Next Item Function
nextBtn.addEventListener('click', () => {
  changeItems(++currentItemIndex);
});

// Change Items Handler
function changeItems(index) {
  if (currentItemIndex === 0) {
    prevBtn.classList.add('disabled');
    prevBtn.setAttribute('disabled', 'true');
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.removeAttribute('disabled');
  }
  if (currentItemIndex === carouselItems.length - 1) {
    nextBtn.classList.add('disabled');
    nextBtn.setAttribute('disabled', 'true');
  } else {
    nextBtn.classList.remove('disabled');
    nextBtn.removeAttribute('disabled');
  }
  setCurrentItems(index);
};

// Set Current Items
function setCurrentItems(index) {
  setInitPos(carouselItems);
  carouselItems[index].classList.remove('inactive-left');
  carouselItems[index].classList.remove('inactive-rihgt');
  carouselItems[index].classList.add('active');
};

// initial item postion 
function setInitPos(items) {
  items.forEach((item, index) => {
    item.classList.remove('active');
    item.classList.remove('inactive-left');
    item.classList.remove('inactive-right');
    if (index === currentItemIndex) {
      return 0;
    }
    else if (index < currentItemIndex) {
      item.classList.add('inactive-left');
    } else {
      item.classList.add('inactive-right');
    }
  });
}



// Gallery Light Box Handler
const
  images = document.querySelectorAll('.gallery .image'),
  lightBox = document.querySelector('.light-box'),
  lightBoxImg = document.querySelector('.light-box img'),
  overlay = document.querySelector('.light-box .overlay');

images.forEach((img) => {
  img.addEventListener('click', () => {
    console.log('clicked')
    document.body.classList.add('no-scroll');
    lightBox.classList.add('open');
    lightBoxImg.src = img.children[0].src;
  });
});

// close handler
overlay.addEventListener('click', () => {
  lightBox.classList.remove('open');
  document.body.classList.remove('no-scroll');
  lightBoxImg.classList.remove('zoom-in');
})

// Zoom Handler
lightBoxImg.addEventListener('click', () => {
  lightBoxImg.classList.toggle('zoom-in');
})