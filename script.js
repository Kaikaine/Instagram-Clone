let likeCount = 0;
let postLikes = document.querySelector(".likes");
postLikes.textContent = `${likeCount} likes`;
let like = document.querySelector(".like-button");
like.addEventListener("click", () => {
  console.log("func start");
  likeCount++;
  postLikes.textContent = `${likeCount} likes`;
  console.log("it ran");
});
