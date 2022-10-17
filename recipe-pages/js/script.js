//* Change the menu color for the visited page

const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('nav a').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

//* Functionality for burger menu in smaller screen sizes

let menuClicked = false;
const clickMenu = () => {
  if (menuClicked === false) {
    document.getElementById('menu-elements-mobile').classList.add('clicked-menu-elements-mobile');
    document.getElementById('line1').classList.add('clicked-line1');
    document.getElementById('line2').classList.add('clicked-line2');
    document.getElementById('line3').classList.add('clicked-line3');
    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
    menuClicked = true;
  } else {
    document.getElementById('menu-elements-mobile').classList.remove('clicked-menu-elements-mobile');
    document.getElementById('line1').classList.remove('clicked-line1');
    document.getElementById('line2').classList.remove('clicked-line2');
    document.getElementById('line3').classList.remove('clicked-line3');
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';
    menuClicked = false;
  }
};

//* Switch tabs functionality for single recipe page

const [ingredientsContent, stepsContent, nutritionContent] = [document.getElementById('ingredients-content'), document.getElementById('steps-content'), document.getElementById('nutrition-content')];
const recipeTabs = Array.from(document.getElementsByClassName('recipe-tab'));
[stepsContent, nutritionContent].forEach((tabContent) => (tabContent.style.display = 'none'));
recipeTabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    recipeTabs.forEach((e) => e.classList.remove('active'));
    tab.classList.add('active');
    if (tab.innerHTML === 'Ingredients') {
      [stepsContent, nutritionContent].forEach((tabContent) => (tabContent.style.display = 'none'));
      ingredientsContent.style.display = 'block';
    } else if (tab.innerHTML === 'Steps') {
      [ingredientsContent, nutritionContent].forEach((tabContent) => (tabContent.style.display = 'none'));
      stepsContent.style.display = 'grid';
    } else if (tab.innerHTML === 'Nutrition') {
      [ingredientsContent, stepsContent].forEach((tabContent) => (tabContent.style.display = 'none'));
      nutritionContent.style.display = 'block';
    }
    return event;
  });
});

navLinks();
clickMenu();
