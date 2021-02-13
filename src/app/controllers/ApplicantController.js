import Applicant from '../models/Applicant';

class ApplicantController {
  async store(req, res) {
    const applicant = await Applicant.create(req.body);
    return res.json(applicant);
  }
}

export default new ApplicantController();
