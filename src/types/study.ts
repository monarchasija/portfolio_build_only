export interface StudyTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  labels: string[];
  createdAt: string;
  completedAt?: string;
}

export interface StudyRoadmap {
  id: string;
  title: string;
  description: string;
  tasks: StudyTask[];
  progress: number;
  totalTasks: number;
  completedTasks: number;
}

export interface StudyData {
  roadmaps: StudyRoadmap[];
  availableLabels: string[];
}