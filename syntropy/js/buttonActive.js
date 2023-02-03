let buttonState;


function buttonActive(buttonState) {
    if (buttonState == 1 ){
        document.querySelector('#SolUSDLink').classList.replace("menu", "menuActive")
        document.querySelector('#solUsd').style.display = "flex"
        document.querySelector('#BorderFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#borderFactory').style.display = "none"
        document.querySelector('#MovimentFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#movimentFactory').style.display = "none"
        document.querySelector('#BordersLink').classList.replace("menuActive", "menu")
        document.querySelector('#borders').style.display = "none"
        document.querySelector('#MovimentsLink').classList.replace("menuActive", "menu")
        document.querySelector('#moviments').style.display = "none"
    } else if 
    (buttonState == 2 ){
        document.querySelector('#SolUSDLink').classList.replace("menuActive", "menu")
        document.querySelector('#solUsd').style.display = "none"
        document.querySelector('#BorderFactoryLink').classList.replace("menu", "menuActive")
        document.querySelector('#borderFactory').style.display = "flex"
        document.querySelector('#MovimentFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#movimentFactory').style.display = "none"
        document.querySelector('#BordersLink').classList.replace("menuActive", "menu")
        document.querySelector('#borders').style.display = "none"
        document.querySelector('#MovimentsLink').classList.replace("menuActive", "menu")
        document.querySelector('#moviments').style.display = "none"
    } else if 
    (buttonState == 3 ){
        document.querySelector('#SolUSDLink').classList.replace("menuActive", "menu")
        document.querySelector('#solUsd').style.display = "none"
        document.querySelector('#BorderFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#borderFactory').style.display = "none"
        document.querySelector('#MovimentFactoryLink').classList.replace("menu", "menuActive")
        document.querySelector('#movimentFactory').style.display = "flex"
        document.querySelector('#BordersLink').classList.replace("menuActive", "menu")
        document.querySelector('#borders').style.display = "none"
        document.querySelector('#MovimentsLink').classList.replace("menuActive", "menu")
        document.querySelector('#moviments').style.display = "none"
    } else if 
    (buttonState == 4 ){
        document.querySelector('#SolUSDLink').classList.replace("menuActive", "menu")
        document.querySelector('#solUsd').style.display = "none"
        document.querySelector('#BorderFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#borderFactory').style.display = "none"
        document.querySelector('#MovimentFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#movimentFactory').style.display = "none"
        document.querySelector('#BordersLink').classList.replace("menu", "menuActive")
        document.querySelector('#borders').style.display = "flex"
        document.querySelector('#MovimentsLink').classList.replace("menuActive", "menu")
        document.querySelector('#moviments').style.display = "none"
    } else if 
    (buttonState == 5 ){
        document.querySelector('#SolUSDLink').classList.replace("menuActive", "menu")
        document.querySelector('#solUsd').style.display = "none"
        document.querySelector('#BorderFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#borderFactory').style.display = "none"
        document.querySelector('#MovimentFactoryLink').classList.replace("menuActive", "menu")
        document.querySelector('#movimentFactory').style.display = "none"
        document.querySelector('#BordersLink').classList.replace("menuActive", "menu")
        document.querySelector('#borders').style.display = "none"
        document.querySelector('#MovimentsLink').classList.replace("menu", "menuActive")
        document.querySelector('#moviments').style.display = "flex"
    }
    
}