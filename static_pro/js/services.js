$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 175) {
    $('.navbar').removeClass('navbar-light bg-light-nav');
    $('.navbar').addClass('navbar-dark'); //bg-dark
  } else {
    $('.navbar').removeClass('navbar-dark'); //bg-dark
    $('.navbar').addClass('navbar-light bg-light-nav');
  }
})

$('.dropdown').hover(function() {
  $('.dropdown-toggle', this).trigger('click');
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

var x = document.getElementById("demo");
var btn_clicked;

function getLocation() {
  btn_clicked = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}

function showPosition(position) {

  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;

  document.getElementById("lat").value = position.coords.latitude;
  document.getElementById("lon").value = position.coords.longitude;
  btn_clicked = true;
  btn.setCustomValidity("");

}

function check() {
  if (document.getElementById("coordinateCheckbox").checked == false) {
    document.getElementById("lat").disabled = false;
    document.getElementById("lon").disabled = false;
  } else {
    document.getElementById("lat").disabled = true;
    document.getElementById("lon").disabled = true;
  }
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


if (btn_clicked === true) {
  btn.setCustomValidity("");
} else {
  btn.setCustomValidity("Button Not Clicked");
}



// radio button
var FormStuff = {

  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },

  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },

  applyConditionalRequired: function() {

    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });

  }

};

function GetSoilType(soilType) {
  var selectedText = soilType.options[soilType.selectedIndex].innerHTML;
  var selectedValue = soilType.value; //value: loamy, text: Loamy Soil
  if (selectedValue == "sandy") {
    document.getElementById("soilHeading").innerHTML = "SANDY SOIL";
    document.getElementById("soilPoints").innerHTML = "<li>Work in 3 to 4 inches of organic matter such as well-rotted manure or finished compost. Then Add at least 2 inches of organic matter each year.</li> <li>Mulch around your plants with leaves, wood chips, bark, hay or straw. Mulch retains moisture and cools the soil.</li> <li>Grow cover crops or green manures.</li>"
  } else if (selectedValue == "loamy") {
    document.getElementById("soilHeading").innerHTML = "LOAMY SOIL";
    document.getElementById("soilPoints").innerHTML = "<li>Loam refers to any soil that is between sand and clay soils. Loams are considered to be the best soils for growing plants because it retains nutrients well and retains water while still allowing the water to flow freely.</li> <li>Compost can be added between each planting season as the soil is worked.</li>"
  } else if (selectedValue == "clay") {
    document.getElementById("soilHeading").innerHTML = "CLAY SOIL";
    document.getElementById("soilPoints").innerHTML = "<li>Work 2 to 3 inches of organic matter into the surface of the soil. Then add at least 1 inch more each year after that.</li> <li>Add the organic matter in the autum,if possible.</li> <li>Avoid walking in the garden bed. Minimize tilling and spading.</li>"
  }
}

function fieldPreparationVisibility() {
  document.getElementById("field-preparation").style.display = "visible";
}

FormStuff.init();
