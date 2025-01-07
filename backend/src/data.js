import data from "./data";

export default function handler(req, res) {
  const { categoryId } = req.query;

  if (categoryId) {
    // Fetch specific category data
    const category = data.find((item) => item.id === categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } else {
    // Fetch all categories
    const categories = data.map(({ id, category }) => ({ id, category }));
    res.status(200).json(categories);
  }
}
