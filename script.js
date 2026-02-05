/* SUPPORT POPUP */
const supportBtn=document.getElementById("supportBtn");
const supportPopup=document.getElementById("supportPopup");

supportBtn.onclick=()=>{
supportPopup.classList.toggle("show");
};

document.addEventListener("click",e=>{
if(!supportBtn.contains(e.target) && !supportPopup.contains(e.target)){
supportPopup.classList.remove("show");
}
});
