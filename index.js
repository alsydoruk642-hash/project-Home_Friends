import{S as O,N as T,P as x,a as b}from"./assets/vendor-C-tS5SoV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function N(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const n=this.getAttribute("href"),i=document.querySelector(n);i&&i.scrollIntoView({behavior:"smooth",block:"start"})})})}function D(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((e,n)=>{setTimeout(()=>{e.classList.add("visible")},n*200)})})}const a=new O(".swiper",{modules:[T,x],navigation:{nextEl:".swiper-button-next.about-us-button-next",prevEl:".swiper-button-prev.about-us-button-prev"},pagination:{el:".about-us-swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth<768}}),L=window.matchMedia("(max-width: 767px)");function v(t){console.log("matches:",t.matches),a.params.pagination.dynamicBullets=t.matches,a.pagination.destroy(),a.pagination.init(),a.pagination.render(),a.pagination.update(),console.log(a.params.pagination.dynamicBullets)}v(L);L.addEventListener("change",v);const w="https://paw-hut.b.goit.study",j="/api/categories",H="/api/animals";async function R(){return(await b.get(w+j)).data}async function E(t,e,n){const i={page:e,limit:n};return t!=="all"&&(i.categoryId=String(t)),(await b.get(w+H,{params:i})).data}let l=1,S=1,c=8,g="all",y=0;const u=document.querySelector(".pet-list-categories"),d=document.querySelector(".pet-list-cards"),r=document.querySelector(".pet-list-more-btn"),p=document.querySelector(".loader");u.addEventListener("click",K);d.addEventListener("click",V);r.addEventListener("click",Q);function C(){return window.innerWidth<1366?8:9}function _(){r&&(r.classList.remove("hidden"),r.blur())}function M(){r&&r.classList.add("hidden")}function k(){p&&p.classList.remove("hidden")}function q(){p&&p.classList.add("hidden")}function B(){l<S?_():alert("В базі даних більше нема карток")}function U(t){window.scrollBy({top:y*t,behavior:"smooth"})}function W(){d&&(d.innerHTML="")}async function F(){if(u)try{const e=(await R()??[]).map(n=>`<button
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
            ${(n.categories??[]).map(i=>`<li class="pet-list-card-filter-item">${i.name}</li>`).join("")}
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
        </li>`).join("");d&&d.insertAdjacentHTML("beforeend",e)}async function A(t){g=t,l=1,c=C(),M(),k(),W();try{const e=await E(g,l,c);if(e.animals.length===0){alert("Більше нема даних");return}S=Math.ceil(e.totalItems/c),P(e.animals),B();const n=document.querySelector(".pet-list-card-item");n?y=n.getBoundingClientRect().height:y=0}catch{alert("Помилка завантаження карток тваринок")}finally{q()}}async function G(){l+=1,c=C(),M(),k();try{const t=await E(g,l,c);P(t.animals),U(1),B()}catch{alert("Помилка завантаження карток тваринок")}q()}function K(t){const e=t.target.closest(".pet-list-categories-btn");if(!e)return;const n=u.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active");const i=e.dataset.id;A(i)}function Q(){G()}function V(t){const e=t.target.closest(".pet-list-card-more-btn");e&&e.dataset.id}const z=document.querySelector("[data-modal-open]"),J=document.querySelector("[data-modal-close]"),m=document.querySelector(".backdrop"),$=document.querySelector(".mobile-menu"),I=document.body;function X(){m.classList.add("is-open"),I.classList.add("no-scroll"),$.classList.add("is-open")}function h(){m.classList.remove("is-open"),I.classList.remove("no-scroll"),$.classList.remove("is-open")}z.addEventListener("click",X);J.addEventListener("click",h);m.addEventListener("click",t=>{t.target===m&&h()});document.addEventListener("keydown",t=>{t.key==="Escape"&&h()});N();D();F();A("all");
//# sourceMappingURL=index.js.map
