// Single source of truth for every variant. Content mirrors
// "Todd Clarkston CV - ATS.docx" (data/ in the v1 site).

export type Stat = { value: string; label: string; detail: string };

export type Role = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /** Optional sub-roles (Federal Reserve progression). */
  tracks?: { title: string; bullets: string[] }[];
};

export type Product = {
  id: string;
  name: string;
  role: string;
  url: string;
  urlLabel: string;
  summary: string;
  highlights: string[];
  tags: string[];
  metric: { value: string; label: string };
};

export type SkillGroup = { group: string; years: string; items: string[] };

export type Download = { label: string; description: string; pdf: string; docx: string };

export const profile = {
  name: "Todd Clarkston",
  firstName: "Todd",
  lastName: "Clarkston",
  title: "Lead Software Architect",
  headline: ".NET / C# & Azure · Fintech, Healthcare & Enterprise Systems",
  location: "Centennial, CO (Denver area)",
  availability: "Open to remote, hybrid, or on-site roles",
  phone: "720-402-4347",
  phoneHref: "tel:+17204024347",
  email: "todd@toddclarkston.com",
  emailHref: "mailto:todd@toddclarkston.com",
  linkedin: "https://www.linkedin.com/in/toddclarkston/",
  linkedinLabel: "linkedin.com/in/toddclarkston",
  github: "https://github.com/tclarkston",
  githubLabel: "github.com/tclarkston",
  photo: "/images/TC-44.jpg",
  photoAlt: "/images/TC-22.jpg",
  currentRole: "Lead Architect, CenterLight Healthcare (Oct 2025 – Oct 2026)",
};

export const summary =
  "Lead Software Architect and hands-on full-stack engineer with 20+ years delivering secure, enterprise-grade healthcare, financial-services, and SaaS platforms using .NET, React Native, and Azure. Architected a greenfield EHR serving approximately 4,000 users and 2,700 patients across nine facilities while leading a five-person engineering team, and built Federal Reserve bank-examination software used by about 1,000 examiners nationwide. Applied AI experience spans Azure Foundry Vision, Azure AI Document Intelligence, Azure Speech, and an AI document-processing platform achieving approximately 99% extraction accuracy processing about 100 documents in under a minute.";

export const shortSummary =
  "I architect and build secure, enterprise-grade platforms for healthcare, financial services, and SaaS — hands-on across .NET, React Native, and Azure, with AI in production.";

export const stats: Stat[] = [
  { value: "20+", label: "Years", detail: "Enterprise software delivery" },
  { value: "4,000", label: "EHR users", detail: "2,700 patients · 9 facilities" },
  { value: "1,000", label: "Examiners", detail: "Federal Reserve, all 50 states" },
  { value: "99%", label: "AI extraction", detail: "100 documents / < 1 minute" },
  { value: "70+", label: "OSS components", detail: "400+ npm downloads" },
  { value: "~40", label: "Clients", detail: "Through WireServers" },
];

export const competencies: { area: string; items: string[] }[] = [
  {
    area: "Software Architecture",
    items: ["Enterprise architecture", "Solution design", "REST APIs", "Microservices", "SOA", "Domain modeling", "SOLID", "Design patterns"],
  },
  {
    area: "Microsoft .NET",
    items: ["C#", ".NET 10 / .NET Core", "ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework", "LINQ", "Dapper", "WPF", "WCF", "MAUI", "Xamarin"],
  },
  {
    area: "Python",
    items: ["Python", "Flask", "Django", "ETL imports", "Data mapping", "AWS Lambda", "Azure Functions"],
  },
  {
    area: "Front End & Mobile",
    items: ["React Native", "React Native Web", "React", "Next.js", "Angular", "TypeScript", "NgRx", "RxJS", "Component systems"],
  },
  {
    area: "Cloud & DevOps",
    items: ["Microsoft Azure", "App Service", "Azure Functions", "Azure SQL", "Cosmos DB", "API Management", "Entra ID", "Key Vault", "Bicep / ARM", "Azure DevOps", "GitHub CI/CD", "Deployment slots", "AWS Lambda", "Docker", "Kubernetes / AKS"],
  },
  {
    area: "Security & Compliance",
    items: ["OAuth 2.0", "OpenID Connect", "SSO", "MSAL", "CIAM", "RBAC / ReBAC", "Audit logging", "Key rotation", "OWASP Top 10", "HIPAA-aligned", "SOC 2-aligned", "PCI DSS-aligned", "PHI/PII handling"],
  },
  {
    area: "Healthcare Technology",
    items: ["EHR / EMR", "PACE", "Clinical workflows", "Appointment management", "HL7", "FHIR / Azure FHIR", "Interoperability"],
  },
  {
    area: "Financial Services",
    items: ["Federal Reserve systems", "Bank examination", "Account & transaction data", "Personal finance", "Compliance approvals"],
  },
  {
    area: "AI & LLM Engineering",
    items: ["Azure Foundry Vision", "Azure AI Document Intelligence", "Azure Speech", "Azure OpenAI", "OpenAI API", "Vision OCR", "Multi-model fallback", "Llama", "Claude", "MCP", "Agentic workflows"],
  },
];

