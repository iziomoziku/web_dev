const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = "hidden-detail";
const TINY_EFFECT_CLASS = "is-tiny";
const ESC_KEY = "Escape";

function setDetails(imageUrl, titleText) {
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);
  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener("click", function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  let frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  document.body.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  let thumbnails = getThumbnailsArray();
  thumbnails.map((thumbnail) => {
    addThumbClickHandler(thumbnail);
  });
  addKeyPressHandler();
}
initializeEvents();
