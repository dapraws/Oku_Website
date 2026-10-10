import type { APIRoute, GetStaticPaths } from 'astro';
import { paint, scenes } from '../../paint';
import type { Scene } from '../../entries';

export const getStaticPaths: GetStaticPaths = () => scenes.map((scene) => ({ params: { scene } }));

export const GET: APIRoute = ({ params }) =>
  new Response(paint(params.scene as Scene), { headers: { 'Content-Type': 'image/svg+xml' } });
