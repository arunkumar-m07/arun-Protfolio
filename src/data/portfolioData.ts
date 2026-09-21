import {
  Project,
  SkillCategory,
  TimelineItem,
  CurrentlyLearningItem,
  Principle,
  EducationInfo,
  ContactInfo
} from '../types';

export const PERSONAL_INFO = {
  name: 'Arun Kumar M.',
  brand: 'AKM',
  role: 'Aspiring Data Scientist & Software Engineer',
  tagline: 'I build with code, data, and curiosity.',
  summary:
    'Engineering student focused on building strong foundations in Python, data science, SQL, algorithms, and software development.',
  statusLine: 'CURRENTLY LEARNING → DATA SCIENCE',
  meta: [
    { label: 'FOCUS', value: 'Data Science + Software Engineering' },
    { label: 'STACK', value: 'Python · SQL · C · Git' },
    { label: 'STATUS', value: 'Building & Learning' }
  ],
  currentlyExploring: [
    'Python',
    'SQL',
    'Data Science',
    'Algorithms',
    'Database Systems',
    'Git & GitHub'
  ]
};

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Understand First',
    tagline: 'Prefer understanding how a system works before relying on abstractions.',
    description:
      'Instead of treating frameworks and libraries as black boxes, I study the memory layouts, pointer mechanisms, relational schemas, and algorithmic trade-offs that drive software underneath.'
  },
  {
    number: '02',
    title: 'Build to Learn',
    tagline: 'Projects are a way to turn concepts into practical understanding.',
    description:
      'Reading theory gives knowledge, but writing buffer managers in C, optimizing SQL joins, and debugging pointer arithmetic transforms theoretical concepts into permanent engineering intuition.'
  },
  {
    number: '03',
    title: 'Keep Improving',
    tagline: 'Programming is a continuous process of learning, experimenting, and refining.',
    description:
      'Writing clean code, adhering to version control best practices, and constantly analyzing runtime complexities ensure every project is measurably better than the one before it.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'line-editor-c',
    number: '01',
    title: 'Line Editor in C',
    category: 'C / DATA STRUCTURES / FILE HANDLING',
    subtitle: 'Terminal document editor with dynamic memory & buffer management',
    description:
      'A terminal-based line editor built in C using a dynamic array of strings for document storage. Features full file persistence, buffer manipulation, and dynamic memory allocation.',
    features: [
      'Insert line at arbitrary index',
      'Delete line with memory deallocation',
      'Display document with numbered rows',
      'Save document to disk',
      'Load document from disk into memory buffer',
      'Safe dynamic memory reallocation'
    ],
    techFocus: ['C', 'Dynamic Memory', 'Arrays', 'File Handling', 'Pointers'],
    links: {
      github: 'https://github.com/arunkumar-m07',
      demo: '#'
    },
    caseStudy: {
      overview:
        'A command-line text editor implementation designed to manage variable-length text documents directly in RAM with file persistence. Built from scratch without third-party text editor libraries.',
      problem:
        'Standard static arrays in C either waste excessive heap/stack space or cap file sizes arbitrarily. The objective was to design a responsive text editing buffer in C that handles variable line counts and lengths dynamically while preventing memory leaks.',
      approach:
        'Employed an array of char pointers (char**), resizing dynamically with realloc. Each individual line is allocated based on its exact string length plus null termination. Pointers are systematically shifted during line insertions and deletions.',
      implementation: {
        title: 'Buffer Architecture & Pointer Shifting',
        details: [
          'Document represented as struct with char** lines, size_t count, and size_t capacity.',
          'Capacity doubles exponentially when line count reaches current upper bound to maintain amortized O(1) appending.',
          'Line deletion frees the allocated character buffer immediately and shifts successor pointers down by one index using memmove.',
          'File I/O reads line by line using dynamic sizing, guaranteeing preservation of line breaks and clean buffer restoration.'
        ],
        codeSnippet: {
          language: 'c',
          code: `typedef struct {
    char **lines;
    size_t count;
    size_t capacity;
} DocumentBuffer;

void insert_line(DocumentBuffer *doc, size_t index, const char *text) {
    if (doc->count >= doc->capacity) {
        doc->capacity = doc->capacity == 0 ? 8 : doc->capacity * 2;
        doc->lines = (char **)realloc(doc->lines, doc->capacity * sizeof(char *));
    }
    for (size_t i = doc->count; i > index; --i) {
        doc->lines[i] = doc->lines[i - 1];
    }
    doc->lines[index] = strdup(text);
    doc->count++;
}`
        }
      },
      whatILearned: [
        'Precise dynamic memory management using malloc, realloc, and free.',
        'Deep appreciation for pointer arithmetic and avoiding dangling references or memory leaks.',
        'File handling in C (fopen, fgets, fputs, fclose) with defensive error checks.',
        'Designing simple, predictable command-line interface loops for terminal user workflows.'
      ],
      futureImprovements: [
        'Implement gap buffer or piece table data structures for more efficient intra-line editing.',
        'Add regex search and line-range replacement functionality.',
        'Implement an undo/redo stack using a history command pattern.'
      ]
    }
  },
  {
    id: 'leetcode-solutions',
    number: '02',
    title: 'LeetCode Solutions',
    category: 'PROBLEM SOLVING / DSA / C',
    subtitle: 'Curated problem-solving repository focused on fundamental data structures',
    description:
      'A structured collection of programming solutions focused on developing problem-solving skills and understanding common data structures and algorithmic paradigms.',
    features: [
      'Solutions written with explicit focus on space/time complexity',
      'Implementation of key patterns: two pointers, sliding window, binary search',
      'Custom data structure implementations from scratch in C',
      'Documented edge-case handling (empty inputs, integer overflows, boundary conditions)'
    ],
    techFocus: ['C', 'Data Structures', 'Algorithms', 'Complexity Analysis'],
    links: {
      github: 'https://github.com/arunkumar-m07',
      demo: '#'
    },
    caseStudy: {
      overview:
        'A growing repository of algorithmic solutions implemented in C. Unlike solutions in high-level languages where collections are pre-packaged, writing solutions in C requires implementing core structs, custom heaps, and linked list nodes manually.',
      problem:
        'Mastering core algorithmic intuition requires breaking away from high-level utility abstractions. Implementing algorithms in C exposes actual memory footprints, pointer traversals, and low-level comparisons.',
      approach:
        'Categorized solutions by data structure paradigm: Arrays, Strings, Linked Lists, Stacks, Queues, and Recursion. Each solution is accompanied by explicit time (Big-O) and auxiliary space complexity analysis.',
      implementation: {
        title: 'Algorithmic Categorization & Analysis',
        details: [
          'Linear Structures: Array manipulations, two-pointer convergence, and monotonic stacks.',
          'Linked Structures: Reversing singly-linked lists, cycle detection (Floyd algorithm), and merge routines.',
          'Binary Search & Divide/Conquer: Logarithmic search patterns on bounded answer spaces.',
          'Emphasis on clean memory deallocation before test case completion.'
        ],
        codeSnippet: {
          language: 'c',
          code: `/* Example: Two-pointer convergence on sorted array */
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) return 0;
    int writeIndex = 1;
    for (int readIndex = 1; readIndex < numsSize; readIndex++) {
        if (nums[readIndex] != nums[readIndex - 1]) {
            nums[writeIndex++] = nums[readIndex];
        }
    }
    return writeIndex;
}`
        }
      },
      whatILearned: [
        'Rigorous algorithmic complexity analysis (time vs. auxiliary space trade-offs).',
        'Writing edge-case tests (zero length, single element, negative numbers, extreme values).',
        'Translating mathematical formulations into efficient, deterministic C routines.'
      ],
      futureImprovements: [
        'Expand benchmark suite measuring execution time across varying input sizes.',
        'Add Python implementations alongside C to compare execution speed vs code readability.',
        'Implement tree and graph traversal modules (BFS, DFS, Dijkstra).'
      ]
    }
  },
  {
    id: 'graphics-editor-2d',
    number: '03',
    title: '2D Graphics Editor',
    category: 'C / DATA STRUCTURES / TERMINAL GRAPHICS',
    subtitle: 'Menu-driven terminal graphics canvas using 2D character arrays',
    description:
      'A menu-driven terminal graphics editor that represents graphical objects using a 2D character array. Supports rasterizing geometric primitives directly in the terminal canvas.',
    features: [
      'Draw rectangle (filled or outlined)',
      'Draw circle using midpoint circle algorithm concept',
      'Draw straight lines across canvas coordinates',
      'Draw triangles using coordinate vertices',
      'Add and delete canvas objects',
      'Render and refresh ASCII/terminal viewport'
    ],
    techFocus: ['C', '2D Arrays', 'Data Structures', 'ncurses', 'Rasterization'],
    links: {
      github: 'https://github.com/arunkumar-m07',
      demo: '#'
    },
    caseStudy: {
      overview:
        'A terminal-based visual canvas application capable of rendering geometric primitives into a coordinate-based matrix of characters. Demonstrates coordinate mathematics and 2D memory indexing.',
      problem:
        'Rendering visual shapes without a graphical window server or modern GPU requires mapping mathematical equations onto a discrete 2D grid of character cells with aspect ratio compensation.',
      approach:
        'Allocated a 2D grid buffer representing the screen height and width. Shapes are broken down into discrete plotting coordinates via rasterization routines, modifying cells within coordinate bounds.',
      implementation: {
        title: 'Matrix Coordinate System & Geometry Rasterization',
        details: [
          'Canvas state stored as a dynamic or static matrix char canvas[ROWS][COLS].',
          'Bounding validation ensures draw calls outside canvas limits are clipped gracefully without memory corruption.',
          'Line drawing applies Bresenham-style incremental steps for integer arithmetic efficiency.',
          'Object registry allows tracking active shape entities and selectively clearing or redrawing layers.'
        ],
        codeSnippet: {
          language: 'c',
          code: `void draw_rect(char canvas[ROWS][COLS], int x, int y, int w, int h, char sym) {
    for (int r = y; r < y + h && r < ROWS; r++) {
        for (int c = x; c < x + w && c < COLS; c++) {
            if (r == y || r == y + h - 1 || c == x || c == x + w - 1) {
                canvas[r][c] = sym;
            }
        }
    }
}`
        }
      },
      whatILearned: [
        'Representing and manipulating 2D matrices in contiguous memory.',
        'Translating continuous coordinate equations into discrete pixel/character steps.',
        'Terminal screen refresh concepts and event-driven keyboard command handling.'
      ],
      futureImprovements: [
        'Add color escape codes (ANSI color styling) for multi-tone terminal art.',
        'Implement canvas export to ASCII text and bitmap file formats.',
        'Add layering support with z-index ordering for overlapping primitives.'
      ]
    }
  },
  {
    id: 'puresip',
    number: '04',
    title: 'PureSip',
    category: 'ENTREPRENEURSHIP / PRODUCT DESIGN',
    subtitle: 'Portable water purification bottle concept & product engineering study',
    description:
      'A portable water purification bottle concept developed as part of an academic innovation and entrepreneurship project. Combines filtration feasibility analysis, unit economics, and capacity planning.',
    features: [
      'Multi-stage filtration concept (activated carbon + microfiltration)',
      'Product specifications & volumetric capacity planning',
      'BOM (Bill of Materials) & unit cost modeling',
      'Market opportunity & user persona mapping',
      'Competitive differentiation & feasibility assessment'
    ],
    techFocus: [
      'Product Concept',
      'Prototype Modeling',
      'Filter Integration',
      'Costing Analysis',
      'Market Feasibility'
    ],
    links: {
      github: 'https://github.com/arunkumar-m07',
      demo: '#'
    },
    caseStudy: {
      overview:
        'An academic entrepreneurship and product design study evaluating the technical and commercial viability of an on-the-go water purification system designed for students, travelers, and field workers.',
      problem:
        'Reliable access to safe drinking water during travel or fieldwork frequently relies on single-use plastic bottles, which are ecologically damaging, or bulky, expensive filtration kits.',
      approach:
        'Conducted structured product development research: engineered a modular filter cartridge blueprint, computed volume-to-weight ratios, modeled product unit economics, and analyzed target market segments.',
      implementation: {
        title: 'Product Blueprinting & Economic Model',
        details: [
          'Filtration Architecture: Integrated replaceable dual-stage filter (hollow-fiber membrane + activated carbon core).',
          'Capacity Planning: 750ml ergonomic form factor balanced for daily portability vs weight.',
          'Cost Modeling: Parametric unit cost estimation across injection-molded food-grade tritan body, silicone seals, and recurring cartridge replacements.',
          'Academic Presentation: Detailed business model canvas and technical roadmap presented for entrepreneurship coursework.'
        ]
      },
      whatILearned: [
        'Bridging engineering specifications with economic constraints and unit economics.',
        'Designing for manufacturability, consumer ergonomics, and life-cycle replacement.',
        'Presenting technical product concepts clearly to both technical and commercial stakeholders.'
      ],
      futureImprovements: [
        'Explore integrating a low-power UV-C LED sterilization cap for secondary biological sterilization.',
        'Develop CAD 3D models for physical 3D-printed prototype testing.',
        'Conduct chemical flow-rate testing using filtration test rigs.'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'SQL']
  },
  {
    title: 'Data & Databases',
    skills: ['MySQL', 'Data Analysis', 'Data Science Fundamentals', 'Database Design']
  },
  {
    title: 'Computer Science',
    skills: [
      'Data Structures',
      'Algorithms',
      'OOP Fundamentals',
      'Database Management Systems (DBMS)',
      'Memory Management'
    ]
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'Terminal / Bash']
  }
];

