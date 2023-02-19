import qs from "qs";

/**
 *
 * @param obj {username:'admin', password:'admin'}
 * @returns username=admin&password=admin
 */
export default function process(obj = {}) {
  return qs.stringify(obj);
}
