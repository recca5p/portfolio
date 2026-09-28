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
    title: 'Kỹ sư phần mềm senior — AI ứng dụng & Backend',
    tagline: 'Dịch vụ backend Go, Java và .NET cho thanh toán ngân hàng và logistics.',
    greeting: 'Võ Tấn Phát',
    heroSummary:
      'Tôi xây dựng dịch vụ Go và gRPC cho ANZ Plus, gồm thanh toán, khiếu nại, hồ sơ khách hàng và chuyển tiền quốc tế. Cursor và Claude Code là công cụ tôi dùng để lên kế hoạch, viết và kiểm thử phần việc đó.',
    emailCta: 'Gửi email',
    downloadCv: 'Tải CV',
    years: 'Hơn 6 năm',
    employer: 'ANZ qua HCLTech',
    summaryTitle: 'Sơ lược',
    bio: 'Kỹ sư phần mềm senior với hơn 6 năm trên hệ thống production cho <strong>ANZ Bank</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>, cùng việc freelance song song công việc full-time cho Bolloré Logistics và IOGA.fr. Qua HCLTech Việt Nam, tôi xây dựng dịch vụ Go và gRPC cho ANZ Plus, và dịch vụ Go trên GCP cho việc chuyển dữ liệu Bifrost.',
    aiTitle: 'Cách tôi dùng AI',
    aiBody:
      'Tôi dùng Cursor và Claude Code mỗi ngày để viết code và kiểm thử, nên thay đổi được đưa vào review sớm hơn. Tôi dùng AI để ánh xạ trường tự động, và AI học một miền nghiệp vụ để hỗ trợ tư vấn khách hàng. Tại IOGA.fr, một pipeline phiên âm video rồi dịch phụ đề.',
    metrics: [
      { value: '~30%', label: 'Đóng góp vào việc rút ngắn thời gian ra thị trường tại ANZ' },
      { value: '90%+', label: 'Độ phủ test giao diện gRPC của IMT tại ANZ' },
      { value: '20x', label: 'Tìm kiếm tài liệu nhanh hơn, Halliburton' },
      { value: '>60%', label: 'Giảm chi phí observability, Bolloré' },
    ],
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
    publicContext: 'Thông tin công khai',
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
        description: 'Cơ sở dữ liệu quan hệ và message broker.',
        details: [
          'PostgreSQL, SQL Server, Oracle, BigQuery, DynamoDB, LiteDB',
          'Truy vấn: indexing và stored procedure',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead Letter Queue',
        ],
      },
      cloud: {
        title: 'Cloud và DevOps',
        description: 'GCP, Azure, AWS, container và CI.',
        details: [
          'GCP: GKE, Cloud Run, Pub/Sub, BigQuery',
          'Azure: Service Bus, Azure SQL, Azure AD, DevOps, OpenAI, AI Speech',
          'AWS: Lambda, DynamoDB, S3, ECS, EKS',
          'Docker, Kubernetes, Helm, Terraform',
          'CI/CD: GitHub Actions, Azure DevOps, Jenkins',
          'OpenTelemetry',
        ],
      },
      ai: {
        title: 'AI ứng dụng',
        description:
          'Viết code và kiểm thử hằng ngày, ánh xạ trường, hỗ trợ nghiệp vụ, và phụ đề video.',
        details: [
          'Cursor và Claude Code, dùng mỗi ngày để viết code và kiểm thử',
          'Ánh xạ trường tự động có AI hỗ trợ',
          'AI học một miền nghiệp vụ để hỗ trợ tư vấn khách hàng',
          'Phiên âm video và dịch phụ đề tại IOGA.fr bằng Azure OpenAI và Azure AI Speech',
          'Gemini và Amazon Bedrock, dùng cho ánh xạ trường tự động có AI hỗ trợ, và cho phiên âm cùng dịch thuật',
        ],
      },
      testing: {
        title: 'Kiểm thử và chất lượng',
        description: 'Go test, MSTest, Selenium và các cổng kiểm tra khi deploy.',
        details: [
          'Go testing cho giao diện gRPC, gồm IMT tại ANZ',
          'Unit test và integration test bằng MSTest',
          'Kiểm thử end-to-end bằng Selenium WebDriver',
          'Cổng SonarQube và Fortify',
          'JMeter',
          'Kiểm tra OWASP',
          'TDD trên dịch vụ ngân hàng',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Màn hình Angular cho hóa đơn điện tử Sacombank và ERP trung tâm Apollo.',
        details: [
          'Hệ thống hóa đơn điện tử Sacombank trên ABP Framework',
          'Apollo ERP cho CRM, lớp học và thanh toán',
        ],
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
      'Hệ thống ngân hàng, logistics, sản xuất và dầu khí, cùng pipeline phụ đề bằng LLM.',
    solo: 'Một mình',
  },
  contact: {
    title: 'Liên hệ',
    subtitle:
      'Đang mở cho vị trí senior về AI ứng dụng và backend. Làm việc tại TP. Hồ Chí Minh (GMT+7).',
    scanToChat: 'Quét để nhắn tin',
    showQr: 'Hiện mã QR',
    copyEmail: 'Sao chép email',
    copied: 'Đã sao chép',
    copyFallback: 'Đã chọn. Nhấn Ctrl+C hoặc Cmd+C.',
  },
  footer: {
    rights: 'Mọi quyền được bảo lưu.',
    backToTop: 'Lên đầu trang',
  },
  notFound: {
    title: 'Không tìm thấy trang',
    body: 'Không có trang nào ở địa chỉ này.',
    home: 'Trang tiếng Anh',
    homeVi: 'Trang tiếng Việt',
    projects: 'Dự án tiếng Anh',
    projectsVi: 'Dự án tiếng Việt',
  },
};
