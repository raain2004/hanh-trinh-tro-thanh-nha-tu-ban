const TOTAL_TURNS = 10;
const SOLO_PLAYER_NAME = "Người chơi";
const ANSWER_KEY = {
  1: "B",
  2: "C",
  3: "B",
  4: "C",
  5: "D",
  6: "B",
  7: "C",
  8: "A",
  9: "B",
  10: "C",
  11: "B",
  12: "B",
  13: "B",
  14: "C",
  15: "C",
  16: "D",
  17: "A",
  18: "B",
  19: "C",
  20: "B",
  21: "B",
  22: "C",
  23: "C",
  24: "B",
  25: "B",
  26: "B",
  27: "C",
  28: "A",
  29: "C",
  30: "B",
};

const INITIAL_STATE = {
  cash: 50,
  hardChoices: 0,
  mediumCorrect: 0,
  easyCorrect: 0,
};

const difficultyQuestionSets = {
  easy: [
    "Câu 1. Nền kinh tế hàng hóa có thể hình thành và phát triển khi có đủ bao nhiêu điều kiện? A. 1 B. 2 C. 3 D. 4",
    "Câu 2. Hai thuộc tính cơ bản của hàng hóa là gì? A. Giá trị và Giá trị trao đổi B. Giá trị sử dụng và Giá cả C. Giá trị sử dụng và Giá trị D. Giá trị thặng dư và Lợi nhuận",
    "Câu 3. Lượng giá trị của hàng hóa được đo lường bằng thước đo nào? A. Thời gian lao động cá biệt B. Thời gian lao động xã hội cần thiết C. Thời gian hao mòn máy móc D. Thời gian lưu thông trên thị trường",
    "Câu 4. Công thức chung của tư bản là gì? A. H - T - H B. T - H - T C. T - H - T' (với T' = T + t, t > 0) D. H - T - H'",
    "Câu 5. Ký hiệu của Giá trị thặng dư trong kinh tế chính trị Mác - Lênin là gì? A. k B. v C. c D. m",
    "Câu 6. Bộ phận tư bản tồn tại dưới hình thái tư liệu sản xuất (máy móc, nguyên nhiên vật liệu) được C. Mác gọi là gì? A. Tư bản khả biến (v) B. Tư bản bất biến (c) C. Tư bản giả D. Tư bản cho vay",
    "Câu 7. Chi phí sản xuất tư bản chủ nghĩa (ký hiệu là k) được tính bằng công thức nào? A. k = c + v + m B. k = c + p C. k = c + v D. k = v + m",
    "Câu 8. Nhà tư bản sử dụng mấy phương pháp cơ bản để sản xuất giá trị thặng dư? A. 2 (Tuyệt đối và Tương đối) B. 3 (Tuyệt đối, Tương đối, Siêu ngạch) C. 4 D. 5",
    "Câu 9. Bản chất của lợi nhuận (p) là gì? A. Là chi phí mà nhà tư bản bỏ ra B. Là hình thái biểu hiện của giá trị thặng dư trên bề mặt kinh tế thị trường C. Là do tư bản ứng trước sinh ra D. Là lao động quá khứ của công nhân",
    "Câu 10. Động lực mạnh nhất thúc đẩy các nhà tư bản ra sức cải tiến kỹ thuật, tăng năng suất lao động là gì? A. Giá trị thặng dư tuyệt đối B. Lợi nhuận bình quân C. Giá trị thặng dư siêu ngạch D. Tỷ suất lợi tức",
  ],
  medium: [
    "Câu 11. Lao động cụ thể và lao động trừu tượng tạo ra cái gì cho hàng hóa? A. Lao động cụ thể tạo ra giá trị, lao động trừu tượng tạo ra giá trị sử dụng B. Lao động cụ thể tạo ra giá trị sử dụng, lao động trừu tượng tạo ra giá trị C. Cả hai đều tạo ra giá trị sử dụng D. Cả hai đều tạo ra giá trị thặng dư",
    "Câu 12. Khi tăng năng suất lao động, lượng giá trị của một đơn vị hàng hóa sẽ thay đổi như thế nào? A. Tăng lên B. Giảm xuống C. Không thay đổi D. Biến động thất thường",
    "Câu 13. Tỷ suất giá trị thặng dư (m') phản ánh điều gì? A. Quy mô bóc lột của tư bản đối với công nhân làm thuê B. Trình độ (mức độ) khai thác, bóc lột sức lao động làm thuê của nhà tư bản C. Tốc độ chu chuyển của tư bản D. Mức doanh lợi đầu tư của nhà tư bản",
    "Câu 14. Sự khác biệt cơ bản giữa Tích tụ tư bản và Tập trung tư bản là gì? A. Tích tụ tư bản làm tăng quy mô tư bản cá biệt, tập trung tư bản thì không B. Tập trung tư bản làm tăng quy mô tư bản xã hội, tích tụ tư bản thì không C. Tích tụ tư bản làm tăng quy mô tư bản xã hội, tập trung tư bản không làm tăng quy mô tư bản xã hội D. Cả hai đều không làm tăng quy mô tư bản xã hội",
    "Câu 15. Giá cả sản xuất của hàng hóa được tính bằng công thức nào khi lợi nhuận chuyển hóa thành lợi nhuận bình quân? A. G = c + v + m B. G = k + m C. G = k + p D. G = c + p",
    "Câu 16. Chức năng thước đo giá trị của tiền tệ dùng để làm gì? A. Môi giới cho quá trình trao đổi hàng hóa B. Trả nợ, trả tiền mua chịu hàng hóa C. Rút khỏi lưu thông để dự trữ D. Đo lường và biểu hiện giá trị của các hàng hóa khác",
    "Câu 17. Thời gian chu chuyển của tư bản bao gồm những thời gian nào? A. Thời gian sản xuất và thời gian lưu thông B. Thời gian lao động tất yếu và thời gian lao động thặng dư C. Thời gian khấu hao và thời gian làm việc D. Thời gian mua và thời gian bán",
    "Câu 18. Nguồn gốc của lợi nhuận thương nghiệp trong nền kinh tế tư bản chủ nghĩa là gì? A. Do thương nhân mua rẻ bán đắt mà có B. Là một phần của giá trị thặng dư mà nhà tư bản sản xuất trả cho nhà tư bản thương nghiệp do đã giúp tiêu thụ hàng hóa C. Là do tư bản thương nghiệp tự sinh ra trong quá trình lưu thông D. Là do sự khan hiếm của hàng hóa trên thị trường",
    "Câu 19. Cạnh tranh giữa các ngành trong nền kinh tế thị trường dẫn đến hệ quả gì? A. Hình thành giá trị thị trường của hàng hóa B. Hạ thấp giá trị cá biệt của hàng hóa C. Hình thành tỷ suất lợi nhuận bình quân và lợi nhuận bình quân D. Làm độc quyền hoàn toàn biến mất",
    "Câu 20. Bản chất của lợi tức (z) mà người đi vay trả cho người cho vay là gì? A. Là do tiền nhàn rỗi tự đẻ ra tiền B. Là một phần của giá trị thặng dư mà người đi vay thu được thông qua sử dụng tiền vay C. Là tiền công quản lý của người cho vay D. Là chi phí hao mòn tiền tệ",
  ],
  hard: [
    "Câu 21. Mâu thuẫn giữa lao động cụ thể và lao động trừu tượng xuất hiện khi nào? A. Khi mức hao phí lao động cá biệt thấp hơn mức hao phí lao động xã hội cần thiết B. Khi sản phẩm của người sản xuất riêng biệt không phù hợp với nhu cầu xã hội hoặc hao phí cá biệt cao hơn mức xã hội chấp nhận C. Khi nhà tư bản kéo dài ngày lao động của công nhân D. Khi cấu tạo hữu cơ của tư bản tăng lên",
    "Câu 22. Khi tăng cường độ lao động, lượng giá trị của một đơn vị hàng hóa sẽ thay đổi như thế nào? A. Giảm xuống vì sản xuất được nhiều hàng hóa hơn B. Tăng lên vì hao phí sức lực nhiều hơn C. Không thay đổi vì lượng thời gian lao động xã hội cần thiết hao phí cho một đơn vị hàng hóa không đổi D. Có thể tăng hoặc giảm tùy vào năng suất",
    "Câu 23. Chứng khoán, chứng quyền (cổ phiếu, trái phiếu) được C. Mác gọi là loại tư bản gì? A. Tư bản thương nghiệp B. Tư bản ngân hàng C. Tư bản giả D. Tư bản cố định",
    "Câu 24. Hàng hóa sức lao động có giá trị sử dụng đặc biệt ở chỗ nào? A. Nó có thể được cất trữ và sử dụng nhiều lần B. Trong khi sử dụng nó, nó không những bảo tồn mà còn tạo ra được lượng giá trị mới lớn hơn giá trị bản thân nó C. Nó thỏa mãn nhu cầu tinh thần của nhà tư bản D. Nó không bị hao mòn trong quá trình sản xuất",
    "Câu 25. Giá trị của hàng hóa sức lao động được đo lường như thế nào? A. Đo lường trực tiếp bằng số giờ công nhân làm việc trong xí nghiệp B. Đo lường gián tiếp thông qua lượng giá trị của các tư liệu sinh hoạt để tái sản xuất ra sức lao động C. Đo lường bằng tổng lượng giá trị thặng dư mà nó tạo ra D. Đo lường bằng năng suất lao động của công nhân",
    "Câu 26. Tư bản cố định khác với tư bản lưu động ở phương thức chuyển giá trị vào sản phẩm như thế nào? A. Tư bản cố định chuyển một lần toàn phần, tư bản lưu động chuyển dần từng phần B. Tư bản cố định chuyển dần từng phần theo mức độ hao mòn, tư bản lưu động chuyển một lần toàn phần C. Cả hai đều chuyển giá trị một lần toàn phần vào sản phẩm D. Cả hai đều không chuyển giá trị vào sản phẩm mà tự bảo toàn",
    "Câu 27. Địa tô tuyệt đối mà địa chủ thu được dựa trên cơ sở nào? A. Thu được do cho thuê mảnh đất có độ màu mỡ cao, điều kiện tự nhiên thuận lợi B. Thu được do thâm canh, đầu tư làm tăng độ màu mỡ của đất C. Thu được trên mọi mảnh đất cho thuê, không kể độ màu mỡ tự nhiên hay do thâm canh D. Chỉ thu được ở các khu công nghiệp nông thôn",
    "Câu 28. Cấu tạo hữu cơ của tư bản (c/v) là gì? A. Là cấu tạo giá trị được quyết định bởi cấu tạo kỹ thuật và phản ánh sự biến đổi của cấu tạo kỹ thuật của tư bản B. Là tỷ lệ giữa lượng công nhân và lượng máy móc C. Là tỷ lệ giữa lợi nhuận và chi phí sản xuất D. Là cấu tạo vật chất của máy móc trong nhà máy",
    "Câu 29. Sản xuất giá trị thặng dư tương đối được thực hiện thông qua biện pháp cốt lõi nào? A. Kéo dài ngày lao động vượt quá thời gian lao động tất yếu B. Tăng cường độ lao động của công nhân lên mức tối đa C. Rút ngắn thời gian lao động tất yếu bằng cách hạ thấp giá trị sức lao động (nhờ tăng năng suất lao động xã hội) D. Ép công nhân làm việc không có thời gian nghỉ ngơi",
    "Câu 30. Tiền công trong chủ nghĩa tư bản thực chất là gì? A. Là sự trả công cho toàn bộ lao động của người công nhân trong ngày B. Là giá cả của hàng hóa sức lao động, do hao phí sức lao động của công nhân tự trả cho mình thông qua sổ sách của nhà tư bản C. Là một phần quà tặng của nhà tư bản cho công nhân D. Là chi phí hao mòn máy móc",
  ],
};

