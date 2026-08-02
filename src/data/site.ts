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
    title: "About me",
    items: [
      { label: "Info", href: "#/info" },
      { label: "Photography", href: "#/photography" },
      { label: "Projects", href: "#/projects" },
    ],
  },
  {
    title: "Sharing",
    items: [
      { label: "Banking domain", href: "#/banking-domain" },
      { label: "Design system", href: "#/design-system" },
    ],
  },
  {
    title: "My thoughts",
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
      "\"Vay cầm cố tiền gửi\" rộng hơn \"vay cầm cố sổ tiết kiệm\". Sổ hoặc thẻ tiết kiệm chỉ là một loại tài sản thuộc nhóm này.",
    ],
  },
  genericOverview,
  {
    title: "Hạn mức vay",
    body: [
      "Theo nhu cầu vay vốn thực tế và lên đến 100% trị giá tài sản cầm cố.",
      "Cụm từ \"lên đến 100%\" không có nghĩa mọi khách hàng mặc nhiên được vay đúng 100%. Số tiền được duyệt còn phụ thuộc nhu cầu hợp lệ, loại tiền gửi, thời hạn còn lại và nghĩa vụ cần bảo đảm.",
    ],
  },
  {
    title: "Điều kiện",
    body: [
      "Mức vay tối đa 100 triệu/khách. Phải có sổ tiết kiệm. Số tiền vay không được vượt quá sổ tiết kiệm. Thời hạn vay là thời hạn còn lại của sổ tiết kiệm được chọn và không vượt quá 12 tháng.",
    ],
  },
  {
    title: "Trả trước",
    body: [
      "Khách hàng trả thêm một phần tiền gốc trước lịch. Sau đó ngân hàng có thể giảm số tiền phải trả mỗi kỳ nhưng giữ nguyên ngày kết thúc khoản vay, hoặc giữ gần như nguyên số tiền trả mỗi kỳ nhưng rút ngắn số kỳ còn lại.",
      "Ví dụ: dư nợ 500 triệu đồng, khách hàng trả trước 100 triệu đồng. Từ ngày hạch toán thành công, lãi các ngày tiếp theo chỉ tính trên khoảng 400 triệu đồng.",
    ],
  },
  {
    title: "Phí trả nợ trước hạn",
    body: [
      "Phí trả trước = Số tiền gốc trả trước x Tỷ lệ phí.",
      "Tỷ lệ phí thường phụ thuộc vào năm thứ mấy của khoản vay, loại sản phẩm vay, khoản trả trước một phần hay toàn bộ, nguồn tiền trả nợ, chính sách hoặc hợp đồng cụ thể.",
      "Phí có thể giảm dần theo thời gian, chẳng hạn năm đầu cao hơn và những năm sau thấp hơn.",
    ],
  },
  {
    title: "Tất toán",
    body: [
      "Nếu khách hàng trả đủ gốc, lãi và nghĩa vụ liên quan: khoản vay được tất toán, liên kết cầm cố được đóng và tiền gửi được giải tỏa.",
      "Nếu khách hàng không trả nợ: ngân hàng có quyền xử lý tài sản cầm cố theo hợp đồng và pháp luật. Tiền thu được dùng để thanh toán nghĩa vụ; phần còn dư, nếu có, được xử lý theo thỏa thuận và quy định áp dụng.",
      "Khách hàng không được tự hiểu rằng khoản vay sẽ kéo dài thêm.",
    ],
  },
];

