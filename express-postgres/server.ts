import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select
        "title",
        "filmId"
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    if (!films) {
      throw new ClientError(404, 'films not found');
    }
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId not found');
    }
    const sql = `
      select *
        from "films"
        where "filmId" = $1;
    `;

    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, 'film not found');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (!filmId) {
      throw new ClientError(400, 'filmId required');
    }
    if (!title) {
      throw new ClientError(400, 'title required');
    }
    const sql = `
      update "films"
        set "title" = $2
        where "filmId" = $1
        returning *;
    `;
    const params = [filmId, title];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, 'film not found');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
