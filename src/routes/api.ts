import {Express, Request, Response} from "express";
import {WhoAmIResponse} from "../types";
import User from "../modules/User";

// Handle the test route
const handleApiTestRoute = (req: Request, res: Response) => {
  res.json({message: "Test endpoint"});
}

// Handle the whoami route
const handleWhoAmIRoute = (req: Request, res: Response) => {
  const {getUserHeaders} = User;
  const whoami: WhoAmIResponse = getUserHeaders(req);
  res.json(whoami);
}

/**
 * Get API routes
 * @param app
 */
export default function getApiRoutes(app: Express) {
  app.get("/api/test", function(req: Request, res: Response) {
    return handleApiTestRoute(req, res);
  });

  app.get(`/api/whoami`, function(req: Request, res: Response) {
    return handleWhoAmIRoute(req, res);
  });
}