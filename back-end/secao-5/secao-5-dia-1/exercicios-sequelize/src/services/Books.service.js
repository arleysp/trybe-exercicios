const { Book } = require('../models');

const getAll = async () => {
    const allBooks = await Book.findAll({
        order: [['title', 'ASC']],
    });

    return allBooks;
}

const getById = async (id) => {
    const book = await Book.findByPk(id);

    return book;
}

const create = async (title, author, pageQuantity, publisher) => {
    const newBook = await Book.create({ title, author, pageQuantity, publisher });

    return newBook;
}

const update = async (id, title, author, pageQuantity, publisher) => {
    const [updatedBook] = await Book.update(
        { title, author, pageQuantity, publisher },
        { where: { id } },
    )

    console.log(updatedBook);
    return updatedBook;
}

const deleteBook = async (id) => {
    const book = await Book.destroy(
        { where: { id } }
    )

    return book;
}

const getByAuthor = async (author) => {
    const books = await Book.getAll({
        where: { author },
        order: [['title', 'ASC']]
    });

    return books;
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteBook,
    getByAuthor
}