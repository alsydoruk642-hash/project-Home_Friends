import{a as m}from"./assets/vendor-CC12I-6Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const y="https://paw-hut.b.goit.study",E="/api/categories",P="/api/animals";async function B(){return(await m.get(y+E)).data}async function h(s,t,e){const n={page:t,limit:e};return s!=="all"&&(n.categoryId=String(s)),(await m.get(y+P,{params:n})).data}let o=1,L=1,a=8,f="all",g=0;const d=document.querySelector(".pet-list-categories"),c=document.querySelector(".pet-list-cards"),l=document.querySelector(".pet-list-more-btn"),u=document.querySelector(".pet-list-loader");d.addEventListener("click",k);c.addEventListener("click",T);l.addEventListener("click",N);function b(){return window.innerWidth<1366?8:9}function I(){l&&l.classList.remove("hidden")}function v(){l&&l.classList.add("hidden")}function C(){u&&u.classList.remove("hidden")}function w(){u&&u.classList.add("hidden")}function $(){o<L?I():alert("В базі даних більше нема карток")}function q(s){window.scrollBy({top:g*s,behavior:"smooth"})}function O(){c&&(c.innerHTML="")}async function A(){if(d)try{const t=(await B()??[]).map(e=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${e._id}"
            >
                ${e.name}
            </button>`).join("");d.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${t}`}catch{alert("Помилка завантаження категорій хвостиків")}}function M(s){const t=(s??[]).map(e=>`<li class="pet-list-card-item">
            <img class="pet-list-card-img" src="${e.image}" />
            <p class="pet-list-card-type">${e.species}</p>
            <p class="pet-list-card-name">${e.name}</p>
            <ul class="pet-list-card-filter">
            ${(e.categories??[]).map(n=>`<li class="pet-list-card-filter-item">${n.name}</li>`).join("")}
            </ul>
            <div class="pet-list-card-age-gender">
            <p class="pet-list-card-age">${e.age}</p>
            <p class="pet-list-card-gender">${e.gender}</p>
            </div>
            <p class="pet-list-card-about">${e.shortDescription}</p>
            <button type="button" class="pet-list-card-more-btn" 
            data-id="${e._id}">
            Дізнатись більше
            </button>
        </li>`).join("");c&&c.insertAdjacentHTML("beforeend",t)}async function S(s){f=s,o=1,a=b(),v(),C(),O();try{const t=await h(f,o,a);if(t.animals.length===0){alert("Більше нема даних");return}L=Math.ceil(t.totalItems/a),M(t.animals),$();const e=document.querySelector(".pet-list-card-item");e?g=e.getBoundingClientRect().height:g=0}catch{alert("Помилка завантаження карток тваринок")}finally{w()}}async function j(){o+=1,a=b(),v(),C();try{const s=await h(f,o,a);M(s.animals),q(1),$()}catch{alert("Помилка завантаження карток тваринок")}w()}function k(s){const t=s.target.closest(".pet-list-categories-btn");if(!t)return;const e=d.querySelector(".active");e&&e.classList.remove("active"),t.classList.add("active");const n=t.dataset.id;S(n)}function N(){j()}function T(s){const t=s.target.closest(".pet-list-card-more-btn");t&&t.dataset.id}A();S("all");
//# sourceMappingURL=index.js.map
