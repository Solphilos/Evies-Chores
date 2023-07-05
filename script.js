const choresPage = document.querySelector('.choresPage');
const pointsPage = document.querySelector('.pointsPage');
const buttonBox = document.querySelector('.buttonBox');
choresPage.style.display = "none";
pointsPage.style.display = "none";


// click function reveals "chores" page, hides all others
goToChores = () => {
    choresPage.style.display = "flex";
    buttonBox.style.display = "none";
    
} 

// click function reveals "point system" page, hides all others
goToPoints = () => {
    pointsPage.style.display = "flex";
    buttonBox.style.display = "none";
}


   