const router = express.Router()
import { getAllAnswers, createAnswer } from '../controllers/answer'

router.post('/', createAnswer)
router.get('/answers', getAllAnswers)