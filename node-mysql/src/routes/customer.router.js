const { Router } = require('express');
const {
  customerAdmin,
  addCustomer,
  editCustomerForm,
  editCustomer,
  deleteCustomer,
} = require('../controllers/customer.controller');

const router = Router();

router.get('/', customerAdmin);

router.post('/add', addCustomer);
router.get('/edit/:id', editCustomerForm);
router.post('/edit/:id', editCustomer);
router.get('/delete/:id', deleteCustomer);

module.exports = router;
