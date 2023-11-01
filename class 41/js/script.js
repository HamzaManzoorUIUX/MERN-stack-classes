function menuBtnClick() {
    const shadow = document.querySelector('.shadow')
    const menuList = document.querySelector('.menu-list')
    shadow.style.left = "0px"
    menuList.style.left = "0px"
}
function menuHide() {
    const shadow = document.querySelector('.shadow')
    const menuList = document.querySelector('.menu-list')
    menuList.style.left = "-100%"
    shadow.style.left = "-100%";

}
(() => {
    let menuBtn = document.getElementById('subMenuBtn')
    console.log('menuBtn', menuBtn);
})()