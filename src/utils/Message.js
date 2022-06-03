// 提取出通用的单例
const getSingleton = (fn) => {
    var instance = null;
    return function () {
        if (!instance) {
            instance = fn.apply(this, arguments);
        }
        return instance;
    };
};

// 创建success弹框
const successSingleton = getSingleton(function () {
    var div = Popup.call(this, "success", ...arguments);
    return div;
});

// 创建error弹框
const errorSingleton = getSingleton(function () {
    var div = Popup.call(this, "error", ...arguments);
    return div;
});

// 创建warn弹框
const warnSingleton = getSingleton(function () {
    var div = Popup.call(this, "warn", ...arguments);
    return div;
});

const getType = (type) => {
    let color = "green";
    if (type == "error") {
        color = "red";
    } else if (type == "warn") {
        color = "yellow";
    }
    return color;
};

const Popup = (type, text) => {
    var dvObj = document.createElement("div");
    dvObj.style.backgroundColor = getType(type);
    dvObj.style.height = "30px";
    dvObj.style.lineHeight = "28px";
    dvObj.style.minWidth = "100px";
    dvObj.style.maxWidth = "500px";
    dvObj.style.display = "inline";
    dvObj.style.overflow = "hidden";
    dvObj.style.textOverflow = "ellipsis";
    dvObj.style.whiteSpace = "nowrap";
    dvObj.innerHTML = text;
    dvObj.style.position = "absolute";
    dvObj.style.left = "50%";
    dvObj.style.top = "-100px";
    dvObj.style.transform = "translateX(-50%)";
    document.body.appendChild(dvObj);

    return dvObj;
};

const getTypeModal = (() => {
    let zIndex = 1;
    return (type, option = {}) => {
        const { msg = "success", time = 2000 } = option;
        let div = successSingleton();
        if (type == "error") {
            div = errorSingleton();
        } else if (type == "warn") {
            div = warnSingleton();
        }
        div.style.zIndex = zIndex++;
        div.innerHTML = msg;
        div.animate(
            [
                { top: "0px" }, // 第一帧
                { top: "70px" },
                { top: "70px" },
            ],
            {
                duration: time, //  动画时长  (单位毫秒)
                easing: "ease", // 平滑
                // iterations: 1, //  重复次数  （无限循环：Infinity）
            }
        );
    };
})();

const Message = {
    success: (option) => getTypeModal("success", option),
    error: (option) => getTypeModal("error", option),
    warn: (option) => getTypeModal("warn", option),
};

export default Message;
