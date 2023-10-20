document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    // Function to toggle the side navigation
    function toggleSidebar() {
      document.body.classList.toggle("sidebar-toggled");
      document.querySelector(".sidebar").classList.toggle("toggled");

      if (document.querySelector(".sidebar").classList.contains("toggled")) {
        Array.from(document.querySelectorAll(".sidebar .collapse")).forEach(
          function(element) {
            element.classList.remove("show");
          }
        );
      }
    }

    // Event listener for the sidebar toggle button click
    document
      .querySelector("#sidebarToggle, #sidebarToggleTop")
      .addEventListener("click", toggleSidebar);

    // Event listener for window resize
    window.addEventListener("resize", function() {
      if (window.innerWidth < 768) {
        Array.from(document.querySelectorAll(".sidebar .collapse")).forEach(
          function(element) {
            element.classList.remove("show");
          }
        );
      }

      if (
        window.innerWidth < 480 &&
        !document.querySelector(".sidebar").classList.contains("toggled")
      ) {
        document.body.classList.add("sidebar-toggled");
        document.querySelector(".sidebar").classList.add("toggled");
        Array.from(document.querySelectorAll(".sidebar .collapse")).forEach(
          function(element) {
            element.classList.remove("show");
          }
        );
      }
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation is hovered over
    var sidebar = document.querySelector("body.fixed-nav .sidebar");
    sidebar.addEventListener("mousewheel", function(e) {
      if (window.innerWidth > 768) {
        var delta = e.deltaY || -e.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button
    document.addEventListener("scroll", function() {
      var scrollDistance = window.scrollY;
      var scrollButton = document.querySelector(".scroll-to-top");

      if (scrollDistance > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });

    // Smooth scrolling when clicking on the scroll-to-top button
    document.addEventListener("click", function(e) {
      if (e.target.classList.contains("scroll-to-top")) {
        e.preventDefault();
        var targetId = e.target.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          var targetOffset =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
