  //var g = gridData();
  //console.log(JSON.stringify(g))
  
var gData = [
  [
    {"x":1,"y":1,"width":50,"height":50},
    {"x":51,"y":1,"width":50,"height":50},
    {"x":101,"y":1,"width":50,"height":50},
    {"x":151,"y":1,"width":50,"height":50},
    {"x":201,"y":1,"width":50,"height":50},
    {"x":251,"y":1,"width":50,"height":50},
    {"x":301,"y":1,"width":50,"height":50},
    {"x":351,"y":1,"width":50,"height":50},
    {"x":401,"y":1,"width":50,"height":50},
    {"x":451,"y":1,"width":50,"height":50}
  ],
  [{"x":1,"y":51,"width":50,"height":50},{"x":51,"y":51,"width":50,"height":50},{"x":101,"y":51,"width":50,"height":50},{"x":151,"y":51,"width":50,"height":50},{"x":201,"y":51,"width":50,"height":50},{"x":251,"y":51,"width":50,"height":50},{"x":301,"y":51,"width":50,"height":50},{"x":351,"y":51,"width":50,"height":50},{"x":401,"y":51,"width":50,"height":50},{"x":451,"y":51,"width":50,"height":50}],[{"x":1,"y":101,"width":50,"height":50},{"x":51,"y":101,"width":50,"height":50},{"x":101,"y":101,"width":50,"height":50},{"x":151,"y":101,"width":50,"height":50},{"x":201,"y":101,"width":50,"height":50},{"x":251,"y":101,"width":50,"height":50},{"x":301,"y":101,"width":50,"height":50},{"x":351,"y":101,"width":50,"height":50},{"x":401,"y":101,"width":50,"height":50},{"x":451,"y":101,"width":50,"height":50}],[{"x":1,"y":151,"width":50,"height":50},{"x":51,"y":151,"width":50,"height":50},{"x":101,"y":151,"width":50,"height":50},{"x":151,"y":151,"width":50,"height":50},{"x":201,"y":151,"width":50,"height":50},{"x":251,"y":151,"width":50,"height":50},{"x":301,"y":151,"width":50,"height":50},{"x":351,"y":151,"width":50,"height":50},{"x":401,"y":151,"width":50,"height":50},{"x":451,"y":151,"width":50,"height":50}],[{"x":1,"y":201,"width":50,"height":50},{"x":51,"y":201,"width":50,"height":50},{"x":101,"y":201,"width":50,"height":50},{"x":151,"y":201,"width":50,"height":50},{"x":201,"y":201,"width":50,"height":50},{"x":251,"y":201,"width":50,"height":50},{"x":301,"y":201,"width":50,"height":50},{"x":351,"y":201,"width":50,"height":50},{"x":401,"y":201,"width":50,"height":50},{"x":451,"y":201,"width":50,"height":50}],[{"x":1,"y":251,"width":50,"height":50},{"x":51,"y":251,"width":50,"height":50},{"x":101,"y":251,"width":50,"height":50},{"x":151,"y":251,"width":50,"height":50},{"x":201,"y":251,"width":50,"height":50},{"x":251,"y":251,"width":50,"height":50},{"x":301,"y":251,"width":50,"height":50},{"x":351,"y":251,"width":50,"height":50},{"x":401,"y":251,"width":50,"height":50},{"x":451,"y":251,"width":50,"height":50}],[{"x":1,"y":301,"width":50,"height":50},{"x":51,"y":301,"width":50,"height":50},{"x":101,"y":301,"width":50,"height":50},{"x":151,"y":301,"width":50,"height":50},{"x":201,"y":301,"width":50,"height":50},{"x":251,"y":301,"width":50,"height":50},{"x":301,"y":301,"width":50,"height":50},{"x":351,"y":301,"width":50,"height":50},{"x":401,"y":301,"width":50,"height":50},{"x":451,"y":301,"width":50,"height":50}],[{"x":1,"y":351,"width":50,"height":50},{"x":51,"y":351,"width":50,"height":50},{"x":101,"y":351,"width":50,"height":50},{"x":151,"y":351,"width":50,"height":50},{"x":201,"y":351,"width":50,"height":50},{"x":251,"y":351,"width":50,"height":50},{"x":301,"y":351,"width":50,"height":50},{"x":351,"y":351,"width":50,"height":50},{"x":401,"y":351,"width":50,"height":50},{"x":451,"y":351,"width":50,"height":50}],[{"x":1,"y":401,"width":50,"height":50},{"x":51,"y":401,"width":50,"height":50},{"x":101,"y":401,"width":50,"height":50},{"x":151,"y":401,"width":50,"height":50},{"x":201,"y":401,"width":50,"height":50},{"x":251,"y":401,"width":50,"height":50},{"x":301,"y":401,"width":50,"height":50},{"x":351,"y":401,"width":50,"height":50},{"x":401,"y":401,"width":50,"height":50},{"x":451,"y":401,"width":50,"height":50}],[{"x":1,"y":451,"width":50,"height":50},{"x":51,"y":451,"width":50,"height":50},{"x":101,"y":451,"width":50,"height":50},{"x":151,"y":451,"width":50,"height":50},{"x":201,"y":451,"width":50,"height":50},{"x":251,"y":451,"width":50,"height":50},{"x":301,"y":451,"width":50,"height":50},{"x":351,"y":451,"width":50,"height":50},{"x":401,"y":451,"width":50,"height":50},{"x":451,"y":451,"width":50,"height":50}]]


function gridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 50;
  var height = 50;

  // iterate for rows
  for (var row = 0; row < 10; row++) {
      data.push( new Array() );

      // iterate for cells/columns inside rows
      for (var column = 0; column < 10; column++) {
          data[row].push({
              x: xpos,
              y: ypos,
              width: width,
              height: height
          })
          // increment the x position. I.e. move it over by 50 (width variable)
          xpos += width;
      }
      // reset the x position after a row is complete
      xpos = 1;
      // increment the y position for the next row. Move it down 50 (height variable)
      ypos += height;
  }
  return data;
}
