import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Plan and Report";
  res.locals.routes = routes;
  next();
};
