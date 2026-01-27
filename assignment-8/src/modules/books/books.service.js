import { db } from "../../db/db.connection.js";

export const createBookService = async ({ title, author, year, genres }) => {
  const book = await db.collection("books").insertOne({
    title,
    author,
    year,
    genres,
  });
  return book;
};

export const createMultipleBooksService = async (data) => {
  const books = await db.collection("books").insertMany(data);
  return books;
};

export const updateBookWithTitleFutureService = async () => {
  const book = await db.collection("books").updateOne(
    { title: "Future" },
    {
      $set: {
        year: 2022,
      },
    },
  );

  return book;
};

export const findBookByTitleService = async ({ title }) => {
  const book = await db.collection("books").find({ title }).toArray();
  return book;
};

export const findBooksByYearService = async ({ from, to }) => {
  const books = await db
    .collection("books")
    .find({
      year: {
        $gte: Number(from),
        $lte: Number(to),
      },
    })
    .toArray();

  return books;
};

export const findBooksByGenreService = async ({ genres }) => {
  const books = await db.collection("books").find({ genres: genres }).toArray();
  return books;
};

export const getBooksAndSkipFirstTwoService = async () => {
  const books = await db.collection("books").find().skip(2).limit(3).toArray();
  return books;
};

export const findBooksWhereYearFiledIntegerService = async () => {
  const book = await db
    .collection("books")
    .find({
      year: {
        $type: "int",
      },
    })
    .toArray();

  return book;
};

export const getBooksDoesNotIncludeHorrorAndScienceFictionService =
  async () => {
    const books = await db
      .collection("books")
      .find({
        genres: {
          $nin: ["Horror", "Science Fiction"],
        },
      })
      .toArray();

    return books;
  };

export const deleteAllBooksByYearService = async ({ year }) => {
  const books = await db.collection("books").deleteMany({
    year: {
      $lt: Number(year),
    },
  });
  return books;
};

export const aggregate1Service = async () => {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: {
            $gt: 2000,
          },
        },
      },
      {
        $sort: {
          year: -1,
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
          genres: 1,
        },
      },
    ])
    .toArray();
  return books;
};

export const aggregate2Service = async () => {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $match: { year: { $gt: 2000 } },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
        },
      },
    ])
    .toArray();
  return books;
};

export const aggregate3Service = async () => {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $unwind: "$genres",
      },
      {
        $project: {
          _id: 0,
          title: 1,
          genres: 1,
        },
      },
    ])
    .toArray();
  return books;
};

export const aggregate4Service = async () => {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $lookup: {
          from: "logs",
          localField: "_id",
          foreignField: "bookId",
          as: "logs",
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
          logs: 1,
        },
      },
    ])
    .toArray();
  return books;
};
