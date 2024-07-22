import { 
    Global, 
    Module 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Tin18082002',
            database: 'base_nestjs',
            entities: [__dirname + '../../**/*.entity{.ts,.js}'],
            logging: true,
            synchronize: true,
        }),
    ],
})

export class DatabaseModule { };
