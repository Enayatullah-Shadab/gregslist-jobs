import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    location: { type: String, required: true },
    position: { type: String, required: true },
    qualification: { type: Number, required: true },
    benifits: { type: String, required: true },
    shift: { type: String, default: 'day shift' },
    salary: { type: Number, required: true, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
