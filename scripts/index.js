//pick up any div within footers
const divs = document.querySelectorAll(".footer div");


const table = document.querySelector(".collabse");
const like = document.querySelectorAll(".footer div:nth-child(2)");
const dislike = document.querySelectorAll(".footer div:nth-child(4)");
const button = document.querySelector("section");
const textarea = document.querySelector(".creator-wrapper");
const insert = document.querySelector("button");
const list = document.querySelector(".list");

const textBox = document.querySelector("textarea");
insert.addEventListener("click", () => {
    list.innerHTML += `<article style="margin: -1px auto; direction : rtl;">
    <a href="#"
        ><img
            src="images/download.jpeg"
            alt="username"
    /></a>
    <p class="content">
    ${""//textBox.value
    }
    روی پست جدید استایل css اعمال نمیشه و ما مشکل داریم
    </p>
    <footer class="footer">
        <div title="comments">A</div>
        <div title="like">B</div>
        <div title="republish">E</div>
        <div title="dislike">I</div>
        <div title="information">J</div>
    </footer>
</article>`;

    table.children[0].children[0].appendChild(post);
});

button.addEventListener("click", () => {
    if (!textarea.classList.contains("none")) {
        textarea.classList.add("none");
    } else {
        textarea.classList.remove("none");
    }
});

for (let li of like) {
    li.addEventListener("click", () => {
        if (li.textContent == "B") {
            li.textContent = "C";
        } else if (li.textContent == "C") {
            li.textContent = "B";
        }
    });
}

for (let dis of dislike) {
    dis.addEventListener("click", () => {
        if (dis.textContent == "I") {
            dis.textContent = "D";
        } else if (dis.textContent == "D") {
            dis.textContent = "I";
        }
    });
}

function dislikeHandler() {}

function createArticle({ post }) {}

