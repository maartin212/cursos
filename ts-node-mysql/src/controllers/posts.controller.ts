import { Request, Response } from 'express';
import { connect } from '../database';
import { Post } from '../interfaces/Post.interface';

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM posts');
  return res.json(posts[0]);
}

export async function createPost(
  req: Request,
  res: Response,
): Promise<Response> {
  const newPost: Post = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO posts SET ?', [newPost]);
  return res.json('Post created');
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const conn = await connect();
  const post = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
  return res.json(post[0]);
}

export async function editPost(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const editedPost: Post = req.body;
  const conn = await connect();
  await conn.query('UPDATE posts set ? WHERE id = ?', [editedPost, id]);
  return res.json({ message: `Post ${id} edited!` });
}

export async function deletePost(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;
  const conn = await connect();
  conn.query('DELETE FROM posts WHERE id = ?', [id]);
  return res.json({ message: `Post ${id} deleted!` });
}
