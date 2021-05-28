const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Need to be Deploy on Production" },
    "task-2": { id: "task-2", content: "Agile methodology Standards" },
    "task-3": { id: "task-3", content: "Custermers FEEDBack" },
    "task-4": { id: "task-4", content: "Testing is doing" },
    "task-5": { id: "task-5", content: "Designing is done" },
    "task-6": { id: "task-6", content: "Planning is done" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      tasksOrder: ["task-1", "task-2", "task-3"],
      isEditing: false,
    },
    "column-2": {
      id: "column-2",
      title: "ON-PROGRESS",
      tasksOrder: ["task-4"],
      isEditing: false,
    },
    "column-3": {
      id: "column-3",
      title: "DONE",
      tasksOrder: ["task-5", "task-6"],
      isEditing: false,
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
