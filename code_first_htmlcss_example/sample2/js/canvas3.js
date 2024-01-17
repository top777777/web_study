function init() {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var imageObj = new Image(); // imageObj 변수를 생성합니다.
    imageObj.onload = function () {
        // 페이지 호출 시 아래의 기능을 작동합니다.
        ctx.drawImage(imageObj, 80, 50);
        // 이미지를 좌표 x:80 y:50 위치에서 그려줍니다.
    };
    imageObj.src = "images/fantasy-3077928_640.jpg"; // 이미지를 호출합니다.

}