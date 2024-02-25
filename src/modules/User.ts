import {Request} from "express";
import {UserHeaders} from "../types";

/**
 * User module
 */
export default {
  /**
   * getUser()
   * @param req
   * Get a user's IP, language, and user agent.
   */
  getUserHeaders: (req: Request): UserHeaders => {
    return {
      ip: req.ip,
      ipv4: req.ips,
      lang: req.headers["accept-language"],
      useragent: req.headers["user-agent"]
    }
  }
}