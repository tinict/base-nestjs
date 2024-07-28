import { Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller('v1/fistore')
export class MediaController {
    @Post('media')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'img', maxCount: 1 },
        ])
    )
    uploadImage(
        @UploadedFiles() files: { img?: Express.Multer.File[] }
    ) {
        console.log(files);
    };
};