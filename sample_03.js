const text = document.querySelector(".js-split");
const logo = document.querySelector(".mv-logo");
const mv = document.getElementById("mv");
const header = document.querySelector(".header");

const chars = text.textContent.split("");
text.textContent = "";

chars.forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.05}s`;
  text.appendChild(span);
});

// 全部表示されたあとに動かす
setTimeout(() => {
  text.classList.add("is-move");
  logo.classList.add("is-show");
}, chars.length * 50 + 800);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    /* =========================
       MV用（ロゴ表示制御）
    ========================== */
    if (entry.target.id === "mv") {
      if (!entry.isIntersecting) {
        header.classList.add("is-show");
      } else {
        header.classList.remove("is-show");
      }
    }
  });
}, {
  rootMargin: "-100px 0px 0px 0px",
  threshold: 0
});

observer.observe(mv);


window.addEventListener('scroll', function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const item = document.querySelectorAll(".fade-item");

  item.forEach(function (item) {
    // boxまでの高さを取得
    const distanceToBox = item.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if (scroll + windowHeight > distanceToBox) {
      item.classList.add('is-visible');
    }
  });
});