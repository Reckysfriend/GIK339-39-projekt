const url = "http://localhost:3000/reviews";

window.addEventListener("load", fetchData);

function fetchData() {
  fetch(url)
    .then((result) => result.json())
    .then((reviews) => {
      if (reviews.length > 0) {
        let html = "<ul>";
        reviews.forEach((review) => {
          let bgColor = "";
          let colorBorder = "";
          let buttonColor = "";
          let hoverColor = "";
          if (review.rating == 5) {
            bgColor = "bg-yellow-200";
            colorBorder = "border-yellow-400";
            buttonColor = "bg-yellow-300";
            hoverColor = "bg-yellow-700";
          } else if (review.rating < 5) {
            bgColor = "bg-red-200";
            colorBorder = "border-red-400";
            buttonColor = "bg-red-300";
            hoverColor = "bg-red-700";
          } else if (review.rating > 5) {
            bgColor = "bg-green-200";
            colorBorder = "border-green-400";
            buttonColor = "bg-green-300";
            hoverColor = "bg-green-700";
          }
          html += `<li class="${bgColor} basis-1/4 p-2 m-3 rounded-md border-2 ${colorBorder} flex flex-col justify-between"
          >
            <div class="">
              <h3 class="text-center text-xl underline">${review.title}</h3>
            </div>

            <div class="grid grid-cols-2 grid-rows-2 text-center px-10">
              <p>Genre 1: ${review.genre1}</p>
              <p>Genre 2: ${review.genre2}</p>
              <p class="">${review.reviewer}</p>
              <p class="">${review.rating}/10</p>
            </div>
            <hr />
            <p class="text-xs text-center p-3">${review.comment}</p>
            <hr />
            <div class="grid-cols-2 grid-rows-2 text-center px-10">
              <button type="button"
                class="bg-blue-300 border-red-500 hover:bg-blue-700 text-white font-bold m-2 py-1 px-2 border border-blue-700 rounded min-w-1/2 justify-self-center"
                onclick="setCurrentReview(${review.id})"
              >
                Edit
              </button>
              <button type="button"
                class="bg-blue-300 border-red-500 hover:bg-blue-700 text-white font-bold m-2 py-1 px-2 border border-blue-700 rounded min-w-1/2"
                onclick="deleteReview(${review.id})"
              >
                Delete
              </button>
            </div>
          </li>`;
        });
        html += `</ul>`;
        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = "";
        listContainer.insertAdjacentHTML("beforeend", html);
      }
    });
}

function setCurrentReview(id) {
  console.log(`${url}/${id}`);
  fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then((review) => {
      console.log(review);

      reviewForm.title.value = review.title;
      reviewForm.reviewer.value = review.reviewer;
      reviewForm.rating.value = review.rating;
      reviewForm.genre1.value = review.genre1;
      reviewForm.genre2.value = review.genre2;
      reviewForm.comment.value = review.comment;

      localStorage.setItem("currentID", review.id);
    });
}

function deleteReview(id) {
  console.log("delete", id);
  fetch(`${url}/${id}`, { method: "DELETE" }).then((result) => {
    showNotification("Your review has been deleted!", "delete");
    setTimeout(() => {
      fetchData();
    }, 10000);
  });
}

const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", handleSumbit);

function handleSumbit(e) {
  e.preventDefault();
  const serverObject = {
    title: "",
    reviewer: "",
    rating: "",
    genre1: "",
    genre2: "",
    comment: "",
  };
  serverObject.title = reviewForm.title.value;
  serverObject.reviewer = reviewForm.reviewer.value;
  serverObject.rating = reviewForm.rating.value;
  serverObject.genre1 = reviewForm.genre1.value;
  serverObject.genre2 = reviewForm.genre2.value;
  serverObject.comment = reviewForm.comment.value;

  const id = localStorage.getItem("currentID");
  if (id) {
    serverObject.id = id;
  }

  const request = new Request(url, {
    method: serverObject.id ? "PUT" : "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(serverObject),
  });

  fetch(request).then((response) => {
    fetchData();
    localStorage.removeItem("currentID");
    reviewForm.reset();
  });
}

function clearForm() {
  reviewForm.title.value = "";
  reviewForm.reviewer.value = "";
  reviewForm.rating.value = "";
  reviewForm.genre1.value = "";
  reviewForm.genre2.value = "";
  reviewForm.comment.value = "";
}
function showNotification(message, type = "success") {
  const note = document.getElementById("notification");

  note.textContent = message;
  note.className = `fixed top-5 right-5 px-6 py-3 rounded shadow-lg text-white
    ${type === "delete" ? "bg-red-500" : "bg-green-500"}`;

  note.classList.remove("hidden");

  setTimeout(() => {
    note.classList.add("hidden");
  }, 100000);
}
