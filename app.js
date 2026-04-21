const TOTAL_TURNS = 10;
const SOLO_PLAYER_NAME = "Người chơi";
const ANSWER_KEY = {
  1: "B", 2: "C", 3: "C", 4: "B", 5: "B", 6: "B", 7: "B", 8: "C", 9: "B", 10: "B",
  11: "B", 12: "B", 13: "B", 14: "B", 15: "C", 16: "B", 17: "B", 18: "A", 19: "B", 20: "C",
  21: "D", 22: "C", 23: "A", 24: "B", 25: "C", 26: "B", 27: "B", 28: "B", 29: "B", 30: "C",
  31: "B", 32: "B", 33: "B", 34: "B", 35: "B", 36: "B", 37: "B", 38: "A", 39: "B", 40: "B",
  41: "B", 42: "B", 43: "B", 44: "B", 45: "B", 46: "B", 47: "B", 48: "A", 49: "B", 50: "B",
  51: "B", 52: "B", 53: "B", 54: "B", 55: "B", 56: "C", 57: "B", 58: "B", 59: "B", 60: "B",
};

const INITIAL_STATE = {
  cash: 50,
  hardChoices: 0,
  mediumCorrect: 0,
  easyCorrect: 0,
};

const difficultyQuestionSets = {
  easy: [
    "Câu 1. Bản chất của tích lũy tư bản là gì? A. Là quá trình tiết kiệm tiền của nhà tư bản. B. Là quá trình biến một phần giá trị thặng dư thành tư bản phụ thêm. C. Là quá trình vay vốn để mở rộng sản xuất. D. Là quá trình bán hàng hóa cao hơn giá trị.",
    "Câu 2. Nguồn gốc duy nhất của tích lũy tư bản là gì? A. Tiền vốn của nhà tư bản. B. Sự tiết kiệm tiêu dùng. C. Giá trị thặng dư. D. Lao động quá khứ.",
    "Câu 3. Công thức tính chi phí sản xuất tư bản chủ nghĩa (k) là: A. k = c + m. B. k = v + m. C. k = c + v. D. k = c + v + m.",
    "Câu 4. Lợi nhuận (p) được Mác định nghĩa là gì? A. Là toàn bộ doanh thu thu được. B. Là hình thái chuyển hóa của giá trị thặng dư. C. Là tiền công của nhà tư bản. D. Là sự chênh lệch giữa cung và cầu.",
    "Câu 5. Công thức tính tỷ suất lợi nhuận (p') là: A. p' = m / v * 100%. B. p' = p / (c + v) * 100%. C. p' = p / c * 100%. D. p' = m / (c + v + m) * 100%.",
    "Câu 6. Lợi nhuận bình quân hình thành do: A. Sự cạnh tranh trong nội bộ ngành. B. Sự cạnh tranh giữa các ngành. C. Sự can thiệp của nhà nước. D. Sự thỏa thuận giữa các nhà tư bản.",
    "Câu 7. Lợi tức (z) là một phần của: A. Chi phí sản xuất. B. Giá trị thặng dư. C. Tiền công. D. Tư bản bất biến.",
    "Câu 8. Công thức vận động của tư bản cho vay là: A. H - T - H'. B. T - H - T'. C. T - T'. D. H - H'.",
    "Câu 9. Địa tô tư bản chủ nghĩa (R) là phần giá trị thặng dư còn lại sau khi trừ đi: A. Lợi nhuận độc quyền. B. Lợi nhuận bình quân. C. Lợi tức. D. Chi phí sản xuất.",
    "Câu 10. Tư bản bất biến (c) bao gồm: A. Máy móc, thiết bị và sức lao động. B. Máy móc, thiết bị, nguyên, nhiên liệu. C. Tiền lương và nguyên liệu. D. Giá trị thặng dư.",
    "Câu 11. Tư bản khả biến (v) là bộ phận tư bản: A. Không thay đổi về lượng trong quá trình sản xuất. B. Biến đổi về lượng và tăng lên trong quá trình sản xuất. C. Dùng để mua máy móc. D. Chuyển nguyên vẹn vào sản phẩm.",
    "Câu 12. Cấu tạo hữu cơ của tư bản ký hiệu là: A. m/v. B. c/v. C. p/k. D. c/m.",
    "Câu 13. Tích tụ tư bản là quá trình tăng quy mô tư bản cá biệt bằng cách: A. Hợp nhất nhiều tư bản nhỏ thành tư bản lớn. B. Tư bản hóa giá trị thặng dư. C. Vay vốn ngân hàng. D. Phát hành cổ phiếu.",
    "Câu 14. Tập trung tư bản là quá trình tăng quy mô tư bản cá biệt bằng cách: A. Tăng cường bóc lột công nhân. B. Kết hợp nhiều tư bản cá biệt nhỏ thành tư bản lớn. C. Tăng năng suất lao động. D. Tiết kiệm chi phí sản xuất.",
    "Câu 15. Giá cả sản xuất của hàng hóa bằng: A. c + v + m. B. k + p (lợi nhuận). C. k + p ngang (lợi nhuận bình quân). D. c + v.",
    "Câu 16. Lợi nhuận thương nghiệp có nguồn gốc từ: A. Việc mua rẻ bán đắt. B. Một phần giá trị thặng dư tạo ra trong sản xuất. C. Sự ưu đãi của nhà nước. D. Tài năng của nhà buôn.",
    "Câu 17. Tỷ suất lợi tức (z') phụ thuộc vào: A. Tỷ suất giá trị thặng dư. B. Tỷ suất lợi nhuận bình quân và cung - cầu tư bản cho vay. C. Giá trị của đồng tiền. D. Tiền công của công nhân.",
    "Câu 18. Địa tô chênh lệch I thu được trên loại đất nào? A. Đất tốt, đất trung bình và đất có vị trí thuận lợi. B. Đất xấu nhất. C. Đất đã được đầu tư thêm tư bản. D. Mọi loại đất.",
    "Câu 19. Địa tô chênh lệch II thu được do: A. Độ màu mỡ tự nhiên của đất. B. Thâm canh, đầu tư thêm tư bản để tăng độ màu mỡ. C. Vị trí gần thị trường. D. Sở hữu tư nhân về đất đai.",
    "Câu 20. Địa tô tuyệt đối thu được trên: A. Chỉ đất tốt. B. Chỉ đất xấu. C. Mọi loại đất ruộng thuê. D. Chỉ đất có vị trí thuận lợi."
  ],
  medium: [
    "Câu 21. Nhân tố nào sau đây KHÔNG ảnh hưởng trực tiếp tới quy mô tích lũy tư bản? A. Trình độ khai thác sức lao động. B. Năng suất lao động xã hội. C. Đại lượng tư bản ứng trước. D. Số lượng hàng hóa tiêu dùng cá nhân của công nhân.",
    "Câu 22. Hệ quả của tích lũy tư bản đối với cấu tạo hữu cơ (c/v) là gì? A. Làm cấu tạo hữu cơ giảm xuống. B. Làm cấu tạo hữu cơ không đổi. C. Làm cấu tạo hữu cơ có xu hướng tăng lên. D. Làm biến mất tư bản bất biến.",
    "Câu 23. Sự khác biệt cơ bản giữa tích tụ và tập trung tư bản là: A. Tích tụ làm tăng tư bản xã hội, tập trung chỉ làm phân phối lại tư bản xã hội. B. Tập trung làm tăng tư bản xã hội, tích tụ thì không. C. Cả hai đều không liên quan đến giá trị thặng dư. D. Tích tụ diễn ra nhanh hơn tập trung.",
    "Câu 24. Bần cùng hóa tương đối giai cấp công nhân biểu hiện ở việc: A. Mức sống của công nhân bị giảm xuống mức tối thiểu. B. Tỷ trọng thu nhập của công nhân trong thu nhập quốc dân giảm so với nhà tư bản. C. Công nhân không có việc làm. D. Giá cả hàng hóa tăng nhanh hơn tiền lương.",
    "Câu 25. Chi phí sản xuất tư bản chủ nghĩa (k) luôn: A. Lớn hơn giá trị hàng hóa. B. Bằng giá trị hàng hóa. C. Nhỏ hơn giá trị hàng hóa (k < c+v+m). D. Bằng chi phí lao động thực tế.",
    "Câu 26. Khi m' và v không đổi, nếu tư bản bất biến (c) tăng thì tỷ suất lợi nhuận (p') sẽ: A. Tăng lên. B. Giảm xuống. C. Không đổi. D. Tăng tỷ lệ thuận.",
    "Câu 27. Tỷ suất lợi nhuận (p') phản ánh: A. Trình độ bóc lột của nhà tư bản đối với công nhân. B. Mức doanh lợi (hiệu quả) của việc đầu tư tư bản. C. Quy mô của giá trị thặng dư. D. Thời gian chu chuyển của tư bản.",
    "Câu 28. Sự hình thành lợi nhuận bình quân dẫn đến việc hàng hóa được bán theo: A. Giá trị hàng hóa. B. Giá cả sản xuất. C. Giá cả thị trường. D. Chi phí sản xuất.",
    "Câu 29. Tại sao tư bản cho vay là hàng hóa đặc biệt? A. Vì người bán mất quyền sở hữu. B. Vì sau khi sử dụng, giá trị của nó được bảo tồn và tăng thêm. C. Vì nó có giá trị sử dụng vô hạn. D. Vì nó không có giá cả.",
    "Câu 30. Ảo tưởng 'tiền đẻ ra tiền' xuất hiện rõ nhất ở hình thái nào? A. Tư bản công nghiệp. B. Tư bản thương nghiệp. C. Tư bản cho vay (T - T'). D. Tư bản nông nghiệp.",
    "Câu 31. Nguồn gốc của địa tô tuyệt đối là do: A. Độ màu mỡ tự nhiên của đất. B. Cấu tạo hữu cơ trong nông nghiệp thấp hơn trong công nghiệp. C. Vị trí gần nơi tiêu thụ. D. Thâm canh nông nghiệp.",
    "Câu 32. Giá cả ruộng đất thực chất là: A. Giá trị của đất đai. B. Địa tô được tư bản hóa (so sánh với lãi suất ngân hàng). C. Chi phí khai hoang đất. D. Sự thỏa thuận giữa người mua và người bán.",
    "Câu 33. Sự khác biệt giữa p và m về mặt chất là: A. p là nội dung, m là hình thức. B. m là nội dung, p là hình thái chuyển hóa che đậy nguồn gốc thực. C. p luôn lớn hơn m. D. p và m hoàn toàn giống nhau.",
    "Câu 34. Nhân tố nào làm tăng tỷ suất lợi nhuận (p')? A. Tăng cấu tạo hữu cơ của tư bản. B. Tiết kiệm tư bản bất biến. C. Giảm tỷ suất giá trị thặng dư. D. Kéo dài thời gian chu chuyển tư bản.",
    "Câu 35. Tư bản giả (cổ phiếu, trái phiếu) vận động trên thị trường nào? A. Thị trường hàng hóa. B. Thị trường chứng khoán. C. Thị trường lao động. D. Thị trường bất động sản.",
    "Câu 36. Nếu một doanh nghiệp có giá trị cá biệt thấp hơn giá trị xã hội, họ sẽ thu được: A. Lợi nhuận bình quân. B. Lợi nhuận siêu ngạch. C. Lợi tức. D. Địa tô.",
    "Câu 37. Quy mô tích lũy tư bản sẽ tăng khi: A. Giá trị sức lao động tăng. B. Năng suất lao động xã hội tăng. C. Tỷ suất giá trị thặng dư giảm. D. Tiêu dùng cá nhân của nhà tư bản tăng.",
    "Câu 38. Chi phí sản xuất (k) che đậy nguồn gốc của m vì nó xóa nhòa ranh giới giữa: A. c và v. B. k và p. C. p và m. D. p' và m'.",
    "Câu 39. Lợi tức (z) luôn phải nhỏ hơn: A. Chi phí sản xuất. B. Lợi nhuận bình quân. C. Tiền vốn cho vay. D. Tiền lương công nhân.",
    "Câu 40. Sự hình thành lợi nhuận bình quân KHÔNG làm thay đổi: A. Giá cả hàng hóa. B. Tổng giá trị thặng dư trên phạm vi toàn xã hội. C. Tỷ suất lợi nhuận của từng ngành. D. Lợi nhuận cá biệt của từng nhà tư bản."
  ],
  hard: [
    "Câu 41. Mối quan hệ giữa sự gia tăng cấu tạo hữu cơ (c/v) và tỷ suất lợi nhuận (p') là gì? A. Tỷ lệ thuận. B. c/v tăng làm p' có xu hướng giảm (với m' không đổi). C. Không có mối quan hệ. D. Luôn làm p' tăng.",
    "Câu 42. Tác động của khấu hao máy móc đối với tích lũy tư bản là gì? A. Khấu hao làm giảm quy mô tích lũy. B. Quỹ khấu hao khi chưa sử dụng có thể trở thành nguồn vốn để mở rộng sản xuất. C. Khấu hao không liên quan đến tích lũy. D. Khấu hao làm tăng giá trị sức lao động.",
    "Câu 43. Vì sao Mác nói 'Tích lũy tư bản là tích lũy sự giàu sang về một cực và tích lũy sự bần cùng về cực khác'? A. Vì nhà tư bản không trả lương cho công nhân. B. Vì sự gia tăng cấu tạo hữu cơ tạo ra nguy cơ thừa nhân khẩu (thất nghiệp) tương đối. C. Vì công nhân lười lao động. D. Vì máy móc làm việc thay con người hoàn toàn.",
    "Câu 44. Trong điều kiện hình thành lợi nhuận bình quân, các nhà tư bản ở ngành có cấu tạo hữu cơ THẤP sẽ: A. Thu được lợi nhuận lớn hơn giá trị thặng dư họ tạo ra. B. Phải chuyển một phần m của ngành mình cho các ngành có cấu tạo hữu cơ cao. C. Bị phá sản ngay lập tức. D. Không chịu ảnh hưởng gì.",
    "Câu 45. Điểm khác biệt về mặt lượng giữa Địa tô chênh lệch II và Địa tô chênh lệch I là: A. Địa tô chênh lệch II luôn nhỏ hơn I. B. Địa tô chênh lệch II gắn liền với kết quả của việc thâm canh. C. Địa tô chênh lệch I thu được do đầu tư tư bản. D. Không có sự khác biệt về lượng.",
    "Câu 46. Bản chất của 'Chế độ tham dự' của tài phiệt là gì? A. Là việc công nhân tham gia quản lý doanh nghiệp. B. Là việc tài phiệt mua cổ phiếu khống chế để chi phối các công ty mẹ, con, cháu. C. Là việc nhà nước hỗ trợ vốn cho tư nhân. D. Là việc các nước cùng tham gia hội nhập kinh tế.",
    "Câu 47. Khi năng suất lao động tăng, giá trị thặng dư tương đối tăng là do: A. Ngày lao động kéo dài. B. Giá trị tư liệu sinh hoạt giảm dẫn đến thời gian lao động tất yếu rút ngắn. C. Cường độ lao động tăng. D. Máy móc tạo ra giá trị mới.",
    "Câu 48. Tại sao p' (tỷ suất lợi nhuận) lại thấp hơn m' (tỷ suất giá trị thặng dư)? A. Vì p' tính trên (c+v), còn m' chỉ tính trên v. B. Vì nhà tư bản phải nộp thuế. C. Vì p luôn nhỏ hơn m. D. Vì chi phí sản xuất quá lớn.",
    "Câu 49. Sự hình thành giá cả sản xuất (k + p ngang) là hình thái biến tướng của: A. Quy luật cung cầu. B. Quy luật giá trị. C. Quy luật lưu thông tiền tệ. D. Quy luật cạnh tranh tự do.",
    "Câu 50. Địa tô tuyệt đối tồn tại dựa trên rào cản nào? A. Sự khan hiếm của đất tốt. B. Độc quyền sở hữu tư nhân về đất đai. C. Sự cách xa thị trường. D. Năng suất lao động thấp.",
    "Câu 51. Tư bản cho vay tạo ra ảo tưởng 'tiền đẻ ra tiền' vì nó đã: A. Loại bỏ khâu lưu thông hàng hóa. B. Che giấu quá trình sản xuất trực tiếp tạo ra m (T - SX - T') chỉ còn lại T - T'. C. Làm tăng giá trị đồng tiền. D. Giúp nhà tư bản giàu nhanh hơn.",
    "Câu 52. Phân tích nhân tố 'Tiết kiệm tư bản bất biến' giúp nhà tư bản: A. Giảm tiền công công nhân. B. Nâng cao tỷ suất lợi nhuận (p') mà không cần tăng trình độ bóc lột (m'). C. Tăng giá bán hàng hóa. D. Kéo dài ngày lao động.",
    "Câu 53. Tư bản thương nghiệp thúc đẩy sản xuất phát triển vì nó giúp: A. Nhà tư bản sản xuất không phải thuê công nhân. B. Rút ngắn thời gian lưu thông, đẩy nhanh tốc độ chu chuyển tư bản. C. Tăng giá trị của hàng hóa. D. Loại bỏ sự cạnh tranh.",
    "Câu 54. Địa tô tư bản khác địa tô phong kiến ở chỗ: A. Địa tô tư bản là toàn bộ sản phẩm thặng dư. B. Địa tô tư bản chỉ là phần giá trị thặng dư siêu ngạch ngoài lợi nhuận bình quân. C. Địa tô phong kiến nhỏ hơn. D. Địa tô tư bản nộp bằng tiền, phong kiến nộp bằng vật.",
    "Câu 55. Vì sao cấu tạo hữu cơ tăng lại dẫn tới bần cùng hóa tuyệt đối trong thời kỳ khủng hoảng? A. Vì máy móc làm hỏng hàng hóa. B. Vì máy móc thay thế lao động sống làm gia tăng đội quân thất nghiệp, mất hoàn toàn thu nhập. C. Vì nhà tư bản phá sản nên không trả lương. D. Vì nhu cầu tiêu dùng giảm.",
    "Câu 56. Nếu giá trị thặng dư là m, p là lợi nhuận, trong điều kiện cung = cầu thì: A. p > m. B. p < m. C. p = m. D. p không liên quan đến m.",
    "Câu 57. Công thức M = m' x V dùng để tính: A. Tỷ suất giá trị thặng dư. B. Khối lượng giá trị thặng dư. C. Quy mô tích lũy. D. Tốc độ chu chuyển tư bản.",
    "Câu 58. Hao mòn vô hình của tư bản cố định xảy ra khi: A. Máy móc bị gỉ sét do thời tiết. B. Có những máy móc mới hiện đại hơn hoặc rẻ hơn xuất hiện trên thị trường. C. Công nhân làm hỏng máy. D. Máy hết thời hạn sử dụng.",
    "Câu 59. Tốc độ chu chuyển tư bản (n) tăng lên sẽ làm: A. Tỷ suất giá trị thặng dư m' tăng. B. Tỷ suất lợi nhuận hằng năm tăng. C. Giá trị tư bản cố định tăng. D. Thời gian sản xuất kéo dài.",
    "Câu 60. Nghĩa hẹp của Kinh tế chính trị theo Ăng-ghen là nghiên cứu: A. Mọi quy luật kinh tế của mọi thời đại. B. Quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định. C. Cách thức làm giàu của cá nhân. D. Chính sách kinh tế của nhà nước."
  ],
};

