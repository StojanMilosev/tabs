function openTab(event, tabId){
    var i,tab_content,tab_links;
    
    tab_content = document.getElementsByClassName("tab-content");

    for(i = 0; i<tab_content.length;i++){
        tab_content[i].style.display = "none"
    }

    tab_links = document.getElementsByClassName("tab-link");

    for(i = 0; i< tab_links.length; i++){
        tab_links[i].className = tab_links[i].className.replace("active","");
    }
    //prikazivanje sadrzaja akivnog taba dodavajuci klasu "active"
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
};