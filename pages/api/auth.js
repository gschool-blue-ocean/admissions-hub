import jwt from 'jsonwebtoken';

export default function authorize(req, res) {
  const { token, name } = req.body;
  if (!token || !name) {
    res.send({ valid: false });
  }
  try {
    let cred = jwt.verify(token, 'secret');
    if (cred.name === name) {
      res.send({ valid: true });
    } else {
      res.send({ valid: false });
    }
  } catch {
    res.send({ valid: false });
  }
}