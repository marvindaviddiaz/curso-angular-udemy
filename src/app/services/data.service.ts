import { LogService } from './log.service'
import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class DataService {

  pushData = new EventEmitter();
  private data: string[] = [];

  constructor(private logService: LogService) { }

  addData(n: string) {
    this.data.push(n);
    this.logService.writeToLog('Save Item: ' + n);
  }

  getData() {
    return this.data;
  }

  pushDataMethod(value: String){
    this.pushData.emit(value);
  }
}
