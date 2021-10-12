const html = document.querySelector("html")
const checkbox = document.getElementById("switch")

const imgI = document.getElementById("imgI")
const imgII = document.getElementById("imgII")

const btn = document.getElementById("switch")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorTxtHeader: getStyle(html, "--color-txtheader"),
    colorSub: getStyle(html, "--color-sub"),
    colorTxtOne: getStyle(html, "--color-txtone"),
    colorTxtTwo: getStyle(html, "--color-txttwo"),

    colorTxtHomeDest: getStyle(html, "--color-txthomedest"),
    colorBorder: getStyle(html, "--color-border"),

    bgFooter: getStyle(html, "--bg-footer"),
    footerTxt: getStyle(html, "--footer-txt"),

    bgHamb: getStyle(html, "--bg-hamb"),
}

const darkMode = {
    bg: "rgb(19, 19, 19)",
    colorTxtHeader: "rgb(190, 190, 190)",
    
    colorSub: "rgb(183, 183, 183)",
    colorTxtOne: "rgb(206, 206, 206)",
    colorTxtTwo: "rgb(222, 222, 222)",

    colorTxtHomeDest: "#88765b",
    colorBorder: "rgb(90, 90, 90",

    bgFooter: "rgb(200, 200, 200)",
    footerTxt: "rgb(35, 35, 35)",

    bgHamb: "rgb(25, 25, 25)",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => { Object.keys(colors).map(key => 
        
    html.style.setProperty(transformKey(key), colors[key]))

    imgI.src="img/cont5dark.png"
    imgII.src="img/cont6dark.png"
}

checkbox.addEventListener("change", ({target}) => {

    target.checked ? changeColors(darkMode) & Cookies.set('dark', true, { expires: 10000}) 
    : changeColors(initialColors) & Cookies.remove('dark')
   
})

if(Cookies.get('dark')){

    checkbox.checked = true
    changeColors(darkMode)

}