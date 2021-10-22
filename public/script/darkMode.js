

const html = document.querySelector("html")
const checkbox = document.getElementById("switch")

const imgI = document.getElementById("imgFly")

const imgFb = document.getElementById("imgFb")
const imgGit = document.getElementById("imgGit")
const imgIg = document.getElementById("imgIg")

const imgCrist = document.getElementById("imgCrist")
const imgBust = document.getElementById("imgBust")

const btn = document.getElementById("switch")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorTxtHeader: getStyle(html, "--color-txtheader"),
    colorSub: getStyle(html, "--color-sub"),
    colorTxtOne: getStyle(html, "--color-txtone"),
    colorTxtTwo: getStyle(html, "--color-txttwo"),

    preTitle: getStyle(html, "pre-title"),

    colorTxtHomeDest: getStyle(html, "--color-txthomedest"),
    colorBorder: getStyle(html, "--color-border"),
    colorBorderTwo: getStyle(html, "--color-bordertwo"),

    labelN: getStyle(html, "--label-n"),
    labelH: getStyle(html, "--label-h"),
    labelC: getStyle(html, "--label-c"),


    bgFooter: getStyle(html, "--bg-footer"),
    footerTxt: getStyle(html, "--footer-txt"),

    bgHamb: getStyle(html, "--bg-hamb"),

    colorShadow: getStyle(html, "--color-shadow"),
}

const darkMode = {
    bg: "rgb(19, 19, 19)",
    colorTxtHeader: "rgb(222, 222, 222)",
    
    colorSub: "rgb(183, 183, 183)",
    colorTxtOne: "rgb(255, 255, 255)",
    colorTxtTwo: "rgb(195, 195, 195)",

    preTitle: "rgba(120, 120, 120, 0.82)",

    labelN: "rgb(80, 80, 80)",
    labelH: "rgb(135, 135, 135)",
    labelC: "rgb(210, 210, 210)",

    colorTxtHomeDest: "#88765b",
    colorBorder: "rgb(90, 90, 90)",
    colorBorderTwo: "rgb(50, 50, 50)",
    bgFooter: "rgb(255, 255, 255)",
    footerTxt: "rgb(30, 30, 30)",

    bgHamb: "rgb(25, 25, 25)",

    colorShadow: "rgba(0, 0, 0, 0.650)",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => { Object.keys(colors).map(key => 
        
    html.style.setProperty(transformKey(key), colors[key]))

    
}

checkbox.addEventListener("change", ({target}) => {

    target.checked ? changeColors(darkMode) & Cookies.set('dark', true, { expires: 10000})  
    : changeColors(initialColors) & Cookies.remove('dark') 
   
})

checkbox.addEventListener("change", ({target}) => {

    target.checked ? imgI.style.backgroundImage = "url('/img/airw.png')" : imgI.style.backgroundImage = "url('/img/air.png')"
    target.checked ? imgFb.src = "img/fb.png" : imgFb.src = "img/fbw.png"
    target.checked ? imgGit.src = "img/git.png" : imgGit.src = "img/gitw.png"
    target.checked ? imgIg.src = "img/insta.png" : imgIg.src = "img/instaw.png"

    target.checked ? imgCrist.src = "img/cristw.png" : imgCrist.src = "img/crist.png"
    target.checked ? imgBust.src = "img/bustw.png" : imgBust.src = "img/bust.png"
   
})

imgI.addEventListener("mouseover", ()=> {

    imgI.style.backgroundImage = "url('/img/airhover.png')"
    
   
})

imgI.addEventListener("mouseleave", ()=> {
    if(Cookies.get('dark')){

        imgI.style.backgroundImage = "url('/img/airw.png')"
        
    
    }else{
        imgI.style.backgroundImage = "url('/img/air.png')"


    }
   
})


if(Cookies.get('dark')){
    
    checkbox.checked = true
    changeColors(darkMode)

    imgI.style.backgroundImage = "url('/img/airw.png')"
    imgFb.src = "img/fb.png"
    imgGit.src = "img/git.png"
    imgIg.src = "img/insta.png"

    imgCrist.src = "img/cristw.png"
    imgBust.src = "img/bustw.png"

    

}else{

    imgFb.src = "img/fbw.png"
    imgGit.src = "img/gitw.png"
    imgIg.src = "img/instaw.png"

    imgCrist.src = "img/crist.png"
    imgBust.src = "img/bust.png"

}