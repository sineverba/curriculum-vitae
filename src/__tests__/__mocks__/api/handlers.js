import { rest } from "msw";
import { items as databases } from "../responses/databases";
import { items as frameworks } from "../responses/frameworks";

export const handlers = [
  // Databases
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/databases`,
    (req, res, ctx) => {
      return res(ctx.json(databases));
    }
  ),
  // Frameworks
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/frameworks`,
    (req, res, ctx) => {
      return res(ctx.json(frameworks));
    }
  )
];
