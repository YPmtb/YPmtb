document.addEventListener("DOMContentLoaded", function () {
    console.log("페이지 로드 완료");

    // 뒤로 가기 버튼 동작
    const backButton = document.querySelector(".back-btn");
    if (backButton) {
        backButton.addEventListener("click", function () {
            history.back();
        });
    }

    // 추가 기능을 위한 공간
    // 예: 다국어 지원 기능, 팝업 처리 등 향후 기능 추가 가능
});