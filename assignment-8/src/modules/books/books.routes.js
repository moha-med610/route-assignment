import { Router } from "express";
import {
  aggregate1Controller,
  aggregate2Controller,
  aggregate3Controller,
  aggregate4Controller,
  createBookController,
  createMultipleBooksController,
  deleteAllBooksByYearController,
  findBookByTitleController,
  findBooksByGenreController,
  findBooksByYearController,
  findBooksWhereYearFiledIntegerController,
  getBooksAndSkipFirstTwoController,
  getBooksDoesNotIncludeHorrorAndScienceFictionController,
  updateBookWithTitleFutureController,
} from "./books.controller.js";

const router = Router();

const routes = {
  createMultiBooks: "/batch",
  updateBooksWithTitleFuture: "/future",
  findBookByTitle: "/title",
  findBooksByYear: "/year",
  findBooksByGenre: "/genre",
  getBooksAndSkipFirstTwo: "/skip-limit",
  getBooksWhereFieldStoredAsInteger: "/year-integer",
  getBooksDoesNotIncludeHorrorAndScienceFiction: "/exclude-genres",
  deleteBooksPublishedBeforeYear: "/before-year",
  getBooksWithAggregation1: "/aggregate1",
  getBooksWithAggregation2: "/aggregate2",
  getBooksWithAggregation3: "/aggregate3",
  getBooksWithAggregation4: "/aggregate4",
};

router.post("/", createBookController);
router.post(routes.createMultiBooks, createMultipleBooksController);
router.patch(
  routes.updateBooksWithTitleFuture,
  updateBookWithTitleFutureController,
);
router.get(routes.findBookByTitle, findBookByTitleController);
router.get(routes.findBooksByYear, findBooksByYearController);
router.get(routes.findBooksByGenre, findBooksByGenreController);
router.get(routes.getBooksAndSkipFirstTwo, getBooksAndSkipFirstTwoController);
router.get(
  routes.getBooksWhereFieldStoredAsInteger,
  findBooksWhereYearFiledIntegerController,
);
router.get(
  routes.getBooksDoesNotIncludeHorrorAndScienceFiction,
  getBooksDoesNotIncludeHorrorAndScienceFictionController,
);
router.delete(
  routes.deleteBooksPublishedBeforeYear,
  deleteAllBooksByYearController,
);
router.get(routes.getBooksWithAggregation1, aggregate1Controller);
router.get(routes.getBooksWithAggregation2, aggregate2Controller);
router.get(routes.getBooksWithAggregation3, aggregate3Controller);
router.get(routes.getBooksWithAggregation4, aggregate4Controller);

export default router;
