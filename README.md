
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="CHAESOUL 日常服飾、情侶穿搭與質感飾品。">
  <title>CHAESOUL | Wear Your Soul</title>
  <style>
    :root {
      --pink: #f3dfe5;
      --cream: #fffaf8;
      --ink: #282426;
      --muted: #81767a;
      --silver: #d8d5d7;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--cream);
      color: var(--ink);
      font-family: Arial, "Noto Sans TC", sans-serif;
    }
    a { color: inherit; text-decoration: none; }
    img { display: block; width: 100%; object-fit: cover; }

    .announcement {
      padding: 10px;
      text-align: center;
      background: var(--ink);
      color: white;
      font-size: 11px;
      letter-spacing: 1.5px;
    }
    header {
      padding: 24px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      background: var(--cream);
    }
    .logo {
      font-size: 25px;
      font-weight: 800;
      letter-spacing: 5px;
    }
    .logo small {
      display: block;
      margin-top: 5px;
      font-size: 9px;
      font-weight: 400;
      letter-spacing: 2px;
      text-align: center;
    }
    nav {
      display: flex;
      gap: 25px;
      font-size: 12px;
    }
    nav a:hover { opacity: .55; }

    .hero {
      min-height: 430px;
      padding: 65px 7%;
      display: flex;
      align-items: center;
      background:
        linear-gradient(90deg, rgba(255,250,248,.97), rgba(255,250,248,.4)),
        url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85")
        center 42% / cover;
    }
    .hero-content { max-width: 480px; }
    .eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      color: var(--muted);
    }
    h1 {
      margin: 18px 0;
      font-size: clamp(35px, 6vw, 62px);
      line-height: 1.15;
      letter-spacing: -1px;
    }
    .hero p {
      font-size: 14px;
      line-height: 2;
      color: #655b5f;
    }
    .button {
      display: inline-block;
      margin-top: 18px;
      padding: 14px 25px;
      background: var(--ink);
      color: white;
      font-size: 12px;
      letter-spacing: 1px;
      transition: .2s;
    }
    .button:hover { background: #69545d; }

    .benefits {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-bottom: 1px solid #eee5e6;
      background: white;
    }
    .benefits div {
      padding: 20px 8px;
      text-align: center;
      font-size: 11px;
      letter-spacing: 1px;
    }

    section { padding: 65px 6%; }
    .section-heading { text-align: center; margin-bottom: 30px; }
    .section-heading h2 {
      margin: 8px 0;
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
    }
    .category { text-align: center; }
    .category img {
      aspect-ratio: 4 / 5;
      transition: .3s;
    }
    .category:hover img { opacity: .85; }
    .category h3 {
      margin: 16px 0 5px;
      font-size: 15px;
    }
    .category p {
      margin: 0;
      font-size: 10px;
      color: var(--muted);
      letter-spacing: 2px;
    }

    .featured {
      background: #f7ecef;
    }
    .feature-box {
      max-width: 900px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 35px;
    }
    .feature-box img { aspect-ratio: 4 / 3; }
    .feature-copy h2 {
      font-size: 30px;
      letter-spacing: 1px;
    }
    .feature-copy p {
      color: #6e6267;
      font-size: 13px;
      line-height: 2;
    }

    .social {
      text-align: center;
      background: white;
    }
    .social p {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.9;
    }
    footer {
      padding: 32px 15px;
      text-align: center;
      background: var(--ink);
      color: white;
    }
    footer .logo { font-size: 19px; }
    footer p { font-size: 10px; color: #d5cdd0; }

    @media (max-width: 600px) {
      header {
        padding: 20px 5%;
        flex-direction: column;
        gap: 18px;
      }
      nav { gap: 18px; }
      .hero { min-height: 390px; padding: 45px 7%; }
      .hero p { max-width: 290px; }
      section { padding: 48px 5%; }
      .categories { gap: 10px; }
      .category h3 { font-size: 13px; }
      .feature-box {
        grid-template-columns: 1fr;
        gap: 18px;
      }
      .feature-copy h2 { font-size: 25px; }
      .benefits div { font-size: 10px; }
    }
  </style>
</head>
<body>

  <div class="announcement">
    CHAESOUL — FIND YOUR EVERYDAY STYLE
  </div>

  <header>
    <a class="logo" href="#">
      CHAESOUL
      <small>WEAR YOUR SOUL</small>
    </a>
    <nav>
      <a href="#home">首頁</a>
      <a href="#categories">商品分類</a>
      <a href="#featured">品牌選品</a>
      <a href="#contact">聯絡我們</a>
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
        <a class="button" href="#categories">EXPLORE COLLECTION</a>
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
        <a class="category" href="#contact">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80"
            alt="日常服飾穿搭">
          <h3>日常服飾</h3>
          <p>DAILY OUTFITS</p>
        </a>

        <a class="category" href="#contact">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
            alt="質感飾品">
          <h3>質感飾品</h3>
          <p>DAILY JEWELRY</p>
        </a>

        <a class="category" href="#contact">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"
            alt="時尚穿搭靈感">
          <h3>情侶穿搭</h3>
          <p>COUPLE LOOKS</p>
        </a>
      </div>
    </section>

    <section class="featured" id="featured">
      <div class="feature-box">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
          alt="CHAESOUL 日常穿搭風格">
        <div class="feature-copy">
          <div class="eyebrow">CURATED FOR YOUR STYLE</div>
          <h2>Little details,<br>big difference.</h2>
          <p>
            不需要昂貴，也能穿出自己的質感。
            從日常單品到搭配細節，打造每天都喜歡的自己。
          </p>
          <a class="button" href="#categories">DISCOVER MORE</a>
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
         href="https://www.instagram.com/"
         target="_blank"
         rel="noopener noreferrer">
        FOLLOW OUR INSTAGRAM
      </a>
    </section>
  </main>

  <footer>
    <div class="logo">CHAESOUL</div>
    <p>WEAR YOUR SOUL. FIND YOUR STYLE.</p>
    <p>© CHAESOUL. ALL RIGHTS RESERVED.</p>
  </footer>

</body>
</html>
