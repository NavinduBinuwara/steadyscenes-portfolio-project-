//Hero sextion Top To bottom section arrow Function//
        document.addEventListener("DOMContentLoaded", function() {
            const arrow = document.querySelector(".scroll-arrows-type");
            const arrowtext = document.querySelector(".scroll-text");
            arrow.addEventListener("click", function() {
                const sec2 = document.querySelector(".cards-icon-wrapper");
                sec2.scrollIntoView({ behavior: "smooth" });
            });
            arrowtext.addEventListener("click" , function(){
                const sec2 = document.querySelector(".cards-icon-wrapper");
                sec2.scrollIntoView({ behavior: "smooth" });
            }) 
        });
  
        //popup script goes here 
        // Add this JavaScript code to your existing script file or a new one

// Your existing JavaScript code

document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopupBtn");
    const popupWrapper = document.querySelector(".popup-wrapper");
    const closeIcon = document.querySelector(".popup-close-icon");
  
    // Hide the popup initially
    popupWrapper.style.display = "none";
  
    openPopupBtn.addEventListener("click", function () {
      popupWrapper.style.display = "block";
    });
  
    closeIcon.addEventListener("click", function () {
      popupWrapper.style.display = "none";
    });
  
    // Close the popup if the user clicks outside the popup
    window.addEventListener("click", function (event) {
      if (event.target === popupWrapper) {
        popupWrapper.style.display = "none";
      }
    });
  });

  //hero section popup button open//
  
  document.addEventListener("DOMContentLoaded", function () {
    const heroPopupBtn = document.getElementById("heroPopupBtn");
    const popupWrapper = document.querySelector(".popup-wrapper");
    const closeIcon = document.querySelector(".popup-close-icon");
  
    // Hide the popup initially
    popupWrapper.style.display = "none";
  
    heroPopupBtn.addEventListener("click", function () {
      popupWrapper.style.display = "block";
    });
  
    closeIcon.addEventListener("click", function () {
      popupWrapper.style.display = "none";
    });
  
    // Close the popup if the user clicks outside the popup
    window.addEventListener("click", function (event) {
      if (event.target === popupWrapper) {
        popupWrapper.style.display = "none";
      }
    });
  });

// on hover state image should change to the a nother image in card section//
  function changeImage(cardImage, isHover) {
    var image = document.getElementById("cardImage");
    if (isHover) {
        image.src = "./images/c1hover.png";
    } else {
        image.src = "./images/c1.png";
    }
}

function changeImage2(cardImage2, isHover) {
  var image = document.getElementById("cardImage2");
  if (isHover) {
      image.src = "./images/c2hover.png";
  } else {
      image.src = "./images/c2.png";
  }
}
function changeImage3(cardImage3, isHover) {
  var image = document.getElementById("cardImage3");
  if (isHover) {
      image.src = "./images/c3hover.png";
  } else {
      image.src = "./images/c3.png";
  }
}
function changeImage4(cardImage4, isHover) {
  var image = document.getElementById("cardImage4");
  if (isHover) {
      image.src = "./images/c4hover.png";
  } else {
      image.src = "./images/c4.png";
  }
}
// on hover state image should change to the a nother image in card section//
function changeImage(newSrc) {
  document.getElementById('youtube-img1').src = newSrc;
}
function changeImagey2(newSrc) {
  document.getElementById('youtube-img2').src = newSrc;
}
function changeImagey3(newSrc) {
  document.getElementById('youtube-img3').src = newSrc;
}
function changeImagey4(newSrc) {
  document.getElementById('youtube-img4').src = newSrc;
}
function changeImagey5(newSrc) {
  document.getElementById('youtube-img5').src = newSrc;
}
function changeImagey6(newSrc) {
  document.getElementById('youtube-img6').src = newSrc;
}
function changeImagey7(newSrc) {
  document.getElementById('youtube-img7').src = newSrc;
}
function changeImagey8(newSrc) {
  document.getElementById('youtube-img8').src = newSrc;
}
function changeImagey9(newSrc) {
  document.getElementById('youtube-img9').src = newSrc;
}
function changeImagey10(newSrc) {
  document.getElementById('youtube-img10').src = newSrc;
}
function changeImagey11(newSrc) {
  document.getElementById('youtube-img11').src = newSrc;
}
function changeImagey12(newSrc) {
  document.getElementById('youtube-img12').src = newSrc;
}



  

//const videos = {
  //cat_id: {name: "Category Name", [linl, link, link]},
  //cat_id: {name: "Category Name", [linl, link, link]},
  //cat_id: {name: "Category Name", [linl, link, link]}
//}

// video gallery js part // 
function filterVideos(category) {
  // Hide all videos
  document.querySelectorAll('.video-container').forEach(video => {
      video.style.display = 'none';
  });

  // Show videos of the selected category
  document.querySelectorAll(`.${category}`).forEach(video => {
      video.style.display = 'block';
  });

  if (!isActive) {
      document.querySelectorAll('.category').forEach(item => {
          item.classList.remove('active');
      });
      document.querySelector(`.${category}`).classList.add('active');
  }
}

function showPopup(videoId) {
  const popup = document.getElementById('video-popup');
  const popupVideo = document.getElementById('popup-video');
  popupVideo.src = `https://www.youtube.com/embed/${videoId}`;
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('video-popup');
  const popupVideo = document.getElementById('popup-video');
  popupVideo.src = '';
  popup.style.display = 'none';
}