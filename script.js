// script.js

document.addEventListener("DOMContentLoaded", () => {
	const movieList = document.getElementById("movie-list");
	const videoModal = document.getElementById("video-modal");
	const closeBtn = document.querySelector(".close-btn");
	const movieTitle = document.getElementById("movie-title");
	const movieVideo = document.getElementById("movie-video");

	movieList.addEventListener("click", (e) => {
		// Check if the clicked element is an image or label within the list item
		if (e.target.tagName === "IMG" || e.target.tagName === "LABEL") {
			const movieItem = e.target.closest("li"); // Get the closest <li> element
			const videoUrl = movieItem.getAttribute("data-video");
			const title = movieItem.querySelector("label").textContent;

			movieTitle.textContent = title;
			movieVideo.src = videoUrl;

			videoModal.style.display = "block";
		}
	});

	closeBtn.addEventListener("click", () => {
		videoModal.style.display = "none";
		movieVideo.pause();
		movieVideo.src = "";
	});

	window.addEventListener("click", (e) => {
		if (e.target === videoModal) {
			videoModal.style.display = "none";
			movieVideo.pause();
			movieVideo.src = "";
		}
	});
});
