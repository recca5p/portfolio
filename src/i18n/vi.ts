export const vi = {
  nav: {
    home: 'Trang chủ',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
  },
  home: {
    title: 'Kỹ sư phần mềm',
    greeting: 'Xin chào, tôi là Võ Tấn Phát',
    tagline: 'Kỹ sư Backend · .NET · Golang · Cloud · AI',
    bio: 'Kỹ sư Backend Senior với 5+ năm xây dựng hệ thống quan trọng cho <strong>ANZ Bank (Úc)</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong> — trải dài ngân hàng số, dầu khí, logistics và fintech. Hiện đang hiện đại hóa nền tảng Chuyển tiền Quốc tế &amp; Apple Pay của ANZ trên GCP. Chuyên sâu về microservices .NET / Golang, kiến trúc cloud-native và kỹ thuật tăng cường AI với kết quả đo lường được: tối ưu tìm kiếm 20x, giảm 60% chi phí qua OpenTelemetry, và tăng tốc 30% chu kỳ phát triển với GenAI.',
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    subtitle:
      'Tổng quan toàn diện về chuyên môn kỹ thuật. Di chuột vào thẻ để xem chi tiết.',
    hoverHint: 'Di chuột để xem chi tiết',
    categories: {
      backend: {
        title: 'Backend & Kiến trúc',
        description:
          'Chuyên gia thiết kế Microservices & Event-Driven scalable với DDD, SOLID, và Onion Architecture.',
        details: [
          'Core Stack: .NET Core (C#), Golang, Java (Spring Boot), Python',
          'Thiết kế hệ thống: Microservices & Event-Driven với DDD và Onion Architecture',
          'API hiệu suất cao: gRPC (Protobuf) & RESTful APIs độ trễ thấp',
          'Bảo mật: Tiêu chuẩn OWASP, mẫu Resiliency (Circuit Breaker, Retry)',
          'Chiến lược Cache với Redis cho hệ thống thông lượng cao',
          'Concurrency, Quản lý bộ nhớ, và Asynchronous programming',
        ],
      },
      database: {
        title: 'Cơ sở dữ liệu & Messaging',
        description:
          'Chuyên sâu về RDBMS, NoSQL, và kiến trúc Message Broker thời gian thực.',
        details: [
          'RDBMS: SQL Server, PostgreSQL, Oracle — Tối ưu Query, Indexing, Stored Procedures',
          'Schema Design phức tạp cho hệ thống giao dịch khối lượng lớn',
          'NoSQL & Big Data: DynamoDB (Serverless), Google BigQuery phân tích',
          'Message Brokers: Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead Letter Queues, Event Sourcing, và CQRS patterns',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        description:
          'Chuyên gia AWS & Azure — thiết kế giải pháp Serverless, container hóa và hybrid cloud với tự động hóa CI/CD toàn diện trên GCP, AWS và Azure.',
        details: [
          'AWS (Chuyên gia): Lambda, EC2, ECS, EKS, Fargate, S3, RDS, DynamoDB, SQS, SNS, API Gateway, CloudWatch, CloudFront, VPC, IAM, Secrets Manager, CodePipeline',
          'Azure (Chuyên gia): Azure Service Bus, Azure DevOps, Azure SQL, Azure Functions, App Service, Azure AD, Azure OpenAI, Azure AI Speech, Azure Blob Storage, Azure Monitor, Key Vault, AKS',
          'GCP: GKE, Cloud Run, Cloud Functions, Pub/Sub, BigQuery, Cloud SQL, Firestore, Cloud Storage, Secret Manager',
          'Infrastructure as Code: Module Terraform cho provisioning đa đám mây và đồng nhất môi trường',
          'CI/CD: GitHub Actions, Azure DevOps Pipelines, Jenkins — automated testing gates và chiến lược rollback',
          'Container Orchestration: Docker, Kubernetes, Helm Charts, multi-stage builds, container registries',
        ],
      },
      ai: {
        title: 'AI & Năng suất',
        description:
          'Tận dụng GenAI, LLMs & Claude để tăng tốc phát triển, kiểm thử và ra quyết định kiến trúc.',
        details: [
          'Tích hợp AI: Gemini API, AWS Bedrock & Claude API cho xử lý dữ liệu thông minh',
          'Claude: Sử dụng Claude Code cho pair programming, review kiến trúc, và refactoring tự động',
          'Xây dựng workflow backend tự động hóa bằng LLM',
          'Hiệu suất: GitHub Copilot, Claude Code & Cursor cho tạo mã nhanh',
          'Kiểm thử tự động AI-driven (TDD), code review, và phân tích log',
          'Prompt engineering cho phác thảo kiến trúc, tài liệu và ra quyết định',
        ],
      },
      testing: {
        title: 'Kiểm thử & Chất lượng',
        description:
          'Đảm bảo chất lượng mã qua kiểm thử tự động, E2E Selenium, integration test Docker, và quét bảo mật.',
        details: [
          'Unit & Integration Testing: xUnit, NUnit, JUnit, Go testing với mục tiêu >90% coverage',
          'E2E & UI Automation: Selenium WebDriver cho kiểm thử hồi quy đa trình duyệt',
          'Integration Testing: Môi trường Docker Compose cho kiểm thử cấp dịch vụ cô lập trong CI/CD',
          'Static Analysis: SonarQube cho chất lượng mã và quản lý technical debt',
          'Quét bảo mật: Fortify cho phát hiện lỗ hổng và tuân thủ OWASP',
          'Kiểm thử hiệu suất: JMeter cho load/stress testing và xác định bottleneck',
          'TDD & BDD cho hệ thống tài chính quan trọng',
        ],
      },
      frontend: {
        title: 'Frontend & Công cụ',
        description:
          'Thành thạo framework frontend hiện đại cho web & mobile, cùng các công cụ phát triển.',
        details: [
          'Frontend Stack: Angular, React, React Native cho ứng dụng web & hybrid',
          'Thành thạo HTML5, CSS3, JavaScript (ES6+), TypeScript',
          'Build Tools: Webpack, Vite, npm/yarn cho workflow hiện đại',
          'Version Control: Git với branching strategies (Gitflow, trunk-based)',
          'IDEs & Debugging: Visual Studio, VS Code với profiling nâng cao',
        ],
      },
    },
  },
  proficiency: {
    title: 'Mức độ thành thạo',
    subtitle: 'Tự đánh giá dựa trên sử dụng thực tế hàng ngày trong 5+ năm sản xuất.',
    expert: 'Chuyên gia',
    proficient: 'Thành thạo',
    familiar: 'Quen thuộc',
  },
  education: {
    title: 'Học vấn',
    degree: 'Cử nhân Công nghệ Thông tin',
    location: 'Thành phố Hồ Chí Minh, Việt Nam',
    certTitle: 'Chứng chỉ & Ngôn ngữ',
    englishProficiency: 'Trình độ tiếng Anh',
  },
  projects: {
    title: 'Dự án & Công việc khác',
    subtitle:
      'Tập trung vào giải pháp tự động hóa AI và các hoạt động khác.',
    team: 'Nhóm',
    viewAll: 'Xem tất cả dự án',
    viewAllSubtitle:
      'Khám phá tất cả dự án, hoạt động phụ và công việc freelance chi tiết.',
    backHome: 'Về trang chủ',
  },
  contact: {
    title: 'Liên hệ',
    subtitle:
      'Bạn muốn hợp tác hoặc có câu hỏi? Hãy liên hệ qua bất kỳ kênh nào bên dưới.',
    clickToEmail: 'Nhấn để gửi email',
    viewProfile: 'Xem hồ sơ',
    scanToChat: 'Quét để nhắn tin',
    hoverQrClick: 'Di chuột để xem QR · Nhấn để nhắn',
  },
  footer: {
    rights: 'Bảo lưu mọi quyền.',
  },
};
