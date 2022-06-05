import mongoose from 'mongoose'

const validation = new mongoose.Schema({
  validationId: {
    type: Number,
    required: true,
    unique: true,
  },
  validationDate: {
    type: String,
    required: true,
  },
  violationCount: {
    type: Number,
    required: true
  },
  violationEliminated: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const ValidationSchema = mongoose.model('validation', validation)

export default ValidationSchema
