# Hành Trình Trở Thành Nhà Tư Bản (Bản Web)

Game này được làm để chơi nhanh trong lớp theo bộ luật 10 lượt.

## Chạy game

1. Mở file `index.html` bằng trình duyệt.
2. Bấm `Bắt đầu game` (chế độ 1 người chơi, không cần nhập tên).
3. Mỗi lượt:
   - Chọn độ khó Dễ / Trung Bình / Khó.
   - Người quản trò (hoặc cả lớp) tự chấm `Trả lời đúng` hoặc `Trả lời sai`.
4. Hết lượt 10 sẽ có bảng kết quả cuối game.

## Push lên GitHub (để cả lớp chơi online)

Nếu bạn tạo repo riêng cho thư mục này, có thể dùng:

```bash
git init
git add .
git commit -m "init capitalist journey classroom web game"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

Để share online nhanh:
- Bật GitHub Pages cho nhánh `main`, thư mục gốc.
- Link share sẽ là dạng `https://<username>.github.io/<repo-name>/`

## Ghi chú

- Đây là phiên bản MVP để cả lớp chơi ngay.
- Nếu muốn, có thể nâng cấp tiếp: timer 45 giây, bộ thẻ câu hỏi thật, chế độ online realtime, lưu lịch sử trận.
