chrome.runtime.onMessage.addListener(function () {
    var tpModal = document.getElementsByClassName("tp-modal");
    var tpBackdrop = document.getElementsByClassName("tp-backdrop tp-active");
    var body = document.getElementsByTagName("body")
    
    if(tpModal.length > 0){
        tpModal[0].remove();
    }
    if(tpBackdrop.length > 0){
        tpBackdrop[0].remove();
    }

    //remove overflow hidden to allow scrolling
    body[0].classList.remove("tp-modal-open");
    body[0].style.overflow = "";
});