import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename } = req.file;

    const { _id, url } = await File.create({ name, filename });
    return res.json({
      _id,
      url,
      path: filename,
    });
  }
}

export default new FileController();
