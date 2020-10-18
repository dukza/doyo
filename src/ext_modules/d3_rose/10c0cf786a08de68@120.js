// https://observablehq.com/@jbum/incremental-drift-rose-equation@120
import define1 from "./e93997d5089d7165@2286.js";

export default function define(runtime, observer) {
  const main = runtime.module();
//   main.variable(observer()).define(["md"], function(md){return(
// md`# Incremental Drift (Rose Equation)`
// )});
  main.variable(observer()).define(["DOM","width","height","speed","trail_length","nbr_dots","tm","rose_rad","dot_sat","dot_bri","dot_alpha","dot_rad"], function*(DOM,width,height,speed,trail_length,nbr_dots,tm,rose_rad,dot_sat,dot_bri,dot_alpha,dot_rad)
{
  let dc,canvas;
  if (this) canvas=this,dc = canvas.getContext("2d");
  else { 
    dc = DOM.context2d(width, height);
    canvas = dc.canvas;
    dc.fillStyle = '#000';
    dc.fillRect(0, 0, width, height);
  }
  let cx = width/2;
  let cy = height/2;
  let sp = speed/1000;
  dc.fillStyle="rgba(0,0,0," + (1-trail_length) + ")";
  dc.fillRect(0,0,width,height);
  for (var i = 1; i <= nbr_dots; i += 1) {
    let r = i/nbr_dots;
    let a = r*Math.PI*2;
    let d = Math.sin(tm*sp*i)*rose_rad;
    let x = cx + Math.cos(a)*d;
    let y = cy + Math.sin(a)*d;
    dc.fillStyle= "hsla(" + Math.floor(r*360) + "," + dot_sat + "%," + dot_bri + "%," + dot_alpha + ")"; // slider for this alpha might be nice too...
    dc.beginPath();
    dc.arc(x, y, dot_rad, 0, 2*Math.PI, false);
    dc.fill();
  }
  yield canvas;
}
);
  main.variable(observer("viewof tm_offset")).define("viewof tm_offset", ["slider"], function(slider){return(
slider({min: 0, max: 100000, step:1,value: 10000, description: "Animation offset"})
)});
  main.variable(observer("tm_offset")).define("tm_offset", ["Generators", "viewof tm_offset"], (G, _) => G.input(_));
  main.variable(observer("viewof nbr_dots")).define("viewof nbr_dots", ["slider"], function(slider){return(
slider({min: 8, max: 5000, step:1,value: 500, description: "Number Dots"})
)});
  main.variable(observer("nbr_dots")).define("nbr_dots", ["Generators", "viewof nbr_dots"], (G, _) => G.input(_));
  main.variable(observer("viewof dot_rad")).define("viewof dot_rad", ["slider"], function(slider){return(
slider({min: 0.5, max: 32, value: 4, description: "Dot radius"})
)});
  main.variable(observer("dot_rad")).define("dot_rad", ["Generators", "viewof dot_rad"], (G, _) => G.input(_));
  main.variable(observer("viewof dot_alpha")).define("viewof dot_alpha", ["slider"], function(slider){return(
slider({value:0.2, description: "Dot alpha"})
)});
  main.variable(observer("dot_alpha")).define("dot_alpha", ["Generators", "viewof dot_alpha"], (G, _) => G.input(_));
  main.variable(observer("viewof trail_length")).define("viewof trail_length", ["slider"], function(slider){return(
slider({description: "Trail length",value:.95})
)});
  main.variable(observer("trail_length")).define("trail_length", ["Generators", "viewof trail_length"], (G, _) => G.input(_));
  main.variable(observer("viewof dot_sat")).define("viewof dot_sat", ["slider"], function(slider){return(
slider({min: 0, max: 100, step:1,value: 50, description: "Saturation"})
)});
  main.variable(observer("dot_sat")).define("dot_sat", ["Generators", "viewof dot_sat"], (G, _) => G.input(_));
  main.variable(observer("viewof dot_bri")).define("viewof dot_bri", ["slider"], function(slider){return(
slider({min: 0, max: 100, step:1,value: 50, description: "Brightness"})
)});
  main.variable(observer("dot_bri")).define("dot_bri", ["Generators", "viewof dot_bri"], (G, _) => G.input(_));
  main.variable(observer("viewof speed")).define("viewof speed", ["slider"], function(slider){return(
slider({min: 0.1, max: 20, value: 2, description: "Speed"})
)});
  main.variable(observer("speed")).define("speed", ["Generators", "viewof speed"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`The name "Incremental Drift" was coined by the late computer animation pioneer John Whitney, in his 1980 book, *Digital Harmony*. He describes a system of abstract motion graphics in which each particle moves successively faster, obeying simple ratios in accord with musical harmonics of 1/1, 1/2, 1/3, 1/4 and so on.

Although this animation appears to curve and rotate, in actuality, each dot is oscillating on a perfectly straight line that goes through the center of the image. The straight lines are arranged to divide the circle equally (so if there are 100 dots, each line is rotated 3.6 degrees from its neighbor).  

The first dot moves very slowly.  The next dot moves twice as fast, then three times as fast, and so on.  This produces curves which correspond to <a href="http://mathworld.wolfram.com/Rose.html">Rose Curves</a>.

There are many, many ways to apply the incremental drift concept - I've used it for pulsating LEDs, and for animating groups of objects in all kinds of ways.  It is the basis of my music composition <a href="http://whitneymusicbox.org/">The Whitney Music Box</a>.

`
)});
  main.variable(observer("rose_rad")).define("rose_rad", ["width"], function(width){return(
width*.45
)});
  main.variable(observer("tm")).define("tm", ["now","tm_offset"], function(now,tm_offset){return(
now/1000 + tm_offset
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  return main;
}
