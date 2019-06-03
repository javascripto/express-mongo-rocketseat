const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.paginate({}, {
      page: Number(page),
      limit: Number(limit)
    });
    return res.json(products);
  },
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.body.id, req.body, {
      new: true
    });
    return res.json(product);
  },
  async destroy(req, res) {
    const product = await Product.findOneAndRemove({ id: req.body.id });
    return res.send();
  },
};
