import { 
    Controller, 
    Post, 
    UploadedFile, 
    UploadedFiles, 
    UseInterceptors 
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'

@Controller('v1/fistore')
export class FileController {
    /**
     * Upload single file
     * @param file 
     */
    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(
        @UploadedFile() file: Express.Multer.File
    ) {
        console.log(file);
    };

    /**
     * Upload array file
     * @param files 
     */
    @Post('files')
    @UseInterceptors(FilesInterceptor('files'))
    arrayFile(
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        console.log(files);
    };
};
