import { create } from "zustand";

const useTaskStore = create((set) => ({
  taskCount: 0,              // initial task count
  setTaskCount: (count) => set({ taskCount: count }), // set count directly
}));

export default useTaskStore;
