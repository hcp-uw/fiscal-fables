import mongoose from "mongoose";
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  title: String,
  collection: 'courses',
});

const Course = model("Course", courseSchema);
export default Course;
