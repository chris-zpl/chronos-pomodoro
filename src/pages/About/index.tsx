import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function About() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>🍅 Método Pomodoro</Heading>

          <p>
            O <strong>Método Pomodoro</strong> é uma técnica de gerenciamento de
            tempo criada por <strong>Francesco Cirillo</strong> no final da década de 1980. O
            nome "Pomodoro" vem da palavra italiana para <strong>tomate</strong>{" "}
            🍅, pois o criador utilizava um timer de cozinha em formato de
            tomate para controlar seus períodos de estudo.
          </p>

          <p>
            Essa técnica foi criada para ajudar pessoas a manterem o{" "}
            <strong>foco</strong> 🎯, evitarem <strong>distrações</strong> 📱 e melhorarem a{" "}
            <strong>produtividade</strong> 🚀. A ideia principal é dividir o
            tempo de trabalho em pequenos blocos, permitindo que o cérebro
            mantenha a concentração sem ficar sobrecarregado.
          </p>

          <h2>⏱️ Como funciona o Método Pomodoro</h2>

          <p>
            O método funciona em ciclos de tempo chamados de{" "}
            <strong>pomodoros</strong>. Cada pomodoro é um período de trabalho
            focado seguido por um pequeno descanso.
          </p>

          <ul>
            <li>📌 Escolha uma tarefa que precisa ser realizada.</li>
            <li>
              ⏳ Ajuste um temporizador para <strong>25 minutos</strong>.
            </li>
            <li>💻 Trabalhe apenas nessa tarefa até o tempo acabar.</li>
            <li>
              ☕ Faça uma pausa curta de <strong>5 minutos</strong>.
            </li>
            <li>🔁 Repita o processo.</li>
            <li>
              🛌 Após completar <strong>4 pomodoros</strong>, faça uma pausa
              maior de <strong>15 a 30 minutos</strong>.
            </li>
          </ul>

          <h2>🧠 Por que o método funciona?</h2>

          <p>
            Nosso cérebro não consegue manter concentração máxima por muitas
            horas seguidas. Ao trabalhar em períodos curtos e fazer pausas
            frequentes, evitamos o cansaço mental e conseguimos manter a
            produtividade por mais tempo.
          </p>

          <h2>✨ Benefícios do Método Pomodoro</h2>

          <ul>
            <li>🎯 Melhora o foco e a concentração.</li>
            <li>📚 Ajuda nos estudos e no trabalho.</li>
            <li>🚫 Reduz a procrastinação.</li>
            <li>⚡ Aumenta a produtividade.</li>
            <li>🧠 Evita o cansaço mental.</li>
            <li>📅 Ajuda a organizar melhor o tempo.</li>
          </ul>

          <p>
            Hoje o Método Pomodoro é amplamente utilizado por{" "}
            <strong>estudantes</strong> 🎓, <strong>programadores</strong> 👨‍💻 e profissionais de diversas áreas
            que precisam manter concentração e organizar melhor suas tarefas no
            dia a dia.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
