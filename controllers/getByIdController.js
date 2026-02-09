import checkid from "./checkid.js";
export default function getByIdController(req, res) {
  const chosen = checkid(req, res);
  if (!chosen) return res.json("genre not found!");
  res.json(chosen);
}
