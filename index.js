import{a as b,S as x,N as A,P as N}from"./assets/vendor-B7uYEzEb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const h="https://paw-hut.b.goit.study",j="/api/categories",T="/api/animals";async function D(){return(await b.get(h+j)).data}async function v(t,e,n){const o={page:e,limit:n};return t!=="all"&&(o.categoryId=String(t)),(await b.get(h+T,{params:o})).data}let c=1,w=1,r=8,g="all",y=0;const u=document.querySelector(".pet-list-categories"),l=document.querySelector(".pet-list-cards"),d=document.querySelector(".pet-list-more-btn"),p=document.querySelector(".pet-list-loader");u.addEventListener("click",F);l.addEventListener("click",K);d.addEventListener("click",G);function E(){return window.innerWidth<1366?8:9}function H(){d&&d.classList.remove("hidden")}function S(){d&&d.classList.add("hidden")}function C(){p&&p.classList.remove("hidden")}function M(){p&&p.classList.add("hidden")}function B(){c<w?H():alert("В базі даних більше нема карток")}function R(t){window.scrollBy({top:y*t,behavior:"smooth"})}function _(){l&&(l.innerHTML="")}async function U(){if(u)try{const e=(await D()??[]).map(n=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${n._id}"
            >
                ${n.name}
            </button>`).join("");u.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${e}`}catch{alert("Помилка завантаження категорій хвостиків")}}function P(t){const e=(t??[]).map(n=>`<li class="pet-list-card-item">
            <img class="pet-list-card-img" src="${n.image}" />
            <p class="pet-list-card-type">${n.species}</p>
            <p class="pet-list-card-name">${n.name}</p>
            <ul class="pet-list-card-filter">
            ${(n.categories??[]).map(o=>`<li class="pet-list-card-filter-item">${o.name}</li>`).join("")}
            </ul>
            <div class="pet-list-card-age-gender">
            <p class="pet-list-card-age">${n.age}</p>
            <p class="pet-list-card-gender">${n.gender}</p>
            </div>
            <p class="pet-list-card-about">${n.shortDescription}</p>
            <button type="button" class="pet-list-card-more-btn" 
            data-id="${n._id}">
            Дізнатись більше
            </button>
        </li>`).join("");l&&l.insertAdjacentHTML("beforeend",e)}async function k(t){g=t,c=1,r=E(),S(),C(),_();try{const e=await v(g,c,r);if(e.animals.length===0){alert("Більше нема даних");return}w=Math.ceil(e.totalItems/r),P(e.animals),B();const n=document.querySelector(".pet-list-card-item");n?y=n.getBoundingClientRect().height:y=0}catch{alert("Помилка завантаження карток тваринок")}finally{M()}}async function W(){c+=1,r=E(),S(),C();try{const t=await v(g,c,r);P(t.animals),R(1),B()}catch{alert("Помилка завантаження карток тваринок")}M()}function F(t){const e=t.target.closest(".pet-list-categories-btn");if(!e)return;const n=u.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active");const o=e.dataset.id;k(o)}function G(){W()}function K(t){const e=t.target.closest(".pet-list-card-more-btn");e&&e.dataset.id}const a=new x(".swiper",{modules:[A,N],navigation:{nextEl:".swiper-button-next.about-us-button-next",prevEl:".swiper-button-prev.about-us-button-prev"},pagination:{el:".about-us-swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth<768}}),$=window.matchMedia("(max-width: 767px)");function q(t){console.log("matches:",t.matches),a.params.pagination.dynamicBullets=t.matches,a.pagination.destroy(),a.pagination.init(),a.pagination.render(),a.pagination.update(),console.log(a.params.pagination.dynamicBullets)}q($);$.addEventListener("change",q);const Q=document.querySelector("[data-modal-open]"),z=document.querySelector("[data-modal-close]"),m=document.querySelector(".backdrop"),I=document.querySelector(".mobile-menu"),O=document.body;function J(){m.classList.add("is-open"),O.classList.add("no-scroll"),I.classList.add("is-open")}function L(){m.classList.remove("is-open"),O.classList.remove("no-scroll"),I.classList.remove("is-open")}Q.addEventListener("click",J);z.addEventListener("click",L);m.addEventListener("click",t=>{t.target===m&&L()});document.addEventListener("keydown",t=>{t.key==="Escape"&&L()});U();k("all");
//# sourceMappingURL=index.js.map
