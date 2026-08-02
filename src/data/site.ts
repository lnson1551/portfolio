import type {
  ArticleRoute,
  ArticleSwitcherItem,
  CardTone,
  DetailSection,
  HeroStatement,
  IndexCard,
  NavigationSection,
  PageRoute,
  ThoughtCard,
} from "../types/content";

const cardTones: CardTone[] = ["mist", "sage", "cloud"];

function getCardTone(index: number) {
  return cardTones[index % cardTones.length];
}

function createCards(
  titles: string[],
  getHref: (title: string, index: number) => string,
  getDescription?: (title: string, index: number) => string | undefined,
): IndexCard[] {
  return titles.map((title, index) => ({
    title,
    href: getHref(title, index),
    tone: getCardTone(index),
    description: getDescription?.(title, index),
  }));
}

function createRepeatedCards(count: number, title: string, href: string) {
  return createCards(Array.from({ length: count }, () => title), () => href);
}

function createArticleRoute(
  path: string,
  title: string,
  sections: DetailSection[],
  options: Pick<ArticleRoute, "currentItemTitle" | "switcherItems"> = {},
): ArticleRoute {
  return {
    kind: "article",
    path,
    title,
    sections,
    ...options,
  };
}

type BankingPost = {
  title: string;
  category: string;
  href: string;
  coverSrc: string;
  sections: DetailSection[];
};

export const navigationSections: NavigationSection[] = [
  {
    title: "Về Sea",
    items: [
      { label: "Info", href: "#/info" },
      { label: "Ảnh kỉ niệm", href: "#/photography" },
      { label: "Dự án", href: "#/projects" },
    ],
  },
  {
    title: "Kiến thức",
    items: [
      { label: "Banking domain", href: "#/banking-domain" },
      { label: "Design system", href: "#/design-system" },
    ],
  },
  {
    title: "Suy nghĩ",
    items: [
      { label: "UX bites", href: "#/ux-bites" },
      { label: "Thinking", href: "#/thinking" },
    ],
  },
];

export const heroStatements: [HeroStatement, HeroStatement] = [
  {
    eyebrow: "/Tự do",
    lines: ["Chỉ có bầu trời", "là giới hạn", "của sáng tạo"],
  },
  {
    eyebrow: "/Hài hoà",
    lines: ["Phát triển", "bền vững cùng", "thiên nhiên"],
  },
];

export const recentThoughts: ThoughtCard[] = [
  { title: "Content blogs", href: "#/ux-bites/content-blogs", tone: "mist" },
  { title: "Content blogs", href: "#/thinking/content-blogs", tone: "sage" },
  { title: "Content blogs", href: "#/design-system/tokens", tone: "cloud" },
];

export const socialLinks = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const genericOverview = {
  title: "Tổng quan",
  body: [
    "Vay cầm cố tiền gửi tại [BANK] là việc khách hàng dùng khoản tiền gửi hoặc thẻ tiết kiệm làm tài sản bảo đảm để vay tiền, thay vì tất toán khoản tiền gửi trước hạn.",
    "Ví dụ: khách hàng có 500 triệu đồng đang gửi tiết kiệm nhưng cần gấp 300 triệu đồng trong hai tháng. Khách hàng có thể cầm cố khoản tiền gửi đó để vay 300 triệu đồng; khoản tiền gửi bị phong tỏa trong thời gian bảo đảm khoản vay nhưng không phải rút trước hạn.",
  ],
};

const pledgedDepositLoanSections: DetailSection[] = [
  {
    title: "Dùng sổ đi vay",
    body: [
      "“Vay cầm cố tiền gửi” rộng hơn “vay cầm cố sổ tiết kiệm”. Sổ hoặc thẻ tiết kiệm chỉ là một loại tài sản thuộc nhóm này.",
    ],
  },
  genericOverview,
  {
    title: "Hạn mức vay",
    body: [
      "Theo nhu cầu vay vốn thực tế và lên đến 100% trị giá tài sản cầm cố.",
      "Cụm từ “lên đến 100%”: không có nghĩa mọi khách hàng mặc nhiên được vay đúng 100%.",
      "Số tiền được duyệt còn phụ thuộc nhu cầu hợp lệ của khách hàng.",
      "Phụ thuộc loại tiền gửi hoặc giấy tờ có giá.",
      "Phụ thuộc thời hạn còn lại, đồng tiền, tổ chức phát hành và các nghĩa vụ cần bảo đảm.",
      "Phải chừa đủ giá trị để xử lý gốc, lãi và nghĩa vụ liên quan theo quy định của sản phẩm.",
    ],
  },
  {
    title: "Điều kiện",
    body: [
      "Mức vay tối đa 100 triệu/khách.",
      "Phải có sổ tiết kiệm.",
      "Số tiền vay không được vượt quá sổ tiết kiệm.",
      "Thời hạn vay là thời hạn còn lại của sổ tiết kiệm được chọn và không vượt quá 12 tháng.",
    ],
  },
];

const overdraftLoanSections: DetailSection[] = [
  {
    title: "Tổng quan",
    body: [
      "Khi tài khoản về 0đ thanh toán vẫn được chấp nhận.",
      "Lãi suất chỉ phát sinh trên số tiền bạn đã chi vượt mức và tính theo số ngày thực tế tiền bị âm. Khi tài khoản có tiền (lương về, nạp tiền vào), hệ thống sẽ tự động trừ để cấn trừ nợ thấu chi.",
    ],
  },
  {
    title: "Điều kiện",
    blocks: [
      { type: "paragraph", text: "Miễn phí lãi nếu thanh toán trước 17 giờ cùng ngày." },
      { type: "paragraph", text: "Lãi 1.5% khi thanh toán sau 17h." },
      {
        type: "paragraph",
        text: "Là công dân Việt Nam trong độ tuổi quy định (thường từ 18 đến 65 hoặc 70 tuổi), có thu nhập ổn định hoặc tài sản bảo đảm hợp lệ, không có nợ xấu.",
      },
      {
        type: "paragraph",
        text: "Gồm giấy đề nghị cấp hạn mức thấu chi, CMND/CCCD còn hiệu lực và giấy tờ chứng minh thu nhập hoặc tài sản thế chấp.",
      },
      { type: "paragraph", text: "Vay tối đa 12 tháng", segments: [{ text: "Vay tối đa 12 tháng", emphasized: true }] },
    ],
  },
  {
    title: "Hình thức",
    blocks: [
      { type: "paragraph", text: "Có 2 loại" },
      {
        type: "paragraph",
        text: "Thấu chi tín chấp: Dựa vào lương và lịch sử tín dụng",
        segments: [
          { text: "Thấu chi tín chấp:", emphasized: true },
          { text: " Dựa vào lương và lịch sử tín dụng" },
        ],
      },
      {
        type: "paragraph",
        text: "Thấu chi thế chấp: Dựa vào tài sản tiết kiệm, bất động sản",
        segments: [
          { text: "Thấu chi thế chấp:", emphasized: true },
          { text: " Dựa vào tài sản tiết kiệm, bất động sản" },
        ],
      },
    ],
  },
];

const loanSettlementSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "Thanh toán đầy đủ các khoản nợ gốc và lãi vay còn lại cho khoản vay trước thời hạn quy định trong hợp đồng vay giữa khách hàng và ngân hàng. Giúp khách hàng giải phóng tài sản bảo đảm (nếu có) và tránh phát sinh thêm lãi vay cho khoản vay còn lại.",
      },
      {
        type: "paragraph",
        text: "Ví dụ:\nKhách hàng vay ngân hàng 1 tỷ đồng với kỳ hạn 5 năm. Sau 2 năm, khách hàng có đủ khả năng tài chính và muốn thanh toán toàn bộ số tiền gốc và lãi vay còn lại cho khoản vay này. Việc thực hiện thanh toán đầy đủ trước thời hạn 3 năm được gọi là tất toán khoản vay.",
        segments: [
          { text: "Ví dụ:", emphasized: true },
          {
            text: "\nKhách hàng vay ngân hàng 1 tỷ đồng với kỳ hạn 5 năm. Sau 2 năm, khách hàng có đủ khả năng tài chính và muốn thanh toán toàn bộ số tiền gốc và lãi vay còn lại cho khoản vay này. Việc thực hiện thanh toán đầy đủ trước thời hạn 3 năm được gọi là tất toán khoản vay.",
          },
        ],
      },
      { type: "list", items: ["Khoản vay đến hạn: 31/12/2026.", "Khách hàng trả hết: 15/11/2026."] },
      {
        type: "paragraph",
        text: "Đây là tất toán trước hạn. Sau khi khách hàng hoàn thành toàn bộ nghĩa vụ, [BANK] thực hiện đóng khoản vay và giải tỏa tài sản bảo đảm theo quy trình.\n* Việc có phí hay không phải căn cứ hợp đồng và biểu phí áp dụng.",
        segments: [
          { text: "Đây là tất toán trước hạn. Sau khi khách hàng hoàn thành toàn bộ nghĩa vụ, " },
          { text: "[BANK] thực hiện đóng khoản vay và giải tỏa tài sản bảo đảm theo quy trình.", emphasized: true },
          { text: "\n* Việc có phí hay không phải căn cứ hợp đồng và biểu phí áp dụng." },
        ],
      },
    ],
  },
  {
    title: "Tất toán trước hạn",
    blocks: [
      { type: "heading", text: "1. Trả trước một phần" },
      { type: "paragraph", text: "Khách hàng trả thêm một phần tiền gốc trước lịch." },
      { type: "paragraph", text: "Sau đó ngân hàng có thể áp dụng một trong hai cách:" },
      {
        type: "list",
        items: [
          "Giảm số tiền phải trả mỗi kỳ, nhưng giữ nguyên ngày kết thúc khoản vay.",
          "Giữ gần như nguyên số tiền trả mỗi kỳ, nhưng rút ngắn số kỳ còn lại.",
        ],
      },
      {
        type: "image",
        src: "/assets/figma/banking-vay/tat-toan-truoc-han.png",
        alt: "Minh họa trả trước một phần khoản vay",
      },
      {
        type: "paragraph",
        text: "Ví dụ:\nDư nợ: 500 triệu đồng.\nKhách hàng trả trước 100 triệu đồng.\nTừ ngày hạch toán thành công, lãi các ngày tiếp theo chỉ tính trên khoảng 400 triệu đồng.\n→Trả trước thường giúp giảm tổng tiền lãi.",
        segments: [
          { text: "Ví dụ:\nDư nợ: 500 triệu đồng.\nKhách hàng trả trước 100 triệu đồng.\nTừ ngày hạch toán thành công, lãi các ngày tiếp theo chỉ tính trên khoảng 400 triệu đồng.\n" },
          { text: "→Trả trước thường giúp giảm tổng tiền lãi.", emphasized: true },
        ],
      },
      { type: "heading", text: "2. Khách hàng trả toàn bộ trước hạn" },
      {
        type: "list",
        items: [
          "Gốc còn lại.",
          "Lãi phát sinh đến ngày tất toán.",
          "Phí trả nợ trước hạn, nếu có.",
          "Các khoản phí hoặc nghĩa vụ còn tồn tại.",
        ],
      },
      { type: "paragraph", text: "Sau khi hoàn tất, khoản vay kết thúc ngay và các kỳ thanh toán còn lại bị hủy." },
    ],
  },
  {
    title: "Phí trả nợ trước hạn",
    blocks: [
      {
        type: "paragraph",
        text: "Phí trả trước = Số tiền gốc trả trước × Tỷ lệ phí",
        segments: [{ text: "Phí trả trước = Số tiền gốc trả trước × Tỷ lệ phí", emphasized: true }],
      },
      { type: "paragraph", text: "Tỷ lệ phí thường phụ thuộc vào:" },
      {
        type: "list",
        items: [
          "Năm thứ mấy của khoản vay.",
          "Loại sản phẩm vay.",
          "Khoản trả trước một phần hay toàn bộ.",
          "Nguồn tiền trả nợ.",
          "Chính sách hoặc hợp đồng cụ thể.",
        ],
      },
      {
        type: "paragraph",
        text: "*Phí có thể giảm dần theo thời gian, chẳng hạn năm đầu cao hơn và những năm sau thấp hơn.",
      },
    ],
  },
  {
    title: "Giải chấp hoặc xử lý tài sản",
    body: [
      "Sau khi khoản vay được tất toán, ngân hàng thực hiện giải chấp tài sản bảo đảm theo quy trình và trả lại quyền sử dụng tài sản cho khách hàng.",
      "Nếu khách hàng không hoàn thành nghĩa vụ trả nợ, ngân hàng có thể xử lý tài sản bảo đảm theo hợp đồng và quy định pháp luật để thu hồi gốc, lãi và các nghĩa vụ liên quan.",
    ],
  },
];

const autoRateReductionSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "Giảm lãi suất vay tự động cho khoản vay hiện hữu hoặc khoản vay mới khi duy trì số dư không kỳ hạn bình quân.",
      },
      {
        type: "paragraph",
        text: "Thời gian áp dụng: 03 tháng cho mỗi kỳ tái định lãi suất.",
        segments: [
          { text: "Thời gian áp dụng:", emphasized: true },
          { text: " 03 tháng cho mỗi kỳ tái định lãi suất." },
        ],
      },
      { type: "paragraph", text: "Điều kiện:", segments: [{ text: "Điều kiện:", emphasized: true }] },
      {
        type: "list",
        items: [
          "Không có nợ quá hạn từ nhóm 2 - 5.",
          "Số dư tiền gửi không kỳ hạn bình quân 03 tháng ≥ 10 triệu đồng.",
          "Khoản vay còn ít nhất một kỳ tái định và không tham gia chương trình giảm lãi suất khác.",
        ],
      },
      {
        type: "image",
        src: "/assets/figma/banking-vay/giam-lai-vay-tu-dong.png",
        alt: "Minh họa giảm lãi vay tự động",
      },
    ],
  },
];

