
import AddLog from "../modules/add-log.mjs";

window.addEventListener("load", () => {
    let add_develop_log = new AddLog(
        document.getElementById("log-main-part")
    );

    //~ 載入json -> 該改日誌
    (async function () {

        let response = await fetch("../script/js/js-develop-log/add-develop-log.json");
        if (response.ok) {
            let add_develop_log_json = await response.json();
            for (let [title, content] of Object.entries(add_develop_log_json)) {
                add_develop_log.add(title, `<span>${content}</span>`);
            }
            add_develop_log.loadLog();

        } else {
            throw new Error("Something Wrong");
        }
    }
        ());
})



