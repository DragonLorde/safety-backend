import mongoose from 'mongoose'

const employersTable = new mongoose.Schema({
  tabId: {
    type: Number,
    required: true,
    unique: true,
  },
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
  dateOfMed: {
    type: String,
    required: true,
  },
  medForm: {
    type: String,
    required: true,
  },
})

const EmployersTableSchema = mongoose.model('employersTable', employersTable)

export default EmployersTableSchema
