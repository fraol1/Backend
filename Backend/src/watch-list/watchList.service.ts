import { Injectable } from '@nestjs/common';

@Injectable()
export class WachtListService {
  temp: string[] = new Array();

  getHello(): string {
    return 'Hello World!';
  }

  add(data): any {
    if (!this.temp.includes(data)) {
      this.temp.push(data);
    }
  }

  refresher(): string[] {
    return this.temp;
  }
}
