const buttons = document.querySelectorAll(".lang-switch button");

buttons.forEach((btn) => {
    btn.onclick = () => {
        document.documentElement.lang = btn.dataset.lang;
        buttons.forEach((b) => b.classList.toggle("active", b === btn));
    };
});