export const MONTHS = {
  m1: {
    label: 'Month 1',
    title: 'Advanced JS + TypeScript + Python + Git',
    color: 'b-purple',
    intro: 'Foundation month. Your internship gave you basic JS and Python — this month sharpens both to production level. You will write cleaner, more professional code after this.',
    ai: 'Reading: Transformers overview. Watch "Attention is All You Need" explained. No code yet — just building mental model.',
    weeks: [
      {
        w: 'Week 1',
        focus: 'Advanced JavaScript',
        items: [
          { t: 'Closures, scope, hoisting, execution context', s: 'The basis of React hooks and module patterns' },
          { t: 'Prototypal inheritance and the prototype chain', s: 'Understand how classes compile down to this' },
          { t: 'Event loop, call stack, microtasks vs macrotasks', s: 'Critical for async debugging' },
          { t: 'ES6+: Promises, async/await, destructuring, spread, optional chaining', s: 'Use daily in React and Next.js' },
          { t: 'Modules: CommonJS vs ES Modules, import/export', s: '' }
        ]
      },
      {
        w: 'Week 2',
        focus: 'TypeScript',
        items: [
          { t: 'Types vs interfaces, union types, intersection types', s: '' },
          { t: 'Generics: T, K, V — write reusable typed utilities', s: '' },
          { t: 'Utility types: Partial, Required, Pick, Omit, Record', s: 'Used constantly in React components' },
          { t: 'Type narrowing, type guards, discriminated unions', s: '' },
          { t: 'Config: tsconfig.json, strict mode, path aliases', s: '' }
        ]
      },
      {
        w: 'Week 3',
        focus: 'Python Advanced',
        items: [
          { t: 'Async/await and asyncio event loop in Python', s: 'FastAPI is fully async — this is critical' },
          { t: 'Decorators: write your own function and class decorators', s: 'FastAPI routes, middleware, and auth are all decorators' },
          { t: 'Dataclasses vs Pydantic models — when to use each', s: '' },
          { t: 'Type hints: Annotated, Optional, Union, TypeVar', s: '' },
          { t: 'Context managers: __enter__, __exit__, async with', s: 'Used for DB sessions in SQLAlchemy' }
        ]
      },
      {
        w: 'Week 4',
        focus: 'Git + Linux + HTTP',
        items: [
          { t: 'Git: branching strategies, rebase vs merge, cherry-pick, stash', s: '' },
          { t: 'Git: conventional commits, PR reviews, resolving conflicts', s: '' },
          { t: 'Linux: file system, permissions (chmod), process management', s: 'Docker and server work requires this' },
          { t: 'HTTP status codes: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500', s: 'Know the exact meaning of each for APIs' },
          { t: 'HTTP methods: GET, POST, PUT, PATCH, DELETE semantics', s: '' }
        ]
      }
    ]
  },
  m2: {
    label: 'Month 2',
    title: 'React + Next.js + FastAPI Foundations',
    color: 'b-green',
    intro: 'This is where your frontend and backend start taking real shape. By end of this month you can build a full-stack page with a working API behind it.',
    ai: 'Prompt Engineering: Zero-shot, Few-shot, Chain of Thought. Build your first Claude API call in a Python script.',
    weeks: [
      {
        w: 'Week 5',
        focus: 'React Deep Dive',
        items: [
          { t: 'Hooks: useState, useEffect, useContext, useRef, useMemo, useCallback', s: 'Know when each optimises vs when it hurts' },
          { t: 'Custom hooks — extract logic, keep components clean', s: '' },
          { t: 'Context API + useReducer for state management', s: 'Before reaching for Redux' },
          { t: 'React Query / TanStack Query for server state', s: 'This is how production apps fetch data' },
          { t: 'Error boundaries, Suspense, lazy loading', s: '' }
        ]
      },
      {
        w: 'Week 6',
        focus: 'Next.js App Router',
        items: [
          { t: 'App Router vs Pages Router — when and why', s: 'Synapse uses App Router — learn this exclusively' },
          { t: 'Server Components vs Client Components — rendering model', s: 'The most important Next.js concept in 2024' },
          { t: 'Server Actions, route handlers, middleware', s: '' },
          { t: 'Data fetching: fetch with cache/revalidate, streaming', s: '' },
          { t: 'Layout nesting, loading.tsx, error.tsx, not-found.tsx', s: '' }
        ]
      },
      {
        w: 'Week 7',
        focus: 'FastAPI Basics',
        items: [
          { t: 'Path params, query params, request body with Pydantic', s: '' },
          { t: 'Response models, status codes, response headers', s: '' },
          { t: 'Routers: APIRouter, prefix, tags, include_router', s: 'Organise by domain: /auth, /projects, /ai' },
          { t: 'Automatic docs: Swagger UI, ReDoc — how to use them', s: '' },
          { t: 'CORS middleware setup', s: '' }
        ]
      },
      {
        w: 'Week 8',
        focus: 'FastAPI Advanced',
        items: [
          { t: 'Dependency Injection: Depends(), nested dependencies', s: 'Used for auth, DB sessions, rate limiting' },
          { t: 'Background tasks, lifespan events (startup/shutdown)', s: '' },
          { t: 'Middleware: custom middleware, request timing, logging', s: '' },
          { t: 'Error handling: HTTPException, custom exception handlers', s: '' },
          { t: 'Pydantic v2: validators, model_config, field_validator', s: '' }
        ]
      }
    ]
  },
  m3: {
    label: 'Month 3',
    title: 'Database + Security + Docker',
    color: 'b-orange',
    intro: 'Backend muscle. This month you make the app persist data, stay secure, and run in containers. The most "infrastructure" heavy month.',
    ai: 'Embeddings: understand vector representations. Build a simple text similarity script using sentence-transformers.',
    weeks: [
      {
        w: 'Week 9',
        focus: 'PostgreSQL',
        items: [
          { t: 'Indexes: B-tree, partial indexes, composite indexes, EXPLAIN ANALYZE', s: 'Index wrong and your queries crawl at scale' },
          { t: 'JSONB: store, query, index JSON fields', s: 'Synapse stores AI outputs and config in JSONB' },
          { t: 'Transactions: ACID, isolation levels, savepoints', s: '' },
          { t: 'Triggers and functions: audit logs, auto-timestamps', s: '' },
          { t: 'Query optimization: avoid N+1, use CTEs, window functions', s: '' }
        ]
      },
      {
        w: 'Week 10',
        focus: 'SQLAlchemy + Alembic',
        items: [
          { t: 'ORM models: Column types, relationships (one-to-many, many-to-many)', s: '' },
          { t: 'Sessions: session lifecycle, scoped_session, async sessions', s: '' },
          { t: 'Repository pattern with SQLAlchemy', s: 'Clean separation of DB logic' },
          { t: 'Alembic: init, revision, upgrade, downgrade, autogenerate', s: 'Every schema change needs a migration' },
          { t: 'Async SQLAlchemy with asyncpg driver', s: 'FastAPI is async — DB layer must be too' }
        ]
      },
      {
        w: 'Week 11',
        focus: 'Database Design',
        items: [
          { t: 'Normalization: 1NF, 2NF, 3NF — and when to denormalize', s: '' },
          { t: 'ER diagrams: entities, relationships, cardinality', s: 'Draw the Synapse schema before building it' },
          { t: 'Indexing strategy: what to index, what not to', s: '' },
          { t: 'Connection pooling: PgBouncer, SQLAlchemy pool settings', s: '' },
          { t: 'Soft deletes vs hard deletes pattern', s: '' }
        ]
      },
      {
        w: 'Week 12',
        focus: 'Security + Docker',
        items: [
          { t: 'JWT: access tokens (15min), refresh tokens (7 days), blacklisting', s: '' },
          { t: 'bcrypt: hashing passwords, cost factor, timing attacks', s: '' },
          { t: 'RBAC: Owner > Admin > Project Manager > Developer > Viewer', s: '' },
          { t: 'Rate limiting: per-IP, per-user, sliding window algorithm', s: '' },
          { t: 'Docker: Dockerfile best practices, docker-compose, volumes, networks', s: '' }
        ]
      }
    ]
  },
  m4: {
    label: 'Month 4',
    title: 'AI Stack Foundations',
    color: 'b-blue',
    intro: 'The heart of Synapse. This month everything clicks into place. By the end you have a working RAG pipeline and your first AI feature in production.',
    ai: 'Build: Requirement Review feature (Prompt Engineering + Structured Output + Embeddings) and Semantic Search (RAG pipeline).',
    weeks: [
      {
        w: 'Week 13',
        focus: 'LLMs and Transformers',
        items: [
          { t: 'Transformer architecture: encoder, decoder, encoder-decoder', s: '' },
          { t: 'Attention mechanism: self-attention, multi-head attention, why it works', s: '' },
          { t: 'Tokens, context windows, temperature, top-p, top-k', s: 'Know what each parameter does to output' },
          { t: 'Different LLM families: GPT, Claude, Llama, Mistral — trade-offs', s: '' },
          { t: 'Structured output: JSON mode, function calling, tool use', s: 'Critical for Test Case Generation feature' }
        ]
      },
      {
        w: 'Week 14',
        focus: 'Prompt Engineering',
        items: [
          { t: 'Zero-shot prompting — direct instruction without examples', s: '' },
          { t: 'Few-shot prompting — include 2-5 examples in the prompt', s: '' },
          { t: 'Chain of Thought (CoT) — "think step by step"', s: 'Improves accuracy on complex reasoning' },
          { t: 'System prompts, role prompting, persona design', s: '' },
          { t: 'Structured output: XML tags, JSON schema enforcement', s: '' }
        ]
      },
      {
        w: 'Week 15',
        focus: 'Embeddings + RAG',
        items: [
          { t: 'Embeddings: what they are, cosine similarity, semantic search', s: '' },
          { t: 'Chunking strategies: fixed, recursive, semantic, sentence', s: 'Chunk size is the #1 RAG quality lever' },
          { t: 'RAG pipeline: Document → Chunk → Embed → Store → Retrieve → Generate', s: '' },
          { t: 'Hybrid search: dense (embedding) + sparse (BM25) retrieval', s: '' },
          { t: 'Re-ranking: cross-encoder re-rankers for better precision', s: '' }
        ]
      },
      {
        w: 'Week 16',
        focus: 'Vector DBs + LangChain',
        items: [
          { t: 'pgvector: install, create vector columns, IVFFlat vs HNSW indexes', s: '' },
          { t: 'FAISS: IndexFlatL2, IndexIVFFlat, save/load index', s: '' },
          { t: 'Chroma: ephemeral vs persistent, collections, metadata filtering', s: '' },
          { t: 'LangChain: chains, prompts, document loaders, output parsers', s: '' },
          { t: 'LlamaIndex: document ingestion, node parsers, query engines', s: '' }
        ]
      }
    ]
  },
  m5: {
    label: 'Month 5',
    title: 'AI Agents + NLP + System Design',
    color: 'b-pink',
    intro: 'Advanced AI and architecture patterns. After this month you understand how Synapse thinks and how it should scale.',
    ai: 'Build: Meeting Summarization, Test Case Generation, Impact Analysis, and Dependency Detection features.',
    weeks: [
      {
        w: 'Week 17',
        focus: 'AI Agents',
        items: [
          { t: 'Agent architecture: ReAct, Plan-and-Execute, multi-agent', s: '' },
          { t: 'Tool calling: define tools, parse tool calls, execute and return', s: '' },
          { t: 'Memory types: short-term (context), long-term (vector store), episodic', s: '' },
          { t: 'LangGraph: stateful agent graphs, conditional edges, checkpointing', s: '' },
          { t: 'CrewAI: multi-agent crews, task delegation, agent roles', s: '' }
        ]
      },
      {
        w: 'Week 18',
        focus: 'NLP + AI Evaluation',
        items: [
          { t: 'NER: named entity recognition, spaCy, transformers NER pipeline', s: 'Used in Dependency Detection feature' },
          { t: 'Summarization: extractive vs abstractive, BART, T5', s: 'Used in Meeting Summarization feature' },
          { t: 'AI Evaluation: Precision, Recall, F1 for classification tasks', s: '' },
          { t: 'RAG evaluation: BLEU, ROUGE, RAGAS framework', s: 'How to measure if your RAG is actually good' },
          { t: 'LLM-as-judge: use GPT/Claude to evaluate other LLM outputs', s: '' }
        ]
      },
      {
        w: 'Week 19',
        focus: 'System Design',
        items: [
          { t: 'REST API design: resource naming, versioning, pagination, filtering', s: '' },
          { t: 'Microservices: when to split, inter-service communication', s: '' },
          { t: 'Event-driven: pub/sub, message queues (Redis Streams / Celery)', s: '' },
          { t: 'API Gateway pattern, rate limiting at gateway level', s: '' },
          { t: 'Caching strategies: cache-aside, write-through, CDN caching', s: '' }
        ]
      },
      {
        w: 'Week 20',
        focus: 'Design Patterns',
        items: [
          { t: 'Repository pattern: abstract DB layer, unit-testable code', s: 'Already using this with SQLAlchemy' },
          { t: 'Service layer: business logic lives here, not in routes', s: '' },
          { t: 'Factory pattern: create objects without specifying exact class', s: '' },
          { t: 'Singleton: one DB connection pool, one config instance', s: '' },
          { t: 'Observer / Strategy: event hooks, swappable algorithm implementations', s: '' }
        ]
      }
    ]
  },
  m6: {
    label: 'Month 6',
    title: 'Testing + Research + Project Completion',
    color: 'b-red',
    intro: 'Finish and polish month. Write tests, do research writeups, complete remaining AI features, and make the project presentation-ready.',
    ai: 'Build: Delay Diagnostics feature. Complete all AI features. Write research evaluation report.',
    weeks: [
      {
        w: 'Week 21',
        focus: 'Testing',
        items: [
          { t: 'pytest: fixtures, parametrize, conftest.py, markers', s: '' },
          { t: 'Unit testing FastAPI: TestClient, dependency overrides', s: '' },
          { t: 'Mocking: unittest.mock, MagicMock, patch, monkeypatch', s: 'Mock LLM calls in tests — never call real API in test suite' },
          { t: 'Integration testing: test with real DB (test transactions, rollback)', s: '' },
          { t: 'Coverage: pytest-cov, what to aim for (80%+)', s: '' }
        ]
      },
      {
        w: 'Week 22',
        focus: 'Research Skills',
        items: [
          { t: 'Literature review: how to find papers, Google Scholar, Semantic Scholar', s: '' },
          { t: 'Reading papers: abstract → conclusion → methodology → results', s: '' },
          { t: 'Experiment design: control variables, baselines, ablation studies', s: '' },
          { t: 'Evaluation metrics: define them before you build, not after', s: '' },
          { t: 'Scientific writing: IMRaD structure, clear claims with evidence', s: '' }
        ]
      },
      {
        w: 'Week 23',
        focus: 'AI Features + Integration',
        items: [
          { t: 'Delay Diagnostics: historical data analysis + LLM reasoning', s: '' },
          { t: 'Knowledge Graph for Impact Analysis: NetworkX or Neo4j basics', s: '' },
          { t: 'End-to-end integration tests for all AI features', s: '' },
          { t: 'Performance: async LLM calls, batch embeddings, caching responses', s: '' },
          { t: 'Observability: LangSmith or custom logging for all AI calls', s: '' }
        ]
      },
      {
        w: 'Week 24',
        focus: 'Polish + Presentation',
        items: [
          { t: 'README.md: architecture diagram, setup instructions, demo GIF', s: '' },
          { t: 'API documentation: finalize OpenAPI schema, add examples', s: '' },
          { t: 'Deployment: Docker Compose for full stack, environment configs', s: '' },
          { t: 'Research writeup: evaluation results, comparison table, future work', s: '' },
          { t: 'Portfolio: push everything to GitHub, add live demo link', s: '' }
        ]
      }
    ]
  }
};

