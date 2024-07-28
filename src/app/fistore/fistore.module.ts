import { Module } from '@nestjs/common';
import { FileController } from './http/controllers/fistore/file.controller';

@Module({
    controllers: [
        FileController
    ],
})
export class FistoreModule {}
