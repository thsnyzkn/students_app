import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(Objects.values(req, context.models.users));
});

router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
router.post("/", (req, res) => {
  return res.send("POST Method on users resource.");
});
router.put("/:userId", (req, res) => {
  return res.send(`PUT HTTP Method on user/${req.params.userId} resource`);
});
router.delete("/:userId", (req, res) => {
  return res.send(`DELETE HTTP Method on user/${req.params.userId} resource`);
});

export default router;
