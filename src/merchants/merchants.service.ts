import { Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import merchantinfo from '../../mockData/mockMerchants.json';
import customerInfo from '../../mockData/mockCustomers.json';
@Injectable()
export class MerchantsService {
  merchantData: any[] = merchantinfo;
  create(createMerchantDto: CreateMerchantDto) {
    return 'This action adds a new merchant';
  }

  findAll() {
    return this.merchantData;
  }

  findOne(id: string) {
    return this.merchantData.find((x) => x.id === id);
  }

  // update(id: number, updateMerchantDto: UpdateMerchantDto) {
  //   return `This action updates a #${id} merchant`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} merchant`;
  // }
}
