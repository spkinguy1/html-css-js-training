//pick up any div within footers
const divs = document.querySelectorAll('.footer div')
const dislike = document.querySelector('.footer div:nth-child(4)')

dislike.onclick(() => {
    dislike.remove()
    dislike = document.createElement('div')
})







function createArticle({post}){

}