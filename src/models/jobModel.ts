import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salaryFromRange: {
      type: Number,
      required: true,
    },
    salaryToRange: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    workMode: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// delete old model
if (mongoose.models.jobs) {
  const JobModel = mongoose.model("jobs");
  mongoose.deleteModel(JobModel.modelName);
}
// craete new model
const Job = mongoose.model("jobs", jobSchema);
export default Job;
