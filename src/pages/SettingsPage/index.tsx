import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActionModel";

export function SettingsPage() {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSetting(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formErrors: Array<string> = [];

    function validationTimeInput(
      type: number,
      timeMin: number,
      timeMax: number,
      errorMessage: string,
    ) {
      if (type < timeMin || type > timeMax) {
        formErrors.push(errorMessage);
        return;
      }
    }

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Valor(es) inválido(s). Tente novamente.");
    } else {
      validationTimeInput(
        workTime,
        1,
        99,
        "Informe um valor entre 1 e 99 para foco.",
      );
      validationTimeInput(
        shortBreakTime,
        1,
        30,
        "Informe um valor entre 1 e 30 para descanso curto.",
      );
      validationTimeInput(
        longBreakTime,
        1,
        60,
        "Informe um valor entre 1 e 60 para descanso longo.",
      );
    }

    if (formErrors.length > 0) {
      showMessage.dismiss();
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });
    
    showMessage.success('Configurações salvas.')
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p className="textCenter">
          Configure os minutos para as etapas do Pomodoro.
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSetting} action="" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco (min)"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto (min)"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo (min)"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              id="longBreakTime"
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