export const TIMETABLE = {
  weekday: [
    { time: '5:30 – 6:30am', label: 'Aptitude', cls: 'b-orange', body: '1hr focused aptitude practice. Rotate: Quant → Logical → Verbal weekly. 15 questions + review wrong answers.' },
    { time: '6:30 – 7:30am', label: 'Get ready', cls: 'b-gray', free: true, body: 'Breakfast + commute prep' },
    { time: '7:30am – 7:00pm', label: 'Internship', cls: 'b-green', body: 'During internship: note what technologies/patterns you encountered. 5 min log at end of day.' },
    { time: '7:00 – 7:30pm', label: 'Commute/decompress', cls: 'b-gray', free: true, body: '' },
    { time: '7:30 – 8:30pm', label: 'Tech learning', cls: 'b-purple', body: "Current month's topic. Watch 1 video OR read 1 article. Take handwritten notes — don't just passively watch." },
    { time: '8:30 – 9:30pm', label: 'LeetCode', cls: 'b-blue', body: '1 problem from current phase. Attempt solo for 25 min. If stuck, read hint only. Then code. Review optimal solution after.' },
    { time: '9:30 – 10:30pm', label: 'Project OR Research', cls: 'b-pink', body: 'Alternate daily: Mon/Wed/Fri = Project work. Tue/Thu = Research (read a paper, take notes, write summaries).' },
    { time: '10:30 – 12:30am', label: 'Wind down + Sleep prep', cls: 'b-gray', free: true, body: 'Light reading only. No screens 30min before sleep.' },
    { time: '12:30 – 5:30am', label: 'Sleep (5hrs)', cls: 'b-gray', free: true, body: 'Non-negotiable. Consistency > late night grinding.' }
  ],
  weekend: [
    { time: '6:00 – 6:30am', label: 'Wake up', cls: 'b-gray', free: true, body: '' },
    { time: '6:30 – 9:30am', label: 'Aptitude (3hrs)', cls: 'b-orange', body: 'Weekend = full session. 30 questions + timed mock test. Review all wrong answers with explanation.' },
    { time: '9:30 – 10:00am', label: 'Breakfast', cls: 'b-gray', free: true, body: '' },
    { time: '10:00am – 1:00pm', label: 'Tech learning (3hrs)', cls: 'b-purple', body: "Deep session on current month's topic. Implement everything you watched this week. Colab or local project." },
    { time: '1:00 – 2:00pm', label: 'Lunch + break', cls: 'b-gray', free: true, body: '' },
    { time: '2:00 – 5:00pm', label: 'LeetCode (3hrs)', cls: 'b-blue', body: 'Tackle 3 problems from current phase. First 2 solo. Third one: study optimal approach if stuck after 20min.' },
    { time: '5:00 – 5:30pm', label: 'Break + tea', cls: 'b-gray', free: true, body: '' },
    { time: '5:30 – 7:30pm', label: 'Project work (2hrs)', cls: 'b-pink', body: "Build Synapse features. Focus: implement one complete feature or fix a set of related bugs. Commit before stopping." },
    { time: '7:30 – 8:30pm', label: 'Dinner', cls: 'b-gray', free: true, body: '' },
    { time: '8:30 – 9:30pm', label: 'Research (1hr)', cls: 'b-green', body: "Read 1 paper related to an AI feature you're building. Summarize in 5 bullet points. Add to your research doc." },
    { time: '9:30 – 1:00am', label: 'Tech learning cont. (3.5hrs)', cls: 'b-purple', body: 'Continue implementation, or start next week\'s topic preview. This is your deepest work block of the week.' },
    { time: '1:00 – 6:00am', label: 'Sleep (5hrs)', cls: 'b-gray', free: true, body: '' }
  ]
};

