import { time } from "@nativescript/core/profiling";

export async function timedExecution<T>(fn: () => T | Promise<T>): Promise<TimedResult<T>> {
  const start = time();
  const result = await fn();
  const executionTime = time() - start;

  return {
    result,
    executionTime
  };
}

export interface TimedResult<T> {
  result: T,
  executionTime: number
}
