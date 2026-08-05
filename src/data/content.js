// ============================================================================
//  YOUR PORTFOLIO CONTENT
//  This is the only file you need to edit to make the site yours.
//  Every component reads from here. Change text, add projects, or swap links
//  and the layout updates automatically.
// ============================================================================

export const profile = {
  name: 'Nick',
  fullName: 'Nicholas Hall',
  // Name + level eyebrow above the hero headline. Recruiters need both fast.
  title: 'Nicholas Hall · Staff/Principal Platform & Site Reliability Engineer',
  // The spine: one line that says what you do and works for streaming-scale
  // reliability AND startup range.
  tagline: 'I make infrastructure boring, on purpose.',
  // The range story, in your own voice.
  blurb:
    '21 years turning chaos into calm: intelligence systems in a combat zone, a TV station on air, streaming observability at 20 billion logs a week, and a bowling alley I rebuilt from dirt. Same pattern every time: hard problem, high pressure, I sort it out.',
  // Closing line for the contact section (straight from your LinkedIn).
  pitch:
    "I like strange problems, useful systems, and the places where software has to touch the real world. If you have a headache technology could help with, I'm your guy.",
  location: 'Litchfield, Illinois',
  availability: 'Open to Staff/Principal IC & startup lead roles',
  email: 'nick@section33.io',
  phone: '(618) 595-0262',
  phoneUrl: 'tel:+16185950262',
  resumeUrl: './resume.pdf', // full résumé PDF lives in /public
}

// Headline proof, shown as a band right under the hero so recruiters hit your
// best numbers in the first screen instead of digging for them.
export const metrics = [
  { value: '20B', label: 'log entries / week at streaming scale' },
  { value: '$4M', label: 'annual cloud spend cut, zero observability lost' },
  { value: '$20M', label: 'ARR SaaS platform, led from zero to GA' },
  { value: '4 hrs', label: 'SOC 2 Type 2 audit, passed first time (3-day window)' },
]