export const APTITUDE_SCHEDULE = {
  'Week 1-2': 'Percentages + Profit/Loss (Quant) | Seating Arrangements (Logical) | RC basics (Verbal)',
  'Week 3-4': 'Time/Speed/Distance (Q) | Puzzles + Blood Relations (L) | Sentence Correction (V)',
  'Week 5-6': 'Ratio/Proportion (Q) | Coding-Decoding (L) | Synonyms/Antonyms (V)',
  'Week 7-8': 'Simple/Compound Interest (Q) | Syllogisms (L) | Para Jumbles (V)',
  'Week 9-10': 'Averages/Mixtures (Q) | All Logical (L) mock | Full Verbal mock (V)',
  'Week 11-12': 'Number Series (Q) | All types mixed (L) | All verbal mixed (V)',
  'Week 13-16': 'Permutations/Combinations (Q) | Full mock tests | Speed improvement',
  'Week 17-24': 'Full mock tests 3x/week | Weak area revision | Timed practice only'
};

export const LC_PHASES = {
  p1: {
    label: 'Phase 1',
    sub: 'Easy — Arrays, Strings, Math',
    months: 'Month 1–2',
    target: 25,
    problems: [
      { n: 'Two Sum', d: 'E' }, { n: 'Valid Parentheses', d: 'E' }, { n: 'Valid Palindrome', d: 'E' },
      { n: 'Valid Anagram', d: 'E' }, { n: 'Binary Search', d: 'E' }, { n: 'Single Number', d: 'E' },
      { n: 'Majority Element', d: 'E' }, { n: 'Missing Number', d: 'E' }, { n: 'Reverse String', d: 'E' },
      { n: 'Maximum Subarray', d: 'M' }, { n: 'Climbing Stairs', d: 'E' }, { n: 'Contains Duplicate', d: 'E' },
      { n: 'Merge Sorted Array', d: 'E' }, { n: 'Remove Element', d: 'E' }, { n: 'Rotate Array', d: 'M' },
      { n: 'Palindrome Number', d: 'E' }, { n: 'Plus One', d: 'E' }, { n: 'Sqrt(x)', d: 'E' },
      { n: 'Remove Duplicates from Sorted Array', d: 'E' }, { n: 'Number of 1 Bits', d: 'E' },
      { n: 'Best Time to Buy and Sell Stock', d: 'E' }, { n: 'House Robber', d: 'M' },
      { n: 'Jump Game', d: 'M' }, { n: 'Best Time to Buy and Sell Stock II', d: 'M' }, { n: 'Path Sum', d: 'E' }
    ]
  },
  p2: {
    label: 'Phase 2',
    sub: 'Easy-Med — Trees, Linked Lists',
    months: 'Month 2–3',
    target: 25,
    problems: [
      { n: 'Merge Two Sorted Lists', d: 'E' }, { n: 'Invert Binary Tree', d: 'E' }, { n: 'Linked List Cycle', d: 'E' },
      { n: 'Maximum Depth of Binary Tree', d: 'E' }, { n: 'Diameter of Binary Tree', d: 'E' },
      { n: 'Middle of the Linked List', d: 'E' }, { n: 'Convert Sorted Array to Binary Search Tree', d: 'E' },
      { n: 'Symmetric Tree', d: 'E' }, { n: 'Validate Binary Search Tree', d: 'M' }, { n: 'Min Stack', d: 'M' },
      { n: 'Kth Smallest Element in a BST', d: 'M' }, { n: 'Reverse Linked List', d: 'E' },
      { n: 'Product of Array Except Self', d: 'M' }, { n: 'Find Peak Element', d: 'M' },
      { n: 'Find Minimum in Rotated Sorted Array', d: 'M' }, { n: 'Binary Tree Level Order Traversal', d: 'M' },
      { n: 'Binary Tree Right Side View', d: 'M' }, { n: 'Minimum Absolute Difference in BST', d: 'E' },
      { n: 'Merge Intervals', d: 'M' }, { n: 'Add Two Numbers', d: 'M' }, { n: 'Valid Sudoku', d: 'M' },
      { n: 'Two Sum II - Input Array Is Sorted', d: 'M' }, { n: 'Remove Nth Node From End of List', d: 'M' },
      { n: 'Unique Paths', d: 'M' }, { n: 'Minimum Path Sum', d: 'M' }
    ]
  },
  p3: {
    label: 'Phase 3',
    sub: 'Medium — Classic Problems',
    months: 'Month 3–5',
    target: 30,
    problems: [
      { n: '3Sum', d: 'M' }, { n: 'Container With Most Water', d: 'M' }, { n: 'Group Anagrams', d: 'M' },
      { n: 'Kth Largest Element in an Array', d: 'M' }, { n: 'Longest Palindromic Substring', d: 'M' },
      { n: 'Longest Substring Without Repeating Characters', d: 'M' }, { n: 'Maximum Product Subarray', d: 'M' },
      { n: 'Number of Islands', d: 'M' }, { n: 'Permutations', d: 'M' }, { n: 'Rotate Image', d: 'M' },
      { n: 'Search a 2D Matrix', d: 'M' }, { n: 'Search in Rotated Sorted Array', d: 'M' },
      { n: 'Subsets', d: 'M' }, { n: 'Top K Frequent Elements', d: 'M' }, { n: 'Trapping Rain Water', d: 'H' },
      { n: 'Word Break', d: 'M' }, { n: 'Coin Change', d: 'M' }, { n: 'Combination Sum', d: 'M' },
      { n: 'Course Schedule', d: 'M' }, { n: 'Letter Combinations of a Phone Number', d: 'M' },
      { n: 'Longest Consecutive Sequence', d: 'M' }, { n: 'Set Matrix Zeroes', d: 'M' },
      { n: 'Spiral Matrix', d: 'M' }, { n: 'Game of Life', d: 'M' }, { n: 'Generate Parentheses', d: 'M' },
      { n: 'Sort List', d: 'M' }, { n: 'Maximum Sum Circular Subarray', d: 'M' }, { n: 'Evaluate Division', d: 'M' },
      { n: 'Clone Graph', d: 'M' }, { n: 'Surrounded Regions', d: 'M' }
    ]
  },
  p4: {
    label: 'Phase 4',
    sub: 'Med-Hard — Advanced',
    months: 'Month 5–6',
    target: 20,
    problems: [
      { n: 'Binary Tree Zigzag Level Order Traversal', d: 'M' }, { n: 'Construct Binary Tree from Preorder and Inorder Traversal', d: 'M' },
      { n: 'Flatten Binary Tree to Linked List', d: 'M' }, { n: 'Implement Trie (Prefix Tree)', d: 'M' },
      { n: 'Maximal Square', d: 'M' }, { n: 'Minimum Window Substring', d: 'H' }, { n: 'Word Search', d: 'M' },
      { n: 'Basic Calculator', d: 'H' }, { n: 'Copy List with Random Pointer', d: 'M' },
      { n: 'Design Add and Search Words Data Structure', d: 'M' }, { n: 'Find Median from Data Stream', d: 'H' },
      { n: 'Longest Increasing Subsequence', d: 'M' }, { n: 'Median of Two Sorted Arrays', d: 'H' },
      { n: 'Merge k Sorted Lists', d: 'H' }, { n: 'Word Search II', d: 'H' },
      { n: 'Reverse Nodes in k-Group', d: 'H' }, { n: 'Course Schedule II', d: 'M' },
      { n: 'Pow(x, n)', d: 'M' }, { n: 'Bitwise AND of Numbers Range', d: 'M' },
      { n: 'Construct Binary Tree from Inorder and Postorder Traversal', d: 'M' }
    ]
  }
};

