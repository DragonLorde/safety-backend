import mongoose from 'mongoose'

const complaints = new mongoose.Schema({
  complaintsId: {
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
  dateOfComplaints: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  violation: {
    type: String,
    required: true,
  },
})

const ComplaintsSchema = mongoose.model('complaints', complaints)

export default ComplaintsSchema
