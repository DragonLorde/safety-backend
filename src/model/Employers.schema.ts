import mongoose from 'mongoose'

const employersSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  patronymic: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  clothSize: {
    type: String,
    required: true,
  },
  footSize: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})

const EmployersSchema = mongoose.model('employers', employersSchema)

export default EmployersSchema
