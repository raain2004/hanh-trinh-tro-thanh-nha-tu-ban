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
  cash: 100,
  workers: 2,
  machines: 1,
  factories: 1,
  surplus: 0,
  attacksUsed: 0,
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

const rewardRules = {
  1: {
    easy: (p) => (p.cash += 50),
    medium: (p) => (p.workers += 1),
    hard: (p) => (p.surplus += 60),
  },
  2: {
    easy: (p) => (p.cash += 20),
    medium: (p) => (p.machines += 1),
    hard: (p) => applyAttack(p, (opponent) => (opponent.cash = Math.max(0, opponent.cash - 20))),
  },
  3: {
    easy: (p) => (p.surplus += 20),
    medium: (p) => (p.cash += 40),
    hard: (p) => (p.surplus += 80),
  },
  4: {
    easy: (p) => (p.surplus += 30),
    medium: (p) => (p.cash += 25),
    hard: (p) => (p.machines += 1),
  },
  5: {
    easy: (p) => (p.cash += 20),
    medium: (p) => (p.surplus += 45),
    hard: (p) => (p.surplus += 70),
  },
  6: {
    easy: (p) => (p.cash += 60),
    medium: (p) => (p.surplus += 20),
    hard: (p) => applyAttack(p, (opponent) => (opponent.surplus = Math.max(0, opponent.surplus - 25))),
  },
  7: {
    easy: (p) => (p.workers += 1),
    medium: (p) => (p.surplus += 50),
    hard: (p) => {
      p.cash += 120;
      p.surplus -= 40;
    },
  },
  8: {
    easy: (p) => (p.cash += 30),
    medium: (p) => (p.surplus += 60),
    hard: (p) => {
      p.cash -= 20;
      p.machines += 1;
    },
  },
  9: {
    easy: (p) => (p.cash += 80),
    medium: (p) => (p.surplus += 70),
    hard: (p) => applyAttack(p, (opponent) => (opponent.machines = Math.max(0, opponent.machines - 1))),
  },
  10: {
    easy: (p) => (p.cash += 100),
    medium: (p) => (p.machines += 1),
    hard: (p) => (p.surplus *= 2),
  },
};

