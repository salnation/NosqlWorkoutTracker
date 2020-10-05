const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise you are doing:"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of your exercise:"
      },
      duration: {
        type: Number,
        required: "Enter your exercise duration in minutes:"
      },
      distance: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      weight: {
        type: Number
      }
    }
  ]
});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;