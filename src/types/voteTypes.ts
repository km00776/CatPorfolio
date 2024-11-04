import {PostVoteResponseSchema, VoteSchema} from 'schemas/schemas';
import {z} from 'zod';

export type PostVoteTypeResponse = z.infer<typeof PostVoteResponseSchema>;
export type PostVoteRequestParams = {
  imageId: string;
  value: number;
};
export type VoteType = z.infer<typeof VoteSchema>;
