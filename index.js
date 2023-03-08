var ImgPhoto = document.querySelector(".Img_Photo");


var sectionA = document.querySelectorAll(".imgitem");
//var section = document.getElementsByClassName("Img_List"); // section elementinin ID'si
var section = document.querySelector(".Img_List")
var sec = document.querySelector(".Sec-1")
var start_x = 0;
var start_y = 0;
var end_x = 0;
var end_y = 0;
var isDragging = false;
var isokay = false
var value2;
var IsOk = true;
var imgDjin = document.querySelector(".Img_Hidden")
function OnClick_Hidden() {
    let valeu1 = imgDjin;
    let val = document.querySelector(".Imge_Hiden");
    let value = val.querySelector("i");

    if (IsOk) {
        IsOk = false;
        // section.style.height = "0px";
        // section.style.overflow = "hidden";
        section.style.display = "none";
        // section.style.backgroundColor = "red";
        sec.classList.add("animate__backOutDown");
        valeu1.classList.remove("animate__slideInRight");
        sec.classList.remove("animate__bounceInUp");
        // alert(section.id)
        setTimeout(() => {
            val.style.height = "100%";
            value.classList.remove("fa-caret-down");
            value.classList.add("fa-caret-up");
            valeu1.style.height = "13%";
            val.style.alignItems = "end";
            sec.classList.remove("animate__backOutDown");
            valeu1.classList.add("animate__bounceInUp");
        }, 800);

    }
    else {
        sec.classList.remove("animate__backOutDown");
        valeu1.classList.remove("animate__bounceInUp");
        section.style.overflow = "visble";
        section.style.display = "flex";
        val.style.height = "13%"
        value.classList.remove("fa-caret-up");
        value.classList.add("fa-caret-down");
        valeu1.style.height = "100%";
        val.style.alignItems = "begin";
        sec.classList.add("animate__bounceInUp");
        setTimeout(() => {
            valeu1.classList.add("animate__slideInRight");
            IsOk = true;
        }, 150);


    }

}

function AddImgItem() {
    section.addEventListener('mouseleave', (event) => {
        const newPosition = {
            x: event.clientX,
            y: event.clientY
        };
        isDragging = false;
        lastPosition = newPosition;
    });
    //animate__backOutDown
    let index = 0;
    document.body.style.backgroundImage = sectionA[0].style.backgroundImage;
    let lastPosition = null;
    sectionA.forEach(element => {
        element.Tag = index;
        element.style.opacity = "50%"
        element.addEventListener('click', (event) => {
            let value = event.target;
            value.style.width = "270px";
            value.style.height = "90%";
            value.style.opacity = "90%";
            value.style.marginLeft = "30px";
            value.style.marginRight = "30px";
            //ImgPhoto.style.backgroundImage = value.style.backgroundImage;
            document.body.style.backgroundImage = element.style.backgroundImage;
            if (isokay) {
                value2.style.width = "200px";
                value2.style.height = "72%";
                value2.style.opacity = "50%";
                value.style.marginLeft = "10px";
                value.style.marginRight = "10px";
                value2 = value;
            }
            else {
                isokay = true;
                value2 = value;
            }
        });


        element.addEventListener('mousedown', (event) => {
            isDragging = true;
            lastPosition = {
                x: event.clientX,
                y: event.clientY
            };
        });

        element.addEventListener('mousemove', (event) => {
            if (isDragging === true) {
                const newPosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                const delta = {
                    x: newPosition.x - lastPosition.x,
                    y: newPosition.y - lastPosition.y
                };
                section.scrollLeft -= delta.x;
                lastPosition = newPosition;
            }
        });

        element.addEventListener('mouseup', (event) => {
            const newPosition = {
                x: event.clientX,
                y: event.clientY
            };
            isDragging = false;
            lastPosition = newPosition;
        });

        index++;
    });

}

AddImgItem();




