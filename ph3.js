/**
 * Call our functions on window load event
 */
window.onload = function(){
    setup();
}

/**
 * Global variables
 */
var _data;  // contains our data array
var _vis;   // the svg container where we will draw our visualization
var _vis_width = 0;     // dimensions of the visualization
var _vis_height = 0;

const PADDING_FOR_LABELS = 150;
