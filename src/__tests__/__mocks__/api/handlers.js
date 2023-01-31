import { rest } from "msw";
import { items as databases } from "../responses/databases";

export const handlers = [
  // Databases
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/databases`,
    (req, res, ctx) => {
      return res(ctx.json(databases));
    }
  )
];