export const experience: Role[] = [
  {
    id: "centerlight",
    company: "CenterLight Healthcare",
    role: "Application Developer III — Lead Architect / Tech Lead",
    dates: "Oct 2025 – Oct 2026",
    location: "New York, NY (Remote) · via C2Q",
    summary:
      "Architecting and leading a greenfield Electronic Health Record platform for the nation's largest not-for-profit PACE program.",
    highlights: [
      "Architected and continues to lead a greenfield EHR serving approximately 4,000 users and 2,700 patients across nine facilities; initial clinical and administrative capabilities are deployed while additional modules remain in active development.",
      "Leads a five-person engineering team — solution architecture, coding standards, code review, technical direction, and delivery priorities — while remaining hands-on across the full stack.",
      "Designed and integrated Azure Foundry Vision, Azure AI Document Intelligence, and Azure Speech into clinical and operational EHR workflows, including speech-to-text, document intelligence, and a chatbot.",
      "Designed and built a CMS-style configurable form field builder that replaced a confusing legacy designer, cutting form creation from about an hour to 10 minutes, with configurable and custom security at the individual field level and no code changes.",
      "Managed full GitHub CI/CD pipelines, releasing to Development multiple times a day, UAT weekly, and Production each quarter, with rollback through deployment-slot swaps or redeploying the previous build.",
      "Instrumented the code to detect Azure Key Vault, connection-string, and expired-key failures, so configuration problems identify themselves in UAT logs before reaching Production.",
      "Delivered Patient/Nursing Appointment Management, an Admin Portal, and an operational status dashboard.",
      "Designed and implemented a custom CIAM/SSO server on Microsoft Entra ID single sign-on with MSAL, with user provisioning and entitlements, service-to-service authentication, SOC 2-aligned audit logging, and Azure Key Vault secrets and key rotation.",
      "Integrated HL7 messaging and Azure FHIR services for interoperability and HIPAA-aligned handling of PHI.",
      "Built the front end with React Native Web and the back end with .NET 10 Web API, C#, Entity Framework, and SQL Server; Azure Functions and App Services workflows, with infrastructure defined in Bicep and ARM templates.",
      "Applied Claude Code, reusable skills, advanced prompting, and agentic workflows to code generation, reviews, and automated testing; created the team's AI coding guidelines, checklists for reviewing AI-generated code, and automated code reviews.",
    ],
    tags: [".NET 10", "React Native Web", "Azure AI", "HL7 / FHIR", "CIAM / SSO", "GitHub CI/CD"],
  },
  {
    id: "wireservers",
    company: "WireServers LLC",
    role: "Owner & Principal Consultant / Lead Architect",
    dates: "2009 – 2025",
    location: "Highlands Ranch, CO",
    summary:
      "Boutique software consultancy serving approximately 40 clients, including about 10 repeat clients. Led a four-developer team and owned client relationships, architecture, full-stack delivery, cloud deployment, and support.",
    highlights: [
      "Delivered enterprise web, mobile, desktop, API, and cloud applications across healthcare, financial services, e-commerce, and SaaS.",
      "Hands-on full-stack development with C#/.NET, ASP.NET Core, Angular, React, React Native, Next.js, Node.js, Python (Flask, Django), SQL platforms, and Azure/AWS.",
      "Built Python services with Flask and Django, ETL imports and data mapping, Azure Functions in Python, and an AWS Lambda geolocation service in Python.",
      "Ran Azure DevOps CI/CD and the full SDLC, deploying products to production multiple times a week; Docker and AKS for containerized microservices; AWS Lambda, API Gateway, CloudFormation, S3, EC2, Cognito, Route 53.",
      "Defined Azure infrastructure in Bicep and ARM templates, managed secrets and key rotation in Azure Key Vault, and rolled back with deployment-slot swaps or by redeploying the previous build.",
      "Integrated OpenAI for document OCR, classification, summarization, and structured extraction; designed multi-model architectures with provider fallback and token tracking.",
      "Built AI-assisted engineering workflows with Claude Code, custom skills, MCP server integrations, automated code review, and test generation.",
      "Designed RESTful APIs, SOA, microservices, and asynchronous workflows using RabbitMQ and Azure Service Bus.",
      "Implemented OWASP Top 10, HIPAA, SOC 2, and PCI DSS-aligned security controls, SOC 2-guided audit logging, and service-to-service authentication; mentored developers from junior to architect level.",
    ],
    tracks: [
      {
        title: "Selected client engagements",
        bullets: [
          "eLivelihood — care-management dashboard for families; DevOps, full-stack, and tech lead (Angular, Firebase, Ionic).",
          "Series Code — three years of Python services with Flask and Django.",
          "Geolocation check-in app — geocaching-style AWS Lambda service in Python; hardware at each location site authenticates check-ins.",
          "Swoovy — full-stack engineer and project manager (Python, Django, React Native, PostgreSQL).",
          "Sent & Secure — end-to-end encrypted desktop app (Xamarin, WPF, MAUI, XAML, Entity Framework, SQL).",
          "FitnessOne — Angular front end with responsive UX, Material Design, and NgRx state.",
          "Bionatal — Ecwid ↔ Klaviyo integrations orchestrated over Azure Service Bus.",
          "BurstIQ — database-driven analytics in React with Nivo visualizations and reusable components.",
        ],
      },
    ],
    tags: ["Consulting", "C# / .NET", "React / Angular", "Azure & AWS", "OpenAI", "Team lead"],
  },
  {
    id: "welldyne",
    company: "WellDyneRX",
    role: "Senior Software Developer",
    dates: "2018 – 2019",
    location: "Centennial, CO · via TEKsystems",
    summary:
      "Pharmacy Benefit Manager supporting mail-order and retail pharmacy operations, processing approximately 15 million prescriptions annually.",
    highlights: [
      "Developed full-stack pharmacy applications with MVC/C#, ASP.NET Web API, Knockout.js, jQuery, Bootstrap, SQL Server, LINQ, and Entity Framework.",
      "Automated multi-day prescription verification, fulfillment, and shipping workflows with RabbitMQ, replacing manual processing with queue-driven pub/sub orchestration.",
      "Built HIPAA-aligned prescription-processing systems handling PHI with HL7 messaging.",
      "Cut deployment time 40% by automating Azure DevOps CI/CD pipelines and PowerShell deployments; migrated legacy systems to Docker containers.",
      "Helped redesign a key enterprise application, increasing performance and scalability 30%.",
      "Remediated OWASP Top 10 and SonarQube-flagged vulnerabilities in HIPAA-regulated systems, with audit logging following SOC 2 guidelines.",
      "Provided architecture guidance, proofs of concept, database support, and mentoring.",
    ],
    tags: ["Healthcare", "RabbitMQ", "HL7", "Azure DevOps", "Docker"],
  },
  {
    id: "frb",
    company: "Federal Reserve Bank of Kansas City",
    role: "Senior Software Engineer / Lead / Architect",
    dates: "2014 – 2018",
    location: "Denver, CO",
    summary:
      "Enterprise applications supporting Federal Reserve operations, including the national Examiner Application used by approximately 1,000 bank examiners across all 50 states.",
    highlights: [],
    tracks: [
      {
        title: "Software Architect",
        bullets: [
          "Evaluated architectures and set technical direction for security, quality, usability, and maintainability.",
          "Coordinated across Federal Reserve districts and oversight departments to obtain security, quality, and usability approvals.",
          "Institutionalized coding standards, peer review, technical documentation, and vendor-software evaluation.",
          "Applied secure-software practices and PCI DSS-aligned controls to financial applications.",
          "Brought onto the National team at the New York Fed, which builds software shared by all 12 Reserve Banks; delivered a common audit logger, then a common RBAC/ReBAC security model.",
          "With an architect counterpart, led the move from .NET Framework to .NET Core and built a national .NET Core component library.",
        ],
      },
      {
        title: "Lead Developer",
        bullets: [
          "Led a cross-functional team of four developers, one software quality analyst, and one DBA, delivering a mission-critical application on time and under budget.",
          "Increased team velocity 25% and raised code-quality metrics 35% with SonarQube and peer reviews.",
          "Mentored 5+ junior developers and supported mid-level and senior engineers.",
        ],
      },
      {
        title: "Senior Software Engineer",
        bullets: [
          "Built the national Examiner Application — an MVC single-page app with RESTful services giving ~1,000 examiners access to each bank's information and history.",
          "Delivered full-stack apps with MVC / C# 5.0, Angular 2, ASP.NET Web API 2, Entity Framework, TypeScript, and Knockout.js.",
          "Designed SQL Server 2012 tables and stored procedures for integrity and performance.",
        ],
      },
    ],
    tags: ["Financial services", "Architecture", "Team lead", "Angular", "SQL Server"],
  },
];

