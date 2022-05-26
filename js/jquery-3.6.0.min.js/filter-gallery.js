$(document).ready(function () {
  $(".category-button").click(function () {
    var filterValue = $(this).attr("data-filter");
    if (filterValue == "all") {
      $(".all").show("slow");
    }
    // else if (filterValue == "category1") {
    //   $(".all").hide("slow");
    //   $(".category1").show("slow");
    // } else if (filterValue == "category2") {
    //   $(".all").hide("slow");
    //   $(".category2").show("slow");
    // } else if (filterValue == "category3") {
    //   $(".all").hide("slow");
    //   $(".category3").show("slow");
    // } else if (filterValue == "category4") {
    //   $(".all").hide("slow");
    //   $(".category4").show("slow");
    // } 
    else {
      $(".all")
        .not("." + filterValue)
        .hide("slow");
      $(".all")
        .filter("." + filterValue)
        .show("slow");
    }
  });
});
