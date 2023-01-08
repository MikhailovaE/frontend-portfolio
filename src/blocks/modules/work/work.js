function worksFilter() {
    const buttons = document.querySelectorAll(".filters ul li");
    const cards = document.querySelectorAll(".single-work");

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === "all";
            if (isItemFiltered && !isShowAll) {
                item.classList.add("hide");
            } else {
                item.classList.remove("hide");
            }
        });
    }

    function activeFilterButton(category) {
        buttons.forEach((button) => {
            button.classList.add("active");
            if (button.dataset.filter !== category) {
                button.classList.remove("active");
            } else {
                button.classList.add("active");
            }
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentCategory = button.dataset.filter;
            console.log(currentCategory);
            activeFilterButton(currentCategory);
            filter(currentCategory, cards);
        });
    });
}

worksFilter();