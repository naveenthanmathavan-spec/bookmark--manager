function addBookmark() {
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;

    if (name === "" || url === "") {
        alert("Please fill all fields!");
        return;
    }

    let bookmark = { name: name, url: url };

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    document.getElementById("name").value = "";
    document.getElementById("url").value = "";

    displayBookmarks();
}

function displayBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    let list = document.getElementById("bookmarkList");
    list.innerHTML = "";

    bookmarks.forEach((b, index) => {
        list.innerHTML += `
            <li>
                <a href="${b.url}" target="_blank">${b.name}</a>
                <br><br>
                <button onclick="deleteBookmark(${index})">Delete</button>
            </li>
        `;
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    bookmarks.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    displayBookmarks();
}

window.onload = displayBookmarks;
