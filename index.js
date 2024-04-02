const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createContent() {
    let pageContent = ""
    for (let obj of posts) {
        pageContent += `
        <section class="post-container">
            <div class="post-header">
                <img id="post-avatar" class="user-avatar" src="${obj.avatar}" alt="User profile picture">
                <div class="user-details">
                    <p id="post-header-title">${obj.name}</p>
                    <p id="post-header-location">${obj.location}</p>
                </div>
            </div>
            <div class="post-img-container">
                <img id="post-img" src="${obj.post}">
            </div>
            <div class="post-interactions">
                <img id="like-btn" class="interaction-btn" src="images/icon-heart.png">
                <img id="comment-btn" class="interaction-btn" src="images/icon-comment.png">
                <img id="share-btn" class="interaction-btn" src="images/icon-dm.png">
            </div>
            <div class="post-activity">
                <p id="post-likes"><span id="num-likes">${obj.likes}</span> likes</p>
                <p id="usr-comment"><span id="usr-name">${obj.username}</span> ${obj.comment}</p>
            </div>
        </section>
        `
    }
    return pageContent
}

function renderContent() {
    let mainContent = createContent()
    let mainElement = document.querySelector("main")
    mainElement.innerHTML = mainContent
}

renderContent()