const overdraftLoanSections: DetailSection[] = [
  {
    title: "Chi tiêu trước trả tiền sau",
    body: [
      "Khi tài khoản về 0đ, thanh toán vẫn được chấp nhận.",
      "Lãi suất chỉ phát sinh trên số tiền bạn đã chi vượt mức và tính theo số ngày thực tế tiền bị âm. Khi tài khoản có tiền, như lương về hoặc nạp tiền vào, hệ thống sẽ tự động trừ để cấn trừ nợ thấu chi.",
    ],
  },
  {
    title: "Có 2 loại",
    items: [
      { title: "Thấu chi tín chấp", body: "Dựa vào lương và lịch sử tín dụng." },
      { title: "Thấu chi thế chấp", body: "Dựa vào tài sản tiết kiệm hoặc bất động sản." },
    ],
  },
  {
    title: "Thời gian và điều kiện",
    body: [
      "Thời gian tối đa 12 tháng.",
      "Miễn phí lãi nếu thanh toán trước 17 giờ cùng ngày. Lãi 1.5% khi thanh toán sau 17h.",
      "Khách hàng là công dân Việt Nam trong độ tuổi quy định, thường từ 18 đến 65 hoặc 70 tuổi, có thu nhập ổn định hoặc tài sản bảo đảm hợp lệ, không có nợ xấu.",
      "Hồ sơ gồm giấy đề nghị cấp hạn mức thấu chi, CMND/CCCD còn hiệu lực và giấy tờ chứng minh thu nhập hoặc tài sản thế chấp.",
    ],
  },
];

const loanSettlementSections: DetailSection[] = [
  {
    title: "Trả trước một phần",
    body: [
      "Khách hàng trả thêm một phần tiền gốc trước lịch. Ngân hàng có thể giảm số tiền phải trả mỗi kỳ nhưng giữ nguyên ngày kết thúc khoản vay, hoặc giữ gần như nguyên số tiền trả mỗi kỳ nhưng rút ngắn số kỳ còn lại.",
      "Ví dụ: dư nợ 500 triệu đồng, khách hàng trả trước 100 triệu đồng. Từ ngày hạch toán thành công, lãi các ngày tiếp theo chỉ tính trên khoảng 400 triệu đồng.",
    ],
  },
  {
    title: "Tất toán toàn bộ",
    body: [
      "Khoản vay kết thúc khi khách hàng thanh toán đủ gốc còn lại, lãi phát sinh đến ngày tất toán, phí trả nợ trước hạn nếu có và các khoản phí liên quan theo hợp đồng.",
      "Sau khi tất toán, ngân hàng đóng nghĩa vụ khoản vay và giải tỏa tài sản bảo đảm theo quy định áp dụng.",
    ],
  },
  {
    title: "Phí trả nợ trước hạn",
    body: [
      "Phí trả trước = Số tiền gốc trả trước x Tỷ lệ phí.",
      "Tỷ lệ phí thường phụ thuộc vào sản phẩm vay, năm thứ mấy của khoản vay, khoản trả trước một phần hay toàn bộ, nguồn tiền trả nợ và chính sách trong từng hợp đồng.",
    ],
  },
];

const autoRateReductionSections: DetailSection[] = [
  {
    title: "Cơ chế giảm lãi",
    body: [
      "Giảm lãi suất vay tự động áp dụng cho khoản vay hiện hữu hoặc khoản vay mới khi khách hàng duy trì số dư không kỳ hạn bình quân theo điều kiện sản phẩm.",
      "Thời gian áp dụng thường theo từng kỳ tái định lãi suất, ví dụ 03 tháng cho mỗi kỳ.",
    ],
  },
  {
    title: "Điều kiện",
    body: [
      "Hệ thống ghi nhận số dư bình quân, đối chiếu với mức điều kiện và tự động xác định phần ưu đãi nếu khoản vay đủ tiêu chí.",
      "Ưu đãi có thể thay đổi theo chính sách, loại khoản vay, thời hạn còn lại và hồ sơ khách hàng.",
    ],
  },
];

