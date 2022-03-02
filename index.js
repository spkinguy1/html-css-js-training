//pick up any div within footers
const divs = document.querySelectorAll(".footer div");
const like = document.querySelector(".footer div:nth-child(2)");
const dislike = document.querySelector(".footer div:nth-child(4)");

like.addEventListener("click", likeHandller);

dislike.addEventListener('click',dislikeHandler)





function dislikeHandler() {
    if (dislike.textContent == "I")
    dislike.textContent = "D";
}


function likeHandller() {
        if (like.textContent == "B")
        like.textContent = "C";
}



function createArticle({ post }) {}
