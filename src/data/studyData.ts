import type { StudyData } from '../types/study';

export const studyData: StudyData = {
  roadmaps: [
    {
      id: '1',
      title: 'Frontend Development',
      description: 'Master modern frontend development with React, TypeScript, and advanced CSS',
      progress: 65,
      totalTasks: 12,
      completedTasks: 8,
      tasks: [
        {
          id: '1-1',
          title: 'HTML5 Fundamentals',
          description: 'Learn semantic HTML, accessibility, and modern HTML5 features',
          completed: true,
          labels: ['HTML', 'Fundamentals'],
          createdAt: '2024-01-01',
          completedAt: '2024-01-05'
        },
        {
          id: '1-2',
          title: 'CSS3 & Flexbox',
          description: 'Master CSS3, Flexbox, Grid, and responsive design principles',
          completed: true,
          labels: ['CSS', 'Layout'],
          createdAt: '2024-01-06',
          completedAt: '2024-01-15'
        },
        {
          id: '1-3',
          title: 'JavaScript ES6+',
          description: 'Learn modern JavaScript features, async/await, modules, and more',
          completed: true,
          labels: ['JavaScript', 'ES6'],
          createdAt: '2024-01-16',
          completedAt: '2024-02-01'
        },
        {
          id: '1-4',
          title: 'React Fundamentals',
          description: 'Components, props, state, and lifecycle methods',
          completed: true,
          labels: ['React', 'Components'],
          createdAt: '2024-02-02',
          completedAt: '2024-02-20'
        },
        {
          id: '1-5',
          title: 'React Hooks',
          description: 'useState, useEffect, useContext, and custom hooks',
          completed: true,
          labels: ['React', 'Hooks'],
          createdAt: '2024-02-21',
          completedAt: '2024-03-05'
        },
        {
          id: '1-6',
          title: 'TypeScript Basics',
          description: 'Type annotations, interfaces, and TypeScript with React',
          completed: true,
          labels: ['TypeScript', 'Types'],
          createdAt: '2024-03-06',
          completedAt: '2024-03-20'
        },
        {
          id: '1-7',
          title: 'State Management',
          description: 'Context API, Redux, and Zustand for state management',
          completed: true,
          labels: ['React', 'State Management'],
          createdAt: '2024-03-21',
          completedAt: '2024-04-05'
        },
        {
          id: '1-8',
          title: 'React Router',
          description: 'Client-side routing, navigation, and protected routes',
          completed: true,
          labels: ['React', 'Routing'],
          createdAt: '2024-04-06',
          completedAt: '2024-04-15'
        },
        {
          id: '1-9',
          title: 'API Integration',
          description: 'Fetch data, handle loading states, and error handling',
          completed: false,
          labels: ['API', 'HTTP'],
          createdAt: '2024-04-16'
        },
        {
          id: '1-10',
          title: 'Testing with Jest',
          description: 'Unit testing, integration testing, and React Testing Library',
          completed: false,
          labels: ['Testing', 'Jest'],
          createdAt: '2024-04-20'
        },
        {
          id: '1-11',
          title: 'Performance Optimization',
          description: 'Code splitting, lazy loading, and React optimization techniques',
          completed: false,
          labels: ['Performance', 'Optimization'],
          createdAt: '2024-04-25'
        },
        {
          id: '1-12',
          title: 'Deployment & CI/CD',
          description: 'Deploy to Vercel, Netlify, and set up continuous integration',
          completed: false,
          labels: ['Deployment', 'CI/CD'],
          createdAt: '2024-05-01'
        }
      ]
    },
    {
      id: '2',
      title: 'Backend Development',
      description: 'Learn server-side development with Node.js, databases, and APIs',
      progress: 30,
      totalTasks: 10,
      completedTasks: 3,
      tasks: [
        {
          id: '2-1',
          title: 'Node.js Fundamentals',
          description: 'Learn Node.js runtime, modules, and file system operations',
          completed: true,
          labels: ['Node.js', 'Backend'],
          createdAt: '2024-03-01',
          completedAt: '2024-03-10'
        },
        {
          id: '2-2',
          title: 'Express.js Framework',
          description: 'Build REST APIs with Express.js, middleware, and routing',
          completed: true,
          labels: ['Express', 'API'],
          createdAt: '2024-03-11',
          completedAt: '2024-03-25'
        },
        {
          id: '2-3',
          title: 'Database Design',
          description: 'Learn SQL, database design principles, and normalization',
          completed: true,
          labels: ['Database', 'SQL'],
          createdAt: '2024-03-26',
          completedAt: '2024-04-10'
        },
        {
          id: '2-4',
          title: 'MongoDB & Mongoose',
          description: 'NoSQL databases, document modeling, and Mongoose ODM',
          completed: false,
          labels: ['MongoDB', 'NoSQL'],
          createdAt: '2024-04-11'
        },
        {
          id: '2-5',
          title: 'Authentication & Security',
          description: 'JWT tokens, password hashing, and security best practices',
          completed: false,
          labels: ['Security', 'Authentication'],
          createdAt: '2024-04-15'
        },
        {
          id: '2-6',
          title: 'API Documentation',
          description: 'Swagger/OpenAPI, API versioning, and documentation best practices',
          completed: false,
          labels: ['Documentation', 'API'],
          createdAt: '2024-04-20'
        },
        {
          id: '2-7',
          title: 'Testing Backend APIs',
          description: 'Unit testing, integration testing, and API testing with Jest/Supertest',
          completed: false,
          labels: ['Testing', 'API'],
          createdAt: '2024-04-25'
        },
        {
          id: '2-8',
          title: 'Caching Strategies',
          description: 'Redis, in-memory caching, and cache invalidation strategies',
          completed: false,
          labels: ['Caching', 'Performance'],
          createdAt: '2024-05-01'
        },
        {
          id: '2-9',
          title: 'Microservices Architecture',
          description: 'Service decomposition, communication patterns, and orchestration',
          completed: false,
          labels: ['Microservices', 'Architecture'],
          createdAt: '2024-05-05'
        },
        {
          id: '2-10',
          title: 'DevOps & Deployment',
          description: 'Docker, containerization, and cloud deployment strategies',
          completed: false,
          labels: ['DevOps', 'Docker'],
          createdAt: '2024-05-10'
        }
      ]
    }
  ],
  availableLabels: [
    'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'SQL', 'API', 'Testing', 'Performance', 'Security', 'DevOps',
    'Fundamentals', 'Advanced', 'Project', 'Tutorial', 'Practice'
  ]
};