let img = [document.getElementById("img1"),
document.getElementById("img2"),
document.getElementById("img3"),
]
let imgName = document.getElementById("imgName")
let pos = 1
let interval = setInterval(right,5000)
function left()
{
    pos--;
    if (pos === 0) pos = 3
    display(pos)
}
function right()
{
    pos++;
    if (pos === 4) pos = 1
    display(pos)
}
function display(pos)
{
    for(i = 0; i < 3; i++)
        {
            if(i === (pos-1))
            {
                img[i].style.display = "block"
                imgName.innerHTML = "Ảnh số: " + pos
            }
            else
            {
                img[i].style.display = "none"
            }
        }
}