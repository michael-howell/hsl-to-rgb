![Logo](https://cdn.glitch.com/5171376c-86da-44e1-9a88-d95867bc02c4%2Flogo.png?1493218008085)
# Code Test Exercise2

**We value your time.** Hopefully this task won't take longer than 20 to 60 minutes to complete

## Task

Sign in with Github(You can create a free account) or Facebook.

Click "Remix" to clone the project. Use your name in the project title. Example "john-smith-hsl-to-rgb"

Click Show to see the App running.

### Problem

In JavaScript(you may use ES5 or ES6), write a function that converts  hue, saturation, and lightness(HSL) colour to an red, green and blue(RGB) colour hex value.
Given h, s and l the function should return the resulting hex value. 
Where h is in the set [0 -> 360], s is in the set [0 -> 100] and l is in the set [0 -> 100].
The hex value should be returned in the standard string format like `#ff0000`.
    
    function HSLtoRGBHex(h, s, l) {
         // STUB: Add code here.
         return '#'+red+green+blue;
    }
    
Examples of inputs and outputs are listed below:
    
    HSLtoRGBHex(0, 0, 0); //#000000
    HSLtoRGBHex(0, 0, 100); //#ffffff
    HSLtoRGBHex(0, 100, 50); //#ff0000
    HSLtoRGBHex(120,100,50); //#00ff00
    HSLtoRGBHex(180,100,25); //#008080
    
    
**Complete the function in `public/client.js`**
    
## HSL to RGB conversion formula
      When 0 ≤ H < 360, 0 ≤ S ≤ 1 and 0 ≤ L ≤ 1:
      
      C = (1 - |2L - 1|) × S
      X = C × (1 - |(H / 60°) mod 2 - 1|)
      m = L - C/2
      
      (R', G', B') is , when
            (C,X,0)     , 0° <= H < 60°
            (X,C,0)     , 60° <= H < 120°
            (0,C,X)     , 120° <= H < 180°
            (0,X,C)     , 180° <= H < 240°
            (X,0,C)     , 240° <= H < 300°
            (c,0,X)     , 300° <= H < 360°
      
      (R,G,B) = ((R'+m)×255, (G'+m)×255,(B'+m)×255)

## Next steps

Copy the share link for your "Remix" and send it to [recruitment@softwareimaging.com](mailto:recruitment@softwareimaging.com).


## Who do I talk to?

Contact [recruitment@softwareimaging.com](mailto:recruitment@softwareimaging.com)

## Copyright

Copyright 2017 Software Imaging Limited.

Please do keep this exercise to yourself, so that we can use it in the future. :)