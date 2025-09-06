function colorwheel(angle){
    H = Math.abs(angle%360);//in degrees
    
    z = 255*(1 - Math.abs((H/60)%2 - 1));
    if(H < 60){
        rednumber = 255;
        greennumber = Math.round(z);
        bluenumber = 0;
    }
    if(H >= 60 && H < 120){
        rednumber = Math.round(z);
        greennumber = 255;
        bluenumber = 0;
    }
    if(H >= 120 && H < 180){
        rednumber = 0;
        greennumber = 255;
        bluenumber = Math.round(z);
    }
    if(H >= 180 && H < 240){
        rednumber = 0;    
        greennumber = Math.round(z);
        bluenumber = 255;
    }
    if(H >= 240 && H < 300){
        rednumber = Math.round(z);    
        greennumber = 0;
        bluenumber = 255;
    }
    if(H >= 300 && H < 360){
        rednumber = 255;    
        greennumber = 0;
        bluenumber = Math.round(z);
    }
    
    redstring = rednumber.toString(16);
    if(redstring.length < 2){
        redstring = "0" + redstring;    
    }
    greenstring = greennumber.toString(16);
    if(greenstring.length < 2){
        greenstring = "0" + greenstring; 
    }
    bluestring = bluenumber.toString(16);
    if(bluestring.length < 2){
        bluestring = "0" + bluestring; 
    }
    colorstring = "#" + redstring + greenstring + bluestring;   
    return(colorstring);
}


function rainbowstring(localelement){
    textstring = localelement.innerHTML;
    localelement.innerHTML = "";
    n = textstring.length;
    for(var index = 0; index < n; index++){
        var newspan = document.createElement("SPAN");    
        newspan.innerHTML = textstring.charAt(index);
        var spancolor = colorwheel(index*360/n);
        newspan.style.color = spancolor;
        localelement.appendChild(newspan);
    }
}

function rainbow(localarray){
    //pass this function an array of DOM elements
    n = localarray.length;
    theta = 0;
    for(var index = 0;index < n;index++){
        var elementcolor = colorwheel(index*360/n);
        localarray[index].style.backgroundColor = elementcolor;// + "80";
        localarray[index].style.borderColor = elementcolor;
    }
}

