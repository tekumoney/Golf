var canvas=newfabric.canvas('myCanvas');
ballY=0;
ballX=0;
wholeY=400;
wholeX=800;
blockimagewidth=5;
blockimageheight=5;
function load_img()
{
    fabric.image.fromurl("golf-h.png", function(img)
    {
        wholeObject=img;
        wholeObject.scaletowidth(50);
        wholeObject.scaletoheight(50);
        wholeObject.set;
        top:wholeY;
        left:wholeX;
    });
    canvas.add(wholeObject);
    new_image();
}
function new_image()
{
    fabric.image.fromurl("ball.png", function(img)
    {
        ballObject=img;
        ballObject.scaletowidth(50);
        ballObject.scaletoheight(50);
        ballObject.set;
        top:ballY;
        left:ballX; 
    });
    canvas.add(ballObject);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);
    if((ballX==wholeX)&&(ballY==wholeY))
    {
        canvas.remove(ballobject);
        console.log("you have hit a goal");
        document.getElementById("hd3").innerHTML="You Have Hit A Goal";
        document.getElementById("myCanvas").style.borderColor="Yellow";
    }
    else
    {
        if(keypressed=='38')
        {
            up();
            console.log("up"); 
        }
        if(keypressed=='40')
        {
            down();
            console.log("down"); 
        }
        if(keypressed=='37')
        {
            left();
            console.log("left"); 
        }
        if(keypressed=='39')
        {
            right();
            console.log("right"); 
        }
    }
}
function up()
{
    if(ballY>='5')
    {
        ballY=ballY-blockimageheight;
        console.log("blockimageheight = "+blockimageheight);
        console.log("when up arrow key is pressed, x= "+ballX+"", y=""+ballY);
        canvas.remove(ballobject);
        new_image();
    }
}
function down()
{
    if(ballY<='400')
    {
        ballY=ballY+blockimageheight;
        console.log("blockimageheight = "+blockimageheight);
        console.log("when down arrow key is pressed, x= "+ballX+"", y=""+ballY);
        canvas.remove(ballobject);
        new_image();
    }
}
function left()
{
    if(ballX>='5')
    {
        ballX=ballX-blockimagewidth;
        console.log("blockimagewidth = "+blockimagewidth);
        console.log("when left arrow key is pressed, x= "+ballX+"", y=""+ballY);
        canvas.remove(ballobject);
        new_image();
    }
}
function right()
{
    if(ballX<='400')
    {
        ballX=ballX+blockimagewidth;
        console.log("blockimagewidth = "+blockimagewidth);
        console.log("when right arrow key is pressed, x= "+ballX+"", y=""+ballY);
        canvas.remove(ballobject);
        new_image();
    }
}