const creditCardSections: DetailSection[] = [
  {
    title: "Không cần thế chấp",
    blocks: [
      { type: "paragraph", text: "Khác với thẻ ghi nợ (Debit):", segments: [{ text: "Khác với thẻ ghi nợ (Debit):", emphasized: true }] },
      {
        type: "list",
        items: ["Thẻ ghi nợ sử dụng tiền có sẵn trong tài khoản.", "Thẻ tín dụng sử dụng hạn mức do ngân hàng cấp."],
      },
      { type: "paragraph", text: "Rút tiền mặt, trả thiếu hoặc trả trễ có thể phát sinh phí và lãi." },
    ],
  },
  {
    title: "Tổng quan",
    blocks: [
      { type: "paragraph", text: "Thẻ tín dụng là một hạn mức vay quay vòng do [BANK] cấp:" },
      {
        type: "paragraph",
        text: "[BANK] cấp hạn mức → khách hàng chi tiêu/rút tiền → phát sinh dư nợ → [BANK] chốt sao kê → khách hàng thanh toán → hạn mức được phục hồi.",
        segments: [
          {
            text: "[BANK] cấp hạn mức → khách hàng chi tiêu/rút tiền → phát sinh dư nợ → [BANK] chốt sao kê → khách hàng thanh toán → hạn mức được phục hồi.",
            emphasized: true,
          },
        ],
      },
      {
        type: "paragraph",
        text: "Hạn mức khả dụng: Là số tiền khách hàng còn có thể sử dụng tại thời điểm xem. Sau khi khách hàng trả nợ và khoản tiền được ACB ghi nhận, hạn mức sẽ được phục hồi tương ứng.",
        segments: [
          { text: "Hạn mức khả dụng:", emphasized: true },
          {
            text: " Là số tiền khách hàng còn có thể sử dụng tại thời điểm xem. Sau khi khách hàng trả nợ và khoản tiền được ACB ghi nhận, hạn mức sẽ được phục hồi tương ứng.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Đăng ký: ACB ONE → Thẻ → Đăng ký thẻ tín dụng → Chọn sản phẩm → Xác nhận thông tin → Xác thực → Chờ kết quả",
        segments: [
          { text: "Đăng ký:", emphasized: true },
          { text: " ACB ONE → Thẻ → Đăng ký thẻ tín dụng → Chọn sản phẩm → Xác nhận thông tin → Xác thực → Chờ kết quả" },
        ],
      },
      {
        type: "paragraph",
        text: "Vượt hạn mức: 0,1%/ngày trên số tiền vượt hạn mức, tối thiểu 10.000 đồng.",
        segments: [
          { text: "Vượt hạn mức:", emphasized: true },
          { text: " 0,1%/ngày trên số tiền vượt hạn mức, tối thiểu 10.000 đồng." },
        ],
      },
      { type: "paragraph", text: "Cấp thẻ: Nhận tại quầy / Giao tận nơi" },
    ],
  },
  {
    title: "Điều kiện mở thẻ",
    blocks: [
      { type: "heading", text: "Hình thức tín chấp theo thu nhập" },
      {
        type: "list",
        items: [
          "Công dân Việt Nam từ 18 tuổi.",
          "Cư trú tại khu vực [BANK] hoạt động.",
          "Có công việc và thu nhập ổn định.",
          "Thời gian công tác thường từ 6–12 tháng.",
          "Thu nhập tham khảo: Hà Nội và TP.HCM từ khoảng 7 triệu đồng/tháng; các tỉnh, thành khác từ khoảng 5 triệu đồng/tháng.",
          "Có lịch sử tín dụng phù hợp và đáp ứng tiêu chí nội bộ của ACB.",
          "CIC và lịch sử trả nợ.",
          "Tổng nghĩa vụ nợ hiện tại.",
          "Đơn vị công tác.",
          "Thời gian làm việc.",
          "Mức thu nhập thực nhận.",
          "Quan hệ hiện hữu với [BANK].",
          "Loại thẻ và hạn mức khách hàng đăng ký.",
        ],
      },
      { type: "heading", text: "Hình thức có tài sản bảo đảm" },
      {
        type: "list",
        items: [
          "Khách hàng dùng tài sản được ACB chấp thuận để bảo đảm cho hạn mức thẻ, chẳng hạn: tiền gửi hoặc sổ tiết kiệm, giấy tờ có giá, hoặc một số tài sản khác theo chính sách từng thời kỳ.",
          "ACB công bố nhóm khách hàng này có thể gồm công dân Việt Nam hoặc người nước ngoài từ 18 tuổi, cư trú hợp pháp tại Việt Nam.",
          "Tài sản và tỷ lệ cấp hạn mức phải được ACB thẩm định, chấp thuận.",
        ],
      },
    ],
  },
  {
    title: "Loại thẻ",
    blocks: [
      { type: "heading", text: "1. Thẻ tín dụng nội địa: ACB Express – Napas" },
      {
        type: "list",
        items: [
          "Chi tiêu trong nước.",
          "Nhu cầu tài chính ngắn hạn.",
          "Rút tiền mặt.",
          "Khách hàng ưu tiên mức lãi thấp hơn một số thẻ quốc tế.",
        ],
      },
      {
        type: "paragraph",
        text: "*ACB hiện giới thiệu ACB Express với lãi suất trong hạn 20%/năm và miễn phí rút tiền mặt theo điều kiện sản phẩm.",
      },
      { type: "heading", text: "2. Thẻ tín dụng quốc tế: Visa, Mastercard, JCB" },
      {
        type: "list",
        items: ["Thanh toán trong và ngoài nước.", "Thanh toán online.", "Du lịch.", "Hoàn tiền hoặc tích điểm.", "Ưu đãi đối tác quốc tế."],
      },
    ],
  },
  {
    title: "Cách thanh toán",
    blocks: [
      { type: "heading", text: "1. Trả toàn bộ dư nợ sao kê" },
      { type: "paragraph", text: "Khách hàng thanh toán toàn bộ số tiền đã chốt trên sao kê trước ngày đến hạn." },
      { type: "list", items: ["Tránh phí không thanh toán tối thiểu.", "Hạn mức được phục hồi."] },
      { type: "heading", text: "2. Trả số tiền tối thiểu" },
      { type: "paragraph", text: "Khách hàng chỉ trả mức tối thiểu ghi trên sao kê." },
      {
        type: "list",
        items: ["Tránh được tình trạng không trả khoản tối thiểu.", "Phần dư nợ chưa trả tiếp tục bị tính lãi theo điều khoản thẻ."],
      },
      { type: "paragraph", text: "*Người dùng dễ rơi vào vòng lặp dư nợ kéo dài." },
      { type: "heading", text: "3. Trả một số tiền tùy chọn" },
      { type: "paragraph", text: "Khách hàng trả nhiều hơn mức tối thiểu nhưng ít hơn toàn bộ dư nợ sao kê." },
      {
        type: "list",
        items: [
          "Dư nợ sao kê: 10 triệu đồng.",
          "Tối thiểu cần trả: 1 triệu đồng.",
          "Khách hàng trả: 6 triệu đồng.",
          "Dư nợ còn lại: 4 triệu đồng, cộng lãi/phí.",
        ],
      },
      { type: "heading", text: "4. Trích nợ tự động" },
      { type: "paragraph", text: "Khách hàng đăng ký để ACB tự động lấy tiền từ tài khoản thanh toán vào kỳ đến hạn." },
      { type: "list", items: ["Trích toàn bộ dư nợ.", "Trích số tiền tối thiểu."] },
    ],
  },
  {
    title: "Phí và lãi",
    blocks: [
      { type: "paragraph", text: "Thẻ khác nhau phí khác nhau." },
      {
        type: "paragraph",
        text: "*Lãi suất quá hạn được công bố bằng 150% lãi suất trong hạn.",
        segments: [
          { text: "*Lãi suất quá hạn được công bố bằng " },
          { text: "150%", emphasized: true },
          { text: " lãi suất trong hạn." },
        ],
      },
      {
        type: "image",
        src: "/assets/figma/banking-vay/tin-dung-phi-lai.png",
        alt: "Bảng phí và lãi thẻ tín dụng",
      },
    ],
  },
];

const certificateOfDepositSections: DetailSection[] = [
  {
    title: "Cho bank mượn tiền",
    blocks: [
      { type: "paragraph", text: "Cách [BANK] dùng vốn:", segments: [{ text: "Cách [BANK] dùng vốn:", emphasized: true }] },
      {
        type: "paragraph",
        text: "Bạn đầu tư vào Chứng chỉ tiền gửi → [BANK] huy động nguồn vốn → nguồn vốn được sử dụng theo quy định để phục vụ hoạt động ngân hàng.",
      },
      {
        type: "list",
        items: [
          "Cấp tín dụng.",
          "Cung ứng dịch vụ tài chính.",
          "Quản lý thanh khoản và các hoạt động kinh doanh ngân hàng khác theo quy định.",
        ],
      },
    ],
  },
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "[BANK] phát hành một loại giấy tờ gọi là CCTG với đơn vị tính mệnh giá: 1 CCTG = 1 triệu VND.",
      },
      {
        type: "paragraph",
        text: "Một lần phát hành sẽ theo lô có nhiều CCTG. Mỗi lô gắn với lợi suất sinh lời cụ thể và có ngày đáo hạn, tương tự tiết kiệm.",
      },
      {
        type: "paragraph",
        text: "*Sản phẩm CCTG này đang tập trung vào luồng bán trước hạn.",
      },
      {
        type: "image",
        src: "/assets/figma/banking-investment/chung-chi-tien-gui.png",
        alt: "Minh họa chứng chỉ tiền gửi",
        width: "22.25rem",
      },
    ],
  },
  {
    title: "Điều kiện",
    body: [
      "User gửi tiết kiệm phải giữ theo thời hạn cụ thể mới hưởng được lãi tốt. Nếu rút tiết kiệm trước hạn, bất kể sớm hay muộn, khoản tiền thường chỉ được tính lãi không kỳ hạn khoảng 0.01–0.5% theo chính sách chung.",
      "User mua CCTG có thể giữ đến đáo hạn để nhận tiền lời hoặc bán trước hạn CCTG linh hoạt để nhận lãi theo thời gian nắm giữ. Ví dụ 3 ngày được 3%, 10 ngày được 4%, 15 ngày được 5%, tùy chính sách sản phẩm.",
    ],
  },
  {
    title: "Tham gia",
    body: [
      "Số tiền tối thiểu là 10 triệu đồng và theo bội số 1 triệu đồng, tương đương ít nhất 10 CCTG.",
      "Thời điểm tham gia phụ thuộc ngày đáo hạn của CCTG hoặc hạn bán.",
      "Có phí giao dịch.",
      "Giao dịch mua bán thực hiện trong khung thời gian quy định, thường từ thứ 2 đến thứ 6 trong giờ hành chính.",
    ],
  },
];

const corporateBondSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text:
          "Trái phiếu doanh nghiệp được hiểu là một loại chứng khoán có thời hạn từ 1 năm trở lên, do doanh nghiệp phát hành nhằm huy động vốn. Trái phiếu này thể hiện cam kết của doanh nghiệp trong việc thanh toán nợ và đảm bảo quyền lợi hợp pháp cho người sở hữu.",
      },
      {
        type: "image",
        src: "/assets/figma/banking-investment/trai-phieu-doanh-nghiep.png",
        alt: "Minh họa trái phiếu doanh nghiệp",
      },
    ],
  },
  {
    title: "Đặc điểm",
    blocks: [
      {
        type: "paragraph",
        text: "Kỳ hạn của trái phiếu: Tùy thuộc vào nhu cầu sử dụng vốn của mỗi doanh nghiệp để xác định kỳ hạn của mỗi đợt phát hành trái phiếu.",
        segments: [
          { text: "Kỳ hạn của trái phiếu:", emphasized: true },
          { text: " Tùy thuộc vào nhu cầu sử dụng vốn của mỗi doanh nghiệp để xác định kỳ hạn của mỗi đợt phát hành trái phiếu." },
        ],
      },
      {
        type: "paragraph",
        text: "Số lượng phát hành: Doanh nghiệp được tự do quyết định số lượng phát hành trái phiếu, căn cứ trên nhu cầu sử dụng vốn và khả năng huy động trên thị trường tương ứng với từng thời kỳ.",
        segments: [
          { text: "Số lượng phát hành:", emphasized: true },
          {
            text: " Doanh nghiệp được tự do quyết định số lượng phát hành trái phiếu, căn cứ trên nhu cầu sử dụng vốn và khả năng huy động trên thị trường tương ứng với từng thời kỳ.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Mệnh giá trái phiếu: Đối với thị trường trong nước, mệnh giá trái phiếu là 100.000 VNĐ hoặc bội số của 100.000 VNĐ.",
        segments: [
          { text: "Mệnh giá trái phiếu:", emphasized: true },
          { text: " Đối với thị trường trong nước, mệnh giá trái phiếu là 100.000 VNĐ hoặc bội số của 100.000 VNĐ." },
        ],
      },
      {
        type: "paragraph",
        text: "Hình thức phát hành: Bút toán ghi nợ, chứng chỉ hoặc dữ liệu điện tử, tùy theo quyết định của doanh nghiệp tại thời kỳ phát hành.",
        segments: [
          { text: "Hình thức phát hành:", emphasized: true },
          { text: " Bút toán ghi nợ, chứng chỉ hoặc dữ liệu điện tử, tùy theo quyết định của doanh nghiệp tại thời kỳ phát hành." },
        ],
      },
      {
        type: "paragraph",
        text: "So với cổ phiếu, trái phiếu có độ rủi ro thấp hơn. Trong trường hợp doanh nghiệp phá sản, nhà đầu tư trái phiếu được ưu tiên thanh toán trước cổ đông.",
      },
      {
        type: "paragraph",
        text: "Trường hợp giá trái phiếu tăng, nhà đầu tư có thể bán trái phiếu với giá cao hơn, từ đó tạo ra lợi nhuận chênh lệch.",
      },
    ],
  },
  {
    title: "Tham gia",
    body: [
      "Số tiền tối thiểu là 10 triệu đồng và theo bội số 1 triệu đồng.",
      "Thời điểm giao dịch phụ thuộc ngày đáo hạn hoặc hạn bán của sản phẩm.",
      "Có phí giao dịch.",
      "Giao dịch mua bán thực hiện trong khung thời gian quy định, thường từ thứ 2 đến thứ 6 trong giờ hành chính.",
    ],
  },
];

const foreignExchangeSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      { type: "paragraph", text: "Mua ngoại tệ:", segments: [{ text: "Mua ngoại tệ:", emphasized: true }] },
      {
        type: "list",
        items: [
          "Khách hàng mua ngoại tệ từ ngân hàng hoặc tổ chức tài chính theo tỷ giá bán ra.",
          "Phục vụ nhu cầu thanh toán quốc tế, du lịch, du học, chuyển tiền ra nước ngoài.",
        ],
      },
      { type: "paragraph", text: "Bán ngoại tệ:", segments: [{ text: "Bán ngoại tệ:", emphasized: true }] },
      {
        type: "list",
        items: [
          "Khách hàng bán ngoại tệ cho ngân hàng theo tỷ giá mua vào.",
          "Chuyển đổi ngoại tệ sang nội tệ (VND).",
        ],
      },
      { type: "paragraph", text: "Tỷ giá", segments: [{ text: "Tỷ giá", emphasized: true }] },
      {
        type: "list",
        items: [
          "Tỷ giá mua vào / bán ra do ngân hàng niêm yết, dựa trên tỷ giá trung tâm của NHNN.",
          "Tỉ giá trên màn hình chỉ là tham khảo, tỉ giá cuối là khi ngân hàng thực hiện giao dịch.",
        ],
      },
    ],
  },
  {
    title: "Điều kiện",
    blocks: [
      { type: "paragraph", text: "Khách hàng cần:" },
      {
        type: "list",
        items: [
          "Có tài khoản ngoại tệ tại [BANK].",
          "Có đủ số dư ngoại tệ khả dụng.",
          "Có tài khoản VND để nhận tiền.",
          "Thực hiện trong thời gian giao dịch mà hệ thống hỗ trợ.",
        ],
      },
      { type: "paragraph", text: "Tại [BANK] công bố thời gian giao dịch:" },
      { type: "list", items: ["Thứ Hai đến Thứ Sáu: 8:00–17:30.", "Thứ Bảy: 8:00–12:00."] },
    ],
  },
  {
    title: "Hình thức",
    blocks: [
      {
        type: "paragraph",
        text: "Giao ngay (Spot): Mua/bán với tỷ giá hiện tại, thanh toán trong 2 ngày làm việc.",
        segments: [
          { text: "Giao ngay (Spot):", emphasized: true },
          { text: " Mua/bán với tỷ giá hiện tại, thanh toán trong 2 ngày làm việc." },
        ],
      },
      {
        type: "paragraph",
        text: "Kỳ hạn (Forward): Thỏa thuận tỷ giá trước, thực hiện tại thời điểm tương lai.",
        segments: [
          { text: "Kỳ hạn (Forward):", emphasized: true },
          { text: " Thỏa thuận tỷ giá trước, thực hiện tại thời điểm tương lai." },
        ],
      },
      {
        type: "paragraph",
        text: "Hoán đổi (Swap): Kết hợp mua và bán cùng loại ngoại tệ với kỳ hạn khác nhau.",
        segments: [
          { text: "Hoán đổi (Swap):", emphasized: true },
          { text: " Kết hợp mua và bán cùng loại ngoại tệ với kỳ hạn khác nhau." },
        ],
      },
      {
        type: "paragraph",
        text: "Quyền chọn (Option): Quyền mua/bán ngoại tệ tại tỷ giá thỏa thuận trước.",
        segments: [
          { text: "Quyền chọn (Option):", emphasized: true },
          { text: " Quyền mua/bán ngoại tệ tại tỷ giá thỏa thuận trước." },
        ],
      },
    ],
  },
];

const foreignTransferSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      { type: "paragraph", text: "Chuyển ngoại tệ có hai lựa chọn:" },
      {
        type: "list",
        items: [
          "Trong [BANK]: chuyển ngoại tệ đến tài khoản ngoại tệ mở tại [BANK].",
          "Ngoài [BANK]: chuyển đến tài khoản tại ngân hàng khác.",
        ],
      },
      {
        type: "paragraph",
        text: "Người nhận: Chỉ cho chọn tài khoản thụ hưởng đã được đăng ký/xác minh. Tìm kiếm tên công ty để chọn người nhận.",
        segments: [
          { text: "Người nhận:", emphasized: true },
          { text: " Chỉ cho chọn tài khoản thụ hưởng đã được đăng ký/xác minh. Tìm kiếm tên công ty để chọn người nhận." },
        ],
      },
      {
        type: "paragraph",
        text: "*Phí giao dịch cùng ngân hàng [BANK] miễn phí, khác ngân hàng tuỳ ngân hàng quyết định.",
      },
    ],
  },
];

const loanInterestFormulaSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "Lãi suất là tỷ lệ phần trăm dùng để tính số tiền người vay phải trả thêm cho ngân hàng, hoặc số tiền ngân hàng trả cho người gửi tiền.",
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/lai-suat-01.png",
        alt: "Công thức tính tiền lãi",
      },
      {
        type: "paragraph",
        text: "Giả sử:",
      },
      {
        type: "list",
        items: ["Vay: 300 triệu đồng.", "Thời gian sử dụng: 60 ngày.", "Lãi suất giả định: 7,5%/năm."],
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/lai-suat-02.png",
        alt: "Ví dụ tính tiền lãi",
      },
    ],
  },
];

const loanMarginSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "Biên độ = phần ngân hàng cộng thêm để bù chi phí, rủi ro và lợi nhuận mục tiêu.\nLãi suất vay = Lãi suất cơ sở + Biên độ",
        segments: [
          {
            text: "Biên độ = phần ngân hàng cộng thêm để bù chi phí, rủi ro và lợi nhuận mục tiêu.\n",
          },
          {
            text: "Lãi suất vay = Lãi suất cơ sở + Biên độ",
            emphasized: true,
          },
        ],
      },
      {
        type: "paragraph",
        text: "Biên độ thường phản ánh chi phí và mức rủi ro của khoản vay.",
      },
      {
        type: "list",
        items: [
          "Sản phẩm vay.",
          "Tài sản bảo đảm.",
          "Hồ sơ tín dụng của khách hàng.",
          "Thời hạn vay.",
          "Chính sách của ngân hàng.",
          "Mức độ gắn kết của khách hàng với ngân hàng.",
        ],
      },
      {
        type: "paragraph",
        text: "Tùy hợp đồng biên độ có sự thay đổi:",
      },
      {
        type: "list",
        items: [
          "Biên độ cố định: giữ nguyên trong suốt thời gian vay; chỉ lãi suất cơ sở thay đổi.",
          "Biên độ có điều kiện: có thể thay đổi khi khách hàng mất ưu đãi hoặc không còn đáp ứng điều kiện.",
          "Biên độ theo từng giai đoạn: mỗi giai đoạn của khoản vay có một mức khác nhau.",
        ],
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/bien-do-lai-suat-01.png",
        alt: "Ví dụ biên độ lãi suất",
      },
    ],
  },
];

const loanTermSections: DetailSection[] = [
  {
    title: "Tổng quan",
    blocks: [
      {
        type: "paragraph",
        text: "Thời hạn vay là khoảng thời gian tính từ ngày ACB giải ngân đến ngày khách hàng phải hoàn thành toàn bộ nghĩa vụ trả nợ theo hợp đồng.",
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/xac-dinh-han-vay-01.png",
        alt: "Ví dụ thời hạn vay",
      },
      {
        type: "paragraph",
        text: "Đến ngày 31/12/2026, khách hàng phải thanh toán hết phần gốc còn lại, lãi và các nghĩa vụ liên quan.",
      },
    ],
  },
  {
    title: "Nguyên tắc",
    blocks: [
      {
        type: "paragraph",
        text: "Thời hạn vay được duyệt = Giá trị nhỏ nhất của:",
        segments: [
          {
            text: "Thời hạn vay được duyệt = Giá trị nhỏ nhất của:",
            emphasized: true,
          },
        ],
      },
      {
        type: "ordered-list",
        items: [
          "Thời hạn khách hàng đề nghị;",
          "Thời hạn tối đa sản phẩm cho phép;",
          "Thời gian còn lại của sổ tiết kiệm;",
          "Các giới hạn khác theo chính sách và hồ sơ khách hàng.",
        ],
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/xac-dinh-han-vay-02.png",
        alt: "Nguyên tắc xác định hạn vay 1",
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/xac-dinh-han-vay-03.png",
        alt: "Nguyên tắc xác định hạn vay 2",
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/xac-dinh-han-vay-04.png",
        alt: "Nguyên tắc xác định hạn vay 3",
      },
      {
        type: "image",
        src: "/assets/figma/banking-basic/xac-dinh-han-vay-05.png",
        alt: "Nguyên tắc xác định hạn vay 4",
      },
    ],
  },
];

const repaymentPeriodSections: DetailSection[] = [
  {
    title: "Tổng quan",
    body: ["Là khoảng cách giữa các lần khách hàng phải thanh toán gốc hoặc lãi."],
  },
  {
    title: "Hình thức",
    blocks: [
      { type: "heading", text: "1. Trả cuối kỳ" },
      {
        type: "paragraph",
        text: "Phù hợp khi khách hàng dự kiến có tiền vào một thời điểm xác định.\nVí dụ:",
      },
      {
        type: "list",
        items: ["Ngày vay: 1/8.", "Ngày đáo hạn: 1/10.", "Đến 1/10 khách hàng trả toàn bộ gốc và lãi."],
      },
      { type: "heading", text: "2. Trả định kỳ" },
      { type: "list", items: ["Phù hợp khi khách hàng có dòng tiền đều:"] },
      { type: "heading", text: "3. Trả gốc định kỳ" },
      { type: "list", items: ["Trả một phần gốc theo lịch.", "Dư nợ giảm dần nên tiền lãi kỳ sau giảm theo."] },
    ],
  },
  {
    title: "Số kỳ",
    blocks: [
      {
        type: "paragraph",
        text: "Số kỳ của một khoản vay được quyết định chủ yếu bởi:\nSố kỳ = Thời hạn vay ÷ Tần suất trả nợ",
        segments: [
          {
            text: "Số kỳ của một khoản vay được quyết định chủ yếu bởi:\n",
          },
          {
            text: "Số kỳ = Thời hạn vay ÷ Tần suất trả nợ",
            emphasized: true,
          },
        ],
      },
      { type: "paragraph", text: "Ví dụ" },
      {
        type: "list",
        items: ["Thời hạn vay: 5 năm.", "Trả nợ hàng tháng.", "Số kỳ trả nợ: 5 × 12 = 60 kỳ."],
      },
    ],
  },
  {
    title: "Lãi suất",
    blocks: [
      {
        type: "paragraph",
        text: "Khoảng thời gian ngân hàng giữ nguyên mức lãi suất đang áp dụng, trước khi xác định lại lãi suất cho giai đoạn tiếp theo.\nVí dụ khoản vay quy định tái định lãi suất mỗi 3 tháng:",
      },
      {
        type: "list",
        items: [
          "01/01–31/03: Áp dụng 9%/năm.",
          "Ngày 01/04: [BANK] xác định lại lãi suất.",
          "01/04–30/06: Áp dụng mức lãi suất mới, chẳng hạn 9,5%/năm.",
          "Ngày 01/07: Tiếp tục tái định cho kỳ tiếp theo.",
        ],
      },
    ],
  },
  {
    title: "Phương thức trả nợ",
    blocks: [
      { type: "heading", text: "1. Gốc đều" },
      {
        type: "paragraph",
        text: "Tiền gốc được chia đều cho các kỳ:\nGốc mỗi kỳ = Dư nợ ban đầu ÷ Số kỳ\n\nLãi giảm dần vì dư nợ giảm sau mỗi kỳ.",
        segments: [
          {
            text: "Tiền gốc được chia đều cho các kỳ:\n",
          },
          {
            text: "Gốc mỗi kỳ = Dư nợ ban đầu ÷ Số kỳ\n",
            emphasized: true,
          },
          {
            text: "\nLãi giảm dần vì dư nợ giảm sau mỗi kỳ.",
          },
        ],
      },
      { type: "heading", text: "2. Trả góp đều" },
      {
        type: "paragraph",
        text: "Tổng số tiền trả mỗi kỳ tương đối bằng nhau. Trong những kỳ đầu:",
      },
      {
        type: "list",
        items: ["Phần lãi thường cao hơn.", "Phần gốc thấp hơn."],
      },
      {
        type: "paragraph",
        text: "Về sau phần gốc tăng và phần lãi giảm.",
      },
      { type: "heading", text: "3. Gốc cuối kỳ" },
      {
        type: "paragraph",
        text: "Trong thời gian vay, khách hàng có thể chỉ trả lãi; đến kỳ cuối mới trả toàn bộ tiền gốc.\nVẫn có nhiều kỳ thanh toán lãi, nhưng chỉ có một kỳ trả gốc lớn.",
      },
    ],
  },
  {
    title: "Tần suất trả nợ",
    blocks: [
      {
        type: "paragraph",
        text: "Sau khi xác định thời hạn, ngân hàng xác định khách hàng trả nợ theo:",
      },
      {
        type: "list",
        items: [
          "Hàng tháng.",
          "Hàng quý.",
          "Sáu tháng một lần.",
          "Theo mùa vụ.",
          "Trả gốc cuối kỳ, trả lãi định kỳ.",
          "Trả cả gốc và lãi đều mỗi kỳ.",
        ],
      },
      {
        type: "paragraph",
        text: "Ví dụ khoản vay 3 năm:",
      },
      {
        type: "list",
        items: ["Trả hàng tháng: 36 kỳ.", "Trả hàng quý: 12 kỳ.", "Trả sáu tháng một lần: 6 kỳ."],
      },
      {
        type: "paragraph",
        text: "Do đó, hai khoản vay cùng thời hạn nhưng có thể có số kỳ khác nhau.",
      },
    ],
  },
];