const QUESTION_EFFECTS = {
  1: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Chuẩn bài. Bạn không để tiền nằm im → bạn bắt nó đi làm việc cho bạn 😎" }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn đang cho tiền ‘nghỉ hưu sớm’. Nó không thích đâu, mà bạn cũng vậy." } },
  2: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Đúng. Tiền không tự sinh ra – nó phải bị ‘vắt’ ra từ lao động." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn tin tiền tự đẻ? Nghe hơi giống mấy khóa ‘làm giàu nhanh’ rồi đó…" } },
  3: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn biết doanh nghiệp tốn gì → không bị lừa bởi doanh thu to." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Không biết chi phí mà đi đầu tư thì… hơi liều 😅" } },
  4: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn nhìn xuyên lớp ‘makeup’ của profit. Rất tỉnh." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn thấy lợi nhuận là tin luôn → doanh nghiệp thích kiểu này lắm." } },
  5: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn không chỉ hỏi ‘bao nhiêu tiền’ mà hỏi ‘hiệu quả không’ → lên trình rồi." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn chỉ nhìn số tiền, không nhìn tỷ lệ → classic newbie." } },
  6: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Chuẩn. Thị trường sẽ không cho ai ăn dày mãi đâu." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nghĩ ngành nào cũng giữ lời riêng? Thị trường không hiền vậy đâu." } },
  7: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu lãi suất chỉ là ‘chia phần’ thôi, không phải phép màu." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nghĩ gửi tiền là tiền tự sinh → hơi ảo nha." } },
  8: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn nhận ra chiêu ‘tiền → tiền’ là illusion. Không dễ bị dụ 👍" }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn rất hợp để bị mời vào mấy kèo ‘lãi 20%/tháng’…" } },
  9: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu đất không tự kiếm tiền – con người mới làm chuyện đó." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Mua đất vì ‘nó tự tăng’ → nghe quen không? 😏" } },
  10: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn biết máy móc không tạo giá trị mới. Rất tỉnh táo." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nghĩ robot tự kiếm tiền? Nếu vậy nó giàu hơn bạn rồi 🤖" } },
  11: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Chuẩn. Chỉ có lao động sống mới ‘đẻ’ ra giá trị mới." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn đang đánh giá thấp con người rồi đó." } },
  12: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu cấu trúc doanh nghiệp → đọc số liệu không bị mù." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nhìn công ty mà không hiểu nó cấu tạo thế nào → hơi mơ hồ." } },
  13: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu grow từ bên trong → kiểu doanh nghiệp xịn." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn đang nhầm giữa kiếm tiền và đi vay tiền." } },
  14: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Chuẩn. Đây là kiểu ‘gom hết về một mối’ (M&A)." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn không phân biệt được ‘tự lớn lên’ và ‘đi mua người khác’." } },
  15: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu giá bán ≠ giá trị. Đây là insight rất ‘đắt tiền’." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn tin giá thị trường luôn đúng? Thị trường cười nhẹ." } },
  16: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu buôn bán không tạo giá trị mới, chỉ chia lại thôi." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nghĩ ‘mua rẻ bán đắt’ là tạo ra giá trị? Không hẳn đâu." } },
  17: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu lãi suất = cung cầu vốn. Chuẩn tài chính cơ bản." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn nghĩ lãi suất tự nhiên mà có? Không đơn giản vậy." } },
  18: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu đất tốt + vị trí đẹp = tiền. Rất đời." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn không hiểu vì sao cùng ngành mà lời khác nhau." } },
  19: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu đầu tư thêm → kiếm thêm. Logic đơn giản mà nhiều người quên." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn bỏ qua yếu tố cải tiến → hơi tụt hậu." } },
  20: { correct: { amt: "+$8", act: p => p.cash += 8, st: "Bạn hiểu quyền sở hữu = quyền kiếm tiền." }, incorrect: { amt: "-$7", act: p => p.cash = Math.max(0, p.cash - 7), st: "Bạn quên mất yếu tố ‘độc quyền’. Sai khá đau." } },
  21: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn loại được yếu tố ‘rác’. Tư duy analyst chuẩn chỉnh." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn bị nhiễu. Thị trường rất thích người dễ nhiễu." } },
  22: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn nhìn ra tương lai: máy móc nhiều hơn, con người ít hơn." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn chưa thấy xu hướng automation rồi." } },
  23: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn phân biệt grow thật vs ‘gom cho to’. Rất đáng tiền." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn thấy to là tưởng mạnh. Không phải lúc nào cũng vậy." } },
  24: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu bất bình đẳng kiểu hiện đại." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ ai cũng giàu lên cùng nhau? Nghe hơi lạc quan 😅" } },
  25: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu doanh nghiệp luôn phải có ‘margin’ để sống." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ bán = chi phí? Vậy họ sống bằng niềm tin à?" } },
  26: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu càng nhiều máy → lợi nhuận % dễ giảm." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ đổ tiền là auto win. Không dễ vậy đâu." } },
  27: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn đo hiệu quả, không bị doanh thu đánh lừa." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn thấy số to là thích. Nhưng lời bao nhiêu?" } },
  28: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu giá ≠ giá trị → không FOMO." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn thấy giá tăng là lao vào. Classic." } },
  29: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu vốn cho vay vẫn ‘sống’. Chuẩn tài chính." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn chưa hiểu dòng tiền vận hành." } },
  30: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn nhận ra illusion lớn nhất của thị trường." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn tin tiền tự sinh → market thích kiểu này." } },
  31: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu vì sao nông nghiệp vẫn có ‘đặc quyền’." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn không thấy sự khác biệt giữa ngành." } },
  32: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu đất = dòng tiền tương lai. Chuẩn investor." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn định giá kiểu ‘cảm giác đẹp là mua’." } },
  33: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu lợi nhuận chỉ là lớp vỏ. Rất tỉnh." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn bị ‘profit’ đánh lừa." } },
  34: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn biết tối ưu chi phí > bóc lột thêm. Tư duy hiện đại." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ cứ ép là tăng lợi nhuận. Hơi lỗi thời." } },
  35: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu tài sản giấy vs tài sản thật." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn không phân biệt được cổ phiếu vs tài sản vật lý." } },
  36: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu ‘lợi thế cạnh tranh’ = tiền thật." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn không biết vì sao có công ty vượt trội." } },
  37: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu năng suất = tăng trưởng." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn đánh giá sai động lực kinh tế." } },
  38: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu hệ thống đang ‘giấu bài’." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nhìn chi phí mà không hiểu sâu." } },
  39: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu lender không thể ăn hơn owner." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ cho vay ngon hơn kinh doanh? Không hẳn." } },
  40: { correct: { amt: "+$18", act: p => p.cash += 18, st: "Bạn hiểu redistribution ≠ tạo ra giá trị." }, incorrect: { amt: "-$16", act: p => p.cash = Math.max(0, p.cash - 16), st: "Bạn nghĩ tiền tự xuất hiện. Không có đâu." } },
  41: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu: càng tự động hóa → ROI bị ép. Deep." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn nghĩ công nghệ = auto win. Không phải lúc nào." } },
  42: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn thấy dòng tiền ẩn. Người ngoài không thấy được." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn bỏ qua cash flow → dễ toang." } },
  43: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu mặt tối của tăng trưởng." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn đang nhìn kinh tế màu hồng." } },
  44: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu tiền bị chia lại giữa ngành." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn nghĩ ai làm ra người đó giữ. Không đâu." } },
  45: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu đầu tư chiều sâu mới là game thật." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn nhầm giữa tự nhiên và đầu tư." } },
  46: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu quyền lực = sở hữu cổ phần." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn nghĩ CEO là người mạnh nhất? Chưa chắc." } },
  47: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu tăng năng suất mới là hack game." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn nghĩ ép lao động là cách duy nhất." } },
  48: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu công thức thật sự đằng sau lợi nhuận." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn đang học công thức mà không hiểu." } },
  49: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu giá chỉ là phiên bản ‘biến dạng’ của giá trị." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn tin thị trường luôn đúng. Nguy hiểm." } },
  50: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu độc quyền = tiền." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn bỏ qua yếu tố sở hữu. Sai lớn." } },
  51: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu tài chính đang ‘che bài’ sản xuất." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn bị illusion dẫn dắt." } },
  52: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn biết tiết kiệm chi phí = tăng lợi nhuận." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn chỉ nghĩ tăng doanh thu mới là cách." } },
  53: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu tốc độ lưu thông = tiền." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn không hiểu vì sao Amazon mạnh." } },
  54: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu evolution của hệ thống kinh tế." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn đang trộn lẫn các thời kỳ." } },
  55: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu khủng hoảng = mất thu nhập hàng loạt." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn đánh giá sai rủi ro hệ thống." } },
  56: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu cân bằng thị trường." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn không hiểu mối quan hệ p và m." } },
  57: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu cách scale lợi nhuận." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn không biết doanh nghiệp lớn lên kiểu gì." } },
  58: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu disruption. Không ôm đồ lỗi thời." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn đang giữ ‘công nghệ chết’." } },
  59: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu tốc độ = tiền. Rất quan trọng." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn chậm = mất tiền." } },
  60: { correct: { amt: "+$38", act: p => p.cash += 38, st: "Bạn hiểu toàn bộ hệ thống. Không còn bị thị trường dắt mũi nữa." }, incorrect: { amt: "-$30", act: p => p.cash = Math.max(0, p.cash - 30), st: "Bạn sai ở nền tảng. Đây là kiểu sai rất đắt." } }
};

