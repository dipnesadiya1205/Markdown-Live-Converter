import { NextFunction, Request, Response } from 'express'
import { createValidationResponse } from '../../../utils/helper'
import { isEmpty, isString, isLength } from '../../../utils/validator'

class ConvertValidation {
	/**
	 * @description Convert
	 */

	convert(req: Request, res: Response, next: NextFunction) {
		const { markdownText } = req.body
		const errors: any = {}

		if (isEmpty(markdownText)) {
			errors.markdownText = res.__('CONVERT.VALIDATIONS.markdownText.required')
		} else if (!isLength(markdownText, { min: 1, max: 1024 })) {
			errors.markdownText = res.__('CONVERT.VALIDATIONS.markdownText.valid_length %s %s', '1', '1024')
		} else if (!isString(markdownText)) {
			errors.markdownText = res.__('CONVERT.VALIDATIONS.markdownText.type')
		}

		if (Object.keys(errors).length > 0) {
			createValidationResponse(res, errors)
		} else {
			next()
		}
	}
}

export default new ConvertValidation()
