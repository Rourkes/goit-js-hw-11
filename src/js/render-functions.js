function showImgResult(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-list">
          <a class="gallery-large" href="${largeImageURL}">
            <img class="gallery-web" src="${webformatURL}" alt="${tags}" height="152" width="360"/>
            <ul class="comments-strage">
              <li class="comments-strage-list">
                <span class="windows">Likes </span>${likes}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Views </span>${views}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Comments </span>${comments}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Downloads </span>${downloads}
              </li>
            </ul>
          </a>
        </li>
      `
    )
    .join('');
}

export { showImgResult };