const game = {
  players: [],
  currentPlayerIndex: 0,
  currentTurn: 1,
  pendingDifficulty: null,
  pendingQuestion: null,
  usedQuestionNumbers: [],
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
const restartBtn = document.getElementById("restart-btn");
const difficultyButtons = [...document.querySelectorAll("[data-difficulty]")];
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🎵";
    musicToggle.classList.remove("muted");
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
    musicToggle.classList.add("muted");
  }
});

startBtn.addEventListener("click", showInstructions);
enterGameBtn.addEventListener("click", startGame);
nextTurnBtn.addEventListener("click", onNextTurn);
restartBtn.addEventListener("click", restartGame);

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

  // Play music on first interaction
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch((e) => console.log("Audio play blocked"));
  }
}
difficultyButtons.forEach((btn) => btn.addEventListener("click", () => pickDifficulty(btn.dataset.difficulty)));

function startGame() {
  game.players = [{ name: SOLO_PLAYER_NAME, ...structuredClone(INITIAL_STATE) }];
  game.currentPlayerIndex = 0;
  game.currentTurn = 1;
  game.pendingDifficulty = null;
  game.pendingQuestion = null;
  game.usedQuestionNumbers = [];
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

function restartGame() {
  resultSection.classList.add("hidden");
  setupSection.classList.remove("hidden");
  document.body.classList.remove("game-started");
  // Music is already handled by startBtn in showInstructions if needed
}

function pickDifficulty(difficulty) {
  if (game.ended || game.pendingDifficulty) return;
  game.pendingDifficulty = difficulty;

  const player = getCurrentPlayer();
  
  // Lọc các câu hỏi chưa dùng
  const availableQuestions = difficultyQuestionSets[difficulty].filter(q => {
    const numMatch = q.match(/Câu\s+(\d+)\./);
    const num = numMatch ? Number(numMatch[1]) : null;
    return num && !game.usedQuestionNumbers.includes(num);
  });

  if (availableQuestions.length === 0) {
    alert("Đã hết câu hỏi mới ở mức độ này! Vui lòng chọn mức khác.");
    game.pendingDifficulty = null;
    return;
  }

  const rawQuestion = randomItem(availableQuestions);
  const parsedQuestion = parseQuestion(rawQuestion);

  if (!parsedQuestion || !parsedQuestion.correctAnswer) {
    appendLog("Không đọc được định dạng câu hỏi. Vui lòng chọn lại.");
    game.pendingDifficulty = null;
    return;
  }

  game.usedQuestionNumbers.push(parsedQuestion.number);
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
  const effectData = QUESTION_EFFECTS[questionNum] || QUESTION_EFFECTS[1];

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
  if (cash < 20) return { title: "💀 Bay màu từ vòng gửi xe", quote: "Chưa kịp hiểu đề thì ví đã hiểu bạn rồi 💸" };
  if (cash < 40) return { title: "🥴 Hơi nghèo nhưng còn thở", quote: "Có tiền… nhưng không đủ để sai thêm nhiều lần." };
  if (cash < 60) return { title: "🪙 Lẻ tẻ sống qua ngày", quote: "Bạn chưa cháy, nhưng cũng chưa sống nổi 😅" };
  if (cash < 80) return { title: "🍼 Tập tành kiếm tiền", quote: "Lý thuyết vào đầu, tiền thì vào… người khác." };
  if (cash < 100) return { title: "🐣 Gà mới ra chuồng", quote: "Bắt đầu hiểu game… và bắt đầu bị thị trường test." };
  if (cash < 120) return { title: "👟 Chạy KPI tài chính", quote: "Có thu nhập rồi đó, nhưng chưa có ‘tài sản’." };
  if (cash < 140) return { title: "🧃 Buôn bán nước mía", quote: "Bắt đầu hiểu lời lỗ, nhưng vẫn hơi… thủ công." };
  if (cash < 160) return { title: "👔 Nhân viên có chí", quote: "Bạn làm tốt… cho người khác giàu." };
  if (cash < 180) return { title: "🚲 Giao hàng dòng tiền", quote: "Tiền có chạy… nhưng chạy qua tay bạn thôi." };
  if (cash < 200) return { title: "😬 Hơi biết sợ rủi ro", quote: "Bắt đầu nghĩ trước khi bấm… nhưng vẫn sai 😏" };
  if (cash < 220) return { title: "🐟 Cá nhỏ biết né lưới", quote: "Không còn dễ bị ăn nữa. Nhưng chưa ăn ai được." };
  if (cash < 240) return { title: "🧠 Có suy nghĩ tài chính", quote: "Bạn bắt đầu hiểu vấn đề… không còn chơi theo cảm xúc." };
  if (cash < 260) return { title: "🛠️ Thợ build tài sản", quote: "Bạn đang xây thứ gì đó. Chưa to, nhưng có hướng." };
  if (cash < 280) return { title: "📊 Phân tích có cơ sở", quote: "Không còn đoán mò. Bạn bắt đầu có logic." };
  if (cash < 300) return { title: "🌱 Mầm non tư bản", quote: "Tiền bắt đầu sinh tiền… dù còn hơi chậm." };
  if (cash < 320) return { title: "💼 Người chơi có chiến lược", quote: "Bạn không còn chơi game — bạn đang tối ưu nó." };
  if (cash < 340) return { title: "🏢 Có tí quyền lực", quote: "Bạn bắt đầu ảnh hưởng cuộc chơi, không chỉ tham gia." };
  if (cash < 360) return { title: "🔥 Tay chơi có số", quote: "Bạn biết khi nào nên liều. Và thường liều đúng." };
  if (cash < 380) return { title: "🦈 Cá mập mini", quote: "Bạn bắt đầu săn mồi… chứ không còn bị săn." };
  return { title: "👑 Ông trùm nửa mùa", quote: "Ở đây bạn là boss. Ra ngoài… vẫn còn boss khác 😏" };
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
