chrome.runtime.onMessage.addListener(function () {
    var tpModal = document.getElementsByClassName("tp-modal");
    var tpBackdrop = document.getElementsByClassName("tp-backdrop tp-active");
    
    if(tpModal.length > 0){
        tpModal[0].remove();
    }
    if(tpBackdrop.length > 0){
        tpBackdrop[0].remove();
    }
});