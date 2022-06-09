import mongoose from 'mongoose'

const validation = new mongoose.Schema({
  validationDate: {
    type: String,
    required: true,
  },
  violationCount: {
    type: Number,
    required: true,
  },
  violationEliminated: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const ValidationSchema = mongoose.model('validation', validation)

export default ValidationSchema
