function init() {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 1.5; // x축 위치 지정
    var centerY = canvas.height / 2; //ycnr 위치 지정
    var radius = 150; // 원의 지름 설정
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); // 지정된 좌표에서 원을 그림
    ctx.fillStyle = "#4fa0f7"; // 내부에 색을 칠함
    ctx.fill(); // 색을 칠하기 위한 함수
    ctx.lineWidth = 4; // 선의 두께는 4로 지정
    ctx.strokeStyle = "#ff0000"; // 선의 색상을 지정함
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(50, 100, 50, 300); //해당 좌표에 사각형 그려 넣음
    ctx.rect(110, 100, 50, 300); //해당 좌표에 사각형 그려 넣음
    ctx.rect(170, 100, 50, 300); //해당 좌표에 사각형 그려 넣음
    ctx.fillStyle = "#000"; // 내부에 색을 칠함
    ctx.fill(); // 색을 칠하기 위한 함수
}