import mongoose from 'mongoose'

const employersTableBriefing = new mongoose.Schema({
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
  dateOfBriefing: {
    type: String,
    required: true,
  },
  themeBriefing: {
    type: String,
    required: true,
  },
})

const EmployersTableBriefing = mongoose.model('employersTableBriefing', employersTableBriefing)

export default EmployersTableBriefing
