import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { speciality, updateUserStaff, userStaffCreate } from "@/controllers";
import { validateBody } from "@/middlewares";
import {
  createSpecialitySchema,
  createUserStaffSchema,
  updateUserStaffSchema,
} from "@/schemas/user-staff-schema";

const staffRouter = Router();
staffRouter.all("*", authenticateToken);
staffRouter.post("/create/speciality", validateBody(createSpecialitySchema), speciality);
staffRouter.post("/user", userStaffCreate);
staffRouter.put("/user/update", validateBody(updateUserStaffSchema), updateUserStaff)
export { staffRouter };
//validateBody(createUserStaffSchema),