// Social / contact links. Remove any you don't want; the icons map by `type`.
export const socials = [
  { type: 'email', label: 'Email', url: 'mailto:nick@section33.io' },
  { type: 'github', label: 'GitHub', url: 'https://github.com/nicholas-a-hall' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/nicholashall87' },
  { type: 'website', label: 'section33.io', url: 'https://section33.io' },
]

// The "who I am" story, lightly edited from your own LinkedIn summary,
// because you already say it better than a resume ever could.
export const about = {
  heading: "Who I am & what I'm about",
  paragraphs: [
    "I take infrastructure from chaos to calm. Give me a system that's fragile, expensive, or on fire, and I'll make it boring. That's the nicest thing you can say about a platform.",
    "My background is weird, and I think that's the point. I've kept intelligence systems running in a combat zone, kept a TV station on air, run streaming observability at 20 billion log entries a week, and rebuilt a bowling alley from dirt. Different domains, same pattern: hard problem, high pressure, I sort it out. The short stints aren't job hopping. That's the shape of the work. I go in, build the platform, make it boring, and hand it off documented. Then I go find the next fire.",
    "The day-to-day is platform engineering, SRE, and DevOps: Kubernetes and GitOps across AWS, Azure, and GCP, observability you can trust at 2am, CI/CD, MLOps, and the automation that turns repeated toil into infrastructure. Python is my daily driver. Go and I are on speaking terms. Honestly though, the stack is a detail. Knowing what to build, when, and how much? That's the job.",
    "I started closer to the metal (electronics, RF, satellite comms, on-prem), the weird physical problems software people forget exist. I pick up new tech fast, form a working opinion faster, and I write it all down: design docs, runbooks, paved roads. Anyone senior can solve the problem in front of them. The point is leaving behind a system, and a team, that can solve the next ten without you. Teams I left years ago still ship on my deployment patterns.",
    "I'm happiest when work feels like building something useful over pizza with good friends: people who care about each other, care about the craft, and can still ship with the best of them. So that's me. Part platform engineer, part SRE, part hardware nerd, part small-town business owner. Also restoring a bowling alley. Uptime matters everywhere.",
  ],
  // Quick "facts about me" chips. Keep them human.
  facts: [
    'Army veteran',
    'Dad',
    '21 years in tech',
    'Owns a bowling alley (my real-world homelab)',
    'Python daily driver',
    'Hardware-to-cloud',
  ],
}

// Skills grouped into categories. Add/remove freely; groups render in order.
export const skillGroups = [
  {
    category: 'Reliability & Observability',
    skills: ['Elasticsearch / ECK', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Incident response', 'Disaster recovery', 'RTO / RPO', 'MTTR / MTTD', 'On-call'],
  },
  {
    category: 'AI & MLOps',
    skills: ['MLOps', 'Vertex AI', 'LLM agents', 'Agentic AI', 'Prompt engineering', 'Generative AI', 'AI service reliability'],
  },
  {
    category: 'Platform & Infrastructure',
    skills: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'GitOps', 'CI/CD', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker', 'Ansible', 'Linux'],
  },
  {
    category: 'Cloud (multi-cloud)',
    skills: ['AWS', 'GCP', 'Azure', 'GKE', 'AKS', 'EKS', 'Cloud Run', 'BigQuery', 'On-prem → cloud migration'],
  },
  {
    category: 'Languages & Automation',
    skills: ['Python', 'Go', 'Bash', 'PowerShell', 'TypeScript', 'React'],
  },
  {
    category: 'Security & Compliance',
    skills: ['SOC 2 Type 2', 'Audit readiness', 'IAM', 'Secrets management'],
  },
  {
    category: 'Data & Messaging',
    skills: ['Kafka', 'MQTT', 'Redis', 'Postgres', 'MongoDB', 'Snowflake'],
  },
]

// Featured projects. The first ones are highlighted larger. `tags` show as
// chips. `links` render as buttons; use type 'demo' | 'code' | 'link'.
export const projects = [
  {
    title: 'Self-Service Kubernetes Platform',
    org: 'Internal developer platform · multiple orgs, since 2022',
    blurb:
      "My standard Kubernetes pattern across multiple orgs: an opinionated, self-service internal developer platform, portable across clouds and into on-prem customer environments. The platform layer ships as a series of operators defined in Terraform: Istio, OpenTelemetry, Elasticsearch via ECK, the Prometheus and Grafana operators, External Secrets, cert-manager, and the Nginx ingress controller, with ArgoCD and onboard Vault secrets management as optional add-ons. Application delivery is kept separate on purpose: Helm is invoked directly by CI/CD rather than through Terraform, which keeps rollbacks clean and values files easy to change. The result is a paved road: a developer deploys their app and inherits mTLS, secrets, config, feature flags, tracing, metrics, and alerting by default, with the monitors and alerts declared as CRDs in the app's own Helm chart, so every workload arrives instrumented and alerting from day one.",
    tags: ['Kubernetes', 'Terraform', 'Operators', 'Helm', 'Istio', 'OpenTelemetry', 'ArgoCD', 'Multi-cloud'],
    links: [],
    featured: true,
  },
  {
    title: 'Lunar Lanes',
    org: 'Owner & Lead Engineer',
    blurb:
      'My small town had few attractions for families in the winter, so my family and I bought a beat-up bowling alley, and it became my real-world homelab for end-to-end technical impact. From unimproved land to operational in 90 days: an event-driven IoT + observability stack for legacy electromechanical equipment (ESP32 edge nodes, ESPNow, RS485 fallback, per-lane compute, MQTT), a React/TypeScript ops dashboard with live machine telemetry, and full ownership of architecture, reliability, cost, and P&L. I run the technical side; friends and family run the day-to-day.',
    tags: ['IoT', 'ESP32', 'MQTT', 'React', 'TypeScript', 'Observability', 'Edge'],
    links: [{ type: 'link', label: 'lunarlanesbowl.com', url: 'https://lunarlanesbowl.com' }],
    featured: true,
  },
  {
    title: 'OpenLaneLink',
    org: 'Lunar Lanes · open hardware + software stack',
    blurb:
      "The open hardware and software stack that runs the floor at Lunar Lanes. ESP32/ESP8266 devices publish over MQTT (Mosquitto) to a bridge that translates to Socket.IO; an Express backend holds canonical lane state in Redis and broadcasts real-time updates over WebSocket to a manager dashboard and four per-lane kiosk displays covering eight lanes, with two-way Google Calendar sync for reservations. The whole thing runs on Docker Compose and Helm, so the same stack comes up on a laptop or on the alley's own hardware.",
    tags: ['ESP32', 'MQTT', 'Socket.IO', 'Redis', 'React', 'Helm', 'Real-time', 'IoT'],
    links: [{ type: 'link', label: 'lunarlanesbowl.com', url: 'https://nicholas-a-hall.github.io/openlanelink' }],
  },
  {
    title: 'MLOps Platform Engineering',
    org: 'Growth Protocol',
    blurb:
      'Production infrastructure for AI/ML-enabled services, the operational side of AI: making AI-backed systems deployable, observable, debuggable, and maintainable in real production. Cloud runtime support, deployment automation, and telemetry/logging/alerting wired into incident response, applying SRE and platform practices to practical MLOps on Vertex AI.',
    tags: ['MLOps', 'Vertex AI', 'GCP', 'Observability', 'SRE'],
    links: [],
  },
  {
    title: 'CanaryBot: LLM Incident-Response Agent',
    org: 'Growth Protocol',
    blurb:
      'An LLM-assisted incident-response bot connecting alerting workflows to a conversational interface in Slack. It relays operational alerts and answers the questions that eat time during active response (what happened, when it started, what changed, what signals fired), keeping incident context in one place so the team can focus on diagnosis, mitigation, and recovery instead of digging through scattered logs and chat.',
    tags: ['LLM', 'Prompt Engineering', 'Slack', 'Incident Response', 'SRE'],
    links: [],
  },
  {
    title: 'Theia: Production AI Voice Receptionist',
    org: 'Lunar Lanes',
    blurb:
      'A production AI voice agent answering live customer calls for Lunar Lanes on Zoom Phone AI. It identifies itself as an AI on pickup, handles common questions in a consistent persona, and hands transactional requests (booking, lane availability) off to dedicated skills. I engineered the knowledge base from scratch (hours, two pricing modes with per-game vs hourly break-even math, the ownership/restoration story, payments, accessibility, conduct), and designed a stable persona so it carries calls that were never explicitly scripted, while keeping back-of-house policy out of public answers.',
    tags: ['Conversational AI', 'Prompt Engineering', 'Zoom Phone AI', 'Voice', 'LLM'],
    links: [],
  },
  {
    title: 'Integrated Observability Platform',
    org: 'Multiple production environments',
    blurb:
      "Built and operated observability platforms across cloud-native services, Kubernetes, and AI/ML workloads. OpenTelemetry served as the translation and transport layer between workloads, collectors, backends, and alerting. I pushed teams toward native first-party instrumentation, and used the OTel Operator's auto-injection where it wasn't yet in place for faster visibility. Prometheus, Grafana, Alertmanager, Elasticsearch, and Jaeger, wired into Slack-based alerting and incident response.",
    tags: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger', 'Elasticsearch', 'Kubernetes'],
    links: [],
  },
  {
    title: 'Incident Command Systems',
    org: 'Multiple engineering orgs',
    blurb:
      'Stood up incident command systems that moved response out of ad-hoc heroics and into a repeatable operating model teams trust under pressure. Defined roles, severity models, escalation paths, and Slack-based response channels; integrated alerting, observability, and timeline capture; and established postmortem practice and clean handoffs between engineering, platform, customer-facing, and leadership.',
    tags: ['Incident Response', 'On-call', 'Postmortems', 'Alerting', 'SRE'],
    links: [],
  },
  {
    title: 'SOC 2 Certification',
    org: 'Growth Protocol',
    blurb:
      'Led the engineering side of SOC 2 at an early-stage startup: Type 1 in under three months, Type 2 in six. The first-time Type 1 audit was blocked for three days; auditors finished in an afternoon. Implemented technical controls across the full surface (access, change management, active security monitoring) in Vanta, with hands-on remediation across cloud infra. One example: standing up cloud intrusion-detection alerting end-to-end for continuous-monitoring, wired into the pipeline rather than checked off on paper. SOC 2 is the gate that blocks enterprise sales, and at a small company it usually eats months. Hitting both fast and clean on a first audit is the differentiator.',
    tags: ['SOC 2', 'Vanta', 'Security', 'Compliance', 'Cloud IDS'],
    links: [],
  },
  {
    title: 'Quarry',
    org: 'Personal project · offline-first web app',
    blurb:
      'A job-search tracker that treats the hunt like a sales pipeline: applications are leads, sources and categories are segments, statuses are stages, and a live dashboard shows where effort actually converts. Every KPI and chart (conversion by source, pipeline funnel, response rate, salary ranges, in-demand skills) is derived live from the records, with applications going cold flagged automatically. No backend and no accounts: data lives entirely in the browser via localStorage, with JSON import/export and a one-tap PNG summary card. It ships as a single self-contained HTML file that runs fully offline.',
    tags: ['React', 'Recharts', 'Data viz', 'localStorage', 'Offline-first', 'Product design'],
    links: [{ type: 'demo', label: 'Live demo', url: 'https://nicholas-a-hall.github.io/quarry/' }],
  },
  {
    title: 'Assay',
    org: 'Personal project · job-market landscape tool',
    blurb:
      "The companion to Quarry. Where Quarry tracks your own pipeline, Assay analyzes the wider job market. A FastAPI and MongoDB backend serves a React/Recharts dashboard that breaks the market down by vertical (software engineering, data/ML, product), with endpoints for market pulse, job-board activity, in-demand skills, and salary bands. The mining theme is deliberate: a quarry extracts the ore, an assay tells you what it's worth.",
    tags: ['FastAPI', 'Python', 'MongoDB', 'React', 'Recharts', 'Docker'],
    links: [],
  },
]

// Talks and other video appearances.
export const talks = [
  {
    title: 'Adventures in (the Agentic AI) Space!',
    videoId: 'gMP5HoiDg3s',
    url: 'https://youtu.be/gMP5HoiDg3s',
  },
]

// Work history / experience. `highlights` are bullet points of impact.
export const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Growth Protocol',
    period: 'May 2025 – Apr 2026',
    highlights: [
      'Owned SOC 2 Type 2 end-to-end as primary responsible engineer, passing the audit in 4 hours against a 3-day window.',
      'Moved deployments to GitOps (ArgoCD + Helm), cutting CI/CD build times from 60 minutes to 6.',
      'Ran multi-cloud Kubernetes (GKE / AKS / EKS), consolidating 30+ Cloud Run microservices onto one deployable platform.',
      'Partnered with the Data and ML teams to rework their data storage strategy, speeding up model training and improving training data accuracy.',
    ],
  },
  {
    role: 'Owner & Lead Engineer',
    company: 'Lunar Lanes',
    period: 'Dec 2024 – Present',
    highlights: [
      'Took a bowling alley from unimproved land to operational in 90 days, owning architecture, reliability, cost, and P&L.',
      'Built an event-driven IoT + observability stack for legacy electromechanical equipment (ESP32, ESPNow, RS485, MQTT).',
      'Shipped a React/TypeScript ops dashboard with live telemetry, plus Theia, an AI phone agent for reservations.',
    ],
  },
  {
    role: 'DevOps Technical Lead',
    company: 'Formant',
    period: 'Mar 2024 – Apr 2025',
    highlights: [
      'Assembled and led the DevOps team that cleared years of standing technical debt and turned fragile build pipelines into ones engineers stopped thinking about.',
      'Optimized, helped structure, and preserved roughly 750TB of unstructured robotics telemetry in S3 for model training.',
      'Migrated platform services off EC2 / Docker Compose onto Kubernetes with Helm for repeatable releases and rollbacks.',
    ],
  },
  {
    role: 'Site Reliability Engineer',
    company: 'FORT Robotics',
    period: 'Aug 2022 – Mar 2024',
    highlights: [
      'Owned incident response for a greenfield robotics-safety SaaS, authoring DR plans, on-call procedures, and runbooks.',
      'Migrated services to Kubernetes, cutting deploy/recovery time 83% and improving RTO 87%.',
      'Built 25 Helm charts that reduced new-tenant setup from a week to 30 minutes.',
      'Mentored junior and senior engineers on continuous-deployment best practices with Kubernetes.',
    ],
  },
  {
    role: 'Site Reliability Engineer (Contract)',
    company: 'Paramount+ / Paramount Global',
    period: 'Jan 2022 – Aug 2022',
    highlights: [
      'Operated Elasticsearch on Kubernetes (ECK) for a streaming platform processing 20 billion log entries per week.',
      'Made the cost-vs-reliability call that cut $4M/year in GCP spend without degrading observability.',
    ],
  },
  {
    role: 'Senior Site Reliability Engineer',
    company: 'Graylog',
    period: 'Jan 2020 – Dec 2021',
    highlights: [
      'Led development of Graylog Cloud (AWS SaaS) as project organizer and team lead, through SOC 2, beta, GA, and on to $20M ARR.',
      'Built a Go load-testing platform generating 200,000 logging requests/second at production scale.',
    ],
  },
  {
    role: 'IT Manager',
    company: 'KSDK-TV / NBC',
    period: 'May 2016 – Apr 2019',
    highlights: [
      'Led an IT team building Python/PowerShell automation that reduced rework 97% and saved 160 hours a year.',
      'Cut unplanned downtime in key systems 95% (30 hours in 2017 to 90 minutes in 2018) and MTTR 96% (4 hours to 10 minutes) with proactive monitoring and a rebuilt incident-response process.',
      'Delivered 23 capital-investment projects worth $5M, with ROI inside 2–3 years.',
    ],
  },
  {
    role: 'Systems & infrastructure roles',
    company: 'Maryville University · Enterprise Holdings · Computer Techniques · Montgomery County',
    period: '2011 – 2019',
    highlights: [
      'On-prem and hybrid-cloud infrastructure, virtualization, and network engineering across higher-ed, enterprise, and public sector.',
      'Built a 500-user GPU-accelerated VDI at $5.26 per user per month, plus a self-healing web platform handling 10,000 requests/second at under $200 per site per month.',
      'Ran a $1.6M NetApp Metrocluster storage migration (45TB), stood up a cybersecurity fusion center that unlocked $1.1M in grants, and cut DHS-flagged vulnerabilities 70% for the county.',
    ],
  },
  {
    role: 'Military Intelligence Systems Maintainer / Integrator',
    company: 'US Army · 101st Airborne',
    period: '2005 – 2011',
    highlights: [
      'Led maintenance contact teams of 2 to 4 in hostile environments, accountable for $10M+ of sensitive DoD hardware, software, and secure data.',
      'Held 99.2% uptime across 10 mission-critical intelligence sensor sites in 6 locations in support of Operation Enduring Freedom. Reliability engineering before it had the name.',
      'As shop foreman, trained and mentored 12 personnel in Solaris administration and satellite networking, and wrote the SOPs, SLAs, on-call, and emergency-response procedures the shop ran on.',
    ],
  },
]

