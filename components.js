const headerHTML = `
    <header class="header">
      <div class="container header-container">
        <a href="index.html" class="logo-area">
          <img src="assets/Logo-removebg.png" alt="كنوز الغربية" class="logo" />
        </a>

        <button class="hamburger-btn" id="hamburger-btn" aria-label="فتح القائمة">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="main-nav" id="main-nav">
          <ul>
            <li><a href="index.html" id="nav-home">الرئيسية</a></li>
            <li><a href="investigations.html" id="nav-investigations">تحقيقات</a></li>
            <li><a href="reports.html" id="nav-reports">تقارير</a></li>
            <li><a href="news.html" id="nav-news">أخبار</a></li>
            <li><a href="interviews.html" id="nav-interviews">حوارات</a></li>
            <li><a href="about.html" id="nav-about">من نحن..؟</a></li>
          </ul>
        </nav>

        <div class="header-actions">
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
          <a href="index.html" class="footer-logo">
            <img src="assets/lOGO White.png" alt="كنوز الغربية" />
          </a>
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
              <li><a href="interviews.html">حوارات</a></li>
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

const sidebarArticles = [
  {
    title: "الصناعات الوطنية بين عراقة الماضي وتحديات التطوير: حوار حول مستقبل الغزل والنسيج بالمحلة الكبرى",
    link: "interview_mahalla_textile.html",
    img: "imgs/126f668dfdb5d612955e59fdcd54b02bffb4f0da.png",
    type: "حوار"
  },
  {
    title: "أحمد الصفتاوي لـ(كنوز الغربية ): شبشير الحصة تنتج 70% من عسل مصر.. والمناخ أكبر تحدياتنا.",
    link: "interview_honey.html",
    img: "imgs/c46cd8d77a957fad05f31f32c6d7fc56de10a404.png",
    type: "حوار"
  },
  {
    title: "الكتان في شبراملس ..حكايه رزق مهدده بين الحرائق وغياب التصنيع",
    link: "interview_flax.html",
    img: "imgs/flax_industry.png",
    type: "حوار"
  },
  {
    title: "قلعة الصناعة تستعيد بريقها.. \"غزل المحلة\" من حلم \"طلعت حرب\" إلى أكبر مصنع في العالم.",
    link: "report_textile_factory.html",
    img: "imgs/textile_factory.png",
    type: "تقارير"
  },
  {
    title: "نبض \"المحلة الكبرى\".. ملحمة إعادة إحياء قلعة الصناعة المصرية",
    link: "investigation_mahalla_rebuild.html",
    img: "imgs/126f668dfdb5d612955e59fdcd54b02bffb4f0da.png",
    type: "تحقيق"
  },
  {
    title: "من السحابة السوداء إلى الوقود البديل.. كفر ميت الحارون تعيد تدوير الإطارات بين إنقاذ البيئة ومخاطر المهنة",
    link: "investigation_tires_recycling.html",
    img: "imgs/image copy 5.png",
    type: "تحقيق"
  },
  {
    title: "ﺍﻟﻴﺎﺳﻤﻴﻦ ﻓﻲ ﺷﺒﺮﺍ ﺑﻠﻮﻟﺔ… \"ﺫﻫﺐ ﺃﺑﻴﺾ\" ﻳﺼُﺪﺭَّ ﻟﻠﻌﺎﻟﻢ ﻭﻋﺮﻕ ﻻ ﻳﻨُﺼﻒ ﻓﻲ ﺍﻟﺤﻘﻮﻝ .",
    link: "report_jasmine.html",
    img: "imgs/b0925c6e2688fbc6aec21b7bff5aa060e94e0842(1).png",
    type: "تقارير"
  },
  {
    title: "زيوت كفر الزيات\".. قلعة \"التموين\" التي تغذي بيوت المصريين وصراع البقاء في سوق المنافسة",
    link: "report_honey_factory.html",
    img: "imgs/9f4cf70d63fd51fadc2b8d40be11d757fca4d7bf.png",
    type: "تقارير"
  },
  {
    title: "\"رحيق الكفاح\".. أسرار وتحديات صناعة العسل في الريف المصري",
    link: "report_honey.html",
    img: "imgs/honey_main.png",
    type: "تحقيق"
  },
  {
    title: "صناعة الجلود في \"الحداد\".. إرث حرفي يصارع البقاء",
    link: "report_bags.html",
    img: "imgs/leather_main.png",
    type: "تحقيق"
  },
  {
    title: "وراء الورش.. رحلة \"النشاره\"من مخلفات إلى مصدر رزق في كتامة الغابة",
    link: "report_furniture_craft.html",
    img: "imgs/sawdust_main.png",
    type: "تحقيق"
  },
  {
    title: "بين مخاطر المهنة وغياب الحماية.. عمال إعادة تدوير الكاوتش في كفر ميت الحارون يواجهون تحديات العمل",
    link: "report_tires.html",
    img: "imgs/43948d12749d1b419834e70614de65a1d6c06ecc(1).png",
    type: "تقارير"
  },
  {
    title: "بين فرص العمل ومخاوف التأثيرات.. لماذا تثير مصانع الأسمدة في كفر الزيات تساؤلات",
    link: "report_factory.html",
    img: "imgs/fertilizer_main.png",
    type: "تحقيق"
  },
  {
    title: "على حافة الاختفاء.. كيف تطيح الأقفاص البلاستيكية بحرفة الجريد في شبرا النملة؟",
    link: "report_palm.html",
    img: "imgs/palm_peeling.png",
    type: "تحقيق"
  },
  {
    title: "الكتان في شبراملس.. حرفة الأجداد بين المعاناة وغياب التطور",
    link: "investigation_flax_heritage.html",
    img: "imgs/flax_harvest.png",
    type: "تحقيق"
  },
  {
    title: "زراعة وصناعة الكتان في شبراملس: الواقع والتحديات",
    link: "investigation_flax.html",
    img: "imgs/flax_main.jpg",
    type: "تقارير"
  },
  {
    title: "بين البقاء والتراجع.. صناعة الأثاث في كتامة الغابة تواجه تحديات العصر",
    link: "investigation_furniture.html",
    img: "imgs/furniture_workshop.png",
    type: "تقارير"
  },
  {
    title: "بدائل المستورد والقيمة الاقتصادية لتدوير الكاوتش",
    link: "report_tires_recycling.html",
    img: "imgs/tires_recycling.png",
    type: "تقارير"
  },
  {
    title: "ارتفاع تكاليف الإنتاج يضع صناعة الفخار بالفرستق تحت الضغط",
    link: "report_pottery.html",
    img: "imgs/pottery_industry.png",
    type: "تقارير"
  },
  {
    title: "بين الطين والنار.. مخاطر مهنة الفخار تهدد حياة العاملين",
    link: "report_pottery_craft.html",
    img: "imgs/pottery_risk.png",
    type: "تحقيق"
  },
  {
    title: "مراحل الإنتاج ودورة تجهيز مصانع الفخار بقرية الفرستق",
    link: "report_pottery_production.html",
    img: "imgs/pottery_production.png",
    type: "تقارير"
  },
  {
    title: "الحداد.. قرية لا تنام كيف تحوّلت بيوت الغربية إلى مصانع شنط؟",
    link: "report_hadad_village.html",
    img: "imgs/3ec950cab9da3afd8db068efebf4288c56ec3295(1).png",
    type: "تقارير"
  },
  {
    title: "العسل الطبيعي بين الفوائد الصحية ومخاطر الغش التجاري",
    link: "report_honey_health.html",
    img: "imgs/honey_factory.png",
    type: "تقارير"
  },
  {
    title: "على طريق بنوفر بكفر الزيات.. مصنع الأسمدة يواصل التوسع والإنتاج وسط حركة تشغيل مستمرة",
    link: "report_banoufar_factory.html",
    img: "imgs/factory_main.png",
    type: "تقارير"
  },
  {
    title: "حرفة تصمد بصعوبة.. الجريد في شبرا النملة بين ضغط التكاليف وتراجع العمالة",
    link: "report_palm_craft.html",
    img: "imgs/palm_chair.png",
    type: "تقارير"
  },
  {
    title: "العسل الطبيعي بين الجودة والإنتاج",
    link: "interview_honey_company.html",
    img: "imgs/5bf480fab2c02b890141ca450ee42c7a0d99701f.png",
    type: "تقارير"
  },
  {
    title: "أسرار من قلب الورشة.. رحلة الفخار من خامات أسوان إلى الأسواق",
    link: "report_pottery_secrets.html",
    img: "imgs/f422b83f4e2e325fb479d9ab422c3e3a5289f57e.png",
    type: "تقارير"
  },
  {
    title: "الصناعات الوطنية بين عراقة الماضي وتحديات التطوير: حوار حول مستقبل الغزل والنسيج بالمحلة الكبرى",
    link: "interview_mahalla_textile.html",
    img: "imgs/126f668dfdb5d612955e59fdcd54b02bffb4f0da.png",
    type: "حوار"
  },
  {
    title: "قرية الأثاث في الغربية.. حوار مع نجّار يكشف أسرار صناعة تتوارثها الأجيال",
    link: "interview_furniture_village.html",
    img: "imgs/78c1dbbce508c5118f63cfba92dd45f7b072e6b4.png",
    type: "حوار"
  },
  {
    title: "قلاع كفر الزيات الصناعية: قراءة في مستقبل صناعة الزيوت والصابون والتحديات الاقتصادية الراهنة",
    link: "interview_oils_factory.html",
    img: "imgs/9f4cf70d63fd51fadc2b8d40be11d757fca4d7bf.png",
    type: "حوار"
  },
  {
    title: "البطالة في كفر ميت الحارون بين فرص الصناعات المحلية وتحديات سوق",
    link: "interview_unemployment.html",
    img: "imgs/93dfe8e106705ecd8b95b8f7aab54adf2e4a09b8.png",
    type: "حوار"
  },
  {
    title: "أحمد الصفتاوي لـ(كنوز الغربية ): شبشير الحصة تنتج 70% من عسل مصر.. والمناخ أكبر تحدياتنا.",
    link: "interview_honey.html",
    img: "imgs/c46cd8d77a957fad05f31f32c6d7fc56de10a404.png",
    type: "حوار"
  },
  {
    title: "فرص العمل والتنمية الصناعية في كفر الزيات\".. حوار مع الأستاذ الدكتور عادل عبد المنعم المسدي",
    link: "interview_kafr_elzayat_development.html",
    img: "imgs/fa68d739a7f4174db1755edcfa73806b2d7d1c8c.png",
    type: "حوار"
  },
  {
    title: "من الخشب إلى البلاستيك.. تاجر خضار بسوق المحلة يكشف أسباب اختفاء الأقفاص التقليدية",
    link: "interview_vegetable_merchant.html",
    img: "imgs/palm_expert.png",
    type: "حوار"
  },
  {
    title: "الفخار بين الازدهار والاندثار.. أحمد مصطفى يروي حكاية المهنة من قلب الفرستق",
    link: "interview_pottery_alferesteq.html",
    img: "imgs/bc9315d0c422a0c43e1a1d0481d43fa18f48c30c.png",
    type: "حوار"
  },
  {
    title: "ﺑﻨﺒﺪﺃ ﻣﻦ 3 ﺍﻟﻔﺠﺮ… ﻋﺎﻣﻠﺔ ﻳﺎﺳﻤﻴﻦ ﻓﻲ ﺷﺒﺮﺍ ﺑﻠﻮﻟﺔ ﺗﻜﺸﻒ ﻛﻮﺍﻟﻴﺲ ﻋﻄﺮ ﺍﻟﻌﺎﻟﻢ",
    link: "interview_jasmine_worker.html",
    img: "imgs/3a37e863f33edd8c02e86d7d4d9056c77683ac08.png",
    type: "حوار"
  },
  {
    title: "من وهج النار إلى شبح البطالة",
    link: "interview_hadad_bags.html",
    img: "imgs/image copy 7.png",
    type: "حوار"
  },
  {
    title: "عسل النحل ... صناعه تقليديه تواجه تحديات العصر",
    link: "interview_honey_tradition.html",
    img: "imgs/image copy 2.png",
    type: "حوار"
  },
  {
    title: "\"من الخشب إلى البلاستيك\".. سر اختفاء \"الأقفاص التقليدية\" من أسواق المحلة",
    link: "report_vegetable_cages.html",
    img: "imgs/6d057ded605c140c6975a7c8a2d67083014a1d8e.png",
    type: "تقرير"
  },
  {
    title: "\"قرية الحداد\".. كيف تحولت بيوت الغربية إلى قلعة لصناعة الشنط الحريمي؟",
    link: "report_hadad_bags.html",
    img: "imgs/3ec950cab9da3afd8db068efebf4288c56ec3295(1).png",
    type: "تقرير"
  },
  {
    title: "\"الذهب الأخضر\" في شبراملس.. حرفة الأجداد تواجه تحديات البقاء",
    link: "report_shabramalas_flax.html",
    img: "imgs/flax_harvest.png",
    type: "تقرير"
  },
  {
    title: "ارتفاع تكاليف الإنتاج يضع صناعة الفخار بالفرستق تحت الضغط",
    link: "report_pottery_costs.html",
    img: "imgs/4d9a29cfe3c0cadd432ce97e4ebff6694784f656(2).png",
    type: "تقرير"
  },
  {
    title: "خلف رغوة الصابون.. حكاية عمال يقاومون الزمن في مصنع كفر الزيات",
    link: "report_soap_factory.html",
    img: "imgs/soap_main.png",
    type: "تحقيق"
  },
  {
    title: "بين المناحل و مصانع العسل ..مخاطر مهنه انتاج العسل تهدد حياة النحل",
    link: "investigation_honey_risks.html",
    img: "imgs/honey_main.png",
    type: "تحقيق"
  }
];

function renderSidebar() {
    const listContainer = document.querySelector('.sidebar-cards-list');
    if (!listContainer) return;

    let htmlContent = '';
    sidebarArticles.forEach(item => {
        htmlContent += `
        <div class="sidebar-card">
          <img src="${item.img}" alt="${item.title}" class="sidebar-card-image" />
          <div class="sidebar-card-content">
            <h3 class="sidebar-card-title"><a href="${item.link}">${item.title}</a></h3>
            <div class="sidebar-card-meta"><i class="fa-regular fa-clock"></i> ${item.type} • اليوم</div>
          </div>
        </div>
        `;
    });
    listContainer.innerHTML = htmlContent;
}

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

    // Render the dynamic sidebar list with all articles excluding the active one!
    renderSidebar();

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mainNav.classList.toggle('open');
        });
        // Close menu when a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mainNav.classList.remove('open');
            });
        });
    }
}
