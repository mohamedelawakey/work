const headerHTML = `
    <header class="header">
      <div class="container header-container">
        <div class="logo-area">
          <img src="assets/Logo-removebg.png" alt="كنوز الغربية" class="logo" />
          <div class="datetime">
            <span class="day">الثلاثاء</span>
            <span class="date">3/30/2026</span>
            <span class="time">09:30 PM</span>
          </div>
        </div>

        <nav class="main-nav">
          <ul>
            <li><a href="index.html" id="nav-home">الرئيسية</a></li>
            <li><a href="investigations.html" id="nav-investigations">تحقيقات</a></li>
            <li><a href="reports.html" id="nav-reports">تقارير</a></li>
            <li><a href="news.html" id="nav-news">أخبار</a></li>
            <li><a href="interviews.html" id="nav-interviews">حوارات</a></li>
            <li><a href="problems.html" id="nav-problems">أبرز المشكلات</a></li>
            <li><a href="about.html" id="nav-about">من نحن..؟</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="#" class="search-icon"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></a>
          <div class="social-icons">
            <a href="#" class="social-icon twitter"
              ><i class="fa-brands fa-twitter"></i
            ></a>
            <a href="#" class="social-icon facebook"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="#" class="social-icon instagram"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </header>
`;

const footerHTML = `
    <footer class="main-footer">
      <div class="container footer-container">
        <!-- Right Column: About (RTL: Right) -->
        <div class="footer-col about-col">
          <div class="footer-logo">
            <img src="assets/lOGO White.png" alt="كنوز الغربية" />
          </div>
          <p class="about-text">
            "كنوز الغربية" منصة صحافة بيانات متخصصة في رصد وتحليل الواقع الصناعي
            بمحافظة الغربية؛ تقدم قراءة رقمية دقيقة لسوق العمل وحركة الإنتاج،
            ضمن مشروع تخرج الفرقة الرابعة (شعبة الصحافة) بقسم الإعلام - كلية
            الآداب، جامعة طنطا.. دفعة 2026.
          </p>
        </div>

        <!-- Middle Column: Quick Links (RTL: Middle) -->
        <div class="footer-col links-col">
          <h3>روابط سريعة</h3>
          <div class="footer-links-wrapper">
            <ul class="footer-links right-links">
              <li><a href="index.html">الرئيسية</a></li>
              <li><a href="news.html">أخبار.</a></li>
              <li><a href="reports.html">التقارير</a></li>
            </ul>
            <ul class="footer-links left-links">
              <li><a href="#">إنتاج واستثمار.</a></li>
              <li><a href="#">سوق العمل.</a></li>
              <li><a href="#">دليل الأسعار</a></li>
            </ul>
          </div>
        </div>

        <!-- Left Column: Contact (RTL: Left) -->
        <div class="footer-col contact-col">
          <h3>تواصل معنا</h3>
          <div class="footer-socials">
            <a href="#" class="f-social twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="f-social facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="f-social instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="contact-info">
            <p class="contact-email">
              <i class="fa-regular fa-envelope"></i>
              <span>info@datanews.com</span>
            </p>
            <p class="location-text">
              <span>محافظة الغربية - طنطا.</span>
              <span class="pin-icon"><i class="fa-solid fa-location-dot"></i></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
`;

function renderComponents(activeNavId) {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    }

    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }

    if (activeNavId) {
        const activeLink = document.getElementById(activeNavId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}
