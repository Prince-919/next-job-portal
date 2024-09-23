import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      required: true,
      default: "employee",
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    skills: {
      type: [],
      required: false,
    },
    education: {
      type: [],
      required: false,
    },
    experience: {
      type: [],
      required: false,
    },
    carrierObjective: {
      type: String,
      required: false,
    },
    establishmentYear: {
      type: String,
      required: false,
    },
    companySize: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// delete old model
if (mongoose.models.users) {
  const UserModel = mongoose.model("users");
  mongoose.deleteModel(UserModel.modelName);
}

// craete new model
const User = mongoose.model("users", userSchema);
export default User;
