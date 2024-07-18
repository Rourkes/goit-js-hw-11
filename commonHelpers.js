import{s as p,i as u}from"./assets/vendor-5c957d73.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const d="44984480-6400f6ac5e39d78263c6545e0",f="https://pixabay.com/api/";function h(t){const r=encodeURIComponent(t),o=`${f}?key=${d}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function y(t){return t.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:s,comments:l,downloads:m})=>`
        <li class="gallery-list">
          <a class="gallery-large" href="${o}">
            <img class="gallery-web" src="${r}" alt="${n}" height="152" width="360"/>
            <ul class="comments-strage">
              <li class="comments-strage-list">
                <span class="windows">Likes </span>${e}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Views </span>${s}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Comments </span>${l}
              </li>
              <li class="comments-strage-list">
                <span class="windows">Downloads </span>${m}
              </li>
            </ul>
          </a>
        </li>
      `).join("")}const g=document.querySelector(".search-form");document.querySelector(".search-input");const i=document.querySelector(".gallery"),a=document.querySelector(".loader"),w=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=t=>{t.target.elements.search.value=""};g.addEventListener("submit",t=>{t.preventDefault(),a.style.display="block";const r=t.target.elements.search.value.trim();if(r.length<=0)return a.style.display="none",i.innerHTML="",c(t),u.error({title:"Error",message:"Search value is empty",position:"topRight"});h(r).then(o=>{if(a.style.display="none",o.hits.length===0)throw t.target.elements.search.value="",new Error("No images found");const n=y(o.hits);i.innerHTML=n,c(t),w.refresh()}).catch(o=>{a.style.display="none",console.error(o),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c(t),i.innerHTML=""})});
//# sourceMappingURL=commonHelpers.js.map
