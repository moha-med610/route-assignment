export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    msg: `The Route ${req.url} Was Not Found With Method ${req.method}`,
  });
};
