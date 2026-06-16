import{S as N,N as W,P as $,A as ce,a as E,b as B,R as le}from"./assets/vendor-DgsDRJCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function de(){document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#"]');if(!t)return;e.preventDefault();const n=t.getAttribute("href"),o=document.querySelector(n);if(!o)return;const s=o.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:s,behavior:"smooth"})})}function ue(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((t,n)=>{setTimeout(()=>{t.classList.add("visible")},n*200)})})}const m=document.querySelector(".about-us"),r=new N(m.querySelector(".about-us-swiper"),{modules:[W,$],navigation:{nextEl:m.querySelector(".about-us-button-next"),prevEl:m.querySelector(".about-us-button-prev")},pagination:{el:m.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{r.update(),r.params.pagination.dynamicBullets=window.innerWidth<768,r.pagination.destroy(),r.pagination.init(),r.pagination.render(),r.pagination.update()});new ce(".accordion-container",{duration:300,showMultiple:!1});const me="https://paw-hut.b.goit.study/api";async function pe(e){const t=await fetch(`${me}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw new Error((n==null?void 0:n.message)||`HTTP error ${t.status}`);return n}const Ae=document.querySelector(".app-modal-close"),p=document.querySelector(".backdrop-order"),w=document.querySelector(".app-modal-form"),A=document.querySelector(".modal-button"),q=document.querySelector("#name"),g=document.querySelector("#phone"),ge=document.querySelector("#comment"),f=document.querySelectorAll(".modal-field");let J=null;function fe(e){J=e,w.reset(),A.disabled=!0,f.forEach(t=>t.classList.remove("error")),p.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function v(){p.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}Ae.addEventListener("click",v);p.addEventListener("click",e=>{e.target===p&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});function H(e,t){const n=t.value.trim()!=="";return e.classList.toggle("error",!n),n}function x(){const e=H(f[0],q),t=H(f[1],g);A.disabled=!(e&&t)}q.addEventListener("input",x);g.addEventListener("input",x);w.addEventListener("submit",async e=>{if(e.preventDefault(),x(),A.disabled)return;const t=g.value.trim();function n(s){return/^[0-9]{12}$/.test(s)}if(!n(t)){E.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const o={name:q.value.trim(),phone:g.value.trim(),comment:ge.value.trim(),animalId:J};try{const s=await pe(o);E.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${s.orderNum}`,confirmButtonText:"OK"}),w.reset(),A.disabled=!0,f.forEach(a=>a.classList.remove("error")),v()}catch{E.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const K="https://paw-hut.b.goit.study",ye="/api/categories",be="/api/animals";async function Le(){return(await B.get(K+ye)).data}async function X(e,t,n){const o={page:t,limit:n};return e!=="all"&&(o.categoryId=String(e)),(await B.get(K+be,{params:o})).data}console.log("pets-list.js loaded");let d=1,z=1,l=8,C="all",k=0;const y=document.querySelector(".pet-list-categories"),u=document.querySelector(".pet-list-cards"),c=document.querySelector(".pet-list-more-btn"),b=document.querySelector(".loader");y.addEventListener("click",Ce);u.addEventListener("click",Be);c.addEventListener("click",ke);function Z(){return window.innerWidth<1366?8:9}function he(){c&&(c.classList.remove("hidden"),c.blur())}function _(){c&&c.classList.add("hidden")}function ee(){b&&b.classList.remove("hidden")}function te(){b&&b.classList.add("hidden")}function ne(){d<z?he():alert("В базі даних більше нема карток")}function ve(e){window.scrollBy({top:k*e,behavior:"smooth"})}function Se(){u&&(u.innerHTML="")}async function Ee(){if(y)try{const t=(await Le()??[]).map(n=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${n._id}"
            >
                ${n.name}
            </button>`).join("");y.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${t}`}catch{alert("Помилка завантаження категорій хвостиків")}}function oe(e){const t=(e??[]).map(n=>`
      <li class="pet-list-card-item" data-id="${n._id}">
        <img class="pet-list-card-img" src="${n.image}" alt="${n.name}" />

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

        <button type="button" class="pet-list-card-more-btn">
          Дізнатись більше
        </button>
      </li>
    `).join("");u&&u.insertAdjacentHTML("beforeend",t)}async function se(e){console.log("startPetList",e),C=e,d=1,l=Z(),_(),ee(),Se();try{const t=await X(C,d,l);if(t.animals.length===0){alert("Більше нема даних");return}z=Math.ceil(t.totalItems/l),oe(t.animals),ne();const n=document.querySelector(".pet-list-card-item");n?k=n.getBoundingClientRect().height:k=0}catch{alert("Помилка завантаження карток тваринок")}finally{te()}}async function we(){console.log("continuePetList"),d+=1,l=Z(),_(),ee();try{const e=await X(C,d,l);oe(e.animals),ve(1),ne()}catch{alert("Помилка завантаження карток тваринок")}te()}function Ce(e){const t=e.target.closest(".pet-list-categories-btn");if(!t)return;const n=y.querySelector(".active");n&&n.classList.remove("active"),t.classList.add("active");const o=t.dataset.id;se(o)}function ke(){we()}function Be(e){const t=e.target.closest(".pet-list-card-more-btn");t&&t.dataset.id}const qe="https://paw-hut.b.goit.study";async function xe(e=1,t=6){return(await B.get(`${qe}/api/feedbacks?limit=${t}&page=${e}`)).data.feedbacks}const Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",Ue=document.querySelector(".success-stories-list");function Pe(e){const t=e.map(o=>`
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
      `).join("");console.log(e),Ue.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".success-stories-rate").forEach(o=>{new le(o,{score:Number(o.dataset.rate),readOnly:!0,starOn:Me,starOff:Oe,starHalf:Ie}).init()});const n=new N(".mySwiper",{modules:[W,$],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{n.update(),n.params.pagination.dynamicBullets=window.innerWidth>768,n.pagination.destroy(),n.pagination.init(),n.pagination.render(),n.pagination.update()})}async function Qe(){try{const e=await xe();Pe(e)}catch(e){console.log(e)}}function Te(e){const t=document.querySelector(".animal-backdrop");if(!t)return;t.innerHTML=`
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
  `,t.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),t.querySelector(".animal-modal-close").addEventListener("click",L),t.addEventListener("click",Ye),window.addEventListener("keydown",ae);const n=t.querySelector(".animal-modal-btn");n&&n.addEventListener("click",()=>{L();const o=document.querySelector(".backdrop-order");o?(o.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),fe(e._id)):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function L(){const e=document.querySelector(".animal-backdrop");e&&(e.classList.add("is-hidden"),e.innerHTML=""),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",ae)}function Ye(e){e.target===e.currentTarget&&L()}function ae(e){e.code==="Escape"&&L()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".pet-list-cards");e&&e.addEventListener("click",t=>{var a,i,M,O,I,U,P,Q,T,Y,V,j,R,F,G,D;const n=t.target.closest(".pet-list-card-more-btn");if(!n)return;const o=n.closest(".pet-list-card")||n.closest("li");if(!o)return;const s={_id:o.dataset.id,img:((a=o.querySelector(".pet-list-card-img"))==null?void 0:a.src)||((i=o.querySelector("img"))==null?void 0:i.src)||"",name:((O=(M=o.querySelector(".pet-list-card-title"))==null?void 0:M.textContent)==null?void 0:O.trim())||"Тваринка",type:((U=(I=o.querySelector(".pet-list-card-type"))==null?void 0:I.textContent)==null?void 0:U.trim())||"Вид",meta:((Q=(P=o.querySelector(".pet-list-card-meta"))==null?void 0:P.textContent)==null?void 0:Q.trim())||((Y=(T=o.querySelector(".animal-modal-meta"))==null?void 0:T.textContent)==null?void 0:Y.trim())||"Вік і стать",description:((j=(V=o.querySelector(".pet-list-card-desc"))==null?void 0:V.textContent)==null?void 0:j.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:((F=(R=o.querySelector(".pet-list-card-health"))==null?void 0:R.textContent)==null?void 0:F.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((D=(G=o.querySelector(".pet-list-card-behavior"))==null?void 0:G.textContent)==null?void 0:D.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Te(s)})});const Ve=document.querySelector("[data-modal-open]"),je=document.querySelector("[data-modal-close]"),h=document.querySelector(".backdrop"),ie=document.querySelector(".mobile-menu"),re=document.body;function Re(){h.classList.add("is-open"),re.classList.add("no-scroll"),ie.classList.add("is-open")}function S(){h.classList.remove("is-open"),re.classList.remove("no-scroll"),ie.classList.remove("is-open")}Ve.addEventListener("click",Re);je.addEventListener("click",S);h.addEventListener("click",e=>{e.target===h&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&S()});const Fe=document.querySelectorAll(".mobile-menu a");Fe.forEach(e=>{e.addEventListener("click",()=>{S()})});de();ue();Ee();se("all");Qe();
//# sourceMappingURL=index.js.map
