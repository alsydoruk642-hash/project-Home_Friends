import{a as h,S as I,N as q,P as O}from"./assets/vendor-B7uYEzEb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const y="https://paw-hut.b.goit.study",x="/api/categories",A="/api/animals";async function N(){return(await h.get(y+x)).data}async function b(t,e,i){const s={page:e,limit:i};return t!=="all"&&(s.categoryId=String(t)),(await h.get(y+A,{params:s})).data}let c=1,L=1,r=8,f="all",m=0;const u=document.querySelector(".pet-list-categories"),l=document.querySelector(".pet-list-cards"),d=document.querySelector(".pet-list-more-btn"),p=document.querySelector(".pet-list-loader");u.addEventListener("click",R);l.addEventListener("click",U);d.addEventListener("click",_);function w(){return window.innerWidth<1366?8:9}function k(){d&&d.classList.remove("hidden")}function v(){d&&d.classList.add("hidden")}function C(){p&&p.classList.remove("hidden")}function S(){p&&p.classList.add("hidden")}function E(){c<L?k():alert("В базі даних більше нема карток")}function j(t){window.scrollBy({top:m*t,behavior:"smooth"})}function T(){l&&(l.innerHTML="")}async function D(){if(u)try{const e=(await N()??[]).map(i=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${i._id}"
            >
                ${i.name}
            </button>`).join("");u.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${e}`}catch{alert("Помилка завантаження категорій хвостиків")}}function P(t){const e=(t??[]).map(i=>`<li class="pet-list-card-item">
            <img class="pet-list-card-img" src="${i.image}" />
            <p class="pet-list-card-type">${i.species}</p>
            <p class="pet-list-card-name">${i.name}</p>
            <ul class="pet-list-card-filter">
            ${(i.categories??[]).map(s=>`<li class="pet-list-card-filter-item">${s.name}</li>`).join("")}
            </ul>
            <div class="pet-list-card-age-gender">
            <p class="pet-list-card-age">${i.age}</p>
            <p class="pet-list-card-gender">${i.gender}</p>
            </div>
            <p class="pet-list-card-about">${i.shortDescription}</p>
            <button type="button" class="pet-list-card-more-btn" 
            data-id="${i._id}">
            Дізнатись більше
            </button>
        </li>`).join("");l&&l.insertAdjacentHTML("beforeend",e)}async function M(t){f=t,c=1,r=w(),v(),C(),T();try{const e=await b(f,c,r);if(e.animals.length===0){alert("Більше нема даних");return}L=Math.ceil(e.totalItems/r),P(e.animals),E();const i=document.querySelector(".pet-list-card-item");i?m=i.getBoundingClientRect().height:m=0}catch{alert("Помилка завантаження карток тваринок")}finally{S()}}async function H(){c+=1,r=w(),v(),C();try{const t=await b(f,c,r);P(t.animals),j(1),E()}catch{alert("Помилка завантаження карток тваринок")}S()}function R(t){const e=t.target.closest(".pet-list-categories-btn");if(!e)return;const i=u.querySelector(".active");i&&i.classList.remove("active"),e.classList.add("active");const s=e.dataset.id;M(s)}function _(){H()}function U(t){const e=t.target.closest(".pet-list-card-more-btn");e&&e.dataset.id}const o=new I(".swiper",{modules:[q,O],navigation:{nextEl:".swiper-button-next.about-us-button-next",prevEl:".swiper-button-prev.about-us-button-prev"},pagination:{el:".about-us-swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth<768}}),$=window.matchMedia("(max-width: 767px)");function B(t){console.log("matches:",t.matches),o.params.pagination.dynamicBullets=t.matches,o.pagination.destroy(),o.pagination.init(),o.pagination.render(),o.pagination.update(),console.log(o.params.pagination.dynamicBullets)}B($);$.addEventListener("change",B);D();M("all");
//# sourceMappingURL=index.js.map