// Education & training.
export const education = [
  {
    school: 'Cochise College',
    detail: 'Military Information Systems Technology',
    period: '2005 – 2006',
  },
  {
    school: 'U.S. Army',
    detail: 'Military intelligence systems training: electronics, RF & satellite comms',
    period: '2005 – 2011',
  },
]

// Recommendations (from LinkedIn). Trimmed to the strongest lines; spans
// managers, peers, and direct reports across the Army, broadcast, higher-ed,
// and startups.
export const testimonials = [
  {
    quote:
      "Nick Hall is a top talent. His skillset is a rare find: depth across SRE, observability data pipelines, excellent technical writing and communication, and software engineering. I'd gladly work with him again and fully endorse him for whatever technological challenge comes next.",
    name: 'Nick DeCapua',
    title: 'Principal SRE, Observability Team',
    context: 'Managed Nick directly',
  },
  {
    quote:
      "Nick was often the Atlas of our company. His quick thinking and resourcefulness kept our build pipelines running. He assembled a small but powerful DevOps team that tackled technical debt that had held us back for years, and he actually cared about documenting his work so everyone had access to it.",
    name: 'Nicholas Boni',
    title: 'Technical Writer & Content Manager',
    context: 'Formant',
  },
  {
    quote:
      'Nick quickly transformed the DevOps team into a well-oiled machine. He tackled technical debt head-on, simplified complex and fragile pipelines, and eliminated pain points so we could ship on time. Any organization would be lucky to have him.',
    name: 'Eric Barch',
    title: 'Software Engineer',
    context: 'Formant',
  },
  {
    quote:
      'A great manager with a brilliant mind who broke us out of old ways of thinking and modernized how we deliver news in the digital age. His knowledge of networks, automation, orchestration, and virtualization took our station to the next level.',
    name: 'Cassidy Thomas',
    title: 'A/V and IT Engineer',
    context: 'Reported to Nick directly · KSDK-TV',
  },
  {
    quote:
      "Nick creates technology solutions that don't just solve problems but vastly improve on past ones, always accounting for every department's needs, with a gift for explaining technology so non-technical people get it. If Nick is handling something, I know it'll surpass expectations.",
    name: 'Kate Boelhauf',
    title: 'Director of User Experience',
    context: 'Maryville University',
  },
  {
    quote:
      "As a senior tech, Nick was always the go-to for any system question or when something needed to get done. He worked tirelessly to ensure maximum uptime of every system in our domain. He'd learn everything about something, then look for ways to improve it.",
    name: 'Matthew Ruddell',
    title: 'Senior Project Manager (formerly Kyndryl)',
    context: 'U.S. Army',
  },
]

// What I specialize in, straight from the way you describe yourself.
export const principles = [
  { title: 'Systems that heal themselves', body: "Give me a platform with unpredictable load and I'll build it to figure out its own horsepower, no one babysitting it at 2am." },
  { title: 'Kill the friction between teams', body: "If developers and infra are fighting over a deployment, I'll walk over, ask questions, and fix it. That's just how I'm wired." },
  { title: 'Learn ridiculously fast', body: "Kubernetes to embedded microcontrollers, satcom to MLOps: if it's useful, I'll figure it out in days. The domain changes. The pattern doesn't." },
  { title: 'Make AI survive production', body: "The model is the easy part. The hard part is keeping AI deployable, observable, and reliable after launch. I build the MLOps and the agents themselves: a voice receptionist taking live calls, a bot that holds context through an incident." },
  { title: 'Leave teams stronger than I found them', body: "Trained 12 in the Army. Built the automation program at KSDK. Assembled Formant's DevOps team. Mentored seniors and juniors at FORT. The recommendations below say it in other people's words." },
]
