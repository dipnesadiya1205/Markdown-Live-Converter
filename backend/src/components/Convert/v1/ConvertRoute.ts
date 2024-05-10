import { Request, Response, Router } from 'express'
import Controller from './ConvertController'
import Validation from './ConvertValidation'

const router = Router()

/**
 * Markdown Text to HTML Text Convert
 * @route POST /api/v1/convert/markdown-html
 */
router.post('/markdown-html', [Validation.convert], (req: Request, res: Response) => {
	Controller.convert(req, res)
})

export default router
