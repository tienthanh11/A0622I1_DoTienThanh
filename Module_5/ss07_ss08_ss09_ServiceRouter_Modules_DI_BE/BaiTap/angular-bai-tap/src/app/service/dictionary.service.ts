import { Injectable } from '@angular/core';
import {DictionaryDao} from '../dao/DictionaryDao';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  getAllWord() {
    return DictionaryDao.dictionaryList;
  }

  translate(word: string) {
    return DictionaryDao.dictionaryList.find((w) => w.word === word);
  }
}
