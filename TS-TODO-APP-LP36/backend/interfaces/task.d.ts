/**
 * {
 *  "id" : {
 *    task: "String",
 *    status: "Boolean"
 *
 *  }
 * }
 *
 *
 */

export interface ITask {
  task: string;
  status: boolean;
  id: number;
}

export type TodoMapType = Record<string, ITask>;
