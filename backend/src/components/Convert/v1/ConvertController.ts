import STATUS_CODES from 'http-status-codes'
import Marked from 'marked'
import { CustomRequest, CustomResponse } from '../../../environment'
import { createResponse } from '../../../utils/helper'
import { logger } from '../../../utils/logger'

class ConvertController {
	/**
	 * @description convert markdown text to html text
	 * @param req
	 * @param res
	 */
	convert(req: CustomRequest, res: CustomResponse) {
		try {
			const { markdownText } = req.body

			const data = Marked.parse(markdownText)

			if (!data) {
				throw new Error()
			}

			createResponse(res, STATUS_CODES.OK, res.__('CONVERT.SUCCESS'), { data })
		} catch (error) {
			logger.error(__filename, 'convert', req.custom.uuid, 'Error during converting markdown to html', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR_MESSAGE'))
		}
	}
}

export default new ConvertController()