export const products: Product[] = [
  {
    id: "bringthebudget",
    name: "BringThe... Budget",
    role: "Creator · Architect · Full-Stack Engineer",
    url: "https://bringthebudget.com",
    urlLabel: "bringthebudget.com",
    summary:
      "In beta. AI-powered personal-finance app that turns Word, PDF, CSV, OFX, text, images, and phone photos into structured accounts, transactions, and debts.",
    highlights: [
      "Azure OpenAI vision, OCR, classification, and summarization with an OpenAI-compatible Llama fallback.",
      "Multi-model fallback and per-call token tracking.",
      "End-to-end on .NET 10, React Native Web, Entity Framework, SQL Server, and Azure.",
    ],
    tags: ["Azure OpenAI", ".NET 10", "React Native Web", "Llama"],
    metric: { value: "99%", label: "extraction accuracy · 100 docs / < 1 minute" },
  },
  {
    id: "bringthediet",
    name: "BringThe... Diet",
    role: "Creator · Architect · Full-Stack Engineer",
    url: "https://www.bringthediet.com",
    urlLabel: "bringthediet.com",
    summary:
      "Healthy recipes and diet-planning platform: foods, recipes, diets, meal plans, favorites, and progress tracking.",
    highlights: [
      "Next.js 15 and React 19 web app in a pnpm monorepo with shared TypeScript packages.",
      "Microsoft Entra ID sign-in with MSAL.",
      "Deployed to Azure Web Apps through GitHub Actions.",
    ],
    tags: ["Next.js", "React 19", "Entra ID / MSAL", "Azure"],
    metric: { value: "Alpha", label: "live at bringthediet.com" },
  },
  {
    id: "food-api",
    name: "Food API",
    role: "Architect · Back-End Engineer",
    url: "https://food-api.wireservers.com",
    urlLabel: "food-api.wireservers.com",
    summary:
      ".NET 10 REST API behind BringTheDiet for foods, nutrients, recipes, diets, and meal plans, running on Azure App Service with Azure Cosmos DB.",
    highlights: [
      "Chose Azure Cosmos DB (MongoDB API) over a relational database so varied USDA FoodData Central records load without schema migrations; nutrients are normalized into their own collections.",
      "Repository pattern with paginated endpoints and Swagger/OpenAPI.",
      "Cached document counts to cut Cosmos DB request-unit cost on paginated queries.",
      "Separate dev and production App Services, deployed through Azure DevOps pipelines with Docker.",
    ],
    tags: [".NET 10", "Cosmos DB", "Azure App Service", "REST"],
    metric: { value: "Live", label: "in production on Azure App Service" },
  },
  {
    id: "react-natives",
    name: "React-Natives",
    role: "Creator · Maintainer · Open Source",
    url: "https://github.com/wireservers/react-natives",
    urlLabel: "github.com/wireservers/react-natives",
    summary:
      "MIT-licensed cross-platform library of 70+ reusable React Native and web components — the library this site is built with.",
    highlights: [
      "Built with React Native, NativeWind, Tailwind Variants, and TypeScript.",
      "Reusable theming and developer-focused component APIs.",
      "Published to npm as @wireservers/react-natives.",
    ],
    tags: ["React Native", "NativeWind", "TypeScript", "npm"],
    metric: { value: "400+", label: "npm downloads since Aug 2026 launch" },
  },
];

