import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { speciality, updateUserStaff, userStaffCreate } from "@/controllers";
import { validateBody } from "@/middlewares";
import { recepcionistCreate, recepcionistUpdate } from "@/controllers/user-recepcionist-controller/user-recepionist-controller";
import { createUserRecepcionistSchema, updateUserRecepcionistSchema } from "@/schemas/user-recepcionist-schema";

const recepcionistRouter = Router();
recepcionistRouter.all("*", authenticateToken);
recepcionistRouter.post("/", validateBody(createUserRecepcionistSchema), recepcionistCreate);
recepcionistRouter.patch("/update", validateBody(updateUserRecepcionistSchema), recepcionistUpdate);
recepcionistRouter.delete("/delete")
export { recepcionistRouter };