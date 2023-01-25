const express = require("express");
const mongoose = require("mongoose"); // Erase if already required
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

// Declare the Schema of the Mongo model
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  coursePrice: {
    type: Number,
    required: true,
  },
  courseAuthor: {
    type: String,
    required: true,
  },
  courseImage: {
    type: String,
    required: true,
  },
});

//Export the model
const Courses = mongoose.model("Courses", courseSchema);

app.get("/courses", async (req, res) => {
  try {
    const data = await Courses.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: message.error });
  }
});

app.get("/courses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Courses.findById(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: message.error });
  }
});

app.delete("/courses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Courses.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: message.error });
  }
});

app.post("/courses", (req, res) => {
  const newCourse = new Courses(req.body);
  newCourse.save();
  res.send({ message: "SUCCESS" });
});

// Connect MongoDB at default port 27017.
mongoose.connect(
  "mongodb+srv://abilovv599:cemi2002@cluster0.bh7quof.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  },
  app.listen(port, () =>
    console.log(`Example app listening on http://localhost:${port}/courses`)
  )
);
