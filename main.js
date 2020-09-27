const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const SearchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function(){
    if(SearchBox.style.top == '72px'){
        SearchBox.style.top = '24px';
        SearchBox.style.pointerEvents = 'none';
    }else{
        SearchBox.style.top = '72px';
        SearchBox.style.pointerEvents = 'auto';
    }
});

menuIcon.addEventListener('click', function(){
    if(slideoutMenu.style.opacity == "1"){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    }else{
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
});