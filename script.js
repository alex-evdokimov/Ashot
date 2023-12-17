const dataForRender = {
  main: {
    title: [
      { id: 1, subtilte: "Я Ашот Кузнецов", mainTitle: true },
      { id: 2, subtilte: "Мои фотографии", mainTitle: false },
      { id: 3, subtilte: "Интересные для меня видео", mainTitle: false },
    ],
    video: `<iframe width="750" height="480" src="https://www.youtube.com/embed/GALwhyDFBaQ" title="10 лучших аниме-сериалов для взрослых" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    content: `
      <p>
        &emsp;Я ТАКОЙ КЛАССНЫЙ. Этим хотелось бы и закончить. Но я все-таки расскажу о себе поподробнее.Меня зовут Ашот, мне 22 года. Я – человек с бесконечным воображением и неукротимым энтузиазмом. Мой ум похож на лабиринт, где каждый поворот приводит меня к новым и захватывающим открытиям. </p>
        <p>&emsp;Когда я просыпаюсь утром, идеи прыгают в моей голове как бананы на горке. Моя жизнь – это словно лабиринт мыслей и идей, который я безумно наслаждаюсь разгадывать. </p>
        <p>&emsp;Ум пытливый, прозорливый. Выносливость крепкая, реакция быстрая. Личность ответственная, пунктуальная. Уровень амбиций вызывает уважение, но не зашкаливает. Жизненное кредо: «Все, что делается, все к лучшему»! Философское мировоззрение: «События своей жизни мы формируем своими мыслеформами». Натура целеустремленная. В принятии важных решений не тороплюсь. К критике со стороны окружающих отношусь ровно – прислушиваюсь, анализирую.
      </p>
    `,
    images: `<div id="content__imageContainer">
      <img src="./img/1.jpg">
      <img src="./img/2.jpg">
      <img src="./img/3.jpg">
      <img src="./img/4.jpg">
      <img src="./img/5.jpg">
      <img src="./img/6.jpg">
      <button id="prevBtn">&lt;</button>
      <button id="nextBtn">&gt;</button>
    </div>`,
  },
  work: {
    title: [
      { id: 1, subtilte: "QA Инженер", mainTitle: true },
      { id: 2, subtilte: "Мои фотографии", mainTitle: false },
      { id: 3, subtilte: "Интересные для меня видео", mainTitle: false },
    ],
    video: `
      <iframe
        width="750" height="480"
        src="https://www.youtube.com/embed/liirXTlmmRY"
        title="🤔 Тестировщик (QA) - кто это? Какие бывают типы тестирования?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `,
    images: `<div id="content__imageContainer">
      <img src="./img/1.jpg">
      <img src="./img/2.jpg">
      <img src="./img/3.jpg">
      <img src="./img/4.jpg">
      <img src="./img/5.jpg">
      <img src="./img/6.jpg">
      <button id="prevBtn">&lt;</button>
      <button id="nextBtn">&gt;</button>
    </div>`,
    content: `<p>&emsp;По профессии и по призванию – QA инженер. Имею дипломное образование, плюс никогда не заканчивающийся процесс самообразования и самосовершенствования.</p><p>&emsp;QA – это несомненно важный сотрудник для выпуска новых программных продуктов для конечных пользователей. Тестировщик отвечает за проверку приложений и постоянно ищет проблемы, чтобы убедиться в соответствии ПО всем стандартам.  Чтобы обнаружить ошибки и потенциальные проблемы, он проводит планирование и тестирование на разных этапах разработки. QA-инженер тесно взаимодействует с командой разработчиков, проводя тестирование и документирование багов, чтобы гарантировать его правильную работу перед релизом. Кроме того, QA-инженеры прогнозируют поведение пользователей и создают тестовые сценарии для проверки функциональности программного обеспечения. И, в конечном итоге, это важное связующее звено между менеджерами или пользователями приложений и разработчиками.</p>`,
  },
};

const mainPartContent = document.querySelector("#mainPart");
const btnPages = document.querySelector("#btnNavigation");
let currentPage = "main";

function renderContent() {
  console.log(   mainPartContent);
  mainPartContent.innerHTML = `
  <div class="content__name" id="title">
    ${dataForRender[currentPage].title.find((i) => i.mainTitle).subtilte}
  </div>
  <div class="content__container">
    <div class="content__text" id="text">
      ${dataForRender[currentPage].content}
    </div>
    <span class="content__subtitle">
      ${dataForRender[currentPage].title.find((i) => i.id === 2).subtilte}
    </span>
    ${dataForRender[currentPage].images}
    <span class="content__subtitle">
      ${dataForRender[currentPage].title.find((i) => i.id === 3).subtilte}
    </span>
    ${dataForRender[currentPage].video}
  </div>
  `;
}

function changePage(e) {
  if (e.target.id === "mainPageBtn") {
    currentPage = "main";
  } else {
    currentPage = "work";
  }
  
  renderContent();
}

btnPages.addEventListener("click", changePage);
document.addEventListener("DOMContentLoaded", function () {
  renderContent();

  const images = document.querySelectorAll("#content__imageContainer img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  
  function showImage(index, direction) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.opacity = 1; /* Делаем изображение видимым */
        image.style.display = "block";
      } else {
        image.style.opacity = 0; /* Прячем изображение */
        image.style.display = "none";
      }
    });

    // Применяем анимацию в зависимости от направления
    if (direction === "prev") {
      images[index].style.transform = "translateX(-100%)";
    } else {
      images[index].style.transform = "translateX(100%)";
    }

    // Запускаем анимацию
    requestAnimationFrame(() => {
      images[index].style.transform = "translateX(0)";
    });
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex, "prev");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex, "next");
  }

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);
  
  // Показываем первое изображение при загрузке страницы
  showImage(currentIndex);
});
