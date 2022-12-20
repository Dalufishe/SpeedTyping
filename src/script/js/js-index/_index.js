
const header = document.querySelector("#header");
const content = document.querySelector("#content");
const footer = document.querySelector("#footer");

window.addEventListener("unload", () => { window.scrollTo(0, 0); });
window.thisWeb = {
  time: 5,
  lineHeight: "1.3em",
  article: `    Spider silk is one of nature's wonder materials, more flexible than
nylon, thinner than a human hair, and, for its weight, stronger than
steel. Webs and nests are spun from this incredible natural protein
and spiders use thin threads to glide through the air and escape from
predators. Now science is looking to exploit silk's properties as a
way to deliver medicines and heal our bodies.
 American households are among the most energy-hungry on the planet,
consuming on average around 11,000 kilowatt-hours (kWh) of energy each
year. Electric water heaters alone use between 380-500 kWh per month.
So developing generation from natural tidal movement would appear to be
one of the best ways to meet demand and reduce greenhouse gas emissions.
 Desalination is one of the most widespread clean water technologies
on the planet and its use is essential for dry regions with poor-quality
fresh water supply. So a new low-cost solar-powered desalination
device could be the ideal solution to make water purify-cation more
widely affordable and environmentally friendly.
 No matter what, it's not much of a threat to us surface-bound folks.
We have our trusty atmosphere to protect us against any deadly cosmic
radiation. But orbiting satellites can run into issues without our
magnetic field in place to protect them: already the South Atlantic
Anomaly is a place best avoided, as the reduced magnetic protection
causes some glitches in the delicate hardware of our satellites.
 Vertical farming is a hugely promising agricultural technique that
aims to produce more food to meet the growing population on our finite
planet. Techniques include growing in vertical frames or even in
high-rise farms, saving on precious ground space, while moving farms
into urban areas, and producing nutritious crops without topsoil.
 When you zoom out to the big picture (and I mean 'big' here, as in
really big), all the problems and conflicts that have beset humanity
ever since there was a humanity are almost laughably parochial. From
the perspective of orbiting astronauts everything just dissolves.
National borders are revealed to be nothing more than imaginary lines
on a map. Majestic cities are reduced to smudges of grey. Great
monuments of heroes and deeds and barely discernible.
 Using a multi-layered vertical array of evaporators and condensers
allows each unit to operate like a solar still, creating pure distilled
water as vapor moves upwards through each layer. As vapor condenses
on a surface it releases heat. Each stage then reuses that heat in the
next evaporation process instead of wasting it.
 Climate change is cited for the introduction of West Nile virus to
the US. West Nile is spread by the mosquito species Culex and finds a
natural reservoir in birds. People become infected by mosquito bites
and that can cause damage to the brain and central nervous system, or
even death. Research shows that Culex population growth is linked to
higher temperatures, high humidity and drought. Approximately seven
million people were infected in the US between 1999 and 2016.`,
};

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
        `;
content.innerHTML =
  `
        <!-- *打字文章區 -->
        <div id="article">
          <div id="article-option-bar">
          <div id="article-option-bar-type" class="article-option">類型</div>  
          <div id="article-option-bar-article" class="article-option">
              文章
            </div>
            <div id="article-option-bar-time" class="article-option">時間</div>
            <div
              id="looking-for-help-article-settings"
              class="looking-for-help"
            >
              [ ? ]
            </div>
          </div>
          <div id="article-main-part"></div>
        </div>
        <!-- *打字輸入區 -->
        <div id="typing">
          <textarea id="typing-main-part" placeholder="> 打字輸入區...\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束"></textarea>
          <div id="typing-option-bar">
            <div id="typing-option-bar-font" class="typing-option">字體</div>
            <div id="typing-option-bar-color" class="typing-option">顏色</div>
            <div id="typing-option-bar-lineHeight" class="typing-option">
              間距
            </div>
            <div id="typing-option-bar-letter-spacing" class="typing-option">
              字距
            </div>
            <div id="looking-for-help-keyboard" class="looking-for-help">
              [ ? ]
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        `;
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
        `;


