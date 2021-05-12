import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import customerInfo from '../../mockData/mockCustomers.json';

@Injectable()
export class CustomersService {
  customerData: any[] = customerInfo;
  create(createCustomerDto: CreateCustomerDto) {
    this.pushToArray(
      Math.random().toString(36).substring(7),
      createCustomerDto,
    );
    return this.customerData;
  }

  findAll() {
    return this.customerData;
  }

  findOne(id: string) {
    return this.customerData.find((x) => x.id === id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    this.pushToArray(id, updateCustomerDto);
    return `This action updates a #${id} customer`;
  }

  remove(id: string) {
    return this.customerData.filter((x) => x.id !== id);
  }

  pushToArray(id: string, obj) {
    const updateCustomerInfo = this.customerData.find((x) => x.id === id);

    if (!updateCustomerInfo) {
      obj.id = id;
      this.customerData.push(obj);
    } else {
      Object.keys(updateCustomerInfo).forEach((key) => {
        obj.id = id;
        updateCustomerInfo[key] = obj[key];
      });
      this.customerData.push(updateCustomerInfo);
    }
    return this.customerData;
  }
}
