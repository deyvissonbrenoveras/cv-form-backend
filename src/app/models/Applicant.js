import mongoose from 'mongoose';

const applicantSchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  interest: { type: String, required: true },
  cv: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
  },
});

export default mongoose.model('Applicant', applicantSchema);
