const search = document.getElementById("search");
const rows = [...document.querySelectorAll("[data-name]")];

search?.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    for (const row of rows)
        row.hidden = !row.dataset.name.includes(query);
});
