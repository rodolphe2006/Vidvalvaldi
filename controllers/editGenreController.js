import validation from "./validation.js";
import checkid from "./checkid.js";
import { Genres } from "../view/myDb.js";
export default function editGenreController(req, res) {
  const validated = validation(req.body, res);
  const toEdit = checkid(req, res);

  if (!validated) return;
  if (!toEdit) return res.json({ error: "genre not found" });

  toEdit.name = validated.name;
  res.json(Genres);
}
