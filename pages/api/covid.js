import {rawData} from "../../data/covidData"
 
export default function handler(req, res) {
  res.status(200).json(rawData)
}
