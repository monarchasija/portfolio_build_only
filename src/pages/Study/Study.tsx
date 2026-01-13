import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaCheck, FaClock, FaTasks, FaFilter, FaTimes } from 'react-icons/fa';
import { studyData as initialStudyData } from '../../data/studyData';
import type { StudyData, StudyRoadmap, StudyTask } from '../../types/study';
import './Study.css';

const Study: React.FC = () => {
  const [studyData, setStudyData] = useState<StudyData>(() => {
    const saved = localStorage.getItem('studyData');
    return saved ? JSON.parse(saved) : initialStudyData;
  });
  
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);
  const [filterLabel, setFilterLabel] = useState<string>('');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    labels: [] as string[]
  });

  // Save to localStorage whenever studyData changes
  useEffect(() => {
    localStorage.setItem('studyData', JSON.stringify(studyData));
  }, [studyData]);

  const updateRoadmapProgress = (roadmap: StudyRoadmap): StudyRoadmap => {
    const completedTasks = roadmap.tasks.filter(task => task.completed).length;
    const totalTasks = roadmap.tasks.length;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    return {
      ...roadmap,
      completedTasks,
      totalTasks,
      progress
    };
  };

  const toggleTaskCompletion = (roadmapId: string, taskId: string) => {
    setStudyData(prev => ({
      ...prev,
      roadmaps: prev.roadmaps.map(roadmap => {
        if (roadmap.id === roadmapId) {
          const updatedRoadmap = {
            ...roadmap,
            tasks: roadmap.tasks.map(task => {
              if (task.id === taskId) {
                return {
                  ...task,
                  completed: !task.completed,
                  completedAt: !task.completed ? new Date().toISOString() : undefined
                };
              }
              return task;
            })
          };
          return updateRoadmapProgress(updatedRoadmap);
        }
        return roadmap;
      })
    }));
  };

  const addNewTask = () => {
    if (!newTask.title.trim() || !selectedRoadmap) return;

    const taskId = `${selectedRoadmap}-${Date.now()}`;
    const task: StudyTask = {
      id: taskId,
      title: newTask.title,
      description: newTask.description,
      completed: false,
      labels: newTask.labels,
      createdAt: new Date().toISOString()
    };

    setStudyData(prev => ({
      ...prev,
      roadmaps: prev.roadmaps.map(roadmap => {
        if (roadmap.id === selectedRoadmap) {
          const updatedRoadmap = {
            ...roadmap,
            tasks: [...roadmap.tasks, task]
          };
          return updateRoadmapProgress(updatedRoadmap);
        }
        return roadmap;
      }),
      availableLabels: [...new Set([...prev.availableLabels, ...newTask.labels])]
    }));

    setNewTask({ title: '', description: '', labels: [] });
    setShowAddTaskModal(false);
  };

  const addLabelToTask = (label: string) => {
    if (!newTask.labels.includes(label)) {
      setNewTask(prev => ({
        ...prev,
        labels: [...prev.labels, label]
      }));
    }
  };

  const removeLabelFromTask = (label: string) => {
    setNewTask(prev => ({
      ...prev,
      labels: prev.labels.filter(l => l !== label)
    }));
  };

  const addNewLabel = (label: string) => {
    if (label.trim() && !studyData.availableLabels.includes(label)) {
      setStudyData(prev => ({
        ...prev,
        availableLabels: [...prev.availableLabels, label]
      }));
      addLabelToTask(label);
    }
  };

  const getFilteredTasks = (tasks: StudyTask[]) => {
    if (!filterLabel) return tasks;
    return tasks.filter(task => task.labels.includes(filterLabel));
  };

  const selectedRoadmapData = studyData.roadmaps.find(r => r.id === selectedRoadmap);

  return (
    <div className="study-page">
      <div className="container">
        <div className="study-header">
          <Link to="/projects" className="back-link">
            <FaArrowLeft />
            Back to Projects
          </Link>
          <h1 className="page-title">Study Roadmap Tracker</h1>
          <p className="page-description">
            Track your learning progress with organized roadmaps and tasks
          </p>
        </div>

        <div className="study-content">
          {!selectedRoadmap ? (
            <div className="roadmaps-overview">
              <div className="overview-stats">
                <div className="stat-card">
                  <FaTasks className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">
                      {studyData.roadmaps.reduce((acc, r) => acc + r.totalTasks, 0)}
                    </span>
                    <span className="stat-label">Total Tasks</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FaCheck className="stat-icon completed" />
                  <div className="stat-info">
                    <span className="stat-number">
                      {studyData.roadmaps.reduce((acc, r) => acc + r.completedTasks, 0)}
                    </span>
                    <span className="stat-label">Completed</span>
                  </div>
                </div>
                <div className="stat-card">
                  <FaClock className="stat-icon pending" />
                  <div className="stat-info">
                    <span className="stat-number">
                      {studyData.roadmaps.reduce((acc, r) => acc + (r.totalTasks - r.completedTasks), 0)}
                    </span>
                    <span className="stat-label">Pending</span>
                  </div>
                </div>
              </div>

              <div className="roadmaps-grid">
                {studyData.roadmaps.map(roadmap => (
                  <div key={roadmap.id} className="roadmap-card" onClick={() => setSelectedRoadmap(roadmap.id)}>
                    <div className="roadmap-header">
                      <h3 className="roadmap-title">{roadmap.title}</h3>
                      <div className="progress-circle">
                        <span className="progress-text">{roadmap.progress}%</span>
                      </div>
                    </div>
                    <p className="roadmap-description">{roadmap.description}</p>
                    <div className="roadmap-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${roadmap.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-stats">
                        {roadmap.completedTasks} / {roadmap.totalTasks} tasks completed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="roadmap-detail">
              <div className="roadmap-detail-header">
                <button 
                  className="back-button"
                  onClick={() => setSelectedRoadmap(null)}
                >
                  <FaArrowLeft />
                  Back to Roadmaps
                </button>
                <div className="roadmap-info">
                  <h2 className="roadmap-title">{selectedRoadmapData?.title}</h2>
                  <p className="roadmap-description">{selectedRoadmapData?.description}</p>
                </div>
                <div className="roadmap-actions">
                  <button 
                    className="add-task-button"
                    onClick={() => setShowAddTaskModal(true)}
                  >
                    <FaPlus />
                    Add Task
                  </button>
                </div>
              </div>

              <div className="tasks-section">
                <div className="tasks-header">
                  <div className="filter-section">
                    <FaFilter className="filter-icon" />
                    <select 
                      value={filterLabel} 
                      onChange={(e) => setFilterLabel(e.target.value)}
                      className="filter-select"
                    >
                      <option value="">All Labels</option>
                      {studyData.availableLabels.map(label => (
                        <option key={label} value={label}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="tasks-list">
                  {selectedRoadmapData && getFilteredTasks(selectedRoadmapData.tasks).map(task => (
                    <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                      <div className="task-checkbox">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTaskCompletion(selectedRoadmap, task.id)}
                        />
                      </div>
                      <div className="task-content">
                        <h4 className="task-title">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                        <div className="task-labels">
                          {task.labels.map(label => (
                            <span key={label} className="task-label">{label}</span>
                          ))}
                        </div>
                        <div className="task-meta">
                          <span className="task-date">
                            Created: {new Date(task.createdAt).toLocaleDateString()}
                          </span>
                          {task.completedAt && (
                            <span className="task-date">
                              Completed: {new Date(task.completedAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add Task Modal */}
        {showAddTaskModal && (
          <div className="modal-overlay" onClick={() => setShowAddTaskModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Add New Task</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowAddTaskModal(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Task Title</label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter task title..."
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter task description..."
                    rows={3}
                  />
                </div>
                <div className="form-group">
                  <label>Labels</label>
                  <div className="labels-section">
                    <div className="selected-labels">
                      {newTask.labels.map(label => (
                        <span key={label} className="selected-label">
                          {label}
                          <button onClick={() => removeLabelFromTask(label)}>
                            <FaTimes />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="available-labels">
                      {studyData.availableLabels
                        .filter(label => !newTask.labels.includes(label))
                        .map(label => (
                          <button
                            key={label}
                            className="label-button"
                            onClick={() => addLabelToTask(label)}
                          >
                            {label}
                          </button>
                        ))}
                    </div>
                    <div className="add-label">
                      <input
                        type="text"
                        placeholder="Add new label..."
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addNewLabel(e.currentTarget.value);
                            e.currentTarget.value = '';
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  className="button secondary"
                  onClick={() => setShowAddTaskModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="button primary"
                  onClick={addNewTask}
                  disabled={!newTask.title.trim()}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;