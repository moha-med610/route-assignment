import {
  createBookService,
  createMultipleBooksService,
  findBookByTitleService,
  findBooksByGenreService,
  findBooksByYearService,
  getBooksDoesNotIncludeHorrorAndScienceFictionService,
  getBooksAndSkipFirstTwoService,
  updateBookWithTitleFutureService,
  deleteAllBooksByYearService,
  aggregate1Service,
  aggregate4Service,
  aggregate3Service,
  aggregate2Service,
  findBooksWhereYearFiledIntegerService,
} from "./books.service.js";

export const createBookController = async (req, res) => {
  const { title, author, year, genres } = req.body;
  const book = await createBookService({ title, author, year, genres });

  res.status(200).json({
    book,
  });
};

export const createMultipleBooksController = async (req, res) => {
  const data = req.body;
  const book = await createMultipleBooksService(data);

  res.status(200).json({
    book,
  });
};

export const updateBookWithTitleFutureController = async (req, res) => {
  const book = await updateBookWithTitleFutureService();
  res.status(202).json({
    book,
  });
};

export const findBookByTitleController = async (req, res) => {
  const { title } = req.query;
  const book = await findBookByTitleService({ title });
  res.status(200).json({
    book,
  });
};

export const findBooksByYearController = async (req, res) => {
  const { from, to } = req.query;
  const books = await findBooksByYearService({ from, to });
  res.status(200).json({
    books,
  });
};

export const findBooksByGenreController = async (req, res) => {
  const { genres } = req.query;
  const book = await findBooksByGenreService({ genres });

  res.status(200).json({
    book,
  });
};

export const getBooksAndSkipFirstTwoController = async (req, res) => {
  const book = await getBooksAndSkipFirstTwoService();
  res.status(200).json({
    book,
  });
};

export const findBooksWhereYearFiledIntegerController = async (req, res) => {
  const book = await findBooksWhereYearFiledIntegerService();
  res.status(200).json({
    book,
  });
};

export const getBooksDoesNotIncludeHorrorAndScienceFictionController = async (
  req,
  res,
) => {
  const book = await getBooksDoesNotIncludeHorrorAndScienceFictionService();
  res.status(200).json({
    book,
  });
};

export const deleteAllBooksByYearController = async (req, res) => {
  const { year } = req.query;
  const book = await deleteAllBooksByYearService({ year });
  res.status(202).json({
    book,
  });
};

export const FilterBooksWithAggregationController = async (req, res) => {
  res.status(200).json({
    book,
  });
};

export const aggregate1Controller = async (req, res) => {
  const book = await aggregate1Service();
  res.status(200).json({
    book,
  });
};

export const aggregate2Controller = async (req, res) => {
  const book = await aggregate2Service();
  res.status(200).json({
    book,
  });
};

export const aggregate3Controller = async (req, res) => {
  const book = await aggregate3Service();
  res.status(200).json({
    book,
  });
};

export const aggregate4Controller = async (req, res) => {
  const book = await aggregate4Service();
  res.status(200).json({
    book,
  });
};
