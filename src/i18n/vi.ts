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
    title: 'Kỹ sư backend senior — .NET & Go · DevOps & Cloud · AI ứng dụng',
    tagline: 'Ngân hàng (ANZ, Sacombank) và năng lượng (Halliburton, Tally Group).',
    greeting: 'Võ Tấn Phát',
    heroSummary:
      'Tôi xây dựng dịch vụ .NET, Go và Java cho ngân hàng và năng lượng, trên AWS, Azure và GCP. Tại ANZ, tôi xây dựng dịch vụ Go và gRPC cho ANZ Plus, gồm thanh toán, khiếu nại, hồ sơ khách hàng và chuyển tiền quốc tế, và lên kế hoạch cùng kiểm thử bằng Claude Code.',
    emailCta: 'Gửi email',
    downloadCv: 'Tải CV',
    years: 'Hơn 6 năm',
    employer: 'ANZ qua HCLTech',
    summaryTitle: 'Sơ lược',
    bio: 'Kỹ sư backend senior với hơn 6 năm xây dựng dịch vụ .NET, Go và Java cho ngân hàng và năng lượng, trên AWS, Azure và GCP. Vai trò chính: <strong>ANZ Bank</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>. <strong>Tally Group</strong> (bán lẻ năng lượng tại Úc) là kinh nghiệm bổ sung, song song với các vai trò đó. Tôi bắt đầu với hệ thống ngân hàng tại Sacombank, rồi phần mềm dầu khí tại Halliburton, và hiện làm ngân hàng số tại ANZ. Việc freelance song song gồm Bolloré Logistics và IOGA.fr.',
    aiTitle: 'Cách tôi dùng AI',
    aiBody:
      'Claude Code là công cụ chính của tôi sau GitHub Copilot. Tại ANZ, tôi dùng nó để lên kế hoạch, tái cấu trúc, viết unit test và xử lý trường hợp biên của gRPC, và chia sẻ skills, templates và hooks với các nhóm khác. Tôi cũng dùng AI để ánh xạ trường tự động. Tại IOGA.fr, Azure OpenAI và Azure AI Speech phiên âm video rồi dịch phụ đề. Pipeline đã xử lý hơn 500 giờ, với thời gian giảm khoảng 70%.',
    metrics: [
      { value: '~2x', label: 'Giao tính năng tại ANZ, từ một sprint còn khoảng 3 ngày' },
      { value: '90%+', label: 'Độ phủ test giao diện gRPC của IMT tại ANZ' },
      { value: '20x', label: 'Tìm kiếm tài liệu nhanh hơn, Halliburton' },
      { value: '>60%', label: 'Giảm chi phí observability, Bolloré' },
    ],
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
    additionalTitle: 'Kinh nghiệm bổ sung',
    additionalNote:
      'Song song với các vai trò tại ANZ, Halliburton và Sacombank. Tally Group là mảng bán lẻ năng lượng tại Úc.',
    publicContext: 'Thông tin công khai',
    source: 'Nguồn',
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    categories: {
      ai: {
        title: 'AI ứng dụng',
        description:
          'Claude Code cho việc viết code hằng ngày, quy trình dùng chung, và tính năng LLM trong sản phẩm.',
        details: [
          'Viết code với agent: Claude Code là công cụ chính sau GitHub Copilot. Tại ANZ, nó dùng cho kế hoạch, tái cấu trúc, unit test và trường hợp biên của gRPC. Khoảng 80% pull request đó được viết bằng công cụ này.',
          'Quy trình dùng chung: skills, templates và hooks của Claude Code giữa các nhóm, và unit test do AI soạn cho giao diện gRPC của IMT.',
          'Sản phẩm LLM: Azure OpenAI (GPT) và Azure AI Speech để phiên âm video và dịch phụ đề. Ánh xạ trường tự động bằng AI. API Gemini và Amazon Bedrock.',
        ],
      },
      backend: {
        title: 'Backend: .NET và Go',
        description: 'Dịch vụ .NET và Go, cùng Java và Node.js, với gRPC, REST và CQRS.',
        details: [
          '.NET / C#: .NET 10, .NET 8 và .NET Core, ASP.NET Core Web API, EF Core, Dapper, ABP Framework. .NET 8 trên AWS Lambda.',
          'Dịch vụ: MassTransit (Mediator và Azure Service Bus), FluentValidation, Polly, Serilog, Quartz, SignalR.',
          'Test .NET: xUnit, Moq, MSTest và Testcontainers.',
          'Go: gRPC và Protobuf cho thanh toán và chuyển dữ liệu ANZ Plus. Gin REST và GraphQL, sqlc, golang-migrate, PASETO, testify và testcontainers-go.',
          'Cùng Java (Play và Spring Boot), Node.js và Python.',
          'Kiến trúc: microservices, event-driven, CQRS, Clean và Onion architecture, DDD, Repository và Unit of Work, SOLID. Bộ lọc truy vấn đa tenant đóng khi thiếu tenant (fail closed) và RBAC. Transactional outbox, idempotency key, optimistic concurrency, retry, circuit breaker và dead-letter queue. gRPC theo hợp đồng trước.',
        ],
      },
      cloud: {
        title: 'DevOps và Cloud',
        description: 'AWS, Azure và GCP, với container và CI/CD.',
        details: [
          'AWS: Lambda, SQS, S3, ECR, ECS, EKS, Secrets Manager.',
          'Azure: App Service, Functions, APIM, Azure SQL, Blob, Service Bus, Azure AD.',
          'GCP: Cloud Run, GKE, Pub/Sub, BigQuery. Auth0 SSO.',
          'Container và IaC: Docker, docker-compose, Kubernetes (GKE và EKS), Helm, Terraform.',
          'CI/CD: GitHub Actions, GitLab CI (cổng độ phủ 80%, SAST, quét secret), Azure DevOps và Jenkins với cổng SonarQube, Fortify và OWASP.',
          'Độ tin cậy: OpenTelemetry sang Splunk, theo dõi độ trễ p95/p99, kiểm thử tải bằng JMeter. Chuyển SQL Server sang Azure SQL, và RabbitMQ sang Azure Service Bus.',
          'Bộ kiểm thử end-to-end bằng Selenium WebDriver.',
        ],
      },
      database: {
        title: 'Dữ liệu và messaging',
        description: 'Cơ sở dữ liệu quan hệ, migration và message broker.',
        details: [
          'SQL Server, MySQL 8, PostgreSQL, Oracle và Azure SQL, gồm stored procedure, function, trigger và tối ưu truy vấn.',
          'Migration: Flyway và EF Core. Truy cập dữ liệu bằng Dapper.',
          'MongoDB, DynamoDB, BigQuery, Snowflake, LiteDB và Redis.',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub và SQS.',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Giao diện hỗ trợ cho tính cước, CRM và ứng dụng di động.',
        details: [
          'Next.js 16, React 19, TypeScript, RTK Query và Tailwind.',
          'Angular 12 với NgRx, và Angular.',
          'React Native. Dẫn dắt việc chuyển từ Xamarin sang React Native.',
        ],
      },
    },
  },
  education: {
    title: 'Học vấn',
    school: 'Trường Đại học Tôn Đức Thắng',
    degree: 'Cử nhân Công nghệ Thông tin',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    certTitle: 'Chứng chỉ và ngôn ngữ',
    englishProficiency: 'Tiếng Anh',
  },
  projects: {
    title: 'Dự án tiêu biểu',
    subtitle:
      'Hệ thống ngân hàng và năng lượng, gồm bán lẻ năng lượng tại Úc, cùng logistics, sản xuất và AI ứng dụng.',
    viewAll: 'Xem tất cả dự án',
    viewAllSubtitle:
      'Hệ thống ngân hàng, năng lượng, logistics và sản xuất, cùng pipeline phụ đề bằng LLM.',
    solo: 'Một mình',
    allTitle: 'Dự án',
  },
  contact: {
    title: 'Liên hệ',
    subtitle:
      'Đang mở cho vị trí backend (.NET hoặc Go) và DevOps có áp dụng AI. Làm việc tại TP. Hồ Chí Minh (GMT+7).',
    scanToChat: 'Quét để nhắn tin',
    showQr: 'Hiện mã QR',
    hideQr: 'Ẩn mã QR',
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
