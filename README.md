
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="CHAESOUL 日常服飾、情侶穿搭、質感飾品，找到你的日常風格。">
  <meta name="theme-color" content="#f7e7eb">
  <title>CHAESOUL | Wear Your Soul</title>

  <style>
    :root {
      --pink: #f3dfe5;
      --pink-dark: #e8c7d1;
      --cream: #fffaf8;
      --ink: #292426;
      --muted: #81767a;
      --line: #eee3e6;
      --white: #ffffff;
    }

    * { box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      background: var(--cream);
      color: var(--ink);
      font-family: Arial, "Noto Sans TC", sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }

    .announcement {
      padding: 10px 12px;
      text-align: center;
      background: var(--ink);
      color: white;
      font-size: 10px;
      letter-spacing: 2px;
    }

    header {
      padding: 20px 6%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      background: var(--cream);
    }

    .logo {
      font-size: 25px;
      font-weight: 800;
      letter-spacing: 5px;
      white-space: nowrap;
    }

    .logo small {
      display: block;
      margin-top: 5px;
      text-align: center;
      font-size: 9px;
      font-weight: 400;
      letter-spacing: 2px;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 12px;
    }

    nav a:hover { color: #ad7789; }

    .hero {
      min-height: 460px;
      padding: 65px 7%;
      display: flex;
      align-items: center;
      background:
        linear-gradient(
          90deg,
          rgba(255,250,248,.96) 0%,
          rgba(255,250,248,.76) 45%,
          rgba(255,250,248,.12) 100%
        ),
        url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85")
        center 42% / cover;
    }

    .hero-content { max-width: 480px; }

    .eyebrow {
      color: var(--muted);
      font-size: 10px;
      letter-spacing: 3px;
    }

    h1 {
      margin: 18px 0;
      font-size: clamp(36px, 6vw, 62px);
      line-height: 1.15;
      letter-spacing: -1px;
    }

    .hero p {
      color: #655b5f;
      font-size: 14px;
      line-height: 2;
    }

    .button {
      display: inline-block;
      padding: 14px 23px;
      border: 1px solid var(--ink);
      background: var(--ink);
      color: white;
      font-size: 11px;
      letter-spacing: 1px;
      text-align: center;
      transition: .2s;
    }

    .button:hover {
      background: #66535b;
      border-color: #66535b;
    }

    .button-light {
      background: transparent;
      color: var(--ink);
    }

    .button-light:hover {
      background: var(--pink);
      border-color: var(--pink);
      color: var(--ink);
    }

    .benefits {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      background: white;
      border-bottom: 1px solid var(--line);
    }

    .benefits div {
      padding: 20px 8px;
      text-align: center;
      font-size: 10px;
      line-height: 1.9;
      letter-spacing: 1px;
    }

    section { padding: 65px 6%; }

    .section-heading {
      margin-bottom: 32px;
      text-align: center;
    }

    .section-heading h2 {
      margin: 10px 0;
      font-size: 25px;
      letter-spacing: 2px;
    }

    .section-heading p {
      color: var(--muted);
      font-size: 12px;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
      max-width: 1100px;
      margin: auto;
    }

    .category { text-align: center; }

    .category img {
      aspect-ratio: 4 / 5;
      transition: opacity .25s;
    }

    .category:hover img { opacity: .82; }

    .category h3 {
      margin: 17px 0 5px;
      font-size: 15px;
    }

    .category p {
      margin: 0 0 15px;
      color: var(--muted);
      font-size: 10px;
      letter-spacing: 2px;
    }

    .category .button {
      width: 100%;
      padding: 12px 5px;
    }

    .featured { background: #f7ecef; }

    .feature-box {
      max-width: 950px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 40px;
    }

    .feature-box img { aspect-ratio: 4 / 3; }

    .feature-copy h2 {
      font-size: 32px;
      line-height: 1.3;
    }

    .feature-copy p {
      margin-bottom: 22px;
      color: #6e6267;
      font-size: 13px;
      line-height: 2;
    }

    .social {
      text-align: center;
      background: white;
    }

    .social h2 {
      margin: 12px 0;
      font-size: 26px;
      letter-spacing: 2px;
    }

    .social p {
      margin-bottom: 22px;
      color: var(--muted);
      font-size: 13px;
      line-height: 2;
    }

    footer {
      padding: 32px 15px;
      background: var(--ink);
      color: white;
      text-align: center;
    }

    footer .logo { font-size: 19px; }

    footer p {
      color: #d5cdd0;
      font-size: 10px;
      line-height: 1.9;
    }

    footer a { text-decoration: underline; }

    @media (max-width: 650px) {
      header {
        padding: 20px 5%;
        flex-direction: column;
        gap: 18px;
      }

      nav {
        justify-content: center;
        flex-wrap: wrap;
        gap: 17px;
      }

      .hero {
        min-height: 390px;
        padding: 45px 6%;
        background-position: 58% center;
      }

      .hero-content { max-width: 300px; }

      .hero p { font-size: 12px; }

      section { padding: 48px 5%; }

      .categories { gap: 10px; }

      .category h3 { font-size: 13px; }

      .category p {
        font-size: 9px;
        letter-spacing: 1px;
      }

      .category .button {
        padding: 11px 3px;
        font-size: 9px;
      }

      .feature-box {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .feature-copy h2 { font-size: 27px; }

      .benefits div { font-size: 9px; }
    }
  </style>
</head>

<body>
  <div class="announcement">
    CHAESOUL · FIND YOUR EVERYDAY STYLE
  </div>

  <header>
    <a class="logo" href="#home" aria-label="CHAESOUL 首頁">
      CHAESOUL
      <small>WEAR YOUR SOUL</small>
    </a>

    <nav aria-label="主要導覽">
      <a href="#home">首頁</a>
      <a href="#categories">商品分類</a>
      <a href="#featured">品牌選品</a>
      <a href="#contact">聯絡我們</a>
      <a href="https://www.instagram.com/chaesoul.ag?exln=MnBjOWMzeGY5eXY%3D&utm_source=qr"
         target="_blank" rel="noopener noreferrer">Instagram ↗</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <div class="eyebrow">YOUR STYLE, YOUR SOUL</div>

        <h1>Wear what<br>feels like you.</h1>

        <p>
          日常穿搭，也要有自己的風格。<br>
          從服飾到飾品，找到屬於你的日常質感。
        </p>

        <a class="button"
           href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
           target="_blank" rel="noopener noreferrer">
          SHOP NOW · 立即購物
        </a>
      </div>
    </section>

    <div class="benefits">
      <div>DAILY OUTFITS<br>日常穿搭</div>
      <div>SELECTED JEWELRY<br>質感飾品</div>
      <div>STYLE YOUR WAY<br>穿出自我</div>
    </div>

    <section id="categories">
      <div class="section-heading">
        <div class="eyebrow">FIND YOUR FAVORITE</div>
        <h2>SHOP BY CATEGORY</h2>
        <p>選擇你今天喜歡的風格</p>
      </div>

      <div class="categories">
        <article class="category">
          <a href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
             target="_blank" rel="noopener noreferrer"
             aria-label="前往 CHAESOUL 服飾賣場">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80"
              alt="日常服飾穿搭"
              loading="lazy">
            <h3>日常服飾</h3>
            <p>DAILY OUTFITS</p>
          </a>
          <a class="button"
             href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
             target="_blank" rel="noopener noreferrer">
            逛服飾賣場 ↗
          </a>
        </article>

        <article class="category">
          <a href="https://myship.7-11.com.tw/general/detail/GM2605078930506"
             target="_blank" rel="noopener noreferrer"
             aria-label="前往 CHAESOUL 飾品賣場">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
              alt="質感飾品"
              loading="lazy">
            <h3>質感飾品</h3>
            <p>DAILY JEWELRY</p>
          </a>
          <a class="button"
             href="https://myship.7-11.com.tw/general/detail/GM2605078930506"
             target="_blank" rel="noopener noreferrer">
            逛飾品賣場 ↗
          </a>
        </article>

        <article class="category">
          <a href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
             target="_blank" rel="noopener noreferrer"
             aria-label="前往 CHAESOUL 情侶穿搭賣場">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"
              alt="時尚穿搭靈感"
              loading="lazy">
            <h3>情侶穿搭</h3>
            <p>COUPLE LOOKS</p>
          </a>
          <a class="button"
             href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
             target="_blank" rel="noopener noreferrer">
            逛情侶裝賣場 ↗
          </a>
        </article>
      </div>
    </section>

    <section class="featured" id="featured">
      <div class="feature-box">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
          alt="CHAESOUL 日常穿搭風格"
          loading="lazy">

        <div class="feature-copy">
          <div class="eyebrow">CURATED FOR YOUR STYLE</div>
          <h2>Little details,<br>big difference.</h2>

          <p>
            不需要昂貴，也能穿出自己的質感。
            從日常單品到搭配細節，打造每天都喜歡的自己。
          </p>

          <a class="button"
             href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
             target="_blank" rel="noopener noreferrer">
            探索服飾 ↗
          </a>

          <a class="button button-light"
             href="https://myship.7-11.com.tw/general/detail/GM2605078930506"
             target="_blank" rel="noopener noreferrer">
            探索飾品 ↗
          </a>
        </div>
      </div>
    </section>

    <section class="social" id="contact">
      <div class="eyebrow">LET'S STAY CONNECTED</div>
      <h2>FOLLOW CHAESOUL</h2>

      <p>
        新品上架、穿搭分享與品牌活動<br>
        都在 Instagram 與你分享。
      </p>

      <a class="button"
         href="https://www.instagram.com/chaesoul.ag?exln=MnBjOWMzeGY5eXY%3D&utm_source=qr"
         target="_blank" rel="noopener noreferrer">
        FOLLOW OUR INSTAGRAM ↗
      </a>
    </section>
  </main>

  <footer>
    <div class="logo">CHAESOUL</div>
    <p>WEAR YOUR SOUL. FIND YOUR STYLE.</p>
    <p>
      <a href="https://myship.7-11.com.tw/general/detail/GM2608184838597"
         target="_blank" rel="noopener noreferrer">服飾賣場</a>
     　|　
      <a href="https://myship.7-11.com.tw/general/detail/GM2605078930506"
         target="_blank" rel="noopener noreferrer">飾品賣場</a>
     　|　
      <a href="https://www.instagram.com/chaesoul.ag?exln=MnBjOWMzeGY5eXY%3D&utm_source=qr"
         target="_blank" rel="noopener noreferrer">Instagram</a>
    </p>
    <p>© CHAESOUL. ALL RIGHTS RESERVED.</p>
  </footer>
</body>
</html>
