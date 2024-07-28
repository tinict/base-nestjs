import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class FileSizeValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const oneKb = 1000;
        return value.size < oneKb;
    }
};
