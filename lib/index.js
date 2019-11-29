function defaultColor() { return "#000000" }
function white() { return "#FFFFFF" }
function aqua() { return "#1ABC9C" }
function green() { return "#2ECC71" }
function blue() { return "#3498DB" }
function purple() { return "#9B59B6" }
function luminousvividpink() { return "#E91E63" }
function gold() { return "#F1C40F" }
function orange() { return "#E67E22" }
function red() { return "#E74C3C" }
function gray() { return "#95A5A6" }
function navy() { return "#34495E" }
function darkaqua() { return "#11806A" }
function darkgreen() { return "#1F8B4C" }
function darkblue() { return "#206694" }
function darkpurple() { return "#71368A" }
function darkvividpink() { return "#AD1457" }
function darkgold() { return "#C27C0E" }
function darkorange() { return "#A84300" }
function darkred() { return "#992D22" }
function darkgray() { return "#979C9F" }
function darkergray() { return "#7F8C8D" }
function lightgray() { return "#BCC0C0" }
function darknavy() { return "#2C3E50" }
function blurple() { return "#7289DA" }
function grayple() { return "#99AAB5" }
function darkbutnotblack() { return "#2C2F33" }
function notquiteblack() { return "#23272A" }
function randomColor() { return "#"+(0x1000000+(Math.random())*0xFFFFFF).toString(16).substring(1, 7).toUpperCase() }

module.exports = defaultColor(), {
    defaultColor: defaultColor(),
    white: white(),
    aqua: aqua(),
    green: green(),
    blue: blue(),
    purple: purple(),
    luminousvividpink: luminousvividpink(),
    gold: gold(),
    orange: orange(),
    red: red(),
    gray: gray(),
    navy: navy(),
    darkaqua: darkaqua(),
    darkblue: darkblue(),
    darkgreen: darkgreen(),
    darkpurple: darkpurple(),
    darkvividpink: darkvividpink(),
    darkgold: darkgold(),
    darkorange: darkorange(),
    darkred: darkred(),
    darkgray: darkgray(),
    darkergray: darkergray(),
    lightgray: lightgray(),
    darknavy: darknavy(),
    blurple: blurple(),
    grayple: grayple(),
    darkbutnotblack: darkbutnotblack(),
    notquiteblack: notquiteblack(),
    random: randomColor()
}