import { openai } from '@ai-sdk/openai';
import { createServerFn } from '@tanstack/start';
import { generateObject } from 'ai';
import { z } from 'zod';

export const explanationPartSchema = z.object({
    startIndex: z.number(),
    endIndex: z.number(),
    explanation: z.string(),
});

export type TExplanationPartSchema = z.infer<typeof explanationPartSchema>;

export const inputSchema = z.object({
    query: z.string(),
    dialect: z.enum(['postgres', 'mysql', 'sqlite', 'mssql', 'other']).default('postgres'),
});

export type TInputSchema = z.infer<typeof inputSchema>;

export const explainSql = createServerFn({
    method: 'POST',
})
    .validator(inputSchema)
    .handler(async ({ data: { query, dialect } }) => {
        const { object } = await generateObject({
            model: openai('gpt-4o-mini'),
            output: 'array',
            schema: explanationPartSchema,
            prompt: `Breakdown and explain the following SQL query (dialect: ${dialect}): ${query}`,
        });
        return object;
    });
