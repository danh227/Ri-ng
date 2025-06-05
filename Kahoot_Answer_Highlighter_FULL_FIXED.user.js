// ==UserScript==
// @name         Kahoot Answer Highlighter (Fixed 2024)
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  Tô màu đáp án đúng cho Kahoot - tương thích giao diện mới 2024 (Kiwi Android + Tampermonkey)
// @author       Bạn
// @match        https://kahoot.it/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 👉 Danh sách câu hỏi và đáp án đúng
    const answerDB = {
        "Các yếu tố nguy hiểm trong sản xuất là gì?": "Nguồn điện, nguồn nhiệt, bộ phận chuyển động, truyền động.",
        Người lao động có quyền từ chối hoặc rời bỏ nơi làm việc mà vẫn được trả đủ tiền lương và không bị coi là vi phạm kỷ luật lao động khi nào?": "Khi thấy rõ có nguy cơ xảy ra tai nạn lao động, đe dọa nghiêm trọng tính mạng, sức khỏe của mình và phải báo cáo ngay với người phụ trách trực tiếp.",
        "Những người làm những việc có yêu cầu nghiêm ngặt về an toàn lao động được xếp vào nhóm nào?": "Nhóm 3.",
        "Mục đích của công tác an toàn - vệ sinh lao động là gì?": "Đảm bảo an toàn cho người lao động, hạn chế đến mức thấp nhất hoặc không để xảy ra tai nạn...",
        "Theo quy định tại Nghị định 44/2016/NĐ-CP ngày 15/05/2016 của Chính phủ, người lao động có yêu cầu nghiêm ngặt về an toàn lao động (Nhóm 3) phải được huấn luyện định kỳ ít nhất bao nhiêu năm một lần?": "2 năm.",
        "Trang bị phương tiện bảo vệ cá nhân đầy đủ để làm gì?": "Ngăn ngừa tai nạn lao động và ngăn ngừa bệnh nghề nghiệp.",
        "Sự cố kỹ thuật gây mất an toàn, vệ sinh lao động là gì?": "Là hư hỏng của máy, thiết bị, vật tư, chất vượt quá giới hạn an toàn kỹ thuật cho phép...",
        "Công ty tiến hành diễn tập PCCC và di tản thoát nạn một năm mấy lần?": "2 lần.",
        "Nút ấn khẩn báo cháy được sử dụng để làm gì?": "Ấn nút để chuông reo khi phát hiện có dấu hiệu của đám cháy giúp mọi người di tản ra bên ngoài.",
        "Khi nghe tiếng chuông báo cháy, công nhân viên phải làm gì?": "Sử dụng lối thoát hiểm gần nhất, đi theo các kí hiệu mũi tên đỏ để thoát ra khỏi khu vực đang có cháy và tập trung tại khu vực an toàn.",
        "Cách sử dụng bình chữa cháy bằng bột như thế nào?": "Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò.",
        "Nếu xảy ra sự cố trong lúc vận hành máy (kẹt vải, dao không quay), công nhân nên làm gì?": "Nhấn nút dừng khẩn cấp.",
        "Trong quá trình cắt, biện pháp đúng để phòng tránh tai nạn do dao hoặc kéo sắc gây ra là gì?": "Đậy nắp lưỡi dao khi không sử dụng.",
        "Tại sao an toàn vệ sinh lao động lại quan trọng nhất ở bộ phận cắt vải?": "Để bảo vệ tính mạng và sức khỏe của người lao động.",
        "Khi vận hành máy cắt vòng, công nhân viên có cần sử dụng bao tay sắt không? Vì sao?": "Cần thiết, bao tay sắt sẽ bảo vệ tay...",
        "Khi phát hiện lớp cách điện của dây điện trên máy cắt cầm tay bị hỏng, người vận hành máy cắt nên làm gì?": "Báo ngay cho bộ phận bảo trì hoặc quản lý...",
        "Trang phục phù hợp khi làm việc tại khu vực cắt vải là gì?": "Quần áo ôm gọn, không vướng víu, không phụ kiện.",
        "Trong khi thao tác, hành vi nào là không phù hợp?": "Nói chuyện điện thoại trong lúc đang vận hành máy cắt.", Dưới đây là phần tổng hợp thông tin dưới dạng câu hỏi và câu trả lời, dựa trên nội dung bạn đã cung cấp:
Chủ đề: Lý thuyết chung về an toàn vệ sinh lao động tại nơi làm việc
"Người lao động có quyền từ chối hoặc rời bỏ nơi làm việc mà vẫn được trả đủ tiền lương và không bị coi là vi phạm kỷ luật lao động khi nào?"
"Khi thấy rõ có nguy cơ xảy ra tai nạn lao động, đe dọa nghiêm trọng tính mạng, sức khỏe của mình và phải báo cáo ngay với người phụ trách trực tiếp."
"Những người làm những việc có yêu cầu nghiêm ngặt về an toàn lao động được xếp vào nhóm nào?"
"Nhóm 3."
"Mục đích của công tác an toàn - vệ sinh lao động là gì?"
"Đảm bảo an toàn cho người lao động, hạn chế đến mức thấp nhất hoặc không để xảy ra tai nạn, chấn thương hoặc tử vong trong lao động; đảm bảo người lao động khỏe mạnh, không bị mắc bệnh nghề nghiệp hoặc các bệnh tật khác do điều kiện lao động xấu gây ra; duy trì, phục hồi sức khỏe và kéo dài thời gian làm việc cho người lao động."
"Theo quy định tại Nghị định 44/2016/NĐ-CP ngày 15/05/2016 của Chính phủ, người lao động có yêu cầu nghiêm ngặt về an toàn lao động (Nhóm 3) phải được huấn luyện định kỳ ít nhất bao nhiêu năm một lần?"
"2 năm."
"Trang bị phương tiện bảo vệ cá nhân đầy đủ để làm gì?"
"Ngăn ngừa tai nạn lao động và ngăn ngừa bệnh nghề nghiệp."
"Sự cố kỹ thuật gây mất an toàn, vệ sinh lao động là gì?"
"Là hư hỏng của máy, thiết bị, vật tư, chất vượt quá giới hạn an toàn kỹ thuật cho phép, xảy ra trong quá trình lao động và gây thiệt hại hoặc có nguy cơ gây thiệt hại cho con người, tài sản và môi trường."
"Về mặt tổ chức/kỹ thuật, các yếu tố nào sau đây gây mất an toàn trong quá trình sản xuất?"
"Địa điểm không gian, mặt bằng sản xuất chật hẹp; máy, thiết bị lắp đặt không đảm bảo quy phạm an toàn, không đúng kỹ thuật; máy, thiết bị bố trí không hợp lý; người lao động để bừa bãi, không sắp xếp gọn gàng, phù hợp tầm với; máy, thiết bị, phương tiện làm việc... không phù hợp với nhân trắc người lao động; phương tiện, dụng cụ phục vụ sản xuất thiếu hoặc kém chất lượng."
"Định nghĩa tai nạn lao động là gì?"
"Là tai nạn gây tổn thương bất kỳ bộ phận nào của cơ thể hoặc thậm chí gây tử vong, xảy ra trong quá trình lao động, thực hiện công việc, nhiệm vụ được giao; xảy ra tại nơi làm việc và trong giờ làm việc, cũng như các tai nạn liên quan đến công việc nhưng xảy ra ngoài nơi làm việc hoặc ngoài giờ làm việc."
"Người lao động cần làm gì khi bị tai nạn tại nơi làm việc?"
"Đến ngay phòng y tế để được sơ cứu và làm biên bản điều tra tai nạn lao động."
"Trong quá trình làm việc, nếu phát hiện thấy các hiện tượng bất thường có nguy cơ xảy ra mất an toàn, người lao động phải xử lý như thế nào?"
"Dừng ngay công việc và báo cáo với người phụ trách trực tiếp xin ý kiến giải quyết về sự cố mất an toàn để có biện pháp xử lý."
"Trong khi làm việc, người lao động có thể bỏ bớt một vài nội dung của quy trình làm việc an toàn để thực hiện công việc được nhanh hơn, đúng hay sai?"
"Sai."
"Trong quá trình làm việc tại nhà máy sản xuất, công nhân nên đảm bảo điều gì để tránh tai nạn?"
"Làm việc cẩn thận và tập trung; sử dụng thiết bị bảo hộ; báo cáo ngay khi phát hiện sự cố."
"Các yếu tố vật chất có ảnh hưởng xấu, nguy hiểm, có nguy cơ gây tai nạn hoặc bệnh nghề nghiệp cho người lao động là gì?"
"Các yếu tố vật lý, hóa học, sinh vật - vi sinh vật, tâm lý, yếu tố bất lợi."
"Các yếu tố nguy hiểm trong sản xuất là gì?"
"Nguồn điện, nguồn nhiệt, bộ phận chuyển động, truyền động."
"Người lao động có thể vào thang máy nâng hàng để di chuyển lên xuống các tầng/xưởng cùng với hàng hóa, đúng hay sai?"
"Sai."
"Xe nâng hàng có thể dùng để nâng người lên cao để lấy nguyên vật liệu, hàng hóa, đúng hay sai?"
"Sai."
"Khi bảo hộ lao động được cấp phát bị hư hỏng, người lao động cần làm gì?"
"Báo ngay cho cấp trên gần nhất để được yêu cầu cấp lại bảo hộ lao động hoặc liên hệ trực tiếp phòng CSR."
"Nguyên tắc đúng khi lập bảng dữ liệu an toàn hóa chất (MSDS) là gì?"
"Từng mục trong bảng phải được điền đầy đủ, nếu không có thông tin thì ghi "Không có dữ liệu" hoặc "Không áp dụng"."
"Thời gian huấn luyện pháp định hàng năm đối với Nhóm 3 an toàn vệ sinh lao động là bao nhiêu?"
"24 giờ."
"Những lao động làm công tác y tế được xếp vào nhóm nào?"
"Nhóm 5."
"Công ty tiến hành diễn tập PCCC và di tản thoát nạn một năm mấy lần?"
"2 lần."
"Lối thoát hiểm cho các vị trí làm việc đơn lẻ (chỉ có một người làm việc thường xuyên) phải có chiều rộng nhỏ nhất là bao nhiêu theo quy định?"
"0.8m."
"Nút ấn khẩn báo cháy được sử dụng để làm gì?"
"Ấn nút để chuông reo khi phát hiện có dấu hiệu của đám cháy giúp mọi người di tản ra bên ngoài."
"Có mấy loại bình chữa cháy đang được lắp đặt tại xưởng làm việc?"
"Có 2 loại: Bình bột 8kg và CO2 5kg."
"Đầu báo khói tự động là gì?"
"Khi phát hiện có khói, đầu báo sẽ phát sáng đèn tín hiệu màu đỏ, đồng thời kích hoạt hệ thống chuông báo cháy reo giúp mọi người phát hiện đám cháy và di tản ra bên ngoài."
"Khu vực nào là khu vực được phép hút thuốc tại Unisoll Vina?"
"Khu vực có bố trí bảng "KHU VỰC HÚT THUỐC" và chậu cát để vứt tàn thuốc."
"Khi công nhân viên vừa hút thuốc xong, có được phép vứt ngay tàn thuốc vào trong thùng rác hay không?"
"Không được, phải vứt tàn thuốc vào các chậu cát đã được công ty bố trí sẵn."
"Có mấy cách nhận biết đám cháy qua các dấu hiệu ban đầu?"
"Khói, ánh lửa - tiếng nổ - mùi sản phẩm cháy."
"Các hành động bị cấm khi xảy ra sự cố hỏa hoạn là gì?"
"Những hành động gây nguy hiểm cho bản thân và người khác; tìm cách quay lại khu vực đang có cháy để lấy đồ đạc cá nhân khi chưa có sự cho phép; sử dụng thang máy để thoát hiểm."
"Khi nghe tiếng chuông báo cháy, công nhân viên phải làm gì?"
"Sử dụng lối thoát hiểm gần nhất, đi theo các kí hiệu mũi tên đỏ để thoát ra khỏi khu vực đang có cháy và tập trung tại khu vực an toàn."
"Cách sử dụng bình chữa cháy bằng bột như thế nào?"
"Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò."
"Người lao động có quyền tự do sử dụng những ổ điện để cắm sạc điện thoại, quạt, pin dự phòng trong khu vực nhà xưởng, đúng hay sai?"
"Sai."
"Sắp xếp hàng vật dụng như thế nào để đảm bảo an toàn tại nơi làm việc?"
"Không che chắn lối thoát hiểm và các thiết bị phòng cháy chữa cháy; không chất hàng cao quá 2m; ở những khu vực thấp, chất hàng cách bóng đèn ít nhất 0.5m."
"Công nhân viên A nói rằng không được để bất cứ vật dụng thiết bị hàng hóa gây cản trở lối đi, thiết bị PCCC, tủ thuốc sơ cấp cứu, các lối thoát hiểm và cửa thoát hiểm là đúng hay sai?"
"Đúng."
"Những yếu tố như khói, khí độc, lửa và tâm lý hoảng loạn sẽ đe dọa đến tính mạng con người trong đám cháy là đúng hay sai?"
"Đúng."
"Công nhân có thể ngủ trưa bất kì nơi đâu trong xưởng kể cả các lối thoát hiểm là đúng hay sai?"
"Sai."
"Trong trường hợp xảy ra hỏa hoạn hoặc tình huống khẩn cấp trong công ty, có bao nhiêu nơi tập trung sau khi sơ tán?"
"9."
"Biện pháp nào không phải là biện pháp cần thực hiện trước khi thực hiện công việc nguy hiểm cháy nổ?"
"Phát nhạc ở nơi làm việc."
"Những gì không được coi là thiết bị chữa cháy?"
"Máy sưởi điện."
"Trước khi thực hiện công việc có nguy cơ cháy nổ, cần phải làm gì để đảm bảo không còn khí hoặc hơi dễ cháy ở nơi làm việc?"
"Thông gió."
"Nếu xảy ra sự cố trong lúc vận hành máy (kẹt vải, dao không quay), công nhân nên làm gì?"
"Nhấn nút dừng khẩn cấp."
"Khi máy phát ra tiếng kêu lạ hoặc hoạt động bất thường, công nhân nên làm gì?"
"Dừng máy ngay lập tức và báo cho bộ phận bảo trì."
"Lý do không nên sử dụng máy cắt cầm tay khi tay ướt hoặc khu vực ẩm ướt là gì?"
"Nguy cơ bị điện giật rất cao."
"Khi vận hành máy cắt cầm tay, người lao động bắt buộc phải làm gì?"
"Mang đầy đủ đồ bảo hộ như găng tay chống cắt, khẩu trang."
"Khu vực cắt vải cần đảm bảo điều kiện nào sau đây?"
"Được chiếu sáng tốt, sạch sẽ và không trơn trượt."
"Trước khi vận hành máy cắt, người vận hành cần làm gì?"
"Kiểm tra lưỡi dao, hệ thống an toàn, nguồn điện và vị trí làm việc."
"Trang phục phù hợp khi làm việc tại khu vực cắt vải là gì?"
"Quần áo ôm gọn, không vướng víu, không phụ kiện."
"Nếu xảy ra tai nạn lao động trong khu vực cắt, bạn nên làm gì?"
"Báo ngay cho tổ trưởng, bộ phận y tế, không tự ý xử lý nếu chưa được đào tạo."
"Việc làm nào sau đây giúp phòng tránh tai nạn lao động ở bộ phận cắt?"
"Được đào tạo sử dụng thiết bị cắt, kiểm tra máy móc trước khi làm việc."
"Trong khi thao tác, hành vi nào là không phù hợp?"
"Nói chuyện điện thoại trong lúc đang vận hành máy cắt."
"Tại sao không nên để các vật dụng hoặc vải thừa gần khu vực máy cắt?"
"Vì dễ gây vướng, khiến máy bị kẹt hoặc gây tai nạn."
"Khi làm việc với máy cắt vải, công nhân cần lưu ý gì để đảm bảo an toàn?"
"Không để máy chạy không tải khi không có vải cần cắt."
"Khi cắt vải trong thời gian dài, công nhân nên làm gì để giảm mỏi mắt?"
"Nghỉ mắt vài phút sau mỗi 1-2 giờ, nhìn ra xa để mắt thư giãn."
"Việc dán cảnh báo trên máy cắt vải có mục đích gì?"
"Cảnh báo nguy hiểm và nhắc nhở công nhân tuân thủ an toàn khi vận hành."
"Nếu nhãn cảnh báo trên máy cắt bị mờ hoặc bong tróc, công nhân cần làm gì?"
"Báo quản lý hoặc bộ phận an toàn để thay thế."
"Khi thấy nhãn cảnh báo trên máy cắt, công nhân nên làm gì?"
"Đọc kỹ, tuân thủ nội dung và hướng dẫn an toàn."
"Nếu máy cắt vải không có nhãn tiếng Việt, nguy cơ nào dễ xảy ra nhất?"
"Công nhân thao tác sai do không hiểu rõ hướng dẫn hoặc cảnh báo, dẫn đến tai nạn lao động."
"Khi phát hiện găng tay sắc bị hỏng, không thể tiếp tục sử dụng, công nhân cần làm gì?"
"Báo ngay cho quản lý hoặc người phụ trách để được cấp găng tay mới đúng quy định."
"Thiết bị an toàn trên máy cắt đầu bàn cần kiểm tra trước khi sử dụng là gì?"
"Kiểm tra hệ thống bảo vệ lưỡi cắt, nút dừng khẩn cấp và các thiết bị ngắt điện an toàn."
""Bao tay sắt" là thiết bị bảo hộ cá nhân gì?"
"Bao tay sắt."
"Có quan điểm cho rằng việc treo/dán các biển cảnh báo trên máy cắt tay chỉ gây mất thẩm mỹ cho máy móc mà không có tác dụng cảnh báo các rủi ro nguy hiểm. Quan điểm này là đúng hay sai?"
"Sai."
"Công nhân được phép leo lên bề mặt của máy cắt tự động để ngủ trưa, đúng hay sai?"
"Sai."
"Ý nào sau đây không phải là nguyên tắc vận hành an toàn của máy cắt tự động?"
"Đứng quá sát với các bộ phận truyền, chuyển động của máy khi máy đang vận hành."
"Khi phát hiện lớp cách điện của dây điện trên máy cắt cầm tay bị hỏng, người vận hành máy cắt nên làm gì?"
"Báo ngay cho bộ phận bảo trì hoặc quản lý, ngưng sử dụng máy ngay lập tức."
"Khi vận hành máy cắt vòng, công nhân viên có cần sử dụng bao tay sắt không? Vì sao?"
"Cần thiết, bao tay sắt sẽ bảo vệ tay trước nguy cơ bị tai nạn lao động do lưỡi dao cắt rất sắc nhọn có thể cắt đứt cả bàn tay."
"Tại sao chỉ những người nằm trong danh sách vận hành máy cắt tay mới được phép vận hành máy cắt tay?"
"Vì họ đã được đào tạo, hướng dẫn an toàn và có đủ năng lực chuyên môn để sử dụng máy một cách an toàn."
"Phát biểu sau đây đúng hay sai: "Khi người vận hành máy cắt để tiết kiệm thời gian thì không cần mang găng tay chống cắt?""
"Sai – vì không mang găng tay chống cắt có thể gây tai nạn nghiêm trọng cho tay."
"Khi vận chuyển xe đẩy vải, phải chú ý điều gì để tránh va chạm?"
"Đẩy xe đúng tư thế, giữ khoảng cách an toàn giữa chân và xe."
"Khi sử dụng xe đẩy vải, cần chú ý điều gì để tránh tình huống mặt bàn của xe rơi xuống gây kẹp tay hoặc đập vào đầu?"
"Kiểm tra và đảm bảo mặt bàn đã khóa chắc chắn trước khi sử dụng, không đưa tay hoặc đầu vào khu vực nguy hiểm."
"Tại sao không được đứng trong khu vực di chuyển của thiết bị máy cắt?"
"Vì có nguy cơ bị va chạm, kẹp, hoặc tai nạn nghiêm trọng do thiết bị đang hoạt động."
"Nhận định sau đây là đúng hay sai: "Xe đẩy vải có thể đặt bất kỳ vị trí nào trong nhà máy?""
"Sai, phải được đặt tại các vị trí quy định rõ ràng, không cản trở lối đi, thiết bị và đảm bảo an toàn."
"Nhận định sau đây đúng hay sai: "Người lao động có thể sử dụng xe đẩy vải để đẩy 1 lần bao nhiêu vải cũng được để tiết kiệm thời gian đẩy nhiều lần.""
"Sai, phải đảm bảo giới hạn tải trọng, việc đẩy quá nhiều vải có thể dẫn đến nguy cơ lật xe, mất kiểm soát khi di chuyển và dễ gây tai nạn."
"Khi người vận hành máy cắt vải cầm tay cảm thấy găng tay chống cắt do công ty cấp phát không được thoải mái khi sử dụng, thì người vận hành máy cắt có thể tự mua găng tay từ bên ngoài mang vào công ty để sử dụng cho thoải mái không?"
"Không, vì phải sử dụng đúng loại găng tay đạt tiêu chuẩn an toàn mà công ty đã phê duyệt và cấp phát."
"Phát biểu sau đây đúng hay sai: "Chỉ khi có bộ phận kiểm tra an toàn và khách hàng đến kiểm tra thì người vận hành máy cắt cầm tay mới lấy găng tay chống cắt ra sử dụng, còn nếu không có người đến kiểm tra thì không cần sử dụng găng tay chống cắt, việc này giúp vận hành máy cắt nhanh hơn mà không bị vướng víu.""
"Sai, vì găng tay chống cắt phải luôn được sử dụng khi vận hành máy cắt để bảo vệ an toàn cho người vận hành, không phụ thuộc vào việc có ai kiểm tra hay không."
"Phát biểu sau đây đúng hay sai: "Khi vận hành máy cắt tự động, việc cắt vải đã có máy làm, còn người lao động chỉ cần đứng bấm điện thoại, trò chuyện cùng nhau đến khi máy cắt xong là được.""
"Sai, vì người vận hành phải luôn tập trung theo dõi quá trình cắt để phát hiện và xử lý kịp thời các sự cố, việc trò chuyện hoặc dùng điện thoại có thể gây mất an toàn cho người lao động."
"Là tổ trưởng bộ phận cắt nhưng không nằm trong danh sách được phân công vận hành máy cắt cầm tay, tổ trưởng có được phép vận hành máy cắt cầm tay hay không?" 
"Hành vi nào sau đây là không an toàn trong kho vải?"
"Để hàng hóa chắn lối đi."
"Trong trường hợp xảy ra cháy nổ trong kho, việc đầu tiên cần làm là gì?"
"Báo ngay cho người phụ trách và kích hoạt hệ thống báo cháy."
"Tại sao vải trong kho cần được xếp đúng quy cách và chiều cao giới hạn?"
"Để tránh đổ đè, sập kệ gây tai nạn."
"Khi phát hiện mùi khét hoặc sự cố về điện trong kho, cần làm gì?"
"Báo ngay cho bộ phận kỹ thuật, ngắt nguồn điện và sơ tán nếu cần."
"Khi nâng – vác kiện vải nặng, thao tác nào là đúng để tránh chân thương?"
"Gập đầu gối, giữ thẳng lưng, nâng bằng chân."
"Khi sử dụng xe đẩy hoặc xe nâng trong kho, cần lưu ý điều gì để đảm bảo an toàn?"
"Quan sát kỹ, không vượt quá tải trọng, di chuyển chậm và đúng lối đi."
"Người lao động được phép ngủ trong lòng vải vào thời gian nghỉ trưa, nghỉ ngắn. Đúng hay sai?"
"Sai."
"Hành vi nào sau đây là KHÔNG ĐƯỢC PHÉP khi làm việc trong kho vải?"
"Ăn uống trong khu vực kho; Đùa giỡn, chạy nhảy; Hút thuốc trong kho."
"Biển cảnh báo thường được dán ở đâu trong kho vải?"
"Những nơi dễ xảy ra nguy hiểm như gần lối đi, nơi chất hàng, khu vực nâng hạ."
"Tại sao công nhân không được trèo lên lồng vải để lấy vải?"
"Vì dễ bị trượt ngã, té từ trên cao, gây chấn thương nghiêm trọng hoặc tai nạn chết người."
"Tại sao công nhân không nên đến gần xe nâng khi xe đang hoạt động?"
"Vì xe nâng có điểm mù, dễ gây va chạm và cán vào người nếu không quan sát kịp."
"Khi cần đi qua khu vực xe nâng đang làm việc, công nhân nên làm gì?"
"Đợi xe nâng dừng hẳn, ra hiệu cho tài xế nhìn thấy trước khi đi qua."
"Trước khi vận hành xe nâng tài xế xe nâng cần làm gì?"
"Mang bảo hộ lao động; Kiểm tra tổng thể xe nâng: còi, thắng, kính xe, càng xe, bánh xe....; Kiểm tra khu vực xung quanh trước và sau xe nâng xem có vật cản nào không."
"Xe nâng có thể sạc pin ở bất cứ đâu khi xe hết pin. Đúng hay sai?"
"Sai. Sạc pin tại khu vực mà công ty quy định để đảm bảo an toàn cháy nổ."
"Trong quá trình làm việc, nếu phát hiện xe nâng gặp vấn đề, công nhân vận hành xe nâng cần làm gì?"
"Báo ngay cho bộ phận bảo trì hoặc người có trách nhiệm và ngừng sử dụng xe nâng."
"Xe nâng đang chở tải thì có được di chuyển tới phía trước không?"
"Không. Vì bị che khuất tầm nhìn."
"Những điều nào sau đây bị nghiêm cấm khi vận hành xe nâng?"
"Chất hàng hóa vượt quá mặt nạ (cơ cấu bảo hiểm) của xe; Dùng xe nâng để nâng người; Khung nâng nghiêng về phía trước hoặc hàng bị lệch."
"Tốc độ di chuyển tối đa của xe nâng trong khu vực nhà xưởng là bao nhiêu?"
"6 km/h."
"Tài xế xe nâng có được phép giao chìa khóa cho công nhân chưa có chứng chỉ, bằng cấp vận hành xe nâng lái thử không?"
"Không, vì chỉ người có chứng chỉ hoặc bằng cấp hợp lệ mới được phép vận hành xe nâng."
"Khi phát hiện sàn tại khu vực kho vải bị nứt, người lao động cần phải làm gì?"
"Đánh dấu khu vực nứt và báo ngay cho bộ phận bảo trì hoặc người phụ trách an toàn."
"Khi phát hiện tại vị trí kho vải có gói hàng lạ, người lao động nên làm gì?"
"Báo ngay cho quản lý hoặc bộ phận an ninh và không tự ý tiếp cận hay di chuyển gói hàng."
"Người lao động được sử dụng thang máy điện nâng hàng ở kho, để di chuyển lên xuống giữa các tầng. Đúng hay Sai?"
"Sai. Tuyệt đối không được dùng thang máy điện để chở người."
"Khi người lao động phát hiện lồng vải bị hỏng khóa chốt, người lao động nên làm gì?"
"Báo ngay cho quản lý hoặc bộ phận bảo trì để xử lý, không tiếp tục sử dụng lồng vải bị hỏng khóa chốt."
"Phát biểu sau đây đúng hay sai: "Xe nâng có thể chạy bất cứ nơi nào trong nhà xưởng.""
"Sai – vì xe nâng chỉ được phép chạy trong các khu vực được quy định và đánh dấu an toàn."
"Tại sao nói khu vực kho là một trong những khu vực nhạy cảm trong xưởng may?"
"Vì đây là nơi chứa nguyên liệu đầu vào quan trọng, dễ cháy và dễ gây thiệt hại lớn nếu xảy ra sự cố."
"Có phải những người thuộc bộ phận khác cũng có thể thường xuyên ra vào thoải mái khu vực kho không?"
"Không – vì chỉ những người có nhiệm vụ, được phân công hoặc có sự cho phép mới được vào kho."
"Các bộ phận khác nếu muốn vào khu vực Kho và Hoàn thành thì phải làm gì?"
"Ghi họ tên, ký tên, ghi rõ thời gian ra vào và mục đích vào."
"Vì sao phải tuân thủ quy định chiều cao chất hàng trong kho?"
"Ngăn ngừa tai nạn lao động như đổ sập hàng hóa và đảm bảo an toàn cho người thực hiện các công việc trong kho."
"Khi đang làm việc nhận thấy hàng hóa được chất quá vạch đỏ chiều cao chất hàng cho phép và có nguy cơ ngã đổ, bạn nên làm gì?"
"Báo ngay cho tổ trưởng/quản lý để sắp xếp hàng hóa đúng quy định."
"Khi đang làm việc nhận thấy hàng hóa được đặt chắn các lối thoát hiểm, bạn nên làm gì?"
"Báo ngay cho tổ trưởng/quản lý để sắp xếp hàng hóa về đúng nơi quy định."
"Trong khu vực kho, có được để hàng hóa chắn các tủ chữa cháy, bình chữa cháy hay không?"
"Không."
"Nguy cơ nào có thể xảy ra nêu công nhân chui vào bên trong lồng sắt để lấy vải ra?"
"Chấn thương đầu hoặc các bộ phận khác do va đập với lồng sắt trong quá trình làm việc."
"Trong ảnh có lỗi nào được xác định tại kho?"
"Hàng hóa được đặt sai vị trí và chắn lối thoát hiểm."
"Trong ảnh có lỗi nào được xác định tại kho?"
"Lồng sắt được đặt sai vị trí và chắn lối thoát hiểm."
"Khi sử dụng xe đẩy vải, điểm nào sau đây cần chú ý?"
"Kiểm tra xem bánh xe có bị kẹt dị vật trước khi sử dụng; Luôn chú ý tránh kẹp tay vào phần vách ngăn gập của xe."
"Khi xếp các thùng carton lên cao trong bộ phận hoàn thành mà không chú ý an toàn, nguy cơ nào có thể xảy ra?"
"Rơi đổ hàng hóa và gây chấn thương cho người lao động."
"Trong bộ phận hoàn thành, khi thực hiện các động tác lặp đi lặp lại trong thời gian dài, tai nạn lao động điển hình nào có thể xảy ra?"
"Bệnh cơ xương khớp (đau cổ tay, vai, lưng, v.v.)."
"Mục đích chính của việc sử dụng máy dò kim loại trong bộ phận hoàn thành là gì?"
"Loại bỏ các vật thể kim loại như kim, ghim còn sót lại trên sản phẩm may mặc."
"Hành động nào đúng nhất khi sử dụng xe nâng tay một cách an toàn?"
"Kiểm tra bánh xe, tay cầm và hàng hóa trước khi sử dụng."
"Không, vì chỉ những người được phân công và huấn luyện an toàn mới được phép vận hành máy."
"Trước khi thực hiện các công việc điều chỉnh, bảo trì hay kiểm tra máy cắt tự động công nhân viên cần phải làm gì?"
"Tắt nguồn điện hoàn toàn."
"Trong lúc gấp rút mà máy cắt bị hỏng, người vận máy cắt biết cách sửa, tổ trưởng chỉ định cho người vận hành tự sửa luôn mà không cần báo bộ phận bảo trì để tránh mất thời gian. Việc này đúng hay sai?"
"Sai, vì người vận hành không có thẩm quyền và trách nhiệm sửa chữa máy móc, dễ gây mất an toàn và thiết bị hỏng nặng hơn."
"Tại sao an toàn vệ sinh lao động lại quan trọng nhất ở bộ phận cắt vải?"
"Để bảo vệ tính mạng và sức khỏe của người lao động."
"Trong quá trình cắt, biện pháp đúng để phòng tránh tai nạn do dao hoặc kéo sắc gây ra là gì?"
"Đậy nắp lưỡi dao khi không sử dụng."
        "Nếu máy cắt vải không có nhãn tiếng Việt, nguy cơ nào dễ xảy ra nhất?": "Công nhân thao tác sai do không hiểu rõ hướng dẫn hoặc cảnh báo..."
    };

    };

    // Hàm so khớp câu hỏi gần đúng
    function similarity(str1, str2) {
        str1 = str1.toLowerCase().trim();
        str2 = str2.toLowerCase().trim();
        if (str1 === str2) return 1;
        let matches = 0;
        const words1 = str1.split(" ");
        const words2 = str2.split(" ");
        words1.forEach(w => {
            if (words2.includes(w)) matches++;
        });
        return matches / Math.max(words1.length, words2.length);
    }

    function findBestMatch(question) {
        let bestScore = 0;
        let bestMatch = null;
        for (const q of Object.keys(answerDB)) {
            const score = similarity(question, q);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = q;
            }
        }
        return bestScore >= 0.6 ? bestMatch : null;
    }

    function highlightAnswer() {
        const questionElem = document.querySelector('[data-functional-selector="question-text"]');
        if (!questionElem) return;
        const questionText = questionElem.textContent.trim();
        const matched = findBestMatch(questionText);
        if (!matched) return;
        const correctAnswer = answerDB[matched];
        const buttons = document.querySelectorAll('[data-functional-selector="answer-button"]');
        buttons.forEach(btn => {
            const text = btn.textContent.trim();
            if (text === correctAnswer) {
                btn.style.backgroundColor = 'limegreen';
                btn.style.color = 'white';
                btn.style.border = '3px solid darkgreen';
            } else {
                btn.style.opacity = '0.5';
            }
        });
    }

    // Tự động tô màu mỗi 1 giây
    window.addEventListener('load', () => {
        setInterval(highlightAnswer, 1000);
    });
})();