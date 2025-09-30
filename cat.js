function switchOff(){
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent="switchOff"
    document.getElementById("onSwitch").style.backgroundColor="grey"
    document.getElementById("offSwitch").style.backgroundColor="red"
}
function switchOn(){
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchStatus").textContent="switchOn"
    document.getElementById("onSwitch").style.backgroundColor="green"
     document.getElementById("offSwitch").style.backgroundColor="grey"
}