export const LEARNING_JOURNEY: TimelineItem[] = [
  {
    period: 'Current Phase',
    title: 'Engineering Foundations',
    subtitle: 'Coursework, systems programming, and core computer science',
    description:
      'Developing structured academic fundamentals in computer science, low-level architecture, mathematics, and hands-on systems programming.',
    highlight: 'Active Coursework'
  },
  {
    period: 'Core Focus',
    title: 'Programming with C & Python',
    subtitle: 'Strengthening programming fundamentals',
    description:
      'Gaining deep insight into memory allocation, pointers, data structures, and algorithmic paradigms using C, while mastering clean scripting, automation, and data workflows in Python.',
    highlight: 'C + Python'
  },
  {
    period: 'Data Infrastructure',
    title: 'SQL & Relational Databases',
    subtitle: 'Schema design, querying, and relational integrity',
    description:
      'Practicing relational modeling, complex SQL queries (joins, aggregations, subqueries), normalization, and database administration with MySQL and MySQL Workbench.',
    highlight: 'SQL / MySQL'
  },
  {
    period: 'Next Horizon',
    title: 'Data Science & Analytical Engineering',
    subtitle: 'Data manipulation, statistical analysis, and machine learning',
    description:
      'Extending Python capabilities into numerical computing, exploratory data analysis (EDA), data visualization, probability, and foundational machine learning techniques.',
    highlight: 'Data Science Focus'
  }
];

