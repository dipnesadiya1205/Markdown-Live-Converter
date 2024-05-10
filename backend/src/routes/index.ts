import { Application } from 'express'
import ConvertRoutes from '../components/Convert/v1'

/**
 * Init All routes here
 */
export default (app: Application) => {
	app.use('/api/v1/convert', ConvertRoutes)
}
