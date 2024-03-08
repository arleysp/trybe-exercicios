const bookService = require('../services/Books.service');

const getAll = async (_req, res) => {
    const { author } = req.query;

    let books;

    if (author) {
        books = await bookService.getByAuthor(author);
    } else {
        books = await bookService.getAll();
    }

    if (!books) return res.status(404).json({ message: 'Algo deu errado' })

    res.status(200).json(books);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const book = await bookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(book);
}

const createBook = async (req, res) => {
    const { title, author, pageQuantity, publisher } = req.body;
    try {
        const newBook = await bookService.create(title, author, pageQuantity, publisher);
        return res.status(201).json(newBook);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Erro encontrado' });
    }
}

const updateBook = async (req, res) => {
    try {
        const { title, author, pageQuantity, publisher } = req.body;
        const { id } = req.params;

        const updatedBook = await bookService.update(id, title, author, pageQuantity, publisher);
        return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Erro encontrado' });
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await bookService.deleteBook(id);
        return res.status(200).json({ message: 'Usuário excluido com sucesso' });
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Erro encontrado' });
    }
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook
}