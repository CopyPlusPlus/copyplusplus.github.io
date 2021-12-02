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
    if (sessionStorage.getItem("dark") === null)
      // for the first time, "" indicates false
      sessionStorage.setItem("dark", "");
    else if (sessionStorage.getItem("dark") === "")
      sessionStorage.setItem("dark", "true");
    else sessionStorage.setItem("dark", "");
  });
});
