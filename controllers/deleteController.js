import { Genres } from "../view/myDb.js";
import checkid from "./checkid.js";
function deleteController(req, res) {
  const id = req.params.id;
  const todelete = Genres.findIndex((n) => n.id === parseInt(id));
  if (todelete === -1) {
    return res.json({ error: "not found" });
  }

  Genres.splice(todelete, 1);
  res.json(Genres);
}

export default deleteController;
