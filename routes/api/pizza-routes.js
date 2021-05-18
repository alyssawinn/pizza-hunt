const router = require('express').Router();

//instead of importing entire object, we are destructuring the method names out of imported objects to use the names directly
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza)

module.exports = router;

// ^^ same as
//router.get('/', getCallbackFunction);
//router.post('/', postCallbackFunction);