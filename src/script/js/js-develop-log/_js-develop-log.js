
const header = document.querySelector("#header");
const content = document.querySelector("#content");
const footer = document.querySelector("#footer");

header.innerHTML =
  `
            <h1>打字練習網站</h1>
        <nav>
          <ul>
            <li><a href="./index.html" id="home">練習區</a></li>
            <li><a href="" id="contest">競賽區</a></li>
            <li><a href="">常見問題</a></li>
            <li><a href="">論壇</a></li>
            <li><a href="">登入</a></li>
          </ul>
        </nav>
    `
content.innerHTML =
  `<div id="log-main-part"></div>`
footer.innerHTML =
  `
    <!-- *捲動到最上面 -->
        <img
          id="to-top"
          src="../../lib/SVG-Loaders-master/svg-loaders/puff.svg"
          width="40"
          alt=""
        />

        <!-- *左側頁尾資訊 -->
        <div id="footer-infomation-left">
          <div id="blog" class="footer-infomation footer-infomation-left">
            <a href="">部落格</a>
          </div>
          <div id="learning" class="footer-infomation footer-infomation-left">
            <a href="">學習歷程</a>
          </div>
          <div id="contact" class="footer-infomation footer-infomation-left">
            <a href="">聯絡資訊</a>
          </div>
        </div>
        <!-- *右側頁尾資訊 -->
        <div id="footer-infomation-right">
          <div id="copyright" class="footer-infomation footer-infomation-right">
            <a href="">&copy; 版權資訊</a>
          </div>
          <div
            id="develop-log"
            class="footer-infomation footer-infomation-right"
          >
            <a href="./develop-log.html">開發日誌</a>
          </div>
          <div
            id="developers"
            class="footer-infomation footer-infomation-right"
          >
            <a href="">開發者</a>
          </div>
        </div>
    `