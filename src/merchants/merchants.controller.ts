import { Controller, Get, Param } from '@nestjs/common';
import { MerchantsService } from './merchants.service';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  // @Post()
  // create(@Body() createMerchantDto: CreateMerchantDto) {
  //   return this.merchantsService.create(createMerchantDto);
  // }

  @Get()
  findAll() {
    return this.merchantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantsService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMerchantDto: UpdateMerchantDto,
  // ) {
  //   return this.merchantsService.update(+id, updateMerchantDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.merchantsService.remove(+id);
  // }
}
