/**
 * Mirage API mock server definition.
 *
 * @see https://miragejs.com/docs/workflow-tips/#sharing-your-server-between-development-and-testing
 *
 */
import extraValues from "@/app/lib/constants";
import { createServer } from "miragejs";
import versions from "./responses/versions";
import programmingLanguages from "./responses/programmingLanguages";
import frameworks from "./responses/frameworks";
import tools from "./responses/tools";
import databases from "./responses/databases";
import workingModes from "./responses/workingModes";

/**
 *
 * Method to order the json data
 *
 * @param {*} jsonData the starting data
 * @param {*} parameter the field to order against
 * @param {*} order the order, asc ord desc
 * @returns
 */

export const makeServer = ({ environment = "test" }) =>
  createServer({
    /**
     * The test environment
     * - turns off Mirage's artificial latency,
     * - ignores any initial seeds(),
     * - and disables logging to the console.
     *
     *  Since you'll likely be importing makeServer in several tests
     *  but only one place for development,
     *  defaulting the environment to test is a reasonable choice.
     */
    environment,
    routes() {
      this.urlPrefix = extraValues.get("BACKEND_URL");
      this.namespace = "";

      // Versions URL
      this.get(`${extraValues.get("URL_VERSIONS")}`, () => versions);

      // Programming languages URL
      this.get(`${extraValues.get("URL_PROGRAMMING_LANGUAGES")}`, () => programmingLanguages);

      // Framework URL
      this.get(`${extraValues.get("URL_FRAMEWORKS")}`, () => frameworks);

      // Tool URL
      this.get(`${extraValues.get("URL_TOOLS")}`, () => tools);

      // Databases URL
      this.get(`${extraValues.get("URL_DATABASES")}`, () => databases);

      // Working Mode URL
      this.get(`${extraValues.get("URL_WORKING_MODES")}`, () => workingModes);
    }
  });