export const EDUCATION_DATA: EducationInfo = {
  tag: 'ENGINEERING',
  degree: '[Degree / Branch]',
  college: '[College Name]',
  expectedGraduation: '[Expected Graduation]',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Object-Oriented Programming',
    'Computer Architecture',
    'Discrete Mathematics'
  ]
};

export const CURRENTLY_LEARNING: CurrentlyLearningItem[] = [
  {
    id: '01',
    name: 'Python',
    category: 'Core Language',
    statusText: 'Advanced syntax, OOP, scripting & data libraries'
  },
  {
    id: '02',
    name: 'SQL',
    category: 'Database Querying',
    statusText: 'Complex joins, indexing, query optimization & MySQL'
  },
  {
    id: '03',
    name: 'Data Structures',
    category: 'Algorithmic Foundations',
    statusText: 'Trees, heaps, graph fundamentals & complexity analysis'
  },
  {
    id: '04',
    name: 'Data Science',
    category: 'Analytical Focus',
    statusText: 'Exploratory data analysis, statistical thinking & workflows'
  },
  {
    id: '05',
    name: 'Problem Solving',
    category: 'Continuous Practice',
    statusText: 'Regular algorithmic challenges and edge-case testing'
  }
];

export const CONTACT_DATA: ContactInfo = {
  heading: "Let's build something useful.",
  supportingText:
    "I'm always interested in learning, building, and connecting with people working on interesting technical problems. Feel free to reach out or inspect my repositories.",
  githubUrl: 'https://github.com/arunkumar-m07',
  linkedinUrl: '[ADD LINKEDIN LINK]',
  email: '[ADD EMAIL]',
  availability: 'Available for technical discussions, student projects, & collaborative learning'
};
