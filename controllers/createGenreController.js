import { Genres } from "../view/myDb.js";
import validation from "./validation.js";
export default function createGenreController(req, res) {
  const validated = validation(req.body, res);

  if (!validated) return;

  const newGenre = {
    id: Genres.length + 1,
    name: validated.name,
  };
  Genres.push(newGenre);
  res.json(Genres);
}
