import JobSchema from '../models/Value'
import mongoose from 'mongoose'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Jobs = mongoose.model('Job', JobSchema)
}

export const dbContext = new DbContext()
