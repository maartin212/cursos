const customerAdmin = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
      if (err) return res.json(err);
      res.render('customer-admin', { customers });
    });
  });
};

const addCustomer = (req, res) => {
  const customerData = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      'INSERT INTO customer SET ?',
      [customerData],
      (err, customers) => {
        res.redirect('/');
      },
    );
  });
};

const editCustomerForm = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
      console.log(customer[0]);
      res.render('customer-edit', { customer: customer[0] });
    });
  });
};

const editCustomer = (req, res) => {
  const { id } = req.params;
  const editedCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      'UPDATE customer set ? WHERE id = ?',
      [editedCustomer, id],
      (err, rows) => {
        res.redirect('/');
      },
    );
  });
};

const deleteCustomer = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
};

module.exports = {
  customerAdmin,
  addCustomer,
  editCustomerForm,
  editCustomer,
  deleteCustomer,
};
