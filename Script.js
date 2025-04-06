let img_gal_con = document.getElementById("img-gal-con");
let img_gal_sec = document.getElementById("img-gal-sec");
let nxt_btn = document.querySelector(".nxt-btn");
let pre_btn = document.querySelector(".pre-btn");
let gal_images = document.querySelectorAll(".gal-images");
let images = document.querySelectorAll(".act-img");
let ip_con = document.getElementById("ip-container");
let ip_img = document.getElementById("ip-img");
let ip_close = document.getElementById("ip-close-btn");
let degree = 0;
let interval = setInterval(()=>{nxt_btn.click()}, 3000);  //Adding auto move to gallery
// Function for nxt_btn click
nxt_btn.onclick = function nxt_art(){
    degree -= 36;
    if(window.screen.width < 1100){
        img_gal_con.style = 'transform:rotate(-15deg)';
        clearInterval(interval);
    }
  else{
    img_gal_con.style = 'transform:rotateX(20deg) rotateY(' + degree + 'deg)';
    clearInterval(interval);
    interval = setInterval(()=>{nxt_btn.click()}, 3000);
  }
}
// Function for pre_btn click
pre_btn.onclick = ()=>{
    degree += 36;
    if(window.screen.width < 1100){
        img_gal_con.style = 'transform:rotate(-15deg)';
        clearInterval(interval);
    }
   else{
    img_gal_con.style = 'transform:rotateX(20deg) rotateY(' + degree + 'deg)';
    clearInterval(interval);
    interval = setInterval(()=>{nxt_btn.click()}, 3000);
   }
};
// Start of adding zoom effect on hover
images.forEach((img)=>{
img.addEventListener("mousemove", (active)=>{
    if(window.screen.width > 1100){
        img_gal_sec.style.setProperty("--zoomed-display", "inline-block");
    }
    img_gal_sec.style.setProperty("--zoomed-img", "url(" + img.src + ")");
    let coordinates = {
        x: (active.offsetX * 100) / img.offsetWidth,
        y: (active.offsetY * 100) / img.offsetHeight,
        
    }
    img_gal_sec.style.setProperty("--zoom-x", coordinates.x + "%");
    img_gal_sec.style.setProperty("--zoom-y", coordinates.y + "%");
});
// End of adding zoom effect on hover

// Remove the zoom container on mouseout
img.addEventListener("mouseout", ()=>{
    img_gal_sec.style.setProperty("--zoomed-display", "none");
})

});
// Information popup on art click
images.forEach((img)=>{
img.onclick = ()=>{
    ip_con.style.display="flex";
    ip_img.src = img.src;
    let dim_back = document.getElementById("dim-back").style.display="block";
    ip_close.onclick = ()=>{
        ip_con.style.display="none";
        let dim_back = document.getElementById("dim-back").style.display="none";
    }



}
});