const bankingPosts: BankingPost[] = [
  {
    title: "Lãi suất",
    category: "Cơ bản",
    href: "#/banking-domain/lai-suat",
    coverSrc: "/assets/figma/banking-covers/lai-suat.svg",
    sections: loanInterestFormulaSections,
  },
  {
    title: "Biên độ lãi suất",
    category: "Cơ bản",
    href: "#/banking-domain/bien-do-lai-suat",
    coverSrc: "/assets/figma/banking-covers/bien-do-lai-suat.svg",
    sections: loanMarginSections,
  },
  {
    title: "Xác định hạn vay",
    category: "Cơ bản",
    href: "#/banking-domain/xac-dinh-han-vay",
    coverSrc: "/assets/figma/banking-covers/xac-dinh-han-vay.svg",
    sections: loanTermSections,
  },
  {
    title: "Kỳ hạn trả nợ",
    category: "Cơ bản",
    href: "#/banking-domain/ky-han-tra-no",
    coverSrc: "/assets/figma/banking-covers/ky-han-tra-no.svg",
    sections: repaymentPeriodSections,
  },
  {
    title: "Vay cầm cố tiền gửi",
    category: "Vay",
    href: "#/banking-domain/vay",
    coverSrc: "/assets/figma/banking-covers/vay-cam-co-tien-gui.svg",
    sections: pledgedDepositLoanSections,
  },
  {
    title: "Vay hạn mức thấu chi",
    category: "Vay",
    href: "#/banking-domain/vay-han-muc-thau-chi",
    coverSrc: "/assets/figma/banking-covers/vay-han-muc-thau-chi.svg",
    sections: overdraftLoanSections,
  },
  {
    title: "Tất toán khoản vay",
    category: "Vay",
    href: "#/banking-domain/tat-toan-khoan-vay",
    coverSrc: "/assets/figma/banking-covers/tat-toan-khoan-vay.svg",
    sections: loanSettlementSections,
  },
  {
    title: "Giảm lãi vay tự động",
    category: "Vay",
    href: "#/banking-domain/giam-lai-vay-tu-dong",
    coverSrc: "/assets/figma/banking-covers/giam-lai-vay-tu-dong.svg",
    sections: autoRateReductionSections,
  },
  {
    title: "Tín dụng",
    category: "Vay",
    href: "#/banking-domain/tin-dung",
    coverSrc: "/assets/figma/banking-covers/tin-dung.svg",
    sections: creditCardSections,
  },
  {
    title: "Chứng chỉ tiền gửi",
    category: "Đầu tư",
    href: "#/banking-domain/chung-chi-tien-gui",
    coverSrc: "/assets/figma/banking-covers/chung-chi-tien-gui.svg",
    sections: certificateOfDepositSections,
  },
  {
    title: "Trái phiếu doanh nghiệp",
    category: "Đầu tư",
    href: "#/banking-domain/trai-phieu-doanh-nghiep",
    coverSrc: "/assets/figma/banking-covers/trai-phieu-doanh-nghiep.svg",
    sections: corporateBondSections,
  },
  {
    title: "Mua và bán ngoại tệ T0",
    category: "Giao dịch ngoại tệ",
    href: "#/banking-domain/mua-ban-ngoai-te-t0",
    coverSrc: "/assets/figma/banking-covers/mua-ban-ngoai-te-t0.svg",
    sections: foreignExchangeSections,
  },
  {
    title: "Chuyển ngoại tệ",
    category: "Giao dịch ngoại tệ",
    href: "#/banking-domain/chuyen-ngoai-te",
    coverSrc: "/assets/figma/banking-covers/chuyen-ngoai-te.svg",
    sections: foreignTransferSections,
  },
];

const bankingSwitcherItemsByCategory = bankingPosts.reduce<Record<string, ArticleSwitcherItem[]>>((groups, post) => {
  groups[post.category] = [...(groups[post.category] ?? []), { title: post.title, href: post.href }];
  return groups;
}, {});

const bankingPostCards = bankingPosts.map((item, index) => ({
  title: item.title,
  href: item.href,
  coverSrc: item.coverSrc,
  topic: item.category,
  tone: getCardTone(index),
}));

const designTokenSections: DetailSection[] = [
  {
    title: "Design Token là gì?",
    blocks: [
      {
        type: "paragraph",
        text: "Khi sản phẩm còn nhỏ, designer có thể dùng trực tiếp các giá trị như #FFFFFF, 16px hay 8px trong từng màn hình. Nhưng khi số lượng màn hình, component và nền tảng tăng lên, việc quản lý những giá trị riêng lẻ này trở nên khó khăn.",
      },
      {
        type: "paragraph",
        text: "Design Token ra đời để giải quyết vấn đề đó. Một token là một quyết định thiết kế được biểu diễn dưới dạng dữ liệu, gồm một tên duy nhất và một giá trị tương ứng.",
        segments: [
          { text: "Design Token ra đời để giải quyết vấn đề đó. Một token là " },
          { text: "một quyết định thiết kế được biểu diễn dưới dạng dữ liệu", emphasized: true },
          { text: ", gồm một tên duy nhất và một giá trị tương ứng." },
        ],
      },
      {
        type: "paragraph",
        text: "Ví dụ, thay vì nói “hãy dùng màu #FFFFFF cho nền”, nhóm có thể nói “hãy dùng token background-default”. Cách gọi này giúp mọi người hiểu giá trị được dùng để làm gì, thay vì chỉ biết nó là một mã màu.",
      },
    ],
  },
  {
    title: "Vì sao sản phẩm cần Design Token?",
    blocks: [
      { type: "heading", text: "Giảm quyết định cảm tính" },
      {
        type: "paragraph",
        text: "Designer không phải lặp lại các câu hỏi như khoảng cách nên là 16px hay 20px, radius của button nên là bao nhiêu, hay màu description đang dùng là Neutral-700 hay Neutral-800.",
      },
      {
        type: "paragraph",
        text: "Token đưa các giá trị vào scale và quy tắc có sẵn. Ví dụ:\nradius-1x = 4px\nradius-2x = 8px\nradius-3x = 12px",
      },
      { type: "heading", text: "Tạo ngôn ngữ chung" },
      {
        type: "paragraph",
        text: "Semantic token như text-secondary hoặc background-error-hover giúp designer, developer và product team trao đổi bằng ý nghĩa thiết kế thay vì chỉ gọi tên màu hoặc mã kỹ thuật.",
      },
      { type: "heading", text: "Dễ áp dụng thay đổi trên nhiều nền tảng" },
      {
        type: "paragraph",
        text: "Một token như color-background-brand có thể chuyển thành CSS variable trên web, resource trên iOS hoặc Android. Giá trị kỹ thuật có thể khác nhau, nhưng ý nghĩa của token vẫn được giữ nguyên.",
      },
      { type: "heading", text: "Hỗ trợ theme và accessibility" },
      {
        type: "paragraph",
        text: "Component chỉ cần dùng background-default. Trong light mode token này có thể trỏ đến neutral-000, trong dark mode có thể trỏ đến neutral-900. Component không cần biết màu thực tế là gì.",
      },
    ],
  },
  {
    title: "Các lớp phổ biến",
    blocks: [
      {
        type: "paragraph",
        text: "Một hệ thống token thường có nhiều lớp: Value, Primitive Token, Semantic Token và Component-specific Token.",
      },
      {
        type: "heading",
        text: "Value",
      },
      {
        type: "paragraph",
        text: "Value là dữ liệu cuối cùng được dùng để hiển thị giao diện, ví dụ #FFFFFF, 16px, 100% hoặc rgba(0, 0, 0, 0.4).",
      },
      {
        type: "heading",
        text: "Primitive Token",
      },
      {
        type: "paragraph",
        text: "Primitive Token lưu trữ các giá trị nền tảng như neutral-000, neutral-900, spacing-200 hoặc radius-200. Lớp này mô tả giá trị là gì, nhưng chưa nói rõ nó được dùng ở đâu.",
      },
      {
        type: "heading",
        text: "Semantic Token",
      },
      {
        type: "paragraph",
        text: "Semantic Token mô tả vai trò của giá trị trong giao diện, chẳng hạn background-default, text-primary, border-subtle hoặc icon-disabled.",
      },
      {
        type: "heading",
        text: "Component-specific Token",
      },
      {
        type: "paragraph",
        text: "Component-specific Token được tạo cho một component cụ thể như button-background-hover, input-border-focus hoặc progress-track-background.",
      },
    ],
  },
  {
    title: "Kiến trúc token",
    blocks: [
      {
        type: "heading",
        text: "Primitive trực tiếp đến Semantic hoặc Component",
      },
      {
        type: "paragraph",
        text: "Cấu trúc button-background-default → neutral-000 → #FFFFFF đơn giản và dễ bắt đầu, nhưng khi hệ thống lớn hơn, component có thể phụ thuộc quá nhiều vào primitive.",
      },
      {
        type: "heading",
        text: "Primitive → Semantic → Component-specific",
      },
      {
        type: "paragraph",
        text: "Cấu trúc button-background-default → background-default → neutral-000 → #FFFFFF có thêm lớp semantic để thể hiện ý nghĩa. Đây là hướng phù hợp hơn với hệ thống cần nhiều theme, nhiều sản phẩm hoặc nhiều nền tảng.",
      },
    ],
  },
  {
    title: "Nguyên tắc sử dụng",
    blocks: [
      {
        type: "paragraph",
        text: "Không sử dụng hard-coded value trực tiếp trong component. Thay vì background: #FFFFFF, hãy dùng background: var(--button-background-default).",
      },
      {
        type: "paragraph",
        text: "Không để component phụ thuộc trực tiếp vào primitive khi không cần thiết. Button nên phụ thuộc vào ý nghĩa như background-default trước khi trỏ đến neutral-000.",
      },
      {
        type: "paragraph",
        text: "Ưu tiên Semantic Token cho các giá trị được dùng chung, có cùng ý nghĩa ở nhiều ngữ cảnh hoặc cần hỗ trợ theme.",
      },
      {
        type: "paragraph",
        text: "Chỉ dùng Component-specific Token khi component có yêu cầu riêng, semantic token hiện tại không mô tả đúng, hoặc component cần khả năng tùy chỉnh độc lập.",
      },
    ],
  },
  {
    title: "Kết luận",
    blocks: [
      {
        type: "paragraph",
        text: "Design Token không chỉ là việc đổi tên một mã màu hoặc một giá trị spacing. Đây là phương pháp biến các quyết định thiết kế thành dữ liệu có cấu trúc.",
      },
      {
        type: "list",
        items: [
          "Giúp hệ thống nhất quán hơn.",
          "Giúp designer và developer trao đổi dễ hơn.",
          "Giảm chi phí bảo trì khi giao diện thay đổi.",
          "Hỗ trợ nhiều theme, nhiều nền tảng và accessibility.",
        ],
      },
    ],
  },
];

