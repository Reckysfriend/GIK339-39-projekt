const url = "http//localhost:3000/reviews";

window.addEventListener("load", fetchData);

function fetchData() {
  fetch(url)
    .then((result) => result.json())
    .then((reviews) => {
      if (reviews.length > 0) {
        //ul design
        let html = "";
        reviews.forEach((review) => {
          // li design
          html += "";
          // Needs to be added to the div element that contains the list
          const listContainer = document.getElementById("listContainer");
          listContainer.innerHTML = "";
          listContainer.insertAdjacentHTML("beforeend", html);
        });
      }
    });
}

function setCurrentUser(id) {
  fetch(`${url}/${id}`)
    .then((result) => result.json())
    .then((review) => {
      userForm.title = review.title;
      useForm.reviewer = review.reviewer;
      userForm.rating = review.rating;
      userForm.genre1 = review.genre1;
      userForm.genre2 = review.genre2;
      userForm.comment = review.comment;

      localStorage.setItem("currentID", review.id);
    });
}

function deleteUser(id) {
  fetch(`${url}/${id}`, { method: "DELETE" }).then((result) => fetchData());
}

userForm.addEventListener("submit", handleSumbit);

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
  serverObject.title = userForm.title.value;
  serverObject.reviewer = userForm.reviewer.value;
  serverObject.rating = userForm.rating.value;
  serverObject.genre1 = userForm.genre1.value;
  serverObject.genre2 = userForm.genre2.value;
  serverObject.comment = userForm.comment.value;

  const id = localStorage.getItem("currentID");
  if (id) {
    serverObject.id = id;
  }

  const request = new request(url, {
    method: serverObject.id ? "PUT" : "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(serverObject),
  });

  fetch(request).then((response) => {
    fetchData();
    localStorage.removeItem("currentID");
    userForm.reset();
  });
}