export const RESOURCES = {
  frontend: {
    label: 'Frontend',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'Akshay Saini — Namaste JavaScript (YouTube)', w: 'Best JS internals course in India. Closures, event loop, this — all covered.', l: 'youtube.com/@akshaymarch7' },
      { t: 'rt-vid', tn: 'Video', n: 'Matt Pocock — TypeScript Tutorial (YouTube)', w: 'The best TypeScript practical course. Production-level.', l: 'youtube.com/@mattpocockuk' },
      { t: 'rt-vid', tn: 'Video', n: 'ByteGrad — React 2024 full course (YouTube)', w: 'Covers hooks, patterns, React Query.', l: 'youtube.com/@ByteGrad' },
      { t: 'rt-vid', tn: 'Video', n: 'Josh tried coding — Next.js App Router (YouTube)', w: 'Real projects with App Router, Server Components explained simply.', l: 'youtube.com/@joshtriedcoding' },
      { t: 'rt-read', tn: 'Read', n: 'Next.js official docs — App Router section', w: 'Official docs are excellent. Read alongside videos.', l: 'nextjs.org/docs' }
    ]
  },
  backend: {
    label: 'Backend',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'ArjanCodes — FastAPI series (YouTube)', w: 'Best production-quality FastAPI tutorials. Covers DI, async, testing.', l: 'youtube.com/@ArjanCodes' },
      { t: 'rt-vid', tn: 'Video', n: 'Patrick Loeber — Python async tutorial (YouTube)', w: 'asyncio, async/await, and decorators clearly explained.', l: 'youtube.com/@patloeber' },
      { t: 'rt-read', tn: 'Read', n: 'FastAPI official docs (fastapi.tiangolo.com)', w: "Tiangolo's docs are incredibly well written. The tutorial section alone is a full course.", l: 'fastapi.tiangolo.com' },
      { t: 'rt-vid', tn: 'Video', n: 'SQLAlchemy 2.0 — full tutorial (YouTube, Tech With Tim)', w: 'ORM, sessions, relationships with code.', l: 'youtube.com/@TechWithTim' },
      { t: 'rt-read', tn: 'Read', n: 'Pydantic v2 docs', w: 'Model validators, field validators, config — official.', l: 'docs.pydantic.dev' }
    ]
  },
  database: {
    label: 'Database',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'Hussein Nasser — PostgreSQL for Beginners (YouTube)', w: 'Indexes, JSONB, transactions explained at depth.', l: 'youtube.com/@hnasr' },
      { t: 'rt-vid', tn: 'Video', n: 'Alex The Analyst — SQL Mastery (YouTube)', w: 'Window functions, CTEs, query optimization.', l: 'youtube.com/@AlexTheAnalyst' },
      { t: 'rt-prac', tn: 'Practice', n: 'pgexercises.com', w: 'Free browser-based PostgreSQL practice problems.', l: 'pgexercises.com' },
      { t: 'rt-read', tn: 'Read', n: 'Use The Index, Luke! (use-the-index-luke.com)', w: 'The best free resource on SQL indexing. Read Chapter 1 minimum.', l: 'use-the-index-luke.com' }
    ]
  },
  security: {
    label: 'Security',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'ByteByteGo — JWT explained (YouTube)', w: 'Visual explanation of JWT flow, access/refresh tokens.', l: 'youtube.com/@ByteByteGo' },
      { t: 'rt-vid', tn: 'Video', n: 'ArjanCodes — Auth in FastAPI (YouTube)', w: 'bcrypt, JWT, and RBAC implemented end-to-end.', l: 'youtube.com/@ArjanCodes' },
      { t: 'rt-read', tn: 'Read', n: 'OWASP Authentication Cheat Sheet', w: 'Industry standard security practices. Free.', l: 'cheatsheetseries.owasp.org' }
    ]
  },
  devops: {
    label: 'DevOps',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'TechWorld with Nana — Docker for Beginners (YouTube)', w: 'Best free Docker course. Covers Dockerfile, Compose, networking.', l: 'youtube.com/@TechWorldwithNana' },
      { t: 'rt-vid', tn: 'Video', n: 'fireship — Git in 100 seconds (YouTube)', w: 'Then watch the full Git course on his channel.', l: 'youtube.com/@Fireship' },
      { t: 'rt-course', tn: 'Course', n: 'Linux Journey (linuxjourney.com)', w: 'Free, structured Linux basics course in browser.', l: 'linuxjourney.com' }
    ]
  },
  ai: {
    label: 'AI Stack',
    items: [
      { t: 'rt-vid', tn: 'Video', n: '3Blue1Brown — Attention in Neural Networks (YouTube)', w: 'The visual that makes transformers click. Watch twice.', l: 'youtube.com/@3blue1brown' },
      { t: 'rt-read', tn: 'Read', n: 'Jay Alammar — The Illustrated Transformer', w: 'Most shared transformer explanation ever. Free blog post.', l: 'jalammar.github.io/illustrated-transformer' },
      { t: 'rt-course', tn: 'Course', n: 'DeepLearning.AI — Prompt Engineering for Developers (free)', w: '1 hour, co-created with OpenAI. The standard.', l: 'deeplearning.ai/short-courses' },
      { t: 'rt-course', tn: 'Course', n: 'DeepLearning.AI — LangChain + RAG courses (free)', w: 'Multiple 1-hr courses covering RAG, agents, evaluation.', l: 'deeplearning.ai/short-courses' },
      { t: 'rt-vid', tn: 'Video', n: 'Krish Naik — Generative AI Playlist (YouTube)', w: 'RAG, vector DBs, LangChain, agents. Best free Hindi/English GenAI playlist.', l: 'youtube.com/@krishnaik06' },
      { t: 'rt-course', tn: 'Course', n: 'Microsoft — AI Agents for Beginners (GitHub)', w: 'Free, official, hands-on notebooks for agent patterns.', l: 'github.com/microsoft/ai-for-beginners' },
      { t: 'rt-read', tn: 'Read', n: 'LangChain + LangGraph official docs', w: 'langchain.com/docs and langchain-ai.github.io/langgraph', l: 'python.langchain.com' }
    ]
  },
  system: {
    label: 'System Design',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'ByteByteGo — System Design (YouTube)', w: 'Best free system design visual explanations. Watch 2-3/week.', l: 'youtube.com/@ByteByteGo' },
      { t: 'rt-read', tn: 'Read', n: 'Refactoring.Guru — Design Patterns', w: 'Every pattern with code examples in Python. Free website.', l: 'refactoring.guru/design-patterns' },
      { t: 'rt-course', tn: 'Course', n: 'ArjanCodes — Design Patterns in Python (YouTube)', w: 'Factory, Strategy, Observer with real Python code.', l: 'youtube.com/@ArjanCodes' }
    ]
  },
  testing: {
    label: 'Testing + Research',
    items: [
      { t: 'rt-vid', tn: 'Video', n: 'Corey Schafer — pytest tutorial (YouTube)', w: 'Full free pytest series. Fixtures, markers, conftest.', l: 'youtube.com/@coreyms' },
      { t: 'rt-read', tn: 'Read', n: 'pytest official docs', w: 'The docs have excellent tutorials — conftest.py, parametrize.', l: 'docs.pytest.org' },
      { t: 'rt-read', tn: 'Read', n: 'RAGAS — RAG Evaluation framework docs', w: 'How to measure RAG quality properly. Free.', l: 'docs.ragas.io' },
      { t: 'rt-read', tn: 'Read', n: 'Semantic Scholar (semanticscholar.org)', w: 'Free paper search. Filter by AI, NLP, software engineering.', l: 'semanticscholar.org' }
    ]
  }
};

