import { NextApiRequest } from 'next/types';

export interface Context {
  req: NextApiRequest;
}

interface ResolverFunction {
  [key: string]: (parent: any, args: any, context: Context, info: any) => any;
}

export interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}

export type MockModel = {
  id: string;
  name: string;
  description: string;
};

export type ArtObject = {
  id: string;
  title: string;
  principalOrFirstMaker: string;
  links: { web: string };
  webImage: { url: string };
  hasImage: boolean;
};

export type Artwork = {
  id: string;
  title: string;
  author: string;
  site_link: string;
  img_link: string;
};
