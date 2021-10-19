canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;

bg_imgs_array = ["Mars_API_Image_1.jpg", "Mars_API_Image_2.jpg", "Mars_API_Image_3.jpg", "Mars_API_Image_4.jpg"];
random_number = Math.floor(Math.random() * 4);

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = bg_imgs_array[random_number];

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = "rover.png";
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    KP = e.keyCode;

    if (KP == 37){
        left();
        console.log("left");
    }

    if (KP == 38){
        up();
        console.log("up");
    }

    if (KP == 39){
        right();
        console.log("right");
    }

    if (KP == 40){
        down();
        console.log("down");
    }
}

function up(){
    if (rover_y >= 0){
        rover_y -= 10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y <= 500){
        rover_y += 10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x >= 0){
        rover_x -= 10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x += 10;
        uploadBackground();
        uploadRover();
    }
}