const namingConventionSections: DetailSection[] = [
  {
    title: "Vì sao Naming Convention quan trọng?",
    blocks: [
      {
        type: "paragraph",
        text: "Một Design System có thể bắt đầu với vài chục token, nhưng nhanh chóng phát triển thành hàng trăm hoặc hàng nghìn token. Nếu mỗi thành viên đặt tên theo một cách khác nhau, hệ thống sẽ rất khó đọc và khó mở rộng.",
      },
      {
        type: "paragraph",
        text: "Những tên như primary-blue, blue-primary, button-blue, main-color hay brand-color-1 có thể cùng nói về một giá trị nhưng không thể hiện rõ token thuộc nhóm nào, được dùng ở đâu, có vai trò gì hoặc đang mô tả trạng thái nào.",
      },
      {
        type: "paragraph",
        text: "Naming Convention tạo ra một cấu trúc chung để mọi người có thể đọc, hiểu và dự đoán tên token.",
        segments: [
          { text: "Naming Convention tạo ra một cấu trúc chung để mọi người có thể " },
          { text: "đọc, hiểu và dự đoán tên token", emphasized: true },
          { text: "." },
        ],
      },
    ],
  },
  {
    title: "Tên token tốt truyền đạt ý nghĩa",
    blocks: [
      {
        type: "paragraph",
        text: "Tên token không nên chỉ mô tả giá trị hiện tại. Ví dụ blue-500 cho biết token liên quan đến màu xanh, nhưng không cho biết nó được dùng cho background, text, border hay icon.",
      },
      {
        type: "paragraph",
        text: "Ngược lại, color-background-brand cho biết đây là token màu sắc, được dùng cho background và có vai trò brand. Giá trị có thể thay đổi, nhưng mục đích của token vẫn ổn định.",
      },
    ],
  },
  {
    title: "Cấu trúc cơ bản",
    blocks: [
      {
        type: "paragraph",
        text: "Một cấu trúc dễ áp dụng là foundation-property-modifier. Ví dụ: color-background-error-hover.",
      },
      {
        type: "heading",
        text: "Foundation",
      },
      {
        type: "paragraph",
        text: "Foundation cho biết loại thuộc tính thiết kế như color, space, radius, elevation, font hoặc motion.",
      },
      {
        type: "heading",
        text: "Property",
      },
      {
        type: "paragraph",
        text: "Property cho biết token được áp dụng lên thuộc tính nào của giao diện như background, text, border, icon hoặc shadow.",
      },
      {
        type: "heading",
        text: "Modifier",
      },
      {
        type: "paragraph",
        text: "Modifier bổ sung vai trò, mức độ nhấn mạnh hoặc trạng thái tương tác như error, hover, disabled, subtle hoặc primary.",
      },
    ],
  },
  {
    title: "Mở rộng bằng câu hỏi",
    blocks: [
      {
        type: "paragraph",
        text: "Khi hệ thống lớn hơn, nhóm có thể xây dựng taxonomy dựa trên chuỗi câu hỏi: Where, What, Which, How và When.",
      },
      {
        type: "list",
        items: [
          "Where: token thuộc phạm vi nào, ví dụ system, product, brand hoặc theme.",
          "What: token mô tả thuộc tính nào, ví dụ color, font, space, border hoặc shadow.",
          "Which: token dành cho component hoặc vai trò nào, ví dụ button, input, primary, danger.",
          "How: token đang ở trạng thái nào, ví dụ default, hover, focus, pressed, disabled.",
          "When: token dùng trên loại surface nào, ví dụ on-light, on-dark, raised hoặc lowered.",
        ],
      },
      {
        type: "paragraph",
        text: "Mục tiêu không phải tạo tên dài nhất có thể, mà là tạo tên đủ thông tin để phân biệt token một cách rõ ràng.",
      },
    ],
  },
  {
    title: "Đặt tên theo từng lớp",
    blocks: [
      {
        type: "heading",
        text: "Primitive Token",
      },
      {
        type: "paragraph",
        text: "Primitive thường được đặt theo giá trị hoặc scale như color-neutral-000, color-neutral-900, space-100, space-200, radius-100 và radius-200.",
      },
      {
        type: "heading",
        text: "Semantic Token",
      },
      {
        type: "paragraph",
        text: "Semantic nên được đặt theo vai trò sử dụng như color-background-default, color-text-primary hoặc color-border-error. Không nên dùng tên theo màu thực tế như text-gray hoặc button-blue.",
      },
      {
        type: "heading",
        text: "Component-specific Token",
      },
      {
        type: "paragraph",
        text: "Component-specific cần thể hiện rõ component, property, role hoặc state, ví dụ button-background-primary-hover hoặc input-border-focus.",
      },
    ],
  },
  {
    title: "Nguyên tắc mở rộng",
    blocks: [
      {
        type: "list",
        items: [
          "Dùng cùng một thứ tự từ xuyên suốt hệ thống.",
          "Không đưa giá trị cụ thể vào Semantic Token.",
          "Chỉ thêm lớp thông tin khi cần thiết.",
          "Chọn một kiểu phân tách thống nhất.",
          "Tránh dùng nhiều từ đồng nghĩa cho cùng một ý nghĩa.",
          "Ưu tiên ngôn ngữ quen thuộc với cả designer và developer.",
        ],
      },
    ],
  },
  {
    title: "Viết mô tả cho token",
    blocks: [
      {
        type: "paragraph",
        text: "Tên token không cần chứa toàn bộ tài liệu sử dụng. Mỗi token nên có một mô tả ngắn, trả lời hai câu hỏi: token này đại diện cho điều gì và được dùng ở đâu.",
      },
      {
        type: "paragraph",
        text: "Ví dụ:\nToken: color-background-hover\nDescription: Màu nền cho trạng thái hover. Được dùng trên card, list item và table row có tương tác.",
      },
    ],
  },
  {
    title: "Kết luận",
    blocks: [
      {
        type: "paragraph",
        text: "Naming Convention không chỉ là quy tắc viết tên. Nó là cấu trúc ngôn ngữ của Design System.",
      },
      {
        type: "paragraph",
        text: "Một tên token tốt không cần mô tả mọi thứ. Nó chỉ cần truyền đạt đúng thông tin, đúng thứ tự và tuân theo một quy luật mà toàn bộ đội ngũ có thể hiểu và sử dụng.",
      },
    ],
  },
];