export const earlierCareer: { company: string; role: string; dates: string }[] = [
  { company: "Chipotle Mexican Grill", role: "Software Engineer (Contract)", dates: "2013 – 2014" },
  { company: "Pensco Trust", role: "Web Developer III", dates: "2013" },
  { company: "Visa, Inc.", role: "Software Engineer IV (Contract)", dates: "2011 – 2012" },
  { company: "Quark, Inc.", role: "Sr. Software Engineer", dates: "2008 – 2011" },
  { company: "eBags, Inc.", role: "Sr. Software Engineer", dates: "2007 – 2008" },
  { company: "SpireMedia", role: "Web Developer (Contract)", dates: "2006 – 2007" },
  { company: "LANDesk", role: "Sr. Web Developer", dates: "2004 – 2006" },
  { company: "J.P. Morgan Chase", role: "Sr. Software Engineer (Contract)", dates: "2004" },
  { company: "Certiport", role: "Software Engineer (Contract)", dates: "2003 – 2004" },
  { company: "Teleperformance USA", role: "Sr. Web Developer", dates: "2001 – 2003" },
  { company: "Alorica", role: "Sr. Software Engineer", dates: "2000 – 2001" },
];

export const skills: SkillGroup[] = [
  { group: "C# / .NET", years: "20+ yrs", items: [".NET Framework", ".NET Core / .NET 10", "ASP.NET Core", "MVC", "Web API", "Entity Framework", "LINQ", "Dapper", "ADO.NET"] },
  { group: "Python", years: "3+ yrs", items: ["Flask", "Django", "ETL imports", "Data mapping", "AWS Lambda", "Azure Functions"] },
  { group: "Web & Mobile", years: "10+ yrs", items: ["Angular (JS–18)", "React", "React Native", "React Native Web", "Next.js", "TypeScript", "NgRx", "RxJS"] },
  { group: "Databases", years: "20+ yrs", items: ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "Cosmos DB", "MongoDB", "DynamoDB"] },
  { group: "Microsoft Azure", years: "10 yrs", items: ["App Service", "Functions", "Azure SQL", "API Management", "Entra ID", "Key Vault", "Azure FHIR", "Service Bus", "AKS"] },
  { group: "DevOps & SDLC", years: "10 yrs", items: ["Azure DevOps", "GitHub Actions", "CI/CD", "Bicep / ARM", "Deployment slots & rollback", "Docker", "Kubernetes", "PowerShell", "Application Insights"] },
  { group: "AWS", years: "3 yrs", items: ["Lambda", "API Gateway", "CloudFormation", "S3", "EC2", "Cognito", "Route 53"] },
  { group: "Messaging & Integration", years: "8 yrs", items: ["RabbitMQ", "Azure Service Bus", "Pub/sub", "REST / JSON", "SOAP / XML", "Webhooks"] },
  { group: "Healthcare", years: "5 yrs", items: ["EHR / EMR", "HIPAA", "HL7", "FHIR", "PACE", "Clinical workflows"] },
  { group: "AI / LLM", years: "3 yrs", items: ["Azure AI Foundry", "Azure OpenAI", "OpenAI API", "Llama", "Claude Code", "MCP", "Agentic workflows"] },
  { group: "Security", years: "", items: ["OAuth 2.0", "OpenID Connect", "JWT", "MSAL", "CIAM", "RBAC / ReBAC", "Audit logging", "Key Vault & key rotation", "Service-to-service auth", "OWASP Top 10", "Secure SDLC"] },
];

export const certifications = [
  "Microsoft Certified Technology Specialist (MCTS): Web Applications",
  "Microsoft Certified Professional (MCP)",
  "Scrum Master Certified — Scrum Alliance",
  "Recurring HIPAA privacy and security training",
];

export const industries = [
  "Healthcare IT & EHR/EMR",
  "Pharmacy Benefit Management",
  "Financial Services & Central Banking",
  "SaaS",
  "E-commerce",
  "Personal Finance",
  "Cloud Platforms",
  "Application Modernization",
  "AI Document Processing",
];

export const downloads: Download[] = [
  { label: "Modern", description: "Designed, full detail", pdf: "/data/Todd Clarkston CV.pdf", docx: "/data/Todd Clarkston CV.docx" },
  { label: "ATS", description: "Applicant-tracking friendly", pdf: "/data/Todd Clarkston CV - ATS.pdf", docx: "/data/Todd Clarkston CV - ATS.docx" },
  { label: "Concise", description: "Short summary version", pdf: "/data/Todd Clarkston CV - Concise.pdf", docx: "/data/Todd Clarkston CV - Concise.docx" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
