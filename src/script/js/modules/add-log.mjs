
export default class AddLog {
    constructor(element) {

        this.log = element;
        this.titles = [];
        this.contents = [];

    }
    add(title, content) {
        this.titles.unshift(document.createElement("div"));
        this.titles[0].id = title;
        this.titles[0].classList.add("logBlock-title");
        this.titles[0].innerHTML = title;

        this.contents.unshift(document.createElement("div"));
        this.contents[0].id = content;
        this.contents[0].classList.add("logBlock-content");
        this.contents[0].innerHTML = content;

    }
    remove(urTitle) {
        let n = 0;
        for (let title of this.titles) {
            if (title.id === urTitle &&
                title.innerHTML === urTitle) {
                this.titles.splice(n, 1);
                this.contents.splice(n, 1);
                return;
            }
            n++;
        }
        throw new Error(`No find ${urTitle} in titleList`);
    }
    loadLog() {
        for (let n = 0; n < this.titles.length; n++) {
            let logPart = document.createElement("div");
            logPart.id = "block-" + this.titles[n].id
            logPart.classList.add("logBlock");
            logPart.append(this.titles[n]);
            logPart.append(this.contents[n]);

            this.log.append(logPart);
        }
    }
}

