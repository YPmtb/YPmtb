const translations = {
    ko: {
        title: "운영시간 및 이용요금",
        headers: {
            hours: "운영시간",
            pricing: "이용요금",
            gear: "보호대 대여 비용",
            trailMap: "트레일 맵",
            back: "뒤로 가기"
        },
        tableHeaders: {
            day: "요일",
            info: "이용정보",
            ticket: "이용권",
            adult: "성인",
            youth: "청소년",
            equipment: "장비",
            rentalCost: "대여 비용"
        },
        hours: [
            ["월요일", "휴무 (공휴일 제외)"],
            ["화요일 ~ 금요일", "반일권 (오전): 10:00 ~ 14:30<br>반일권 (오후): 14:00 ~ 17:30<br>종일권: 10:00 ~ 17:30"],
            ["토요일, 일요일", "반일권 (오전): 09:00 ~ 12:00<br>반일권 (오후): 13:30 ~ 17:00<br>종일권: 09:00 ~ 17:00"]
        ],
        pricing: [
            ["리프트권 (반일)", "₩40,000", "₩30,000"],
            ["리프트권 (주간)", "₩50,000", "₩40,000"],
            ["MTB 시즌권", "₩600,000", "₩450,000"],
            ["가족 시즌권 (2인)", "₩900,000", "※ 소인 구분 없음"]
        ],
        gear: [["헬멧 / 보호대", "₩10,000"]],
        footer: "&copy; 2025 용평 MTB 파크. 모든 권리 보유.",
        phone: "전화: 033-330-7423",
        address: "주소: 올림픽로 715"
    },
    en: {
        title: "Operating Hours & Rates",
        headers: {
            hours: "Operating Hours",
            pricing: "Rates",
            gear: "Gear Rental",
            trailMap: "Trail Map",
            back: "Go Back"
        },
        tableHeaders: {
            day: "Day",
            info: "Information",
            ticket: "Ticket",
            adult: "Adult",
            youth: "Youth",
            equipment: "Equipment",
            rentalCost: "Rental Cost"
        },
        hours: [
            ["Monday", "Closed (Except Public Holidays)"],
            ["Tuesday ~ Friday", "Half Day (AM): 10:00 ~ 14:30<br>Half Day (PM): 14:00 ~ 17:30<br>Full Day: 10:00 ~ 17:30"],
            ["Saturday, Sunday", "Half Day (AM): 09:00 ~ 12:00<br>Half Day (PM): 13:30 ~ 17:00<br>Full Day: 09:00 ~ 17:00"]
        ],
        pricing: [
            ["Lift Pass (Half Day)", "₩40,000", "₩30,000"],
            ["Lift Pass (Full Day)", "₩50,000", "₩40,000"],
            ["MTB Season Pass", "₩600,000", "₩450,000"],
            ["Family Season Pass (2)", "₩900,000", "※ No age distinction"]
        ],
        gear: [["Helmet / Pads", "₩10,000"]],
        footer: "&copy; 2025 Yongpyong MTB Park. All rights reserved.",
        phone: "Phone: 033-330-7423",
        address: "Address: 715 Olympic Road"
    }
};

function changeLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // 제목 변경
    document.getElementById("title").textContent = translation.title;
    document.getElementById("hoursHeader").textContent = translation.headers.hours;
    document.getElementById("pricingHeader").textContent = translation.headers.pricing;
    document.getElementById("gearHeader").textContent = translation.headers.gear;
    document.getElementById("trailMapHeader").textContent = translation.headers.trailMap;
    document.getElementById("backButton").textContent = translation.headers.back;

    // 테이블 헤더 변경
    const tables = document.querySelectorAll("table");
    tables[0].rows[0].cells[0].textContent = translation.tableHeaders.day;
    tables[0].rows[0].cells[1].textContent = translation.tableHeaders.info;

    tables[1].rows[0].cells[0].textContent = translation.tableHeaders.ticket;
    tables[1].rows[0].cells[1].textContent = translation.tableHeaders.adult;
    tables[1].rows[0].cells[2].textContent = translation.tableHeaders.youth;

    tables[2].rows[0].cells[0].textContent = translation.tableHeaders.equipment;
    tables[2].rows[0].cells[1].textContent = translation.tableHeaders.rentalCost;

    // 운영시간 내용 변경
    document.querySelectorAll(".hours-table tbody tr").forEach((row, index) => {
        row.cells[0].innerHTML = translation.hours[index][0];
        row.cells[1].innerHTML = translation.hours[index][1];
    });

    // 이용요금 변경
    document.querySelectorAll(".pricing-table tbody tr").forEach((row, index) => {
        row.cells[0].innerHTML = translation.pricing[index][0];
        row.cells[1].innerHTML = translation.pricing[index][1];
        row.cells[2].innerHTML = translation.pricing[index][2] || "";
    });

    // 보호대 대여 비용 변경
    const gearRow = tables[2].rows[1];
    gearRow.cells[0].innerHTML = translation.gear[0][0];
    gearRow.cells[1].innerHTML = translation.gear[0][1];

    // 푸터 업데이트
    document.getElementById("footerText").innerHTML = translation.footer;
    document.getElementById("footerPhone").textContent = translation.phone;
    document.getElementById("footerAddress").textContent = translation.address;
}