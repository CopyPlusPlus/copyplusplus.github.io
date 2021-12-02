$(function () {
  $(document).ready(function () {
    if (sessionStorage.getItem("dark")) {
      $("body").toggleClass("page-dark-mode");
      BeautifulJekyllJS.initNavbar();
    }
    document.getElementsByTagName("html")[0].style.visibility = "visible";
  });

  $("#change-skin").on("click", function () {
    $("body").toggleClass("page-dark-mode");
    BeautifulJekyllJS.initNavbar();
    
    if (sessionStorage.getItem("dark") === "" || sessionStorage.getItem("dark") === null)
      sessionStorage.setItem("dark", "true");
    else sessionStorage.setItem("dark", "");
  });
});
