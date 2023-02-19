import useUserStore from "./user";
import useEmpStore from "./emp";

// 统一导出useStore方法
export default function useStore() {
  return {
    user: useUserStore(),
    emp: useEmpStore(),
  };
}
