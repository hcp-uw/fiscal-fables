import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  title: String,
});

const Course = model('Course', courseSchema);
export default Course;