export const SCRUM_REGISTER = [
  {
    date: '03 Aug 2026',
    week: 'Week 6',
    milestone: 'Scrum Sync & 30% Completion',
    deliverables: 'Coding Progress, Meeting with Scrum Master, 30% completion of the project',
    completion: 30,
    status: 'Upcoming'
  },
  {
    date: '07 Aug 2026',
    week: 'Week 6',
    milestone: 'Scrum Review & Review Paper Prep',
    deliverables: 'Coding Progress, Meeting with Scrum Master, 40% completion of the project, Review Paper preparation',
    completion: 40,
    status: 'Upcoming'
  },
  {
    date: '13 Aug 2026',
    week: 'Week 7',
    milestone: 'Scrum Review 2',
    deliverables: '1. Analyse Project flow, 2. Literature Review, 3. Evaluate Software tool based on Review paper, 4. Verify Git Repository, 5. AES upload, 6. Scrum register signed',
    completion: 45,
    status: 'Upcoming'
  },
  {
    date: '17 Aug 2026',
    week: 'Week 7-8',
    milestone: '60% Completion & Tool Implementation',
    deliverables: 'Coding Progress, Meeting with Scrum Master, 60% completion of project, Tool implementation based on review paper, Review Paper preparation',
    completion: 60,
    status: 'Upcoming'
  },
  {
    date: '18-19 Aug 2026',
    week: 'Week 8',
    milestone: 'Interim Project Evaluation',
    deliverables: 'Evaluation by Committee / Project Assessment Board (Literature Review, Implementation & Analysis using Software Tool)',
    completion: 65,
    status: 'Critical'
  },
  {
    date: '31 Aug 2026',
    week: 'Week 9-10',
    milestone: '70% Completion & Automation Testing',
    deliverables: 'Coding Progress, Tool implementation, Meeting with Scrum Master, 70% completion, Testing with Automation Tools, Testing Report, Project Report (Soft Copy with rough record), Review paper',
    completion: 70,
    status: 'Upcoming'
  },
  {
    date: '09 Sept 2026',
    week: 'Week 10',
    milestone: 'Scrum Review 3 (75% Milestone)',
    deliverables: 'Coding Progress, Tool implementation, Meeting with Scrum Master, 75% completion, Testing with Automation Tools, Testing Report, Project Report (Soft Copy), Review paper',
    completion: 75,
    status: 'Upcoming'
  },
  {
    date: '14 Sept 2026',
    week: 'Week 11',
    milestone: '85% Completion & Hosting Prep',
    deliverables: 'Coding Progress, Tool implementation, Meeting with Scrum Master, 85% completion, Testing Report, Project Report (Soft Copy), Review paper, Project Hosting',
    completion: 85,
    status: 'Upcoming'
  },
  {
    date: '22 Sept 2026',
    week: 'Week 12',
    milestone: '95% Completion Sprint',
    deliverables: 'Coding Progress, Tool implementation, Meeting with Scrum Master, 95% completion, Testing Report, Project Report (Soft Copy), Review paper, Project Hosting',
    completion: 95,
    status: 'Upcoming'
  },
  {
    date: '29 Sept 2026',
    week: 'Week 13',
    milestone: '100% Completion & Hard Copy Prep',
    deliverables: 'Coding Progress, Tool implementation, Meeting with Scrum Master, 100% completion, Testing Report, Project Hosting, Verification of Soft Copy Report, Review paper submission, Hard Copy Prep',
    completion: 100,
    status: 'Upcoming'
  },
  {
    date: '06-08 Oct 2026',
    week: 'Week 13-14',
    milestone: 'Scrum Review 5 & Bound Report Submission',
    deliverables: 'Final Project Report Submission (Hard Copy bound), Project Report Evaluation by Guide',
    completion: 100,
    status: 'Critical'
  },
  {
    date: '19 Oct 2026',
    week: 'Week 15',
    milestone: 'Guide Evaluation & Verification',
    deliverables: '1. Project Git Log Verification, 2. AES Document Verification, 3. Project Report verification, 4. Review paper',
    completion: 100,
    status: 'Critical'
  },
  {
    date: '22 Oct 2026',
    week: 'Week 15-16',
    milestone: 'Full Project Audit & Server Run',
    deliverables: '1. Analyse full project, 2. 100% completion, 3. AES upload complete, 4. Scrum register signed, 5. Host project on server and run for review, 6. Review paper, 7. PPT, 8. Hard Copy Bound Report',
    completion: 100,
    status: 'Critical'
  },
  {
    date: '23-26 Oct 2026',
    week: 'Week 16',
    milestone: 'Final Internal Evaluation',
    deliverables: 'Presentation & Evaluation by Assessment Committee / Board',
    completion: 100,
    status: 'Critical'
  },
  {
    date: '30 Oct 2026',
    week: 'Week 16',
    milestone: 'Review Paper Publishing',
    deliverables: 'Official Publishing of the Research Review Paper (Research Work)',
    completion: 100,
    status: 'Published'
  }
];

