module.exports = (req, res, next) => {
  const date = new Date();
  const today = date.getDate();

  if (req.method === 'POST') {
    req.body.createdAt = date.toISOString()
    req.body.updatedAt = date.toISOString()
  }

  if (req.method === 'PUT') {
    req.body.updatedAt = date.toISOString()
  }

  next()
}