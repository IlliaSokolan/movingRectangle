# movingRectangle
Here I try move the rectangle using Mouse Events.
When you click RightButton rectangle moves rigth, LeftButton - left.
When you use wheel - rectangle moves up and down.
Also rectangle can not leave the viewport, it stops on the edge.

The main problem for me now is to make "Mouse enter event" where the rectangle will change it's background color smoothly.
I use HLS and changing the HUE with CSS Animation, but it doesn't work as I used to think. The color jumps from 0% to 50% and to 100% so it's just blinking.
Now I think about is it possible at all to change HUE value smoothly?
