#!/bin/bash
cat << 'INNEREOF' > patch_footer.js
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newFooter = `    <!-- Footer -->
    <footer class="main-footer">
        <div class="container footer-container">
            <!-- Right Column: About -->
            <div class="footer-col about-col">
                <div class="footer-logo">
                    <!-- Using the white logo for dark background -->
                    <img src="assets/lOGO White.png" alt="كنوز الغربية">
                </div>
                <p class="about-text">
                    "كنوز الغربية" منصة صحافة بيانات متخصصة في رصد وتحليل الواقع الصناعي بمحافظة الغربية؛ تقدم قراءة رقمية دقيقة لسوق العمل وحركة الإنتاج، ضمن مشروع تخرج الفرقة الرابعة (شعبة الصحافة) بقسم الإعلام - كلية الآداب، جامعة طنطا.. دفعة 2026.
                </p>
            </div>

            <!-- Middle Column: Quick Links -->
            <div class="footer-col links-col">
                <h3>روابط سريعة</h3>
                <div class="footer-links-wrapper">
                    <ul class="footer-links right-links">
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#">أخبار.</a></li>
                        <li><a href="#">التقارير</a></li>
                    </ul>
                    <ul class="footer-links left-links">
                        <li><a href="#">إنتاج واستثمار.</a></li>
                        <li><a href="#">سوق العمل.</a></li>
                        <li><a href="#">دليل الأسعار</a></li>
                    </ul>
                </div>
            </div>

            <!-- Left Column: Contact -->
            <div class="footer-col contact-col">
                <h3>تواصل معنا</h3>
                <div class="footer-socials">
                    <a href="#" class="f-social instagram"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style="width: 32px; height: 32px;"></a>
                    <a href="#" class="f-social facebook" style="background: #1877F2; color: white; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; text-decoration: none; font-size: 18px;"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="f-social twitter" style="background: #1DA1F2; color: white; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; text-decoration: none; font-size: 18px;"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div class="contact-info">
                    <p class="contact-email"><i class="fa-regular fa-envelope"></i> info@datanews.com</p>
                    <p class="location-text">محافظة الغربية - طنطا. <span class="pin-icon" style="color: #E21B1B;"><i class="fa-solid fa-location-dot"></i></span></p>
                </div>
            </div>
        </div>
    </footer>`;

html = html.replace(/<!-- Footer -->[\s\S]*?<\/footer>/, newFooter);
fs.writeFileSync('index.html', html);
INNEREOF
node patch_footer.js