const designSystemCards = createCards(
  ["Design Token", "Naming Convention"],
  (title) => (title === "Design Token" ? "#/design-system/tokens" : "#/design-system/naming-convention"),
  (title) =>
    title === "Design Token"
      ? "Biến quyết định thiết kế thành dữ liệu có cấu trúc, dễ bảo trì và mở rộng."
      : "Cách đặt tên token rõ ràng, dễ nhớ và có thể dự đoán khi hệ thống lớn lên.",
);

const blogCards = createRepeatedCards(6, "Content blogs", "#/ux-bites/content-blogs");
const thinkingCards = createRepeatedCards(6, "Content blogs", "#/thinking/content-blogs");
const photographyCards = createRepeatedCards(6, "Ninh Thuận", "#/photography/ninh-thuan");

export const pageRoutes: PageRoute[] = [
  { kind: "home", path: "/", title: "Home" },
  {
    kind: "index",
    path: "/banking-domain",
    title: "Banking domain",
    layout: "grouped",
    cards: bankingPostCards,
  },
  {
    kind: "index",
    path: "/banking-domain/list",
    title: "Banking domain",
    layout: "grouped",
    cards: bankingPostCards,
  },
  ...bankingPosts.map((post) =>
    createArticleRoute(post.href.replace("#", ""), post.category, post.sections, {
      currentItemTitle: post.title,
      switcherItems: bankingSwitcherItemsByCategory[post.category],
    }),
  ),
  {
    kind: "index",
    path: "/design-system",
    title: "Design system",
    cards: designSystemCards,
  },
  createArticleRoute("/design-system/tokens", "Design Token", designTokenSections),
  createArticleRoute("/design-system/naming-convention", "Naming Convention", namingConventionSections),
  {
    kind: "index",
    path: "/ux-bites",
    title: "UX bites",
    cards: blogCards,
  },
  createArticleRoute("/ux-bites/content-blogs", "Content blogs", [genericOverview]),
  {
    kind: "index",
    path: "/thinking",
    title: "Thinking",
    cards: thinkingCards,
  },
  createArticleRoute("/thinking/content-blogs", "Content blogs", [genericOverview]),
  { kind: "info", path: "/info", title: "Info" },
  {
    kind: "index",
    path: "/photography",
    title: "Photography",
    cards: photographyCards,
  },
  createArticleRoute("/photography/ninh-thuan", "Ninh thuận", [
      {
        title: "My story",
        body: [
          "In the immortal words of Wu-Tang Clan \"Cash rules everything around me—CREAM. Get the money, dollar dollar bill y'all\". Replace the cash bit with money, the dollars with pounds and we approve this message. Whether we like it or not, money is a fundamental part of modern existence, enabling people to both get through the day-to-day and reach their life aspirations.",
        ],
      },
  ]),
  {
    kind: "index",
    path: "/projects",
    title: "Projects",
    layout: "project-list",
    cards: [
      {
        title: "Fishmap",
        href: "#/projects/fishmap",
        description:
          "In the immortal words of Wu-Tang Clan “Cash rules everything around me—CREAM. Get the money, dollar dollar bill y’all”. Replace the cash bit with money, the dollars with pounds and we approve this message. Whether we like it or not,",
        tone: "sage",
      },
      {
        title: "Fishmap",
        href: "#/projects/fishmap",
        description:
          "In the immortal words of Wu-Tang Clan “Cash rules everything around me—CREAM. Get the money, dollar dollar bill y’all”. Replace the cash bit with money, the dollars with pounds and we approve this message. Whether we like it or not,",
        tone: "cloud",
      },
    ],
  },
  {
    kind: "article",
    path: "/projects/fishmap",
    title: "Projects",
    sections: [
      {
        title: "Fishmap",
        body: ["In the immortal words of Wu-Tang Clan \"Cash rules everything around me—CREAM. Get the money, dollar dollar bill y'all\". Replace the cash bit with money, the dollars with pounds and we approve this message."],
        items: [
          { title: "Team", body: "1 Project manager, 2 Product Designers, 1 Mobile Devs, 1 Backend Devs, 1 QA Engineers" },
          { title: "Scope", body: "UX/UI mobile app design, Design system" },
          { title: "Methods", body: "User research, Wireframing, Prototyping" },
        ],
      },
      {
        title: "A little context",
        body: ["Fishmap is a social mobile app for people who enjoy fishing. Users can share catches, explore fishing spots, and view community data.", "My responsibilities was to build the product experience and make it easier to use."],
        image: { src: "/assets/content/fishmap-feature-4.png", alt: "Person fishing by a pond" },
      },
      {
        title: "My challenges",
        body: ["The app is a place where users can share achievements, discover and save fishing spots. It also tracks maps and weather conditions to help plan ideal fishing trips."],
        items: [
          { title: "User context", body: "Users often go fishing far from shore, where the internet connection is weak or unstable." },
          { title: "Time and weather understanding", body: "Fishing depends on time, tides, and weather. These factors affect the real experience and require clear understanding." },
          { title: "Deep dive research before design", body: "Handled UX/UI design, including user behavior research and competitor analysis to define the right features and solve user pain points." },
        ],
      },
      {
        title: "I wondered that",
        body: ["We anchored our decisions around a few key questions. Each design choice connects back to one of them."],
        items: [
          { title: "How can users post when they don't have internet?", body: "Save draft, post later, set reminder" },
          { title: "How can the product make money?", body: "Users don't like ads. When they search near fishing gear, we can suggest related products from partner shops." },
          { title: "What makes this app different from other social apps?", body: "Focus on features that help the app grow naturally and keep users coming back." },
        ],
      },
      {
        title: "The redesign, built on four key principles",
        items: [
          { title: "1. Put the solution on the first screen", body: "Make the main action visible from the start so users can access it quickly." },
          { title: "2. Design is not decoration", body: "Form and function should work together." },
          { title: "3. Reduce user cognitive load", body: "Make it easy to use by following familiar patterns." },
          { title: "4. Stay open to change", body: "Be ready to test, discuss, and improve the solution over time." },
        ],
      },
      {
        title: "Some highlights features",
        items: [
          { title: "Find good fishing spots before the trip", body: "Users can explore different locations and choose the best place to catch." },
          { title: "Make tracking simple and clear", body: "Infographics help users track their fishing time easily without guessing." },
          { title: "Connect with nearby anglers", body: "Users get updates about people fishing nearby and join the local activity." },
          { title: "Save catches without internet", body: "Users can log their catch even when there is no signal. The app will upload it later when they are online." },
        ],
      },
      {
        title: "Results",
        items: [
          { title: "100K+ users", body: "The app reached over 100,000 users from launch until now." },
          { title: "14M+ catches", body: "Users logged over 14 million catches in the system." },
        ],
        image: { src: "/assets/content/fishmap-hero.png", alt: "Fishmap result screen" },
      },
      {
        title: "What this taught me",
        body: ["To build a useful product that can survive in the market, we must understand both the product, the users, and the context they are in.", "Understand users — each person has a different context."],
      },
    ],
  },
];
