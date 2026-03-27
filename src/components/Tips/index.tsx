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
        <b>Foque</b> por <b>{state.config.workTime}</b> min
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Descanse</b> por <b>{state.config.shortBreakTime}</b> min
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Descanse</b> por <b>{state.config.longBreakTime}</b> min
      </span>
    ),
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo será para <b>focar</b> por <b>{state.config.workTime}</b> min
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo será um <b>descanso curto</b> de <b>{state.config.shortBreakTime}</b> min
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo será um <b>descanso longo</b> de <b>{state.config.longBreakTime}</b> min
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
