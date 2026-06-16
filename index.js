import{S as K,N as X,P as z,A as pe,a as f,b as M,R as fe}from"./assets/vendor-DgsDRJCq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ge(){document.addEventListener("click",e=>{const s=e.target.closest('a[href^="#"]');if(!s)return;e.preventDefault();const t=s.getAttribute("href"),n=document.querySelector(t);if(!n)return;const i=n.getBoundingClientRect().top+window.scrollY;document.scrollingElement.scrollTo({top:i,behavior:"smooth"})})}function be(){window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".fade-in-element").forEach((s,t)=>{setTimeout(()=>{s.classList.add("visible")},t*200)})})}const A=document.querySelector(".about-us"),m=new K(A.querySelector(".about-us-swiper"),{modules:[X,z],navigation:{nextEl:A.querySelector(".about-us-button-next"),prevEl:A.querySelector(".about-us-button-prev")},pagination:{el:A.querySelector(".about-us-swiper-pagination"),clickable:!0,dynamicBullets:window.innerWidth<768}});window.addEventListener("resize",()=>{m.update(),m.params.pagination.dynamicBullets=window.innerWidth<768,m.pagination.destroy(),m.pagination.init(),m.pagination.render(),m.pagination.update()});new pe(".accordion-container",{duration:300,showMultiple:!1});const Ae="https://paw-hut.b.goit.study/api";async function ye(e){const s=await fetch(`${Ae}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await s.json();if(!s.ok)throw new Error((t==null?void 0:t.message)||`HTTP error ${s.status}`);return t}const ve=document.querySelector(".app-modal-close"),y=document.querySelector(".backdrop-order"),B=document.querySelector(".app-modal-form"),v=document.querySelector(".modal-button"),I=document.querySelector("#name"),h=document.querySelector("#phone"),he=document.querySelector("#comment"),L=document.querySelectorAll(".modal-field");let Z=null;function Le(e){Z=e,B.reset(),v.disabled=!0,L.forEach(s=>s.classList.remove("error")),y.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function E(){y.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}ve.addEventListener("click",E);y.addEventListener("click",e=>{e.target===y&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});function J(e,s){const t=s.value.trim()!=="";return e.classList.toggle("error",!t),t}function O(){const e=J(L[0],I),s=J(L[1],h);v.disabled=!(e&&s)}I.addEventListener("input",O);h.addEventListener("input",O);B.addEventListener("submit",async e=>{if(e.preventDefault(),O(),v.disabled)return;const s=h.value.trim();function t(r){return/^[0-9]{12}$/.test(r)}if(!t(s)){f.fire({icon:"error",title:"Невірний номер",text:"Телефон має містити 12 цифр без + і пробілів"});return}const n={name:I.value.trim(),phone:h.value.trim(),animalId:Z},i=he.value.trim();i&&(n.comment=i);try{const r=await ye(n);f.fire({icon:"success",title:"Заявку відправлено!",text:`Ваш номер замовлення: ${r.orderNum}`,confirmButtonText:"OK"}),B.reset(),v.disabled=!0,L.forEach(a=>a.classList.remove("error")),E()}catch{f.fire({icon:"error",title:"Помилка!",text:"Не вдалося відправити заявку",confirmButtonText:"OK"})}});const _="https://paw-hut.b.goit.study",Ce="/api/categories",Se="/api/animals";async function we(){return(await M.get(_+Ce)).data}async function ee(e,s,t){const n={page:s,limit:t};return e!=="all"&&(n.categoryId=String(e)),(await M.get(_+Se,{params:n})).data}let o=1,p=1,d=8,x="all",q=0,l=0;const g=document.querySelector(".pet-list-categories"),b=document.querySelector(".pet-list-cards"),u=document.querySelector(".pet-list-more-btn"),c=document.querySelector(".pet-list-pagin"),C=document.querySelector(".loader");g&&g.addEventListener("click",Ie);u&&u.addEventListener("click",Oe);c&&c.addEventListener("click",Pe);function P(e){f.fire({icon:"error",title:e})}function te(e){f.fire({title:e})}function Ee(){u&&(u.classList.remove("hidden"),u.blur())}function se(){u&&u.classList.add("hidden")}function ke(e){if(c){let s=`<button type="button" class="pet-list-pagin-btn left disabled">
        <svg width="24" height="24">
          <use href="./public/sprite.svg#icon-arrow_left"></use>
        </svg>
      </button>`,t=1;for(;t<=e&&t<=3;)s+=`<button type="button" class="pet-list-pagin-num 
      ${t===1?" active":""}" data-idx="${t-1}">${t}</button>`,t++;e>3&&(s+=`<span class="pet-list-pagin-dot">...</span>
        <button type="button" class="pet-list-pagin-num" data-idx="3">${e}</button>`),s+=`<button type="button" class="pet-list-pagin-btn right 
      ${e<=1?"disabled":""}">
        <svg width="24" height="24">
          <use href="./public/sprite.svg#icon-arrow_right"></use>
        </svg>
      </button>`,c.innerHTML=s,c.classList.remove("hidden")}}function Be(){c&&c.classList.add("hidden")}function ne(){C&&C.classList.remove("hidden")}function ie(){C&&C.classList.add("hidden")}function xe(){return window.innerWidth<1366?8:9}function oe(){o<p?Ee():te("В базі даних більше нема карток")}function qe(e){window.scrollBy({top:q*e,behavior:"smooth"})}function ae(){b&&(b.innerHTML="")}async function Me(){if(g)try{const s=(await we()??[]).map(t=>`<button
                type="button"
                class="pet-list-categories-btn" aria-label="${t.name}"
                data-id="${t._id}"
            >
                ${t.name}
            </button>`).join("");g.innerHTML=`<button
            type="button"
            class="pet-list-categories-btn active" aria-label="Всі категорії"
            data-id="all"
        >
            Всі
        </button>
        ${s}`}catch{P("Помилка завантаження категорій хвостиків")}}function re(e){const s=(e??[]).map(t=>`
      <li class="pet-list-card-item" data-id="${t._id}">
        <img class="pet-list-card-img" src="${t.image}" alt="${t.name}" />

        <p class="pet-list-card-type">${t.species}</p>
        <p class="pet-list-card-name">${t.name}</p>

        <ul class="pet-list-card-filter">
          ${(t.categories??[]).map(n=>`<li class="pet-list-card-filter-item">${n.name}</li>`).join("")}
        </ul>

        <div class="pet-list-card-age-gender">
          <p class="pet-list-card-age">${t.age}</p>
          <p class="pet-list-card-gender">${t.gender}</p>
        </div>

        <p class="pet-list-card-about">${t.shortDescription}</p>

        <button type="button" class="pet-list-card-more-btn" aria-label="Дізнатись більше про ${t.name}">
          Дізнатись більше
        </button>
      </li>
    `).join("");b&&b.insertAdjacentHTML("beforeend",s)}async function ce(e){x=e,o=1,d=xe(),se(),Be(),ne(),ae();try{const s=await ee(x,o,d);if(s.animals.length===0){te("В базі даних нема карток за цією категорією");return}p=Math.ceil(s.totalItems/d),re(s.animals),d===8?oe():ke(p);const t=document.querySelector(".pet-list-card-item");t?q=t.getBoundingClientRect().height:q=0}catch{P("Помилка завантаження карток тваринок")}finally{ie()}}async function le(){d===8&&(o+=1),se(),ne();try{const e=await ee(x,o,d);re(e.animals),d===8&&(qe(1),oe())}catch{P("Помилка завантаження карток тваринок")}ie()}function Ie(e){const s=e.target.closest(".pet-list-categories-btn");if(!s)return;const t=g.querySelector(".active");t&&t.classList.remove("active"),s.classList.add("active");const n=s.dataset.id;ce(n)}function Oe(){le()}function Pe(e){const s=o,t=e.target.closest("button");if(!t)return;const n=c.querySelector(".pet-list-pagin-btn.left"),i=c.querySelector(".pet-list-pagin-btn.right"),r=c.querySelector(".pet-list-pagin-num.active"),a=c.querySelectorAll(".pet-list-pagin-num");t===a[a.length-1]&&(o=Number(t.textContent),l=a.length-1,o>3&&(a[2].textContent=o-1,a[1].textContent=o-2,a[0].textContent=o-3)),t.classList.contains("left")?(o-=1,o===1?n.classList.add("disabled"):n.classList.remove("disabled"),i.classList.remove("disabled"),l>0?(a[l].classList.remove("active"),l--,a[l].classList.add("active")):(a[0].textContent=o,a[1].textContent=o+1,a[2].textContent=o+2)):t.classList.contains("right")?(o+=1,o===p?i.classList.add("disabled"):i.classList.remove("disabled"),n.classList.remove("disabled"),l<2||o===p?(a[l].classList.remove("active"),l++,a[l].classList.add("active")):(a[2].textContent=o,a[1].textContent=o-1,a[0].textContent=o-2)):t!==r&&(r.classList.remove("active"),t.classList.add("active"),o=Number(t.textContent),o>1?n.classList.remove("disabled"):n.classList.add("disabled"),o!=p?i.classList.remove("disabled"):i.classList.add("disabled"),l=t.dataset.idx),s!==o&&(ae(),le(),b.scrollIntoView({behavior:"smooth"}))}const Ue="https://paw-hut.b.goit.study";async function Te(e=1,s=6){return(await M.get(`${Ue}/api/feedbacks?limit=${s}&page=${e}`)).data.feedbacks}const Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAABmklEQVR4AaSU4XGCYAyGkyBU8Y8j4ATVDcoGHQEnaJ2gI/ScQDtBR2g3qBvoCPyxclKTJqgUBIWz3xENH+/7XC75gKDFIq+3Is9ftZBCI9Bx/EcADAAggE73ARpWI5BJnk4MRHw55Zf+G4DdQCF5VVnuuqNLMNu/CiSXKhURutoCs9bHFWA3AJS8uoJdW6DPChvFlBy3G+kE5xbo9j5QJ2pBHulUs2EU9ZYP7Jlp0PO/jp538ztuPyIBelVVZGE9Qp2ohd5fvUyDAKOjx9oQCcqcGHgKAjH8c4kyUHBCkCYLhjQUkPWtTAFYizL26WZxGEqaLoXkJmgGIw5BGVbQAWhZkqxldzcWkU+7bROmFd8bg3pP+j9gthPHxDjL0hY/Yto4jovSMyCAENadvaInz6lGWwUC3+eOhkRqtBUgYrVCOxIW5/yDdjAo7peBdZ8nwZn0vaE4PFbjm0b56iSlj0UJSER5/2yCzBxyunkGa7xOknffERMPpXBmycHLQN7DMhOjTCXdhvCTVI+QgmW3HbLwRNuwZMHSC/ELAAD//8Y0jPIAAAAGSURBVAMAqX+jof1XbtgAAAAASUVORK5CYII=",Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACOElEQVR4AYxU7XEaQQx90vkuGP+5Es4VxHRgKohLgAoCFWRSQcYVQCqwO7A7MKkAUkHuj2OGC6s87X0M2Aa8s0Lak/TQSu9O8YGl2flSs/7yA6E4CZgk/RtACgAFznrXOLFOAga1ry2GiHxr7UP6BGCvIEhdlaGMdppe4cg6CqipthXNAfkJLpWULaBxYB8B7BUQi9UFDd+Dbe8bDLaAvubwWmmS9kac4MxF0vMH4URdNFNOVQqD3WO9XuHf+tHMHgmQu89jJOs/NTl3np+kFyM16A8GjVxE5Fo4URee4QCmNnXbxRIbU8ere4wAV02Ot2FkYjMNCFMYSnAZdQhhyCtehs1fseplGKujL25WyucjisQYxu7mislYUa3nAdWQV1uJIFfVGdYx/fgPY1RlBuYYsDJibKvneT2UqlrwahGUKAV79AAcbrz7NBPGeI8JpmEIYjB3503hdWzzaeB9o6PQNJlQv7s10olgHJL1s8FuW+oKu7Sy1CC3fjSEz67fE+M1/bl5bFmWbrfyChAwlcg9gf5Ct/IcyPP2KCa/3WYPY6zbrbwFbCoLkci9wnmm2eaPC7l35/2rffzzJrYFc/0GUMjF6JDkC3v15Genk4tAbjiwpdIHLvcBeU6z2/uAu58nsYlTAia3dpFdWhIGzIqk5is5oV3vs/Xex2IPkBzsemKcYCR59TyBN54sIKFHTmiDrWo0QBM5DBi2WMRgsWl8S/j+tomdJrBtXi6DhTHbsAgmHbjH/AcAAP//LuSXeQAAAAZJREFUAwBvSgOwSGZkYgAAAABJRU5ErkJggg==",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAACLklEQVR4AZxU7XXaQBCcXVkyH39IB7iCQAWGDpIKgiuIXQFJBYQKbFfgpALTQUgFUML9ccxDsJs5CdlgY/DLvVtp7252bvZOK8U7mmb1mWaN2TugOEqYJI1PgLTdfY6TWg9H2lFCU/8aORx+KyLD6B+yI4S1NklKVXntp0A6SNPOfxNqqluKQoBgrJLyCN6mPKCw1oZ4j2fnVbgtsx/0eQRco7Ova5LWBrzB62iS1u+FNxpNM+WtSkxZngNDoD+OaxEjWeP3JuYuxidpc6AOHRE0oJIvItIT3mg0zoFzlbrqDVv+/UYTV++75xfEfPe13MKZj/i1GuyKgyBskWTbOCWbcfXeDPlaLObI8ylWi0mSAC5+Li4XinxxY8j7Dp8TFrvzwY09vuke7kx1aMDIffV5nT/clJfCnYoUStJCTVRHO8imaXPEXQeu1i/UEl0S0gFT8OVpl9ImHJJLYGbEc7Sn62n90mEdb2TdGFtBngmLmRDUZBxdEkPYor/P3OXcIzaEsL3+ghBwlbIyNigS71UpwB99gY0hrwlhH+MCrSASNvrsrRYfT93MJky5wj7NvyJkfKWQIkqcO4Kky5mmdX6zmypZ1aYlttXCVtsl3Pd7chl7MzvzxLo81A+skvuEFQGEwOOY4GSx87PYIVTVSh0imGn1LX+4ZGyIN8kKGRg/ERMbsvTuQOWayNuEtsbU4XMW0ZXnj/1YBVvZlG7xeT2eccNfVNw2l3m5UD7/AQAA//+4Hc+AAAAABklEQVQDAML/+aGwEbCEAAAAAElFTkSuQmCC",je=document.querySelector(".success-stories-list");function Ne(e){const s=e.map(n=>`
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
      `).join("");je.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".success-stories-rate").forEach(n=>{new fe(n,{score:Number(n.dataset.rate),readOnly:!0,starOn:Qe,starOff:Ye,starHalf:Ve}).init()});const t=new K(".mySwiper",{modules:[X,z],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:window.innerWidth>768},slidesPerView:1,breakpoints:{768:{dynamicBullets:!0,slidesPerView:2,spaceBetween:32}}});window.addEventListener("resize",()=>{t.update(),t.params.pagination.dynamicBullets=window.innerWidth>768,t.pagination.destroy(),t.pagination.init(),t.pagination.render(),t.pagination.update()})}async function Re(){try{const e=await Te();Ne(e)}catch(e){console.log(e)}}function Fe(e){const s=document.querySelector(".animal-backdrop");if(!s)return;s.innerHTML=`
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
  `,s.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),s.querySelector(".animal-modal-close").addEventListener("click",S),s.addEventListener("click",Ge),window.addEventListener("keydown",de);const t=s.querySelector(".animal-modal-btn");t&&t.addEventListener("click",()=>{S();const n=document.querySelector(".backdrop-order");n?(n.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),Le(e._id)):console.warn("Бекдроп з класом .backdrop-order не знайдено на сторінці.")})}function S(){const e=document.querySelector(".animal-backdrop");e&&(e.classList.add("is-hidden"),e.innerHTML=""),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",de)}function Ge(e){e.target===e.currentTarget&&S()}function de(e){e.code==="Escape"&&S()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".pet-list-cards");e&&e.addEventListener("click",s=>{var r,a,U,T,Q,Y,V,j,N,R,F,G,H,$,D,W;const t=s.target.closest(".pet-list-card-more-btn");if(!t)return;const n=t.closest(".pet-list-card")||t.closest("li");if(!n)return;const i={_id:n.dataset.id,img:((r=n.querySelector(".pet-list-card-img"))==null?void 0:r.src)||((a=n.querySelector("img"))==null?void 0:a.src)||"",name:((T=(U=n.querySelector(".pet-list-card-name"))==null?void 0:U.textContent)==null?void 0:T.trim())||"Тваринка",type:((Y=(Q=n.querySelector(".pet-list-card-type"))==null?void 0:Q.textContent)==null?void 0:Y.trim())||"Вид",meta:((j=(V=n.querySelector(".pet-list-card-age"))==null?void 0:V.textContent)==null?void 0:j.trim())||((R=(N=n.querySelector(".pet-list-card-gender"))==null?void 0:N.textContent)==null?void 0:R.trim())||"Вік і стать",description:((G=(F=n.querySelector(".pet-list-card-desc"))==null?void 0:F.textContent)==null?void 0:G.trim())||"Ніжний та ласкавий малюк. Дуже любить сидіти на ручках.",health:(($=(H=n.querySelector(".pet-list-card-health"))==null?void 0:H.textContent)==null?void 0:$.trim())||"Здоровий, кастрований, вакцинований. Потребує регулярного вичісування шерсті.",behavior:((W=(D=n.querySelector(".pet-list-card-behavior"))==null?void 0:D.textContent)==null?void 0:W.trim())||"Бажано бути єдиною твариною в сім'ї. Не любить конкуренції за увагу."};Fe(i)})});const He=document.querySelector("[data-modal-open]"),$e=document.querySelector("[data-modal-close]"),w=document.querySelector(".backdrop"),ue=document.querySelector(".mobile-menu"),me=document.body;function De(){w.classList.add("is-open"),me.classList.add("no-scroll"),ue.classList.add("is-open")}function k(){w.classList.remove("is-open"),me.classList.remove("no-scroll"),ue.classList.remove("is-open")}He.addEventListener("click",De);$e.addEventListener("click",k);w.addEventListener("click",e=>{e.target===w&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});const We=document.querySelectorAll(".mobile-menu a");We.forEach(e=>{e.addEventListener("click",()=>{k()})});ge();be();Me();ce("all");Re();
//# sourceMappingURL=index.js.map