const certificateOfDepositSections: DetailSection[] = [
  {
    title: "Chứng chỉ tiền gửi",
    body: [
      "[BANK] phát hành chứng chỉ tiền gửi với đơn vị tính mệnh giá, ví dụ 1 chứng chỉ tiền gửi = 1 triệu VND.",
      "Một lần phát hành thường theo lô, có lợi suất, ngày phát hành và ngày đáo hạn được xác định trước.",
    ],
  },
  {
    title: "Khác gì sổ tiết kiệm",
    body: [
      "Sổ tiết kiệm thường yêu cầu nắm giữ đến ngày đáo hạn để nhận đúng lãi suất kỳ hạn. Nếu rút trước hạn, khách hàng có thể chỉ nhận lãi không kỳ hạn.",
      "Chứng chỉ tiền gửi có thể được nắm giữ đến đáo hạn hoặc bán trước hạn theo cơ chế sản phẩm. Phần lãi nhận được phụ thuộc thời gian nắm giữ và quy định bán lại.",
    ],
  },
  {
    title: "Ngân hàng dùng vốn",
    body: [
      "Ngân hàng phát hành chứng chỉ tiền gửi để huy động vốn, phân bổ vốn cho hoạt động tín dụng hoặc đầu tư, sau đó thanh toán gốc và lãi cho khách hàng theo cam kết sản phẩm.",
    ],
  },
];

const corporateBondSections: DetailSection[] = [
  {
    title: "Trái phiếu doanh nghiệp",
    body: [
      "Trái phiếu doanh nghiệp là một loại chứng khoán có thời hạn từ 1 năm trở lên, do doanh nghiệp phát hành nhằm huy động vốn.",
      "Trái phiếu thể hiện cam kết của doanh nghiệp trong việc thanh toán nợ và bảo đảm quyền lợi hợp pháp cho người sở hữu.",
    ],
  },
  {
    title: "Điểm cần đọc",
    body: [
      "Khách hàng cần xem tổ chức phát hành, kỳ hạn, lãi suất, tài sản bảo đảm nếu có, phương thức trả lãi và điều kiện mua bán lại.",
      "Lợi suất cao hơn thường đi cùng mức rủi ro cao hơn, nên cần hiểu rõ khả năng trả nợ của doanh nghiệp phát hành.",
    ],
  },
];

const foreignExchangeSections: DetailSection[] = [
  {
    title: "Mua ngoại tệ",
    body: [
      "Khách hàng mua ngoại tệ từ ngân hàng theo tỷ giá bán ra để phục vụ nhu cầu thanh toán quốc tế, du lịch, du học hoặc chuyển tiền ra nước ngoài.",
    ],
  },
  {
    title: "Bán ngoại tệ",
    body: [
      "Khách hàng bán ngoại tệ cho ngân hàng theo tỷ giá mua vào để chuyển đổi ngoại tệ sang VND hoặc loại tiền được hỗ trợ.",
    ],
  },
  {
    title: "Tỷ giá",
    body: [
      "Tỷ giá mua vào và bán ra do ngân hàng niêm yết, tham chiếu theo thị trường và tỷ giá trung tâm của Ngân hàng Nhà nước.",
      "Tỷ giá trên màn hình chỉ mang tính tham khảo; tỷ giá cuối cùng là tỷ giá tại thời điểm ngân hàng thực hiện giao dịch.",
    ],
  },
];

const foreignTransferSections: DetailSection[] = [
  {
    title: "Chuyển ngoại tệ",
    body: [
      "Khách hàng chuyển ngoại tệ từ tài khoản ngoại tệ theo mục đích hợp lệ và trong phạm vi loại tiền được ngân hàng hỗ trợ.",
      "Giao dịch cần đủ số dư khả dụng, thông tin người nhận và chứng từ theo yêu cầu của từng mục đích chuyển tiền.",
    ],
  },
  {
    title: "Điều kiện",
    body: [
      "Khách hàng có tài khoản ngoại tệ tại ngân hàng, có đủ số dư ngoại tệ khả dụng và có tài khoản VND hoặc tài khoản liên quan để ghi nhận phí, chênh lệch hoặc khoản quy đổi nếu phát sinh.",
      "Thời gian xử lý phụ thuộc khung giờ giao dịch, loại ngoại tệ, kênh thực hiện và quy định kiểm soát ngoại hối.",
    ],
  },
];

