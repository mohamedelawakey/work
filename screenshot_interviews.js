const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 1024 }
  });

  const filePath = path.join(process.cwd(), 'interviews.html');
  await page.goto(`file://${filePath}`);

  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'interviews_screenshot.png', fullPage: true });
  await browser.close();
})();
