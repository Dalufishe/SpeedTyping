
window.addEventListener("load", () => {
    /**
     * ~初始化
     */
    const article = document.querySelector("#article-main-part");
    article.textContent = window.thisWeb.article.replaceAll("\n", " ");

    const typing = document.querySelector("#typing-main-part");

    const status = document.createElement("div");
    status.id = "typing-status";

    const status_leftslot = document.createElement("div");
    status_leftslot.id = "typing-status-leftslot";
    status_leftslot.classList.add("status-member");
    status.prepend(status_leftslot);

    const status_rightslot = document.createElement("div");
    status_rightslot.id = "typing-status-rightslot";
    status_rightslot.classList.add("status-member");
    status.prepend(status_rightslot);

    const timer = document.createElement("div");
    timer.id = "typing-timer";
    timer.classList.add("status-member");
    status.prepend(timer);

    const status_final_leftslot = document.createElement("div");
    status_final_leftslot.id = "typing-status-final-leftslot";
    status_final_leftslot.classList.add("status-member");
    status.prepend(status_final_leftslot);

    const status_final_rightslot = document.createElement("div");
    status_final_rightslot.id = "typing-status-final-rightslot";
    status_final_rightslot.classList.add("status-member");
    status.prepend(status_final_rightslot);

    const spentTime = document.createElement("div");
    spentTime.id = "typing-status-spentTime";
    spentTime.classList.add("status-member");
    status.prepend(spentTime);

    const barrier = document.createElement("div");
    barrier.id = "window-barrier";
    barrier.style.zIndex = "-999";
    document.body.prepend(barrier);

    const loadingImg = document.createElement("img");
    loadingImg.src = "../../lib/SVG-Loaders-master/svg-loaders/tail-spin.svg";
    loadingImg.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -100%); z-index: 1; opacity: 0; width: 50px; height: 50px; transition: opacity 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;")
    document.querySelector("#typing").prepend(loadingImg);

    const moreDetails = document.createElement("div");
    moreDetails.id = "typing-status-moreDetails";
    moreDetails.innerHTML = "<div>︾\n︾</div>";
    status.prepend(moreDetails);

    const status_invis_leftslot = document.createElement("div");
    status_invis_leftslot.id = "typing-status-invis-leftslot";
    status_invis_leftslot.classList.add("status-member");
    status.prepend(status_invis_leftslot);

    const status_invis_rightslot = document.createElement("div");
    status_invis_rightslot.id = "typing-status-invis-rightslot";
    status_invis_rightslot.classList.add("status-member");
    status.prepend(status_invis_rightslot);

    const status_invis_leftslot2 = document.createElement("div");
    status_invis_leftslot2.id = "typing-status-invis-leftslot2";
    status_invis_leftslot2.classList.add("status-member");
    status.prepend(status_invis_leftslot2);

    const status_invis_middleslot2 = document.createElement("div");
    status_invis_middleslot2.id = "typing-status-invis-middleslot2";
    status_invis_middleslot2.classList.add("status-member");
    status.prepend(status_invis_middleslot2);

    const status_invis_rightslot2 = document.createElement("div");
    status_invis_rightslot2.id = "typing-status-invis-rightslot2";
    status_invis_rightslot2.classList.add("status-member");
    status.prepend(status_invis_rightslot2);

    let readyToType = false;

    let article_content;
    let typing_content;

    let time; //* 打字時長(1分鐘, 5分鐘, 10分鐘)

    let startTime;
    let lessTime;

    let articleWordCount;
    let currentWordCount;

    let cannottypeInterval;
    let startTimeInterval;
    let placeholderInterval;
    let timerInterval;
    let timeIntervalKey;
    let endcheckIntervalKey;

    /**
     * ~事件處理器
     */
    typing.addEventListener("keydown", (event) => {

        if (event.key === "Tab") {
            event.preventDefault();
        }

        if (!readyToType) {

            readyToType = true;

            (function init() {

                article_content = article.textContent.replaceAll("\n", " ");
                articleWordCount = article_content.match(/\w+'*-*\w*/gu).length;

                typing_content = undefined;
                currentWordCount = undefined;

                startTime = undefined;
                lessTime = undefined;

                cannottypeInterval = undefined;
                startTimeInterval = undefined;
                placeholderInterval = undefined;
                timerInterval = undefined;
                timeIntervalKey = 1;
                endcheckIntervalKey = 1;

                time = window.thisWeb.time;

                timer.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 140%; letter-spacing: 0.05em;">${window.thisWeb.time.toString().length === 2 ? window.thisWeb.time : "0" + window.thisWeb.time
                    }:00</div>
    `;
                status_leftslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    >目前字數:<br>0/${article_content.length}</div>
    `;
                status_rightslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    >目前詞數:<br>0/${article_content.match(/\w+'*-*\w*/gu).length}</div>
    `;
                spentTime.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%; letter-spacing: 0.05em;">耗時:<br>重製中...</div>
    `;
                status_final_leftslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    >正確率:<br>重製中...</div>
    `;
                status_final_rightslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    >WPM:<br>重製中...</div>
    `;
                status_invis_leftslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    ></div>
    `;
                status_invis_rightslot.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    ></div>
    `;
                status_invis_leftslot2.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    ></div>
    `;
                status_invis_middleslot2.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    ></div>
    `;
                status_invis_rightslot2.innerHTML =
                    `<div
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 120%;"
    ></div>
    `;

                barrier.style.zIndex = "999";
            }())

            startTimeInterval =
                setInterval(() => { startTime = Date.now(); })

            //* 消除最剛開始輸入的字
            cannottypeInterval =
                setInterval(() => { typing.value = ""; })

            typing.placeholder = "> 正準備開始打字...\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束";

            //* 0.1秒後載入狀態條
            setTimeout(() => {
                document.querySelector("#typing").after(status);
                typing.style.height = "349px";

                moreDetailsClose();

                let placeholders = [
                    "> 正準備開始打字.\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                    "> 正準備開始打字..\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                    "> 正準備開始打字...\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                    "> 正準備開始打字...\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                    "> 正準備開始打字...\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                    "> 正準備開始打字...\n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤即開始計時  :esc-提早結束",
                ];
                typing.placeholder = placeholders[2];

                let n = 0;
                placeholderInterval =
                    setInterval(() => {
                        typing.placeholder = placeholders[n++ % 6];
                    }, 400)
            }, 100)

            //* 0.2秒後捲動頁面
            setTimeout(() => {
                article.scrollTo({ top: 0, behavior: "smooth" });
                window.scrollTo({ top: 200, behavior: "smooth" });
            }, 200)
            //* 0.3秒後顯示狀態條
            setTimeout(() => {
                status.style.opacity = 1;
            }, 300)
            //* 0.4秒後顯示狀態條細節(如計時器, 測驗數據欄)
            setTimeout(() => {
                new Promise((resolve) => {
                    setTimeout(() => { resolve() }, 100);
                })
                    .then(() => {

                        if (window.getComputedStyle(spentTime).top === "105px") {
                            return new Promise((resolve) => {
                                resolve();
                            })
                        }
                        moreDetails.style.display = "";
                        status.style.borderRight = "";
                        spentTime.style.top = "150%";
                        status_final_leftslot.style.top = "150%";
                        status_final_rightslot.style.top = "150%";
                        return new Promise((resolve) => {
                            setTimeout(() => { resolve() }, 300)
                        })
                    })
                    .then(() => {
                        spentTime.style.zIndex = "-999";
                        status_final_leftslot.style.zIndex = "-999";
                        status_final_rightslot.style.zIndex = "-999";
                        spentTime.style.top = "-50%";
                        status_final_leftslot.style.top = "-50%";
                        status_final_rightslot.style.top = "-50%";
                        setTimeout(() => {
                            timer.style.top = "50%";
                            status_leftslot.style.top = "50%";
                            status_rightslot.style.top = "50%";
                        }, 100);
                        return new Promise((resolve) => { setTimeout(() => { resolve() }, 300) });
                    })
                    .then(() => {
                        spentTime.style.zIndex = "";
                        status_final_leftslot.style.zIndex = "";
                        status_final_rightslot.style.zIndex = "";
                    })
            }, 400)
        }
        else /*readyToType === true */ {

            document.querySelector("#content")
                .style.backgroundColor = "#30486C";
            document.querySelector("#article-option-bar")
                .style.backgroundColor = "#163159";
            document.querySelector("#typing-option-bar")
                .style.backgroundColor = "#163159";

            (function keyBehaviorChangge() {
                if (event.key === "Tab") {
                    typing.value = typing.value + " ".repeat(4);
                }
                if (event.key === "Enter") {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, 27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, 34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, 40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
                if (event.key === "Backspace") {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, -27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, -34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, -40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
                if (event.keyCode === 37) {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, -27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, -34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, -40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
                if (event.keyCode === 38) {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, -27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, -34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, -40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
                if (event.keyCode === 39) {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, 27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, 34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, 40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
                if (event.keyCode === 40) {
                    const scrollfunc =
                        () => {
                            if (window.thisWeb.lineHeight === "1.3em") { article.scrollBy(0, 27); }
                            if (window.thisWeb.lineHeight === "1.6em") { article.scrollBy(0, 34); }
                            if (window.thisWeb.lineHeight === "1.9em") { article.scrollBy(0, 40); }
                        };
                    typing.addEventListener("scroll", scrollfunc);
                    setTimeout(() => { typing.removeEventListener("scroll", scrollfunc); }, 50)
                }
            }())

            setTimeout(() => {
                typing_content = typing.value.replaceAll("\n", " ");
            }, 10)

            clearInterval(cannottypeInterval);
            clearInterval(startTimeInterval);
            clearInterval(placeholderInterval);

            //* 測驗結束後執行
            (function endcheckFunc(doWhenEnd) {
                if (endcheckIntervalKey) {
                    let endCheck = setInterval(() => {
                        if (lessTime < 0 ||
                            article_content?.length === typing_content?.length) {
                            //* 測驗結束執行...
                            clearInterval(endCheck);
                            doWhenEnd();
                        }
                    })
                    endcheckIntervalKey = false;
                }
                if (event.key === "Escape") {
                    //* 測驗結束執行...
                    doWhenEnd();
                }
            }(() => {
                //* 測驗結束執行... <寫入處>

                readyToType = false;

                (function reset() {

                    clearInterval(timerInterval);
                    typing.style.visibility = "hidden";
                    setTimeout(() => { typing.style.visibility = "visible"; }, 50);

                    barrier.style.zIndex = "-999";
                    document.querySelector("#content")
                        .style.backgroundColor = "";
                    document.querySelector("#article-option-bar")
                        .style.backgroundColor = "";
                    document.querySelector("#typing-option-bar")
                        .style.backgroundColor = "";

                }());

                new Promise((resolve) => {

                    typing.placeholder = "";
                    loadingImg.style.opacity = "0.6";

                    //* 計算正確字數
                    let article_words_notjustword = article_content.match(/\w+'*-*\w*|\W/gu);
                    let articleWordCount_notjustword = article_words_notjustword.length;
                    let typing_words_notjustword;
                    if (typing_content?.match(/\w+'*-*\w*|\W/gu) != undefined) {
                        typing_words_notjustword = typing_content.match(/\w+'*-*\w*|\W/gu);
                    } else {
                        typing_words_notjustword = [];
                    }
                    let typingWordCount_notjustword = typing_words_notjustword.length;
                    let correctWordCount_notjustword = 0;
                    let correctWordCount = 0;

                    for (let i = 0; i < typingWordCount_notjustword; i++) {
                        if (article_words_notjustword[i] === typing_words_notjustword[i]) {
                            correctWordCount_notjustword += 1;
                            if (typing_words_notjustword[i]?.match(/\w+'*-*\w*/gu)) { correctWordCount += 1; }
                        }
                        if (article_words_notjustword[i] != typing_words_notjustword[i]) {
                            for (let j = 1; j < typingWordCount_notjustword; j++) {

                                //* 多打 -> 找到下一個文章匹配
                                if (article_words_notjustword[i] === typing_words_notjustword[i + j]) {

                                    correctWordCount_notjustword += 1;
                                    if (article_words_notjustword[i]?.match(/\w+'*-*\w*/gu)) { correctWordCount += 1; }

                                    typing_words_notjustword.splice(i, j);
                                    break;
                                }
                                //* 少打 -> 找到下一個輸入匹配
                                if (typing_words_notjustword[i] === article_words_notjustword[i + j]) {

                                    correctWordCount_notjustword += 1;
                                    if (typing_words_notjustword[i]?.match(/\w+'*-*\w*/gu)) { correctWordCount += 1; }

                                    article_words_notjustword.splice(i, j);
                                    break;
                                }
                            }
                        }
                    }
                    //* spentTime
                    (function () {
                        let minute, second;
                        if (isNaN(window.thisWeb.time * 60 - lessTime)) {
                            minute = second = 0;
                        } else {
                            minute = ((window.thisWeb.time * 60 - lessTime) / 60).toFixed(0);
                            second = (window.thisWeb.time * 60 - lessTime) % 60;
                        }
                        spentTime.firstElementChild.innerHTML = `
                    耗時:<br>${minute}分${second}秒
                    `;
                    }());
                    //* 正確率
                    (function () {
                        status_final_leftslot.firstElementChild.innerHTML = `
                    正確率:<br>${((correctWordCount_notjustword) / articleWordCount_notjustword * 100).toFixed(1)}%
                    `;
                    }());
                    //* WPM
                    (function () {
                        status_final_rightslot.firstElementChild.innerHTML = `
                    WPM:<br>${isNaN((correctWordCount) / ((window.thisWeb.time * 60 - lessTime) / 60)) ?
                                0 : ((correctWordCount) / ((window.thisWeb.time * 60 - lessTime) / 60)).toFixed(0)}字   
                    `;
                    }());
                    //* 失誤率
                    (function () {
                        status_invis_leftslot.firstElementChild.innerHTML = `
                    失誤率:<br>${((articleWordCount_notjustword - correctWordCount_notjustword) / articleWordCount_notjustword * 100).toFixed(1)}%
                    `;
                    }());
                    //* 錯誤數
                    (function () {
                        status_invis_rightslot.firstElementChild.innerHTML = `錯誤數:<br>${articleWordCount_notjustword - correctWordCount_notjustword}次`;
                    }());
                    //* 非標準WPM: 含標點符號和空格
                    (function () {
                        status_invis_leftslot2.firstElementChild.innerHTML = `非標準WPM:<br>${isNaN((correctWordCount_notjustword) / ((window.thisWeb.time * 60 - lessTime) / 60)) ?
                            0 : ((correctWordCount_notjustword) / ((window.thisWeb.time * 60 - lessTime) / 60)).toFixed(0)}字`
                    }());
                    //* 輸入完整度
                    (function () {
                        status_invis_middleslot2.firstElementChild.innerHTML = `
                        輸入完整度:<br>${(typingWordCount_notjustword / articleWordCount_notjustword * 100).toFixed(1)}%
                        `;
                    }());
                    //*幸運數字:>
                    (function () {
                        status_invis_rightslot2.firstElementChild.innerHTML = `
                        幸運數字☺:<br>${Math.floor((Math.random() * 10 + 1))}
                        `
                    }());

                    setTimeout(() => { resolve() }, 500)
                }).then(() => {

                    typing.value = "";

                    loadingImg.style.opacity = "0";
                    timer.style.top = "150%";
                    status_leftslot.style.top = "150%";
                    status_rightslot.style.top = "150%";

                    return new Promise((resolve) => { setTimeout(() => { resolve() }, 300) });

                }).then(() => {
                    timer.style.zIndex = "-999";
                    status_leftslot.style.zIndex = "-999";
                    status_rightslot.style.zIndex = "-999";
                    timer.style.top = "-50%";
                    status_leftslot.style.top = "-50%";
                    status_rightslot.style.top = "-50%";
                    setTimeout(() => {
                        spentTime.style.top = "50%";
                        status_final_leftslot.style.top = "50%";
                        status_final_rightslot.style.top = "50%";
                    }, 100)

                    return new Promise((resolve) => { setTimeout(() => { resolve() }, 300) });
                }).then(() => {

                    moreDetails.style.display = "block";
                    status.style.borderRight = "0";

                    timer.style.zIndex = "";
                    status_leftslot.style.zIndex = "";
                    status_rightslot.style.zIndex = "";

                    typing.placeholder = "> 測驗結束!  \n\n\n\n\n\n\n\n\n\n\n:雙擊鍵盤以重新開始  :esc-提早結束";

                })
            }));

            //* Timer
            (function () {
                if (timeIntervalKey) {
                    timeIntervalKey = 0;
                    timerInterval = setInterval(() => {
                        lessTime =
                            time * 60 - parseInt((Date.now() - startTime) / 1000);
                        let leftTime = parseInt(lessTime / 60).toString().length === 2 ?
                            parseInt(lessTime / 60) : "0" + parseInt(lessTime / 60);
                        let rightTime = ((lessTime / 60 - parseInt(lessTime / 60)) * 60).toFixed().toString().length === 2 ?
                            ((lessTime / 60 - parseInt(lessTime / 60)) * 60).toFixed() : "0" + ((lessTime / 60 - parseInt(lessTime / 60)) * 60).toFixed();
                        timer.firstElementChild.textContent = `${leftTime}:${rightTime}`;
                    }, 1000)
                }
            }());

            //* 目前字數
            (function () {
                setTimeout(() => {
                    status_leftslot.firstElementChild.innerHTML =
                        `目前字數:<br>${typing_content.length}/${article_content.length}`;
                }, 10);
            }());

            //* 目前詞數
            (function () {
                setTimeout(() => {
                    typing_content.match(/\w+/gu)?.length ?
                        currentWordCount = typing_content.match(/\w+'*-*\w*/gu).length : currentWordCount = 0;

                    status_rightslot.firstElementChild.innerHTML =
                        `
                        目前詞數:<br>${currentWordCount}/${articleWordCount}
                        `
                }, 10)
            }());
        }
    });

    barrier.addEventListener("mousedown", (event) => {
        event.preventDefault();
    })

    let status_open = false;
    let ableToClose = false;

    async function moreDetailsOpen() {
        if (!ableToClose) {
            status_open = true;
            moreDetails.innerHTML = "<div>︽\n︽</div>";
            status.style.height = "95vh";
            scrollTo({ top: 1020, behavior: "smooth" });

            status_final_leftslot.style.opacity = "0";
            status_final_rightslot.style.opacity = "0";
            spentTime.style.opacity = "0";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_final_leftslot.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_final_rightslot.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            spentTime.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_invis_leftslot.style.opacity = "1";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_invis_rightslot.style.opacity = "1";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_invis_leftslot2.style.opacity = "1";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_invis_middleslot2.style.opacity = "1";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            status_invis_rightslot2.style.opacity = "1";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 100) })

            ableToClose = true;
        }
    }
    async function moreDetailsClose() {
        if (ableToClose) {
            status_open = false;
            moreDetails.innerHTML = "<div>︾\n︾</div>";
            scrollTo({ top: 200, behavior: "smooth" })
            setTimeout(() => {
                status.style.height = "";
            }, 450);

            status_invis_leftslot.style.opacity = "";
            status_invis_rightslot.style.opacity = "";
            status_invis_leftslot2.style.opacity = "";
            status_invis_middleslot2.style.opacity = "";
            status_invis_rightslot2.style.opacity = "";

            status_final_leftslot.style.opacity = "0";
            status_final_rightslot.style.opacity = "0";
            spentTime.style.opacity = "0";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 200) })

            status_final_leftslot.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 200) })

            status_final_rightslot.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 200) })

            spentTime.style.opacity = "";
            await new Promise((resolve) => { setTimeout(() => { resolve() }, 200) })

            ableToClose = false;
        }
    }

    moreDetails.addEventListener("click", () => {

        if (!status_open) {

            //*統計面板細節載入
            moreDetailsOpen();

        } else {
            //*統計面板關閉
            moreDetailsClose();
        }
    })
})