const loanInterestFormulaSections: DetailSection[] = [
  {
    title: "Lãi suất",
    body: [
      "Lãi vay thường được tính theo dư nợ thực tế, lãi suất năm và số ngày sử dụng vốn.",
      "Công thức tham khảo: Tiền lãi = Dư nợ thực tế x Lãi suất năm x Số ngày vay / 365.",
    ],
  },
  {
    title: "Ví dụ",
    body: [
      "Giả sử khoản vay 300 triệu đồng, thời gian sử dụng vốn 60 ngày và lãi suất giả định 7,5%/năm.",
      "Tiền lãi tham khảo = 300.000.000 x 7,5% x 60 / 365. Kết quả thực tế phụ thuộc cách tính ngày, lịch trả nợ và điều khoản sản phẩm.",
    ],
  },
];

const loanMarginSections: DetailSection[] = [
  {
    title: "Biên độ lãi suất",
    body: [
      "Biên độ là phần ngân hàng cộng thêm để bù chi phí vốn, rủi ro và lợi nhuận mục tiêu.",
      "Lãi suất vay = Lãi suất cơ sở + Biên độ.",
    ],
  },
  {
    title: "Yếu tố ảnh hưởng",
    body: [
      "Biên độ phụ thuộc sản phẩm vay, tài sản bảo đảm, hồ sơ tín dụng, thời hạn vay, chính sách từng thời kỳ và quan hệ hiện hữu của khách hàng với ngân hàng.",
    ],
  },
  {
    title: "Cách áp dụng",
    body: [
      "Biên độ có thể cố định, có điều kiện hoặc thay đổi theo từng giai đoạn của khoản vay.",
    ],
  },
];

const loanTermSections: DetailSection[] = [
  {
    title: "Xác định hạn vay",
    body: [
      "Thời hạn vay được xác định dựa trên mục đích vay, loại tài sản bảo đảm, dòng tiền trả nợ và quy định tối đa của từng sản phẩm.",
      "Ngân hàng cần bảo đảm thời hạn vay phù hợp với khả năng trả nợ thực tế, thay vì chỉ dựa vào mong muốn của khách hàng.",
    ],
  },
  {
    title: "Dựa trên dòng tiền",
    body: [
      "Nếu nguồn trả nợ đến từ lương hoặc thu nhập định kỳ, kỳ hạn thường được thiết kế để số tiền trả mỗi kỳ không vượt quá khả năng tài chính của khách hàng.",
      "Nếu nguồn trả nợ theo mùa vụ hoặc dòng tiền kinh doanh, lịch trả nợ có thể được chia theo chu kỳ phù hợp hơn.",
    ],
  },
];

const repaymentPeriodSections: DetailSection[] = [
  {
    title: "Số kỳ trả nợ",
    body: [
      "Số kỳ = Thời hạn vay / Tần suất trả nợ. Ví dụ: khoản vay 5 năm trả hàng tháng sẽ có 60 kỳ.",
      "Sau khi xác định thời hạn, ngân hàng xác định khách hàng trả nợ hàng tháng, hàng quý, sáu tháng một lần, theo mùa vụ hoặc trả gốc cuối kỳ và trả lãi định kỳ.",
    ],
  },
  {
    title: "Cách chia tiền trả",
    body: [
      "Tiền gốc có thể được chia đều cho các kỳ, hoặc tổng số tiền trả mỗi kỳ tương đối bằng nhau tùy phương thức trả nợ.",
      "Trong một số khoản vay, khách hàng có thể chỉ trả lãi trong thời gian vay và trả toàn bộ gốc ở kỳ cuối.",
    ],
  },
  {
    title: "Tái định lãi suất",
    body: [
      "Kỳ tái định lãi suất là khoảng thời gian ngân hàng giữ nguyên lãi suất trước khi cập nhật theo công thức hoặc chính sách mới, ví dụ mỗi 3 tháng.",
    ],
  },
];

