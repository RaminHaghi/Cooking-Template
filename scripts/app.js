const navToggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.cover');
const likeRecipeWrapper = document.querySelectorAll('.recipes-like');
const likeRecipes = document.querySelectorAll('.recipes-like__icon'); // Select all like icons

navToggleBtn.addEventListener('click', function () {
    this.classList.toggle('menu-toggle--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
});

likeRecipeWrapper.forEach(function (likeRecipe) {
    likeRecipe.addEventListener('click', function () {
        this.classList.toggle('recipes-like__icon--liked'); // Toggle the class only on the clicked element
    });
});
