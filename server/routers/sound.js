const router = require("express").Router();
const Sound = require("../models/sound");
const { v4: uuidv4 } = require("uuid");
const authExactor = require("../middlewares/authExactor");

// ekleme
// silme
// tüm soundları getirme
// public değiştirme

router.use(authExactor);

router.post("/", async (req, res) => {
  try {
    const { data, name, description, isPublic } = req.body;

    const newSound = new Sound({
      data,
      name,
      description,
      isPublic,
      userId: req.user.id,
    });
    await newSound.save();
    return res.status(200).json({ message: "Sound added", newSound });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Sound.findByIdAndDelete(id);
    return res.status(200).json({ message: "Sound deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const sounds = await Sound.find({ isPublic: true }).populate("userId");
    return res.status(200).json({ sounds });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sounds = await Sound.find({
      userId: id,
    });
    return res.status(200).json({ sounds });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.put("/public/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { isPublic } = req.body;
    await Sound.findById(id).updateOne({ isPublic });
    return res.status(200).json({ message: "Sound updated" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
