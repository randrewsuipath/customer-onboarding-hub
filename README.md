# Customer Onboarding Hub

A polished, enterprise-grade web application demonstrating end-to-end customer onboarding orchestration. This demo showcases how a modern customer-facing portal sits in front of internal automations, making the onboarding process transparent to external customers while revealing how internal systems, document processing, human approvals, and UiPath robots work behind the scenes.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/randrewsuipath/customer-onboarding-hub)

## Overview

The Customer Onboarding Hub features dual personas (customer and internal operations), realistic document extraction simulation, exception handling workflows, and a complete automation timeline that illustrates UiPath's orchestration capabilities across Document Understanding, Action Center, Integration Service, and enterprise systems (CRM, ERP, KYC, banking).

Designed for live enterprise software demos, especially for UiPath customers, with executive-friendly visuals and production-quality code.

## Key Features

- **Dual View System**: Customer-facing portal and internal operations console
- **Real-time Progress Tracking**: Visual stepper showing onboarding stages with status indicators
- **Document Management**: Upload, AI extraction simulation, and validation workflows
- **Human Review Workflow**: Action Center-style task approval interface
- **Automation Timeline**: Visual process map showing end-to-end orchestration flow
- **Demo Script**: Built-in presenter guidance with talk tracks and value messages
- **Mock Data & Simulations**: Realistic data flows without requiring backend APIs
- **Responsive Design**: Modern, enterprise-grade UI that works across all devices

## Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### UI Components & Styling
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### State Management & Forms
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Data Visualization
- **Recharts** - Chart components

### UiPath Integration
- **@uipath/uipath-typescript** - Official UiPath SDK

### Deployment
- **Cloudflare Pages** - Static site hosting

## Prerequisites

- [Bun](https://bun.sh/) (latest version recommended)
- UiPath Cloud account with appropriate OAuth credentials
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd customer-onboarding-hub
```

2. **Install dependencies**

```bash
bun install
```

3. **Configure environment variables**

Create or update the `.env` file in the project root:

```env
VITE_UIPATH_BASE_URL=https://staging.api.uipath.com
VITE_UIPATH_ORG_NAME=your_org_name
VITE_UIPATH_TENANT_NAME=your_tenant_name
VITE_UIPATH_CLIENT_ID=your_client_id
VITE_UIPATH_REDIRECT_URI=
VITE_UIPATH_SCOPE=OR.Administration.Read OR.Assets.Read OR.Execution.Read OR.Folders OR.Jobs OR.Queues.Read OR.Tasks PIMS Traces.Api DataFabric.Data.Read DataFabric.Data.Write DataFabric.Schema.Read ConversationalAgents
```

**Note**: `VITE_UIPATH_REDIRECT_URI` is auto-detected from the current URL if left empty.

## Development

### Start the development server

```bash
bun run dev
```

The application will be available at `http://localhost:3000` (or the port specified in the PORT environment variable).

### Build for production

```bash
bun run build
```

The production build will be output to the `dist` directory.

### Preview production build

```bash
bun run preview
```

### Linting

```bash
bun run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (AppLayout, etc.)
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
│   ├── useAuth.tsx     # UiPath authentication
│   └── use-theme.ts    # Theme management
├── lib/                # Utility functions
├── pages/              # Application pages
│   └── HomePage.tsx    # Main application page
├── index.css           # Global styles and Tailwind config
└── main.tsx            # Application entry point
```

## Usage

### Demo Flow

1. **Customer Portal View**
   - Shows onboarding progress for "Apex Industrial Services"
   - Displays uploaded documents with AI extraction results
   - Highlights validation issues requiring attention
   - Provides action panel for customer responses

2. **Operations Console View**
   - Queue overview with KPIs
   - Case detail panel with risk assessment
   - Automation activity feed showing UiPath events
   - Human review task card for exception handling

3. **Automation Timeline View**
   - Visual process flow diagram
   - Actor swimlanes (Customer, Portal, UiPath, Systems)
   - Interactive tooltips explaining orchestration steps

4. **Demo Script View**
   - Presenter guidance and talk tracks
   - Key value messages
   - Discovery questions

### Switching Views

Use the top navigation bar to switch between:
- Customer View
- Operations View
- Automation Timeline
- Demo Script

### Simulating Workflows

The application includes mock state transitions:
- Document upload and extraction
- Validation checks
- Exception detection
- Human review approval
- ERP record creation
- Completion notifications

## Deployment

### Deploy to Cloudflare Pages

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/randrewsuipath/customer-onboarding-hub)

#### Manual Deployment

1. **Build the project**

```bash
bun run build
```

2. **Deploy using Wrangler**

```bash
bunx wrangler pages deploy dist
```

3. **Configure environment variables in Cloudflare Dashboard**

Navigate to your Pages project settings and add the required environment variables:
- `VITE_UIPATH_BASE_URL`
- `VITE_UIPATH_ORG_NAME`
- `VITE_UIPATH_TENANT_NAME`
- `VITE_UIPATH_CLIENT_ID`
- `VITE_UIPATH_SCOPE`

#### Automatic Deployment

Connect your repository to Cloudflare Pages for automatic deployments on every push:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Pages
3. Click "Create a project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
6. Add environment variables
7. Deploy

## UiPath Integration

This application is designed to integrate with UiPath services:

- **Orchestrator**: Process execution and job management
- **Document Understanding**: AI-powered document extraction
- **Action Center**: Human-in-the-loop task management
- **Integration Service**: External system connectors
- **Data Service**: Structured data storage

The current implementation uses mock data and simulated workflows. To connect to real UiPath services, implement the integration stubs found throughout the codebase.

## Customization

### Branding

Update colors in `src/index.css` under the `:root` and `.dark` selectors to match your brand palette.

### Mock Data

Modify mock data in the component files to reflect your specific use case:
- Customer profiles
- Document types
- Validation rules
- Automation events

### Process Flow

Customize the automation timeline in the Automation Timeline view to match your actual process orchestration.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is provided as-is for demonstration purposes.

## Support

For issues, questions, or contributions, please refer to the project repository.

---

**Built with ❤️ using React, TypeScript, and UiPath SDK**