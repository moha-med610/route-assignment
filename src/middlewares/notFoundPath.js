export const notFoundPath = (req, res, next) => {
  res.status(404).json({
    msg: `The ${req.path} is not found.`,
  });
};
