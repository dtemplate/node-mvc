import { Request, Response } from 'express';

export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    return response.sendStatus(201);
  }
}
