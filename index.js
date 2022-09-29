let img = [document.getElementById("img1"),
document.getElementById("img2"),
document.getElementById("img3"),
] // Tạo mảng các phần tử ảnh
let imgName = document.getElementById("imgName") // Ghi chú đang hiện ảnh số bao nhiêu
let pos = 1 // Vị trí ảnh hiện tại
let interval = setInterval(right,5000) // Cài đặt tự động gọi hàm right (trôi xoay tua sang phải) sau mỗi 5 giây
function left()
{
    pos--;
    if (pos === 0) pos = 3 // Vị trí ảnh từ 1 đến 3. Nếu pos = 0 thì gán pos = 3
    display(pos) 
}
function right()
{
    pos++;
    if (pos === 4) pos = 1 // Vị trí ảnh từ 1 đến 3. Nếu pos = 4 thì gán pos = 1
    display(pos)
}
function display(pos) // Hiển thị ảnh
{
    for(i = 0; i < 3; i++)
        {
            if(i === (pos-1))
            {
                img[i].style.display = "block" // Hiện 1 ảnh 
                imgName.innerHTML = "Ảnh số: " + pos // Ghi chú 
            }
            else
            {
                img[i].style.display = "none" // Các ảnh còn lại không hiện
            }
        }
}