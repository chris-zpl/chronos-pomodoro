import styles from "./styles.module.css";
import { ArrowUpDownIcon, Trash2Icon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { getTaskType } from "../../utils/getTaskType";
import { sortTasks, type SortTaskOptions } from "../../utils/sortTasks";
import { useState } from "react";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActionModel";

export function History() {
  const { state, dispatch } = useTaskContext();
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );
  const hasTasks = state.tasks && state.tasks.length > 0;

  function handleSortTasks({ field }: Pick<SortTaskOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";
    setSortTasksOptions({
      tasks: sortTasks({ direction: newDirection, tasks: state.tasks, field }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.action("Apagar histórico", "Tem certeza que deseja apagar tudo?", (confirm) => {
      if (confirm) {
        dispatch({ type: TaskActionTypes.RESET_STATE });
        showMessage.success("Histórico apagado com sucesso.");
      }
    });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<Trash2Icon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              />
            </span>
          )}
        </Heading>
      </Container>
      <Container>
        {hasTasks ? (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: "name" })}
                    className={styles.thSort}
                  >
                    <span>
                      Tarefa <ArrowUpDownIcon width={16} strokeWidth={2} />{" "}
                    </span>
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "duration" })}
                    className={styles.thSort}
                  >
                    <span>
                      Duração{" "}
                      <ArrowUpDownIcon width={16} strokeWidth={2} />{" "}
                    </span>
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: "startDate" })}
                    className={styles.thSort}
                  >
                    <span>
                      Data <ArrowUpDownIcon width={16} strokeWidth={2} />{" "}
                    </span>
                  </th>
                  <th>
                    <span>Status</span>
                  </th>
                  <th>
                    <span>Tipo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortTasksOptions.tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{getTaskType(task.type)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.responsiveTableWithoutContent}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <span>Nenhuma tarefa realizada.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}