const bankingPosts: BankingPost[] = [
  {
    title: "Lãi suất",
    category: "Cơ bản",
    href: "#/banking-domain/lai-suat",
    coverSrc: "/assets/figma/banking-covers/lai-suat.png",
    sections: loanInterestFormulaSections,
  },
  {
    title: "Biên độ lãi suất",
    category: "Cơ bản",
    href: "#/banking-domain/bien-do-lai-suat",
    coverSrc: "/assets/figma/banking-covers/bien-do-lai-suat.png",
    sections: loanMarginSections,
  },
  {
    title: "Xác định hạn vay",
    category: "Cơ bản",
    href: "#/banking-domain/xac-dinh-han-vay",
    coverSrc: "/assets/figma/banking-covers/xac-dinh-han-vay.png",
    sections: loanTermSections,
  },
  {
    title: "Kỳ hạn trả nợ",
    category: "Cơ bản",
    href: "#/banking-domain/ky-han-tra-no",
    coverSrc: "/assets/figma/banking-covers/ky-han-tra-no.png",
    sections: repaymentPeriodSections,
  },
  {
    title: "Vay cầm cố tiền gửi",
    category: "Vay",
    href: "#/banking-domain/vay",
    coverSrc: "/assets/figma/banking-covers/vay-cam-co-tien-gui.png",
    sections: pledgedDepositLoanSections,
  },
  {
    title: "Vay hạn mức thấu chi",
    category: "Vay",
    href: "#/banking-domain/vay-han-muc-thau-chi",
    coverSrc: "/assets/figma/banking-covers/vay-han-muc-thau-chi.png",
    sections: overdraftLoanSections,
  },
  {
    title: "Tất toán khoản vay",
    category: "Vay",
    href: "#/banking-domain/tat-toan-khoan-vay",
    coverSrc: "/assets/figma/banking-covers/tat-toan-khoan-vay.png",
    sections: loanSettlementSections,
  },
  {
    title: "Giảm lãi vay tự động",
    category: "Vay",
    href: "#/banking-domain/giam-lai-vay-tu-dong",
    coverSrc: "/assets/figma/banking-covers/giam-lai-vay-tu-dong.png",
    sections: autoRateReductionSections,
  },
  {
    title: "Chứng chỉ tiền gửi",
    category: "Đầu tư",
    href: "#/banking-domain/chung-chi-tien-gui",
    coverSrc: "/assets/figma/banking-covers/chung-chi-tien-gui.png",
    sections: certificateOfDepositSections,
  },
  {
    title: "Trái phiếu doanh nghiệp",
    category: "Đầu tư",
    href: "#/banking-domain/trai-phieu-doanh-nghiep",
    coverSrc: "/assets/figma/banking-covers/trai-phieu-doanh-nghiep.png",
    sections: corporateBondSections,
  },
  {
    title: "Mua và bán ngoại tệ T0",
    category: "Giao dịch ngoại tệ",
    href: "#/banking-domain/mua-ban-ngoai-te-t0",
    coverSrc: "/assets/figma/banking-covers/mua-ban-ngoai-te-t0.png",
    sections: foreignExchangeSections,
  },
  {
    title: "Chuyển ngoại tệ",
    category: "Giao dịch ngoại tệ",
    href: "#/banking-domain/chuyen-ngoai-te",
    coverSrc: "/assets/figma/banking-covers/chuyen-ngoai-te.png",
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

const designSystemCards = createCards(
  ["Tokens", "Atomic component", "Naming convention", "Organize file Figma", "Multiple themes / brands", "Principals"],
  (title) => (title === "Tokens" ? "#/design-system/tokens" : "#/design-system"),
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
  createArticleRoute("/design-system/tokens", "Tokens", [genericOverview]),
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
