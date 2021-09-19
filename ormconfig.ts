import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { OrderItem } from './src/orders/entities/order-item.entity';
import { Order } from './src/orders/entities/order.entity';
import { Payment } from './src/payments/entities/payment.entity';
import { Category } from './src/restaurants/entities/cetegory.entity';
import { Dish } from './src/restaurants/entities/dish.entity';
import { Restaurant } from './src/restaurants/entities/restaurant.entity';
import { User } from './src/users/entities/user.entity';
import { Verification } from './src/users/entities/verification.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  ...(process.env.DATABASE_URL
    ? { url: process.env.DATABASE_URL }
    : {
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      }),
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: ['src/migration/**/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  synchronize: false,
  cli: {
    migrationsDir: 'src/migration',
  },

  logging: process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'test',
};
