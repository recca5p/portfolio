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
    title: 'Kỹ sư Phần mềm Senior — AI ứng dụng & Backend',
    tagline: 'Backend Go và gRPC cho ANZ Plus. AI là cách tôi lên kế hoạch, viết và kiểm thử.',
    greeting: 'Võ Tấn Phát',
    heroSummary:
      'Tôi xây dựng dịch vụ Go và gRPC cho ANZ Plus: thanh toán, khiếu nại, hồ sơ khách hàng và chuyển tiền quốc tế. Cursor và Claude Code là cách tôi lên kế hoạch, viết và kiểm thử công việc đó.',
    emailCta: 'Gửi email',
    downloadCv: 'Tải CV',
    years: 'Hơn 6 năm',
    employer: 'ANZ qua HCLTech',
    summaryTitle: 'Sơ lược',
    bio: 'Kỹ sư phần mềm Senior với hơn 6 năm trên hệ thống production cho <strong>ANZ Bank</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>, cùng việc freelance song song công việc full-time cho Bolloré Logistics và IOGA.fr. Qua HCLTech Việt Nam, tôi xây dựng dịch vụ Go và gRPC cho ANZ Plus, và dịch vụ Go trên GCP cho việc chuyển dữ liệu Bifrost.',
    aiTitle: 'Cách tôi dùng AI',
    aiBody:
      'Tôi dùng Cursor và Claude Code mỗi ngày để viết code và kiểm thử, nên một thay đổi đến bước review sớm hơn. Với việc chuyển dữ liệu, tôi dùng AI hỗ trợ ánh xạ trường. Tôi cũng dùng AI học tri thức nghiệp vụ để hỗ trợ tư vấn khách hàng, và tại IOGA.fr một pipeline phiên âm video rồi dịch phụ đề.',
    metrics: [
      { value: '~30%', label: 'Đóng góp vào việc rút ngắn thời gian ra thị trường tại ANZ' },
      { value: '90%+', label: 'Độ phủ hợp đồng gRPC của IMT tại ANZ' },
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
          'AI hỗ trợ ánh xạ trường cho việc chuyển dữ liệu',
          'AI học tri thức nghiệp vụ để hỗ trợ tư vấn khách hàng',
          'Phiên âm video và dịch phụ đề tại IOGA.fr bằng Azure OpenAI và Azure AI Speech',
          'Gemini và Amazon Bedrock',
        ],
      },
      testing: {
        title: 'Kiểm thử và chất lượng',
        description: 'Go test, MSTest, Selenium, và cổng quét trên mỗi lần deploy.',
        details: [
          'Go testing cho hợp đồng gRPC, gồm IMT tại ANZ',
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
        description: 'Angular và TypeScript.',
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
      'Hệ thống ngân hàng, logistics, sản xuất và dầu khí, cùng pipeline phụ đề bằng LLM.',
    solo: 'Một mình',
  },
  contact: {
    title: 'Liên hệ',
    subtitle:
      'Sẵn sàng cho vị trí AI ứng dụng senior và backend senior. Làm việc tại Thành phố Hồ Chí Minh (GMT+7).',
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
