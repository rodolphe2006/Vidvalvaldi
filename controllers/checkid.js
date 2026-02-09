import { Genres } from "../view/myDb.js";

export default function checkid(req, res) {
  const id = req.params.id;

  const selected = Genres.find((s) => s.id === parseInt(id));
  if (!selected) return;

  return selected || null;
}
