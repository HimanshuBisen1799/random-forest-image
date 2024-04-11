let showMenu = false;

function openNav() {
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("divOverlay").classList.toggle("overlay");
    document.getElementById("bodyScroll").classList.toggle("noscroll");
    document.querySelector(".menu-btn").classList.remove("close");
    showMenu=false;
  }

  if (!showMenu) {
    document.getElementById("mySidenav").style.width = "75vw";
    document.getElementById("divOverlay").classList.toggle("overlay");
    document.getElementById("bodyScroll").classList.toggle("noscroll");
    document.querySelector(".menu-btn").classList.add("close");
    showMenu = true;
  } else {
    closeNav();
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("divOverlay").classList.toggle("overlay");
  document.getElementById("bodyScroll").classList.toggle("noscroll");
  document.querySelector(".menu-btn").classList.remove("close");
  showMenu = false;
}

//JQuery for tab fade-in
$(".tab").click(function() {
  $(".tab.active").removeClass("active");
  $(this).addClass('active');
  $(".tab-pane.active").removeClass("active");
  var tabNumber = $(this).attr("data-tab");
  var tabToOpen = ".tab-pane[data-tab='" + tabNumber + "']"; 
  $(tabToOpen).addClass("active");
})

//JQuery for Project Scroll
$(".item").click(function() {
  $(".item.active").removeClass("active");
  $(this).addClass("active text_color");
  $(this).animate({ scrollTop: $(".item_content").height() }, "slow");
});
