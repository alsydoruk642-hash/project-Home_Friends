import{S as N,N as W,P as J,A as ce,a as L,b as k,R as le}from"./assets/vendor-DgsDRJCq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();function de(){document.addEventListener("click",e=>{const n=e.target.closest('a[href^="#"]');if(!n)return;e.preventDefault();const t=n.getAttribute("href"),o=document.querySelector(t);if(!o)return;const a=o.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:a,behavior:"smooth"})})}function ue(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((n,t)=>{setTimeout(()=>{n.classList.add("visible")},t*200)})})}const m=document.querySelector(".about-us"),r=new N(m.querySelector(".about-us-swiper"),{modules:[W,J],navigation:{nextEl:m.querySelector(".about-us-button-next"),prevEl:m.querySelector(".about-us-button-prev")},pagination:{el:m.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{r.update(),r.params.pagination.dynamicBullets=window.innerWidth<768,r.pagination.destroy(),r.pagination.init(),r.pagination.render(),r.pagination.update()});new ce(".accordion-container",{duration:300,showMultiple:!1});const me="https://paw-hut.b.goit.study/api";async function pe(e){const n=await fetch(`${me}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await n.json();if(!n.ok)throw new Error((t==null?void 0:t.message)||`HTTP error ${n.status}`);return t}const Ae=document.querySelector(".app-modal-close"),$=document.querySelector(".backdrop"),H=document.querySelector(".app-modal-form"),w=document.querySelector(".modal-button"),B=document.querySelector("#name"),A=document.querySelector("#phone"),q=document.querySelector("#comment"),p=document.querySelectorAll(".modal-field");let ge=null;function x(){$.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}Ae.addEventListener("click",x);$.addEventListener("click",e=>{});document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});function S(e,n){const t=n.value.trim()!=="";return e.classList.toggle("error",!t),t}function h(){const e=S(p[0],B),n=S(p[1],A),t=S(p[2],q);w.disabled=!(e&&n&&t)}B.addEventListener("input",h);A.addEventListener("input",h);q.addEventListener("input",h);H.addEventListener("submit",async e=>{if(e.preventDefault(),h(),w.disabled)return;const n=A.value.trim();function t(a){return/^[0-9]{12}$/.test(a)}if(!t(n)){L.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const o={name:B.value.trim(),phone:A.value.trim(),comment:q.value.trim(),animalId:ge};try{const a=await pe(o);L.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${a.orderNum}`,confirmButtonText:"OK"}),H.reset(),w.disabled=!0,p.forEach(s=>s.classList.remove("error")),x()}catch{L.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const K="https://paw-hut.b.goit.study",fe="/api/categories",ye="/api/animals";async function be(){return(await k.get(K+fe)).data}async function X(e,n,t){const o={page:n,limit:t};return e!=="all"&&(o.categoryId=String(e)),(await k.get(K+ye,{params:o})).data}console.log("pets-list.js loaded");let d=1,z=1,l=8,E="all",C=0;const g=document.querySelector(".pet-list-categories"),u=document.querySelector(".pet-list-cards"),c=document.querySelector(".pet-list-more-btn"),f=document.querySelector(".loader");g.addEventListener("click",Ee);u.addEventListener("click",ke);c.addEventListener("click",Ce);function Z(){return window.innerWidth<1366?8:9}function he(){c&&(c.classList.remove("hidden"),c.blur())}function _(){c&&c.classList.add("hidden")}function ee(){f&&f.classList.remove("hidden")}function te(){f&&f.classList.add("hidden")}function ne(){d<z?he():alert("В базі даних більше нема карток")}function ve(e){window.scrollBy({top:C*e,behavior:"smooth"})}function Le(){u&&(u.innerHTML="")}async function Se(){if(g)try{const n=(await be()??[]).map(t=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${t._id}"
            >
                ${t.name}
            </button>`).join("");g.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${n}`}catch{alert("Помилка завантаження категорій хвостиків")}}function oe(e){console.log("renderPetList",e.length);const n=(e??[]).map(t=>`<li class="pet-list-card-item">
            <img class="pet-list-card-img" src="${t.image}" />
            <p class="pet-list-card-type">${t.species}</p>
            <p class="pet-list-card-name">${t.name}</p>
            <ul class="pet-list-card-filter">
            ${(t.categories??[]).map(o=>`<li class="pet-list-card-filter-item">${o.name}</li>`).join("")}
            </ul>
            <div class="pet-list-card-age-gender">
            <p class="pet-list-card-age">${t.age}</p>
            <p class="pet-list-card-gender">${t.gender}</p>
            </div>
            <p class="pet-list-card-about">${t.shortDescription}</p>
            <button type="button" class="pet-list-card-more-btn" 
            data-id="${t._id}">
            Дізнатись більше
            </button>
        </li>`).join("");u&&u.insertAdjacentHTML("beforeend",n)}async function ae(e){console.log("startPetList",e),E=e,d=1,l=Z(),_(),ee(),Le();try{const n=await X(E,d,l);if(n.animals.length===0){alert("Більше нема даних");return}z=Math.ceil(n.totalItems/l),oe(n.animals),ne();const t=document.querySelector(".pet-list-card-item");t?C=t.getBoundingClientRect().height:C=0}catch{alert("Помилка завантаження карток тваринок")}finally{te()}}async function we(){console.log("continuePetList"),d+=1,l=Z(),_(),ee();try{const e=await X(E,d,l);oe(e.animals),ve(1),ne()}catch{alert("Помилка завантаження карток тваринок")}te()}function Ee(e){const n=e.target.closest(".pet-list-categories-btn");if(!n)return;const t=g.querySelector(".active");t&&t.classList.remove("active"),n.classList.add("active");const o=n.dataset.id;ae(o)}function Ce(){we()}function ke(e){const n=e.target.closest(".pet-list-card-more-btn");n&&n.dataset.id}const Be="https://paw-hut.b.goit.study";async function qe(e=1,n=6){return(await k.get(`${Be}/api/feedbacks?limit=${n}&page=${e}`)).data.feedbacks}const xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",Me=document.querySelector(".success-stories-list");function Pe(e){const n=e.map(o=>`
        <li class="swiper-slide success-stories-list-item">
          <div class="success-stories-rate"
           data-rate="${o.rate}">
          </div>

          <p class="success-stories-text">
            ${o.description}
          </p>

          <h3 class="success-stories-author">
            ${o.author}
          </h3>
        </li>
      `).join("");console.log(e),Me.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".success-stories-rate").forEach(o=>{new le(o,{score:Number(o.dataset.rate),readOnly:!0,starOn:xe,starOff:Oe,starHalf:Ie}).init()});const t=new N(".mySwiper",{modules:[W,J],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{t.update(),t.params.pagination.dynamicBullets=window.innerWidth>768,t.pagination.destroy(),t.pagination.init(),t.pagination.render(),t.pagination.update()})}async function Ue(){try{const e=await qe();Pe(e)}catch(e){console.log(e)}}function Qe(e){const n=document.querySelector(".animal-backdrop");if(!n)return;n.innerHTML=`
    <div class="animal-modal">
      <button type="button" class="animal-modal-close" aria-label="Close modal">
        &times;
      </button>

      <div class="animal-modal-thumb">
        <img src="${e.img}" alt="${e.name}" class="animal-modal-img" />
      </div>

      <div class="animal-modal-info">
        <p class="animal-modal-type">${e.type}</p>
        <h2 class="animal-modal-title">${e.name}</h2>
        <p class="animal-modal-meta">${e.meta}</p>

        <div class="animal-modal-scroll-container">
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Опис:</p>
            <p class="animal-detail-text">${e.description}</p>
          </div>
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Здоров'я:</p>
            <p class="animal-detail-text">${e.health}</p>
          </div>

          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Поведінка:</p>
            <p class="animal-detail-text">${e.behavior}</p>
          </div>
          
        </div>
        
        <button type="button" class="animal-modal-btn">Взяти додому</button>
      </div>
    </div>
  `,n.classList.remove("is-hidden"),document.body.style.overflow="hidden",n.querySelector(".animal-modal-close").addEventListener("click",y),n.addEventListener("click",Te),window.addEventListener("keydown",se);const t=n.querySelector(".animal-modal-btn");t&&t.addEventListener("click",()=>{y();const o=document.querySelector(".backdrop-order");o?(o.classList.remove("is-hidden"),document.body.style.overflow="hidden"):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function y(){const e=document.querySelector(".animal-backdrop");e&&(e.classList.add("is-hidden"),e.innerHTML=""),document.body.style.overflow="",window.removeEventListener("keydown",se)}function Te(e){e.target===e.currentTarget&&y()}function se(e){e.code==="Escape"&&y()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".pet-list-cards");e&&e.addEventListener("click",n=>{var s,i,O,I,M,P,U,Q,T,Y,V,j,R,F,G,D;const t=n.target.closest(".pet-list-card-more-btn");if(!t)return;const o=t.closest(".pet-list-card")||t.closest("li");if(!o)return;const a={img:((s=o.querySelector(".pet-list-card-img"))==null?void 0:s.src)||((i=o.querySelector("img"))==null?void 0:i.src)||"",name:((I=(O=o.querySelector(".pet-list-card-title"))==null?void 0:O.textContent)==null?void 0:I.trim())||"Тваринка",type:((P=(M=o.querySelector(".pet-list-card-type"))==null?void 0:M.textContent)==null?void 0:P.trim())||"Вид",meta:((Q=(U=o.querySelector(".pet-list-card-meta"))==null?void 0:U.textContent)==null?void 0:Q.trim())||((Y=(T=o.querySelector(".animal-modal-meta"))==null?void 0:T.textContent)==null?void 0:Y.trim())||"Вік і стать",description:((j=(V=o.querySelector(".pet-list-card-desc"))==null?void 0:V.textContent)==null?void 0:j.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:((F=(R=o.querySelector(".pet-list-card-health"))==null?void 0:R.textContent)==null?void 0:F.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((D=(G=o.querySelector(".pet-list-card-behavior"))==null?void 0:G.textContent)==null?void 0:D.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Qe(a)})});const Ye=document.querySelector("[data-modal-open]"),Ve=document.querySelector("[data-modal-close]"),b=document.querySelector(".backdrop"),ie=document.querySelector(".mobile-menu"),re=document.body;function je(){b.classList.add("is-open"),re.classList.add("no-scroll"),ie.classList.add("is-open")}function v(){b.classList.remove("is-open"),re.classList.remove("no-scroll"),ie.classList.remove("is-open")}Ye.addEventListener("click",je);Ve.addEventListener("click",v);b.addEventListener("click",e=>{e.target===b&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});const Re=document.querySelectorAll(".mobile-menu a");Re.forEach(e=>{e.addEventListener("click",()=>{v()})});de();ue();Se();ae("all");Ue();
//# sourceMappingURL=index.js.map
