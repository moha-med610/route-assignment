import { CreateLogsService } from "./logs.service.js";

export const CreateLogsController = async (req, res) => {
  const { bookId, action } = req.body;
  const logs = await CreateLogsService({ bookId, action });

  res.status(201).json({
    logs,
  });
};
