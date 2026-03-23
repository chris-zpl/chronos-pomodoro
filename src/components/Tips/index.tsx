import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TipsProps = {
  state: TaskStateModel;
  nextCycleType: TaskModel["type"];
};

export function Tips({ state, nextCycleType }: TipsProps) {
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}</b> min
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}</b> min
      </span>
    ),
    longBreakTime: (
      <span>
        Descanso longo de <b>{state.config.longBreakTime}</b> min
      </span>
    ),
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}</b> min
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é um descanso curto de{" "}
        <b>{state.config.shortBreakTime}</b> min
      </span>
    ),
    longBreakTime: (
      <span>
        {" "}
        Próximo ciclo será de <b>{state.config.longBreakTime}</b> min
      </span>
    ),
  };

  return (
    <div className="formRow">
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </div>
  );
}