export const SYNAPSE_IMPLEMENTATION_PLAN = {
  modules: [
    {
      id: 'm1',
      title: 'MODULE 1 – Organization & Authentication',
      sections: [
        {
          sub: 'Company Management',
          items: [
            { name: 'Company Registration', status: 'done' },
            { name: 'Subscription Onboarding', status: 'not_started' },
            { name: 'Company Profile', status: 'not_started' },
            { name: 'Company Settings', status: 'not_started' }
          ]
        },
        {
          sub: 'Authentication',
          items: [
            { name: 'User Registration', status: 'done' },
            { name: 'Login', status: 'done' },
            { name: 'JWT Authentication', status: 'done' },
            { name: 'Refresh Tokens', status: 'done' },
            { name: 'Logout', status: 'done' },
            { name: 'Email Verification', status: 'done' },
            { name: 'Forgot Password', status: 'done' },
            { name: 'Reset Password', status: 'done' },
            { name: 'Protected Routes', status: 'done' },
            { name: 'Profile Completion (UI Flow)', status: 'not_started' }
          ]
        },
        {
          sub: 'User Management',
          items: [
            { name: 'Invite Users via Email', status: 'done' },
            { name: 'Accept Invitation', status: 'done' },
            { name: 'User Profile (View/Edit own)', status: 'not_started' },
            { name: 'User Activity Logs (Frontend UI Screen)', status: 'in_progress' },
            { name: 'Organization Roles (Owner, Admin)', status: 'done' }
          ]
        }
      ]
    },
    {
      id: 'm2',
      title: 'MODULE 2 – Project Management',
      sections: [
        {
          sub: 'Project Lifecycle',
          items: [
            { name: 'Create / Update / Archive / Delete Project', status: 'done' },
            { name: 'Project Dashboard', status: 'done' },
            { name: 'Project Members', status: 'done' },
            { name: 'Project Roles (PM, Dev, Viewer, Team Lead)', status: 'in_progress', note: 'Missing Team Lead role' }
          ]
        }
      ]
    },
    {
      id: 'm3',
      title: 'MODULE 3 – Agile Sprint Management',
      sections: [
        {
          sub: 'Backlog & Sprints',
          items: [
            { name: 'Product Backlog (Unscheduled Work View)', status: 'not_started' },
            { name: 'Sprint Planning (Create Sprint, Goal, Timeline)', status: 'done' },
            { name: 'Sprint Capacity Calculation', status: 'not_started' },
            { name: 'Sprint Backlog & Story Concepts', status: 'not_started' },
            { name: 'Assign Developers to Sprint', status: 'done' },
            { name: 'Sprint Status Tracking', status: 'done' },
            { name: 'Sprint Review', status: 'not_started' },
            { name: 'Sprint Retrospective', status: 'not_started' }
          ]
        }
      ]
    },
    {
      id: 'm4',
      title: 'MODULE 4 – Task Management',
      sections: [
        {
          sub: 'Tasks & Workflow',
          items: [
            { name: 'Create / Assign / Priority / Due Dates / Comments / Status', status: 'done' },
            { name: 'Task Labels', status: 'in_progress' },
            { name: 'Story Points', status: 'not_started' },
            { name: 'Attachments', status: 'not_started' },
            { name: 'Statuses (Todo / In Progress / Review / Done)', status: 'done' }
          ]
        }
      ]
    },
    {
      id: 'm5',
      title: 'MODULE 5 – Meeting Management',
      sections: [
        {
          sub: 'Meetings & AI Input',
          items: [
            { name: 'Schedule Meeting', status: 'not_started' },
            { name: 'Upload Meeting Recording', status: 'not_started' },
            { name: 'Upload Transcript (Backend Storage)', status: 'in_progress' },
            { name: 'Meeting Notes', status: 'not_started' },
            { name: 'Action Items (AI Auto Task Generation)', status: 'not_started' }
          ]
        }
      ]
    },
    {
      id: 'm6',
      title: 'MODULE 6 – Requirement Management',
      sections: [
        {
          sub: 'SRS & Requirements',
          items: [
            { name: 'Upload SRS Document', status: 'in_progress' },
            { name: 'Upload User Stories', status: 'not_started' },
            { name: 'Functional Requirements', status: 'not_started' },
            { name: 'Non-Functional Requirements', status: 'not_started' },
            { name: 'Requirement Version Control', status: 'in_progress' }
          ]
        }
      ]
    },
    {
      id: 'm7',
      title: 'MODULE 7 – Test Management',
      sections: [
        {
          sub: 'QA & Testing',
          items: [
            { name: 'Manual Test Cases', status: 'not_started' },
            { name: 'Generated Test Cases (AI)', status: 'not_started' },
            { name: 'Test Execution Engine', status: 'not_started' },
            { name: 'Test Status Dashboard', status: 'not_started' }
          ]
        }
      ]
    },
    {
      id: 'm8',
      title: 'MODULE 8 – Knowledge Base',
      sections: [
        {
          sub: 'Documentation Repository',
          items: [
            { name: 'Upload Documentation', status: 'not_started' },
            { name: 'Unified Repository (Notes, SRS, Tech Docs)', status: 'not_started' }
          ]
        }
      ]
    }
  ],
  aiFeatures: [
    { name: '1. AI-Assisted Requirement Review', status: 'not_started' },
    { name: '2. Meeting Transcript Summarization + Auto Task Generation', status: 'not_started' },
    { name: '3. Intelligent Test Case Generation', status: 'not_started' },
    { name: '4. Semantic Project Knowledge Search (RAG)', status: 'not_started' },
    { name: '5. Impact Analysis for Change Management', status: 'not_started' },
    { name: '6. Delay Diagnostics', status: 'not_started' },
    { name: '7. Dependency Detection', status: 'not_started' }
  ],
  aiInfra: [
    { name: 'LLM Abstraction (Gemini / Groq)', status: 'in_progress' },
    { name: 'RAG Pipeline', status: 'not_started' },
    { name: 'Vector Database (pgvector running)', status: 'in_progress' },
    { name: 'Embedding Pipeline', status: 'not_started' },
    { name: 'AI Service Layer (Async Job Engine)', status: 'in_progress' },
    { name: 'Prompt Management System', status: 'not_started' },
    { name: 'Knowledge Indexing Engine', status: 'not_started' },
    { name: 'Document Chunking Utility', status: 'not_started' },
    { name: 'Background Queue Workers', status: 'in_progress' }
  ],
  suggestedPhases: [
    {
      phase: 'Phase 1: UI Gaps',
      desc: 'Close out Notifications + Developer & Member (ProjectRole-only) dashboards.'
    },
    {
      phase: 'Phase 2: RBAC Role',
      desc: 'Add Team Lead 4th project role to Module 2.'
    },
    {
      phase: 'Phase 3: Core CRUD Plumbing',
      desc: 'Meetings, Requirements, Product Backlog, Story Points, Sprint Capacity, Sprint Review/Retrospective, Task Labels & Attachments.'
    },
    {
      phase: 'Phase 4: Knowledge Base Module',
      desc: 'Unified documentation repository for technical docs, notes & SRS.'
    },
    {
      phase: 'Phase 5: AI Features Rollout',
      desc: 'Requirement Review → Meeting Summarization + Task Gen → Test Generation → Semantic RAG Search → Impact Analysis → Delay Diagnostics → Dependency Detection.'
    },
    {
      phase: 'Phase 6: Test Management Module',
      desc: 'Manual & AI Generated Test Cases Execution & Status Dashboard.'
    }
  ]
};

