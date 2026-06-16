import{S as W,N as $,P as J,A as le,a as E,b as B,R as de}from"./assets/vendor-DgsDRJCq.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function ue(){document.addEventListener("click",e=>{const n=e.target.closest('a[href^="#"]');if(!n)return;e.preventDefault();const t=n.getAttribute("href"),o=document.querySelector(t);if(!o)return;const s=o.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:s,behavior:"smooth"})})}function me(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((n,t)=>{setTimeout(()=>{n.classList.add("visible")},t*200)})})}const p=document.querySelector(".about-us"),r=new W(p.querySelector(".about-us-swiper"),{modules:[$,J],navigation:{nextEl:p.querySelector(".about-us-button-next"),prevEl:p.querySelector(".about-us-button-prev")},pagination:{el:p.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{r.update(),r.params.pagination.dynamicBullets=window.innerWidth<768,r.pagination.destroy(),r.pagination.init(),r.pagination.render(),r.pagination.update()});new le(".accordion-container",{duration:300,showMultiple:!1});const pe="https://paw-hut.b.goit.study/api";async function Ae(e){const n=await fetch(`${pe}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await n.json();if(!n.ok)throw new Error((t==null?void 0:t.message)||`HTTP error ${n.status}`);return t}const ge=document.querySelector(".app-modal-close"),q=document.querySelector(".backdrop-order"),w=document.querySelector(".app-modal-form"),A=document.querySelector(".modal-button"),x=document.querySelector("#name"),g=document.querySelector("#phone"),M=document.querySelector("#comment"),l=document.querySelectorAll(".modal-field");let K=null;function fe(e){K=e,w.reset(),A.disabled=!0,l.forEach(n=>n.classList.remove("error")),q.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function O(){q.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}ge.addEventListener("click",O);q.addEventListener("click",e=>{});document.addEventListener("keydown",e=>{e.key==="Escape"&&O()});function S(e,n){const t=n.value.trim()!=="";return e.classList.toggle("error",!t),t}function h(){const e=S(l[0],x),n=S(l[1],g),t=S(l[2],M);A.disabled=!(e&&n&&t)}x.addEventListener("input",h);g.addEventListener("input",h);M.addEventListener("input",h);w.addEventListener("submit",async e=>{if(e.preventDefault(),h(),A.disabled)return;const n=g.value.trim();function t(s){return/^[0-9]{12}$/.test(s)}if(!t(n)){E.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const o={name:x.value.trim(),phone:g.value.trim(),comment:M.value.trim(),animalId:K};try{const s=await Ae(o);E.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${s.orderNum}`,confirmButtonText:"OK"}),w.reset(),A.disabled=!0,l.forEach(a=>a.classList.remove("error")),O()}catch{E.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const X="https://paw-hut.b.goit.study",ye="/api/categories",be="/api/animals";async function Le(){return(await B.get(X+ye)).data}async function z(e,n,t){const o={page:n,limit:t};return e!=="all"&&(o.categoryId=String(e)),(await B.get(X+be,{params:o})).data}console.log("pets-list.js loaded");let u=1,Z=1,d=8,C="all",k=0;const f=document.querySelector(".pet-list-categories"),m=document.querySelector(".pet-list-cards"),c=document.querySelector(".pet-list-more-btn"),y=document.querySelector(".loader");f.addEventListener("click",Ce);m.addEventListener("click",Be);c.addEventListener("click",ke);function _(){return window.innerWidth<1366?8:9}function he(){c&&(c.classList.remove("hidden"),c.blur())}function ee(){c&&c.classList.add("hidden")}function te(){y&&y.classList.remove("hidden")}function ne(){y&&y.classList.add("hidden")}function oe(){u<Z?he():alert("В базі даних більше нема карток")}function ve(e){window.scrollBy({top:k*e,behavior:"smooth"})}function Ee(){m&&(m.innerHTML="")}async function Se(){if(f)try{const n=(await Le()??[]).map(t=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${t._id}"
            >
                ${t.name}
            </button>`).join("");f.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${n}`}catch{alert("Помилка завантаження категорій хвостиків")}}function se(e){const n=(e??[]).map(t=>`
      <li class="pet-list-card-item" data-id="${t._id}">
        <img class="pet-list-card-img" src="${t.image}" alt="${t.name}" />

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

        <button type="button" class="pet-list-card-more-btn">
          Дізнатись більше
        </button>
      </li>
    `).join("");m&&m.insertAdjacentHTML("beforeend",n)}async function ae(e){console.log("startPetList",e),C=e,u=1,d=_(),ee(),te(),Ee();try{const n=await z(C,u,d);if(n.animals.length===0){alert("Більше нема даних");return}Z=Math.ceil(n.totalItems/d),se(n.animals),oe();const t=document.querySelector(".pet-list-card-item");t?k=t.getBoundingClientRect().height:k=0}catch{alert("Помилка завантаження карток тваринок")}finally{ne()}}async function we(){console.log("continuePetList"),u+=1,d=_(),ee(),te();try{const e=await z(C,u,d);se(e.animals),ve(1),oe()}catch{alert("Помилка завантаження карток тваринок")}ne()}function Ce(e){const n=e.target.closest(".pet-list-categories-btn");if(!n)return;const t=f.querySelector(".active");t&&t.classList.remove("active"),n.classList.add("active");const o=n.dataset.id;ae(o)}function ke(){we()}function Be(e){const n=e.target.closest(".pet-list-card-more-btn");n&&n.dataset.id}const qe="https://paw-hut.b.goit.study";async function xe(e=1,n=6){return(await B.get(`${qe}/api/feedbacks?limit=${n}&page=${e}`)).data.feedbacks}const Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",Ue=document.querySelector(".success-stories-list");function Pe(e){const n=e.map(o=>`
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
      `).join("");console.log(e),Ue.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".success-stories-rate").forEach(o=>{new de(o,{score:Number(o.dataset.rate),readOnly:!0,starOn:Me,starOff:Oe,starHalf:Ie}).init()});const t=new W(".mySwiper",{modules:[$,J],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{t.update(),t.params.pagination.dynamicBullets=window.innerWidth>768,t.pagination.destroy(),t.pagination.init(),t.pagination.render(),t.pagination.update()})}async function Qe(){try{const e=await xe();Pe(e)}catch(e){console.log(e)}}function Te(e){const n=document.querySelector(".animal-backdrop");if(!n)return;n.innerHTML=`
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
  `,n.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),n.querySelector(".animal-modal-close").addEventListener("click",b),n.addEventListener("click",Ye),window.addEventListener("keydown",ie);const t=n.querySelector(".animal-modal-btn");t&&t.addEventListener("click",()=>{b();const o=document.querySelector(".backdrop-order");o?(o.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),fe(e._id)):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function b(){const e=document.querySelector(".animal-backdrop");e&&(e.classList.add("is-hidden"),e.innerHTML=""),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",ie)}function Ye(e){e.target===e.currentTarget&&b()}function ie(e){e.code==="Escape"&&b()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".pet-list-cards");e&&e.addEventListener("click",n=>{var a,i,I,U,P,Q,T,Y,V,j,R,F,G,D,H,N;const t=n.target.closest(".pet-list-card-more-btn");if(!t)return;const o=t.closest(".pet-list-card")||t.closest("li");if(!o)return;const s={_id:o.dataset.id,img:((a=o.querySelector(".pet-list-card-img"))==null?void 0:a.src)||((i=o.querySelector("img"))==null?void 0:i.src)||"",name:((U=(I=o.querySelector(".pet-list-card-title"))==null?void 0:I.textContent)==null?void 0:U.trim())||"Тваринка",type:((Q=(P=o.querySelector(".pet-list-card-type"))==null?void 0:P.textContent)==null?void 0:Q.trim())||"Вид",meta:((Y=(T=o.querySelector(".pet-list-card-meta"))==null?void 0:T.textContent)==null?void 0:Y.trim())||((j=(V=o.querySelector(".animal-modal-meta"))==null?void 0:V.textContent)==null?void 0:j.trim())||"Вік і стать",description:((F=(R=o.querySelector(".pet-list-card-desc"))==null?void 0:R.textContent)==null?void 0:F.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:((D=(G=o.querySelector(".pet-list-card-health"))==null?void 0:G.textContent)==null?void 0:D.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((N=(H=o.querySelector(".pet-list-card-behavior"))==null?void 0:H.textContent)==null?void 0:N.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Te(s)})});const Ve=document.querySelector("[data-modal-open]"),je=document.querySelector("[data-modal-close]"),L=document.querySelector(".backdrop"),re=document.querySelector(".mobile-menu"),ce=document.body;function Re(){L.classList.add("is-open"),ce.classList.add("no-scroll"),re.classList.add("is-open")}function v(){L.classList.remove("is-open"),ce.classList.remove("no-scroll"),re.classList.remove("is-open")}Ve.addEventListener("click",Re);je.addEventListener("click",v);L.addEventListener("click",e=>{e.target===L&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});const Fe=document.querySelectorAll(".mobile-menu a");Fe.forEach(e=>{e.addEventListener("click",()=>{v()})});ue();me();Se();ae("all");Qe();
//# sourceMappingURL=index.js.map