const QUESTION_EFFECTS = {
  1: { correct: { amt: "+$5", act: p => p.cash += 5, st: "Hiểu điều kiện thị trường giúp bạn chọn đúng sân chơi." }, incorrect: { amt: "-$5", act: p => p.cash = Math.max(0, p.cash - 5), st: "Mù mờ về thị trường là bước đầu của phá sản." } },
  2: { correct: { amt: "+$5", act: p => p.cash += 5, st: "Buffett nói: 'Giá là cái bạn trả, giá trị là cái bạn nhận'." }, incorrect: { amt: "-$5", act: p => p.cash = Math.max(0, p.cash - 5), st: "Nhầm lẫn giữa giá cả và giá trị là sai lầm chết người." } },
  3: { correct: { amt: "+$6", act: p => p.cash += 6, st: "Bạn hiểu thước đo xã hội, không bị ảo tưởng bởi cái nhìn cá nhân." }, incorrect: { amt: "-$4", act: p => p.cash = Math.max(0, p.cash - 4), st: "Dùng thước đo sai sẽ định giá doanh nghiệp sai." } },
  4: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Công thức T-H-T' chính là nền tảng của mọi đế chế tư bản." }, incorrect: { amt: "-$6", act: p => p.cash = Math.max(0, p.cash - 6), st: "Không hiểu cách tiền sinh ra tiền thì mãi làm thuê." } },
  5: { correct: { amt: "+$5", act: p => p.cash += 5, st: "Biết 'm' (thặng dư) là mục tiêu của mọi nhà đầu tư." }, incorrect: { amt: "-$3", act: p => p.cash = Math.max(0, p.cash - 3), st: "Không biết lợi nhuận từ đâu thì không thể giữ được tiền." } },
  6: { correct: { amt: "+$6", act: p => p.cash += 6, st: "Tư bản bất biến (c) là những cỗ máy giúp bạn rảnh tay." }, incorrect: { amt: "-$5", act: p => p.cash = Math.max(0, p.cash - 5), st: "Nhầm lẫn vai trò sản xuất làm rối loạn dòng vốn." } },
  7: { correct: { amt: "+$7", act: p => p.cash += 7, st: "Kiểm soát chi phí (k) là cách Buffett bảo vệ túi tiền của mình." }, incorrect: { amt: "-$5", act: p => p.cash = Math.max(0, p.cash - 5), st: "Sai số về chi phí khiến lợi nhuận chỉ là con số ảo." } },
  8: { correct: { amt: "+$6", act: p => p.cash += 6, st: "Hiểu phương pháp tạo thặng dư để tối ưu hóa nguồn lực." }, incorrect: { amt: "-$4", act: p => p.cash = Math.max(0, p.cash - 4), st: "Thiếu chiến lược sản xuất, doanh nghiệp sẽ dậm chân." } },
  9: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn nhìn thấy thực chất của lợi nhuận sau lớp vỏ thị trường." }, incorrect: { amt: "-$6", act: p => p.cash = Math.max(0, p.cash - 6), st: "Bị đánh lừa bởi bề nổi, bạn sẽ mất tiền vào tay kẻ khác." } },
  10: { correct: { amt: "+$10", act: p => p.cash += 10, st: "Thặng dư siêu ngạch chính là 'Moat' (Con hào kinh tế)." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Thiếu động lực cạnh tranh, bạn sẽ bị đào thải." } },
  11: { correct: { amt: "+10% TS", act: p => p.cash += Math.floor(p.cash * 0.1), st: "Hiểu bản chất lao động giúp bạn định giá đúng con người." }, incorrect: { amt: "-10% TS", act: p => p.cash = Math.max(0, p.cash - Math.floor(p.cash * 0.1)), st: "Sai bản chất dẫn đến sai hệ thống tư duy." } },
  12: { correct: { amt: "+$10", act: p => p.cash += 10, st: "Năng suất tăng, giá trị giảm – Buffett luôn chọn hàng rẻ giá trị cao." }, incorrect: { amt: "-$8", act: p => p.cash = Math.max(0, p.cash - 8), st: "Không hiểu quy luật năng suất sẽ mua đắt bán rẻ." } },
  13: { correct: { amt: "+$12", act: p => p.cash += 12, st: "Tỷ suất m' cho thấy hiệu suất bóc lột (hiệu suất đầu tư)." }, incorrect: { amt: "-$10", act: p => p.cash = Math.max(0, p.cash - 10), st: "Đánh giá sai hiệu suất, vốn của bạn sẽ bị chôn vùi." } },
  14: { correct: { amt: "+$15", act: p => p.cash += 15, st: "Tập trung tư bản giúp Berkshire Hathaway thành gã khổng lồ." }, incorrect: { amt: "-$12", act: p => p.cash = Math.max(0, p.cash - 12), st: "Nhầm lẫn quy mô khiến bạn đầu tư dàn trải." } },
  15: { correct: { amt: "+$15", act: p => p.cash += 15, st: "Giá cả sản xuất là điểm tựa để bạn mua vào khi thị trường hoảng loạn." }, incorrect: { amt: "+$5", act: p => p.cash += 5, st: "Bạn vẫn có lãi nhưng bỏ lỡ cơ hội bứt phá." } },
  16: { correct: { amt: "+$10", act: p => p.cash += 10, st: "Tiền là thước đo, đừng để cảm xúc làm thước đo thay đổi." }, incorrect: { amt: "-$10", act: p => p.cash = Math.max(0, p.cash - 10), st: "Thước đo sai làm hỏng mọi bảng cân đối kế toán." } },
  17: { correct: { amt: "+$15", act: p => p.cash += 15, st: "'Thời gian là bạn của doanh nghiệp tuyệt vời' - Chu chuyển nhanh là tốt." }, incorrect: { amt: "-$12", act: p => p.cash = Math.max(0, p.cash - 12), st: "Chôn vốn quá lâu khiến tỷ suất lợi nhuận thảm hại." } },
  18: { correct: { amt: "+$20", act: p => p.cash += 20, st: "Hiểu nguồn gốc lợi nhuận thương nghiệp để đầu tư vào bán lẻ." }, incorrect: { amt: "-$20", act: p => p.cash = Math.max(0, p.cash - 20), st: "Nghĩ rằng mua rẻ bán đắt là tất cả? Bạn quá ngây thơ." } },
  19: { correct: { amt: "+$20", act: p => p.cash += 20, st: "Cạnh tranh tạo ra sự bình quân, hãy tìm nơi ít cạnh tranh nhất." }, incorrect: { amt: "+$0", act: p => p.cash += 0, st: "Bạn an toàn, nhưng cơ hội làm giàu đã vụt mất." } },
  20: { correct: { amt: "+$25", act: p => p.cash += 25, st: "Lợi tức là phần thưởng cho người kiên nhẫn nắm giữ tiền." }, incorrect: { amt: "+$5", act: p => p.cash += 5, st: "Lợi nhuận mỏng manh không đủ bù lạm phát." } },
  21: { correct: { amt: "+$25", act: p => p.cash += 25, st: "Tránh mâu thuẫn xã hội là cách bảo vệ doanh nghiệp bền vững." }, incorrect: { amt: "-$20", act: p => p.cash = Math.max(0, p.cash - 20), st: "Sản phẩm không phù hợp nhu cầu là rác thải tài chính." } },
  22: { correct: { amt: "+$30", act: p => p.cash += 30, st: "Cường độ tăng nhưng giá trị đơn vị không đổi – hãy cẩn thận!" }, incorrect: { amt: "-$25", act: p => p.cash = Math.max(0, p.cash - 25), st: "Hiểu sai về giá trị làm bạn kiệt sức mà không giàu." } },
  23: { correct: { amt: "+$30", act: p => p.cash += 30, st: "Buffett gọi phái sinh là 'vũ khí hủy diệt hàng loạt' (Tư bản giả)." }, incorrect: { amt: "-$25", act: p => p.cash = Math.max(0, p.cash - 25), st: "Say sưa với tư bản giả, bạn sẽ trắng tay khi bong bóng nổ." } },
  24: { correct: { amt: "+$40", act: p => p.cash += 40, st: "Sức lao động là tài sản duy nhất tạo ra thêm giá trị." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Coi thường con người, hệ thống của bạn sẽ sụp đổ." } },
  25: { correct: { amt: "+$40", act: p => p.cash += 40, st: "Định giá đúng chi phí tái tạo để giữ chân nhân tài." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Định giá sai con người khiến chi phí ẩn tăng cao." } },
  26: { correct: { amt: "+$50", act: p => p.cash += 50, st: "Hiểu hao mòn để khấu hao chính xác như một chuyên gia tài chính." }, incorrect: { amt: "-$35", act: p => p.cash = Math.max(0, p.cash - 35), st: "Quản lý tài sản kém làm dòng tiền bị tắc nghẽn." } },
  27: { correct: { amt: "+$70", act: p => p.cash += 70, st: "Địa tô tuyệt đối là dòng tiền ổn định từ bất động sản." }, incorrect: { amt: "-$50", act: p => p.cash = Math.max(0, p.cash - 50), st: "Đầu tư sai phân khúc đất đai, nợ nần bủa vây." } },
  28: { correct: { amt: "+$30", act: p => p.cash += 30, st: "Cấu tạo hữu cơ (c/v) tăng là xu thế của AI và tự động hóa." }, incorrect: { amt: "-$25", act: p => p.cash = Math.max(0, p.cash - 25), st: "Lỗi thời về kỹ thuật là dấu chấm hết cho doanh nghiệp." } },
  29: { correct: { amt: "+$100", act: p => p.cash += 100, st: "Thặng dư tương đối là cách làm giàu bền vững bằng công nghệ." }, incorrect: { amt: "-$50", act: p => p.cash = Math.max(0, p.cash - 50), st: "Chỉ biết ép sức lao động, bạn sẽ sớm bị đối thủ vượt mặt." } },
  30: { correct: { amt: "x2 Tài sản", act: p => p.cash *= 2, st: "Hiểu bản chất tiền công, bạn đã tốt nghiệp trường đời." }, incorrect: { amt: "-50% TS", act: p => p.cash = Math.max(0, p.cash - Math.floor(p.cash * 0.5)), st: "Một sai lầm ở phút cuối khiến bạn mất trắng thành quả." } }
};

const game = {
  players: [],
  currentPlayerIndex: 0,
  currentTurn: 1,
  pendingDifficulty: null,
  pendingQuestion: null,
  ended: false,
};

const setupSection = document.getElementById("setup-section");
const instructionsSection = document.getElementById("instructions-section");
const enterGameBtn = document.getElementById("enter-game-btn");
const gameSection = document.getElementById("game-section");
const resultSection = document.getElementById("result-section");
const startBtn = document.getElementById("start-btn");
const turnTitle = document.getElementById("turn-title");
const playerAssetEl = document.getElementById("player-asset");
const questionBox = document.getElementById("question-box");
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answerOptionsEl = document.getElementById("answer-options");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackMessage = document.getElementById("feedback-message");
const feedbackReward = document.getElementById("feedback-reward");
const feedbackTotal = document.getElementById("feedback-total");
const nextTurnBtn = document.getElementById("next-turn-btn");
const finalResultEl = document.getElementById("final-result");
const difficultyButtons = [...document.querySelectorAll("[data-difficulty]")];

startBtn.addEventListener("click", showInstructions);
enterGameBtn.addEventListener("click", startGame);
nextTurnBtn.addEventListener("click", onNextTurn);

function onNextTurn() {
  feedbackBox.classList.add("hidden");
  disableDifficultyButtons(false);
  goNextPlayer();
  refreshUI();
}

function showInstructions() {
  setupSection.classList.add("hidden");
  instructionsSection.classList.remove("hidden");
  document.body.classList.add("game-started");
}
difficultyButtons.forEach((btn) => btn.addEventListener("click", () => pickDifficulty(btn.dataset.difficulty)));

function startGame() {
  game.players = [{ name: SOLO_PLAYER_NAME, ...structuredClone(INITIAL_STATE) }];
  game.currentPlayerIndex = 0;
  game.currentTurn = 1;
  game.pendingDifficulty = null;
  game.pendingQuestion = null;
  game.ended = false;

  setupSection.classList.add("hidden");
  instructionsSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  document.body.classList.add("game-started");

  appendLog("Bắt đầu game ở chế độ 1 người chơi.");
  appendLog(`Người chơi: ${game.players[0].name}.`);
  applyCatchupSupportIfNeeded();
  refreshUI();
}

function pickDifficulty(difficulty) {
  if (game.ended || game.pendingDifficulty) return;
  game.pendingDifficulty = difficulty;

  const player = getCurrentPlayer();
  const rawQuestion = randomItem(difficultyQuestionSets[difficulty]);
  const parsedQuestion = parseQuestion(rawQuestion);

  if (!parsedQuestion || !parsedQuestion.correctAnswer) {
    appendLog("Không đọc được định dạng câu hỏi. Vui lòng chọn lại.");
    game.pendingDifficulty = null;
    return;
  }

  game.pendingQuestion = parsedQuestion;
  questionTitle.textContent = `${player.name} chọn mức ${difficulty.toUpperCase()}`;
  questionText.textContent = parsedQuestion.questionText;
  renderAnswerOptions(parsedQuestion.options);
  questionBox.classList.remove("hidden");
  disableDifficultyButtons(true);
}

function resolveAnswer(selectedOption) {
  if (!game.pendingDifficulty || game.ended || !game.pendingQuestion) return;

  const player = getCurrentPlayer();
  const difficulty = game.pendingDifficulty;
  const isCorrect = selectedOption === game.pendingQuestion.correctAnswer;
  const correctAnswer = game.pendingQuestion.correctAnswer;

  if (difficulty === "hard") player.hardChoices += 1;
  if (difficulty === "medium" && isCorrect) player.mediumCorrect += 1;
  if (difficulty === "easy" && isCorrect) player.easyCorrect += 1;

  let story = "";
  let amountText = "";
  const questionNum = game.pendingQuestion.number;
  const effectData = QUESTION_EFFECTS[questionNum];

  if (isCorrect) {
    const outcome = effectData.correct;
    story = outcome.st;
    amountText = outcome.amt;
    outcome.act(player);
    
    feedbackTitle.textContent = "✅ ĐÚNG!";
    feedbackTitle.style.color = "#4ade80";
    feedbackReward.textContent = `Thưởng: ${amountText}`;
    feedbackReward.style.color = "#4ade80";
  } else {
    const outcome = effectData.incorrect;
    story = outcome.st;
    amountText = outcome.amt;
    outcome.act(player);

    feedbackTitle.textContent = `❌ SAI! Đáp án đúng là ${correctAnswer}`;
    feedbackTitle.style.color = "#ef4444";
    feedbackReward.textContent = `Phạt: ${amountText}`;
    feedbackReward.style.color = "#ef4444";
  }

  feedbackMessage.textContent = `"${story}"`;
  feedbackTotal.textContent = `Tài sản hiện tại: $${player.cash}`;

  normalizePlayerState(player);
  game.pendingDifficulty = null;
  game.pendingQuestion = null;
  questionBox.classList.add("hidden");
  answerOptionsEl.innerHTML = "";
  
  feedbackBox.classList.remove("hidden");
}

function goNextPlayer() {
  const isLastPlayerThisTurn = game.currentPlayerIndex === game.players.length - 1;
  if (isLastPlayerThisTurn) {
    game.currentPlayerIndex = 0;
    game.currentTurn += 1;
  } else {
    game.currentPlayerIndex += 1;
  }

  if (game.currentTurn > TOTAL_TURNS) {
    game.ended = true;
    renderFinalResults();
  }
}

function refreshUI() {
  if (game.ended) {
    turnTitle.textContent = "Đã kết thúc";
    playerAssetEl.textContent = "";
    disableDifficultyButtons(true);
  } else {
    turnTitle.textContent = `Lượt ${game.currentTurn} / ${TOTAL_TURNS}`;
    const player = getCurrentPlayer();
    if (player) {
      playerAssetEl.textContent = `Tài sản: $${player.cash}`;
    }
  }
}

function renderFinalResults() {
  resultSection.classList.remove("hidden");
  const ranking = getRanking();
  const winner = ranking[0];
  const rankData = getTitleAndQuote(winner.cash);

  finalResultEl.innerHTML = `
    <h3 style="color: #f3d8ac; text-align: center; margin-bottom: 20px; text-transform: uppercase;">BẢNG PHONG THÁNH TÀI CHÍNH</h3>
    <div style="background: rgba(0,0,0,0.5); padding: 20px; border-radius: 10px; text-align: center; border: 1px solid #f3d8ac;">
      <p style="font-size: 1.2em; margin-bottom: 10px;">Tài sản thực: <strong style="color: #4ade80;">$${winner.cash}</strong></p>
      <p style="font-size: 1.6em; font-weight: bold; color: #fbbf24; margin-bottom: 15px;">${rankData.title}</p>
      <p style="font-style: italic; color: #e5e7eb; line-height: 1.6; font-size: 1.1em;">"${rankData.quote}"</p>
    </div>
  `;
}

function getRanking() {
  return [...game.players].sort((a, b) => b.cash - a.cash);
}

function getTotalAsset(player) {
  return player.cash;
}

function getTitleAndQuote(cash) {
  if (cash < 50) return { title: "🤡 Cái Bang Công Nghệ", quote: "Vốn 50 đô mà còn lỗ thì tốt nhất bạn nên mang tiền đi gửi tiết kiệm... à mà quên, bạn làm gì còn tiền!" };
  if (cash < 150) return { title: "🐣 F0 Ngây Thơ", quote: "Cũng có tí kiến thức đấy, nhưng ra thị trường chắc trụ được 5 giây trước khi bị cá mập nó nuốt chửng." };
  if (cash < 400) return { title: "👔 Chuyên Gia 'Mõm'", quote: "Nói về lý thuyết thì hay lắm, nhưng tài khoản thì vẫn chưa đủ mua cái bánh xe của chiếc Rolls-Royce tôi đang đi." };
  if (cash < 700) return { title: "🦈 Cá Mập Ao Làng", quote: "Khá đấy! Bạn bắt đầu biết cách 'bóc lột' thặng dư rồi. Đủ tiền mua vài cái thẻ nạp n8n để chạy bot StayJoy rồi đó." };
  if (cash < 1000) return { title: "👑 Quý Tộc Mới Nổi", quote: "Hơi bị ra gì rồi đấy! Giờ đi đâu cũng có thể vỗ ngực tự xưng là nhà đầu tư chiến lược mà không sợ bị cười vào mặt." };
  if (cash < 2000) return { title: "💼 Đệ Tử Ruột Buffett", quote: "Chào người anh em! Có muốn ngồi chung xe điện với tôi không? Tầm này thì kiến thức kinh tế của bạn đã thoát xác rồi." };
  return { title: "🏆 Huyền Thoại Omaha", quote: "Tránh ra cho người giàu đi! Bạn không chỉ hiểu tư bản, bạn chính là tư bản. Giờ thì ngồi xuống và nghe tiền nó tự đẻ ra tiền đi!" };
}

function normalizePlayerState(player) {
  player.cash = Math.max(0, Math.floor(player.cash));
}

function getCurrentPlayer() {
  return game.players[game.currentPlayerIndex];
}

function appendLog(message) {
  // Log feature disabled.
}

function disableDifficultyButtons(isDisabled) {
  difficultyButtons.forEach((btn) => {
    btn.disabled = isDisabled || game.ended;
  });
}

function renderAnswerOptions(options) {
  const labels = ["A", "B", "C", "D"];
  answerOptionsEl.innerHTML = "";
  labels.forEach((label) => {
    const optionText = options[label];
    if (!optionText) return;
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = `${label}. ${optionText}`;
    button.addEventListener("click", () => resolveAnswer(label));
    answerOptionsEl.appendChild(button);
  });
}

function parseQuestion(rawQuestion) {
  const match = rawQuestion.match(
    /^(Câu\s+(\d+)\..*?)\s+A\.\s+(.*?)\s+B\.\s+(.*?)\s+C\.\s+(.*?)\s+D\.\s+([\s\S]*)$/u
  );
  if (!match) return null;

  const questionNumber = Number(match[2]);
  return {
    number: questionNumber,
    questionText: match[1].replace(/^Câu\s+\d+\.\s*/u, "").trim(),
    options: {
      A: match[3].trim(),
      B: match[4].trim(),
      C: match[5].trim(),
      D: match[6].trim(),
    },
    correctAnswer: ANSWER_KEY[questionNumber],
  };
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