const penalties = {
  easy: (p) => (p.cash = Math.max(0, p.cash - 10)),
  medium: (p) => {
    if (p.cash >= 40) p.cash -= 40;
    else p.workers = Math.max(0, p.workers - 1);
  },
  hard: (p) => (p.surplus = Math.floor(p.surplus / 2)),
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
const gameSection = document.getElementById("game-section");
const resultSection = document.getElementById("result-section");
const startBtn = document.getElementById("start-btn");
const turnTitle = document.getElementById("turn-title");
const currentPlayerEl = document.getElementById("current-player");
const questionBox = document.getElementById("question-box");
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answerOptionsEl = document.getElementById("answer-options");
const logEl = document.getElementById("log");
const finalResultEl = document.getElementById("final-result");
const difficultyButtons = [...document.querySelectorAll("[data-difficulty]")];

startBtn.addEventListener("click", startGame);
difficultyButtons.forEach((btn) => btn.addEventListener("click", () => pickDifficulty(btn.dataset.difficulty)));

function startGame() {
  game.players = [{ name: SOLO_PLAYER_NAME, ...structuredClone(INITIAL_STATE) }];
  game.currentPlayerIndex = 0;
  game.currentTurn = 1;
  game.pendingDifficulty = null;
  game.pendingQuestion = null;
  game.ended = false;

  setupSection.classList.add("hidden");
  gameSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  logEl.innerHTML = "";

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

  if (isCorrect) {
    rewardRules[game.currentTurn][difficulty](player);
    appendLog(`${player.name} trả lời ĐÚNG (${difficulty}) ở lượt ${game.currentTurn}.`);
  } else {
    penalties[difficulty](player);
    appendLog(
      `${player.name} trả lời SAI (${difficulty}) ở lượt ${game.currentTurn}. Đáp án đúng: ${correctAnswer}.`
    );
  }

  normalizePlayerState(player);
  game.pendingDifficulty = null;
  game.pendingQuestion = null;
  questionBox.classList.add("hidden");
  answerOptionsEl.innerHTML = "";
  disableDifficultyButtons(false);

  goNextPlayer();
  refreshUI();
}

function goNextPlayer() {
  const isLastPlayerThisTurn = game.currentPlayerIndex === game.players.length - 1;
  if (isLastPlayerThisTurn) {
    game.currentPlayerIndex = 0;
    game.currentTurn += 1;
    applyCatchupSupportIfNeeded();
  } else {
    game.currentPlayerIndex += 1;
  }

  if (game.currentTurn > TOTAL_TURNS) {
    game.ended = true;
    renderFinalResults();
    appendLog("Game đã kết thúc. Xem kết quả cuối game bên dưới.");
  }
}

function applyCatchupSupportIfNeeded() {
  if (![6, 9].includes(game.currentTurn) || game.currentTurn > TOTAL_TURNS) return;
  const sorted = getRanking();
  const lastPlayer = sorted[sorted.length - 1];
  lastPlayer.cash += 20;
  appendLog(`Trợ cấp chống snowball: ${lastPlayer.name} nhận +20 tiền ở đầu lượt ${game.currentTurn}.`);
}

function applyAttack(currentPlayer, effect) {
  if (currentPlayer.attacksUsed >= 2) {
    currentPlayer.surplus += 20;
    appendLog(`${currentPlayer.name} đã dùng hết 2 lần tấn công. Hệ thống chuyển thành +20 thặng dư.`);
    return;
  }
  const candidates = game.players.filter((p) => p !== currentPlayer);
  const target = [...candidates].sort((a, b) => getTotalAsset(b) - getTotalAsset(a))[0];
  if (!target) return;
  effect(target);
  currentPlayer.attacksUsed += 1;
  normalizePlayerState(target);
  appendLog(`${currentPlayer.name} kích hoạt hiệu ứng ảnh hưởng đến ${target.name}.`);
}

function refreshUI() {
  if (game.ended) {
    turnTitle.textContent = "Đã kết thúc";
    currentPlayerEl.textContent = "";
    disableDifficultyButtons(true);
  } else {
    turnTitle.textContent = `Lượt ${game.currentTurn} / ${TOTAL_TURNS}`;
    currentPlayerEl.textContent = `Lượt hiện tại: ${getCurrentPlayer().name}`;
  }
}

function renderFinalResults() {
  resultSection.classList.remove("hidden");
  const ranking = getRanking();
  const winner = ranking[0];
  finalResultEl.innerHTML = `
    <p><strong>Quán quân:</strong> ${winner.name} - ${getTotalAsset(winner)} điểm tài sản.</p>
    <p><strong>Danh hiệu:</strong></p>
    <ul>
      ${ranking
        .map((player, idx) => `<li>${player.name}: ${mainTitleByRank(idx + 1)}</li>`)
        .join("")}
    </ul>
  `;
}

function getRanking() {
  return [...game.players].sort((a, b) => {
    const totalDiff = getTotalAsset(b) - getTotalAsset(a);
    if (totalDiff !== 0) return totalDiff;
    const surplusDiff = b.surplus - a.surplus;
    if (surplusDiff !== 0) return surplusDiff;
    return b.factories - a.factories;
  });
}

function getTotalAsset(player) {
  const machineValue = player.machines * 50;
  const factoryValue = player.factories * 80;
  return player.cash + machineValue + factoryValue + player.surplus;
}

function mainTitleByRank(rank) {
  if (rank === 1) return "Đại Tư Bản Công Nghiệp";
  if (rank === 2) return "Nhà Tư Bản Tăng Trưởng";
  if (rank === 3) return "Nhà Tư Bản Tiềm Năng";
  return "Nhà Khởi Nghiệp Kiên Cường";
}

function normalizePlayerState(player) {
  player.cash = Math.max(0, Math.floor(player.cash));
  player.workers = Math.max(0, Math.floor(player.workers));
  player.machines = Math.max(0, Math.floor(player.machines));
  player.factories = Math.max(0, Math.floor(player.factories));
  player.surplus = Math.max(0, Math.floor(player.surplus));
}

function getCurrentPlayer() {
  return game.players[game.currentPlayerIndex];
}

function appendLog(message) {
  const p = document.createElement("p");
  p.textContent = `- ${message}`;
  logEl.prepend(p);
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
