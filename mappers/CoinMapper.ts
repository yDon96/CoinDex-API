import {ICoinDocument} from '../models/db/coin.model'
import {ICoinDTO} from '../models/dto/coin.dto'
import {Mapper} from './mapper'

export class CoinMapper implements Mapper<ICoinDocument, ICoinDTO> {
  static parseToDto(value: ICoinDocument): ICoinDTO {
    return {
      id: value._id.toString(),
      name: value.name.toString(),
      year: value.year.valueOf(),
      type: value.type.toString(),
      quantity: value.quantity.valueOf(),
    }
  }
}
