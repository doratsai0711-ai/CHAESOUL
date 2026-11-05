
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  // 防止同一個輪播重複初始化
  if (carousel.dataset.initialized === "true") return;
  carousel.dataset.initialized = "true";

  const images = Array.from(
    carousel.querySelectorAll(".carousel-image")
  );

  const dotsContainer = carousel.querySelector(".carousel-dots");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  if (!images.length || !dotsContainer || !prev || !next) return;

  let current = 0;
  let timer = null;
  let touchStartX = 0;

  // 建立圖片切換圓點
  const dots = images.map((_, i) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `切換至第 ${i + 1} 張圖片`);

    dot.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      show(i);
      restart();
    });

    dotsContainer.appendChild(dot);
    return dot;
  });

  // 切換圖片
  function show(i) {
    current = (i + images.length) % images.length;

    images.forEach((img, n) => {
      const active = n === current;

      img.classList.toggle("active", active);
      img.setAttribute("aria-hidden", active ? "false" : "true");
    });

    dots.forEach((dot, n) => {
      const active = n === current;

      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  // 停止輪播
  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // 啟動輪播
  function restart() {
    stop();

    if (document.hidden || images.length <= 1) return;

    timer = setInterval(() => {
      show(current + 1);
    }, 3500);
  }

  // 上一張
  prev.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    show(current - 1);
    restart();
  });

  // 下一張
  next.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    show(current + 1);
    restart();
  });

  // 滑鼠移入暫停
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", restart);

  // 手機觸控開始
  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );

  // 手機左右滑動
  carousel.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;

      if (Math.abs(diff) > 40) {
        show(current + (diff < 0 ? 1 : -1));
        restart();
      }
    },
    { passive: true }
  );

  // 切換瀏覽器分頁時暫停
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      restart();
    }
  });

  // 初始化
  show(0);
  restart();
});
