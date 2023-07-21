const _easing = {
    /**
     * 利用できる関数の一覧を取得します。
     * @param {String} [filter=""] - 検索値(部分一致)
     * @returns {String[]} - 条件に該当するeasing関数の一覧
     */
    "getList": (filter = "") => [
        "linear",
        "easeInSine",
        "easeOutSine",
        "easeInOutSine",
        "easeInQuad",
        "easeOutQuad",
        "easeInOutQuad",
        "easeInCubic",
        "easeOutCubic",
        "easeInOutCubic",
        "easeInQuart",
        "easeOutQuart",
        "easeInOutQuart",
        "easeInExpo",
        "easeOutExpo",
        "easeInOutExpo",
        "easeInCirc",
        "easeOutCirc",
        "easeInOutCirc"
    ].filter((v) => v.indexOf(filter) >= 0),
    /**
     * easing : 直線移動
     * @param {Number} i - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "linear": (x) => x == 1 ? x : !x ? 0 : (
        x
    ),
    /**
     * easing : sin-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInSine": (x) => x == 1 ? x : !x ? 0 : (
        1 - Math.cos((x * Math.PI) / 2)
    ),
    /**
     * easing : sin-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutSine": (x) => x == 1 ? x : !x ? 0 : (
        Math.sin((x * Math.PI) / 2)
    ),
    /**
     * easing : sin-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutSine": (x) => x == 1 ? x : !x ? 0 : (
        -(Math.cos(Math.PI * x) - 1) / 2
    ),
    /**
     * easing : 2乗-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInQuad": (x) => x == 1 ? x : !x ? 0 : (
        x ** 2
    ),
    /**
     * easing : 2乗-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutQuad": (x) => x == 1 ? x : !x ? 0 : (
        1 - (1 - x) ** 2
    ),
    /**
     * easing : 2乗-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutQuad": (x) => x == 1 ? x : !x ? 0 : (
        x < 0.5 ? 2 * x ** 2 : 1 - (-2 * x + 2) ** 2 / 2
    ),
    /**
     * easing : 3乗-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInCubic": (x) => x == 1 ? x : !x ? 0 : (
        x ** 3
    ),
    /**
     * easing : 3乗-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutCubic": (x) => x == 1 ? x : !x ? 0 : (
        1 - (1 - x) ** 3
    ),
    /**
     * easing : 3乗-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutCubic": (x) => x == 1 ? x : !x ? 0 : (
        x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2
    ),
    /**
     * easing : 4乗-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInQuart": (x) => x == 1 ? x : !x ? 0 : (
        x ** 4
    ),
    /**
     * easing : 4乗-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutQuart": (x) => x == 1 ? x : !x ? 0 : (
        1 - (1 - x) ** 4
    ),
    /**
     * easing : 4乗-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutQuart": (x) => x == 1 ? x : !x ? 0 : (
        x < 0.5 ? 8 * x ** 4 : 1 - (-2 * x + 2) ** 4 / 2
    ),
    /**
     * easing : 指数関数-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInExpo": (x) => x == 1 ? x : !x ? 0 : (
        Math.pow(2, 10 * x - 10)
    ),
    /**
     * easing : 指数関数-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutExpo": (x) => x == 1 ? x : !x ? 0 : (
        1 - Math.pow(2, -10 * x)
    ),
    /**
     * easing : 指数関数-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutExpo": (x) => x == 1 ? x : !x ? 0 : (
        x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2
    ),
    /**
     * easing : 楕円-加速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInCirc": (x) => x == 1 ? x : !x ? 0 : (
        1 - Math.sqrt(1 - Math.pow(x, 2))
    ),
    /**
     * easing : 楕円-減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeOutCirc": (x) => x == 1 ? x : !x ? 0 : (
        Math.sqrt(1 - Math.pow(x - 1, 2))
    ),
    /**
     * easing : 楕円-加減速
     * @param {Number} x - 0以上1以下の数
     * @returns {Number} - 0以上1以下の数
     */
    "easeInOutCirc": (x) => x == 1 ? x : !x ? 0 : (
        x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    )
};