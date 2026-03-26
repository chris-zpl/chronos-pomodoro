import type { TaskModel } from "../models/TaskModel";

const taskLabels: Record<TaskModel['type'], string> = {
  workTime: "Foco",
  shortBreakTime: "Descanso Curto",
  longBreakTime: "Descanso Longo"
};

export function getTaskType(type: TaskModel['type']) {
  return taskLabels[type];
}