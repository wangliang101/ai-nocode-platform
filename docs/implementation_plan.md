# AI No-Code Platform - Technology Stack & Development Plan

## Goal Description
Build a "Zero-Code" AI Application Generation Platform that allows users to generate fully functional web applications using natural language prompts. The platform will utilize a Node.js-based stack, leveraging modern frameworks for high performance, scalability, and a premium user experience.

## Technology Stack

### Frontend (The "Builder" & Generated Apps)
*   **Framework**: **Nuxt 3** - The Intuitive Web Framework for Vue.js. Equivalent to Next.js for SSR and routing.
*   **Language**: **TypeScript** - For type safety and maintainability.
*   **Styling**: **Tailwind CSS** - For rapid, utility-first styling.
*   **UI Component Library**: **Shadcn-Vue** (or **Nuxt UI**) - For accessible, customizable, and premium-looking components.
*   **State Management**: **Pinia** - The intuitive store for Vue.js.
*   **Visual Editor**: **Vue Flow** - For the drag-and-drop interface builder.
*   **Form Engine**: **FormKit** or **VeeValidate** - For complex form validation.

### Backend (API & Orchestration)
*   **Framework**: **NestJS** - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Excellent for enterprise-grade architecture.
*   **Language**: **TypeScript**.
*   **Database ORM**: **Prisma** - Next-generation Node.js and TypeScript ORM.
*   **Database**: **PostgreSQL** - Robust, relational database for storing app schemas, user data, and generated content.
*   **API Documentation**: **Swagger/OpenAPI** (built-in with NestJS).

### AI & Logic Layer
*   **LLM Integration**: **LangChain.js** - Framework for developing applications powered by language models.
*   **Models**: OpenAI (GPT-4o) / Anthropic (Claude 3.5 Sonnet) via API.
*   **Prompt Engineering**: System prompts designed to output structured JSON schemas (UI Schema + Logic Schema).

### Infrastructure & Tools
*   **Package Manager**: **pnpm** - Fast, disk space efficient.
*   **Monorepo Tooling**: **Turborepo** - High-performance build system (optional, but recommended for separating `web`, `api`, and `shared` packages).
*   **Linting/Formatting**: ESLint, Prettier.

---

## Development Plan

### Phase 1: Foundation & Architecture (Current Focus)
*   [ ] Initialize Monorepo structure (Web + API).
*   [ ] Set up Nuxt 3 and NestJS projects.
*   [ ] Configure Tailwind CSS and Shadcn-Vue.
*   [ ] Set up PostgreSQL and Prisma connection.
*   [ ] Implement basic Authentication (e.g., NuxtAuth or custom JWT).

### Phase 2: The "Core Engine" (Schema-Driven UI)
*   [ ] Define the **Application Schema** (JSON structure describing pages, components, and data).
*   [ ] Build the **Renderer Component**: A React component that takes the JSON Schema and renders the actual UI dynamically.
*   [ ] Create basic components (Input, Button, Table, Card, Layouts).

### Phase 3: AI Generation Service
*   [ ] Implement the AI Service in NestJS.
*   [ ] Design Prompt Chains: User Request -> LLM -> JSON Schema.
*   [ ] Implement "Refinement" flow: User asks for changes -> LLM updates Schema -> UI re-renders.

### Phase 4: Visual Builder (No-Code Editor)
*   [ ] Build a Drag-and-Drop interface to manually edit the generated schema.
*   [ ] Property editors (sidebar to change colors, text, logic).
*   [ ] Real-time preview.

### Phase 5: Deployment & Export
*   [ ] Allow users to "Publish" their app (hosting the schema renderer).
*   [ ] (Optional) Code Export: Generate actual Nuxt code from the schema for the user to download.

## Proposed Changes (Immediate Next Steps)

### Project Initialization
#### [NEW] /Users/wliang/work/myGithub/ai-nocode-platform
*   Initialize a new project directory.
*   Set up a standard Monorepo structure or a simple unified project depending on preference (starting with separate `client` and `server` folders is safest).

## Verification Plan

### Automated Tests
*   **Backend**: Unit tests for AI service and Schema validation using Jest (standard in NestJS).
*   **Frontend**: Component tests for the Schema Renderer.

### Manual Verification
*   **End-to-End**: Verify that a hardcoded JSON schema renders correctly in the browser.
*   **AI Flow**: Verify that sending a text prompt to the backend returns a valid JSON schema.
