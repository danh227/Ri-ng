// ==UserScript==
// @name         Kahoot Highlight Partial Answer Match (No Auto Click)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Nhấp nháy đáp án đúng nếu khớp một phần với danh sách, không tự động chọn ⚡️🇻🇳
// @author       You
// @match        https://kahoot.it/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const answerKeywords = [
          //ví dụ: sẽ khớp với "Phản ứng oxi hóa tạo ra lửa"
          // khớp với "Khoảng cách an toàn"
        "tất cả",
"lắc bình, rút chốt",
"2 lần",
"24h",
"0.8m",
"nhóm 3",
"nguồn điện, nguồn nhiệt",
"bột 8kg, co2 5kg",
"ngăn hóa chất tràn",
"rửa tay, vệ sinh",
"dán ở nơi làm việc",
"ấn nút khi có dấu hiệu",
"tránh hóa chất bay hơi",
"tránh bay hơi",
"da, thần kinh,phổi",
"CSR",
"MSDS",
"A4",
"KHU VỰC HÚT THUỐT",
"các yếu tố trên",
"khẩu trang, bao tay",
// ➕ Thêm từ khóa/đoạn nội dung ngắn để so sánh tại đây
    ];

    const blinkStyle = `
        @keyframes blink {
            0% { background-color: yellow; }
            50% { background-color: red; }
            100% { background-color: yellow; }
        }
        .blinking {
            animation: blink 0.2s infinite;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = blinkStyle;
    document.head.appendChild(styleSheet);

    function normalize(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    }

    function highlightMatchingAnswers() {
        const answerEls = document.querySelectorAll('[data-functional-selector="answer-text"]');

        answerEls.forEach(el => {
            const answerText = normalize(el.textContent);
            for (const keyword of answerKeywords) {
                if (answerText.includes(normalize(keyword))) {
                    const btn = el.closest('button');
                    if (btn && !btn.classList.contains('blinking')) {
                        btn.classList.add('blinking');
                    }
                    break;
                }
            }
        });

        requestAnimationFrame(highlightMatchingAnswers);
    }

    requestAnimationFrame(highlightMatchingAnswers);
})();