$(document).ready(function () {
  ("use strict");

  //text length in table
  $(".text-length").each(function () {
    var td = $(this);
    var maxLength = 50;

    var content = td.text().trim();
    if (content.length > maxLength) {
      var truncatedContent = content.substring(0, maxLength) + "...";
      td.text(truncatedContent);
    }
  });

  // modal-map
  var map;
  var marker;

  // Initialize the map
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 30.46917064636305, lng: 30.9207369266489 },
      zoom: 10,
    });

    // Add a marker when the user clicks on the map
    map.addListener("click", function (event) {
      if (marker) {
        marker.setMap(null);
      }
      marker = new google.maps.Marker({
        position: event.latLng,
        map: map,
      });
    });

    // Get current location
    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // Add marker for current location
            marker = new google.maps.Marker({
              position: currentLocation,
              map: map,
              animation: google.maps.Animation.DROP,
              icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Optional: Custom marker icon
            });

            // Center the map on the current location
            map.setCenter(currentLocation);

            // Get address for the current location
            getAddressFromLatLng(currentLocation.lat, currentLocation.lng);
          },
          function (error) {
            console.log("Error getting current location:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

    // Get address from latitude and longitude
    function getAddressFromLatLng(latitude, longitude) {
      var geocoder = new google.maps.Geocoder();
      var latlng = { lat: latitude, lng: longitude };

      geocoder.geocode({ location: latlng }, function (results, status) {
        if (status === "OK") {
          if (results[0]) {
            console.log("Address:", results[0].formatted_address);
          } else {
            console.log("No address found for the provided coordinates.");
          }
        } else {
          console.log("Geocoder failed due to:", status);
        }
      });
    }

    // Handle the "Save" button click event
    $("#saveLocation").on("click", function () {
      if (marker) {
        var latitude = marker.getPosition().lat();
        var longitude = marker.getPosition().lng();
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Get address for the saved location
        getAddressFromLatLng(latitude, longitude);
      }

      // Close the modal
      $("#modal-18").modal("hide");
    });

    // Handle the "Go to Current Location" button click event
    $("#goToCurrentLocation").on("click", function () {
      getCurrentLocation();
    });

    // Automatically go to current location on page load
    getCurrentLocation();
  }

  // Trigger the map initialization when the modal is shown
  $("#modal-18").on("shown.bs.modal", function () {
    initMap();
  });

  // main-sidebar

  $(".data-btn").click(function () {
    $("nav ul .data-show").toggleClass("data-submenu");
    $("nav ul .one").toggleClass("rotate");
  });
  $(".structure-btn").click(function () {
    $("nav ul .structure-show").toggleClass("structure-submenu");
    $("nav ul .two").toggleClass("rotate");
  });
  $(".employees-btn").click(function () {
    $("nav ul .employees-show").toggleClass("employees-submenu");
    $("nav ul .there").toggleClass("rotate");
  });
  $(".departure-btn").click(function () {
    $("nav ul .departure-show").toggleClass("departure-submenu");
    $("nav ul .four").toggleClass("rotate");
  });

  //slidebar-mobile

  $(".menu,.overlay-slide,.sliding-panel-close").on(
    "click touchstart",
    function (e) {
      $(".slidebar-mobile,.overlay-slide").toggleClass("is-visible");
      $("#wrapper").toggleClass("is-obscured");
      e.preventDefault();
    }
  );

  //dropmenus-slidebar-mobile
  // $(".sidebar-lists li").click(function () {
  //   $(this).children(".sub-menu").slideToggle(500);
  //   $(this).toggleClass("active");
  //   event.preventDefault();
  // });
  //data-picker

  $(".date-range").daterangepicker({
    singleDatePicker: true,
  });

  //upload-imaege

  $(".image-upload").on("change", function (event) {
    const file = event.target.files[0];
    const picture = $(this).closest(".choose-image").find(".picture");
    const pictureSrc = picture.find(".picture-src");

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        picture.css("display", "block");
        pictureSrc.attr("src", reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      picture.css("display", "none");
      pictureSrc.attr("src", "#");
    }
  });

  //user-image
  $(".choose-image").on("click", function () {
    $(".picture-upload").click();
  });

  $(".picture-upload").on("change", function (event) {
    const file = event.target.files[0];
    const picture = $(".user-avatar");
    const pictureSrc = picture.find("img");

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        picture.css("display", "block");
        pictureSrc.attr("src", reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      picture.css("display", "none");
      pictureSrc.attr("src", "assets/images/profile-image.png");
    }
  });

  //datepicker

  $(
    "#datetimepicker3,#datetimepicker12,#datetimepicker4,#datetimepicker5,#datetimepicker6,#datetimepicker7,#datetimepicker16,#datetimepicker17,#datetimepicker19,#datetimepicker20,#datetimepicker21,#datetimepicker22,#datetimepicker23"
  ).datetimepicker({
    // format: "L",
    format: "YYYY-MM-DD",
    icons: {
      time: "far fa-clock",
      // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"
    },
  });

  $(
    "#datetimepicker3,#datetimepicker2,#datetimepicker1,#datetimepicker"
  ).datetimepicker({
    // format: "LT",
    format: "YYYY-MM-DD",
    icons: {
      time: "far fa-clock",
      // date: "fa fa-calendar",
      // up: "fa fa-arrow-up",
      // down: "fa fa-arrow-down"
    },
    // time: "fa fa-clock"
  });
  $(".repeater").repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
    },
    // ready: function (setIndexes) {},
  });

  window.outerRepeater = $(".outer-repeater").repeater({
    isFirstItemUndeletable: true,
    show: function () {
      $(this).show();
    },
    hide: function (deleteElement) {
      $(this).hide(deleteElement);
    },
  });

  $(".select2").select2({});
  $(".select2-tags").select2({
    tags: true,
    maximumSelectionLength: 2,
  });
  $(".js-example-tags").select2({
    tags: true,
    maximumSelectionLength: 2,
  });

  $(".main-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  //prouducts
  $(".proudct-Carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  //menue-show in table
  $(".menu-show").each(function () {
    var $menuIcon = $(this);
    var $menu = $menuIcon.siblings(".emmployee-menu");

    $menuIcon.on("click", function (e) {
      e.preventDefault();

      if ($menu.hasClass("show")) {
        $menu.removeClass("show");
      } else {
        $(".emmployee-menu").removeClass("show"); // Hide other open menus
        $menu.addClass("show");
      }
    });
  });

  $(window).on("load", function () {
    $("#myModal").modal("show");
  });

  //add data in modal
  $(".edit-btn").click(function () {
    var rowId = $(this).data("row-id");
    var rowData = getRowData(rowId);
    populateModal(rowData);
  });

  function getRowData(rowId) {
    var rowData = [];
    $("#row" + rowId)
      .find("td")
      .each(function () {
        rowData.push($(this).text());
      });
    return rowData;
  }

  function populateModal(rowData) {
    var modal = $("#modal-20");
    var inputFields = modal.find(".form-control");

    $(inputFields[0]).val(rowData[0]); // الاسم
    $(inputFields[1]).val(rowData[1]); // تاريخ الانتهاء
    $(inputFields[2]).val(rowData[2]); // تاريخ الاشعار

    // Show the modal
    modal.modal("show");
  }

  //auto-complete

  const availableTags = ["مصمم", "مهندس", "مهندس كهربائي", "مصمم"];

  $("#Job-title").autocomplete({
    source: availableTags,
    appendTo: "#autocomplete-container",
    open: function (event, ui) {
      $("#autocomplete-container").addClass("custom-autocomplete");
    },
  });

  //jobs-names
  $(".job-titles").click(function () {
    var jobTitles = $(this);
    var additionalNames = jobTitles.siblings(".jobs-names");

    additionalNames.toggleClass("hidden");

    $(".job-titles").not(jobTitles).siblings(".jobs-names").addClass("hidden");
  });
});

//calculate left
const menuShowButtons = document.querySelectorAll(".menu-show");

menuShowButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const menu = button.nextElementSibling;
    const buttonRect = button.getBoundingClientRect();
    menu.style.left = `${buttonRect.left}px`; /* Set the left position based on the button's position */
  });
});
