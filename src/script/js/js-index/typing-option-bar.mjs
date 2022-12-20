import OptionBar from "../modules/option-bar.mjs";

window.addEventListener("load", () => {
    let optionbar = new OptionBar(
        document.querySelector("#typing-option-bar"),
        "typing-option",
        "typing-option-bar-font",
        "typing-option-bar-color",
        "typing-option-bar-lineHeight",
        "typing-option-bar-letter-spacing",
    );

    // ~ 滑鼠經過選單欄效果
    (function () {

        optionbar.setStyle("transitionProperty", "background-color");
        optionbar.setStyle("transitionDuration", "0.3s");
        optionbar.setStyle("transitionTimingFunction", "ease-out");

        optionbar.hover(
            () => {
                optionbar.setStyle("backgroundColor", "#163159")
                setTimeout(() => {
                    optionbar.setStyle("backgroundColor", "#223c62")
                }, 300)
            })
    }())

    //~ 將選單可視化
    optionbar.showBox();
    //* 初始化- 沒有例外情況
    optionbar.setexcept(false);

    //~ 改變預設 選項選單 樣式
    for (let optionBox of optionbar.optionBarElement.querySelectorAll(".option-box")) {
        optionBox.setAttribute("style",
            `
            overflow: hidden;
            position: absolute;
            width: 150px;
            top: 30px;
            display: none;
            background-color: #223c62;
            bottom: 37px;
            transform: translate(-3%, 0);
        `)
        optionBox.style.top = "";
    }

    //~ 選單設定
    //* font
    optionbar.boxSet("typing-option-bar-font", "經典代碼", "標準字體", "視覺衝擊", "喜劇風格", "極限草體");

    //* color
    let typing_option_bar_color_names = ["白色", "終端綠", "淺藍", "米白", "自訂"]
    optionbar.boxSet("typing-option-bar-color", ...typing_option_bar_color_names);
    document.querySelector("#typing-option-bar-color-box-setting-自訂")
        .addEventListener("click", () => {
            optionbar.setexcept(true);
            setTimeout(() => { optionbar.setexcept(false) }, 10);
        }) //*點擊顏色自訂設定選項會出現一瞬間例外情況

    //* lineHeight
    optionbar.boxSet("typing-option-bar-lineHeight", "小", "中", "大");

    //*letterspacing
    optionbar.boxSet("typing-option-bar-letter-spacing", "小", "中", "大");

    //~ 選單設定 hover 效果
    (function () {

        for (let optionSetting of optionbar.optionBarElement.querySelectorAll(".option-box-setting")) {
            optionbar.setStyle("transitionProperty", "background-color", optionSetting);
            optionbar.setStyle("transitionDuration", "0.3s", optionSetting);
            optionbar.setStyle("transitionTimingFunction", "ease-out", optionSetting);

            optionbar.hover(
                () => {
                    optionSetting.style.backgroundColor = "#163159";
                },
                () => {
                    optionSetting.style.backgroundColor = "#223c62";
                },
                optionSetting
            )
        }

    }());

    let article = document.querySelector("#article-main-part");
    let typing = document.querySelector("#typing-main-part");

    article.setAttribute("style",
        `transition-property: \
        line-height, letter-spacing, color; \
        transition-duration: 0.3s; \
        transition-timing-function: ease-in;\
        line-height: ${window.thisWeb.lineHeight};\
        letter-spacing: 0.03em;\
        font-family: Andale Mono, monospace`);
    typing.setAttribute("style",
        `transition-property: \
        line-height, letter-spacing, color; \
        transition-duration: 0.3s; \
        transition-timing-function: ease-in;\
        line-height: ${window.thisWeb.lineHeight};\
        letter-spacing: 0.03em;\
        font-family: Andale Mono, monospace`);

    const colorChange = (first, second) => {
        let oldArticleColor = article.style.color;
        let oldTypingColor = article.style.color;
        setTimeout(() => {
            article.style.color = "black";
            typing.style.color = "black";
            setTimeout(() => {
                article.style.color = oldArticleColor;
                typing.style.color = oldTypingColor;
            }, second)
        }, first)
    }

    //~ 選單個別設定: 字體
    (function () {
        optionbar.optionBarElement
            .querySelector("#typing-option-bar-font-box-setting-經典代碼").addEventListener("click", () => {
                if (article.style.fontFamily != "\"Andale Mono\", monospace") {
                    setTimeout(() => {
                        article.style.fontFamily = "Andale Mono, monospace";
                        typing.style.fontFamily = "Andale Mono, monospace";
                    }, 300)
                    colorChange(0, 265);
                }
            })
        optionbar.optionBarElement
            .querySelector("#typing-option-bar-font-box-setting-標準字體").addEventListener("click", () => {
                if (article.style.fontFamily != "Arial") {
                    setTimeout(() => {
                        article.style.fontFamily = "Arial";
                        typing.style.fontFamily = "Arial";
                    }, 300)
                    colorChange(0, 265);
                }
            })
        optionbar.optionBarElement
            .querySelector("#typing-option-bar-font-box-setting-視覺衝擊").addEventListener("click", () => {
                if (article.style.fontFamily != "Impact, fantasy") {
                    setTimeout(() => {
                        article.style.fontFamily = "Impact, fantasy";
                        typing.style.fontFamily = "Impact, fantasy";
                    }, 300)
                    colorChange(0, 265);
                }
            })
        optionbar.optionBarElement
            .querySelector("#typing-option-bar-font-box-setting-喜劇風格").addEventListener("click", () => {
                if (article.style.fontFamily != "\"Comic Sans MS\", \"Comic Sans\", cursive") {
                    setTimeout(() => {
                        article.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
                        typing.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
                    }, 300)
                    colorChange(0, 265);
                }
            })
        optionbar.optionBarElement
            .querySelector("#typing-option-bar-font-box-setting-極限草體").addEventListener("click", () => {
                if (article.style.fontFamily != "\"Brush Script MT\", \"Brush Script Std\", cursive") {
                    setTimeout(() => {
                        article.style.fontFamily = "Brush Script MT, Brush Script Std, cursive";
                        typing.style.fontFamily = "Brush Script MT, Brush Script Std, cursive";
                    }, 300)
                    colorChange(0, 265);
                }
            })
    }());

    //~ 選單個別設定: 顏色
    (function () {

        let autoClean = setTimeout(() => { });
        //* inputElement- 顏色自訂設定輸入區塊
        let customColorInputer = document.createElement("input");
        customColorInputer.id = "custom-color-inputer";
        customColorInputer
            .addEventListener("click", () => {

                //*點擊顏色自訂設定輸入區塊會出現一瞬間例外情況
                optionbar.setexcept(true);
                setTimeout(() => { optionbar.setexcept(false) }, 10);

                if (customColorInputer.value === "無效輸入") {
                    customColorInputer.value = "#";
                    customColorInputer.style.color = "white";
                    clearTimeout(autoClean);
                }
            })
        customColorInputer.style =
            `
        background: #163159;
        text-align: left;
        padding: 5px 5px;
        height: 36px;
        border: 0;
        color: white;
        letter-spacing: 0.1em;
        font-family: monospace;
        transition: color 0.3s ease-in-out;

        `;

        customColorInputer.value = "#";
        customColorInputer.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();

                let customColorUserInput = customColorInputer.value;
                if (customColorUserInput.match(/#[a-fA-F0-9]{3,6}/y) &&
                    (customColorUserInput.length === 4 || customColorUserInput.length === 7)) {
                    //* 修改顏色
                    article.style.color = customColorUserInput.match(/#[a-fA-F0-9]{3,6}/y)[0];
                    typing.style.color = customColorUserInput.match(/#[a-fA-F0-9]{3,6}/y)[0];
                    //* enter送出- 重置
                    customColorInputer.value = "#";
                    customColorInputer.style.display = "none";
                    optionbar.optionBarElement
                        .querySelector(`#typing-option-bar-color-box-setting-自訂`).style.display = "block";
                    optionbar.optionBarElement
                        .querySelector(`#typing-option-bar-color-box`).style.display = "none";
                    //* 避免取消點擊會出現的問題
                    optionbar.boxSqueue.shift();
                    optionbar.optionClick = false;

                } else {
                    if (customColorInputer.value === "無效輸入") {
                        customColorInputer.value = "#";
                        customColorInputer.style.color = "white";
                        clearTimeout(autoClean);

                    } else {
                        customColorInputer.value = "無效輸入";
                        customColorInputer.style.color = "red";
                        autoClean =
                            setTimeout(() => {
                                customColorInputer.value = "#";
                                customColorInputer.style.color = "white";
                            }, 2000)
                    }
                }
            }
        })
        //* 滑動修改顏色選項- 重置
        document.querySelector("#typing-option-bar-color")
            .addEventListener("mouseenter", (event) => {
                if (event.target === document.querySelector("#typing-option-bar-color")) {
                    document.querySelector(`#typing-option-bar-color-box`)
                        .append(document.querySelector(`#typing-option-bar-color-box-setting-自訂`));

                    if (customColorInputer?.value === "#" &&
                        document.querySelector("#typing-option-bar-color-box").style.display === "block") return;
                    if (customColorInputer?.value === "#" ||
                        customColorInputer?.value === "無效輸入") {
                        customColorInputer.style.display = "none";
                        document.querySelector("#typing-option-bar-color-box-setting-自訂")
                            .style.display = "block";
                        if (customColorInputer?.value === "無效輸入") {
                            {
                                document.querySelector("#custom-color-inputer").value = "#";
                                customColorInputer.style.color = "white";
                                clearTimeout(autoClean);
                            }
                        }

                    }
                }
            })

        //* 剩下的預設選單設定的顏色切換
        for (let color_name of typing_option_bar_color_names) {
            //
            let color;
            optionbar.optionBarElement
                .querySelector(`#typing-option-bar-color-box-setting-${color_name}`)
                .addEventListener("click", () => {
                    switch (color_name) {
                        case "白色": color = "white"; break
                        case "終端綠": color = "rgb(3, 163, 3)"; break
                        case "淺藍": color = "lightblue"; break
                        case "米白": color = "thistle"; break
                    }
                    if (color_name === "自訂") {

                        let custom =
                            optionbar.optionBarElement
                                .querySelector(`#typing-option-bar-color-box-setting-${color_name}`);
                        custom.parentNode.append(customColorInputer);
                        custom.style.display = "none";
                        customColorInputer.style.display = "block";
                    };
                    article.style.color = color;
                    typing.style.color = color;
                })
        }

    }());

    //~ 選單個別設定: 間距
    (function (s, m, l) {
        let small = optionbar.optionBarElement
            .querySelector("#typing-option-bar-lineHeight-box-setting-小");
        let medium = optionbar.optionBarElement
            .querySelector("#typing-option-bar-lineHeight-box-setting-中");
        let large = optionbar.optionBarElement
            .querySelector("#typing-option-bar-lineHeight-box-setting-大");

        small.addEventListener("click", () => {
            if (article.style.lineHeight != s) {
                article.style.lineHeight = s;
                typing.style.lineHeight = s;
                window.thisWeb.lineHeight = s;

                colorChange(0, 265);
            }
        })
        medium.addEventListener("click", () => {
            if (article.style.lineHeight != m) {
                article.style.lineHeight = m;
                typing.style.lineHeight = m;
                window.thisWeb.lineHeight = m;

                colorChange(0, 265);
            }
        })
        large.addEventListener("click", () => {
            if (article.style.lineHeight != l) {
                article.style.lineHeight = l;
                typing.style.lineHeight = l;
                window.thisWeb.lineHeight = l;

                colorChange(0, 265);
            }
        })
    }("1.3em", "1.6em", "1.9em"));

    //~ 選單個別設定: 字距
    (function (s, m, l) {
        let small = optionbar.optionBarElement
            .querySelector("#typing-option-bar-letter-spacing-box-setting-小");
        let medium = optionbar.optionBarElement
            .querySelector("#typing-option-bar-letter-spacing-box-setting-中");
        let large = optionbar.optionBarElement
            .querySelector("#typing-option-bar-letter-spacing-box-setting-大");

        small.addEventListener("click", () => {
            if (article.style.letterSpacing != s) {
                article.style.letterSpacing = s;
                typing.style.letterSpacing = s;

                colorChange(0, 265);
            }
        })
        medium.addEventListener("click", () => {
            if (article.style.letterSpacing != m) {
                article.style.letterSpacing = m;
                typing.style.letterSpacing = m;

                colorChange(0, 265);
            }
        })
        large.addEventListener("click", () => {
            if (article.style.letterSpacing != l) {
                article.style.letterSpacing = l;
                typing.style.letterSpacing = l;

                colorChange(0, 265);
            }
        })
    }("0.03em", "0.09em", "0.15em"))
})

