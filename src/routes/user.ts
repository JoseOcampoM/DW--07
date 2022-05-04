import { request, Response, Application, Router } from "express";
import { UserController } from "../controllers/user.controllers";

export class UserRoutes{
    public userController: UserController = new UserController();
    public routes(app: Application): void{
        app.route("/usuario").get(this.userController.getAllUser)
        app.route("/usuario/:id").get(this.userController.getOneUser)
        app.route("/usuario").post(this.userController.createUser)
        // app.route("/user").patch(this.userController.updateUser)
        // app.route("/user").delete(this.userController.deleteUser)
    }
}