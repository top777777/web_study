
    function init() {
        var canvas = document.getElementById("Canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath(); // 경로의 시작을 알림
        ctx.moveTo(0, 0); // x축 0 y축 0 부터
        ctx.lineTo(500, 300); // x축 500 y축 300 까지
        ctx.lineWidth = 2; // 선의 두께는 2
        ctx.strokeStyle = "#0033ff"; // 선 색상은 파란색
        ctx.stroke(); // 선을 그려줌

        var canvas = document.getElementById("Canvas1");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(500, 300);
        ctx.moveTo(0, 300);
        ctx.lineTo(500, 0);
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 300);
        ctx.moveTo(0, 150);
        ctx.lineTo(500, 150);
        ctx.lineWidth = 1; // 선의 두께는 1
        ctx.strokeStyle = "black"; // 선 색상은 검정
        ctx.stroke(); // 선을 그려줌

   }


