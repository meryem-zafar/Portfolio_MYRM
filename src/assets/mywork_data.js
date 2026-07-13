import project1_img from '../assets/project_1.svg';
import project2_img from '../assets/project_2.svg';
import project3_img from '../assets/project_3.svg';
import project4_img from '../assets/project_4.svg';
import project5_img from '../assets/project_5.svg';
import project6_img from '../assets/project_6.svg';

const mywork_data = [
    {
        w_no: 1,
        w_name: 'AI Study Companion',
        w_img: project1_img,
        w_category: 'AI',
        w_desc: 'A polished learning assistant that blends chat, notes, and study planning into one experience.',
        w_description_long: 'An intelligent educational assistant designed to optimize student learning. It combines custom Retrieval-Augmented Generation (RAG) with local Vector Databases, providing contextual answers from textbooks, generating customized notes, and dynamically updating active recall calendars based on progress.',
        w_tech: ['React', 'Firebase', 'OpenAI API', 'VectorDB', 'LangChain'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Study Time Cut', value: '35%' },
            { label: 'Active Users', value: '4.2K+' },
            { label: 'Note Accuracy', value: '98.5%' }
        ],
        w_challenge: 'Students struggle to find relevant study material quickly and organize their revision schedules scientifically.',
        w_solution: 'Built a semantic search tool over uploaded PDFs using Vector Embeddings, linked with an automated spaced-repetition scheduler.'
    },
    {
        w_no: 2,
        w_name: 'Smart Mobile Dashboard',
        w_img: project2_img,
        w_category: 'Mobile',
        w_desc: 'A modern, responsive dashboard UI for tracking productivity, insights, and task flow.',
        w_description_long: 'A cross-platform Flutter application that gives users real-time dashboard analytics. Built with beautiful custom micro-interactions, dark mode, smooth charts, and Offline-First capability powered by Hive database storage.',
        w_tech: ['Flutter', 'Dart', 'Hive DB', 'BLoC', 'FL Charts'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Load Time', value: '180ms' },
            { label: 'App Rating', value: '4.9/5' },
            { label: 'Offline Sync', value: 'Instant' }
        ],
        w_challenge: 'Existing dashboards suffer from laggy chart rendering on mobile devices and lack robust offline operation.',
        w_solution: 'Implemented FL Charts with optimized redrawing cycles, and custom local-to-cloud synchronization layers.'
    },
    {
        w_no: 3,
        w_name: 'Creative Portfolio System',
        w_img: project3_img,
        w_category: 'Web',
        w_desc: 'A dynamic portfolio experience featuring elegant animations and storytelling sections.',
        w_description_long: 'A premium developer portfolio template featuring rich layout transitions, Lenis smooth scrolling, GSAP scroll-triggered effects, and a highly interactive user experience designed to impress tech recruiters and potential clients.',
        w_tech: ['React', 'Framer Motion', 'GSAP', 'Vite', 'Tailwind'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Page Speed', value: '99/100' },
            { label: 'Impressions', value: '25K+' },
            { label: 'Bounce Rate', value: '-22%' }
        ],
        w_challenge: 'Most portfolios are static and fail to showcase frontend capability, leading to low engagement.',
        w_solution: 'Engineered a highly polished experience using advanced GSAP animations and physical layout systems that make browsing engaging.'
    },
    {
        w_no: 4,
        w_name: 'Automation Assistant',
        w_img: project4_img,
        w_category: 'AI',
        w_desc: 'An AI-driven automation interface built around useful workflows and fast interactions.',
        w_description_long: 'A workflow automation engine powered by LLM agent logic. Users can build multi-step workflows in natural language, which are then parsed into sequence graphs and executed automatically across web services.',
        w_tech: ['Node.js', 'LangGraph', 'Gemini API', 'Express', 'React'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Tasks Auto-Run', value: '120K+' },
            { label: 'Success Rate', value: '96.8%' },
            { label: 'API Latency', value: '120ms' }
        ],
        w_challenge: 'Non-technical users cannot configure complex nested API automation scripts easily.',
        w_solution: 'Created a natural language query parser using Gemini API that translates prompts directly to LangGraph execution steps.'
    },
    {
        w_no: 5,
        w_name: 'Launch Landing Page',
        w_img: project5_img,
        w_category: 'Web',
        w_desc: 'A premium landing experience with clear messaging, motion, and conversion-focused sections.',
        w_description_long: 'A conversion-optimized SaaS product landing page. Includes customized animated Pricing tables, FAQs, Interactive Feature Showcases, and fully responsive layouts that look stunning on screens of any size.',
        w_tech: ['React', 'CSS Grid', 'Tailwind', 'GSAP', 'Vite'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Conversion Lift', value: '+42%' },
            { label: 'Mobile Score', value: '98%' },
            { label: 'Time on Page', value: '2.5m' }
        ],
        w_challenge: 'Product landing page bounce rate was high due to slow loading speeds and unengaging copy layouts.',
        w_solution: 'Implemented pure SVG icons, static asset pre-caching, and Framer Motion staggered grid layouts to draw attention.'
    },
    {
        w_no: 6,
        w_name: 'Agentic AI Prototype',
        w_img: project6_img,
        w_category: 'AI',
        w_desc: 'A prototype exploring agent-like workflows and multi-step AI collaboration.',
        w_description_long: 'A research prototype demonstrating a multi-agent system where different AI roles (Coder, Planner, QA) communicate via a shared blackboard to solve developer bugs and compile code autonomously.',
        w_tech: ['Python', 'LangGraph', 'Docker API', 'FastAPI', 'Gemini API'],
        w_github: 'https://github.com/meryem-zafar',
        w_live: 'https://github.com/meryem-zafar',
        w_metrics: [
            { label: 'Bugs Solved', value: '78%' },
            { label: 'Agent Sync', value: '80ms' },
            { label: 'Tests Passed', value: '92.1%' }
        ],
        w_challenge: 'Single-prompt LLMs fail on complex code changes due to context limitations and lack of verification cycles.',
        w_solution: 'Designed a self-correcting agent loop where code is compiled in a sandbox Docker container and linter/compiler errors are fed back to the coder agent.'
    }
];

export default mywork_data;