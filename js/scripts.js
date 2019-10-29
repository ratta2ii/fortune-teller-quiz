$(document).ready(function() {

  $(".form1").submit(function(event){
    event.preventDefault();
    var goodArray = [];
    var badArray = [];
    var totalGood = 0;
    var totalBad = 0;

    $(".results").show();
    $("input:checkbox[name=good]:checked").each(function(){
      var goodNum = $(this).val();
      goodArray.push(goodNum);
      totalGood = goodArray.length;
      console.log(totalGood);
    });
    $("input:checkbox[name=bad]:checked").each(function(){
      var badNum = $(this).val();
      badArray.push(badNum);
      totalBad = badArray.length;
    });


    if (totalGood > totalBad){
      $("#goodFortune").show();
    }
    else if (totalGood < totalBad){
      $("#badFortune").show();
    }
    else {
      $("#evenFortune").show();
    };
    $(".form1").hide();
  });
});
