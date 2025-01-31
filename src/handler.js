import { nanoid } from 'nanoid';
import books from './books';
const addBookHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;
    const id = nanoid(16);
    finished = pageCount === readPage ? true : false;
    insertedAt = new Date().toISOString();
    updatedAt = insertedAt;

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, finished, id, insertedAt, updatedAt
    };

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;
};

module.exports = { addBookHandler };