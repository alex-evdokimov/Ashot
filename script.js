const dataForRender = {
  main: {
    title: [
      {
        id: 1,
        subtitle: { ru: "Я Ашот Кузнецов", en: "I am Ashot Kuznetsov" },
        mainTitle: true,
      },
      {
        id: 2,
        subtitle: { ru: "Мои фотографии", en: "My photos" },
        mainTitle: false,
      },
      {
        id: 3,
        subtitle: {
          ru: "Интересные для меня видео",
          en: "Interesting videos for me",
        },
        mainTitle: false,
      },
    ],
    video: `<iframe width="750" height="480" src="https://www.youtube.com/embed/GALwhyDFBaQ" title="10 лучших аниме-сериалов для взрослых" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    content: {
      ru: `
        <p>
          &emsp;Я ТАКОЙ КЛАССНЫЙ. Этим хотелось бы и закончить. Но я все-таки расскажу о себе поподробнее.Меня зовут Ашот, мне 22 года. Я – человек с бесконечным воображением и неукротимым энтузиазмом. Мой ум похож на лабиринт, где каждый поворот приводит меня к новым и захватывающим открытиям. </p>
          <p>&emsp;Когда я просыпаюсь утром, идеи прыгают в моей голове как бананы на горке. Моя жизнь – это словно лабиринт мыслей и идей, который я безумно наслаждаюсь разгадывать. </p>
          <p>&emsp;Ум пытливый, прозорливый. Выносливость крепкая, реакция быстрая. Личность ответственная, пунктуальная. Уровень амбиций вызывает уважение, но не зашкаливает. Жизненное кредо: «Все, что делается, все к лучшему»! Философское мировоззрение: «События своей жизни мы формируем своими мыслеформами». Натура целеустремленная. В принятии важных решений не тороплюсь. К критике со стороны окружающих отношусь ровно – прислушиваюсь, анализирую.
        </p>`,
      en: `
        <p>
          &emsp;I AM SO COOL. I would like to finish with that. But I'll still tell you more about myself. My name is Ashot, I'm 22 years old. I am a person with infinite imagination and unstoppable enthusiasm. My mind is like a labyrinth, where every turn leads me to new and exciting discoveries. </p>
          <p>&emsp;When I wake up in the morning, ideas jump in my head like bananas on a slope. My life is like a labyrinth of thoughts and ideas that I immensely enjoy unraveling. </p>
          <p>&emsp;A curious and insightful mind. Strong endurance, quick reaction. Responsible and punctual personality. The level of ambition is respectable but not excessive. Life motto: "Everything that happens, happens for the better"! Philosophical worldview: "We shape the events of our life with our thought forms." Goal-oriented nature. I don't rush to make important decisions. I respond calmly to criticism from others – I listen and analyze.
        </p>`,
    },
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
      {
        id: 1,
        subtitle: { ru: "QA Инженер", en: "QA Engineer" },
        mainTitle: true,
      },
      {
        id: 2,
        subtitle: { ru: "Мои фотографии", en: "My photos" },
        mainTitle: false,
      },
      {
        id: 3,
        subtitle: {
          ru: "Интересные для меня видео",
          en: "Interesting videos for me",
        },
        mainTitle: false,
      },
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
    content: {
      ru: `<p>&emsp;По профессии и по призванию – QA инженер. Имею дипломное образование, плюс никогда не заканчивающийся процесс самообразования и самосовершенствования.</p><p>&emsp;QA – это несомненно важный сотрудник для выпуска новых программных продуктов для конечных пользователей. Тестировщик отвечает за проверку приложений и постоянно ищет проблемы, чтобы убедиться в соответствии ПО всем стандартам.  Чтобы обнаружить ошибки и потенциальные проблемы, он проводит планирование и тестирование на разных этапах разработки. QA-инженер тесно взаимодействует с командой разработчиков, проводя тестирование и документирование багов, чтобы гарантировать его правильную работу перед релизом. Кроме того, QA-инженеры прогнозируют поведение пользователей и создают тестовые сценарии для проверки функциональности программного обеспечения. И, в конечном итоге, это важное связующее звено между менеджерами или пользователями приложений и разработчиками.</p>`,
      en: `<p>&emsp;By profession and by vocation – QA engineer. I have a diploma, plus an ongoing process of self-education and self-improvement.</p><p>&emsp;QA is undoubtedly an important team member for releasing new software products to end users. A tester is responsible for checking applications and constantly finding issues to ensure compliance with software standards. To detect errors and potential problems, the QA engineer plans and tests at different stages of development. QA engineers closely interact with the development team, conducting testing and documenting bugs to ensure its proper functioning before release. In addition, QA engineers predict user behavior and create test scenarios to check the functionality of the software. And ultimately, they serve as a crucial link between application managers or users and developers.</p>`,
    },
  },
};

const navItems = document.querySelectorAll(".nav__item");
const mainPartContent = document.querySelector("#mainPart");
const btnPages = document.querySelector("#btnNavigation");
const headerСontainer = document.querySelector(".header__container");
const btnChangeLang = document.querySelector(".header__dropbtn");
const nameHeader = document.querySelector(".header__name");
let currentPage = "main";
let currentLang = "ru";

function renderContent() {
  mainPartContent.innerHTML = `
  <div class="content__name" id="title${
    dataForRender[currentPage].title.find((i) => i.mainTitle).id
  }">
    ${
      dataForRender[currentPage].title.find((i) => i.mainTitle)?.subtitle[
        currentLang
      ]
    }
  </div>
  <div class="content__container">
    <div class="content__text" id="text">
      ${dataForRender[currentPage].content[currentLang]}
    </div>
    <span class="content__subtitle" id="title${
      dataForRender[currentPage].title.find((i) => i.id === 2).id
    }">
      ${
        dataForRender[currentPage].title.find((i) => i.id === 2).subtitle[
          currentLang
        ]
      }
    </span>
    ${dataForRender[currentPage].images}
    <span class="content__subtitle" id="title${
      dataForRender[currentPage].title.find((i) => i.id === 3).id
    }">
      ${
        dataForRender[currentPage].title.find((i) => i.id === 3).subtitle[
          currentLang
        ]
      }
    </span>
    ${dataForRender[currentPage].video}
  </div>
  `;

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Найдите соответствующий заголовок по индексу
      const titleIndex = index + 1; // Индекс заголовка соответствует индексу элемента списка + 1
      const targetTitle = document.querySelector(`#title${titleIndex}`);

      // Прокрутите к найденному заголовку
      if (targetTitle) {
        targetTitle.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  dataForRender[currentPage].title.forEach((item, index) => {
    const itemElement = document.querySelector(`${"#item" + (index + 1)}`);
    console.log(`${"#item" + (index + 1)}`);
    itemElement.innerText = item.subtitle[currentLang];
  });
}

function changePage(e) {
  if (e.target.id === "mainPageBtn" && e.target.type === "button") {
    currentPage = "main";
  } else if (e.target.type === "button") {
    currentPage = "work";
  }

  renderContent();
  renderSlider();
}

function renderSlider() {
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
}

function changeLanguage(e) {
  if (e.target.id === "ru" && e.target.type === "button") {
    currentLang = "ru";
    btnChangeLang.innerText = "Русский язык";
    nameHeader.innerText = "Кузнецов Ашот";
  } else if (e.target.id === "en" && e.target.type === "button") {
    currentLang = "en";
    btnChangeLang.innerText = "English language";
    nameHeader.innerText = "Kuznetsov Ashot";
  }

  renderSlider();
}

btnPages.addEventListener("click", changePage);
headerСontainer.addEventListener("click", changeLanguage);
document.addEventListener("DOMContentLoaded", renderSlider);
