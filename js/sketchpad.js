$(document).ready(function() {
  createBoard(16);
  reset();
  eraser();
  black();
  rainbow();
});

function createBoard(gridDimensions) {
  $("#drawingBoard").children().remove();
  $("#drawingBoard").append("<table>");
  for (var i = 0; i < gridDimensions; i++) {
    $("#drawingBoard").append("<tr>");
    for (var j = 0; j < gridDimensions; j++) {
      $("#drawingBoard").append("<td></td>");
    }
    $("td").css("height", (720/gridDimensions));
    $("td").css("width", (720/gridDimensions));
    $("drawingBoard").append("</tr>");
  }
  $("#drawingBoard").append("</table>");
  drawOnBoard();
}

function reset() {
  $("#reset").click(function() {
    var gridSize = prompt("Please enter the amount of squares per row that you want. (1-100)");
    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
      alert("This is not a valid number! Reverting to default.");
      createBoard(16);
    } else {
      createBoard(gridSize);
    }
  });
}

function drawOnBoard() {
  $("td").hover(function() {
    $(this).css("background-color", "black");
  });
}

function black() {
  $("#black").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", "black");
    });
  });
}

function rainbow() {
  $("#rainbow").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", randomColor());
    });
  });
}

function eraser() {
  $("#eraser").click(function() {
    $("td").hover(function() {
      $(this).css("background-color", "white");
    });
  });
}

function randomColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}
