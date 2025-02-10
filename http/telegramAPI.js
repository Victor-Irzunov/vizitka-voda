import axios from 'axios'

// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'
const token = '7847110489:AAG09BrMye2wZ-Vg7QevZaOVfN1vjwqoxMk'
const chat_id = '-1002280656169'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}






