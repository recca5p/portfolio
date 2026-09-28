export const vi = {
  nav: {
    home: 'Trang chủ',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
    menu: 'Menu',
    close: 'Đóng',
  },
  home: {
    title: 'Kỹ sư Phần mềm Senior - AI ứng dụng & Backend',
    tagline: 'Backend Go, gRPC và .NET cho ngân hàng, với AI agent trong công việc hằng ngày',
    greeting: 'Võ Tấn Phát',
    heroSummary:
      'Tôi xây dịch vụ backend cho ANZ Plus, ngân hàng số của ANZ, và dùng hệ sinh thái Claude Code để lên kế hoạch, viết và kiểm thử nhanh hơn.',
    experienceCta: 'Xem kinh nghiệm',
    emailCta: 'Gửi email',
    downloadCv: 'Tải CV',
    years: 'Hơn 6 năm',
    employer: 'ANZ qua HCLTech',
    summaryTitle: 'Sơ lược',
    bio: 'Kỹ sư phần mềm Senior với hơn 6 năm làm hệ thống production cho <strong>ANZ Bank</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>, cùng các dự án freelance cho Bolloré Logistics, IOGA.fr và một số khách hàng khác. Hiện tôi làm trong nhóm backend ANZ Plus thông qua HCLTech Việt Nam: dịch vụ Go và gRPC trên GCP cho PayID, PayTo, khiếu nại giao dịch, tự phục vụ và hồ sơ khách hàng, cùng dự án Bifrost chuyển dữ liệu khách hàng và tài khoản từ ANZ classic và Suncorp Bank sang ANZ Plus. Lập trình với AI agent qua hệ sinh thái Claude Code là một phần công việc hằng ngày của tôi, từ viết code, refactor đến sinh test. Kết quả đã ghi nhận: rút ngắn khoảng 30% thời gian đưa tính năng ra thị trường và độ phủ test trên 90% cho hợp đồng gRPC tại ANZ, tìm kiếm tài liệu nhanh gấp 20 lần tại Halliburton, và giảm hơn 60% chi phí observability tại Bolloré.',
    metrics: [
      { value: '~30%', label: 'Rút ngắn thời gian ra thị trường tại ANZ (quy trình có AI hỗ trợ)' },
      { value: '20x', label: 'Tìm kiếm tài liệu nhanh hơn, Halliburton' },
      { value: '>60%', label: 'Giảm chi phí observability, Bolloré' },
    ],
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
    publicContext: 'Bối cảnh công khai',
    source: 'Nguồn',
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    categories: {
      backend: {
        title: 'Backend và kiến trúc',
        description: 'Dịch vụ Go, .NET và Java, với gRPC, REST và thiết kế event-driven.',
        details: [
          'Ngôn ngữ: Go, C# / .NET (ASP.NET Core, EF Core, ABP Framework), Java (Spring Boot), Python',
          'API: gRPC (Protobuf) và REST',
          'Kiến trúc: microservices, event-driven, DDD, onion architecture',
          'Chịu lỗi: retry và circuit breaker',
          'Cache với Redis',
          'Xử lý đồng thời (concurrency) và lập trình bất đồng bộ',
        ],
      },
      database: {
        title: 'Cơ sở dữ liệu và messaging',
        description: 'Cơ sở dữ liệu quan hệ và message broker dùng trong production.',
        details: [
          'PostgreSQL, SQL Server, Oracle, BigQuery, DynamoDB, LiteDB',
          'Truy vấn: indexing và stored procedure',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead Letter Queue',
        ],
      },
      cloud: {
        title: 'Cloud và DevOps',
        description: 'GCP, Azure và AWS, với container và CI trên các nền tảng đang dùng.',
        details: [
          'GCP: GKE, Cloud Run, Pub/Sub, BigQuery',
          'Azure: Service Bus, Azure SQL, Azure AD, DevOps, OpenAI, AI Speech',
          'AWS: Lambda, DynamoDB, S3, ECS, EKS',
          'Docker, Kubernetes, Helm',
          'CI/CD: GitHub Actions, Azure DevOps, Jenkins',
        ],
      },
      ai: {
        title: 'AI ứng dụng',
        description: 'Lập trình agentic, test có AI hỗ trợ, và bước LLM trong pipeline backend.',
        details: [
          'Lập trình agentic với hệ sinh thái Claude Code: lên kế hoạch, boilerplate và refactor',
          'Sinh unit test và contract test bằng AI, rồi rà soát trước khi gộp',
          'Tích hợp LLM trong pipeline backend: Azure OpenAI và Azure AI Speech trên production tại IOGA.fr, và Anthropic Claude',
          'Thiết kế prompt và ngữ cảnh cho việc sinh code và test',
        ],
      },
      testing: {
        title: 'Kiểm thử và chất lượng',
        description: 'Go test, MSTest, Selenium, và cổng quét trên mỗi lần deploy.',
        details: [
          'Go testing (độ phủ trên 90% cho hợp đồng gRPC của IMT tại ANZ)',
          'Unit test và integration test bằng MSTest',
          'Bộ kiểm thử đầu-cuối bằng Selenium WebDriver',
          'Cổng SonarQube và Fortify',
          'Kiểm tra OWASP và OpenTelemetry',
          'TDD trên dịch vụ ngân hàng',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Angular và TypeScript trên các ứng dụng web trong phần việc này.',
        details: ['Angular', 'TypeScript'],
      },
    },
  },
  education: {
    title: 'Học vấn',
    school: 'Trường Đại học Tôn Đức Thắng',
    degree: 'Cử nhân Công nghệ Thông tin',
    location: 'Thành phố Hồ Chí Minh, Việt Nam',
    certTitle: 'Chứng chỉ và ngôn ngữ',
    englishProficiency: 'Tiếng Anh',
  },
  projects: {
    title: 'Dự án tiêu biểu',
    subtitle:
      'Hệ thống ngân hàng, logistics, sản xuất và dầu khí, cùng các dự án AI ứng dụng như pipeline phụ đề bằng LLM.',
    viewAll: 'Xem tất cả dự án',
    viewAllSubtitle:
      'Hệ thống ngân hàng, logistics, sản xuất và dầu khí, cùng các dự án AI ứng dụng như pipeline phụ đề bằng LLM.',
    solo: 'Một mình',
    team: 'Nhóm',
  },
  contact: {
    title: 'Liên hệ',
    subtitle: 'Email, LinkedIn, GitHub, WhatsApp hoặc Zalo.',
    scanToChat: 'Quét để nhắn tin',
    showQr: 'Hiện mã QR',
    copyEmail: 'Sao chép email',
    copied: 'Đã chép',
  },
  footer: {
    rights: 'Bảo lưu mọi quyền.',
    backToTop: 'Lên đầu trang',
  },
  notFound: {
    title: 'Không tìm thấy trang',
    body: 'Địa chỉ này không có trên trang.',
    home: 'Trang tiếng Anh',
    homeVi: 'Trang tiếng Việt',
    projects: 'Dự án tiếng Anh',
    projectsVi: 'Dự án tiếng Việt',
  },
};
