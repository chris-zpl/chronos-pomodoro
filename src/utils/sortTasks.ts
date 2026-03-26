/* 
Função genérica para ordenar o array de tasks

o método .sort() recebe uma função que compara dois itens (a,b) e deve retornar:
- um número NEGATIVO (-1) se "a" deve vir antes de "b".
- um número POSITIVO (1) se "a" deve vir depois de "b".
- ZERO (0) se não precisa mudar a ordem.

A função cuida de:
1. Se o valor for null, joga pro final da lista.
2. Se for número, ordena numericamente (asc ou desc).
3. Se for string, ordena alfabeticamente (asc ou desc).

o spread [...task] cria uma cópia do array original para nao alterar ele direto.
*/

import type { TaskModel } from "../models/TaskModel";

// Define os parâmetros esperados pela função
export type SortTaskOptions = {
  tasks: TaskModel[]; // Lista de tarefas que serão ordenadas
  direction?: "asc" | "desc"; // Direção da ordenação: crescente ou decrescente (opcional)
  field?: keyof TaskModel; // Qual campo da tarefa será usado para ordenar (opcional)
};

export function sortTasks({
  field = "startDate",
  direction = "desc",
  tasks = [],
}: SortTaskOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // Pegamos o valor da propriedade escolhida (ex: startDate) em cada tarega
    const aValue = a[field];
    const bValue = b[field];

    /* --- TRAVANDO VALORES NULOS --- */

    if (aValue === null && bValue === null) return 0; // Se os dois forem nulos, mantemos a ordem atual
    if (aValue === null) return 1; // Se apenas o primeiro for nulo, ele vai para o final
    if (bValue === null) return -1; // Se apenas o segundo for nulo, ele vai para o final

    /* --- COMPARAÇÃO NUMÉRICA --- */

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc"
        ? aValue - bValue // Ex: 1, 2, 3...
        : bValue - aValue; // Ex: 3, 2, 1...
    }

    /* --- COMPARAÇÃO DE STRINGS --- */

    if (typeof aValue === "string" && typeof bValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    /* --- CASOS NÃO TRATADOS --- */

    return 0; // Se não for número, string ou null, não altera a ordem
  });
}
