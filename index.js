import{S as J,N as K,P as X,A as ut,a as k,b as I,R as mt}from"./assets/vendor-DgsDRJCq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function pt(){document.addEventListener("click",t=>{const s=t.target.closest('a[href^="#"]');if(!s)return;t.preventDefault();const e=s.getAttribute("href"),n=document.querySelector(e);if(!n)return;const i=n.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:i,behavior:"smooth"})})}function ft(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((s,e)=>{setTimeout(()=>{s.classList.add("visible")},e*200)})})}const b=document.querySelector(".about-us"),p=new J(b.querySelector(".about-us-swiper"),{modules:[K,X],navigation:{nextEl:b.querySelector(".about-us-button-next"),prevEl:b.querySelector(".about-us-button-prev")},pagination:{el:b.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{p.update(),p.params.pagination.dynamicBullets=window.innerWidth<768,p.pagination.destroy(),p.pagination.init(),p.pagination.render(),p.pagination.update()});new ut(".accordion-container",{duration:300,showMultiple:!1});const gt="https://paw-hut.b.goit.study/api";async function bt(t){const s=await fetch(`${gt}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e=await s.json();if(!s.ok)throw new Error((e==null?void 0:e.message)||`HTTP error ${s.status}`);return e}const At=document.querySelector(".app-modal-close"),A=document.querySelector(".backdrop-order"),B=document.querySelector(".app-modal-form"),y=document.querySelector(".modal-button"),M=document.querySelector("#name"),v=document.querySelector("#phone"),yt=document.querySelector("#comment"),h=document.querySelectorAll(".modal-field");let z=null;function vt(t){z=t,B.reset(),y.disabled=!0,h.forEach(s=>s.classList.remove("error")),A.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function w(){A.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}At.addEventListener("click",w);A.addEventListener("click",t=>{t.target===A&&w()});document.addEventListener("keydown",t=>{t.key==="Escape"&&w()});function $(t,s){const e=s.value.trim()!=="";return t.classList.toggle("error",!e),e}function O(){const t=$(h[0],M),s=$(h[1],v);y.disabled=!(t&&s)}M.addEventListener("input",O);v.addEventListener("input",O);B.addEventListener("submit",async t=>{if(t.preventDefault(),O(),y.disabled)return;const s=v.value.trim();function e(i){return/^[0-9]{12}$/.test(i)}if(!e(s)){k.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const n={name:M.value.trim(),phone:v.value.trim(),comment:yt.value.trim(),animalId:z};try{const i=await bt(n);k.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${i.orderNum}`,confirmButtonText:"OK"}),B.reset(),y.disabled=!0,h.forEach(r=>r.classList.remove("error")),w()}catch{k.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const Z="https://paw-hut.b.goit.study",ht="/api/categories",Lt="/api/animals";async function Ct(){return(await I.get(Z+ht)).data}async function _(t,s,e){const n={page:s,limit:e};return t!=="all"&&(n.categoryId=String(t)),(await I.get(Z+Lt,{params:n})).data}let o=1,f=1,d=8,x="all",q=0,l=0;const g=document.querySelector(".pet-list-categories"),m=document.querySelector(".pet-list-cards"),u=document.querySelector(".pet-list-more-btn"),c=document.querySelector(".pet-list-pagin"),L=document.querySelector(".loader");g&&g.addEventListener("click",qt);m&&m.addEventListener("click",Mt);u&&u.addEventListener("click",It);c&&c.addEventListener("click",Ot);function St(){u&&(u.classList.remove("hidden"),u.blur())}function tt(){u&&u.classList.add("hidden")}function wt(t){if(c){let s=`<button type="button" class="pet-list-pagin-btn left disabled">
        <svg width="24" height="24">
          <use href="../public/sprite.svg#icon-arrow_left"></use>
        </svg>
      </button>`,e=1;for(;e<=t&&e<=3;)s+=`<button type="button" class="pet-list-pagin-num 
      ${e===1?" active":""}" data-idx="${e-1}">${e}</button>`,e++;t>3&&(s+=`<span class="pet-list-pagin-dot">...</span>
        <button type="button" class="pet-list-pagin-num" data-idx="3">${t}</button>`),s+=`<button type="button" class="pet-list-pagin-btn right 
      ${t<=1?"disabled":""}">
        <svg width="24" height="24">
          <use href="../public/sprite.svg#icon-arrow_right"></use>
        </svg>
      </button>`,c.innerHTML=s,c.classList.remove("hidden")}}function Et(){c&&c.classList.add("hidden")}function et(){L&&L.classList.remove("hidden")}function st(){L&&L.classList.add("hidden")}function kt(){return window.innerWidth<1366?8:9}function nt(){o<f&&St()}function Bt(t){window.scrollBy({top:q*t,behavior:"smooth"})}function it(){m&&(m.innerHTML="")}async function xt(){if(g)try{const s=(await Ct()??[]).map(e=>`<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${e._id}"
            >
                ${e.name}
            </button>`).join("");g.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${s}`}catch{alert("Помилка завантаження категорій хвостиків")}}function ot(t){const s=(t??[]).map(e=>`
      <li class="pet-list-card-item" data-id="${e._id}">
        <img class="pet-list-card-img" src="${e.image}" alt="${e.name}" />

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

        <button type="button" class="pet-list-card-more-btn">
          Дізнатись більше
        </button>
      </li>
    `).join("");m&&m.insertAdjacentHTML("beforeend",s)}async function at(t){x=t,o=1,d=kt(),tt(),Et(),et(),it();try{const s=await _(x,o,d);if(s.animals.length===0){alert("Більше нема даних");return}f=Math.ceil(s.totalItems/d),ot(s.animals),d===8?nt():wt(f);const e=document.querySelector(".pet-list-card-item");e?q=e.getBoundingClientRect().height:q=0}catch{alert("Помилка завантаження карток тваринок")}finally{st()}}async function rt(){d===8&&(o+=1),tt(),et();try{const t=await _(x,o,d);ot(t.animals),d===8&&(Bt(1),nt())}catch{alert("Помилка завантаження карток тваринок")}st()}function qt(t){const s=t.target.closest(".pet-list-categories-btn");if(!s)return;const e=g.querySelector(".active");e&&e.classList.remove("active"),s.classList.add("active");const n=s.dataset.id;at(n)}function It(){rt()}function Mt(t){const s=t.target.closest(".pet-list-card-more-btn");s&&s.dataset.id}function Ot(t){const s=o,e=t.target.closest("button");if(!e)return;const n=c.querySelector(".pet-list-pagin-btn.left"),i=c.querySelector(".pet-list-pagin-btn.right"),r=c.querySelector(".pet-list-pagin-num.active"),a=c.querySelectorAll(".pet-list-pagin-num");e===a[a.length-1]&&(o=Number(e.textContent),l=a.length-1,o>3&&(a[2].textContent=o-1,a[1].textContent=o-2,a[0].textContent=o-3)),e.classList.contains("left")?(o-=1,o===1?n.classList.add("disabled"):n.classList.remove("disabled"),i.classList.remove("disabled"),l>0?(a[l].classList.remove("active"),l--,a[l].classList.add("active")):(a[0].textContent=o,a[1].textContent=o+1,a[2].textContent=o+2)):e.classList.contains("right")?(o+=1,o===f?i.classList.add("disabled"):i.classList.remove("disabled"),n.classList.remove("disabled"),l<2||o===f?(a[l].classList.remove("active"),l++,a[l].classList.add("active")):(a[2].textContent=o,a[1].textContent=o-1,a[0].textContent=o-2)):e!==r&&(r.classList.remove("active"),e.classList.add("active"),o=Number(e.textContent),o>1?n.classList.remove("disabled"):n.classList.add("disabled"),o!=f?i.classList.remove("disabled"):i.classList.add("disabled"),l=e.dataset.idx),s!==o&&(it(),rt(),m.scrollIntoView({behavior:"smooth"}))}const Pt="https://paw-hut.b.goit.study";async function Ut(t=1,s=6){return(await I.get(`${Pt}/api/feedbacks?limit=${s}&page=${t}`)).data.feedbacks}const Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",Vt=document.querySelector(".success-stories-list");function jt(t){const s=t.map(n=>`
        <li class="swiper-slide success-stories-list-item">
          <div class="success-stories-rate"
           data-rate="${n.rate}">
          </div>

          <p class="success-stories-text">
            ${n.description}
          </p>

          <h3 class="success-stories-author">
            ${n.author}
          </h3>
        </li>
      `).join("");Vt.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".success-stories-rate").forEach(n=>{new mt(n,{score:Number(n.dataset.rate),readOnly:!0,starOn:Tt,starOff:Qt,starHalf:Yt}).init()});const e=new J(".mySwiper",{modules:[K,X],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{dynamicBullets:!0,slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{e.update(),e.params.pagination.dynamicBullets=window.innerWidth>768,e.pagination.destroy(),e.pagination.init(),e.pagination.render(),e.pagination.update()})}async function Nt(){try{const t=await Ut();jt(t)}catch(t){console.log(t)}}function Rt(t){const s=document.querySelector(".animal-backdrop");if(!s)return;s.innerHTML=`
    <div class="animal-modal">
      <button type="button" class="animal-modal-close" aria-label="Close modal">
        &times;
      </button>

      <div class="animal-modal-thumb">
        <img src="${t.img}" alt="${t.name}" class="animal-modal-img" />
      </div>

      <div class="animal-modal-info">
        <p class="animal-modal-type">${t.type}</p>
        <h2 class="animal-modal-title">${t.name}</h2>
        <p class="animal-modal-meta">${t.meta}</p>

        <div class="animal-modal-scroll-container">
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Опис:</p>
            <p class="animal-detail-text">${t.description}</p>
          </div>
          
          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Здоров'я:</p>
            <p class="animal-detail-text">${t.health}</p>
          </div>

          <div class="animal-modal-details-block">
            <p class="animal-detail-label">Поведінка:</p>
            <p class="animal-detail-text">${t.behavior}</p>
          </div>
          
        </div>
        
        <button type="button" class="animal-modal-btn">Взяти додому</button>
      </div>
    </div>
  `,s.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),s.querySelector(".animal-modal-close").addEventListener("click",C),s.addEventListener("click",Ft),window.addEventListener("keydown",ct);const e=s.querySelector(".animal-modal-btn");e&&e.addEventListener("click",()=>{C();const n=document.querySelector(".backdrop-order");n?(n.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),vt(t._id)):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function C(){const t=document.querySelector(".animal-backdrop");t&&(t.classList.add("is-hidden"),t.innerHTML=""),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",ct)}function Ft(t){t.target===t.currentTarget&&C()}function ct(t){t.code==="Escape"&&C()}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".pet-list-cards");t&&t.addEventListener("click",s=>{var r,a,P,U,T,Q,Y,V,j,N,R,F,G,H,D,W;const e=s.target.closest(".pet-list-card-more-btn");if(!e)return;const n=e.closest(".pet-list-card")||e.closest("li");if(!n)return;const i={_id:n.dataset.id,img:((r=n.querySelector(".pet-list-card-img"))==null?void 0:r.src)||((a=n.querySelector("img"))==null?void 0:a.src)||"",name:((U=(P=n.querySelector(".pet-list-card-title"))==null?void 0:P.textContent)==null?void 0:U.trim())||"Тваринка",type:((Q=(T=n.querySelector(".pet-list-card-type"))==null?void 0:T.textContent)==null?void 0:Q.trim())||"Вид",meta:((V=(Y=n.querySelector(".pet-list-card-meta"))==null?void 0:Y.textContent)==null?void 0:V.trim())||((N=(j=n.querySelector(".animal-modal-meta"))==null?void 0:j.textContent)==null?void 0:N.trim())||"Вік і стать",description:((F=(R=n.querySelector(".pet-list-card-desc"))==null?void 0:R.textContent)==null?void 0:F.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:((H=(G=n.querySelector(".pet-list-card-health"))==null?void 0:G.textContent)==null?void 0:H.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((W=(D=n.querySelector(".pet-list-card-behavior"))==null?void 0:D.textContent)==null?void 0:W.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Rt(i)})});const Gt=document.querySelector("[data-modal-open]"),Ht=document.querySelector("[data-modal-close]"),S=document.querySelector(".backdrop"),lt=document.querySelector(".mobile-menu"),dt=document.body;function Dt(){S.classList.add("is-open"),dt.classList.add("no-scroll"),lt.classList.add("is-open")}function E(){S.classList.remove("is-open"),dt.classList.remove("no-scroll"),lt.classList.remove("is-open")}Gt.addEventListener("click",Dt);Ht.addEventListener("click",E);S.addEventListener("click",t=>{t.target===S&&E()});document.addEventListener("keydown",t=>{t.key==="Escape"&&E()});const Wt=document.querySelectorAll(".mobile-menu a");Wt.forEach(t=>{t.addEventListener("click",()=>{E()})});pt();ft();xt();at("all");Nt();
//# sourceMappingURL=index.js.map
