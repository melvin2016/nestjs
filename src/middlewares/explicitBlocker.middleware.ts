import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class ExplicitBlockerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.table(`[Explicit Search] - IP:${req.ip}`);
        res.json({
            status: 403,
            message: "Your ip has been logged to ur database for searching explicit materials",
            remarks: `IP: ${req.ip}`
        })
    }
}