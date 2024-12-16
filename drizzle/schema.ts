import { relations } from 'drizzle-orm';
import {
  bigint,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  smallint,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core';

export const OrderStatus = pgEnum('OrderStatus', [
  'SUCCESSFUL',
  'FAILED',
  'PENDING',
]);

export const UserTable = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password_hash: text('password_hash').notNull(),
    first_name: text('first_name').notNull(),
    last_name: text('last_name').notNull(),
    phone_number: text('phone_number'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (table) => ({
    emailIndex: uniqueIndex('emailIndex').on(table.email),
    usernameIndex: uniqueIndex('usernameIndex').on(table.username),
  })
);

export const ProductTable = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  seller_id: uuid('seller_id')
    .references(() => SellerTable.id)
    .notNull(),
  name: text('name').notNull(),
  price: bigint('price', { mode: 'number' }).notNull(),
  quantity: integer('quantity').notNull(),
  category_id: uuid('category_id')
    .references(() => CategoryTable.id)
    .notNull(),
  image_url: text('image_url'),
});

export const SellerTable = pgTable('sellers', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id')
    .references(() => UserTable.id)
    .notNull(),
  company_name: text('company_name').notNull(),
  description: text('description').default(''),
});

export const OrderTable = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id')
    .references(() => UserTable.id)
    .notNull(),
  product_id: uuid('product_id')
    .references(() => ProductTable.id)
    .notNull(),
  quantity: smallint('quantity').notNull(),
  order_date: timestamp('order_date').defaultNow().notNull(),
  total_amount: bigint('total_amount', { mode: 'number' }).notNull(),
  status: OrderStatus('OrderStatus').default('PENDING').notNull(),
});

export const CategoryTable = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
});

//! many to many relation
export const ProductCategoryTable = pgTable(
  'product_category',
  {
    product_id: uuid('product_id')
      .references(() => ProductTable.id)
      .notNull(),
    category_id: uuid('category_id')
      .references(() => CategoryTable.id)
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.product_id, table.category_id] }),
  })
);

// RELATIONS

// one user has many orders
export const userRelations = relations(UserTable, ({ many }) => ({
  orders: many(OrderTable),
}));

export const orderRelations = relations(OrderTable, ({ one }) => ({
  user: one(UserTable, {
    fields: [OrderTable.user_id],
    references: [UserTable.id],
  }),
}));

// one seller has many products
export const sellerRelations = relations(SellerTable, ({ many }) => ({
  products: many(ProductTable),
}));

export const productsRelations = relations(ProductTable, ({ one }) => ({
  seller: one(SellerTable, {
    fields: [ProductTable.seller_id],
    references: [SellerTable.id],
  }),
}));

// many to many
// one  category can have many products
// one product can have many categories
export const productCategoryRelations = relations(
  ProductCategoryTable,
  ({ one }) => ({
    product: one(ProductTable, {
      fields: [ProductCategoryTable.product_id],
      references: [ProductTable.id],
    }),
    category: one(CategoryTable, {
      fields: [ProductCategoryTable.category_id],
      references: [CategoryTable.id],
    }),
  })
);

// types
export type ProductType = typeof ProductTable.$inferSelect;
