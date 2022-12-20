
export default class OptionBar {

    /**
     *~ <建構器引數>
     *~ element傳入HTMLElement物件, 作為"設定欄(option-bar)"本體元素
     *~ optionHTMLClass傳入字串, 作為"設定選項(option)"的類別名稱
     *~ optionHTMLIds傳入字串, 作為"設定選項(option)"個別的ID名稱
     *~
     *~ <初始化特性>
     *~ optionBarElement特性指向傳入的"選單(option-bar)"元素物件
     *~ optionHTMLClass特性儲存傳入的"設定選項(option)"的類別名稱
     *~ optionHTMLIds指向"設定選項(option)"個別的ID名稱所組成的陣列
     *~ optionBoxModel特性指向預設"設定選項選單(option-box)"的克隆元素物件
     *~ optionHTMLID作為名稱的特性指向該id所代表的"選項(option)"元素物件
     *~ optionHTMLID(作為名稱)-box的特性指向該id所代表的選項的"選項選單物件(option-box)"
     *~ options特性指向儲存所有"選項(option)"元素物件的Nodelist
     */
    constructor(element, optionHTMLClass, ...optionHTMLIds) {

        //~ optionBox
        let optionBox = document.createElement("div");
        optionBox.setAttribute("style",
            `
            overflow: hidden;
            position: absolute;
            width: 150px;
            top: 30px;
            background-color: black;
            display: none;
            `
        );
        this.optionBoxModel = optionBox.cloneNode(true);

        for (let optionHTMLId of optionHTMLIds) {
            //~ option
            this[optionHTMLId] = element.querySelector(`#${optionHTMLId}`);
            //~ optionBox
            this[`${optionHTMLId}-box`] = optionBox.cloneNode(true);
            this[`${optionHTMLId}-box`].id = `${optionHTMLId}-box`;
            this[`${optionHTMLId}-box`].classList.add("option-box");
            this[optionHTMLId].prepend(this[`${optionHTMLId}-box`]);
        }
        this.optionBarElement = element;
        this.optionBarElement.style.position = "relative";
        this.optionBarElement.style.overflow = "visible";
        this.optionHTMLClass = optionHTMLClass;
        this.optionHTMLIds = optionHTMLIds;
        this.options = element.querySelectorAll(`.${optionHTMLClass}`

        );
    }

    setAttr(attr, value, element = this.optionBarElement) {
        element.setAttribute(attr, value);
    }
    removeAttr(attr, element = this.optionBarElement) {
        element.removeAttribute(attr);
    }
    setStyle(style, value, element = this.optionBarElement) {
        element.style[style] = value;
    }
    removeStyle(style, element = this.optionBarElement) {
        element.style[style] = null;
    }

    hover(eventListenerA, eventListenerB, element = this.optionBarElement) {
        element.addEventListener("mouseenter", eventListenerA)
        element.addEventListener("mouseleave", eventListenerB)
    }

    optionClick;

    setexcept(except) {
        this.except = except;
    }

    //~ 將box顯示出來的函式, 使用類記事本風格
    showBox() {
        // ~使用"佇列"實現"選項選單"不消失
        let boxSqueue = [];
        this.boxSqueue = boxSqueue;

        [...this.options].map((option) => {

            option.addEventListener("click", () => {
                option.style.textDecoration = "none";
                setTimeout(() => {
                    option.style.textDecoration = "";
                }, 100)
            })

            option.addEventListener("click", (event) => {
                event.stopPropagation();

                if (!this.optionClick) {
                    option.querySelector(`#${option.id}-box`)
                        .style.display = "block";
                    this.optionClick = true;
                    boxSqueue.push(option.querySelector(`#${option.id}-box`))
                } else {
                    if (!this.except && boxSqueue[0]?.style.display) {
                        boxSqueue[0].style.display = "none";
                        this.optionClick = false;
                        boxSqueue.shift();
                    }
                }
            })

            option.addEventListener("mouseenter",
                (event) => {
                    event.stopPropagation();

                    if (this.optionClick) {
                        let nowBox = option.querySelector(`#${option.id}-box`);
                        nowBox.style.display = "block";

                        if (boxSqueue[0]?.style.display &&
                            nowBox != boxSqueue[0]
                        ) boxSqueue[0].style.display = "none";

                        boxSqueue.shift();
                        boxSqueue.push(nowBox);
                    }
                }
            )
        })
        document.addEventListener("click", () => {
            if (this.optionClick) {
                if (boxSqueue[0]?.style.display) boxSqueue[0].style.display = "none";
                this.optionClick = false;
                boxSqueue.shift();
            }
        })
    }
    boxSet(optionHTMLId, ...settings) {
        for (let settingName of settings) {
            let setting = document.createElement("div");
            setting.classList.add(`option-box-setting`);
            setting.id = `${optionHTMLId}-box-setting-${settingName}`;
            setting.textContent = settingName;
            setting.setAttribute("style",
                `
                    text-align: left;
                    padding: 5px 5px;
                `
            );
            this.optionBarElement.querySelector(`#${optionHTMLId}-box`).append(setting);
        }
    }

}
