import { getCategories, getCategory } from '../api/api-categories';

let curPage = 1;
let countPages = 1;
let countCards = 8;
let categoryId = 'all';
let heightCard = 0;

const categoriesElem = document.querySelector('.pet-list-categories');
const petListElem = document.querySelector('.pet-list-cards');
const moreBtn = document.querySelector('.pet-list-more-btn');
const loader = document.querySelector('.pet-list-loader');

categoriesElem.addEventListener('click', onCategoriesClick);
petListElem.addEventListener('click', onCardClick);
moreBtn.addEventListener('click', onMoreBtnClick);

function checkCountCards() {
  return window.innerWidth < 1366 ? 8 : 9;
}

function showLoadMoreButton() {
  if (moreBtn) {
    moreBtn.classList.remove('hidden');
  }
}

function hideLoadMoreButton() {
  if (moreBtn) {
    moreBtn.classList.add('hidden');
  }
}

function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

function checkMoreButton() {
  if (curPage < countPages) {
    showLoadMoreButton();
  } else {
    alert('В базі даних більше нема карток');
  }
}

function scrollCards(dir) {
  window.scrollBy({
    top: heightCard * dir,
    behavior: 'smooth',
  });
}

function clearPetList() {
  if (petListElem) petListElem.innerHTML = '';
}

// відображення всього списку категорій
export async function renderCategories() {
  if (!categoriesElem) return;
  try {
    // читання з АРІ об'єкту categiriesData
    const categoriesData = (await getCategories()) ?? [];
    // рендер вмісту categiriesData
    const categoriesMarkup = categoriesData
      .map(
        cat =>
          `<button
                type="button"
                class="pet-list-categories-btn"
                data-id="${cat._id}"
            >
                ${cat.name}
            </button>`
      )
      .join('');
    categoriesElem.innerHTML = `<button
            type="button"
            class="pet-list-categories-btn active"
            data-id="all"
        >
            Всі
        </button>
        ${categoriesMarkup}`;
  } catch {
    // обробка помилки
    alert('Помилка завантаження категорій хвостиків');
  }
}

function renderPetList(items) {
  const petListItems = (items ?? [])
    .map(
      item => `<li class="pet-list-card-item">
            <img class="pet-list-card-img" src="${item.image}" />
            <p class="pet-list-card-type">${item.species}</p>
            <p class="pet-list-card-name">${item.name}</p>
            <ul class="pet-list-card-filter">
            ${(item.categories ?? [])
              .map(
                cat => `<li class="pet-list-card-filter-item">${cat.name}</li>`
              )
              .join('')}
            </ul>
            <div class="pet-list-card-age-gender">
            <p class="pet-list-card-age">${item.age}</p>
            <p class="pet-list-card-gender">${item.gender}</p>
            </div>
            <p class="pet-list-card-about">${item.shortDescription}</p>
            <button type="button" class="pet-list-card-more-btn" 
            data-id="${item._id}">
            Дізнатись більше
            </button>
        </li>`
    )
    .join('');
  if (petListElem) {
    petListElem.insertAdjacentHTML('beforeend', petListItems);
  }
}

export async function startPetList(category) {
  categoryId = category;
  curPage = 1;
  countCards = checkCountCards();
  hideLoadMoreButton();
  showLoader();
  clearPetList();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    if (items.animals.length === 0) {
      alert('Більше нема даних');
      return;
    }
    countPages = Math.ceil(items.totalItems / countCards);
    renderPetList(items.animals);

    //#region Extra task

    if (isPaginationMode()) {
      hideLoadMoreButton();
      showPagination();
      renderPagination();
    } else {
      hidePagination();
      checkMoreButton();
    }

    //#endregion

    // checkMoreButton();
    const cardItem = document.querySelector('.pet-list-card-item');
    if (cardItem) {
      heightCard = cardItem.getBoundingClientRect().height;
    } else {
      heightCard = 0;
    }
  } catch (error) {
    // console.error(error);
    alert('Помилка завантаження карток тваринок');
  } finally {
    hideLoader();
  }
}

async function continuePetList() {
  //#region Extra task

  if (isPaginationMode()) return;

  //#endregion
  curPage += 1;
  countCards = checkCountCards();
  hideLoadMoreButton();
  showLoader();
  try {
    const items = await getCategory(categoryId, curPage, countCards);
    renderPetList(items.animals);
    scrollCards(1);
    checkMoreButton();
  } catch (error) {
    // console.error(error);
    alert('Помилка завантаження карток тваринок');
  }
  hideLoader();
}

function onCategoriesClick(event) {
  const btn = event.target.closest('.pet-list-categories-btn');
  if (!btn) return;
  const activeElem = categoriesElem.querySelector('.active');
  if (activeElem) activeElem.classList.remove('active');
  btn.classList.add('active');
  const id = btn.dataset.id;
  startPetList(id);
}

function onMoreBtnClick() {
  continuePetList();
}

function onCardClick(event) {
  const btn = event.target.closest('.pet-list-card-more-btn');
  if (!btn) return;
  const id = btn.dataset.id;
}

//#region Extra task

const paginationElem = document.querySelector('.pet-list-pagination');

function isPaginationMode() {
  return window.innerWidth >= 768;
}

function showPagination() {
  if (paginationElem) {
    paginationElem.classList.remove('hidden');
  }
}

function hidePagination() {
  if (paginationElem) {
    paginationElem.classList.add('hidden');
  }
}

function renderPagination() {
  if (!paginationElem) return;

  let markup = `
    <button
      class="pagination-arrow"
      data-page="${curPage - 1}"
      ${curPage === 1 ? 'disabled' : ''}
    >
      ←
    </button>
  `;

  for (let i = 1; i <= countPages; i += 1) {
    markup += `
      <button
        class="pagination-btn ${i === curPage ? 'active' : ''}"
        data-page="${i}"
      >
        ${i}
      </button>
    `;
  }

  markup += `
    <button
      class="pagination-arrow"
      data-page="${curPage + 1}"
      ${curPage === countPages ? 'disabled' : ''}
    >
      →
    </button>
  `;

  paginationElem.innerHTML = markup;
}

paginationElem.addEventListener('click', onPaginationClick);

async function loadPaginationPage(page) {
  curPage = page;

  hideLoadMoreButton();
  showLoader();
  clearPetList();

  try {
    const items = await getCategory(categoryId, curPage, countCards);

    renderPetList(items.animals);
    renderPagination();

    window.scrollTo({
      top: petListElem.offsetTop - 100,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
}

async function onPaginationClick(event) {
  const btn = event.target.closest('button');

  if (!btn) return;

  const page = Number(btn.dataset.page);

  if (!page || page < 1 || page > countPages || page === curPage) {
    return;
  }

  await loadPaginationPage(page);
}

//#endregion

let isMobile = window.innerWidth < 768;

window.addEventListener('resize', () => {
  const currentIsMobile = window.innerWidth < 768;

  if (currentIsMobile === isMobile) return;

  isMobile = currentIsMobile;

  startPetList(categoryId);
});
