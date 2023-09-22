import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Module,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class FilterDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
  })
  foo?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
  })
  bar?: string;
}
class QueryDTO {
  @IsObject()
  @IsOptional()
  @ValidateNested()
  @ApiProperty({
    required: false,
  })
  filter?: FilterDTO;
}

@Controller('foo')
@ApiTags('foo')
export class FooController {
  @Get('')
  @ApiOperation({})
  @ApiResponse({
    type: String,
    status: HttpStatus.OK,
  })
  @ApiQuery({ type: QueryDTO, required: false })
  @HttpCode(HttpStatus.OK)
  public async getRun(@Query() query?: QueryDTO) {
    return 'bar' + JSON.stringify(query);
  }
}

@Module({
  imports: [],
  providers: [],
  controllers: [FooController],
})
export class FooModule {}
