const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const menuDrop = document.querySelector('.cabecalho__perfil')
const listaInfos = document.querySelector('.listaInfos')

menuDrop.addEventListener('click', () => {
    listaInfos.classList.toggle('listaInfos--ativo')
})







const menuLateralInicio = document.querySelector('#menuLateralInicio')
const menuLateralVideos = document.querySelector('#menuLateralVideos')
const menuLateralPicos = document.querySelector('#menuLateralPicos')
const menuLateralIntegrantes = document.querySelector('#menuLateralIntegrantes')
const menuLateralCamisas = document.querySelector('#menuLateralCamisas')
const menuLateralPinturas = document.querySelector('#menuLateralPinturas')


menuLateralInicio.classList.toggle('mmenu-lateral__link--ativo')

menuLateralPicos.classList.toggle('mmenu-lateral__link--ativo')
menuLateralIntegrantes.classList.toggle('mmenu-lateral__link--ativo')
menuLateralCamisas.classList.toggle('mmenu-lateral__link--ativo')
menuLateralPinturas.classList.toggle('mmenu-lateral__link--ativo')


menuLateralInicio.addEventListener('click', () => {
    menuLateralInicio.classList.add('menu-lateral__link--ativo')
    menuLateralVideos.classList.remove('menu-lateral__link--ativo')
    menuLateralPicos.classList.remove('menu-lateral__link--ativo')
    menuLateralIntegrantes.classList.remove('menu-lateral__link--ativo')
    menuLateralCamisas.classList.remove('menu-lateral__link--ativo')
    menuLateralPinturas.classList.remove('menu-lateral__link--ativo')

})

menuLateralVideos.addEventListener('click', () => {
    menuLateralVideos.classList.add('menu-lateral__link--ativo')
    menuLateralInicio.classList.remove('menu-lateral__link--ativo')
    menuLateralPicos.classList.remove('menu-lateral__link--ativo')
    menuLateralIntegrantes.classList.remove('menu-lateral__link--ativo')
    menuLateralCamisas.classList.remove('menu-lateral__link--ativo')
    menuLateralPinturas.classList.remove('menu-lateral__link--ativo')

})

menuLateralPicos.addEventListener('click', () => {
    menuLateralPicos.classList.add('menu-lateral__link--ativo')
    menuLateralInicio.classList.remove('menu-lateral__link--ativo')
    menuLateralVideos.classList.remove('menu-lateral__link--ativo')
    menuLateralIntegrantes.classList.remove('menu-lateral__link--ativo')
    menuLateralCamisas.classList.remove('menu-lateral__link--ativo')
    menuLateralPinturas.classList.remove('menu-lateral__link--ativo')

})

menuLateralIntegrantes.addEventListener('click', () => {
    menuLateralIntegrantes.classList.add('menu-lateral__link--ativo')
    menuLateralVideos.classList.remove('menu-lateral__link--ativo')
    menuLateralPicos.classList.remove('menu-lateral__link--ativo')
    menuLateralInicio.classList.remove('menu-lateral__link--ativo')
    menuLateralCamisas.classList.remove('menu-lateral__link--ativo')
    menuLateralPinturas.classList.remove('menu-lateral__link--ativo')

})

menuLateralCamisas.addEventListener('click', () => {
    menuLateralCamisas.classList.add('menu-lateral__link--ativo')
    menuLateralVideos.classList.remove('menu-lateral__link--ativo')
    menuLateralPicos.classList.remove('menu-lateral__link--ativo')
    menuLateralIntegrantes.classList.remove('menu-lateral__link--ativo')
    menuLateralInicio.classList.remove('menu-lateral__link--ativo')
    menuLateralPinturas.classList.remove('menu-lateral__link--ativo')

})

menuLateralPinturas.addEventListener('click', () => {
    menuLateralPinturas.classList.add('menu-lateral__link--ativo')
    menuLateralVideos.classList.remove('menu-lateral__link--ativo')
    menuLateralPicos.classList.remove('menu-lateral__link--ativo')
    menuLateralIntegrantes.classList.remove('menu-lateral__link--ativo')
    menuLateralInicio.classList.remove('menu-lateral__link--ativo')
    menuLateralCamisas.classList.remove('menu-lateral__link--ativo')

})


