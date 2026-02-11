const mv = document.getElementById("mv");
const header = document.querySelector(".header");
const fadeGroups = document.querySelectorAll(".fade-group");

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

    /* =========================
       フェードグループ用
    ========================== */
    if (entry.target.classList.contains("fade-group") && entry.isIntersecting) {

      const items = entry.target.querySelectorAll(".fade-item");

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("is-visible");
        }, index * 150);
      });

      observer.unobserve(entry.target); // 1回だけ発火
    }

  });
}, {
  rootMargin: "-100px 0px 0px 0px",
  threshold: 0
});


/* =========================
   監視スタート
========================== */

observer.observe(mv);

fadeGroups.forEach(group => {
  observer.observe(group);
});
