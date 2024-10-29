import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse').notNull(),
    templateSlug:varchar('templateSlug').notNull(),
    createBy:varchar('createBy').notNull(),
    createAt:varchar('createdAt')
});

