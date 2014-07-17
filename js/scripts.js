$(document).ready(function() {
    $("form#triangle").submit(function(event) {

        event.preventDefault();

    var triangle = {
    type: function(){

    if (this.side1 + this.side2 < this.side3) {
        return "not a triangle"
    }
     else if (this.side3 + this.side1 < this.side2) {
        return "not a triangle";
    }
    else if (this.side2 + this.side3 < this.side1) {
        return "not a triangle";
    }
    else if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3){
        return "equilateral"
    }
    else if (this.side1 === this.side2 || this.side2=== this.side3 || this.side1=== this.side3) {
        return "isosceles";
    }
    else if  (this.side1 !== this.side2 || this.side2 !== this.side3 || this.side3 !== this.side1) {
        return "scalene";
    }
    else
        return "not a triangle";
    }
  }

  triangle.side1 = parseInt($("input#side1").val());
  triangle.side2 = parseInt($("input#side2").val());
  triangle.side3 = parseInt($("input#side3").val());



    if (isNaN(triangle.side1 || triangle.side2|| triangle.side3)) {
        alert("I did not recognize all your numbers")
    } else {

    var answer = triangle.type();


    if (answer === "equilateral") {
        $("#equilateral").append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
    };
    if (answer === "isosceles") {
        $("#isosceles").append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
    };
    if (answer === "scalene") {
        $("#scalene").append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
    };
    if (answer === "not a triangle") {
        alert("not a triangle")
    }
  };




        $('#result').show();
        $(".translate").text(answer);

   });
});
