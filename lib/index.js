/**
 * The default color (a.k.a. black)
 * @example
 * // Just mentioning the variable name of the module (In this case) it's colors)
 * (color)
 * @example
 * // Mentioning the name
 * (colors.defaultColor())
 */
function defaultColor() { return "#000000" }

module.exports = defaultColor(), {
    /**
     * The default color (a.k.a. black)
     * @example
     * // Just mentioning the variable name of the module (In this case) it's colors)
     * (colors)
     * @example
     * // Mentioning the name
     * (colors.defaultColor())
     */
    defaultColor() { return "#000000" },
    /**
     * The color white
     * @example
     * (colors.white())
     */
    white() { return "#FFFFFF" },
    /**
     * The color aqua
     * @example
     * (colors.aqua())
     */
    aqua() { return "#1ABC9C" },
    /**
     * The color green
     * @example
     * (colors.green())
     */
    green() { return "#2ECC71" },
    /**
     * The color blue
     * @example
     * (colors.blue())
     */
    blue() { return "#3498DB" },
    /**
     * The color purple
     * @example
     * (colors.purple())
     */
    purple() { return "#9B59B6" },
    /**
     * The color pink, with the variants lumious and vivid.
     * @example
     * (colors.luminousvividpink())
     */
    luminousvividpink() { return "#E91E63" },
    /**
     * The color gold
     * @example
     * (colors.gold())
     */
    gold() { return "#F1C40F" },
    /**
     * The color orange
     * @example
     * (colors.orange())
     */
    orange() { return "#E67E22" },
    /**
     * The color red
     * @example
     * (colors.red())
     */
    red() { return "#E74C3C" },
    /**
     * The color gray
     * @example
     * (colors.gray())
     */
    gray() { return "#95A5A6" },
    /**
     * The color navy
     * @example
     * (colors.navy())
     */
    navy() { return "#34495E" },
    /**
     * The color aqua, with the variant dark.
     * @example
     * (colors.darkaqua())
     */
    darkaqua() { return "#11806A" },
    /**
     * The color green, with the variant dark.
     * @example
     * (colors.darkgreen())
     */
    darkgreen() { return "#1F8B4C" },
    /**
     * The color blue, with the variant dark.
     * @example
     * (colors.darkblue())
     */
    darkblue() { return "#206694" },
    /**
     * The color purple, with the variant dark.
     * @example
     * (colors.darkpurple())
     */
    darkpurple() { return "#71368A" },
    /**
     * The color darkvividpink, with the variant dark.
     * @example
     * (colors.darkvividpink())
     */
    darkvividpink() { return "#AD1457" },
    /**
     * The color gold, with the variant dark.
     * @example
     * (colors.darkgold())
     */
    darkgold() { return "#C27C0E" },
    /**
     * The color orange, with the variant dark.
     * @example
     * (colors.darkorange())
     */
    darkorange() { return "#A84300" },
    /**
     * The color red, with the variant dark.
     * @example
     * (colors.darkred())
     */
    darkred() { return "#992D22" },
    /**
     * The color gray, with the variant dark.
     * @example
     * (colors.darkgray())
     */
    darkgray() { return "#979C9F" },
    /**
     * The color gray, with the variant darker.
     * @example
     * (colors.darkergray())
     */
    darkergray() { return "#7F8C8D" },
    /**
     * The color gray, with the variant light.
     * @example
     * (colors.lightgray())
     */
    lightgray() { return "#BCC0C0" },
    /**
     * The color navy, with the variant dark.
     * @example
     * (colors.darkaqua())
     */
    darknavy() { return "#2C3E50" },
    /**
     * The color blue, mixed with the color purple.
     * @example
     * (colors.blurple())
     */
    blurple() { return "#7289DA" },
    /**
     * The color gray, mixed with the color purple.
     * @example
     * (colors.grayple())
     */
    grayple() { return "#99AAB5" },
    /**
     * The color dark, not to be confused with black.
     * @example
     * (colors.darkbutnotblack())
     */
    darkbutnotblack() { return "#2C2F33" },
    /**
     * The color black, but it is not quite black.
     * @example
     * (colors.notquiteblack())
     */
    notquiteblack() { return "#23272A" },
    /**
     * A randomized color.
     * @example
     * (colors.randomColor())
     */
    randomColor() { return "#"+(0x1000000+(Math.random())*0xFFFFFF).toString(16).substring(1, 7).toUpperCase() }
}